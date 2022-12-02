import axios from 'axios'
import * as ActionTypes from './Types'



// append result to search..
export const AppendNextSearching = (nextPage) => ({
    type: ActionTypes.ADD_SEARCHING_PRODUCT_DETAILS_NUMBER,
    payload: nextPage
})


// apend page number,,,
export const AppendProductSearching = (data, LengthProduct) => ({
    type: ActionTypes.ADD_SEARCHING_PRODUCT_DETAILS_SUCCESS,
    payload: {data,LengthProduct}
})




// searching products
// GET // URL : 
export const SearchingProductsAction = (city, query = '', form) => async (dispatch, getState) => {

    const nextPage = form ? 1 : getState()?.ProductsSearching?.page

    if (nextPage) {
        try {

            dispatch({ type: ActionTypes.ADD_SEARCHING_PRODUCT_DETAILS_LOADING })

            const { data } = await axios.get(`/api/cartinfo/filter/${city.lat}/${city?.long}/?keyword=${query}&pageNumber=${nextPage}`)

            dispatch(AppendProductSearching(data.data, data.LengthProduct))

            if (data?.pages <= 1) return dispatch(AppendNextSearching(null))
            const nextpage = data?.result?.next?.page > data?.pages ? null : data?.result?.next?.page


            // console.log('nextpage', nextpage)
            dispatch(AppendNextSearching(nextpage))



        } catch (error) {
            dispatch({
                type: ActionTypes.ADD_SEARCHING_PRODUCT_DETAILS_FAIL,
                payload: error.response &&
                    error.response.data.message ?
                    error.response.data.message :
                    error.message
            })
        }
    }


}