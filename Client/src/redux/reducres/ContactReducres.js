import * as ActionTypes from '../Action/Types'









export const ContactReducres = (state = {
    loading: false,
    error: null,
    contact: null,
    removework: null,
    success: null,
    update: null,
}, action) => {

    switch (action.type) {

        case ActionTypes.ADD_VIEWS_CONTACT_LOADING: return { loading: true }
        case ActionTypes.ADD_VIEWS_CONTACT_SUCCESS: return {
            ...state,
            contact: action.payload,
            loading: false
        }

        case ActionTypes.ADD_VIEWS_CONTACT_REMOVE_SUCCESS: return {
            ...state,
            removework: action.payload
        }

        case ActionTypes.ADD_VIEWS_CREATE_CONTACT_SUCCESS: return {
            ...state,
            success: action.payload
        }

        case ActionTypes.ADD_VIEWS_CONTACT__UPDATE_SUCCESS: return {
            ...state,
            update: action.payload
        }

        case ActionTypes.ADD_VIEWS_CONTACT_FAIL: return {
            error: action.payload,
            loading: false
        }


        default: return state
    }
}