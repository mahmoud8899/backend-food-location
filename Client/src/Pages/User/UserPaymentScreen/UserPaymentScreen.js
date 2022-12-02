
import { Container, Col, Row } from 'react-bootstrap'
import UserNavBarScreen from '../UserNavBarScreen/UserNavBarScreen'
import Styles from '../../../Components/Update/StylesComponents/style'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import UserPaymentDerail from './UserPaymentDerail'
import Title from '../../../Components/ScreenTitle/ScreenTitle'
import ShowDetailsCard from './ShowDetailsCard'
import AddOpenComponent from '../../../Components/Update/AddOpenComponent/AddOpenComponent'
import '../UserProfileScreen/Profile.css'
export default function UserPaymentScreen(props) {

    const { history } = props


    // user info check out....
    const userLogin = useSelector((state) => state?.userLogin?.userInfo)

    // console.log(userLogin, history)


    // page add cartnumber....
    const [openPayment, setOpenPayment] = useState(false)

    // info to car number to user
    const TheCartNumber = useSelector((state) => state?.Cartnumber?.usercard)


    // check out user login
    useEffect(() => {

        if (!userLogin?.firstname) return history.push('/uppsala')

    }, [userLogin, history])



    return <Container>

        <Title TextTitle='Add Payment' />


        <Row className="justify-content-center margin-top-class" >
            <Col xs={12} sm={12} md={12} lg={12} >
                <div className='myprofile'>
                    <h1>Profil</h1>
                </div>

            </Col>


            <Col xs={12} sm={12} md={12} lg={12}>


                <UserNavBarScreen clasNamePayment />

                <div className='margin-bottom-class'>  </div>

            </Col>


            <Col xs={12} sm={12} md={12} lg={8} className={openPayment ? null : 'heigth-margin'}>

                {!openPayment ?

                    <div>

                        {TheCartNumber?.cartnumber ?


                            <ShowDetailsCard
                                TheCartNumber={TheCartNumber}
                            />

                            :
                            null
                        }




                        <div className='addToCart' onClick={(e) => setOpenPayment(true)}>
                            <AddOpenComponent
                                Titel='Lägg till ett nytt kort'
                                style={Styles.addPayment}
                                className='className-link'
                                classNameTitle='className-linkleft'
                            />



                        </div>





                    </div>


                    :

                    <UserPaymentDerail
                        setOpenPayment={setOpenPayment}
                    />



                }





            </Col>



        </Row>
    </Container>

}