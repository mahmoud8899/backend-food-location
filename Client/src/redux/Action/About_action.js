import axios from 'axios'
import * as ActionTypes from './Types'



// Views all avalbile about
// GET / URL : api/about/available/
export const ABoutAction = () => async (dispatch) => {
    try {

        dispatch({ type: ActionTypes.ADD_VIEWS_ABOUT_LOADING })
        const { data } = await axios.get('/api/about/available/')
        dispatch({ type: ActionTypes.ADD_VIEWS_ABOUT_SUCCESS, payload: data })
    } catch (error) {

        dispatch({
            type: ActionTypes.ADD_VIEWS_ABOUT_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}


// remove 
// DELETE URL api/work/about/61c1906408fe2c29541e0b36

export const AboutRemoveAction = (user) => async (dispatch,getState) => {
    try {

        const { userLogin: { token } } = getState()
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        
        const { data } = await axios.delete(`/api/about/delete/${user}`,config)
        dispatch({ type: ActionTypes.ADD_VIEWS_ABOUT_REMOVE_SUCCESS, payload: data.message })
    } catch (error) {

        dispatch({
            type: ActionTypes.ADD_VIEWS_ABOUT_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}



// create new a about 
// post URL /api/about/create/
export const CreateNewAboutAction = (user) => async (dispatch,getState) => {
    try {

        const { userLogin: { token } } = getState()
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        
        const { data } = await axios.post(`/api/about/create/`,user, config)
        dispatch({ type: ActionTypes.ADD_VIEWS_ABOUT_CREATE__SUCCESS, payload: data.message })
    } catch (error) {

        dispatch({
            type: ActionTypes.ADD_VIEWS_ABOUT_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}

// Update 
// PUT URL /api/about/update/id
export const UpdateAboutDetilasWork = (user) => async (dispatch,getState) => {
    try {

        const { userLogin: { token } } = getState()
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        
        const { data } = await axios.put(`/api/about/update/${user._id}`,user, config)
        dispatch({ type: ActionTypes.ADD_VIEWS_ABOUT_UPDATE_SUCCESS, payload: data })
    } catch (error) {

        dispatch({
            type: ActionTypes.ADD_VIEWS_ABOUT_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}