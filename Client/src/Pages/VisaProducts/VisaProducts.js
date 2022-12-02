import { Container, Row, Col } from 'react-bootstrap'
import NavBarCity from '../NavBarCity/NavBarCity'
import Title from '../../Components/ScreenTitle/ScreenTitle'
import { useDispatch, useSelector } from 'react-redux'
import { FatchButik, GetCartInfoHomeRestranges } from '../../redux/Action/CartItemAction'
import LoadingErrorHandle from '../../Components/Update/LoadingErrorHandle/LoadingErrorHandle'
import FilterProducts from '../../Components/Update/FilterProducts/FilterProducts'
import { FilterCategory } from '../../Components/Update/UseContext/FilterCategoryScreen'
import { ErrorServer, LoadingSkeletonHomeCart, SearchingSkeleton } from '../../Assistant/TextError'
import { AnotherLocation } from '../LoactionPage/ChooseAnotherLocation'
import VisaProductItems from './VisaProductsItems'
import { useContext, useEffect } from 'react'
import './VisaProducts.css'


export default function VisaProducts(props) {

    // option   // params  
    // [1] filter category with restrant  class name FilterCategoryScreen
    // [2] : NavBarCity navbar selection restrant or butike
    // [3] : class name what is selection match?.params?.id
    // [4] : class name filter to category FilterProducts --- stopp now
    // [5] : class name LoadingErrorHandle : error loading

    const { match, location } = props

    const { getLocation, loading: LoadingLocation } = useContext(AnotherLocation)








    // restaurant or butik
    const IdMatch = match?.params?.id
    // const city = match?.url?.slice(1, 4) === 'upp' ? 'uppsala' : 'gothenburg'


    // filter category...
    const { setAddCart } = useContext(FilterCategory)


    const dispatch = useDispatch()

    // get all restrange and stores....
    const PageHomeRestrange = useSelector((state) => state?.PageHomeRestrange)
    const { home, error, nextNumber, stores, nextstoresnumber, loading } = PageHomeRestrange









    //  git all [1] :restrant 
    //  [2] stores 
    //  [3] set searching category    class name setAddCart
    useEffect(() => {


        if (IdMatch === 'butiker' && getLocation?.location?.lat !== null && getLocation?.location?.long !== null) {

             stores?.length === Number(0) && dispatch(FatchButik({
                lat: getLocation?.location?.lat,
                long: getLocation?.location?.long,
                productType: "butiker"
            }))

            return  setAddCart([])
        }else if (IdMatch !== 'butiker' && getLocation?.location?.lat !== null && getLocation?.location?.long !== null) {
            home?.length === Number(0) && dispatch(GetCartInfoHomeRestranges({
                lat: getLocation?.location?.lat,
                long: getLocation?.location?.long,
                productType: "restaurant"
            }))
            
             return IdMatch !== 'restaurants' && IdMatch !== 'butiker' ? setAddCart([IdMatch])
             : setAddCart([])

        }






        // return () => setAddCart([])




        // eslint-disable-next-line


    }, [IdMatch,
        dispatch,
        home?.length,
        stores?.length,
        setAddCart,
        getLocation?.location?.lat,
        getLocation?.location?.long,
    ])







 









    return <LoadingErrorHandle loading={LoadingLocation} type={SearchingSkeleton} >
        <Container fluid  >

            <Title TextTitle={match?.params?.id} />

            <div className='margin-top-category'>
                <NavBarCity ClassNameCategory={IdMatch === 'restaurants'} ClassNameLike={IdMatch === 'butiker'} />
            </div>


            <Row className='justify-content-center'   >
                <Col xs={12} sm={12} md={11} lg={11} className='extra-padding-dddd'>

                    <div className='visaProduct-css-flex'>
                        <div className='Title-name-products-text'>
                            <h1>{match?.params?.id}</h1>
                        </div>

                      {  IdMatch === 'butiker' ? null :  <FilterProducts location={location?.search} />}

                    </div>
                    <LoadingErrorHandle  loading={loading}  error={error} TextNotItems={ErrorServer} type={LoadingSkeletonHomeCart} >
                        <Row>
                            <VisaProductItems
                                home={IdMatch === 'butiker' ? stores : home}
                                fetchMore={IdMatch === 'butiker' ? nextstoresnumber : nextNumber}
                                IdMatch={IdMatch}
                                lat={getLocation?.location?.lat}
                                long={getLocation?.location?.long}


                            />
                        </Row>
                    </LoadingErrorHandle>


                </Col>

               
            </Row>


        </Container>


    </LoadingErrorHandle>





}


