import * as ActionTypes from '../Action/Types'




// Only admin - Private
// product Updated and create and remove...
export const HandleUpdatedAndCreateProductReducres = (state = {
    error: null,
    loading: false,
    updated: null,
    created: null,
    removeproduct: null,
}, action) => {
    switch (action.type) {

        case ActionTypes.ADD_PRODUCT_UPDATED_LOADING: return {
           ...state,
           loading: true
        }

        case ActionTypes.ADD_PRODUCT_UPDATED_SUCCESS: return {
            ...state,
            updated: action.payload,
            loading: false,
        }

        case ActionTypes.ADD_PRODUCT_CREATE_SUCCESS: return {
            ...state,
            created: action.payload,
            loading: false,
        }

        case ActionTypes.ADD_PRODUCT_REMOVE_SUCCESS: return {
            ...state,
            removeproduct: action.payload,
            loading: false
        }

        case ActionTypes.ADD_PRODUCT_UPDATED_FAIL: return {
            ...state,
            error: action.payload,
            loading: false,
        }

        default: return state
    }
}

// Only admin - Private
// products to restrange...
export const PaginationProductReducres = (state = {
    categoryProductsNextPagesxp: Number(1),
    loading: false,
    error: null,
    products: [],
}, action) => {

    switch (action.type) {
        case ActionTypes.ADD_PAGINATION_PRODUCT_LOADING:
            return {
                loading: true
            }
        case ActionTypes.ADD_CATEGORYPRODUCT_APPEND:

            return {
                ...state,
                products: [...state.products, ...action.payload],
                loading: false
            };
        case ActionTypes.ADD_NUMBERNEXTPAGE_SUCCESS:
            return {
                ...state,
                categoryProductsNextPagesxp: action.payload,
                loading: false
            }
        case ActionTypes.ADD_PAGINATION_PRODUCT_FAIL: return { error: action.payload, loading: false }
        case ActionTypes.ADD_CALING_SATA: return {
            ...state,
            products: [],
            categoryProductsNextPagesxp: Number(1),
            loading: false
        }


        default: return state
    }
}
// to restaurant -Public
// show post .
export const ShowPostIDReducres = (state = {
    productId: [],
    review: []
}, action) => {
    switch (action.type) {

        case ActionTypes.ADD_PRODUCT_ID_LOADING: return {
            loading: true
        }
        case ActionTypes.ADD_PRODUCT_ID_SUCCESS: return {
            ...state,

            productId: action.payload,
            loading: false,
        }

        case ActionTypes.ADD_REVIEW_SUCCESS: return {
            ...state,
            review: action.payload,
            loading: false,
        }


        case ActionTypes.ADD_PRODUCT_ID_FAIL: return {
            ...state,
            error: action.payload,
            loading: false,
        }

        default: return state
    }
}






// to restaurant -Public
// all products...
// all products... 
export const ProductsPublicReducres = (state = {
    loading : false,
    allProducts: {},
    productNextNumber: {},
    error: null
}, action) => {

    switch (action.type) {



        case ActionTypes.ADD_PRODUCTS_PUBLIC_LOADING :
        return {
            ...state,
            loading : true,
        }
        case ActionTypes.ADD_PRODUCTS_PUBLIC_DATA:
            const categoryId = action.payload.categoryId
            return {
            
                ...state,
                allProducts: {
                    ...state.allProducts,
                    [categoryId]: (state.allProducts[categoryId] || []).concat(action.payload.data)
                },
                loading : false,

            }


        case ActionTypes.ADD_PRODUCTS_PUBLIC_NUMBER:
            return {

                ...state,
                productNextNumber: {
                    ...state.productNextNumber,
                    [action.payload.categoryId]: action.payload.nextpage,
                },
                loading : false,
            }
        case ActionTypes.ADD_PRODUCTS_PUBLIC_FAIL:
            return {
                ...state,
                error: action.payload,
                loading : false,
            }

        default: return state
    }
}







