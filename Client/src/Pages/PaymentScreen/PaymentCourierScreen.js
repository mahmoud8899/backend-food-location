import { Image, Row, Col, } from 'react-bootstrap'
import { MyOderImage } from '../../Assistant/MyOrderImage'
import './PaymentScreen.css'
import { selectionCourier } from '../../Assistant/Selection'
import { useState } from 'react'
import ButtomClick from '../../Components/Buttom/Buttom'
import Styles from '../../Components/Update/StylesComponents/style'
import TheInputForm from '../../Components/TheInputForm/TheInputForm'
import { BsChevronRight, BsChevronUp } from 'react-icons/bs'


export default function PaymentCourierScreen() {

    const [courierOpen, setCourierOpen] = useState(false)
    const [sumCunt, setSumCunt] = useState(false)
    // Courier
    const ChnageCourierOpen = (e) => {
        e.preventDefault()

        if (courierOpen) {
            return setCourierOpen(false)
        } else {
            return setCourierOpen(true)
        }
    }




    const HandelsumCunt = (e) => {
        e.preventDefault()

        if (sumCunt) {
            return setSumCunt(false)
        } else {
            return setSumCunt(true)
        }
    }




    return <Col xs={12} ms={12} md={12} lg={12} >
        <div className='box-delivery-cart '>
            <div className='box-delivery-item' onClick={(e) => ChnageCourierOpen(e)} >

                <Image
                    src={MyOderImage.courier}
                    className='bike'
                />

                <div className='item-credit-text'>
                    <div className='font-all-all-edit color-color-all'> Dricks till kurirpartern</div>
                    <div className='font-name-size-line'>
                        Frivillig dricks till kurirpartnern
                    </div>
                </div>

                {courierOpen ? 
                    <BsChevronUp className='bike add-left-image' /> :  <BsChevronRight className='bike add-left-image' /> 

                }



            </div>
            {courierOpen &&

                <div className='box-delivery-item-selector'>

                    <div className='courier-box'>
                        <div className='courier-item'>
                            <p className='font-name-size-line'>
                                De får 100 % av din dricks efter leveransen.
                                Om du vill ändra eller avbryta dricksen, vänligen kontakta supporten för hjälp.
                            </p>
                        </div>
                        <div className='courier-item'>
                            {selectionCourier?.map((cu, Index) => (

                                <span key={Index} style={Styles.colorButtom} >{cu?.courier.toFixed(2)}</span>



                            ))}
                            <span style={Styles.colorButtom} onClick={(e) => HandelsumCunt(e)}>Annat belopp </span>
                        </div>
                    </div>

                    {sumCunt &&
                        <div className='items-courier'>

                            <span className='bottom-between'>
                                You can tip between €0.50 to €100.00
                            </span>

                            <Row className='justify-content-center item-item'>
                                <Col xs={8} sm={8} md={8} lg={8}>

                                    <TheInputForm className='Input-type-style productdetials' />


                                </Col>
                                <Col xs={4} sm={4} md={4} lg={4}>
                                    <ButtomClick title='Ok' style={Styles.TabButtomCreate} />
                                </Col>
                            </Row>






                        </div>
                    }


                </div>
            }

        </div>

    </Col>
}