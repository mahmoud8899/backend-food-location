import { Form, Modal, Row, Col } from 'react-bootstrap'
import ButtomClick from '../../../Components/Buttom/Buttom'
import { Fragment, useEffect, useState } from 'react'
import { ValtionMe } from '../../../Assistant/ValtionMe'
import { useDispatch, useSelector } from 'react-redux'
import { AddTelefonNumber } from '../../../redux/Action/Auth_Action'
import Styles from '../../../Components/Update/StylesComponents/style'
import HandleLoadingPage from '../../../Components/Update/HandleLoadingPage/HandleLoadingPage'
import { NumberRemove } from '../../../Components/CloseScreen/CloseScreen'
import { ErrorServer } from '../../../Assistant/TextError'
import TheInputForm from '../../../Components/TheInputForm/TheInputForm'
import { HiOutlineX } from 'react-icons/hi'
import { RiCheckFill } from 'react-icons/ri'
import '../UserProfileScreen/Profile.css'
export default function UserAddTelefonNumber(props) {

    const { openAddNumber, setOpenAddNumber } = props

    const dispatch = useDispatch()
    //  check ut event add telefon number ...
    const PageNumber = useSelector((state) => state?.PageNumber)
    const { loading, successfully, error } = PageNumber

    // input teletefon number...
    const [telefonNumber, setTelefonNumber] = useState('')
    // open page succssufully and error and remove error and try agn
    const [updateSuccessFully, setUpdateSuccessFully] = useState(false)



    // updated telefon number 
    useEffect(() => {

        if (successfully === 'ok') return setUpdateSuccessFully(true)

        return () => {
            setUpdateSuccessFully(false)
        }

    }, [successfully])





    // from add telefon number.....
    const HandleAddNumber = (e) => {
        e.preventDefault()
        if (!ValtionMe(telefonNumber, 'isPhone')) return
        // console.log(telefonNumber)
        return dispatch(AddTelefonNumber({
            telephone: telefonNumber
        }))
    }




    // close page add telefon number
    const HandleClose = () => {
        setOpenAddNumber(!openAddNumber)
        setUpdateSuccessFully(false)
        NumberRemove(dispatch)
        return
    }

    // close error 
    const BackAndRemoveError = () => {

        console.log('close error')
        NumberRemove(dispatch)
        setUpdateSuccessFully(false)
        setOpenAddNumber(!openAddNumber)
        return
    }



    return openAddNumber && <Modal show={openAddNumber} onHide={HandleClose}>

        <div className='add-padding-number'>
            <HandleLoadingPage
                loading={loading}
                error={error}
                updateSuccessFully={updateSuccessFully}
                HandleClose={HandleClose}
                BackAndRemoveError={BackAndRemoveError}
                updated={successfully}
                ErrorText={ErrorServer}
            >




                <div className='add-padding-number-clos'>
                    <HiOutlineX className='close-pp-pp-image' onClick={() => setOpenAddNumber(!openAddNumber)} />
                    {/* <ImageScreen
                        ImageIcon={MyOderImage.close}
                        className='Login-Close-Image-rigth'
                       
                    /> */}
                </div>
                <Row className='justify-content-center'>
                    <Col xs={10} sm={10} md={8} lg={8}  >
                        <h1 className='text-align-center-h1'>lägga till telefonnummer</h1>
                        <Form className='flex-class-center' >


                            <TheInputForm
                                placeholder='- - - - - - - - - -'
                                onChange={(e) => setTelefonNumber(e.target.value)}

                                value={telefonNumber}
                                type='number'
                                onKeyPress={(e) => e.key === 'key' ? HandleAddNumber(e) : null}
                                FirstIcons={
                                    <Fragment>

                                        {ValtionMe(telefonNumber, 'isPhone')
                                            ? <RiCheckFill className='Icons-LEFT-right' /> : null
                                        }
                                    </Fragment>
                                }
                                className='Input-type-style productdetials text-aligen-center'

                            />



                            <div className='buttom-close'>
                                <ButtomClick
                                    title='lägga till telefonnummer'
                                    disabled={!ValtionMe(telefonNumber, 'isPhone')}
                                    onClick={(e) => HandleAddNumber(e)}
                                    style={Styles.TabButtomCreate}
                                />
                            </div>


                        </Form>
                    </Col>
                </Row>
            </HandleLoadingPage>



        </div>

    </Modal>
}