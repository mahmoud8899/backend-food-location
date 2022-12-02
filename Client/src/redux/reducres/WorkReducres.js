import * as ActionTypes from '../Action/Types'


const StateMaps = {
    loading: false,
    error: null,
    work: null,
    removework: null,
    success: null,
    update: null,
}

export const WorkReducres = (state = StateMaps, action) => {

    switch (action.type) {

        case ActionTypes.ADD_VIEWS_WORK_LOADING: return { loading: true }
        case ActionTypes.ADD_VIEWS_WORK_SUCCESS: return {
            ...state,
            work: action.payload,
            loading: false
        }
        case ActionTypes.ADD_VIEWS_WORK_REMOVE_SUCCESS: return {
            ...state,
            removework: action.payload
        }

        case ActionTypes.ADD_VIEWS_WORK_CREATE_SUCCESS: return {
            ...state,
            success: action.payload
        }

        case ActionTypes.ADD_VIEWS_WORK_UPDATE_SUCCESS: return {
            ...state,
            update: action.payload
        }
        case ActionTypes.ADD_VIEWS_WORK_FAIL: return {
            error: action.payload,
            loading: false
        }


        default: return state
    }
}