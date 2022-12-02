import { Col, Container, Image, Row } from 'react-bootstrap'
import Styles from './style'
import './style.css'
import React, { useContext, useEffect, useState } from 'react'
import { MyOderImage } from '../../../Assistant/MyOrderImage'
import "./style.css"
import { SliceName } from '../../../Assistant/Slice'
import DriverNavBar from './DriverNavBar'
import { SocketContact } from '../../../Components/SocketScreen/SocketScreen'
const CancalOrder = (props) => {



    const { userInfo, socket } = useContext(SocketContact)



    const [orderPocssing, setOrderPocssing] = useState([])





    useEffect(() => {

        if (socket && userInfo) {

            socket.emit('theWay', userInfo?._id)
            socket.on('clientWay', (data) => {
                setOrderPocssing(data.order)
            })

        }


        return ()=>{
            setOrderPocssing([])
        }

    }, [
        socket,
        userInfo])







    const CancalOrder = (e, id) => {
        e.preventDefault()

        if (socket) {
            socket.emit('cancaldriver', id, userInfo._id)

        }
    }

    return <Container fluid>

        <Row className='justify-content-center'>

            <Col xs={12} sm={4} md={4} lg={4}>

                <DriverNavBar  classNameCancel />

            </Col>







            <Col xs={12} sm={8} md={8} lg={8}>

                <Row className='justify-content-center'style={Styles.boxtop} >

                

                    {orderPocssing?.map((driv, index) => (
                        <Col xs={12} sm={6} md={6} lg={6} key={index}>



                            <div style={Styles.ordernumber} >
                                <div>
                                    <Image
                                        src={MyOderImage.number}
                                        alt={MyOderImage.number}
                                        className='image'

                                    />
                                    <span className='FONT'>order Number : {SliceName(driv?._id, 10)}</span>
                                </div>



                                <div>
                                    <Image
                                        src={MyOderImage.processing}
                                        alt={MyOderImage.processing}
                                        className='image'

                                    />

                                    <span className='FONT'>order Status :</span>
                                    <span style={Styles.orderstatus}>{driv?.OrderStatus}</span>

                                </div>



                                <div>
                                    <Image
                                        src={MyOderImage.time}
                                        alt={MyOderImage.time}
                                        className='image'

                                    />

                                    <span className='FONT'>time order : {driv?.createdAt}</span>

                                </div>



                                <div>
                                    <Image
                                        src={MyOderImage.restaurant}
                                        alt={MyOderImage.restaurant}
                                        className='image'

                                    />
                                    {driv?.orderitems.map((us) => (
                                        <span className='FONT' key={us?.product?._id}>resutarng : {us?.product?.info?.restaurantname}</span>
                                    ))}

                                </div>

                                <div>
                                    <Image
                                        src={MyOderImage.delivery}
                                        alt={MyOderImage.delivery}
                                        className='image'

                                    />
                                    <span className='FONT'>driver price: {driv?.driverPric}</span>

                                </div>





                                <div style={Styles.cancal}>



                                    <span>
                                        <button

                                            onClick={(e) => CancalOrder(e, driv?._id)}
                                            style={Styles.buttomWhite}

                                        >

                                            <Image
                                                src={MyOderImage.delivery}
                                                alt={MyOderImage.delivery}
                                                className='image'

                                            />


                                            Cancal order
                                        </button>
                                    </span>





                                </div>
                            </div>



                        </Col>
                    ))}

                </Row>




            </Col>







        </Row>








    </Container>



}


export default CancalOrder

