import { useDispatch, useSelector } from 'react-redux'
import { ValidationPayment } from '../../Assistant/ValidationPayment'
import ButtomClick from '../../Components/Buttom/Buttom'
import Styles from '../../Components/Update/StylesComponents/style'
import CheckOutSuccess from './CheckOutSuccess'
import { FilterCartDetials } from '../../Components/Update/UseContext/FilterRestarangeProduct'
import InformationServices from './HandleDetalis/InformationServices'
import { TimePrive } from '../../Components/Update/UseContext/TimeContext'
import { Order_Action } from '../../redux/Action/Order_Action'
import {
    TotalPrice, DliveryPrice,
    Serviceavgift, LitenBeställning,
    LitenBeställningPrics
} from '../../Assistant/TotalPrice'
import { Col } from 'react-bootstrap'
import './PaymentScreen.css'
import { useContext, useEffect, useState } from 'react'
import { CollectTotla } from '../../Assistant/SelectionPayment'
import { SocketChildrenResturant } from '../../Components/SocketScreen/SocketResturant'


export default function PaymentPricesScreen(props) {
    // oppen confirm order...... 
    const [openCheckOut, setOpenCheckOut] = useState(false)
    // this is localstora cart items
    const { filterCartProduct } = useContext(FilterCartDetials)
    // run time real time
    const { dataTime } = useContext(TimePrive)

    const { socket } = useContext(SocketChildrenResturant)

    // open information serives pries
    const [show, setShow] = useState(false)








    const dispatch = useDispatch()






    const checkOrderSuccessfully = useSelector((state) => state.order?.createOrder)






    useEffect(() => {

        if (checkOrderSuccessfully !== null) {
            if (socket) {
                socket.emit('getrestrantid', checkOrderSuccessfully?.cartinfo)
            }
            return
        }

    }, [checkOrderSuccessfully,socket])





    //----------------------- Start check everything before paying  --------------------->
    // options 
    // [1] : driver method 
    // [2] : cartnumber 
    // [3] : user address 
    // [4] : time close and oppen
    // [5] :booking time if customer has
    // options
    // [1] : filterCartProduct only to User some restruans how may cart has
    // [2] : Summa artiklar  total prices -- class name  TotalPrice
    // [3] :  driver prics with  -- class name DliveryPrice
    // [4] : // order less than 120   -- class name LitenBeställning , and prices class name  LitenBeställningPrics
    // [5] :  servics 5 kr -- class name Serviceavgift
    // [6] : information  page -- class name InformationServices
    // [7] : function collect all prices... class name Max...
    // [8] : buttom real time payment to 

    // [1] :check out driver 
    const TheCheckOutDriver = useSelector((state) => state?.driverselection?.driver)
    // [2] :check out card number
    const theCheckOutCard = useSelector((state) => state?.Cartnumber?.usercard?.cartnumber)
    // [3] : check out address
    const CheckUserAddress = useSelector((state) => state?.userLogin?.userInfo?.Adress?.addres)
    // [4]: cart info restrange... 
    const CheckOutRestrange = useSelector((state) => state?.cartInfoid?.cartinfo?.opentime)
    // [5] :booking time if customer has
    const TheCheckOutBookingTime = useSelector((state) => state?.cart?.timeBooking)
    // user info 
    const UserInfo = useSelector((state) => state?.userLogin?.userInfo)
    // collect the order value
    // function Max() {
    //     // pries driver
    //     const Driver = TheCheckOutDriver?.name === 'utkörning' ? DliveryPrice : Number(0)
    //     // order less
    //     const lessOrder = LitenBeställning(TotalPrice(filterCartProduct)) ? Number(LitenBeställningPrics) : Number(0)

    //     // setItemsPrics(TotalPrice(filterCartProduct) + Driver + Serviceavgift + lessOrder)
    //     return TotalPrice(filterCartProduct) + Driver + Serviceavgift + lessOrder
    // }

    //----------------------- END check everything before paying  --------------------->


    // user info and address
    const UserHandle = {
        firstname: UserInfo?.firstname,
        lastname: UserInfo.lastname,
        yourEmail: UserInfo?.email,
        homeNumber: UserInfo?.homeNumber,
        yourAddress: UserInfo?.Adress?.addres,
        city: UserInfo?.Adress?.city,
        zipCode: UserInfo?.Adress?.zipcode,
        telephone: UserInfo.telephone,
    }
    // [1] order time and today 
    // if coustomer time
    const TimeAdd = {
        time: TheCheckOutBookingTime?.timeOrder !== null ? TheCheckOutBookingTime?.timeOrder : '',
        today: TheCheckOutBookingTime?.dateOrder !== null ? TheCheckOutBookingTime?.dateOrder : '',

    }
    // [2] order time and today 
    // other not has time after 45 minuter
    const OtherTime = {
        time: '45',
        today: 'today'
    }



    // [1] orderitems : filterCartProduct
    // [2] shippingAdress :  UserHandle
    // [3] driver : TheCheckOutDriver?.name
    // [4] orderTime :  TheCheckOutBookingTime?.timeOrder !== null ? TimeAdd : OtherTime
    // [5] paymentMethod : 'cart number'
    // [6] discountCode : ''
    // [7] driverPric :  TheCheckOutDriver?.name === 'utkörning' ? DliveryPrice : '0'
    // [8] client : 'client'
    // [8] cartinfo : props?.idcart
    // [9] itemsPrics : Max()










    // oppen check out och send create order to user...
    const HandleCreateOrder = (e) => {
        e.preventDefault()
        setOpenCheckOut(true)
        return dispatch(Order_Action({
            orderitems: filterCartProduct,
            shippingAdress: UserHandle,
            driver: TheCheckOutDriver?.name,
            orderTime: TheCheckOutBookingTime?.timeOrder !== null ? TimeAdd : OtherTime,
            paymentMethod: 'cart number',
            discountCode: '',
            driverPrice: TheCheckOutDriver?.name === 'utkörning' ? DliveryPrice : '0',
            client: 'client',
            cartinfo: props?.idcart,
            itemsPrices: CollectTotla(TheCheckOutDriver, filterCartProduct)
        }))
        // console.log('create order...')
    }












    return <Col xs={12} sm={12} md={10} lg={5} className='removePaddingmarggin' >

        <div className='parant-st'>


            <h1 className='left-max Visa-alla-title color-color-all'>Priser i SEK, inkl. moms </h1>



            <div className='parant'>

                <div className='item-pricesInclude'>
                    <span className='font-all-all-edit' >{`Summa artiklar (${filterCartProduct?.length} artikel)`}</span>
                    <span className='font-all-all-edit'>kr {TotalPrice(filterCartProduct)}</span>
                </div>

                {TheCheckOutDriver?.name === 'utkörning' ?
                    <div className='item-pricesInclude'>
                        <span className='font-all-all-edit' >Utkörning</span>
                        <span className='font-all-all-edit'>kr {DliveryPrice}</span>
                    </div>
                    : null
                }



                {LitenBeställning(TotalPrice(filterCartProduct)) &&
                    <div className='item-pricesInclude'>
                        <span className='font-all-all-edit' >Tillägg för liten beställning</span>
                        <span className='font-all-all-edit'>kr {LitenBeställningPrics}</span>
                    </div>

                }


                <div className='item-pricesInclude'>
                    <span className='font-all-all-edit' >Serviceavgift</span>
                    <span className='font-all-all-edit'>kr {Serviceavgift}</span>
                </div>



                <div className='item-information' onClick={() => setShow(!show)}>
                    <span className='font-name-size-line color-color-all' > Hur våra avgifter funkar</span>
                </div>



                <div className='item-pricesInclude-total'>
                    <ButtomClick
                        title={
                            ValidationPayment(TheCheckOutDriver, theCheckOutCard, CheckUserAddress, CheckOutRestrange, TheCheckOutBookingTime, dataTime)?.toString()
                                === 'true' ?
                                'betalning nu  ' + CollectTotla(TheCheckOutDriver, filterCartProduct) + " kr"

                                :
                                ValidationPayment(TheCheckOutDriver, theCheckOutCard, CheckUserAddress, CheckOutRestrange, TheCheckOutBookingTime, dataTime)?.toString()
                        }
                        style={Styles.buttomColorPage}
                        DisaBledStyle={Styles.Dist}
                        disabled={ValidationPayment(TheCheckOutDriver, theCheckOutCard, CheckUserAddress, CheckOutRestrange, TheCheckOutBookingTime, dataTime) !== true}
                        onClick={HandleCreateOrder}
                    />




                </div>
            </div>

        </div>

        <CheckOutSuccess
            openCheckOut={openCheckOut}
            setOpenCheckOut={setOpenCheckOut}
            dataTime={dataTime}
            CheckOutRestrange={CheckOutRestrange}
        />


        <InformationServices
            show={show}
            setShow={setShow}
        />

    </Col>


}




// <div className='item-pricesInclude'>
// <span className='item-pricesInclude-text color-family' >Totalsumma</span>
// <span className='item-pricesInclude-text color-family '>kr
//     {Totalsumma(filterCartProduct,
//         TheCheckOutDriver?.name === 'takeaway' ? null : DliveryPrice

//     )}

// </span>
// </div>
