import {  Row, Col, } from 'react-bootstrap'
import './PaymentScreen.css'
import ButtomClick from '../../Components/Buttom/Buttom'
import Styles from '../../Components/Update/StylesComponents/style'
import TheInputForm from '../../Components/TheInputForm/TheInputForm'


export default function PaymentPromoCodeScreen() {




    return <Col xs={12} ms={12} md={12} lg={12} >

<h1 className='Delivery-method-and-time Visa-alla-title color-color-all'>
        Promokod
        </h1>
        <div className='promo'>

            <p className='font-name-size-line'>
            Om du har en kod, ange den nedan för att kunna lösa in den.
             
            </p>


        </div>


        <Row className='justify-content-center margin-bottom-payment'>
            <Col xs={8} sm={8} md={8} lg={8}>
                <TheInputForm

                    placeholder='Enter promo code...'
                    className='Input-type-style productdetials'
                />
            </Col>
            <Col xs={4} sm={4} md={4} lg={4}>
                <ButtomClick 
                title='Skicka'
                style={Styles.TabButtomCreate}
                />
            </Col>
        </Row>

    </Col>
}