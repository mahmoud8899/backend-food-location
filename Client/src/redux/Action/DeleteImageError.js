import axios from 'axios'
import * as ActionTypes from './Types'


//Delete image
// url : /api/image
export const DeleteImageError = (user) => async (dispatch) => {


    const StringU = user?.slice(8)
    try {
        dispatch({ type: ActionTypes.ADD_IMAGE_LOADING })
        await axios.delete(`/api/mahmoud/api/${StringU}`)
        console.log('yes... remove...')
    } catch (error) {
        dispatch({
            type: ActionTypes.ADD_IMAGE_FAIL,
            payload: error.response &&
                error.response.data.message ?
                error.response.data.message :
                error.message
        })


    }
}
