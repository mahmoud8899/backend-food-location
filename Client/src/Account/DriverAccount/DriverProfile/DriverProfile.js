import Title from '../../../Components/ScreenTitle/ScreenTitle'
import AddAccountScreen from '../../../Components/AddAccountScreen/AddAccountScreen'
import ChangeAddres from './ChangeAddres'
import DriverOderScreen from './DriverOderScreen'
import { Container, Row, Col } from 'react-bootstrap'
import DriverNavBar from '../DriverScreen/DriverNavBar'
import { useState, useContext, useEffect } from 'react'
import { SocketContact } from '../../../Components/SocketScreen/SocketScreen'
import {useHistory} from 'react-router-dom'
const DriverProfile = (props) => {

 
    const history = useHistory()

    const {userInfo, socket} = useContext(SocketContact)




    const [openAddAccount, setOpenAddAccount] = useState(false)
    const [openAddres, setOpenAddres] = useState(false)




    useEffect(()=>{

        if(!userInfo?.firstname){

            return history.push('/')
        }

    },[userInfo?.firstname,history])





    const ClassMyProfile = (e, id) => {

        e.preventDefault()

        if (id === 1) {

            return setOpenAddAccount(true)
        } else if (id === 2) {
            return setOpenAddres(true)
        } else if (id === 3) {

            return
        }

    }



    return <Container fluid>

        <Title TextTitle='My Profile' />
        <Row className='justify-content-center'>
            <Title TextTitle='My Profile' />




            <Col xs={12} sm={4} md={4} lg={4}>

                <DriverNavBar ClassMyProfile={ClassMyProfile} />

            </Col>


            <Col xs={12} sm={8} md={8} lg={8}>
                <DriverOderScreen
                    socket={socket}
                    userInfo={userInfo}

                />
            </Col>


            <AddAccountScreen
                openAddAccount={openAddAccount}
                setOpenAddAccount={setOpenAddAccount}
            />



            <ChangeAddres
                openAddres={openAddres}
                setOpenAddres={setOpenAddres}
            />

        </Row>
    </Container>
}


export default DriverProfile