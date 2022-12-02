import { Container, Row, Col } from 'react-bootstrap'
import './Order.css'
import { orderId_action } from '../../redux/Action/Order_Action'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { format } from 'timeago.js'
import Title from '../../Components/ScreenTitle/ScreenTitle'
import Styles from './style'
import { MyOderImage } from '../../Assistant/MyOrderImage'
import ImageScreen from '../../Components/ImageScreen/ImageScreen'
import LoadingErrorHandle from '../../Components/Update/LoadingErrorHandle/LoadingErrorHandle'

export default function Order(props) {


    const itemid = props?.match?.params?.id
    const dispatch = useDispatch()


    // console.log(itemid)

    // user Info...
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin



    const order = useSelector(state => state?.order)

    const { loading, orderID: orderuserid, error } = order





    // orderidorderid console.log(orderid)

    useEffect(() => {

        const assc = () => {
            if (itemid === 'undefined') {

                return
            } else {

                return dispatch(orderId_action(itemid))
            }

        }

        assc()


    }, [itemid, dispatch])











    return (
        <Container>

            <Title TextTitle="My Order Shipping." />





            <Row className="justify-content-center">


                <Col xs={12} sm={12} md={12} lg={12}>
                    <div >
                        <span className='backorder' onClick={() => props?.history?.goBack()}>
                            go back
                        </span>
                    </div>
                </Col>

                <LoadingErrorHandle loading={loading} error={error} home={orderuserid} >

                    {orderuserid ?



                        <Col xs={12} md={10} lg={8} >

                            <div style={Styles.myorder} className="xp_order">

                                <div className="Order_List_list">
                                    <h1 >Order #
                                        <span style={Styles.text}
                                            className="Order_List_list_color">{orderuserid?._id}</span>
                                    </h1>

                                    <div className="time_buy">


                                        <span>{format(orderuserid?.createdAt)}</span>
                                        <ImageScreen
                                            ImageIcon={MyOderImage.time}
                                            style={Styles.time}

                                        />
                                    </div>

                                    <div className="time_buy">


                                        <span>status : {orderuserid?.OrderStatus}</span>

                                        {orderuserid?.OrderStatus === 'processing' ?
                                            <ImageScreen
                                                ImageIcon={MyOderImage.processing}
                                                style={Styles.time}

                                            />
                                            :
                                            <ImageScreen
                                                ImageIcon={MyOderImage.delivery}
                                                style={Styles.time}

                                            />


                                        }

                                    </div>







                                    <p className="order_payment">pay Payment :
                                        <span className="method_payment">{orderuserid?.paymentMethod}</span>
                                        <span className="credit_card">
                                            <img src={MyOderImage.credit} style={Styles.time} alt={MyOderImage.credit} />
                                        </span>

                                    </p>

                                </div>




                                <div style={Styles.bottom} className="MyAddress_Info">

                                    <div className="MyAddress_Info_info">
                                        <ImageScreen ImageIcon={MyOderImage.user} style={Styles.image} />
                                        <span>Username :</span>
                                        <span>{userInfo?.firstname}</span>


                                    </div>

                                    <div className="MyAddress_Info_info">
                                        <ImageScreen ImageIcon={MyOderImage.email} style={Styles.image} />
                                        <span>email :</span>
                                        <span>{userInfo?.email}</span>

                                    </div>


                                </div>




                                <div style={Styles.homAddres} className="my_addres_info_bil">

                                    <ImageScreen ImageIcon={MyOderImage.myHome} style={Styles.image} />

                                    My Address
                                </div>






                           

                                    <div style={Styles.bottom} className="MyAddress_Info" >

                                        <div className="MyAddress_Info_info">
                                            <ImageScreen ImageIcon={MyOderImage.user} style={Styles.image} />
                                            <span>Full Name :</span>
                                            <span>{orderuserid?.shippingAdress?.firstname} </span>

                                            <span>{orderuserid?.shippingAdress?.lastname}</span>

                                        </div>


                                        <div className="MyAddress_Info_info">

                                            <ImageScreen ImageIcon={MyOderImage.smartphone} style={Styles.image} />
                                            <span>phone :</span>

                                            <span>+{orderuserid?.shippingAdress?.telephone}</span>

                                        </div>

                                        <div className="MyAddress_Info_info">
                                            <ImageScreen ImageIcon={MyOderImage.add} style={Styles.image} />
                                            <span>address :</span>
                                            <span>{orderuserid?.shippingAdress?.yourAddress}</span>
                                        </div>


                                        <div className="MyAddress_Info_info">
                                            <ImageScreen ImageIcon={MyOderImage.building} style={Styles.image} />

                                            <span>city :</span>
                                            <span> {orderuserid?.shippingAdress?.city}</span>
                                        </div>



                                        <div className="MyAddress_Info_info">
                                            <ImageScreen ImageIcon={MyOderImage.zip} style={Styles.image} />

                                            <span>zip Code :</span>
                                            <span>{orderuserid?.shippingAdress?.zipCode}</span>

                                        </div>


                                    </div>





                                {orderuserid?.orderitems?.map((item, itemIndex) => (
                                    <div style={Styles.bottom} className="Order_List_Order_Info" key={itemIndex}>
                                        <ImageScreen ImageIcon={item?.product?.image} className="items_oreder_info_Image" />

                                        <span className="items_oreder_info"><span>name : </span>{item?.product?.name}</span>

                                        <span className="items_oreder_info" ><span>price : </span>{item?.product?.prices} Kr</span>

                                        <span className="items_oreder_info" ><span>Qty :</span>{item?.qty}</span>





                                    </div>
                                ))}






                                <div className="items_total_info">
                                    <span className="time_boking_info_info">
                                        <span className="time_boking_info_info_time" >time boking :</span>
                                        <span style={Styles.color} className="credit_card" >  {orderuserid?.orderTime?.time} - {orderuserid?.orderTime?.today}</span>
                                        <span className="credit_card">
                                            <ImageScreen ImageIcon={MyOderImage.delivery} style={Styles.image} />
                                        </span>
                                    </span>
                                </div>







                                <div className="items_total_info">
                                    <span className="">
                                        {orderuserid?.orderitems?.length}x items
                                    </span>

                                </div>

                                <div className="items_total_info">
                                    <span style={Styles.color} className="Add_last">
                                        <span>{orderuserid?.itemsPrices} Kr </span>
                                      

                                    </span>
                                </div>

                            </div>


                        </Col>





                        : null}
                </LoadingErrorHandle>






            </Row>
        </Container>
    )
}

