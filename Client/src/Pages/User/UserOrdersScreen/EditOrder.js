import { Modal, Row, Col } from 'react-bootstrap'
import ButtomClick from '../../../Components/Buttom/Buttom'
import CodeError from '../../../Components/CodeError/CodeError'
import { ErrorTextInput, ErrorServer } from '../../../Assistant/TextError'
import Styles from '../../../Components/Update/StylesComponents/style'
import TheInputForm from '../../../Components/TheInputForm/TheInputForm'
import { ValtionMe } from '../../../Assistant/ValtionMe'
import { useDispatch, useSelector } from 'react-redux'
import HandleLoadingPage from '../../../Components/Update/HandleLoadingPage/HandleLoadingPage'
import { CancelOrderAction } from '../../../redux/Action/Order_Action'
import { CancelOrderError, CleringData } from '../../../Components/CloseScreen/CloseScreen'
import { RiCheckFill } from 'react-icons/ri'
import { HiOutlineX } from 'react-icons/hi'
import { Fragment,  useState } from 'react'
export default function EditOrder(props) {
    // 

    const { show, setShow } = props


    const order = useSelector((state) => state.order)
    const { error, loading, ordercancel } = order

    const dispatch = useDispatch()

    // handle error 
    const [handleError, setHandleError] = useState('')
    // oppen input report
    const [oppenInput, setOppenInput] = useState(false)
    // input raport
    const [inputWho, setInputWho] = useState('')
    // succesfully
    const [updateSuccessFully, setUpdateSuccessFully] = useState(false)





    // useEffect(() => {

    //     if (ordercancel !== null) return console.log(ordercancel)

    // }, [])





    // cancal order...
    const HandleCancel = () => {

        setOppenInput(true)

        if (oppenInput) {

            const senddata = {
                who: inputWho,
                _id: show?.object?._id
            }
            dispatch(CancelOrderAction(senddata))
            setInputWho('')
            setUpdateSuccessFully(true)
            return
        }

    }


    // remove error =>
    const BackAndRemoveError = () => {
        setOppenInput('')
        setHandleError('')
        console.log('remove error')
        CancelOrderError(dispatch)
        setUpdateSuccessFully(false)


    }
    // close
    const HandleClose = () => {
        setOppenInput('')
        setHandleError('')
        CancelOrderError(dispatch)
        setUpdateSuccessFully(false)
        ordercancel !== null && CleringData(dispatch)

        return setShow({ value: false, object: '' })
    }



    return <Modal show={show?.value} onHide={HandleClose}>

        <HandleLoadingPage
            loading={loading}
            error={error}
            BackAndRemoveError={BackAndRemoveError}
            ErrorText={ErrorServer}
            updateSuccessFully={updateSuccessFully}
            updated={ordercancel}
            HandleClose={HandleClose}
        >


            <div className='body-category'>

                <div className='modal-title-edit-category'>
                    <h1> ändring </h1>
                    <HiOutlineX className='close-pp-pp-image' onClick={HandleClose} />

                </div>

                {handleError &&
                    <div className='error-input-red' >
                        <CodeError error={ErrorTextInput} />
                    </div>
                }




                <div className="avbryta">
                    <h1 className="name-res">Vill du avbryta beställningen</h1>
                </div>
                {oppenInput &&
                    <>
                        <span>Om du vill skriva en rapport</span>
                        <TheInputForm
                            placeholder='Om du vill skriva en rapport'
                            onChange={(e) => setInputWho(e.target.value)}
                            ows={6}
                            as="textarea"
                            className='comment-customs'
                            type='text'
                            value={inputWho}
                            FirstIcons={
                                <Fragment>
                                    {ValtionMe(inputWho, 'inputname')
                                        ? <RiCheckFill className='Icons-LEFT-right' /> : null
                                    }
                                </Fragment>
                            }
                            // className='Input-type-style productdetials add-left-text'
                            onKeyPress={(e) => e.key === 'Enter' ?
                                ValtionMe(inputWho, 'inputname') ?
                                    HandleCancel(e) : null : null}
                        />
                    </>
                }

                <Row className='justify-content-center Margin-top'>
                    <Col xs={6} sm={6} md={6} lg={6}>
                        <ButtomClick
                            title='nej'
                            style={Styles.buttomColorPageCancal}
                            onClick={HandleClose}
                        />

                    </Col>
                    <Col xs={6} sm={6} md={6} lg={6}>

                        <ButtomClick
                            title='jo'
                            style={Styles.buttomColorPage}
                            onClick={HandleCancel}
                        />
                    </Col>
                </Row>













            </div>


        </HandleLoadingPage>




    </Modal>
}