import * as ActionTypes from '../Action/Types'




export const SearchingHomeReducres = (state = {
    loading: false,
    error: null,
    page: Number(0),
    searchingHome: [],
    searchingLength : Number(0)
}, action) => {

    switch (action.type) {


        case ActionTypes.ADD_SEARCHING_PRODUCT_DETAILS_LOADING:
            return {
                ...state,
                loading: false
            }


        case ActionTypes.ADD_SEARCHING_PRODUCT_DETAILS_SUCCESS:
            // console.log('successfully',action.payload.data)
            return {
                ...state,
                searchingHome: action.payload.data,
                searchingLength : action.payload.LengthProduct,
                loading: false
            }


        case ActionTypes.ADD_SEARCHING_PRODUCT_DETAILS_NUMBER :
            return {
                ...state,
                page: action.payload,
                loading: false
            }

        case ActionTypes.ADD_SEARCHING_PRODUCT_DETAILS_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false
            }


        default: return state
    }
}