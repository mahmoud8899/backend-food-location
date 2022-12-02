
import { MyOderImage } from '../../../Assistant/MyOrderImage'
import { Add_timeAction } from '../../../redux/Action/Cart_Action'
import { useDispatch, useSelector } from 'react-redux'
import ImageScreen from '../../../Components/ImageScreen/ImageScreen'
import OrderTimeScreen from '../../../Components/Update/OrderTimeScreen/OrderTimeScreen'
import { useState } from 'react'
import { NewTime } from '../../../Assistant/SelctionTimeOrder'

export default function PaymentDate() {



    const dispatch = useDispatch()

    // time booking and time and day
    const cart = useSelector((state) => state?.cart)
    const { timeBooking } = cart

    // console.log(timeBooking)

    // cart info restrange... 
    const cartInfoid = useSelector((state) => state?.cartInfoid)
    const { cartinfo } = cartInfoid


    // console.log(cartinfo)


    // input save time and doys
    const [timeOrder, setTimeOrder] = useState('')
    const [dateOrder, setDateOrder] = useState('')



    // time 
    const [openchangeTime, setOpenchangeTime] = useState(false)
    // const [startDate, setStartDate] = useState(new Date())
    const HandleChangeDate = (e) => {
        dispatch(Add_timeAction({ timeOrder: null, dateOrder: null }))
        e.preventDefault()
        return setOpenchangeTime(!openchangeTime)

    }





    // time to restranges time oppen and closeee.
    const userOptimtim = {
        oppen: cartinfo?.opentime?.oppen,
        close: cartinfo?.opentime?.close
    }





    // handle time nu
    const HandleClickALL = (e) => {

        e.preventDefault()
        if (timeOrder === '') {

            let CreatenewTime = NewTime(userOptimtim, dateOrder)
            // console.log(new Date(CreatenewTime)?.toLocaleTimeString())
            setTimeOrder(new Date(CreatenewTime)?.toLocaleTimeString())
            dateOrder === '' && setDateOrder('today')
            return

        }

        const data = {
            timeOrder: timeOrder ? timeOrder : 'ok',
            dateOrder: dateOrder ? dateOrder : 'not'
        }
        dispatch(Add_timeAction(data))


        setTimeOrder('')
        setDateOrder('')



        return setOpenchangeTime(!openchangeTime)

    }


    return <div className='FIrst-how add-padding-slider'>

        <div className='how-class font-all-all-edit color-color-all'>
            När?
        </div>

        <div className='drivery-class' onClick={HandleChangeDate}>

            <ImageScreen
                ImageIcon={MyOderImage.timeblack}
                className='bike'
            />



            <div className='drivery-text'>
                <span className='font-all-all-edit'>
                    {timeBooking?.dateOrder ? timeBooking?.dateOrder : 'Så snart som möjligt'}
                    {timeBooking?.timeOrder && timeBooking?.timeOrder}

                </span>
                <span className='font-name-size-line'>
                    {timeBooking?.dateOrder ? null : `Din beställning förväntas att levereras om 10 till 30 minuter`}

                </span>

            </div>
            {openchangeTime ? null :
                <div className='change-drivery' >
                    <span className='font-all-all-edit color-color-all'>ändra</span>
                </div>
            }


        </div>
        {openchangeTime ?
            <div className='add-xpxp'  >

                <div className='add-fix-add' onChange={(e) => HandleClickALL(e)}>
                    <ImageScreen ImageIcon={MyOderImage.checkedblack} className='bike' />
                    <div className='drivery-text'>
                        <span className='font-name-size-line'>
                            {dateOrder}-{timeOrder}
                        </span>
                    </div>

                    <div className='change-drivery' onClick={(e) => HandleClickALL(e)}>
                        <span className='font-all-all-edit color-color-all'>Done</span>
                    </div>
                </div>

                <OrderTimeScreen
                    setTimeOrder={setTimeOrder}
                    setDateOrder={setDateOrder}
                    timeOrder={timeOrder}
                    cartinfo={cartinfo}
                    dateOrder={dateOrder}


                />

            </div>
            : null




        }




    </div >

}





// ref={scrollUseRef}
    // const scrollUseRef = useRef()
    // useEffect(() => {
    //     scrollUseRef.current?.scrollIntoView();
    //     scrollUseRef.current?.scrollIntoView(false);
    //     scrollUseRef.current?.scrollIntoView({ block: "end" });
    //     scrollUseRef.current?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    //     // eslint-disable-next-line
    // }, [openchangeTime])
    // const TheSaveing = (e) => {
    //     e.preventDefault()
    //     console.lo(e)
    //     console.log(timeOrder, dateOrder)
    //     // dispatch(Add_timeAction({ timeOrder, dateOrder }))
    //     return setOpenchangeTime(!openchangeTime)
    // }
