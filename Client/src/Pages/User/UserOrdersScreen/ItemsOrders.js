import { Fragment, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { format } from 'timeago.js'
import { MyOderImage } from '../../../Assistant/MyOrderImage'
import { SliceName } from '../../../Assistant/Slice'
import ImageScreen from '../../../Components/ImageScreen/ImageScreen'
import Styles from '../../../Components/Update/StylesComponents/style'
import { BiEditAlt, BiTimeFive, BiCreditCard } from "react-icons/bi";
import EditOrder from './EditOrder'
export default function ItemsOrders(props) {
    // params [1] : show data [2] : history
    const { UserOrders, history } = props



    // option oppen cancel and edit 
    const [show, setShow] = useState({ value: false, object: '' })



    // ruter to order id.
    const HandleProductId = (e, id) => {
        e.preventDefault()
        // console.log('hello', id)
        return history.push(`/sw/order/shipping/${id}`)
    }



    // console.log(show)



    return <Row className='justify-content-center'>
        <Fragment>


            {UserOrders?.length > Number(0) ? UserOrders?.map((order, orderIndex) => (


                <Col xs={12} sm={6} md={6} lg={6} key={orderIndex} >

                    <div style={Styles.Orderbox} className="xp_order">

                        <div className='navcancel'>
                            <div className="time_buy">

                                beställningstid :
                                <span> {format(order?.createdAt)}</span>
                                <BiTimeFive style={Styles.Orderstime} />


                            </div>

                            <div className="Remove_order_user" onClick={() => setShow({ value: true, object: order })}>
                                <BiEditAlt style={Styles.Ordersremove} />


                            </div>

                        </div>

                        <div className="Order_List_list">

                            <div className="time_buy">
                                Order  :
                                <span className="add_delivered"> {SliceName(order?._id, 15)}</span>

                            </div>

                            <div className="time_buy">
                                orderstatus :
                                <span className="add_delivered"> {order?.OrderStatus}</span>

                            </div>

                            <p className="order_payment">betala Betalning :
                                <span className="method_payment">{order?.paymentMethod}</span>
                                <span className="credit_card">

                                    <BiCreditCard style={Styles.OrderstimenotLeft} />
                                </span>

                            </p>

                        </div>





                        <div className="items_total_info">
                            <span className="time_boking_info_info">
                                <span className="time_boking_info_info_time" >Tidsbokning :</span>
                                <span className="credit_card" >{order?.orderTime?.time} - {order?.orderTime?.today}</span>
                                <span className="credit_card">
                                    <ImageScreen ImageIcon={MyOderImage.delivery}
                                        style={Styles.OrderstimenotLeft} />
                                </span>
                            </span>
                        </div>




                        <div className="items_total_info">
                            <span className="">
                                {order?.orderitems?.length}x Föremål
                            </span>

                        </div>

                        <div style={Styles.Ordersbottom} className="items_total_info" onClick={(e) => HandleProductId(e, order?._id)}>
                            <span style={Styles.Orderslooklike} className="Add_last">
                                <span style={Styles.Ordersfont}>Detalj </span>
                            </span>
                        </div>

                        <div style={Styles.Ordersbottom} className="items_total_info">
                            <span style={Styles.Ordersboxpric} className="Add_last">
                                <span>{order?.itemsPrices} Kr </span>
                            </span>
                        </div>


                    </div>
                </Col>
            ))

                :
                <div className="Order_List_User_Info">

                    <h1 >Du har inte gjort några beställningar än</h1>
                </div>
            }


        </Fragment>


        <EditOrder
            show={show}
            setShow={setShow}
        />

    </Row>
}







