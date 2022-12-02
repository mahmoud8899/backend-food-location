import axios from 'axios'
import * as ActionTypes from './Types'



// Views all avalbile work
// GET / URL : /api/work/available/
export const workAction = () => async (dispatch) => {
    try {

        dispatch({ type: ActionTypes.ADD_VIEWS_WORK_LOADING })
        const { data } = await axios.get('/api/work/available/')
        dispatch({ type: ActionTypes.ADD_VIEWS_WORK_SUCCESS, payload: data })
    } catch (error) {

        dispatch({
            type: ActionTypes.ADD_VIEWS_WORK_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}


// remove 
// DELETE URL api/work/delete/61c1906408fe2c29541e0b36

export const RemoveAction = (user) => async (dispatch,getState) => {
    try {

        const { userLogin: { token } } = getState()
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        
        const { data } = await axios.delete(`/api/work/delete/${user}`,config)
        dispatch({ type: ActionTypes.ADD_VIEWS_WORK_REMOVE_SUCCESS, payload: data.message })
    } catch (error) {

        dispatch({
            type: ActionTypes.ADD_VIEWS_WORK_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}



// create new a work 
// post URL /api/work/create/
export const CreateNewWorkAction = (user) => async (dispatch,getState) => {
    try {

        const { userLogin: { token } } = getState()
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        
        const { data } = await axios.post(`/api/work/create/`,user, config)
        dispatch({ type: ActionTypes.ADD_VIEWS_WORK_CREATE_SUCCESS, payload: data.message })
    } catch (error) {

        dispatch({
            type: ActionTypes.ADD_VIEWS_WORK_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}

// Update 
// PUT URL /api/work/update/id
export const UpdateWorkDetilasWork = (user) => async (dispatch,getState) => {
    try {

        const { userLogin: { token } } = getState()
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        
        const { data } = await axios.put(`/api/work/update/${user._id}`,user, config)
        dispatch({ type: ActionTypes.ADD_VIEWS_WORK_UPDATE_SUCCESS, payload: data })
    } catch (error) {

        dispatch({
            type: ActionTypes.ADD_VIEWS_WORK_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}