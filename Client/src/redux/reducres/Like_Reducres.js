import * as ActionTypes from '../Action/Types'

// add like cart  from User... 

export const addLikeReducres = (state= {likeCart: []},action) =>{


    switch(action.type){

       case ActionTypes.ADD_LIKE_CART : 

        const likeUser = action.payload

        const checkLike = state.likeCart.find((x)=> x._id ===  likeUser._id)

        if(checkLike){

            return {
                ...state, 
                likeCart :  state.likeCart.map((x)=> x._id === checkLike._id ? likeUser : x )
            }
        }else{

            return {
                ...state, 
                likeCart : [...state.likeCart , likeUser]
            }
        }



        case ActionTypes.ADD_LIKE_REMOVE : 
        return {
            ...state,
            likeCart : state.likeCart.filter((x)=>x._id !== action.payload )
        }
       


        default : return state
    }
}