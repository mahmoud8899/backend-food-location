// import ImageScreen from '../../Components/ImageScreen/ImageScreen'
// import Rating from '../../Components/Rating/Rating'
// import Styles from '../../Components/Update/StylesComponents/style'
// import { MyOderImage } from '../../Assistant/MyOrderImage'
// import { Link } from 'react-router-dom'
// import { Conversion } from '../../Components/Update/Conversion/Conversion'
// import { TheTimeOppenProduct } from '../../Assistant/TheTimeOppenProduct'
import CodeError from '../../Components/CodeError/CodeError'
import { TextEmpty } from '../../Assistant/TextError'
import { Col } from 'react-bootstrap'
import './VisaProducts.css'
import CartItemsScreen from '../CartItemsScreen/CartItemsScreen'
export default function ProductsChildrenItems(props) {

    const { home } = props





    return home?.length > Number(0) ? home?.map((item, Index) => (
        <Col xs={6} sm={4} md={4} lg={4} key={Index} className='margin-margin-x'>
            <CartItemsScreen item={item} />
        </Col>
    )) : <CodeError error={TextEmpty} />



}
