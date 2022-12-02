import { HandleError } from '../../Assistant/HandleError'
import { Col, Container, Form, Row, Modal } from 'react-bootstrap'
import ButtomClick from '../../Components/Buttom/Buttom'
import { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChangePasswordForgetAction } from '../../redux/Action/Auth_Action'
import { useDispatch, useSelector } from 'react-redux'
import ScreenTitle from '../../Components/ScreenTitle/ScreenTitle'
import { ValtionMe } from '../../Assistant/ValtionMe'
import LoadingScreen from '../../Components/LoadingScreen/LoadingScreen'
import TheInputForm from '../../Components/TheInputForm/TheInputForm'
import { RiCheckFill, RiLockPasswordLine } from 'react-icons/ri'
import CodeError from '../../Components/CodeError/CodeError'
import { BiShow } from 'react-icons/bi'
import Styles from '../../Components/Update/StylesComponents/style'
import './style.css'








export default function ForgetPassword({ match }) {


    // params id sand to server...
    const isToken = match.params.id

    const dispatch = useDispatch()

    // input change password...
    const [dataPost, setDataPost] = useState({ newPassword: '', confirmPassword: '' })

    // input show password code.
    const [changeType, setChangeType] = useState(false)
    // function show password
    function ViewClick() {
        return setChangeType(!changeType)
    }




    // event requrest user forget password....
    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, changepassword } = userLogin

    // error handle
    const [handleError, setHandleError] = useState('')

    // SUCCESSFULLY
    const [successFully, setSuccessFully] = useState(false)



    // redirect successfully 
    useEffect(() => {
        if (changepassword === 'Change a password') {

            return setSuccessFully(true)
        }

        return () => {
            setSuccessFully(false)
        }

    }, [changepassword])








    // handel change Password.....
    const ChangePassword = (e) => {
        e.preventDefault()
        setHandleError('')

        if (!ValtionMe(dataPost?.newPassword, 'isPassword') || !ValtionMe(dataPost?.confirmPassword, 'isPassword')) {

            return setHandleError('skriv nytt lösenord...')
        }

        if (dataPost?.newPassword !== dataPost?.confirmPassword) {


            return setHandleError('lösenordet stämmer inte....')
        }




        const user = {
            _id: isToken,
            password: dataPost?.newPassword
        }

        dispatch(ChangePasswordForgetAction(user))
    }




    return <Container fluid>

        <ScreenTitle TextTitle='Change Password' />
        <Row className='justify-content-center'>
            <Col xs={12} sm={10} md={6} lg={6}>

                <Form onSubmit={(e) => ChangePassword(e)} className='change-password'>
                    <Fragment>


                        <h1>Ändra ditt lösenord</h1>

                        {handleError ?
                            <div className='error-input-red add-bottom' >
                                <CodeError error={handleError} />
                            </div>
                            : error ?
                                <div className='error-input-red add-bottom' >
                                    <CodeError error={HandleError(error)} />
                                </div>
                                : loading &&

                                <LoadingScreen />

                        }


                        <span className='selection-name'>ändra lösenord</span>
                        <TheInputForm
                            placeholder='ändra lösenord'
                            onChange={(e) => setDataPost({ ...dataPost, newPassword: e.target.value })}
                            value={dataPost?.newPassword}
                            type={changeType ? 'text' : 'password'}
                            autoComplete="username"
                            FirstIcons={
                                <Fragment>
                                    <RiLockPasswordLine className='Icons-LEFT' />
                                    {ValtionMe(dataPost?.newPassword, 'isPassword')
                                        ? <RiCheckFill className='Icons-LEFT-right' /> : null
                                    }
                                    {dataPost?.newPassword?.length >= 1 && <BiShow className='Icons-LEFT-Show-password' onClick={ViewClick} />}
                                </Fragment>
                            }
                            className='Input-type-style productdetials add-left-text'
                        />


                        <span className='selection-name'>Bekräfta lösenord</span>
                        <TheInputForm
                            placeholder='Bekräfta lösenord'
                            onChange={(e) => setDataPost({ ...dataPost, confirmPassword: e.target.value })}
                            value={dataPost?.confirmPassword}
                            type={changeType ? 'text' : 'password'}
                            autoComplete="username"
                            FirstIcons={
                                <Fragment>
                                    <RiLockPasswordLine className='Icons-LEFT' />
                                    {ValtionMe(dataPost?.confirmPassword, 'isPassword')
                                        ? <RiCheckFill className='Icons-LEFT-right' /> : null
                                    }
                                    {dataPost?.confirmPassword?.length >= 1 && <BiShow className='Icons-LEFT-Show-password' onClick={ViewClick} />}
                                </Fragment>
                            }
                            className='Input-type-style productdetials add-left-text'
                        />



                        <div className='save-change'>
                            <ButtomClick
                                title='Save'
                                onClick={ChangePassword}
                                style={Styles.addCartcolor}
                                disabled={!ValtionMe(dataPost?.newPassword, 'isPassword')
                                    || !ValtionMe(dataPost?.confirmPassword, 'isPassword')}
                            />
                        </div>








                    </Fragment>
                </Form>
            </Col>
        </Row>

        <Modal show={successFully} onHide={() => setSuccessFully(!successFully)} >
            <Link className='add-padding-loaction' to={{ pathname: '/uppsala' }} >
                <h1 className='font-edit'>lösenordet har ändrats</h1>
                <span>Jag kan logga in härifrån eller gå till startsidan</span>

                <div className='loading-loading'>
                    <LoadingScreen />
                </div>
            </Link>
        </Modal>



    </Container>
}

