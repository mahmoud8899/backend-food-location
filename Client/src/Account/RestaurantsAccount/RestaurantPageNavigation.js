import RestaurantsCategoryScreen from "./RestaurantsCategoryScreen";
import RestaurantsOrderScreen from "./RestaurantsOrderScreen";
import RestaurantsProductScreen from "./RestaurantsProductScreen";
import RestaurantsProfilScreen from "./RestaurantsProfilScreen";
import { Route } from 'react-router-dom'
import RestaurantsNavBarScreen from "./RestaurantsNavBarScreen";
import { Container, Row, Col } from 'react-bootstrap'
import UserName from "./Datils/UserName";
import RestaurantPageNotfication from "./RestaurantPageNotfication";


export default function RestaurantPageNavigation() {





    return <Container>

        <div className='box'>
            <UserName />
        </div>

        <Row className='justify-content-center'>


            <Col xs={12} sm={12} md={4} lg={3} >
                <RestaurantsNavBarScreen  />
            </Col>


            <Col xs={12} sm={12} md={8} lg={9} >
                <Route path='/sw/restaurants/admin/notification/' component={RestaurantPageNotfication} exact />
                <Route path='/sw/restaurants/admin/notification/order/' component={RestaurantsOrderScreen} exact />
                <Route path='/sw/restaurants/admin/notification/product/' component={RestaurantsProductScreen} exact />
                <Route path='/sw/restaurants/admin/notification/category/' component={RestaurantsCategoryScreen} exact />
                <Route path='/sw/restaurants/admin/notification/profile/' component={RestaurantsProfilScreen} exact />

            </Col>


        </Row>
    </Container>
}