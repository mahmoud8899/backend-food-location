import * as ActionTypes from '../Action/Types'

export const CartReducres = (state = { cartItems: [], timeBooking: [] }, action) => {
    switch (action.type) {

        case ActionTypes.CART_ADD_ITEMS:



            const item = action.payload

            const checkItems = state?.cartItems?.find((x) => x?.product === item?.product)
            if (checkItems) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) => x.product === checkItems.product ? item : x)
                }

            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }

        case ActionTypes.REMOVE_CART_ITEMS:
            //    testing console.log('remove',action.payload)
            return {
                ...state,
                cartItems: state.cartItems.filter((x) => x.product !== action.payload)
            }


            case ActionTypes.REMOVE_ALL_CARTITEMS :
                return {
                ...state,
                cartItems : []

            }

        case ActionTypes.ADD_SAVE_TIME:
            return {
                ...state,
                timeBooking: action.payload
            }

        




        default: return state
    }
}







export const CardLocalSaveReducres = (state = {
    usercard: []
}, action) => {
    switch (action.type) {

        case   ActionTypes.ADD_CARDNUMBER_SAVE: return {
            ...state,
            usercard: action.payload
        }
        case ActionTypes.ADD_CARDNUMBER_REMOVE : return {
            ...state,
            usercard : []
        }


        default: return state
    }
}