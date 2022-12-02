import { Container, Row, Col } from 'react-bootstrap'
import Title from '../../Components/ScreenTitle/ScreenTitle'
import { ABoutAction } from '../../redux/Action/About_action'
import LoadingScreen from '../../Components/LoadingScreen/LoadingScreen'
import { useDispatch, useSelector } from 'react-redux'
import ImageScreen from '../../Components/ImageScreen/ImageScreen'
import { FirstNameRest } from '../../Assistant/Selection'
import {  useEffect } from 'react'
import './style.css'

export default function ScreenAbout() {



    const dispatch = useDispatch()

    const allabout = useSelector((state) => state.allabout)
    const { loading, about } = allabout




    useEffect(() => {

        about === null && dispatch(ABoutAction())
    }, [dispatch, about])




    return loading ? <LoadingScreen /> :
            <Container fluid>
                <Title TextTitle='About -Us' />

           
                <div className='top-margin-left-about'>



                    {about?.map((use) => (
                        <Row className='justify-content-center about-bottom'  key={use?._id}>
                            <Col xs={12} sm={6} md={6} lg={6} >

                                <div className='about-text'>
                                    <h1 className='about-name' >what is {FirstNameRest} ?</h1>

                                    <div className='about-about-us'>
                                        <p>
                                            {use?.discription}
                                        </p>
                                    </div>

                                </div>


                            </Col>

                            <Col xs={12} sm={6} md={6} lg={6} >
                                <div className='about-image'>
                                    <ImageScreen
                                        ImageIcon={use?.image}
                                        className='about-image-class'
                                    />
                                </div>
                            </Col>
                        </Row>
                    ))}





                </div>

            </Container>
     
}


