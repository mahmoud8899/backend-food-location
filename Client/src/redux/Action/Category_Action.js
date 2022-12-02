import * as ActionTypes from './Types'
import axios from 'axios'
import { Action_logout } from './Auth_Action'


// takes all Category .... 
// GET URL : // .................

export const AppenCategoryId = (id) => ({
    type: ActionTypes.ADD_CATEGORY_SAVE_ID,
    payload: { id }
})




// to restaurant -Public
// pagnation products...
// append.... 
export const AppendProductsWithUserId = (categoryId, data) => ({
    type: ActionTypes.ADD_PUBLIC_CATEGORY_SUCCESS,
    payload: { categoryId, data }
})

// count next pages...
export const AppenNumberNextPages = (nextpage) => ({
    type: ActionTypes.ADD_PUBLIC_CATEGORY_NUMBER,
    payload: { nextpage }
})

// to restaurant -Public
// All category 
// GET // URL : /api/category/restrange/list/:id cart info to restrange....../
export const getCategoryAction = (id) => async (dispatch, getState) => {


   
    const calculatedPage = getState()?.PagePublicCategory?.nexCategory[id]
    const listNext = calculatedPage === undefined ? id : calculatedPage

//  console.log(listNext)

    if (listNext) {
        try {

            dispatch({type :ActionTypes.ADD_PUBLIC_CATEGORY_LOADING})
            
            const { data } = await axios.get(`/api/category/restrange/list/${listNext}/`)
            dispatch(AppendProductsWithUserId(id, data))
            dispatch(AppenNumberNextPages(id))

        } catch (error) {
            dispatch({
                type: ActionTypes.ADD_PUBLIC_CATEGORY_FAIL,
                payload: error.response &&
                    error.response.data.message ?
                    error.response.data.message :
                    error.message
            })
        }
    }




}














// only admin  - Private
// Delete Category....
// url : // /api//category/:id/
export const DeleteCategoryAction = (user) => async (dispatch) => {

    try {

        dispatch({ type: ActionTypes.ADD_CATEGORY_DELETE_LOADING })
        const { data } = await axios.delete(`/api/category/${user}`)
        dispatch({ type: ActionTypes.ADD_CATEGORY_DELETE_SUCCESS, payload: data.message })
    } catch (error) {
        dispatch({
            type: ActionTypes.ADD_CATEGORY_DELETE_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}

// only admin  - Private
// Updated
// PUT : // /api/category/:id/
export const UpdatedCategoryAction = (user) => async (dispatch) => {

    try {
        // dispatch({ type: ActionTypes.ADD_CATEGORY_DELETE_LOADING })
        const { data } = await axios.put(`/api/category/${user?._id}`, user)
        dispatch({ type: ActionTypes.ADD_CATEGORY_UPDATED_SUCCESS, payload: data.message })
    } catch (error) {
        dispatch({
            type: ActionTypes.ADD_CATEGORY_DELETE_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}

// only admin  - Private
// Create category
// POST : // /category/create/
export const CategoryCategoryAction = (user) => async (dispatch, getState) => {
    try {
        // dispatch({ type: ActionTypes.ADD_CATEGORY_DELETE_LOADING })
        const { userLogin: { token } } = getState()
        const { data } = await axios.post(`/api/category/create/`,
            user,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        dispatch({ type: ActionTypes.ADD_CATEGORY_CREATE_SUCCESS, payload: data.message })
    } catch (error) {
        dispatch({
            type: ActionTypes.ADD_CATEGORY_DELETE_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}


// only admin  - Private
// get category User only admin
// GET // URL : http://localhost:8000/api/category/create/user
export const FetchCategoryUser = () => async (dispatch, getState) => {



    try {

        dispatch({ type: ActionTypes.ADD_CATEGORY_USER_LOADING })
        const { userLogin: { token } } = getState()

        const { data } = await axios.get(`/api/category/create/user/`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        dispatch({ type: ActionTypes.ADD_CATEGORY_USER_SUCCESS, payload: data })
    } catch (error) {

        const message = error.response &&
            error.response.data.message ?
            error.response.data.message :
            error.message
        if (message === 'token failed') {

            return dispatch(Action_logout())
        }
        dispatch({
            type: ActionTypes.ADD_CATEGORY_USER_FAIL,
            payload: message
        })




    }
}




