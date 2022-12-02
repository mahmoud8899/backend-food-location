import { BestRestaurantAction, FatchButik, FoodTypesAction, FreeDeliveryAction, GetCartInfoHomeRestranges } from '../../redux/Action/CartItemAction'
import { ErrorServer, SkeletonHomeScreen, TextButiker, Textfree, TextCategory, LoadingSkeletonHomeCart, TextRestrantHome, TextBestHome, SkeletonCategory, HomeCarouselScreen } from '../../Assistant/TextError'
import LoadingErrorHandld from '../../Components/Update/LoadingErrorHandle/LoadingErrorHandle'
import RestrangeItems from './RestrangeItems/RestrangeItems'
import CategoryScreen from './CategoryScreen/CategoryScreen'
import TimeContext from '../../Components/Update/UseContext/TimeContext'
import LoginDriverScreen from './LoginDriverScreen/LoginDriverScreen'
import Title from '../../Components/ScreenTitle/ScreenTitle'
import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import { FirstNameRest } from '../../Assistant/Selection'
import NavBarCity from '../NavBarCity/NavBarCity'
import Carousel from './Carousel/Carousel'
import { useEffect, useContext,   } from 'react'
import { AnotherLocation } from '../LoactionPage/ChooseAnotherLocation'
import { Link } from 'react-router-dom'
import './Home.css'



