import { MyOderImage } from '../../../Assistant/MyOrderImage'
import ImageScreen from '../../../Components/ImageScreen/ImageScreen'
import { TabScreen, TabScrrenDor } from '../../../Components/TabScreen/TabScreen'
import InfiniteScrollData from '../../../Components/InfiniteScroll/InfiniteScroll'
import { ShowOrderAction } from '../../../redux/Action/Order_Action'
import Styles from '../../../Components/Update/StylesComponents/style'
import { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { Table } from 'react-bootstrap'



export default function CartItemsOrders(props) {
    const {
        ShowOrders,
        history,
        ordersAllNumber,
        resturantId
    } = props



    const dispatch = useDispatch()




     // fetch data..
    const fetchData = () => {

        if (ordersAllNumber > Number(1)) {
            return dispatch(ShowOrderAction(resturantId))
        }

    }


    return <Fragment>
        <InfiniteScrollData
            products={ShowOrders}
            categoryProductsNextPagesxp={ordersAllNumber}
            fetchData={fetchData}
        >
            <Table responsive  >
                <thead style={Styles.TabBackColor} >
                    <tr style={Styles.Tabcolor} >
                        <TabScreen TitleTh='Number' style={Styles.TabfontText} />
                        <TabScreen TitleTh='Pric' style={Styles.TabfontText} />
                        <TabScreen TitleTh='payment' style={Styles.TabfontText} />
                        <TabScreen TitleTh='Paid' style={Styles.TabfontText} />
                        <TabScreen TitleTh='delivery' style={Styles.TabfontText} />
                        <TabScreen TitleTh='titta' style={Styles.TabfontText} />
     
                    </tr>

                </thead>
                {ShowOrders?.map((order, Index) => (

                    <tbody style={Styles.Tabcolor} key={Index}>
                        <tr style={Styles.Tabcolor}  >

                            <TabScrrenDor TitleTd={Index + 1} style={Styles.TabfontText} />
                            <TabScrrenDor TitleTd={`${order?.itemsPrics} Kr`} style={Styles.TabfontText} />
                            <TabScrrenDor TitleTd={order?.paymentMethod} style={Styles.TabfontText} />
                            <TabScrrenDor TitleTd={order?.ispaid ? 'yes' : 'no'} style={Styles.TabfontText} />
                            <TabScrrenDor TitleTd={order?.OrderStatus} style={Styles.TabfontText} />
                         
                            <TabScrrenDor other={
                                <div className='remove' style={Styles.TabButtomEdit}>
                                    <ImageScreen ImageIcon={MyOderImage.edit}
                                        style={Styles.TabIconsremov} />
                                    <span>titta</span>

                                </div>
                            }
                            onClick={(e) => history.push(`/sw/order/shipping/${order?._id}`)}

                            />





                        </tr>

                    </tbody>

                ))
                }


            </Table>



        </InfiniteScrollData>
    </Fragment>










}