import { Col, Container, Image, Row, ListGroup } from 'react-bootstrap'
import Styles from './style'
import "./style.css"
import { useHistory } from 'react-router-dom'
import { MyOderImage } from '../../../Assistant/MyOrderImage'

export default function DriverNavBar(props) {


    const { ClassMyProfile,classNameCancel, ClassHomeDriver, ClassNameChat } = props






    const history = useHistory()





    // Start Home page
    const HomePage = (e) => {
        e.preventDefault()
        return history.push('/sw/driver/online/driver/')
    }



    const HomeProfilePage = (e) => {
        e.preventDefault()
        return history.push('/sw/driver/online/driver/profile/')
    }


    const HomeCancelPage = (e) => {
        e.preventDefault()
        return history.push('/sw/driver/online/driver/processing/')
    }


    const HomeMessageChat = (e) => {
        e.preventDefault()
        return history.push('/sw/driver/online/driver/message/')
    }

    return <Container fluid>
        <Row className='justify-content-center' style={Styles.boxtop}>





          
                <Col xs={6} sm={12} md={12} lg={12} >
       
                <ListGroup.Item onClick={(e) => HomePage(e)} style={ClassHomeDriver && Styles.Active} >
                        <div className='navList'>

                            <span>
                                <Image
                                    src={MyOderImage.live}
                                    alt={MyOderImage.live}
                                    className="navimage"
                                />
                            </span>
                            
                                <span> order </span>

                        
                        </div>
                    </ListGroup.Item>
             



                </Col>






                <Col xs={6} sm={12} md={12} lg={12} >

                    <ListGroup.Item >
                        <div className='navList'>

                            <span>
                                <Image
                                    src={MyOderImage.totla}
                                    alt={MyOderImage.totla}
                                    className="navimage"
                                />
                            </span>
                            <span>   Total : 202 kr</span>
                        </div>

                    </ListGroup.Item>




                </Col>


                <Col xs={6} sm={12} md={12} lg={12} >

                    <ListGroup.Item onClick={(e) => HomeCancelPage(e)} style={classNameCancel && Styles.ac} >
                        <div className='navList'>

                            <span>
                                <Image
                                    src={MyOderImage.cancel}
                                    alt={MyOderImage.cancel}
                                    className="navimage"
                                />
                            </span>
                            <span>    cancal order</span>
                        </div>

                    </ListGroup.Item>



                </Col>


                <Col xs={6} sm={12} md={12} lg={12} >

                    <ListGroup.Item onClick={(e) => HomeMessageChat(e)} style={ClassNameChat && Styles.Active}  >
                        <div className='navList'>

                            <span>
                                <Image
                                    src={MyOderImage.chat}
                                    alt={MyOderImage.chat}
                                    className="navimage"
                                />
                            </span>
                            <span>  chat with chat</span>
                        </div>

                    </ListGroup.Item>




                </Col>

                <Col xs={12} sm={12} md={12} lg={12} >

                    <ListGroup.Item onClick={(e) => HomeProfilePage(e)} style={ClassMyProfile && Styles.Active} >
                        <div  onClick={(e) => HomeProfilePage(e)}>
                            <div className='navList'>

                                <span>
                                    <Image
                                        src={MyOderImage.user}
                                        alt={MyOderImage.user}
                                        className="navimage"
                                    />
                                </span>
                                <span>My profil</span>
                            </div>

                            {ClassMyProfile &&
                                <>

                                    <div className='navList' onClick={(e) => ClassMyProfile(e, 1)}>

                                        <span>
                                            <Image
                                                src={MyOderImage.edit}
                                                alt={MyOderImage.edit}
                                                className="navimage"
                                            />
                                        </span>
                                        <span>add Account</span>
                                    </div>


                                    <div className='navList' onClick={(e) => ClassMyProfile(e, 2)}>

                                        <span>
                                            <Image
                                                src={MyOderImage.change}
                                                alt={MyOderImage.change}
                                                className="navimage"
                                            />
                                        </span>
                                        <span>change my Address</span>
                                    </div>


                                    <div className='navList' onClick={(e) => ClassMyProfile(e, 3)} >

                                        <span>
                                            <Image
                                                src={MyOderImage.view}
                                                alt={MyOderImage.view}
                                                className="navimage"
                                            />
                                        </span>
                                        <span>views all orders</span>
                                    </div>

                                </>

                            }




                        </div>

                    </ListGroup.Item>





                </Col>


        
        </Row>

    </Container>




}