export default function HomeScreen(props) {

    // // whoy params id
    // const { match } = props
    // // city name
    //  const LocationPath = match.params.id
    //  console.log(LocationPath)


    // location User
    const { getLocation, loading: loadingLocation } = useContext(AnotherLocation)






    const dispatch = useDispatch()

    // get all restrange and stores....
    const PageHomeRestrange = useSelector((state) => state?.PageHomeRestrange)
    const { loading, error, stores, home } = PageHomeRestrange



    // get Best Restaurant
    const pageHomeNewBestRestrant = useSelector((state) => state?.pageHomeNewBestRestrant)
    const { loading: loadingnewBestRestaurant, BestRestaurant, error: errornewBestRestaurant } = pageHomeNewBestRestrant

    // category all 
    const pageHomeCategory = useSelector((state) => state?.pageHomeCategory)
    const { loading: loadingCategory, category, error: errorCategory } = pageHomeCategory

    // user info 
    const userLogin = useSelector((state) => state?.userLogin)
    const { userInfo } = userLogin



    // get all restrange
    useEffect(() => {


        if (getLocation?.location?.lat !== null && getLocation?.location?.long !== null) {
            return BestRestaurant?.length === Number(0) && dispatch(BestRestaurantAction({
                lat: getLocation?.location?.lat,
                long: getLocation?.location?.long,
                productType: "restaurant"
            }))
        }


    }, [dispatch,
        BestRestaurant?.length,
        getLocation?.location?.lat,
        getLocation?.location?.long,
    ])




    // get all butiker
    useEffect(() => {
        if (getLocation?.location?.lat !== null && getLocation?.location?.long !== null) {
            stores?.length === Number(0) && dispatch(FatchButik({
                lat: getLocation?.location?.lat,
                long: getLocation?.location?.long,
                productType: 'butiker'

            }))

            return
        }


    }, [dispatch, stores?.length, getLocation?.location?.lat,
        getLocation?.location?.long,])



    // get all restrant
    useEffect(() => {


        return getLocation?.location?.lat !== null && getLocation?.location?.long !== null && home?.length === Number(0) && dispatch(GetCartInfoHomeRestranges({
            lat: getLocation?.location?.lat,
            long: getLocation?.location?.long,
            productType: 'restaurant'
        }))




    }, [


        dispatch,
        getLocation?.location?.lat,
        getLocation?.location?.long,
        home?.length
    ])





    // get free delivery from restrest and stores
    const pageHomeFreeDelivery = useSelector((state) => state?.pageHomeFreeDelivery)
    const { loading: loadingFreedelivery, freedelivery, error: errorFreedelivery } = pageHomeFreeDelivery
    //  free delivery
    useEffect(() => {
        if (getLocation?.location?.lat !== null && getLocation?.location?.long !== null) {

            return freedelivery?.length === Number(0) && dispatch(FreeDeliveryAction({
                lat: getLocation?.location?.lat,
                long: getLocation?.location?.long,
            }))
        }


    }, [dispatch,
        freedelivery?.length,
        getLocation?.location?.lat,
        getLocation?.location?.long,])





    // category
    useEffect(() => {

        category.length === Number(0) && dispatch(FoodTypesAction())

    }, [dispatch, category.length])

    // [1]  LoadingErrorHandld this is check out error and loading if not error coming data  
    // [2]  Limit new restrange max 8 itmes. and Carousel some data
    // [3] : stores 
    // [4] : free category 
    // [5]   class name category ....>   CategoryScreen  
    // [6] driver resgstira 





    // const scrollUseRef = useRef()

    // useEffect(() => {
    //     scrollUseRef.current?.scrollIntoView({
    //         block: "nearest",
    //         inline: "center",
    //         behavior: "smooth",
    //         alignToTop: false
    //     });
    //     // eslint-disable-next-line
    // }, [])







    // testing loading.... skeleton.

    return <LoadingErrorHandld loading={loadingLocation} type={SkeletonHomeScreen} >
        <TimeContext>
            <Container fluid     >
                <Title TextTitle={FirstNameRest} />



                <div className='margin-top-like'>
                    <NavBarCity ClassNameHOMEactive />
                </div>


                <Row className='justify-content-center' >




                    <Col xs={12} sm={12} md={11} lg={11}>

                        <LoadingErrorHandld
                            loading={loadingnewBestRestaurant}
                            error={errornewBestRestaurant}
                            TextNotItems={ErrorServer}
                            type={HomeCarouselScreen}
                        >
                            <Carousel home={BestRestaurant} Title={TextBestHome} />
                        </LoadingErrorHandld>





                        <LoadingErrorHandld
                            loading={loading}
                            error={error}
                            TextNotItems={ErrorServer}
                            type={LoadingSkeletonHomeCart}
                        >
                            <RestrangeItems home={home} Title={TextRestrantHome}
                                // nextNumber={nextNumber}
                                TheRedirect={
                                    <Link to={{ pathname: '/restaurants/' }} className='Visa-alla' >Visa alla</Link>
                                }
                            />


                        </LoadingErrorHandld>


                        <LoadingErrorHandld
                            loading={loading}
                            error={error}
                            TextNotItems={ErrorServer}
                            type={LoadingSkeletonHomeCart}
                        >
                            <RestrangeItems
                                home={stores}
                                Title={TextButiker}
                                TheRedirect={
                                    <Link to={{ pathname: '/butiker/' }} className='Visa-alla' >Visa alla</Link>
                                }


                            />
                        </LoadingErrorHandld>



                        {userInfo?.email &&
                            <div className='LoginDriverScreen'>

                                <LoginDriverScreen />


                            </div>
                        }

                        <LoadingErrorHandld
                            loading={loadingFreedelivery}
                            error={errorFreedelivery}
                            TextNotItems={ErrorServer}
                            type={LoadingSkeletonHomeCart}
                        >
                            <RestrangeItems home={freedelivery} Title={Textfree} />
                        </LoadingErrorHandld>


                        <LoadingErrorHandld
                            loading={loadingCategory}
                            error={errorCategory}
                            TextNotItems={ErrorServer}
                            type={SkeletonCategory}
                        >
                            <CategoryScreen category={category} Title={TextCategory} />
                        </LoadingErrorHandld>










                    </Col>
                    {/* <Footer /> */}
                </Row>




       

            </Container>

        </TimeContext>
    </LoadingErrorHandld>






}








