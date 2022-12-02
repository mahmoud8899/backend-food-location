import { useContext, useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { MyOderImage } from '../../Assistant/MyOrderImage'
import { product_IDAction } from '../../redux/Action/Product_Action'
import { useDispatch, useSelector } from 'react-redux'
import LoadingScreen from '../../Components/LoadingScreen/LoadingScreen'
import CurrentScreen from '../../Components/Update/CurrentScreen/CurrentScreen'
import ImageScreen from '../../Components/ImageScreen/ImageScreen'
import ProductBackDetail from '../../Components/Update/ProductBackDetail/ProductBackDetail'
import { FilterCartDetials } from '../../Components/Update/UseContext/FilterRestarangeProduct'
import './style.css'
import { HiOutlineX } from 'react-icons/hi'
export default function RestaurantsOneProduct(props) {
    const {
        openCartProduct,
        setOpenCartProduct,
        CheckOutReload
    } = props

    const dispatch = useDispatch()
    const productID = useSelector((state) => state?.productID)
    const { loading, productId } = productID

    const { setIdProduct } = useContext(FilterCartDetials)



    // get product id
    useEffect(() => {

        if (openCartProduct?.value) {

            dispatch(product_IDAction(openCartProduct?.id))
            return setIdProduct(openCartProduct?.id)
        }
        // eslint-disable-next-line
    }, [openCartProduct, dispatch, setIdProduct])




    const [productInfo, setProductInfo] = useState(false)
    const handleClose = () => setOpenCartProduct({ value: false, id: '' })









    return loading ? <LoadingScreen /> : openCartProduct?.value ?

        <Modal show={openCartProduct?.value} onHide={handleClose}>

            <div className='scroll-CART'>
                {!productInfo ?

                    <>

                        <div className='scroll-iamge-text'>
                            <div className='box-Image'>


                                <ImageScreen
                                    ImageIcon={productId?.image}
                                    className='box-Image-children'
                                />

                                <div className='box-close' onClick={(e) => setOpenCartProduct({ value: false, id: '' })}>
                                <HiOutlineX
                                
                                className='close-pp-pp-image' />
                                   
                                </div>



                            </div>





                            <div className='cart-text-box class-padding-style-CART'>
                                <span className='cart-text-box-text color-family-CART'>{productId?.name}</span>
                                <span className='cart-text-box-prics color-family-CART'>kr {productId?.prices}</span>
                                <p className='cart-text-box-des color-last-items-CART'>
                                    {productId?.description}
                                </p>

                            </div>









                            <div className='product-info'>

                                <div className='cart-text-box-row class-padding-style-CART' onClick={(e) => setProductInfo(!productInfo)}>
                                    <span className='color-family-CART'>Product info</span>

                                    <ImageScreen ImageIcon={MyOderImage.right} className='rigthimage' />
                                </div>


                            </div>









                            <div className='addCart-box class-padding-style-CART'>
                                <CurrentScreen
                                    productId={productId}
                                    setOpenCartProduct={setOpenCartProduct}
                                    CheckOutReload={CheckOutReload}
                                    ScreenAdd
                                    
                                />
                            </div>


                        </div>





                    </>
                    :

                    <ProductBackDetail
                        productId={productId}
                        setProductInfo={setProductInfo}
                        productInfo={productInfo}
                        setOpenCartProduct={setOpenCartProduct}
                    />


                }













            </div>
        </Modal>




        : null


}

