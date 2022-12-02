import { Link } from 'react-router-dom'
import { Container, Row, Col, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Styles from '../../Components/Update/StylesComponents/style'
import { useState, useContext } from 'react'
import LoginScreen from '../LoginScreen/LoginScreen'
import { useHistory } from 'react-router-dom'
import { SliceNameNot } from '../../Assistant/Slice'
import { FirstNameRest } from '../../Assistant/Selection'
import NavBarSearchingHome from '../../Components/Update/NavBarSearchingHome/NavBarSearchingHome'
import { LogoUtUser } from '../../Components/CloseScreen/CloseScreen'
import { TheProfile } from '../../Components/Update/Redirction/Redirction'
import LoadingErrorHandle from '../../Components/Update/LoadingErrorHandle/LoadingErrorHandle'
import { AnotherLocation } from '../LoactionPage/ChooseAnotherLocation'
import { NavBarSkeleton } from '../../Assistant/TextError'
import SearchingResultHome from '../../Components/Update/NavBarSearchingHome/SearchingResultHome'
import './NavBar.css'


const NavBar = (props) => {



    const history = useHistory()

    // user Info ....
    const userLogin = useSelector((state) => state?.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()

    // testing login ...
    const [loginOpen, setLoginOpen] = useState(false)

    // location user  
    const { loading } = useContext(AnotherLocation)




    return <LoadingErrorHandle loading={loading} type={NavBarSkeleton} >
        <Container fluid >

            <Row className='justify-content-center rowFexColo'>
                <Col xs={4} sm={4} md={4} lg={4} className='testincode'>
                    <Link className="HoME_link_Home" to={{ pathname: '/' }}>
                        <span className='font-nav-login' style={Styles.logText}>{FirstNameRest}</span>
                    </Link>
                </Col>
                <Col xs={5} sm={3} md={3} lg={3} className='testincode'>
                    <div className='handel-navbar'>

                        <NavBarSearchingHome />


                    </div>

                </Col>

                <Col xs={3} sm={4} md={4} lg={4} className='testincode'>
                    <div className='handel-navbar'>



                        {!userInfo?.firstname ?
                            <div className='loin-style' style={Styles.style} onClick={(e) => setLoginOpen(!loginOpen)} >
                                <span>login</span>
                            </div>
                            :


                            <NavDropdown
                                id="nav-dropdown-dark-example"

                                title={
                                    <div>
                                    <span className='routeNmae'> {SliceNameNot(userInfo?.firstname, 1)} {SliceNameNot(userInfo?.lastname, 1)}</span>

                                    </div>
                                }
                                style={Styles.dropdown}
                            >

                                <NavDropdown.Item onClick={(e) => TheProfile(history, userInfo?.cartinfo)}>

                                    <div className='flex-profile'>
                                        <span>My Profiel</span>
                                        <span className='font-fex'>{userInfo?.firstname} {userInfo?.lastname}</span>
                                    </div>
                                </NavDropdown.Item>

                                <NavDropdown.Item onClick={(e) => LogoUtUser(dispatch)}>
                                    <div style={Styles.Link_no} >
                                        <span className='line-size' >logo ut</span>
                                    </div>

                                </NavDropdown.Item>







                            </NavDropdown>

                        }

                    </div>
                </Col>



            </Row>

            <Col xs={12} sm={12} md={12} lg={12} className='sdfsdfsdfsdfsdf'>
                <Row className='justify-content-center' >

                    <Col xs={12} sm={12} md={6} lg={6} className='postion-abs'  >
                        <SearchingResultHome />
                    </Col>
                </Row>

            </Col>




            <LoginScreen
                loginOpen={loginOpen}
                setLoginOpen={setLoginOpen}

            />

        </Container>

    </LoadingErrorHandle>



}


export default NavBar



//<LoadingErrorHandle loading={loading} type={NavBarSkeleton} >
//   </LoadingErrorHandle>