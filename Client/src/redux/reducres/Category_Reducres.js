import * as ActionTypes from '../Action/Types'



// only Admin  - Private
// remove category and Updated , create
export const UpdateRemoveReducres = (state = {
    loading: false,
    error: null,
    updated: null,
    remove: null,
    create: null,
}, action) => {
    switch (action.type) {

        case ActionTypes.ADD_CATEGORY_DELETE_LOADING:
            return {
                loading: true
            }
        case ActionTypes.ADD_CATEGORY_DELETE_SUCCESS:
            return {
                ...state,
                remove: action.payload,
                loading: false,
            }
        case ActionTypes.ADD_CATEGORY_UPDATED_SUCCESS:
            return {
                ...state,
                updated: action.payload,
                loading: false,
            }
        case ActionTypes.ADD_CATEGORY_CREATE_SUCCESS:
            return {
                ...state,
                create: action.payload,
                loading: false,
            }
        case ActionTypes.ADD_CATEGORY_DELETE_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false
            }



        default: return state
    }
}





// only Admin  - Private
// get Category Restaurant
export const CategoryReducresUser = (state =
    {
        loading: false,
        usercategory: [],
        error: null
    }, action) => {
    switch (action.type) {

        case ActionTypes.ADD_CATEGORY_USER_LOADING:
            return {
                loading: true
            }
        case ActionTypes.ADD_CATEGORY_USER_SUCCESS:
            return {
                ...state,
                usercategory: action.payload,
                loading: false
            }
        case ActionTypes.ADD_CATEGORY_USER_FAIL:
            return {

                error: action.payload,
                loading: false
            }

        case ActionTypes.ADD_CATEGORY_USER_EMPTY:
            return {
                loading: false,
                usercategory: [],
                error: null

            }



        default: return state
    }
}





// to restaurant -Public
export const CategoryPublicReducres = (state =
    {
        loading: false,
        nexCategory: {},
        category: {},
        error: null
    }, action) => {
    switch (action.type) {


        case ActionTypes.ADD_PUBLIC_CATEGORY_LOADING:
            return {
                ...state,
                loading: true,
            }
        case ActionTypes.ADD_PUBLIC_CATEGORY_NUMBER:



            return {

                ...state,
                nexCategory: {
                    ...state.nexCategory,
                    [action.payload.nextpage]: action.payload.nextpage,
                },
                loading: false
            }

        case ActionTypes.ADD_PUBLIC_CATEGORY_SUCCESS:
            const categoryId = action.payload.categoryId
            return {

                ...state,
                category: {
                    ...state.category,
                    [categoryId]: (state.category[categoryId] || []).concat(action.payload.data)
                },
                loading: false,

            }

        case ActionTypes.ADD_PUBLIC_CATEGORY_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };

        default: return state
    }
}




