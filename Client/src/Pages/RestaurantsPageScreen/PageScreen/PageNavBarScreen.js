import { Col } from 'react-bootstrap'
import Rating from '../../../Components/Rating/Rating'
import { MyOderImage } from '../../../Assistant/MyOrderImage'
import YourFvourite from '../../../Components/Update/YourFvourite/YourFvourite'
import { useSelector } from 'react-redux'
import ImageScreen from '../../../Components/ImageScreen/ImageScreen'
import InputSearchingRestrange from '../../../Components/Update/InputSearchingRestrange/InputSearchingRestrange'
import RestaurangetsProductRating from '../RestaurangetsProductRating'
import { SearchingContext } from '../../../Components/Update/UseContext/SearchingResult'
import { useContext, useState } from 'react'


export default function PageNavBarScreen(props) {
    const {
        setOpenDescription,
        openDescription,
        NavBarScroll,
        addTop,
        category,
        ChangeParams
    } = props



    // searching input to context
    const { setSearching, searching } = useContext(SearchingContext)


    // console.log(searching)


    // cart info 
    const cartInfoid = useSelector((state) => state?.cartInfoid)
    const { cartinfo } = cartInfoid
    // user info 
    const userLogin = useSelector((state) => state?.userLogin)
    const { userInfo } = userLogin
    // open the rating.... from user.... 
    const [showRating, setShowRating] = useState(false)


    return <Col xs={12} sm={12} md={12} lg={11} className='removePaddingmarggin zIndexadd' >


        <div className='NavBarRating'>

            <div className='NavBarRating-first'>

                <div className='class-box-favourit'>

                    <div className='rating-views' onClick={() => userInfo?.firstname ? setShowRating(!showRating) : null}>
                        <Rating value={cartinfo?.rating} text={`${cartinfo?.numReviews}`} />
                    </div>



                    <YourFvourite />
                </div>

                <div className='filter-product-product'>
                    <InputSearchingRestrange />
                </div>


            </div>



            <div className='time-rest' onClick={() => setOpenDescription(!openDescription)}>

                <ImageScreen
                    ImageIcon={MyOderImage.clock}
                    className='image-favourite express-image'
                />
                <span className='text-favourit'>{cartinfo?.opentime?.oppen}</span>
                <div className='time-rest-buttom'>
                    more info
                </div>
            </div>



            <div className={addTop}>
                <div className='CategoryList' ref={NavBarScroll}>
                    <ul className='CategoryList'>
                        {category?.map((cat, Index) => (
                            <li
                                key={Index}
                                className={searching === cat?.name ? 'font-name-size font-all-all-edit add-color-cart' : 'font-name-size font-all-all-edit'}
                                onClick={() => setSearching(cat?.name)}  >{cat?.name}</li>
                        ))}
                    </ul>

                </div>

            </div>





        </div>








        <RestaurangetsProductRating
            showRating={showRating}
            setShowRating={setShowRating}
            cartid={cartinfo?._id}
            ChangeParams={ChangeParams}

        />





    </Col>

}