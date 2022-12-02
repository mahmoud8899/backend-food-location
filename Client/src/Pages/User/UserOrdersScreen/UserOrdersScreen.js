import { Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Styles from '../../../Components/Update/StylesComponents/style'
import InfiniteScroll from 'react-infinite-scroll-component'
import { OrdersUserAction } from '../../../redux/Action/Order_Action'
import UserNavBarScreen from '../UserNavBarScreen/UserNavBarScreen'
import LoadingErrorHandle from '../../../Components/Update/LoadingErrorHandle/LoadingErrorHandle'
import LoadingScreen from '../../../Components/LoadingScreen/LoadingScreen'
import { ErrorServer ,LoadingSkeletonHomeCart } from '../../../Assistant/TextError'
import Title from '../../../Components/ScreenTitle/ScreenTitle'
import NavBarSearchingTopAll from '../../../Components/Update/NavBarSearchingTopAll/NavBarSearchingTopAll'
import '../UserProfileScreen/Profile.css'
import ItemsOrders from './ItemsOrders'
import { useEffect, useState } from 'react'
import {BiWalk} from 'react-icons/bi'

const UserOrdersScreen = (props) => {
    // params history
    const { history } = props



    const dispatch = useDispatch()


    // user info check 
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    // handle 
    const myOrder = useSelector((state) => state?.myOrder)
    const { UserOrders, nextNumber, error, loading } = myOrder



    // console.log(myOrder)


    // get all orders....
    // check ut user online....
    useEffect(() => {

        if (userInfo?.firstname) {

             return UserOrders?.length === 0 && dispatch(OrdersUserAction())
        } else {

            return history.push('/uppsala/')
        }


    }, [dispatch, UserOrders?.length, nextNumber, userInfo, history])






    // fatch user.......... more data
    const fetchData = () => {
        if (nextNumber >= Number(1)) {
            return dispatch(OrdersUserAction())
        }
    }




    // options 
    // [1] : navbar selection to user.
    // [2] : orders history...


    // Searching...
    const [query, setQuery] = useState("");
    const keys = ["OrderStatus", "paymentMethod"];
    const search = (data) => {
        return data?.filter((item) =>
            keys?.some((key) => item[key]?.toLowerCase()?.includes(query))
        );
    };





    return <Container>
        

        <Title  TextTitle='Orderhistorik' />
        <Row className="justify-content-center margin-top-class" >
            <Col xs={12} sm={12} md={12} lg={12} >
                <div className='myprofile'>
                    <h1>Profil</h1>
                </div>

            </Col>

            <Col xs={12} sm={12} md={12} lg={12}>


                <UserNavBarScreen ClassNameOrder />

                <div className='margin-bottom-class'>  </div>

            </Col>

            <Col xs={12} sm={12} md={12} lg={8} >
                <div className={error ? 'error-handle-error' : 'Fex-Order'}>
                    <LoadingErrorHandle error={error} loading={loading} TextNotItems={ErrorServer}  type={LoadingSkeletonHomeCart}>



                        <div className='Margin-top'>

                           <NavBarSearchingTopAll  
                            setQuery={setQuery}
                            query={query}
                            Placeholder='beställningar sökning'
                            TextIcons='Lista beställningar'
                            Icons={BiWalk} 
                           
                           />   
                           


                        </div>
                        <InfiniteScroll
                            style={Styles.hidden}
                            dataLength={UserOrders?.length}
                            next={fetchData}
                            hasMore={nextNumber === null ? false : true}
                            loader={
                                nextNumber === null ? false :
                                    <div className='Center-loading'>
                                        <LoadingScreen />
                                    </div>
                            }
                        >

                            <ItemsOrders UserOrders={search(UserOrders)} history={history} />

                        </InfiniteScroll>
                    </LoadingErrorHandle>
                </div>




            </Col>





        </Row>
    </Container>






}



export default UserOrdersScreen







