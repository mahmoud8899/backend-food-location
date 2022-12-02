import { Row, Col, Modal, Form } from 'react-bootstrap'
import ButtomClick from '../../Components/Buttom/Buttom'
import { user_Login, singUp_action, ForgetPasswordAction, CheckUser } from '../../redux/Action/Auth_Action'
import { useDispatch, useSelector } from 'react-redux'
import { FirstNameRest } from '../../Assistant/Selection'
import { ValtionMe, } from '../../Assistant/ValtionMe'
import { CloseScreen, CloseUserCheck } from '../../Components/CloseScreen/CloseScreen'
import Styles from '../../Components/Update/StylesComponents/style'
import { HiArrowNarrowLeft, HiOutlineX } from 'react-icons/hi'
import HandleLoadingPage from '../../Components/Update/HandleLoadingPage/HandleLoadingPage'
import React, { useState, useEffect } from 'react'
import CodeError from '../../Components/CodeError/CodeError'
import { ErrorTextInput } from '../../Assistant/TextError'
import LogIn from './LogIn'
import SingUp from './SingUp'
import './style.css'




const LoginScreen = (props) => {

    // [1] - open page login and close.... params...
    const { loginOpen, setLoginOpen } = props

    const dispatch = useDispatch()




    // input 
    const [dataLogin, setDataLogin] = useState({ firstname: '', lastname: '', telephone: '', password: '', email: '' })



    // console.log(dataLogin.email,dataLogin?.email?.length )
    // handle error input 
    const [handleError, setHandleError] = useState(false)
    // user check ut event error and loading
    const userLogin = useSelector((state) => state?.userLogin)
    const { checkeduser, userInfo, error, loading, forgetPassword } = userLogin
    //  singe page singup 
    const [singUp, setSingUp] = useState(false)
    //  singe page forget password 
    const [forget, setForget] = useState(false)


    // the cleaning code 
    const TheCleaning = () => {

        return setDataLogin({ firstname: '', lastname: '', telephone: '', password: '', email: '' })
    }



    useEffect(() => {

        if (checkeduser === 'no') {
            // console.log('hello')
            return setSingUp(true)
        }

        if (userInfo?.firstname) {

            setSingUp(false)
            setForget(false)
            return setLoginOpen(false)
        }




    }, [checkeduser, userInfo?.firstname, setLoginOpen, setSingUp])








    // handel login......
    const HandleLogin = (e) => {
        e.preventDefault()
        setHandleError(false)

        // forget password send email 
        if (forget) {
            if (!ValtionMe(dataLogin?.email, 'isEmail')) {

                return
            }
            console.log('forget password', dataLogin?.email)
            return dispatch(ForgetPasswordAction({ email: dataLogin?.email?.toLowerCase() }))


        }

        // create new account
        if (singUp) {

            if (
                !ValtionMe(dataLogin?.password, 'isPassword') ||
                !ValtionMe(dataLogin?.firstname, 'inputname') ||
                !ValtionMe(dataLogin?.lastname, 'inputname') ||
                !ValtionMe(dataLogin?.telephone, 'isPhone')
            ) {
                return setHandleError(true)
            }

            // firstname, telephone, lastname, email, password
            const userSingu = {
                firstname: dataLogin?.firstname?.toLowerCase(),
                lastname: dataLogin?.lastname?.toLowerCase(),
                email: dataLogin?.email?.toLowerCase(),
                telephone: dataLogin?.telephone?.toLowerCase(),
                password: dataLogin?.password?.toLowerCase(),


            }

            console.log('sing up')

            return dispatch(singUp_action(userSingu))

        } else {


            if (!ValtionMe(dataLogin?.email, 'isEmail')) return setHandleError(true)


            // user check ut email Active in server or not 
            if (checkeduser === 'ok') {
                if (!ValtionMe(dataLogin?.email, 'isEmail') || !ValtionMe(dataLogin?.password, 'isPassword')) return

                console.log('login')
                dispatch(user_Login({
                    email: dataLogin?.email?.toLowerCase(),
                    password: dataLogin?.password?.toLowerCase(),
                }))
                return TheCleaning()

            }



            console.log('check user...',)
            return dispatch(CheckUser({ email: dataLogin?.email?.toLowerCase() }))


        }




    }







    // close Login and sing up 
    // and remove error 
    // [1] : remove error Class name  -- closeScreen 
    // [2] : close page sing up
    // [3] : close page forget password
    // [4] : close page login 
    const HandleCloseEvery = () => {
        CloseScreen(dispatch)
        setSingUp(false)
        setForget(false)
        setLoginOpen(!loginOpen)
        TheCleaning()
        setHandleError(false)
        console.log('remove allt and close..')
        return
    }


    // [1] : change state check email to null 
    // [2] : close page sing up
    const HandlenextSingUP = () => {
        CloseUserCheck(dispatch)
        setHandleError(false)
        return setSingUp(!singUp)
    }

    // change state check email to null -- remove state comming from server 
    const changeState = () => {
        setHandleError(false)
        return CloseUserCheck(dispatch)
    }



    // testing 
    const BackAndRemoveError = () => {
        CloseScreen(dispatch)
        setHandleError(false)
    }


    return loginOpen && <Modal
        className='model-css'
        show={loginOpen}
        onHide={HandleCloseEvery}
    >

        <HandleLoadingPage
            loading={loading}
            error={error}
            BackAndRemoveError={BackAndRemoveError}
            HandleClose={HandleCloseEvery}

        >
            <div className='firs-login-page-one'>
                <div className='login-padding add-Left-right'>
                    {singUp &&
                        <HiArrowNarrowLeft className='close-pp-pp-image' onClick={HandlenextSingUP} />
                    }


                    <HiOutlineX
                        className={singUp ? 'Login-Close-Image-rigth' : 'Login-Close-Image-rigth left-black'}
                        onClick={HandleCloseEvery}
                    />
                </div>


                <div className='login-padding border-bottom-x'>
                    <h1> Skapa konto eller logga in</h1>

                </div>

            </div>




            <div className='loagin-center login-scroll-Heigth'>
                <Row className='justify-content-center'>
                    <Col xs={12} sm={12} md={10} lg={10}>

                        <p className='login-margin-top-bottom text-align-center'>Logga in här nedan eller skapa ett nytt konto på {FirstNameRest}.</p>
                        {handleError &&
                            <div className='error-input-red' >
                                <CodeError error={ErrorTextInput} />
                            </div>
                        }
                        <Form>
                            {singUp ?
                                <SingUp
                                    HandleLogin={HandleLogin}
                                    dataLogin={dataLogin}
                                    setDataLogin={setDataLogin}

                                />
                                :

                                <LogIn
                                    dataLogin={dataLogin}
                                    setDataLogin={setDataLogin}
                                    HandleLogin={HandleLogin}
                                    setForget={setForget}
                                    forget={forget}
                                    checkeduser={checkeduser}
                                    forgetPassword={forgetPassword}
                                    changeState={changeState}

                                />
                            }

                            <div className='login-margin-top-bottom'>
                                <ButtomClick
                                    title={
                                        singUp ? 'Registrera ett konto' :
                                            forget ? 'Glömt ditt lösenord' :
                                                checkeduser === 'ok' ? 'Logga in'
                                                    : 'Nästa'

                                    }
                                    onClick={HandleLogin}
                                    disabled={
                                        singUp ?
                                            !ValtionMe(dataLogin?.firstname, 'inputname') ||
                                            !ValtionMe(dataLogin?.lastname, 'inputname') ||
                                            !ValtionMe(dataLogin?.telephone, 'isPhone') ||
                                            !ValtionMe(dataLogin?.password, 'isPassword')
                                            : forget ? !ValtionMe(dataLogin?.email, 'isEmail')
                                                : checkeduser === 'ok' ?
                                                    !ValtionMe(dataLogin?.email, 'isEmail')
                                                    || !ValtionMe(dataLogin?.password, 'isPassword')
                                                    : !ValtionMe(dataLogin?.email, 'isEmail')

                                    }
                                    style={Styles.TabButtomCreate}
                                />
                            </div>

                            <div className='login-margin-top-bottom'>
                                <p className='login-text-bottom'>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                            </div>


                        </Form>


                    </Col>
                </Row>
            </div>


        </HandleLoadingPage>






    </Modal>
}


export default LoginScreen



// <Fragment>
// {loading ?
//     <div className='loading-center'>
//         <LoadingScreen />
//     </div>
//     : error ?
//         <div>

//             <h1>fffff</h1>
//             <CodeError error={error} onClick={() => CloseScreen(dispatch)} />
//         </div>


//         :
// }
// </Fragment>


