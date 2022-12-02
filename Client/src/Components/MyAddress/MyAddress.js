import { Row, Col, Form } from 'react-bootstrap'
import ButtomClick from '../Buttom/Buttom'
import { useSelector, useDispatch } from 'react-redux'
import { Fragment, useState } from 'react'
import { AddAdressUserAction } from '../../redux/Action/Auth_Action'
import { addresSelection } from '../../Assistant/Selection'
import ImageScreen from '../ImageScreen/ImageScreen'
import { ValidationUserAddress, ChangeCode } from '../../Assistant/ValidationPayment'
import Styles from '../Update/StylesComponents/style'
import '../../Pages/User/UserProfileScreen/Profile.css'
import CodeError from '../CodeError/CodeError'
import TheInputForm from '../TheInputForm/TheInputForm'
import { RiCheckFill } from 'react-icons/ri'
import { FaCity } from 'react-icons/fa'
import { BiClinic, BiPlus, BiStreetView } from 'react-icons/bi'
import {ErrorTextInput} from '../../Assistant/TextError'
const MyAddress = (props) => {
    const {
        ClassNamePayment,
        setOpenAddres,
        ClassPaymentAdd,
        setUpdateSuccessFully

    } = props


    const dispatch = useDispatch()


    // user Info.......
    const userLogin = useSelector((state) => state?.userLogin)
    const { userInfo } = userLogin
    // create user address....
    const [dataPost, setPostData] = useState({
        addres: userInfo?.Adress?.addres ? userInfo?.Adress?.addres : '',
        homeNumber: userInfo?.Adress?.homeNumber ? userInfo?.Adress?.homeNumber : '',
        city: userInfo?.Adress?.city ? userInfo?.Adress?.city : '',
        work: userInfo?.Adress?.work ? userInfo?.Adress?.work : '',
        zipcode: userInfo?.Adress?.zipcode ? userInfo?.Adress?.zipcode : ''
    })


    // handle error 
    const [handleError, setHandleError] = useState(false)



    // handle send data user Address.
    const HandelChangeAddres = (e) => {
        e.preventDefault()
        setHandleError(false)

        if (dataPost?.homeNumber?.length >= Number(1)
            && dataPost?.addres?.length >= Number(4)
            && dataPost?.city?.length >= Number(3)
            && dataPost?.zipcode?.length >= Number(3)
            && dataPost?.work?.length >= Number(1)
        ) {

            setHandleError(false)
            const userAddrees = {
                addres: ChangeCode(dataPost?.addres),
                homeNumber: ChangeCode(dataPost?.homeNumber),
                city: ChangeCode(dataPost?.city),
                work: ChangeCode(dataPost?.work),
                zipcode: ChangeCode(dataPost?.zipcode),
                ClassAddAddress: true
            }

            dispatch(AddAdressUserAction(userAddrees))
            setUpdateSuccessFully(true)

            return

        } else {
            return setHandleError(true)


        }





    }







    // validation.....
    const validation = (name, max = 10) => {

        return name?.length >= max && 'true'

    }





    return <Form
        onSubmit={HandelChangeAddres}
        className={ClassNamePayment ? 'ClassNamePayment' : ClassPaymentAdd ? 'tesing-form' : 'POstion-form'}>

        {handleError &&
            <div className='error-input-red' >
                <CodeError error={ErrorTextInput} />
            </div>
        }


        <div className={ClassNamePayment ? null : 'scroll-bottom-style'}>

            <span className='selection-name'>Street address and building number</span>
            <TheInputForm
                placeholder='Street address and building number'
                onChange={(e) => setPostData({ ...dataPost, addres: e.target.value })}
                type='text'
                value={dataPost?.addres}
                name='address'
                FirstIcons={
                    <Fragment>
                        <BiStreetView className='Icons-LEFT' />
                        {validation(dataPost?.addres, 4)
                            ? <RiCheckFill className='Icons-LEFT-right' /> : null
                        }
                    </Fragment>
                }
                className='Input-type-style productdetials add-left-text'
                onKeyPress={(e) => e.key === 'Enter' ?
                    validation(dataPost?.addres, 4) ?
                        HandelChangeAddres(e) : null : null}
            />




            <span className='selection-name'>Details (door number, apartment)</span>
            <TheInputForm
                placeholder='Details (door number, apartment)'
                onChange={(e) => setPostData({ ...dataPost, homeNumber: e.target.value })}
                value={dataPost?.homeNumber}
                name='homeNumber'
                FirstIcons={
                    <Fragment>
                        <BiClinic className='Icons-LEFT' />
                        {validation(dataPost?.homeNumber, 1)
                            ? <RiCheckFill className='Icons-LEFT-right' /> : null
                        }
                    </Fragment>
                }
                className='Input-type-style productdetials add-left-text'
                onKeyPress={(e) => e.key === 'Enter' ?
                    validation(dataPost?.homeNumber, 1) ?
                        HandelChangeAddres(e) : null : null}
            />





            <span className='selection-name'>Stad</span>
            <TheInputForm
                placeholder='stad'
                required
                onChange={(e) => setPostData({ ...dataPost, city: e.target.value })}
                value={dataPost.city}
                name='stad'
                FirstIcons={
                    <Fragment>
                        <FaCity className='Icons-LEFT' />
                        {validation(dataPost?.city, 3)
                            ? <RiCheckFill className='Icons-LEFT-right' /> : null
                        }
                    </Fragment>
                }
                className='Input-type-style productdetials add-left-text'
                onKeyPress={(e) => e.key === 'Enter' ?
                    validation(dataPost?.city, 3) ?
                        HandelChangeAddres(e) : null : null}
            />







            <div className='MyPhone'>

                <span>+44{userInfo?.telephone}</span>
            </div>

            <span className='selection-name'>Postnummer</span>
            <TheInputForm

                type='text'
                placeholder='Postnummer'
                required
                onChange={(e) => setPostData({ ...dataPost, zipcode: e.target.value })}
                value={dataPost?.zipcode}
                FirstIcons={
                    <Fragment>
                        <BiPlus className='Icons-LEFT' />
                        {validation(dataPost?.zipcode, 3)
                            ? <RiCheckFill className='Icons-LEFT-right' /> : null
                        }
                    </Fragment>
                }
                className='Input-type-style productdetials add-left-text'
                onKeyPress={(e) => e.key === 'Enter' ?
                    validation(dataPost?.zipcode, 3) ?
                        HandelChangeAddres(e) : null : null}
            />









            <div className='selectionHome'>
                {addresSelection?.map((wo, Index) => (
                    <div
                        className={dataPost?.work === wo?.name ? 'openSelection action' : 'openSelection'}
                        style={Styles.colorLine}
                        key={Index}
                        onClick={(e) => setPostData({ ...dataPost, work: wo?.name })}

                    >
                        <span>{wo?.name}</span>
                        <ImageScreen ImageIcon={wo?.image}
                            className='Image-selection'
                        />
                    </div>
                ))}



            </div>












        </div>

        <div className='postion-buttom'>
            <Row className='justify-content-center'>

                <Col xs={6} sm={6} md={6} lg={6}>

                    <ButtomClick
                        title='Cancal'
                        style={Styles.buttomColorPageCancal}
                        onClick={(e) => setOpenAddres(false)} />


                </Col>
                <Col xs={6} sm={6} md={6} lg={6}>
                    <ButtomClick
                        title='Save'
                        type='submit'
                        style={Styles.TabButtomCreate}


                        disabled={
                            userInfo?.Adress?.addres ?
                                ValidationUserAddress(dataPost, userInfo?.Adress)
                                :
                                !validation(dataPost?.zipcode, 3) ||
                                !validation(dataPost?.city, 3) ||
                                !validation(dataPost?.homeNumber, 1) ||
                                !validation(dataPost?.addres, 4) ||
                                !validation(dataPost?.work, 1)

                        }
                    />
                </Col>

            </Row>
        </div>

    </Form>



}



export default MyAddress


