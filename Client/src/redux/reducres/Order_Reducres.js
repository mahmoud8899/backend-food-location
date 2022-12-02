import * as ActionTypes from '../Action/Types'



// restrang orders notfiations
// ADD_ORDER_NOTIFICATIONS_LOADING
// ADD_ORDER_NOTIFICATIONS_SUCCESS
// ADD_ORDER_NOTIFICATIONS_FAIL
export const ResturantOrdersNotfications = (state = {
    loading: false,
    orderNotfications: [],
    error: null
}, action) => {

    switch (action.type) {
        case ActionTypes.ADD_ORDER_NOTIFICATIONS_LOADING: return { loading: true }
        case ActionTypes.ADD_ORDER_NOTIFICATIONS_SUCCESS:
            return {
                ...state,
                orderNotfications: action.payload,
                loading: false
            }

        case ActionTypes.ADD_ORDER_NOTIFICATIONS_FAIL:
            return {
                error: action.payload,
                loading: false
            }

            case ActionTypes.ADD_ORDER_NOTIFICATIONS_SUCCESS_EMPTY :
            return {
                loading: false,
                orderNotfications: [],
                error: null
            }


        default: return state
    }
}

// user Order ............................................................................................>
export const pagnationMyOrderReducres = (state = {
    loading: false,
    UserOrders: [],
    nextNumber: Number(1),
    error: null
}, action) => {

    switch (action.type) {

        case ActionTypes.ADD_ORDERS_USER_LOADING:
            return {
                ...state,
                loading: true
            }


        case ActionTypes.ADD_ORDERS_USER_SUCCESS:
            return {
                ...state,
                UserOrders: [...state.UserOrders, ...action.payload],
                loading: false,
            }


        case ActionTypes.ADD_ORDERS_USER_NUMBER:
            return {
                ...state,
                nextNumber: action.payload,
                loading: false,
            }


        case ActionTypes.ADD_ORDERS_USER_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false,
            }

        case ActionTypes.ADD_ORDERS_USER_EMPTY:
            return {
                ...state,
                loading: false,
                UserOrders: [],
                nextNumber: Number(1),
                error: null

            }


        default: return state
    }
}




// [1] create order and se one order
// [2] cancel order
// [3] order id
export const OrderReducres = (state = {
    createOrder: null,
    orderID: {},
    loading: false,
    ordercancel: null,
    error: null
}, action) => {
    switch (action.type) {

        case ActionTypes.ADD_ORDER_LOADING: return {
            ...state,
            loading: true
        }
        case ActionTypes.ADD_ORDER_SUCCESS: return {
            ...state,
            createOrder: action.payload,
            loading: false,

        }
        case ActionTypes.ADD_ORDER_ID_SUCCESS: return {
            ...state,
            orderID: action.payload,
            loading: false,

        }

        case ActionTypes.ADD_ORDER_SUCCESS_CANCEL: return {
            ...state,
            ordercancel: action.payload,
            loading: false
        }
        case ActionTypes.ADD_ORDER_FAIL: return {
            ...state,
            error: action.payload,
            loading: false,

        }
        default: return state
    }
}















// admin Only Show and delete.
// all Order
export const ShowOrderReducres = (state = {
    loading: false,
    error: null,
    ShowOrders: [],
    ordersAllNumber: Number(1),

}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_SHOWS_ORDERS_RESTURANS_NUMBER:
            return {
                ...state,
                ordersAllNumber: action.payload
            }

        case ActionTypes.ADD_SHOWS_ORDERS_RESTURANS_SUCCESS:
            return {
                ...state,
                ShowOrders: [...state.ShowOrders, ...action.payload],
            }

        case ActionTypes.ADD_SHOWS_ORDERS_RESTURANS_FAIL: return {
            ...state,
            error: action.payload,


        }
        case ActionTypes.ADD_SHOWS_ORDERS_RESTURANS_EMPTY : return{
            loading: false,
            error: null,
            ShowOrders: [],
            ordersAllNumber: Number(1),
        }
        default: return state
    }
}

















