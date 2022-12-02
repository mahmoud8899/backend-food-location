import * as ActionTypes from './Types'
import axios from 'axios'
import { Action_logout } from './Auth_Action'




// ---------------------------------------- Start Order history  - private ------------------------------------------//  

// append result orders uses.
export const AppendUserListOrders = (data) => ({
    type: ActionTypes.ADD_ORDERS_USER_SUCCESS,
    payload: data
})


// apend page number,,,
export const APPendUserOrderNumber = (nextpage) => ({
    type: ActionTypes.ADD_ORDERS_USER_NUMBER,
    payload: nextpage
})

// orders user .... 
// GET : URL : /order/userid?pageNumber=1
export const OrdersUserAction = () => async (dispatch, getState) => {

    const { userLogin: { token } } = getState()

    const CheckNumber = getState().myOrder.nextNumber

    if (CheckNumber) {
        try {

            dispatch({ type: ActionTypes.ADD_ORDERS_USER_LOADING })
            const { data } = await axios.get(`/api/order/userid?pageNumber=${CheckNumber}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            dispatch(AppendUserListOrders(data.orders))
            if (data?.pages <= 1) return dispatch(APPendUserOrderNumber(null))
            const nextpage = data?.result?.next?.page > data?.pages ? null : data?.result?.next?.page
            dispatch(APPendUserOrderNumber(nextpage))

        } catch (error) {

            const message = error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
            if (message === 'token failed') {

                return dispatch(Action_logout())
            }
            dispatch({
                type: ActionTypes.ADD_ORDERS_USER_FAIL,
                payload: message
            })
        }

    }



}

// ---------------------------------------- Start Order history ------------------------------------------//  

// ADD_ORDER_LOADING
// ADD_ORDER_FAIL
// Cancel order from user or restrurant
// PUT // private 
// url : // /api/order/cancel/ => id order
export const CancelOrderAction = (user) => async (dispatch, getState) => {
    try {
        dispatch({ type: ActionTypes.ADD_ORDER_LOADING })
        const { userLogin: { token } } = getState()

        const { data } = await axios.put(`/api/order/cancel/${user._id}`,
            user, {

            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        dispatch({ type: ActionTypes.ADD_ORDER_SUCCESS_CANCEL, payload: data.message })

    }
    catch (error) {
        const message = error.response &&
            error.response.data.message ?
            error.response.data.message :
            error.message
        if (message === 'Not authorized, token failed') {

            dispatch(Action_logout())

        }


        dispatch({
            type: ActionTypes.ADD_ORDER_FAIL,
            payload: message


        })
    }
}
















// create order to user ... 
// POST / create order..... 
export const Order_Action = (user) => async (dispatch, getState) => {
    try {
        dispatch({ type: ActionTypes.ADD_ORDER_LOADING })
        const { userLogin: { token } } = getState()

        const { data } = await axios.post(`/api/order/order/`,
            user, {

            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        dispatch({ type: ActionTypes.ADD_ORDER_SUCCESS, payload: data })

        // console.log('successful', data)

        // localStorage.removeItem('cartItems')
    }
    catch (error) {
        const message = error.response &&
            error.response.data.message ?
            error.response.data.message :
            error.message
        if (message === 'Not authorized, token failed') {

            dispatch(Action_logout())

        }


        dispatch({
            type: ActionTypes.ADD_ORDER_FAIL,
            payload: message


        })
    }
}






















// order id 
// GET // /api/order/order/id...
export const orderId_action = (id) => async (dispatch) => {
    try {

        const { data } = await axios.get(`/api/order/order/${id}`)
        dispatch({ type: ActionTypes.ADD_ORDER_ID_SUCCESS, payload: data })

        localStorage.removeItem('cartItems')
    }
    catch (error) {

        dispatch({
            type: ActionTypes.ADD_ORDER_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message


        })
    }
}








// orders max 10 some last natifation to restrange
// GER // URL : http://localhost:8000/api/order/restrange/ id restrange ///
export const OrderResturantNotifications = (id) => async (dispatch) => {


    try {
        dispatch({ type: ActionTypes.ADD_ORDER_NOTIFICATIONS_LOADING })


        const { data } = await axios.get(`/api/order/restrange/${id}`)


        // testing console.log(data)

        dispatch({ type: ActionTypes.ADD_ORDER_NOTIFICATIONS_SUCCESS, payload: data })
    } catch (error) {

        dispatch({
            type: ActionTypes.ADD_ORDER_NOTIFICATIONS_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message


        })
    }

}






// Start Orders see Admin .............................................................................................>


// dispatch({type: ActionTypes.ADD_ADMIN_ORDER_LIST_LOADING })



// apend page number,,,
export const AppendOrderNumber = (nextpage) => ({
    type: ActionTypes.ADD_SHOWS_ORDERS_RESTURANS_NUMBER,
    payload: nextpage
})
// append result to search..
export const AppendOrderShowData = (data) => ({
    type: ActionTypes.ADD_SHOWS_ORDERS_RESTURANS_SUCCESS,
    payload: data
})
// GET // /order/view/all/order/
// Only admin show orders //
export const ShowOrderAction = (id) => async (dispatch, getState) => {


    const CheckNumber = getState().TheResturantShowsOrders.ordersAllNumber
    const nextRequestPage = CheckNumber === undefined ? 1 : CheckNumber
    if (nextRequestPage) {
        try {
            const { data } = await axios.get(`/api/order/view/all/order/${id}/?pageNumber=${nextRequestPage}`)
            dispatch(AppendOrderShowData(data.product))
            if (data?.pages <= 1) return dispatch(AppendOrderNumber(null))
            const nextpage = data.result.next.page > data.pages ? null : data.result.next.page
            dispatch(AppendOrderNumber(nextpage))

        } catch (error) {

            const message = error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message

            if (message === 'token failed') {

                dispatch(Action_logout())

            }
            dispatch({
                type: ActionTypes.ADD_SHOWS_ORDERS_RESTURANS_FAIL,
                payload: message

            })
        }
    }



}



// END Orders see Admin .............................................................................................>









// // order change TO dELIVERY
// // post // url : ///order/order/change/:id/
// export const OrderDeliveryAction = (id) => async (dispatch, getState) => {
//     try {


//         const { userLogin: { token } } = getState()
//         const config = {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         }


//         const { data } = await axios.post(`/api/order/order/change/${id}`, id, config)


//         dispatch({ type: ActionTypes.ADD_ADMIN_ORDER_DELIVERY_SUCCESS, payload: data })


//     }
//     catch (error) {

//         const message = error.response &&
//             error.response.data.message ?
//             error.response.data.message :
//             error.message

//         if (message === 'token failed') {

//             dispatch(Action_logout())

//         }
//         dispatch({
//             type: ActionTypes.ADD_ADMIN_ORDER_LIST_FAIL,
//             payload: message

//         })
//     }
// }







