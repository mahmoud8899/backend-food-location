import { Fragment, useState } from 'react'
import { MyOderImage } from '../../Assistant/MyOrderImage'
import LoginWithOther from './LoginWithOther'
import ImageScreen from '../../Components/ImageScreen/ImageScreen'
import CodeError from '../../Components/CodeError/CodeError'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import TheInputForm from '../../Components/TheInputForm/TheInputForm'
import { RiLockPasswordLine, RiCheckFill } from 'react-icons/ri'
import { BiShow } from "react-icons/bi";
import { HiOutlineMail } from 'react-icons/hi'
import { ValtionMe } from '../../Assistant/ValtionMe'
export default function LogIn(props) {

    // params....
    const { dataLogin, setDataLogin, HandleLogin, setForget, forget, checkeduser,
        forgetPassword, changeState
    } = props





    // input show password code.
    const [changeType, setChangeType] = useState(false)
    // function show password
    const ViewClick = () => {
        setChangeType(!changeType)
        // console.log('clcik', changeType)
    }






    // option here
    // [1] : check out user has email can login in or not email sing up
    // [2] : forget password 


    return <Fragment>

        {forget ?
            <Fragment>
                <div>

                    <HiArrowNarrowLeft
                        className='Login-Close-Image-rigth add-left'
                        onClick={() => setForget(!forget)}
                    />

                </div>
                {forgetPassword && <div className='forget-password-successfully'>
                    <CodeError error={forgetPassword} />
                </div>}

                <ImageScreen
                    ImageIcon={MyOderImage.forget}
                    className='forget-password'
                />




            </Fragment>
            :
            <>
                <LoginWithOther />

                <div className='login-text-'>
                    <span className='login-text-one'></span>
                    <span className='login-text-center'>eller logga in med email</span>
                    <span className='login-text-tew'></span>
                </div>



                <div className='login-margin-top-bottom text-align-center'>

                </div>

                {checkeduser === 'ok' &&
                    <HiArrowNarrowLeft

                        className='Login-Close-Image-rigth login-padding'
                        onClick={changeState}
                    />
                }
            </>

        }



            <div className='margin-bottom'>

                <TheInputForm
                    placeholder='Din email'
                    onChange={(e) => setDataLogin({ ...dataLogin, email: e.target.value })}
                    type='email'
                    value={dataLogin?.email}
                    FirstIcons={
                        <Fragment>
                            <HiOutlineMail className='Icons-LEFT' />
                            {ValtionMe(dataLogin?.email, 'isEmail')
                                ? <RiCheckFill className='Icons-LEFT-right' /> : null
                            }
                        </Fragment>
                    }
                    className='Input-type-style productdetials add-left-text'
                    onKeyPress={(e) => e.key === 'Enter' ?
                        ValtionMe(dataLogin?.email, 'isEmail') ?
                            HandleLogin(e) : null : null}
                />
            </div>
            <div >
                {forget ? null :
                    checkeduser === 'ok' &&
                    <>
                        <TheInputForm
                            type={changeType ? 'text' : 'password'}
                            autoComplete="username"
                            placeholder='Ditt lösenord'
                            onChange={(e) => setDataLogin({ ...dataLogin, password: e.target.value?.trim() })}
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
                        <p className='login-margin-top-bottom forgetPassword'
                            onClick={() => setForget(!forget)} >glömt ditt lösenord</p>
                    </>

                }
            </div>
   

    </Fragment>
}

