import { Col, Image, Row, Container } from 'react-bootstrap'
import { MyOderImage } from '../../../Assistant/MyOrderImage'
import Title from '../../../Components/ScreenTitle/ScreenTitle'
import { useState, useEffect, useContext } from 'react'
import { SocketContact } from '../../../Components/SocketScreen/SocketScreen'
import { useHistory } from 'react-router-dom'
import DriverNavBar from './DriverNavBar'
import Styles from './style'


export default function DriverItemsScreen() {



    const { userInfo, socket } = useContext(SocketContact)

    const history = useHistory()




    const [availableOrder, setAvailableOrder] = useState([])
    // who is Online Users 
    useEffect(() => {

        if (!userInfo?.firstname) {


            return history.push('/')
        } else if (socket) {


            socket.emit('confirm', 'testing')

            socket.on('available', (data) => {

                console.log(data)

                // setAvailableOrder(data.order)
            })

        }




        // return () => {
        //     setAvailableOrder([])
        // }

    }, [socket, setAvailableOrder, history, userInfo?.firstname])








    // google maps...
    const MpasClick = (e, id) => {
        e.preventDefault()
        return window.open((`https://www.google.se/maps/place/${id}`), '_blank')
    }







    const HabdleConfirm = (e, id) => {
        e.preventDefault()
        if (socket) {

            socket.emit('clickConfirm', {
                confirmId: id,
                userid: userInfo._id
            })
        }
    }





    return <Container fluid>

        <Title TextTitle='Driver Live' />
        <Row className='justify-content-center'>

            <Col xs={12} sm={4} md={4} lg={4}>

                <DriverNavBar ClassHomeDriver />

            </Col>



            <Col xs={12} sm={8} md={8} lg={8}>



                <div style={Styles.boxtop} ></div>


                {availableOrder?.map((driver, index) => (
                    <div key={index} className='config' style={Styles.box}>


                        <div className='lasttime' style={Styles.color}>

                            <span>last time  : {driver?.orderTime}</span>
                            <Image
                                src={MyOderImage.time}
                                style={Styles.timeImage}
                                alt={MyOderImage.time}

                            />
                        </div>

                        {driver?.orderitems?.map((food, index) => (
                            <div className='resturant' style={Styles.boxButtom} key={index}>


                                <div style={Styles.flex}>
                                    <Image
                                        src={MyOderImage.restaurant}
                                        alt={MyOderImage.restaurant}
                                        style={Styles.city}

                                    />
                                    <span style={Styles.left}>resturant : {food?.product?.info?.restaurantname}</span>
                                </div>



                                <div style={Styles.flex}>
                                    <Image
                                        src={MyOderImage.city}
                                        alt={MyOderImage.city}
                                        style={Styles.city}

                                    />
                                    <span style={Styles.left}>city : {food?.product?.info?.city}</span>
                                </div>

                                <div style={Styles.flex}>
                                    <Image
                                        src={MyOderImage.myHome}
                                        alt={MyOderImage.myHome}
                                        style={Styles.city}

                                    />
                                    <div className='difrent'>
                                        <span
                                            onClick={(e) => MpasClick(e, food?.product?.info?.addres)}>
                                            restaurant Address: {food?.product?.info?.addres}</span>
                                    </div>
                                </div>


                                <div style={Styles.flex}>
                                    <Image
                                        src={MyOderImage.food}
                                        alt={MyOderImage.food}
                                        style={Styles.city}

                                    />
                                    <span style={Styles.left}>food : {food?.product?.name}</span>
                                </div>


                            </div>
                        ))}



                        <div className='resturant'>

                            <div style={Styles.flex}>
                                <Image
                                    src={MyOderImage.add}
                                    alt={MyOderImage.add}
                                    style={Styles.coustomimage}

                                />
                                <div className='difrent'>
                                    <span
                                        onClick={(e) => MpasClick(e, driver?.shippingAdress[0]?.yourAddress)}>
                                        coustomer Address: {driver?.shippingAdress[0]?.yourAddress}</span>
                                </div>
                            </div>







                        </div>




                        <div className='confirm'>
                            <span style={Styles.left}>driver price : {driver?.driverPric}</span>
                            <span onClick={(e) =>
                                HabdleConfirm(e, driver?._id)} className='buttom' style={Styles.buttom}>Confirm</span>
                        </div>

                    </div>

                ))}




            </Col>
        </Row>
    </Container>

}


