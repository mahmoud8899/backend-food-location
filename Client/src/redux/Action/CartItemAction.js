import * as ActionTypes from './Types'
import axios from 'axios'
import { Action_logout, GetUserInfoAction } from './Auth_Action'
import { DeleteImageError } from './DeleteImageError'


// --------------------------------- Start pagantion scroll stores --------------------------------/

// GET ALL Cart info to butiker... 
// Url : /api/cartinfo/views/ option twe params 
// [1] : city [2] : butiker
//

export const AppendListStores = (data) => ({
    type: ActionTypes.ADD_CART_INFO_SUCCESS_BUTIK,
    payload: data
})


// apend page number,,,
export const APPendStoresNumber = (nextpage) => ({
    type: ActionTypes.ADD_CART_INFO_SUCCESS_BUTIK_NUMBER,
    payload: nextpage
})




export const FatchButik = (user) => async (dispatch, getState) => {

    const CheckNumber = getState().PageHomeRestrange.nextstoresnumber
    if (CheckNumber) {
        try {
            dispatch({ type: ActionTypes.ADD_CART_INFO_LOADING_RESTAURANT_STORES })
            const { data } = await axios.get(`/api/cartinfo/views/${user?.lat}/${user?.long}/${user.productType}/?pageNumber=${CheckNumber}`,)
            dispatch(AppendListStores(data.data))
            if (data?.pages <= 1) return dispatch(APPendStoresNumber(null))
            const nextpage = data?.result?.next?.page > data?.pages ? null : data?.result?.next?.page
            dispatch(APPendStoresNumber(nextpage))

        } catch (error) {
            dispatch({
                type: ActionTypes.ADD_CART_INFO_FAIL_RESTAURANT,
                payload: error.response &&
                    error.response.data.message ?
                    error.response.data.message :
                    error.message
            })
        }
    }



}

// --------------------------------- End pagantion scroll stores --------------------------------/







//---------------------------------- Start Pagnation scroll restrant ------------------------------/

// GET ALL Cart info to restaranges... 
// Url : /api/cartinfo/views/ option twe params [1] : city [2] : restaranges

export const AppendListRestaurant = (data) => ({
    type: ActionTypes.ADD_CART_INFO_SUCCESS_RESTAURANT,
    payload: data
})


// apend page number,,,
export const APPendRestaurantNumber = (nextpage) => ({
    type: ActionTypes.ADD_CART_INFO_SUCCESS_RESTAURANT_NUMBER,
    payload: nextpage
})





// paganation 
export const GetCartInfoHomeRestranges = (user) => async (dispatch, getState) => {


    const CheckNumber = getState().PageHomeRestrange.nextNumber
    if (CheckNumber) {
        try {

            dispatch({ type: ActionTypes.ADD_CART_INFO_LOADING_RESTAURANT_STORES })
            const { data } = await axios.get(`/api/cartinfo/views/${user?.lat}/${user?.long}/${user.productType}/?pageNumber=${CheckNumber}`,)
            dispatch(AppendListRestaurant(data.data))
            if (data?.pages <= 1) return dispatch(APPendRestaurantNumber(null))
            const nextpage = data?.result?.next?.page > data?.pages ? null : data?.result?.next?.page
            dispatch(APPendRestaurantNumber(nextpage))

        } catch (error) {
            dispatch({
                type: ActionTypes.ADD_CART_INFO_FAIL_RESTAURANT,
                payload: error.response &&
                    error.response.data.message ?
                    error.response.data.message :
                    error.message
            })
        }
    }


}

//---------------------------------- END Pagnation scroll restrant ------------------------------/



