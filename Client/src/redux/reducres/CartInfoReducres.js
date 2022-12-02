import * as ActionTypes from '../Action/Types'






// get  all restrants och city
//  get all butiker and city 
export const CartInfoReducres = (state = {
    loading: false,
    home: [],
    error: null,
    nextNumber: Number(1),
    stores: [],
    nextstoresnumber: Number(1),

}, action) => {

    switch (action.type) {

        case ActionTypes.ADD_CART_INFO_LOADING_RESTAURANT_STORES: return {
            ...state,
            loading: true
        }

        case ActionTypes.ADD_CART_INFO_SUCCESS_RESTAURANT: return {
            ...state,
            home: [...state.home, ...action.payload],
            loading: false
        }

        case ActionTypes.ADD_CART_INFO_SUCCESS_RESTAURANT_NUMBER:
            return {
                ...state,
                nextNumber: action.payload,
                loading: false
            }




        case ActionTypes.ADD_CART_INFO_SUCCESS_BUTIK: return {
            ...state,
            stores: [...state.stores, ...action.payload],
            loading: false
        }

        case ActionTypes.ADD_CART_INFO_SUCCESS_BUTIK_NUMBER:
            return {
                ...state,
                nextstoresnumber: action.payload,
                loading: false
            }







        case ActionTypes.ADD_CART_INFO_FAIL_RESTAURANT: return {
            ...state,
            error: action.payload,
            loading: false
        }



        default: return state
    }
}








// Updated cart info
// put 
export const UpdatedCartiNFOReducres = (state = {
    loading: false,
    updated: null,
    error: null,
}, action) => {
    switch (action.type) {

        case ActionTypes.ADD_UPDATED_CARTINFO_LOADING: return { loading: true }

        case ActionTypes.ADD_UPDATED_CARTINFO_SUCCESS: return {
            ...state,
            loading: false,
            updated: action.payload
        }
        case ActionTypes.ADD_UPDATED_CARTINFO_FAIL: return {
            ...state,
            error: action.payload,
            loading: false
        }



        default: return state
    }
}







// get info user 
// GET
export const CartInfoActionResturanReducres = (state = {
    loading: false,
    info: [],
    error: null,
}, action) => {

    switch (action.type) {

        case ActionTypes.ADD_CARTINFO_RESTURANG_LOADING: return { loading: true }

        case ActionTypes.ADD_CARTINFO_RESTURANG_SUCCESS: return {
            ...state,
            loading: false,
            info: action.payload
        }
        case ActionTypes.ADD_CARTINFO_RESTURANG_FAIL: return {
            ...state,
            error: action.payload,
            loading: false
        }

        case ActionTypes.ADD_CARTINFO_RESTURANG_EMPTY:
            return {
                loading: false,
                info: [],
                error: null,
            }



        default: return state
    }
}







// get  restrange or butike info.......
// 
export const CartInfoIdReducres = (state = {
    loading: false,
    cartinfo: null,
    error: null,

}, action) => {
    switch (action.type) {

        case ActionTypes.ADD_CARTINFO_ID_LOADIN: return {
            ...state,
            loading: true
        }
        case ActionTypes.ADD_CARTINFO_ID_SUCCESS: return {
            ...state,
            cartinfo: action.payload,
            loading: false,
        }

        case ActionTypes.ADD_CARTINFO_ID_FAIL: return {
            ...state,
            error: action.payload,
            loading: false,
        }

        default: return state
    }
}



// cartinfoNumber : {}
// case ActionTypes.ADD_CARTINFO_ID_LOADIN : return {
//     ...state,
//     cartinfoNumber: {
//         ...state.cartinfoNumber,
//         [action.payload.productid]:action.payload.productid
//     }
// }






// get  new best restrant max 6
export const BestRestrantsReducres = (state = {
    loading: false,
    error: null,
    BestRestaurant: [],
}, action) => {
    switch (action.type) {

        case ActionTypes.ADD_NEW_RESTRANGE_LOADING: return {
            ...state,
            loading: true
        }
        case ActionTypes.ADD_NEW_RESTRANGE_SUCCESS: return {
            ...state,
            BestRestaurant: action.payload,
            loading: false,
        }
        case ActionTypes.ADD_NEW_RESTRANGE_FAIL: return {
            ...state,
            error: action.payload,
            loading: false,
        }

        default: return state
    }
}


// get free delivery
export const FreeDeliverReducres = (state = {
    loading: false,
    error: null,
    freedelivery: [],
}, action) => {
    switch (action.type) {

        case ActionTypes.ADD_NEW_FIRDELIVERY_LOADING: return {
            ...state,
            loading: true
        }
        case ActionTypes.ADD_NEW_FIRDELIVERY_SUCCESS: return {
            ...state,
            freedelivery: action.payload,
            loading: false,
        }

        case ActionTypes.ADD_NEW_FIRDELIVERY_FAIL: return {
            ...state,
            loading: false,
            error: action.payload
        }

        default: return state
    }
}







// get all category 
export const ALLcatgoryReducres = (
    state = {
        loading: false,
        error: null,
        category: [],
        successfully: null
    }, action) => {
    switch (action.type) {

        case ActionTypes.ADD_CATAGORY_ALL_LOADING: return {
            ...state,
            loading: true
        }
        case ActionTypes.ADD_CATAGORY_ALL_SUCCESS: return {
            ...state,
            category: action.payload,
            loading: false,
        }
        case ActionTypes.ADD_CATAGORY_ALL_CREATE: return {
            ...state,
            successfully: action.payload,
            loading: false,
        }
        case ActionTypes.ADD_CATAGORY_ALL_FAIL: return {
            ...state,
            error: action.payload,
            loading: false,
        }

        default: return state
    }
}



//rating 
//ADD_USER_RATING_FAIL
export const TheRatingReducres = (state = {
    loading: false,
    error: null,
    success: null
}, action) => {

    switch (action.type) {

        case ActionTypes.ADD_USER_RATING_LOADING: return {
            ...state,
            loading: true
        }

        case ActionTypes.ADD_USER_RATING_SUCCESS: return {
            ...state,
            success: action.payload,
            loading: false
        }
        case ActionTypes.ADD_USER_RATING_FAIL: return {
            ...state,
            error: action.payload,
            loading: false
        }

        default: return state
    }

}