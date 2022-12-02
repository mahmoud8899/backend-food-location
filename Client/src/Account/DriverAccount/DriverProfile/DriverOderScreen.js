import React, { useEffect, useState } from 'react'
import { Col, Row, Container, Image } from 'react-bootstrap'
import Styles from '../DriverScreen/style'
import { MyOderImage } from '../../../Assistant/MyOrderImage'
import "../DriverScreen/style.css"
import { SliceName } from '../../../Assistant/Slice'



export default function DriverOderScreen(props) {

    const { socket, userInfo } = props


    const [items, setItems] = useState([])

    // console.log(items)
    useEffect(() => {


        if (socket) {
            socket.emit('Userprofile', userInfo?._id)
            socket.on('userorder', (data) => {
                setItems(data.driver)
            })
        }



        return ()=>{
            setItems([])
        }



    }, [socket,userInfo?._id])


    return <Container fluid>

        <Row className='justify-content-center'>


            <Col xs={12} sm={12} md={12} lg={12} >
                <h1 style={Styles.boxtop}> The orders on the way   </h1>
            </Col>

            {items?.map((driv, index) => (

                <Col xs={12} sm={12} md={6} lg={6} key={index}>
                    <div style={Styles.ordernumber}>
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
                            {driv?.order?.orderitems.map((us) => (
                                <span className='FONT' key={us?.product?._id}>resutarng : {us?.product?.info?.restaurantname}</span>
                            ))}
                        </div>

                        <div>
                            <Image
                                src={MyOderImage.delivery}
                                alt={MyOderImage.delivery}
                                className='image'

                            />
                            <span className='FONT'>driver price: {driv?.order?.driverPric}</span>
                        </div>




                    </div>
                </Col>
            ))}



        </Row>
    </Container>
}


