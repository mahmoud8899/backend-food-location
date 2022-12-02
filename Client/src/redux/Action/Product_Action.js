import * as ActionTypes from './Types'
import axios from 'axios'
import { ChangeCode } from '../../Assistant/ValidationPayment'
import { Action_logout } from './Auth_Action'
import { DeleteImageError } from './DeleteImageError'
// Only admin - Private
// Remove product from user
// // delete /product/product/:id/
export const RemoveProductAction = (user) => async (dispatch) => {

    try {

        const { data } = await axios.delete(`/api/product/product/${user}`,)
        dispatch({ type: ActionTypes.ADD_PRODUCT_REMOVE_SUCCESS, payload: data.message })

    } catch (error) {
        dispatch({
            type: ActionTypes.ADD_PRODUCT_UPDATED_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}


// comment review 
// POST  url  very / /product/product/comment/:id/
export const ReviewCommentUserAction = (user) => async (dispatch, getState) => {


    // console.log(user._id)
    try {


        const { userLogin: { token } } = getState()
        // console.log(token)
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const { data } = await axios.post(`/api/product/product/comment/${user._id}`, user, config)

        dispatch({ type: ActionTypes.ADD_REVIEW_SUCCESS, payload: data.message })
        dispatch(product_IDAction(user._id))
    } catch (error) {
        dispatch({
            type: ActionTypes.ADD_PRODUCT_ID_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}

// product id 
// GET // URL :  product/product/id
export const product_IDAction = (id) => async (dispatch) => {

    try {

        dispatch({ type: ActionTypes.ADD_PRODUCT_ID_LOADING })

        const { data } = await axios.get(`/api/product/product/details/${id}`)
        dispatch({ type: ActionTypes.ADD_PRODUCT_ID_SUCCESS, payload: data })
        // OtherParams && dispatch(AppendChangeData(data))
    } catch (error) {
        dispatch({
            type: ActionTypes.ADD_PRODUCT_ID_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}

// Only admin - Private
// Start Product Pagination  //.................................................................>
// append.... 
export const AppendProductAndCategory = (data) => ({
    type: ActionTypes.ADD_CATEGORYPRODUCT_APPEND,
    payload: data
})
// count next pages...
export const AppendNumberCategoryProduct = (nextpage) => ({
    type: ActionTypes.ADD_NUMBERNEXTPAGE_SUCCESS,
    payload: nextpage
})

// get products... 
export const productpaginationAction = (user) => async (dispatch, getState) => {
    const calculatedPage = getState()?.PaginationProducts?.categoryProductsNextPagesxp
    const nextRequestPage = calculatedPage === undefined ? 1 : calculatedPage
    if (nextRequestPage) {
        try {

            // dispatch({type : ActionTypes.ADD_PAGINATION_PRODUCT_LOADING})
            const { data } = await axios.get(`/api/product/cartinfo/${user}?pageNumber=${nextRequestPage}`)
            dispatch(AppendProductAndCategory(data.product))
            if (data?.pages <= 1) return dispatch(AppendNumberCategoryProduct(null))
            const nextpage = data?.result?.next?.page > data?.pages ? null : data?.result?.next?.page
            dispatch(AppendNumberCategoryProduct(nextpage))
            return
        } catch (error) {
            dispatch({
                type: ActionTypes.ADD_PAGINATION_PRODUCT_FAIL,
                payload: error.response &&
                    error.response.data.error ?
                    error.response.data.error :
                    error.message
            })
        }

    }

}
// End Product Pagination  //.................................................................>



// Only admin - Private
// Create Product/
// POST // URL : /api/product/create/
export const CreateNewProductAction = (user) => async (dispatch, getState) => {
    try {
        const { userLogin: { token } } = getState()
        dispatch({ type: ActionTypes.ADD_PRODUCT_UPDATED_LOADING })
        const { data } = await axios.post(`/api/product/create/`,
            user, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return dispatch({ type: ActionTypes.ADD_PRODUCT_CREATE_SUCCESS, payload: data })
    } catch (error) {

        const message = error.response &&
            error.response.data.message ?
            error.response.data.message :
            error.message

        if (message === 'token failed') {

            dispatch(Action_logout())
            // remove image uploading
            return dispatch(DeleteImageError(user.image))
            // return console.log('error token', user.image)

        }

        // remove image uploading
        dispatch(DeleteImageError(user.image))
        dispatch({
            type: ActionTypes.ADD_PRODUCT_UPDATED_FAIL,
            payload: message

        })


    }
}


// Only admin - Private
// updated product
// put  url : //  /api/product/product/updated/6210f00d5d48931ab7b5637c
export const ProductUpdatedAction = (user) => async (dispatch) => {

    try {

        dispatch({ type: ActionTypes.ADD_PRODUCT_UPDATED_LOADING })
        const { data } = await axios.put(`/api/product/product/updated/${user._id}`, user)
        dispatch({ type: ActionTypes.ADD_PRODUCT_UPDATED_SUCCESS, payload: data })
    } catch (error) {
        dispatch(DeleteImageError(user?.image))
        dispatch({
            type: ActionTypes.ADD_PRODUCT_UPDATED_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}
// Only admin - Private
// Uploading Image/
// POST // URL : /api/uploading/
export const UploadingNewImageProduct = (user, UpdateProducts, CreateProduct) => async (dispatch) => {
    try {

        dispatch({ type: ActionTypes.ADD_PRODUCT_UPDATED_LOADING })

        const { data } = await axios.post(`/api/uploading/`, user)
        const newDataUploading = {
            cartinfo: UpdateProducts?.cartinfo,
            category: ChangeCode(UpdateProducts?.category),
            description: ChangeCode(UpdateProducts?.description),
            name: ChangeCode(UpdateProducts?.name),
            popular: UpdateProducts?.popular,
            prices: UpdateProducts?.prices,
            _id: UpdateProducts?._id,
            image: data
        }
        CreateProduct ?
            dispatch(CreateNewProductAction(newDataUploading))
            : dispatch(ProductUpdatedAction(newDataUploading))

    } catch (error) {
        dispatch({
            type: ActionTypes.ADD_PRODUCT_UPDATED_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}









// to restaurant -Public
// pagnation products...
// append.... 
export const AppendProductsWithUserId = (categoryId, data) => ({
    type: ActionTypes.ADD_PRODUCTS_PUBLIC_DATA,
    payload: { categoryId, data }
})

// count next pages...
export const AppenNumberNextPages = (categoryId, nextpage) => ({
    type: ActionTypes.ADD_PRODUCTS_PUBLIC_NUMBER,
    payload: { categoryId, nextpage }
})

export const PorudtsActionPaganationPublic = (user) => async (dispatch, getState) => {

    const calculatedPage = getState()?.PagePublicProducts?.productNextNumber[user]
    const nextRequestPage = calculatedPage === undefined ? 1 : calculatedPage

    if (nextRequestPage) {

        try {
            dispatch({ type: ActionTypes.ADD_PRODUCTS_PUBLIC_LOADING })
            const { data } = await axios.get(`/api/product/cartinfo/${user}?pageNumber=${nextRequestPage}`)
            dispatch(AppendProductsWithUserId(user, data.product))
            if (data?.pages <= 1) return dispatch(AppenNumberNextPages(user, null))
            const nextpage = data?.result?.next?.page > data?.pages ? null : data?.result?.next?.page

            dispatch(AppenNumberNextPages(user, nextpage))
            return

        } catch (error) {

            dispatch({
                type: ActionTypes.ADD_PRODUCTS_PUBLIC_FAIL,
                payload: error.response &&
                    error.response.data.error ?
                    error.response.data.error :
                    error.message
            })
        }

    }

}












