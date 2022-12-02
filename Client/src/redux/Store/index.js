import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { createStore, applyMiddleware, combineReducers } from "redux"
import * as ActionTypes from '../Action/Types'
//ActionTypes.KEY_USER
// start now Edit .... 
//ActionTypes.KEY_TOKEN


import {
    LocationCityUserReducres
} from '../reducres/LocationUserReducres'

import {

    PaginationProductReducres,
    ShowPostIDReducres,
    HandleUpdatedAndCreateProductReducres,
    ProductsPublicReducres,


} from '../reducres/Product_Reducres'

import {
    UpdateRemoveReducres,
    CategoryReducresUser,
    CategoryPublicReducres
} from '../reducres/Category_Reducres'


import {
    WorkReducres
} from '../reducres/WorkReducres'
import {
    ContactReducres
} from '../reducres/ContactReducres'

import {
    AboutReducres
} from '../reducres/AboutReducres'


import { PaymentDriverselection } from '../reducres/PaymentReducres'

// END now Edit .... 
import {
    AddNumberReducres,
    LoginReducres,
    DriverAskWork,
    AddAddresResducres,



} from '../reducres/Auth_Reducres'




import {
    OrderReducres,
    pagnationMyOrderReducres,
    ResturantOrdersNotfications,
    ShowOrderReducres,
} from '../reducres/Order_Reducres'



import {
    addLikeReducres
} from '../reducres/Like_Reducres'

import {
    CartReducres,
    CardLocalSaveReducres
} from '../reducres/Cart_reducres'

// get all restrange products and butiker products....
import {
    CartInfoReducres,
    CartInfoIdReducres,
    BestRestrantsReducres,
    FreeDeliverReducres,
    ALLcatgoryReducres,
    CartInfoActionResturanReducres,
    UpdatedCartiNFOReducres,
    TheRatingReducres
} from '../reducres/CartInfoReducres'


import {
    SearchingHomeReducres
} from '../reducres/SearchingReducres'



const reducer = combineReducers({

    // user handle login or singup or forget password.....
    userLogin: LoginReducres,
    PageNumber: AddNumberReducres,
    driverAsk: DriverAskWork,
    locateAddress: AddAddresResducres,




    // about us....
    allwork: WorkReducres,
    allcontact: ContactReducres,
    allabout: AboutReducres,




    // product pagination and reviews...
    PaginationProducts: PaginationProductReducres,
    productID: ShowPostIDReducres,
    PageUpdatedProduct: HandleUpdatedAndCreateProductReducres,
    PagePublicProducts: ProductsPublicReducres,






    // category to restranges...
    // ListCategory: CategoryAllReducres,
    PageCategory: UpdateRemoveReducres,
    UserpageCategory: CategoryReducresUser,
    PagePublicCategory: CategoryPublicReducres,




    driverselection: PaymentDriverselection,


    // save cart number...
    // save product cart time...
    Cartnumber: CardLocalSaveReducres,
    cart: CartReducres,




    // link cart items...
    like: addLikeReducres,


    // order 
    order: OrderReducres,
    myOrder: pagnationMyOrderReducres,
    theResturant: ResturantOrdersNotfications,

    TheResturantShowsOrders: ShowOrderReducres,



    // searching products.....
    ProductsSearching: SearchingHomeReducres,






    // home page 
    PageHomeRestrange: CartInfoReducres,
    cartInfoid: CartInfoIdReducres,
    pageHomeNewBestRestrant: BestRestrantsReducres,
    pageHomeFreeDelivery: FreeDeliverReducres,
    pageHomeCategory: ALLcatgoryReducres,
    pageUserCartinfo: CartInfoActionResturanReducres,
    updatedCartInfo: UpdatedCartiNFOReducres,
    theRating: TheRatingReducres,




    // location user if not has location from brow
    locationIndex: LocationCityUserReducres,


})



// user Info
const loaclLogin = localStorage.getItem(ActionTypes.KEY_USER) ?
    JSON.parse(localStorage.getItem(ActionTypes.KEY_USER)) : []


// user token
const userToken = localStorage.getItem(ActionTypes.KEY_TOKEN) ?
    localStorage.getItem(ActionTypes.KEY_TOKEN) : null











// like cart ... 
const LocastorLike = localStorage.getItem('likeCart') ?
    JSON.parse(localStorage.getItem('likeCart')) : []



// user selection takeway or delivery
const loaclDriver = localStorage.getItem(ActionTypes.DELIVER_SAVE_LOACAL) ?
    JSON.parse(localStorage.getItem(ActionTypes.DELIVER_SAVE_LOACAL)) : null

// text driver 
const textDriverLocal = localStorage.getItem(ActionTypes.DRIVER_SAVE_LOCAL) ?
    JSON.parse(localStorage.getItem(ActionTypes.DRIVER_SAVE_LOCAL)) : null




//  booking time
const loacTime = localStorage.getItem('timeBooking') ? JSON.parse(localStorage.getItem('timeBooking')) : null

//  item cart....
const itemsLocalstorge = localStorage.getItem(ActionTypes.SAVE_LOCAL_CH) ?
    JSON.parse(localStorage.getItem(ActionTypes.SAVE_LOCAL_CH)) : []


// add cart number  
const lOCalCARDsAVE = localStorage.getItem(ActionTypes.ADD_LOCAT_CARTNUMBER) ?
    JSON.parse(localStorage.getItem(ActionTypes.ADD_LOCAT_CARTNUMBER)) : []



// add city  
const LocationUserCity = localStorage.getItem(ActionTypes.ADD_LOACTION_LOACAL) ?
    JSON.parse(localStorage.getItem(ActionTypes.ADD_LOACTION_LOACAL)) : []


// // save address user ... >
const AddressUser = localStorage.getItem(ActionTypes.ADD_ADDRESS_ADDRESS) ?
    JSON.parse(localStorage.getItem(ActionTypes.ADD_ADDRESS_ADDRESS)) : []




const intialstate = ({

    locateAddress: {
        myAddressLocal: AddressUser
    },
    cart: {
        cartItems: itemsLocalstorge,
        timeBooking: loacTime,
    },
    Cartnumber: {
        usercard: lOCalCARDsAVE
    },
    userLogin: {

        userInfo: loaclLogin,
        token: userToken

    },
    like: {
        likeCart: LocastorLike
    },

    driverselection: {
        driver: loaclDriver,
        textdriver: textDriverLocal
    },

    locationIndex: {
        locationUser: LocationUserCity
    },

})

const middleware = [thunk]

const store = createStore(reducer, intialstate, composeWithDevTools(applyMiddleware(...middleware)))

export default store