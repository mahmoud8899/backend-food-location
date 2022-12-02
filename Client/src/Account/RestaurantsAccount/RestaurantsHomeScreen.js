import { Row, } from 'react-bootstrap'
import Title from '../../Components/ScreenTitle/ScreenTitle'
import { MdNotificationsNone } from 'react-icons/md'
import { OrderResturantNotifications } from '../../redux/Action/Order_Action'
import { useDispatch, useSelector } from 'react-redux'
import NotficationOrders from './Datils/NotficationOrders'
import NavBarList from '../../Components/Update/NavBarSearchingTopAll/NavBarList'
import { Fragment, useEffect, useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import './style.css'


export default function RestaurantsHomeScreen(props) {

    const history = useHistory()




    // user check ut
    const userLogin = useSelector((state) => state?.userLogin)
    const { userInfo } = userLogin


    // get all order....>
    const theResturant = useSelector((state) => state?.theResturant)
    const { loading, error, orderNotfications } = theResturant


    const dispatch = useDispatch()

    // ingration data
    const [allNotfications, setAllNotfications] = useState([])




    // get all order notfiation ... 
    useEffect(() => {

        if (userInfo?.restaurantid) {

            // return userInfo?.cartinfo && orderNotfications?.length === 0 && dispatch(OrderResturantNotifications(userInfo?.cartinfo))

        } else {
            return history.push('/')
        }



    }, [dispatch, orderNotfications?.length, history, userInfo])


















    // console.log(orderNotfications)






    return <Fragment>
        <Title TextTitle='Restaurant Admin' />

        <NavBarList

            Other={
                <div className='Order-List-New-other'>
                    <div className='AddClass-c add-left'>
                        <span className='font-all'>Order List New</span>
                    </div>
                </div>
            }
            OtherLast={
                <div className='Order-List-New-other'>
                    <div className='children_notification'>
                        <MdNotificationsNone className='notification' />
                        <span className='notification_number' >2</span>
                    </div>
                </div>

            }
        />





        <Row className='justify-content-center'>



            <NotficationOrders
                error={error}
                loading={loading}
                orderNotfications={orderNotfications}
                allNotfications={allNotfications}
                setAllNotfications={setAllNotfications}

            />



        </Row>


    </Fragment>

























}

// {/* <Col xs={12} sm={12} md={4} lg={3} >
// <RestaurantsNavBarScreen ClassNotfication />
// </Col> */}




// {/* 
//         <div className='Margin-top'>
//     <LoadingErrorHandle loading={loading} error={error} TextNotItems={ErrorServer} extraStyle >
//               </LoadingErrorHandle>
//  </div>
//                {orderNotfications?.length === Number(0) ||
//                                 orderNotfications === 'Empty' ?
//                                 <PageTextEmpty Pagetext='Det finns inga aviseringar för tillfället' />
//                                 :

//    }
// */ }