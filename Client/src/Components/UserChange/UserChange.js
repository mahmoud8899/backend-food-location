import {  Modal } from 'react-bootstrap'
import { MyOderImage } from '../../Assistant/MyOrderImage'
import ButtomClick from '../Buttom/Buttom'
import { ChangeUserInfo } from '../../redux/Action/Auth_Action'
import { useDispatch, useSelector } from 'react-redux'
import Styles from '../Update/StylesComponents/style'
import { HiOutlineX } from 'react-icons/hi'
import { ChangeCode, ValidationUsername } from '../../Assistant/ValidationPayment'
import HandleLoadingPage from '../Update/HandleLoadingPage/HandleLoadingPage'
import { ErrorServer, ErrorTextInput } from '../../Assistant/TextError'
import { ValtionMe } from '../../Assistant/ValtionMe'
import CodeError from '../CodeError/CodeError'
import { CloseScreen } from '../CloseScreen/CloseScreen'
import { Fragment, useState } from 'react'
import TheInputForm from '../TheInputForm/TheInputForm'
import { RiCheckFill } from 'react-icons/ri'
import ImageScreen from '../ImageScreen/ImageScreen'
export default function UserChange(props) {


    const { setOpenName, openName } = props

    // user info 
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo, loading, error } = userLogin

    // successfuly 
    const [updateSuccessFully, setUpdateSuccessFully] = useState(false)
    // handle error input 
    const [handleError, setHandleError] = useState(false)




    const dispatch = useDispatch()

    // input change firstname and lastname
    const [postData, setPostData] = useState({
        firstname: userInfo?.firstname ? userInfo?.firstname : '',
        lastname: userInfo?.lastname ? userInfo?.lastname : ''

    })




    // handle send updated to server.....>
    const HandleChangeUserInfo = (e) => {
        e.preventDefault()
        setHandleError(false)

        if (postData?.firstname?.length >= Number(3) && postData?.lastname?.length >= Number(3)) {

            const user = {
                firstname: ChangeCode(postData?.firstname),
                lastname: ChangeCode(postData?.lastname),
            }

            dispatch(ChangeUserInfo(user))
            setUpdateSuccessFully(true)


            return

        } else {
            setHandleError(true)

            return

        }


    }


    // close 
    const handleClose = () => {

        setOpenName(false)
        setHandleError(false)
        setUpdateSuccessFully(false)
    }

    // remove error 
    const BackAndRemoveError = () => {
        setHandleError(false)
        setUpdateSuccessFully(false)
        CloseScreen(dispatch)
    }


    return <Modal show={openName} onHide={handleClose}>

        <HandleLoadingPage
            loading={loading}
            error={error}
            updateSuccessFully={updateSuccessFully}
            BackAndRemoveError={BackAndRemoveError}
            HandleClose={handleClose}
            ErrorText={ErrorServer}

        >
            <div className='box-alert'>

                <div >
                    <span></span>
                </div>

                <div className='title-add'>
                    <span className='title-add-profile'>uppdatera adressuppgifter</span>
                </div>

                <HiOutlineX className='close-pp-pp-image' onClick={handleClose} />



            </div>
            <div className='box-children-input'>



                <ImageScreen ImageIcon={MyOderImage.foodname} className='foodname' />

                <div className='Form-ckidren-box' >

                    {handleError &&
                        <div className='error-input-red add-bottom' >
                            <CodeError error={ErrorTextInput} />
                        </div>
                    }


                    <span className='selection-name'>Förnamn</span>
                    <TheInputForm

                        placeholder='Förnamn'
                        className='Input-type-style productdetials'
                        name='firstname'
                        type='text'
                        onChange={(e) => setPostData({ ...postData, firstname: e.target.value })}
                        value={postData?.firstname}
                        FirstIcons={
                            <Fragment>


                                {ValtionMe(postData?.firstname, 'inputname')
                                    ? <RiCheckFill className='Icons-LEFT-right' /> : null
                                }
                            </Fragment>
                        }


                    />

                    <span className='selection-name'>Efternamn</span>
                    <TheInputForm

                        placeholder='efternamn'
                        className='Input-type-style productdetials'
                        name='lastname'
                        type='text'
                        onChange={(e) => setPostData({ ...postData, lastname: e.target.value })}
                        value={postData?.lastname}
                        FirstIcons={
                            <Fragment>
                                {ValtionMe(postData?.lastname, 'inputname')
                                    ? <RiCheckFill className='Icons-LEFT-right' /> : null
                                }
                            </Fragment>
                        }


                    />










                    <div className='buttom-close'>
                        <ButtomClick
                            title='uppdatering'
                            style={Styles.buttomColorPage}
                            onClick={HandleChangeUserInfo}
                            disabled={
                                ValidationUsername(postData, userInfo)
                            }
                        />
                    </div>


                </div>


            </div>
        </HandleLoadingPage>




    </Modal>
}


