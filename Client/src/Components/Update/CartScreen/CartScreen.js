import { Col, Row } from 'react-bootstrap'
import { CollectOrder, TotalPrice } from '../../../Assistant/TotalPrice'
import { FilterCartDetials } from '../UseContext/FilterRestarangeProduct'
import { useContext } from 'react'
import Styles from '../StylesComponents/style'



export default function CartScreen(props) {


    const { setYourOrder, yourOrder } = props

    const { filterCartProduct } = useContext(FilterCartDetials)










    // console.log(filterCartProduct)




    return <Row className='justify-content-center' >
        {filterCartProduct?.length === 0 ? null :
            <Col xs={12} ms={12} md={12} lg={12}>
                <div className='basket-box' onClick={() => setYourOrder(!yourOrder)}>
                    <div className='Open-today addColor-navbar'>
                        <div style={Styles.backgroundSize} className='view-order-number'>

                            <span>{CollectOrder(filterCartProduct)}</span>

                         
                        </div>

                        <div className='view-order-number-text color-color font-all-all-edit'>
                            Till kassan
                        </div>



                    </div>

                    <div className='basket-price'>
                        <span className='font-all-all-edit'>kr {TotalPrice(filterCartProduct)}</span>
                    </div>
                </div>
            </Col>
        }
    </Row>



}