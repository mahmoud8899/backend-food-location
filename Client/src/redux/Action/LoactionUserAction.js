
import * as ActionTypes from './Types'


// add Location User
export const LocationUserAction = (data) => (dispatch,getStat) => {
    dispatch({ type: ActionTypes.ADD_LOACTION_LOADING })

    dispatch({type : ActionTypes.ADD_LOACTION_SUCCESSFULLY , payload : data})

    localStorage.setItem(ActionTypes.ADD_LOACTION_LOACAL, JSON.stringify(getStat().locationIndex.locationUser))
    // window.onload()
}



// remove location User 
export const RemoveLocationUserAction = () =>  (dispatch, getStat) => {
    dispatch({ type: ActionTypes.ADD_LOACTION_LOADING })
    dispatch({
        type: ActionTypes.ADD_LOACTION_REMOVE,
        payload: 'remove location City.....'
    })
    localStorage.setItem(ActionTypes.ADD_LOACTION_LOACAL, JSON.stringify(getStat().locationIndex.locationUser))
}

