import axios from 'axios'
import * as ActionTypes from './Types'



// Views all avalbile contact
// GET / URL : /api/contcat/available/
export const ContactAction = () => async (dispatch) => {
    try {

        dispatch({ type: ActionTypes.ADD_VIEWS_CONTACT_LOADING })
        const { data } = await axios.get('/api/contcat/available/')
        dispatch({ type: ActionTypes.ADD_VIEWS_CONTACT_SUCCESS, payload: data })
    } catch (error) {

        dispatch({
            type: ActionTypes.ADD_VIEWS_CONTACT_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}




// remove 
// DELETE URL api/contcat/delete/61c1906408fe2c29541e0b36
export const RemoveContcatAction = (user) => async (dispatch,getState) => {
    try {

        const { userLogin: { token } } = getState()
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        
        const { data } = await axios.delete(`/api/contcat/delete/${user}`,config)
        dispatch({ type: ActionTypes.ADD_VIEWS_CONTACT_REMOVE_SUCCESS, payload: data.message })
    } catch (error) {

        dispatch({
            type: ActionTypes.ADD_VIEWS_CONTACT_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}



// create new a contcat 
// post URL /api/contcat/create/
export const CreateNewContcatction = (user) => async (dispatch,getState) => {
    try {

        const { userLogin: { token } } = getState()
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        
        const { data } = await axios.post(`/api/contcat/create/`,user, config)
        dispatch({ type: ActionTypes.ADD_VIEWS_CREATE_CONTACT_SUCCESS, payload: data.message })
    } catch (error) {

        dispatch({
            type: ActionTypes.ADD_VIEWS_CONTACT_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}

// Update  contcat
// PUT URL /api/contcat/update/id
export const UpdateContcatetilasWork = (user) => async (dispatch,getState) => {
    try {

        const { userLogin: { token } } = getState()
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        
        const { data } = await axios.put(`/api/contcat/update/${user._id}`,user, config)
        dispatch({ type: ActionTypes.ADD_VIEWS_CONTACT__UPDATE_SUCCESS, payload: data })
    } catch (error) {

        dispatch({
            type: ActionTypes.ADD_VIEWS_CONTACT_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })
    }
}