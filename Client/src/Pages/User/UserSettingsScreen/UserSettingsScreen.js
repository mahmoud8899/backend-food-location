import { Row, Container, Col } from 'react-bootstrap'
import UserNavBarScreen from '../UserNavBarScreen/UserNavBarScreen'
import Title from '../../../Components/ScreenTitle/ScreenTitle'
import Styles from '../../../Components/Update/StylesComponents/style'
import UserChange from '../../../Components/UserChange/UserChange'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Action_logout } from '../../../redux/Action/Auth_Action'
import { useDispatch } from 'react-redux'
import { FirstNameRest } from '../../../Assistant/Selection'
import '../UserProfileScreen/Profile.css'

export default function UserSettingsScreen(props) {

    const { history } = props


    // open page updated username
    const [openName, setOpenName] = useState(false)


    const dispatch = useDispatch()

    // user info 
    const userLogin = useSelector((state) => state?.userLogin)
    const { userInfo } = userLogin




    // logo ut 
    const HandleLogoUt = (e) => {
        e.preventDefault()
        return dispatch(Action_logout())
    }


    // check user
    useEffect(() => {
        if (!userInfo?.firstname) return history.push('/')

    }, [userInfo, history])






    return <Container>

        <Title TextTitle='Setting' />


        <Row className="justify-content-center margin-top-class" >

            <Col xs={12} sm={12} md={12} lg={12} >
                <div className='myprofile'>
                    <h1>Profil</h1>
                </div>

            </Col>


            <Col xs={12} sm={12} md={12} lg={12}>


                <UserNavBarScreen ClassNameSetting />

                <div className='margin-bottom-class'>  </div>

            </Col>


            <Col xs={12} sm={12} md={12} lg={8} className='heigth-margin' >




                <div className='box-Setting'>
                    <div className='box-setting-children'>
                        <span className='font-all-all-edit'>namn</span>
                        <h1 style={Styles.ColorSetting} onClick={(e) => setOpenName(true)}>
                            {userInfo?.firstname} {userInfo?.lastname}
                        </h1>
                    </div>
                    <div className='box-setting-children'>
                        <span className='font-all-all-edit'>Skicka kvitton till e-post</span>

                        <div className='check-box-me'>
                            <span className='check-box-me-c check-box-me-left'></span>
                        </div>
                    </div>

                    <div className='box-setting-children'>
                        <span className='font-all-all-edit'> Logga ut {FirstNameRest}</span>

                        <h1 style={Styles.ColorSetting} onClick={HandleLogoUt}>Logga ut</h1>
                    </div>
                </div>



                {openName &&
                    <div className='Add_open_Adress open' >

                        <UserChange

                            setOpenName={setOpenName}
                            openName={openName}
                        />
                    </div>


                }









            </Col>
        </Row>
    </Container>



}