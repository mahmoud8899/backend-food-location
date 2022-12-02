import * as ActionTypes from '../Action/Types'




// user Login and sing up..............
export const LoginReducres = (state = {
    token: null,
    userInfo: {},
    forgetPassword: {},
    error: null,
    checkeduser: null,
    updatedaccount: null,

}, action) => {

    switch (action.type) {
        case ActionTypes.ADD_USER_LOADING: return { loading: true }
        case ActionTypes.SET_USER: return {
            ...state,
            userInfo: action.payload.user,
            loading: false
        }
        case ActionTypes.SET_TOKEN: return {
            ...state,
            token: action.payload.token,
            loading: false
        }

        case ActionTypes.ADD_FORGET_PASSWORD_SUCCESS: return {
            ...state,
            forgetPassword: action.payload,
            loading: false
        }

        case ActionTypes.ADD_CHANGEPASSWORD_FORGET_SUCCESS: return {
            ...state,
            changepassword: action.payload,
            loading: false
        }


        case ActionTypes.ADD_ACOUNT_USER_SUCCESS: return {
            ...state,
            updatedaccount: action.payload,
            loading: false
        }



        case ActionTypes.ADD_USER_CHECKIN: return {
            ...state,
            checkeduser: action.payload,
            loading: false
        }

        case ActionTypes.ADD_USER_FAIL: return {
            ...state,
            error: action.payload,
            loading: false
        }
        case ActionTypes.ADD_USER_RESET: return {}


        default: return state
    }
}







// add number
export const AddNumberReducres = (state = {
    successfully: null,
    loading: false,
    error: null
}, action) => {
    switch (action.type) {
        case ActionTypes.ADDTELEFONUMBER_LOADING: return { loading: true }
        case ActionTypes.ADDTELEFONUMBER: return {
            ...state,
            successfully: action.payload,
            loading: false
        }


        case ActionTypes.ADDTELEFONUMBER_FAIL: return {
            error: action.payload,
            loading: false
        }


        default: return state
    }
}








// driver ask work 
export const DriverAskWork = (state = {
    successfully: null,
    loading: false,
    error: null
}, action) => {
    switch (action.type) {
        case ActionTypes.DRIVER_WORK_LOADING: return { loading: true }
        case ActionTypes.DRIVER_WORK_SUCSSFULLY: return {
            ...state,
            successfully: action.payload,
            loading: false
        }
        case ActionTypes.DRIVER_WORK_FAIL: return {
            error: action.payload,
            loading: false
        }
        default: return state
    }
}






// add addres and save within locatstory.
export const AddAddresResducres = (
    state = {
        myAddressLocal: []
    }, action) => {
    switch (action.type) {



        case ActionTypes.ADD_ADDRESS_LOADING:
            return {
                ...state,
                loading: true
            }




        case ActionTypes.ADD_ADDRESS_LOCAL_SUCCESSFULLY:

            const Thecheck = state?.myAddressLocal?.filter((x) => x?.firstAddress === true ? x : state?.myAddressLocal)

            Thecheck.map((x) => x.firstAddress = false)

            const item = action.payload

            const checkItems = Thecheck?.find((x) => x?.address === item?.address)
            if (checkItems) {

                return {
                    ...state,
                    myAddressLocal: Thecheck.map((x) =>
                        x.address === checkItems.address ?
                            item : x
                    ),
                    loading: false,
                }

            } else {

                return {
                    ...state,
                    myAddressLocal: [...Thecheck, item],
                    loading: false
                }
            }



        // remove one address
        case ActionTypes.REMOVE_ONE_ADDRESS:

            return {
                ...state,
                myAddressLocal: state.myAddressLocal.filter((x) => x.address !== action.payload),
                loading: false,
            }

        // remove all addres 
        case ActionTypes.REMOVE_ALL_ADDRESS:
            return {
                ...state,
                myAddressLocal: [],
                loading: false,

            }





        default: return state
    }
}


