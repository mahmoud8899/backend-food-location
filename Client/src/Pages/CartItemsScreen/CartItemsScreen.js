import { Link } from "react-router-dom";
import { MyOderImage } from "../../Assistant/MyOrderImage";
import { TheTimeOppenProduct } from "../../Assistant/TheTimeOppenProduct";
import ImageScreen from "../../Components/ImageScreen/ImageScreen";
import Rating from "../../Components/Rating/Rating";
import { Conversion } from "../../Components/Update/Conversion/Conversion";
import Styles from "../../Components/Update/StylesComponents/style";
import '../Home/Home.css'




export default function CartItemsScreen(props) {

    const { item, newRest } = props

    



    return <div className='box-Slider-Sitemw-itemme-children'>
        <div className='list-image'>
            <Link to={{ pathname: Conversion(item) }}>
                {item?.image ? <ImageScreen ImageIcon={item?.image}
                    className='image-res'
                /> : <ImageScreen ImageIcon={MyOderImage.clock}
                    className='image-res'
                />}
            </Link>


            {newRest && <div className='new-restrange'>
                new
            </div>
            }

            {TheTimeOppenProduct(item?.opentime)?.toString() === 'true' ?

                <></>
                :
                <Link className='list-image-close' to={{ pathname: Conversion(item) }} >
                    stängd
                </Link>

            }


        </div>



        <div className='medi-size'>


            <div className='title'>
                <div className='box-name'>
                    <span className='font-name-size font-all-all-edit add-color-cart' >{item?.username}</span>
                    <span className='font-name-size-line'>{item?.addressinfo?.city}</span>

                </div>



            </div>


            <div className='title-bottom' style={Styles.buttom}>



                <ImageScreen
                    ImageIcon={MyOderImage.delivery}
                    className='driver-image'
                />

                <div className='title-bottom-price'>
                    SEK0.00
                </div>
                <div className='title-bottom-price dispay'>
                    <Rating value={item?.rating} text={item?.numReviews} />
                </div>

                <div className='driver'>
                    <div >{item?.finishfood?.to}-{item?.finishfood?.to}</div>
                    <div className='class-last'> min</div>
                </div>

            </div>

        </div>






    </div>




}