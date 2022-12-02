import * as ActionTypes from '../Action/Types'


const StateMaps = {
    loading: false,
    error: null,
    about: null,
    removework: null,
    success: null,
    update: null,
}



export const AboutReducres = (state = StateMaps, action) => {

    switch (action.type) {

        case ActionTypes.ADD_VIEWS_ABOUT_LOADING: return { loading: true }
        case ActionTypes.ADD_VIEWS_ABOUT_SUCCESS: return {
            ...state,
            about: action.payload,
            loading: false
        }
        case ActionTypes.ADD_VIEWS_ABOUT_REMOVE_SUCCESS: return {
            ...state,
            removework: action.payload
        }

        case ActionTypes.ADD_VIEWS_ABOUT_CREATE__SUCCESS: return {
            ...state,
            success: action.payload
        }

        case ActionTypes.ADD_VIEWS_ABOUT_UPDATE_SUCCESS: return {
            ...state,
            update: action.payload
        }
        case ActionTypes.ADD_VIEWS_ABOUT_FAIL: return {
            error: action.payload,
            loading: false
        }


        default: return state
    }
}