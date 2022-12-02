import { Col } from 'react-bootstrap'
import './PaymentScreen.css'
import { FirstNameRest } from '../../Assistant/Selection'
import { useState } from 'react'
import UserPaymentDerail from '../User/UserPaymentScreen/UserPaymentDerail'
import Styles from '../../Components/Update/StylesComponents/style'
import { useSelector } from 'react-redux'
import AddOpenComponent from '../../Components/Update/AddOpenComponent/AddOpenComponent'
import ShowDetailsCard from '../User/UserPaymentScreen/ShowDetailsCard'
import { BsChevronRight, BsChevronUp ,BsCreditCard } from 'react-icons/bs'

export default function PaymentCreditScreen() {




    const [paymentOpenCard, setPaymentOpenCard] = useState(false)

    const [openAddCart, setOpenAddCart] = useState(false)

    const TheCheckCart = useSelector((state) => state?.Cartnumber?.usercard)






    // payment
    const ChnagePaymentOpen = (e) => {
        e.preventDefault()

        if (paymentOpenCard) {
            return setPaymentOpenCard(false)
        } else {
            return setPaymentOpenCard(true)
        }
    }


    return <Col xs={12} ms={12} md={12} lg={12} >

<h1 className='Delivery-method-and-time Visa-alla-title color-color-all'>
        Betalningsdetaljer
        </h1>

        <div className='box-delivery-cart '>
            <div className='box-delivery-item' onClick={(e) => ChnagePaymentOpen(e)} >

                <BsCreditCard
                 
                    className='bike'
                />

                <div className='item-credit-text'>
                    <div className='font-all-all-edit color-color-all'>
                        {TheCheckCart?.cartnumber ? TheCheckCart?.cartnumber : 'Välj betalningsmetod'}

                    </div>
                    <div className='font-name-size-line'>
                        {TheCheckCart?.cartnumber ? 'valt betalmetod kommer att debiteras' : 'Vänligen lägg till betalningsmetod för att kunna fortsätta med din beställning. Tack!'}

                    </div>
                </div>


                {paymentOpenCard ? 
                    <BsChevronUp className='bike add-left-image' /> :  <BsChevronRight className='bike add-left-image' /> 

                }
              

            </div>
            {paymentOpenCard &&

                <div className='box-delivery-item-selector'>
                    {openAddCart ?


                        <UserPaymentDerail
                            setOpenPayment={setOpenAddCart}
                            classNamePayment
                        />



                        :
                        <>

                            {TheCheckCart?.cartnumber &&
                                <ShowDetailsCard

                                    TheCartNumber={TheCheckCart}
                                    classNamePayment
                                />
                            }


                            <div onClick={() => setOpenAddCart(!openAddCart)}>

                                <AddOpenComponent
                                    Titel='Lägg till ett nytt kort'

                                    className='add-selected-item'
                                    classNameTitle='classPluseTitel exstra-style margin-left'
                                    classNamePluse='color-color-all add-left-left'
                                />
                            </div>





                            <div className='fooder-card' style={Styles.topbottom}  >
                                <p className='font-name-size-line'>
                                    The following payment methods are available on {FirstNameRest}:
                                    credit and debit cards, {FirstNameRest} at Work, {FirstNameRest} credits.
                                </p>
                            </div>

                        </>
                    }



                </div>
            }

        </div>

    </Col>

}