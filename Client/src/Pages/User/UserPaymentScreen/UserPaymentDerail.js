import { Col, Row } from 'react-bootstrap'
import CheckedMe from '../../../Components/CheckedMe/CheckedMe'
import { Fragment, useState } from 'react'
import { ValtionMe } from '../../../Assistant/ValtionMe'
import ButtomClick from '../../../Components/Buttom/Buttom'
import { AddCardNumberSave } from '../../../redux/Action/Cart_Action'
import { useDispatch } from 'react-redux'
import Styles from '../../../Components/Update/StylesComponents/style'
import '../UserProfileScreen/Profile.css'
import TheInputForm from '../../../Components/TheInputForm/TheInputForm'
import { RiCheckFill } from 'react-icons/ri'
import { FirstNameRest } from '../../../Assistant/Selection'

export default function UserPaymentDerail(props) {
    // params oppen ande change style class name classNamePayment
    const { setOpenPayment, classNamePayment } = props

    const dispatch = useDispatch()


    // input updated cartnumber
    const [dataPayment, setDataPayment] = useState({
        cartnumber: '',
        expiration: '',
        secuity: '',
        cartname: ''
    })


    // add okej
    const [addOkey, setAddOkey] = useState(false)
    // handel error
    const [handleError, setHandleError] = useState('')


    // save data
    const HandleCard = (e) => {
        e.preventDefault()

        if (!addOkey) return setHandleError('bakcround')
        setHandleError('')

        dispatch(AddCardNumberSave(dataPayment))
        setOpenPayment(false)
        return
        // console.log('click', dataPayment)
    }

    return <Row className='justify-content-center animationRow'>
        <Col xs={12} sm={classNamePayment ? 7 : 12} md={6} lg={classNamePayment ? 10 : 8}>

            <div className={classNamePayment ? 'box-cart-Info extra' : 'box-cart-Info'}
                style={classNamePayment ? null : Styles.back}
            >



                <span className='selection-name'>Cart number</span>
                <TheInputForm
                    placeholder='1214324536457647'
                    title='Cart number'
                    type='numner'
                    value={dataPayment?.cartnumber}
                    onChange={(e) => setDataPayment({ ...dataPayment, cartnumber: e.target.value })}
                    FirstIcons={
                        <Fragment>

                            {ValtionMe(dataPayment?.cartnumber, 'cartnumber')
                                ? <RiCheckFill className='Icons-LEFT-right' /> : null
                            }
                        </Fragment>
                    }
                    className='Input-type-style productdetials'

                />



                <Row>
                    <Col >
                        <span className='selection-name'>expiration</span>
                        <TheInputForm
                            placeholder='MM/YY'
                            value={dataPayment?.expiration}
                            onChange={(e) => setDataPayment({ ...dataPayment, expiration: e.target.value })}
                            FirstIcons={
                                <Fragment>

                                    {ValtionMe(dataPayment?.expiration, 'Expiration')
                                        ? <RiCheckFill className='Icons-LEFT-right' /> : null
                                    }
                                </Fragment>
                            }
                            className='Input-type-style productdetials'

                        />
                    </Col>
                    <Col >
                        <span className='selection-name'>security code</span>
                        <TheInputForm
                            placeholder='Cvv'

                            value={dataPayment?.secuity}
                            onChange={(e) => setDataPayment({ ...dataPayment, secuity: e.target.value })}

                            FirstIcons={
                                <Fragment>

                                    {ValtionMe(dataPayment?.secuity, 'xPcVV')
                                        ? <RiCheckFill className='Icons-LEFT-right' /> : null
                                    }
                                </Fragment>
                            }
                            className='Input-type-style productdetials'

                        />

                    </Col>
                </Row>


                <div className='company'>
                    <span className='selection-name'> Cart name (optional)</span>
                    <TheInputForm
                        placeholder='Cart name'
                        value={dataPayment?.cartname}
                        onChange={(e) => setDataPayment({ ...dataPayment, cartname: e.target.value })}
                        FirstIcons={
                            <Fragment>

                                {ValtionMe(dataPayment?.cartname, 'isUser')
                                    ? <RiCheckFill className='Icons-LEFT-right' /> : null
                                }
                            </Fragment>
                        }
                        className='Input-type-style productdetials'

                    />

                </div>

                <div className='company bottom-xp'>
                    <CheckedMe
                        addOkey={addOkey}
                        setAddOkey={setAddOkey}
                    />
                    <p className='text-error'>{handleError && 'Håller du med'}</p>
                </div>


                <div className='cancel-add'>

                    <Row className='justify-content-center'>
                        <Col xs={6} sm={6} md={6} lg={6}>
                            <div
                                className='cancel-add-text'
                                style={Styles.colorCancel}
                                onClick={(e) => setOpenPayment(false)}
                            >
                                cancel
                            </div>

                        </Col>
                        <Col xs={6} sm={6} md={6} lg={6}>

                            <ButtomClick
                                title='Add cart'
                                style={Styles.TabButtomCreate}
                                onClick={(e) => HandleCard(e)}
                                disabled={
                                    !ValtionMe(dataPayment?.secuity, 'xPcVV') ||
                                    !ValtionMe(dataPayment?.expiration, 'Expiration') ||
                                    !ValtionMe(dataPayment?.cartnumber, 'cartnumber')

                                }
                            />


                        </Col>
                    </Row>



                </div>

                <div className='des-text'>
                    <p>
                        You can use your debit or credit cards to order with {FirstNameRest}. Your card will be
                        charged only after an order has been successfully delivered.
                    </p>
                </div>






            </div>


        </Col>
    </Row>
}


