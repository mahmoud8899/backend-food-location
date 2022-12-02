import * as ActionTypes from './Types'


// remove all cart
export const RemoveAllCartOne = () => async (dispatch, getStat) => {
    //  testing   console.log('remove action coming data...',id)
    dispatch({
        type: ActionTypes.REMOVE_ALL_CARTITEMS,
    
    })
  return  localStorage.setItem(ActionTypes.SAVE_LOCAL_CH, JSON.stringify(getStat().cart.cartItems))
}


// remove Cart from items... 
export const RemoveCart_Action = (id) => async (dispatch, getStat) => {
    //  testing   console.log('remove action coming data...',id)
    dispatch({
        type: ActionTypes.REMOVE_CART_ITEMS,
        payload: id
    })
    localStorage.setItem(ActionTypes.SAVE_LOCAL_CH, JSON.stringify(getStat().cart.cartItems))
}



// save time and date.
export const Add_timeAction = (data) => async (dispatch) => {

    // console.log('action run', data)

    dispatch({ type: ActionTypes.ADD_SAVE_TIME, payload: data })

    localStorage.setItem('timeBooking', JSON.stringify(data))
}






// add cart save in loacastorage..
// save cart items 
export const AddCart_Action = (data) => async (dispatch, getStat) => {

    const FilterData = {

        cartinfo: data.cartinfo,
        qty: data.qty,
        description: data.description,
        image: data.image,
        name: data.name,
        prices: data.prices,
        product: data._id,
    }

    dispatch({ type: ActionTypes.CART_ADD_ITEMS, payload: FilterData })
    localStorage.setItem(ActionTypes.SAVE_LOCAL_CH, JSON.stringify(getStat().cart.cartItems))
    //testing console.log('save data....>....')

    return


}





// card number info 
// save cart number
export const AddCardNumberSave = (data) => async (dispatch, getState) => {

    dispatch({
        type: ActionTypes.ADD_CARDNUMBER_SAVE,
        payload: data
    })
    localStorage.setItem(ActionTypes.ADD_LOCAT_CARTNUMBER, JSON.stringify(getState().Cartnumber.usercard))

}

// card number info 
// remove cart number
export const RemoveCardNumberAction = () => async (dispatch, getState) => {

    dispatch({
        type: ActionTypes.ADD_CARDNUMBER_REMOVE,
        payload: []
    })
    localStorage.setItem(ActionTypes.ADD_LOCAT_CARTNUMBER, JSON.stringify(getState().Cartnumber.usercard))

}