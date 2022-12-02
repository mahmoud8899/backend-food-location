import * as ActionTypes from './Types'


// remove like cart.. 
export const removeLikeAction = (id) => (dispatch, getState) => {

    dispatch({ type: ActionTypes.ADD_LIKE_REMOVE, payload: id })

    localStorage.setItem('likeCart', JSON.stringify(getState().like.likeCart))
}


// add cart  like... 
export const AddLikeCartAction = (id) => async (dispatch, getState) => {


    dispatch({
        type: ActionTypes.ADD_LIKE_CART,
        payload: id
    })


    localStorage.setItem('likeCart', JSON.stringify(getState().like.likeCart))

}