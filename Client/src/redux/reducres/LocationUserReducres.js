
import * as ActionTypes from '../Action/Types'


// 
// ADD_LOACTION_LOACAL


// add Location to User and Remove
export const LocationCityUserReducres = (state= {
    locationUser: [],
    loading: false
},action) =>{
    switch(action.type){
        case ActionTypes.ADD_LOACTION_LOADING : return{
            ...state,
            loading : true
        }
        case ActionTypes.ADD_LOACTION_SUCCESSFULLY : return{
            ...state,
            locationUser : action.payload,
            loading : false
        }
        case ActionTypes.ADD_LOACTION_REMOVE : return{
            ...state,
            locationUser : [],
            loading : false
        }
        default : return state
    }
}