// cart Info 
// GET /URL : /api/cartinfo/info/user/
export const CartInfoActionResturan = () => async (dispatch, getState) => {
    try {
        const { userLogin: { token } } = getState()
        dispatch({ type: ActionTypes.ADD_CARTINFO_RESTURANG_LOADING })

        const { data } = await axios.get(`/api/cartinfo/info/user/`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        dispatch({ type: ActionTypes.ADD_CARTINFO_RESTURANG_SUCCESS, payload: data })
    } catch (error) {
        const message = error.response &&
            error.response.data.message ?
            error.response.data.message :
            error.message
        if (message === 'token failed') {

            return dispatch(Action_logout())
        }
        dispatch({
            type: ActionTypes.ADD_CARTINFO_RESTURANG_FAIL,
            payload: message
        })



    }
}

// get cart info
// GET / URL :/api/cartinfo/view/id
export const GetCartInfoIdAction = (ChangeParams) => async (dispatch) => {
    try {

        dispatch({ type: ActionTypes.ADD_CARTINFO_ID_LOADIN })


        const { data } = await axios.get(`/api/cartinfo/view/${ChangeParams}`)
        dispatch({ type: ActionTypes.ADD_CARTINFO_ID_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: ActionTypes.ADD_CARTINFO_ID_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}






// fir delivery 
// GET // URL :  /api/cartinfo/freedelvery/
export const FreeDeliveryAction = (user) => async (dispatch) => {
    try {
        dispatch({ type: ActionTypes.ADD_NEW_FIRDELIVERY_LOADING })

        const { data } = await axios.get(`/api/cartinfo/freedelvery/${user.lat}/${user?.long}`)
        dispatch({ type: ActionTypes.ADD_NEW_FIRDELIVERY_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: ActionTypes.ADD_NEW_FIRDELIVERY_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}






// comment.....
// POST  // URL :    /api/cartingo/comment/user/id
export const CartInfoIdRatingAction = (user, ChangeParams) => async (dispatch, getState) => {
    try {

        const { userLogin: { token } } = getState()

        dispatch({ type: ActionTypes.ADD_USER_RATING_LOADING })
        await axios.post(`/api/cartingo/comment/user/${user?._id}/`,
            user, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        dispatch({ type: ActionTypes.ADD_USER_RATING_SUCCESS, payload: 'success' })
        dispatch(GetCartInfoIdAction(ChangeParams))
    } catch (error) {

        const message = error.response &&
            error.response.data.message ?
            error.response.data.message :
            error.message
        if (message === 'token failed') {

            return dispatch(Action_logout())
        }
        dispatch({
            type: ActionTypes.ADD_USER_RATING_FAIL,
            payload: message
        })



    }
}




// get Best Restaurant
// we have twe params.... [1] : city [2] : producttypes
// GET // URL : // /api/cartinfo/best/:city/:productType/
export const BestRestaurantAction = (user) => async (dispatch) => {
    try {
        dispatch({ type: ActionTypes.ADD_NEW_RESTRANGE_LOADING })
        
        
        const { data } = await axios.get(`/api/cartinfo/best/${user?.lat}/${user?.long}/`)
        dispatch({ type: ActionTypes.ADD_NEW_RESTRANGE_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: ActionTypes.ADD_NEW_RESTRANGE_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}














// Updated cart info 
// PUL : // URL : //api/cartinfo/updated/id
export const UpdatedCartInfoAction = (user) => async (dispatch) => {

    try {

        dispatch({ type: ActionTypes.ADD_UPDATED_CARTINFO_LOADING })
        const { data } = await axios.put(`/api/cartinfo/updated/${user?._id}`, user)
        dispatch({ type: ActionTypes.ADD_UPDATED_CARTINFO_SUCCESS, payload: data })
        dispatch(CartInfoActionResturan(user._id))
    } catch (error) {
        dispatch(DeleteImageError(user?.image))
        dispatch({
            type: ActionTypes.ADD_UPDATED_CARTINFO_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}

// create cart info 
// POST // URL : /api/cartinfo/create/
export const CreateCartAction = (user) => async (dispatch, getState) => {
    try {
        dispatch({ type: ActionTypes.ADD_UPDATED_CARTINFO_LOADING })
        const { userLogin: { token } } = getState()


        await axios.post(`/api/cartinfo/create/`, user, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        dispatch({ type: ActionTypes.ADD_UPDATED_CARTINFO_SUCCESS, payload: 'Update.' })
        dispatch(CartInfoActionResturan())
        dispatch(GetUserInfoAction())

    } catch (error) {

        dispatch(DeleteImageError(user?.image))
        const message = error.response &&
            error.response.data.message ?
            error.response.data.message :
            error.message
        if (message === 'token failed') {

            return dispatch(Action_logout())
        }
        dispatch({
            type: ActionTypes.ADD_UPDATED_CARTINFO_FAIL,
            payload: message
        })
    }
}




// create Image uploading
// POST // URL : /api/uploading/
export const UpdatedImageAction = (user, updateInfo, Form) => async (dispatch) => {

    try {
        const { data } = await axios.post(`/api/uploading/`,
            user,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            })
        const userData = {
            _id: updateInfo._id,
            user: updateInfo.user,
            addressinfo: updateInfo.addressinfo,
            description: updateInfo.description,
            finishfood: updateInfo.finishfood,
            freeDelvery: updateInfo.freeDelvery,
            image: data,
            opentime: updateInfo.opentime,
            productType: updateInfo.productType,
            username: updateInfo.username,
            restrangeDriver: updateInfo.restrangeDriver,
            foodtype: updateInfo?.foodtype
        }

        console.log(userData)


        Form ? dispatch(CreateCartAction(userData)) : dispatch(UpdatedCartInfoAction(userData))

    } catch (error) {
        dispatch({
            type: ActionTypes.ADD_UPDATED_CARTINFO_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}



// loaction Path 
export const LoactionPath = (data) => async (dispatch) => {

    // console.log(data)
}




// category all restranges 
// GET Url : /api/foodtypes/view/food/types/
export const FoodTypesAction = () => async (dispatch) => {
    try {
        dispatch({ type: ActionTypes.ADD_CATAGORY_ALL_LOADING })

        const { data } = await axios.get(`/api/foodtypes/view/food/category/list/`)
        dispatch({ type: ActionTypes.ADD_CATAGORY_ALL_SUCCESS, payload: data })
    } catch (error) {
        dispatch({
            type: ActionTypes.ADD_CATAGORY_ALL_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}


// create new food type
// POST : URL : // /api/foodtypes/create/
// Prevate 
export const CreateNewfoodTypesAction = (user) => async (dispatch, getState) => {
    try {

        const { userLogin: { token } } = getState()

        dispatch({ type: ActionTypes.ADD_CATAGORY_ALL_LOADING })

        await axios.post(`/api/foodtypes/create/`,
            user,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        dispatch(FoodTypesAction())
        dispatch({ type: ActionTypes.ADD_CATAGORY_ALL_CREATE, payload: 'successfully' })
    } catch (error) {

        const message = error.response &&
            error.response.data.message ?
            error.response.data.message :
            error.message
        if (message === 'token failed') {

            return dispatch(Action_logout())
        }
        dispatch({
            type: ActionTypes.ADD_CATAGORY_ALL_FAIL,
            payload: message
        })




    }
}
























