import { MyOderImage } from '../../../Assistant/MyOrderImage'
import { SliceName } from '../../../Assistant/Slice'
import ButtomClick from '../../../Components/Buttom/Buttom'
import ImageScreen from '../../../Components/ImageScreen/ImageScreen'
import LoadingErrorHandle from '../../../Components/Update/LoadingErrorHandle/LoadingErrorHandle'
import { Col } from 'react-bootstrap'
import Styles from '../../../Components/Update/StylesComponents/style'
import { ErrorServer, OrderText ,HomeCarouselScreen } from '../../../Assistant/TextError'
import { PageTextEmpty } from '../../../Components/Update/PageEmpty/PageEmpty'
import { format } from 'timeago.js'
import { BiCreditCard, BiGitCompare, BiMessageSquareCheck } from 'react-icons/bi'
import { useEffect, useState, useContext } from 'react'
import EditOrder from '../../../Pages/User/UserOrdersScreen/EditOrder'
import { OnlineSocketLoginRestaurant } from '../../../Components/SocketScreen/SocketLoginRestaurant'
import usex from '../../../Assistant/sound/sound.mp3'
import useSound from 'use-sound'

export default function NotficationOrders(props) {
    // params [1] error [2] loading [3] data
    const {
        error,
        loading,
        orderNotfications,
        setAllNotfications,
        allNotfications,
    } = props



    // oppen cancel order....
    const [show, setShow] = useState({ value: false, object: '' })


    // notfication new order 
    const { socket } = useContext(OnlineSocketLoginRestaurant)
    // alrt sound
    const [play] = useSound(usex)


    useEffect(() => {

        if (socket) {
            socket.on('NewOrder', (data) => {
              
               
          
             setAllNotfications(prev => [...prev, Object(...data)])
                return
            })

        }
        // if (orderNotfications) {

        //     return setAllNotfications(orderNotfications)
        // }



        return () => setAllNotfications([])



    }, [socket,orderNotfications,setAllNotfications])





    console.log(allNotfications)

 




    // handle cancel order from resturant....
    function HandleCancelOrder(data) {

        return setShow({ value: true, object: data })
    }






    return <LoadingErrorHandle
        loading={loading}
        error={error}
        extraStyle
        TextNotItems={ErrorServer}
        type={HomeCarouselScreen}
    >


        {allNotfications?.length === Number(0) ||
            allNotfications === 'Empty' ?
            <PageTextEmpty Pagetext={OrderText} />
            :

            allNotfications?.map((order, Index) => (
                <Col xs={12} sm={6} md={6} lg={6} key={Index}>
                    <div className='List'>

                        <span className='Format-time' >{format(order?.updatedAt)}</span>

                        <div className='item'>

                            <BiMessageSquareCheck style={Styles.processing} />

                            <span>order number : {SliceName(order?._id, 10)}</span>
                        </div>


                        <div className='item'>

                            <BiCreditCard style={Styles.processing} />

                            <span>payment - </span>
                            <span className='Color-su' > {order?.paymentMethod}</span>
                        </div>

                        <div className='item'>

                            <BiGitCompare style={Styles.processing} />

                            <span> order status : </span>
                            <span className='Color-su' > {order?.OrderStatus}</span>
                        </div>



                        <div className='item'>
                            <ImageScreen
                                ImageIcon={MyOderImage.food}

                                style={Styles.processing}
                            />

                            <span> Förare  -  </span>
                            <span className='Color-su' >{order?.driver} </span>

                        </div>

                        <div className='item'>
                            <ImageScreen
                                ImageIcon={MyOderImage.time}

                                style={Styles.processing}
                            />

                            <span> last time -</span>
                            <span className='Color-su' >
                                {order?.orderTime?.time}-  {order?.orderTime?.today}
                            </span>
                        </div>


                        {order?.orderitems?.map((product, productIndex) => (
                            <div className='item OrderMunl' key={productIndex}>
                                <span>name : {product?.product?.name}</span>
                                <span> item {product?.qty}</span>
                                <span>prices : {product?.product?.prices}</span>
                            </div>
                        ))}


                        <div className='item'>
                            <ImageScreen
                                ImageIcon={MyOderImage.add}

                                style={Styles.processing}
                            />

                            <span> totalsomu :</span>
                            <span className='Color-su' >  {order?.itemsPrices}</span>
                        </div>



                        <div className='coustomAddres'>
                            <div className='item'>
                                <ImageScreen
                                    ImageIcon={MyOderImage.user}

                                    style={Styles.processing}
                                />

                                <span> full name : {order?.shippingAdress?.firstName} {order?.shippingAdress?.lastName} </span>
                            </div>

                            <div className='item'>
                                <ImageScreen
                                    ImageIcon={MyOderImage.myHome}

                                    style={Styles.processing}
                                />

                                <span>addres : {order?.shippingAdress?.yourAddress}</span>
                            </div>

                            <div className='item'>
                                <ImageScreen
                                    ImageIcon={MyOderImage.city}

                                    style={Styles.processing}
                                />

                                <span>city : {order?.shippingAdress?.city}</span>
                            </div>

                            <div className='item'>
                                <ImageScreen
                                    ImageIcon={MyOderImage.smartphone}

                                    style={Styles.processing}
                                />

                                <span>telefon : {order?.shippingAdress?.telephone}</span>
                            </div>



                            <div className='cancel'>
                                <ButtomClick
                                    title='Cancel Order'
                                    style={Styles.TabButtomCreate}
                                    onClick={() => HandleCancelOrder(order)}
                                />
                            </div>



                        </div>



                    </div>

                </Col>
            ))


        }




        <EditOrder
            show={show}
            setShow={setShow}

        />


    </LoadingErrorHandle>
}


