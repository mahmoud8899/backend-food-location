import { Container, Row, Col } from 'react-bootstrap'
import Title from '../../Components/ScreenTitle/ScreenTitle'
import PaymentAddresDriverScreen from './PaymentAddresDriverScreen'
import PaymentCartIemsScreen from './PaymentCartIemsScreen'
import PaymentCreditScreen from './PaymentCreditScreen'
import PaymentCourierScreen from './PaymentCourierScreen'
import PaymentPromoCodeScreen from './PaymentPromoCodeScreen'
import PaymentPricesScreen from './PaymentPricesScreen'
import PaymentMapsScreen from './PaymentMapsScreen'
import { useContext, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { GetCartInfoIdAction } from '../../redux/Action/CartItemAction'
import { FilterCartDetials } from '../../Components/Update/UseContext/FilterRestarangeProduct'
import LoadingErrorHandle from '../../Components/Update/LoadingErrorHandle/LoadingErrorHandle'
import { ErrorServer, LoadingSkeletonProductPage } from '../../Assistant/TextError'
import TimeContext from '../../Components/Update/UseContext/TimeContext'
import './PaymentScreen.css'
import { useParams } from 'react-router-dom'

export default function CheckOutPaymentScreen(props) {







    const ParamsId = useParams()


    // location checkout.... 
    const ChangeParams = ParamsId?.id?.replace("-", " ")



    // filter restranges some order cart.. [1] : get _id restrurange och get all cart order..
    const { setLocationNotNu } = useContext(FilterCartDetials)
    const dispatch = useDispatch()


    // cart info restrange... 
    const cartInfoid = useSelector((state) => state?.cartInfoid)
    const { loading, error, cartinfo } = cartInfoid


    // user infor  
    const checkUseriNFO = useSelector((state) => state?.userLogin?.userInfo?.firstname)






    // get restrange information for payment....
    useEffect(() => {

        if (!checkUseriNFO) {

            props?.history.goBack()


        } else if (ChangeParams) {

            return dispatch(GetCartInfoIdAction(ChangeParams))
            // return setLocationNotNu(location?.state)
        }


        // eslint-disable-next-line
    }, [ChangeParams, checkUseriNFO])


    // this is cart items 
    useEffect(() => {
        if (cartinfo?._id) {

            return setLocationNotNu(cartinfo?._id)
        }

        return () => {
            setLocationNotNu('')
        }

    }, [cartinfo?._id, setLocationNotNu])






    // options
    // [1] -  maps and restrurant name
    // [2] - payment delivery and time and takeaway
    // [3] - payment cart item cart remove add 













    return <TimeContext >
        <Container fluid >
            <Title TextTitle='Checkout' />
            <LoadingErrorHandle
                loading={loading}
                error={error}
                TextNotItems={ErrorServer}
                type={LoadingSkeletonProductPage}
            >


                <Row className='justify-content-center' >
                    <PaymentMapsScreen cartinfo={cartinfo} />

                    <Row className='row-box'>

                        <Col xs={12} sm={12} md={10} lg={5} className='removePaddingmarggin'>



                            <Col xs={12} ms={12} md={12} lg={12} >

                                <h1 className='Delivery-method-and-time Visa-alla-title color-color-all'>
                                    Leveranssätt och tid
                                </h1>
                                <PaymentAddresDriverScreen cartinfo={cartinfo} />
                            </Col>





                            <PaymentCartIemsScreen
                                cartinfo={cartinfo}
                                loading={loading}
                            />

                            <PaymentCreditScreen />
                            <PaymentCourierScreen />
                            <PaymentPromoCodeScreen />

                        </Col>

                        <PaymentPricesScreen idcart={cartinfo?._id} />
                    </Row>





                </Row>

            </LoadingErrorHandle>


        </Container>
    </TimeContext>

}


