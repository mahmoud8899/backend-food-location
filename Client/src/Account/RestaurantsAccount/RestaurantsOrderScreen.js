import { useSelector, useDispatch } from 'react-redux'
import { ShowOrderAction } from '../../redux/Action/Order_Action'
import CartItemsOrders from './Datils/CartItemsOrders'
import { PageTextEmpty } from '../../Components/Update/PageEmpty/PageEmpty'
import LoadingErrorHandle from '../../Components/Update/LoadingErrorHandle/LoadingErrorHandle'
import { ErrorServer, OrderList, PlaceholderOrder } from '../../Assistant/TextError'
import NavBarSearchingTopAll from '../../Components/Update/NavBarSearchingTopAll/NavBarSearchingTopAll'
import { BiWalk } from 'react-icons/bi'
import { useEffect, useState,Fragment } from 'react'
import './style.css'

export default function RestaurantsOrderScreen(props) {

    const { history } = props




    const loading = false
    const dispatch = useDispatch()
    // user check ut
    const userLogin = useSelector((state) => state?.userLogin)
    const { userInfo } = userLogin
    // get all orders
    const TheResturantShowsOrders = useSelector((state) => state?.TheResturantShowsOrders)
    const { ordersAllNumber, ShowOrders, error } = TheResturantShowsOrders




    // userInfo?.cartinfo
    useEffect(() => {
        if (userInfo?.restaurantid) {

            return userInfo?.cartinfo && ShowOrders?.length === 0 && dispatch(ShowOrderAction(userInfo?.cartinfo))

        } else {
            return history.push('/uppsala/')
        }



    }, [dispatch, ShowOrders?.length, history, userInfo])









    // Searching...
    const [query, setQuery] = useState("");
    const keys = ["OrderStatus", "paymentMethod"];
    const search = (data) => {
        return data?.filter((item) =>
            keys?.some((key) => item[key]?.toLowerCase()?.includes(query))
        );
    };







    return <Fragment>

        <NavBarSearchingTopAll
            query={query}
            TextIcons={OrderList}
            Icons={BiWalk}
            Placeholder={PlaceholderOrder}
            setQuery={setQuery}
        />

        <LoadingErrorHandle
            error={error}
            TextNotItems={ErrorServer}
            loading={loading}
            extraStyle

        >
            {ShowOrders?.length === Number(0) ?
                <PageTextEmpty Pagetext='Du har inga beställningar' />
                :
                <CartItemsOrders
                    ShowOrders={search(ShowOrders)}
                    history={props?.history}
                    ordersAllNumber={ordersAllNumber}
                    resturantId={userInfo?.cartinfo}
                />
            }
        </LoadingErrorHandle>

    </Fragment>





}






