import * as ActionTypes from '../Action/Types'

// public to user
// save user takeway or delivery
export const PaymentDriverselection = (state = {
    driver: null,
    loading: false,
    textdriver: null
}, action) => {


    switch (action.type) {

        case ActionTypes.DD_CC: return {
            ...state,
            loading: false
        }
        case ActionTypes.DELIVER_SAVE:
            return {
                ...state,
                driver: action.payload,
                loading: false

            }

        case ActionTypes.DRIVER_SAVE:
            return {
                ...state,
                textdriver: action.payload,
                loading : false
            }
        default: return state
    }
}


