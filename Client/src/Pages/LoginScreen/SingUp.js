import { Col,  Row } from 'react-bootstrap'
import { ValtionMe } from '../../Assistant/ValtionMe'
import TheInputForm from '../../Components/TheInputForm/TheInputForm'
import { Fragment, useState } from 'react'
import { HiPhone } from 'react-icons/hi'
import { BiShow } from "react-icons/bi";
import { RiLockPasswordLine, RiCheckFill } from 'react-icons/ri'

export default function SingUp(props) {


    // params 
    // [1] : form send data -- HandleLogin
    // [2] : input value name -- dataLogin
    // [3] : input change input names
    const { HandleLogin, dataLogin, setDataLogin } = props



    // input Sing up options inputs 
    // [1] :firstname 
    // [2] : lastname 
    // [3] : telefonumber 
    // [4] : create password 
    // -------- validation to input nams validationMe....


    // input show password code.
    const [changeType, setChangeType] = useState(false)
    // function show password
    const ViewClick = () => {
        setChangeType(!changeType)
        // console.log('clcik', changeType)
    }




    return <div className='singUp-top'>

            <Row className='justify-content-center'>
                <Col>

                    <div>
                        <span className=''>Förnamn</span>
                        <TheInputForm
                            placeholder='Förnamn'
                            onChange={(e) => setDataLogin({ ...dataLogin, firstname: e.target.value })}
                            type='text'
                            value={dataLogin?.firstname}
                            className='Input-type-style productdetials'
                            FirstIcons={
                                <Fragment>

                                    {ValtionMe(dataLogin?.firstname, 'inputname')
                                        ? <RiCheckFill className='Icons-LEFT-right' /> : null
                                    }
                                </Fragment>
                            }
                            onKeyPress={(e) => e.key === 'Enter' ?
                                ValtionMe(dataLogin?.firstname, 'inputname') ?
                                    HandleLogin(e) : null : null}

                        />
                    </div>
                </Col>
                <Col xs={6} sm={6} md={6} lg={6}>

 
                    <div>
                        <span className='selection-name' >Efternamn</span>
                        <TheInputForm
                            placeholder='Efternamn'
                            onChange={(e) => setDataLogin({ ...dataLogin, lastname: e.target.value })}
                            type='text'
                            value={dataLogin?.lastname}
                            className='Input-type-style productdetials'
                            FirstIcons={
                                <Fragment>
                                    {ValtionMe(dataLogin?.lastname, 'inputname')
                                        ? <RiCheckFill className='Icons-LEFT-right' /> : null
                                    }
                                </Fragment>
                            }
                            onKeyPress={(e) => e.key === 'Enter' ?
                                ValtionMe(dataLogin?.lastname, 'inputname') ?
                                    HandleLogin(e) : null : null}

                        />
                    </div>

                </Col>

            </Row>



            <Col xs={12} sm={12} md={12} lg={12}>
                <div>
                    <span className='selection-name'>Telefonnummer</span>
                    <TheInputForm
                        placeholder='Telefonnummer'
                        onChange={(e) => setDataLogin({ ...dataLogin, telephone: e.target.value })}
                        type='number'
                        value={dataLogin?.telephone}
                        className='Input-type-style productdetials add-left-text'
                        FirstIcons={
                            <Fragment>
                                <HiPhone className='Icons-LEFT' />

                                {ValtionMe(dataLogin?.telephone, 'isPhone')
                                    ? <RiCheckFill className='Icons-LEFT-right' /> : null
                                }
                            </Fragment>
                        }
                        onKeyPress={(e) => e.key === 'Enter' ?
                            ValtionMe(dataLogin?.telephone, 'isPhone') ?
                                HandleLogin(e) : null : null}

                    />
                </div>

            </Col>


            <Col xs={12} sm={12} md={12} lg={12} className='singUp-bottom'>

                <div>
                    <span className='selection-name'>Ditt lösenord</span>
                    <TheInputForm
                        type={changeType ? 'text' : 'password'}
                        autoComplete="username"
                        placeholder='Ditt lösenord'
                        onChange={(e) => setDataLogin({ ...dataLogin, password: e.target.value.trim() })}
                        value={dataLogin?.password}
                        FirstIcons={
                            <Fragment>
                                <RiLockPasswordLine className='Icons-LEFT' />
                                {ValtionMe(dataLogin?.password, 'isPassword')
                                    ? <RiCheckFill className='Icons-LEFT-right' /> : null
                                }
                                {dataLogin?.password?.length >= 1 && <BiShow className='Icons-LEFT-Show-password' onClick={ViewClick} />}
                            </Fragment>
                        }
                        className='Input-type-style productdetials add-left-text'
                        onKeyPress={(e) => e.key === 'Enter' ?
                            ValtionMe(dataLogin?.password, 'isPassword') ?
                                HandleLogin(e) : null : null}
                    />
                </div>



            </Col>
 




    </div>
}


