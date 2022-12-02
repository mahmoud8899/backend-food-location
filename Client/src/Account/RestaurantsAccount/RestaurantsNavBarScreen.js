import { ListGroup, Row, Col } from 'react-bootstrap'
import { SliceName } from '../../Assistant/Slice'
import { MyOderImage } from '../../Assistant/MyOrderImage'
import { useHistory } from 'react-router-dom'
import ImageScreen from '../../Components/ImageScreen/ImageScreen'
import Styles from '../../Components/Update/StylesComponents/style'
import { useEffect } from 'react'

export default function RestaurantsNavBarScreen(props) {


    const history = useHistory()

    const IsMatch = history?.location?.pathname



    // console.log(IsMatch)



    useEffect(() => {


    }, [IsMatch])





    // all  navigation 
    const HomePage = (e) => {
        e.preventDefault()

        return history.push(`/sw/restaurants/admin/notification/`)
    }

    const ProductPage = (e) => {
        e.preventDefault()

        return history.push(`/sw/restaurants/admin/notification/product/`)
    }

    const CategoryPage = (e) => {
        e.preventDefault()

        return history.push(`/sw/restaurants/admin/notification/category/`)
    }

    const OrderPage = (e) => {
        e.preventDefault()

        return history.push(`/sw/restaurants/admin/notification/order/`)
    }


    const ProfilPage = (e) => {
        e.preventDefault()

        return history.push(`/sw/restaurants/admin/notification/profile/`)
    }





    return <Row className='justify-content-center'>

        <Col xs={6} sm={12} md={12} lg={12} style={Styles.Tabbox}>
            <ListGroup onClick={(e) => HomePage(e)} >
                <ListGroup.Item style={
                    IsMatch === '/sw/restaurants/admin/notification/'
                        ? Styles.TabActive : Styles.TabBoxChildren}>
                    <ImageScreen
                        ImageIcon={MyOderImage.notification}
                        style={Styles.TabBoximage}
                    />
                    {SliceName('Notification', 10)}
                </ListGroup.Item>
            </ListGroup>
        </Col>


        <Col xs={6} sm={12} md={12} lg={12} style={Styles.Tabbox} >
            <ListGroup onClick={(e) => OrderPage(e)}>
                <ListGroup.Item style={
                    IsMatch === '/sw/restaurants/admin/notification/order/'
                        ? Styles.TabActive : Styles.TabBoxChildren} >
                    <ImageScreen ImageIcon={MyOderImage.basket2} style={Styles.TabBoximage} />
                    {SliceName('views orders', 10)}</ListGroup.Item>
            </ListGroup>
        </Col>




        <Col xs={6} sm={12} md={12} lg={12} style={Styles.Tabbox}  >
            <ListGroup onClick={(e) => ProductPage(e)}   >
                <ListGroup.Item style={

                    IsMatch === '/sw/restaurants/admin/notification/product/' ? Styles.TabActive : Styles.TabBoxChildren}>
                    <ImageScreen ImageIcon={MyOderImage.product} style={Styles.TabBoximage} />
                    list Products
                </ListGroup.Item>
            </ListGroup>
        </Col>

        <Col xs={6} sm={12} md={12} lg={12} style={Styles.Tabbox} >
            <ListGroup onClick={(e) => CategoryPage(e)}>
                <ListGroup.Item style={
                    IsMatch === '/sw/restaurants/admin/notification/category/'
                        ? Styles.TabActive : Styles.TabBoxChildren} >
                    <ImageScreen ImageIcon={MyOderImage.category} style={Styles.TabBoximage} />
                    list category
                </ListGroup.Item>
            </ListGroup>
        </Col>





        <Col xs={12} sm={12} md={12} lg={12} style={Styles.Tabbox} >
            <ListGroup >
                <ListGroup.Item style={Styles.TabBoxChildren} >
                    <ImageScreen ImageIcon={MyOderImage.chat} style={Styles.TabBoximage} />
                    {SliceName('chat with servis', 10)}</ListGroup.Item>
            </ListGroup>
        </Col>


        <Col xs={12} sm={12} md={12} lg={12} style={Styles.Tabbox}>
            <ListGroup onClick={(e) => ProfilPage(e)}>
                <ListGroup.Item style={
                    IsMatch === '/sw/restaurants/admin/notification/profile/'

                        ? Styles.TabActive : Styles.TabBoxChildren} >
                    <ImageScreen ImageIcon={MyOderImage.user} style={Styles.TabBoximage} />
                    {SliceName('Sitting', 10)}
                </ListGroup.Item>


            </ListGroup>
        </Col>





    </Row>



}

// {classNameSitting && <>
//     <ListGroup.Item style={Styles.TabBoxChildren} onClick={(e) => OpenBankAcount(e)} >
//         <ImageScreen ImageIcon={MyOderImage.change} style={Styles.TabBoximage} />
//         {SliceName('add acount', 10)}
//     </ListGroup.Item>

// </>}
// {/* <ListGroup.Item style={Styles.boxChildren} onClick={(e) => {}}>
// <ImageScreen ImageIcon={MyOderImage.edit} style={Styles.image} />
// {SliceName('change addres', 10)}
// </ListGroup.Item> */}
// /        <Col xs={3} sm={12} md={12} lg={12} style={Styles.box}>
// <ListGroup onClick={(e) => ProductPage(e)}>
//     <ListGroup.Item style={Styles.boxChildren}>
//         <Image
//             src={MyOderImage.view}
//             style={Styles.image}
//             alt={MyOderImage.view}
//         />
//         {SliceName('Update', 10)}
//     </ListGroup.Item>
// </ListGroup>
// </Col>
