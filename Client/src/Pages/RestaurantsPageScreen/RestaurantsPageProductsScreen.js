import { Container, Row } from 'react-bootstrap'
import React, { useContext, useEffect,  useState } from 'react'
import RestaurantsYourOrderCart from './RestaurantsYourOrderCart'
import RestaurantsNavBarCart from './RestaurantsNavBarCart'
import RestaurangetsDescription from './RestaurangetsDescription'
import PageItemsScreen from './PageScreen/PageItemsScreen'
import PageNavBarScreen from './PageScreen/PageNavBarScreen'
import PagePhotoResta from './PageScreen/PagePhotoResta'
import { ScrollDrow } from '../../Components/SocketScreen/ScrollDrown'
import { getCategoryAction } from '../../redux/Action/Category_Action'
import { useDispatch, useSelector } from 'react-redux'
import CartScreen from '../../Components/Update/CartScreen/CartScreen'
import { GetCartInfoIdAction } from '../../redux/Action/CartItemAction'
import RestaurantsPagePhotoNavBar from './RestaurantsPagePhotoNavBar'
import Title from '../../Components/ScreenTitle/ScreenTitle'
import { FilterCartDetials } from '../../Components/Update/UseContext/FilterRestarangeProduct'
import LoadingErrorHandle from '../../Components/Update/LoadingErrorHandle/LoadingErrorHandle'
import { ErrorServer ,LoadingSkeletonProductPage} from '../../Assistant/TextError'
import './style.css'





export default function RestaurantsPageProductsScreen(props) {

    const { match } = props
    //  const  itemproduct =   match.params.id
    //  const xp = itemproduct.join(' ')
    // console.log()




    const dispatch = useDispatch()

    // filter cart items 
    const { setLocationNotNu } = useContext(FilterCartDetials)
    // open your order
    const [yourOrder, setYourOrder] = useState(false)
    // open description restaurang
    const [openDescription, setOpenDescription] = useState(false)

    // nav bar scroll from context....
    const { addTop, hiddenNavBar, NavBarScroll } = useContext(ScrollDrow)

    // filter linke after thet send requrest to server 
    const ChangeParams = match.params.id.replace("-", " ")
    // const CityName = match.url?.slice(1, 5) === 'upps' ? 'uppsala' : 'gothenburg'



    // console.log(ChangeParams)
    // send requrest to category och run
    const [categoryRun, setcategoryRun] = useState(false)

    //get cart info 
    // event error and loading.....
    // testing loading okej
    const cartInfoid = useSelector((state) => state?.cartInfoid)
    const { loading: loadingCartInfo, cartinfo, error: errorCartInfo } = cartInfoid



    // get all category to restrange.
    // get all category to restraurn
    const CategoryPublic = useSelector((state) => state?.PagePublicCategory?.category[cartinfo?._id]) || []

    // category loading and error // event sometheig error 
    // testing okey....
    const CategoryPublicError = useSelector((state) => state?.PagePublicCategory)
    const { error: errorCategoryPublicError, loading: loadingCategoryPublicError } = CategoryPublicError



    // cart info id   
    // testing and loading this is okej 
    useEffect(() => {
        if (ChangeParams) {
            dispatch(GetCartInfoIdAction(ChangeParams))
            setcategoryRun(true)
            return
        }
        // eslint-disable-next-line
    }, [ChangeParams, dispatch])




    // const locateAddress = useSelector((state) => state.locateAddress)
    // // const { loading } = locateAddress

    // console.log(locateAddress)





    // get all category.....
    // get cart id to cart order
    // testing and loading this is okej 
    useEffect(() => {

        if (categoryRun)
            if (typeof cartinfo?._id === 'string' || typeof cartinfo?._id !== 'undefined') {
                CategoryPublic?.length === 0 && dispatch(getCategoryAction(cartinfo?._id))
                return setLocationNotNu(cartinfo?._id)

            }

        // eslint-disable-next-line
    }, [cartinfo, dispatch, categoryRun, setLocationNotNu])





    // options
    // [1] : navbar cart add deliver and takeway open time  selection  besket cart ---- RestaurantsNavBarCart
    // [2] :  photo restruang ---PagePhotoResta
    // [3] :   restrurange name  --- RestaurantsPagePhotoNavBar
    // [4] :    nav nar views all category och time rating  and searching.....



    return <Container fluid >
        <LoadingErrorHandle
            loading={loadingCartInfo}
            error={errorCartInfo}
            TextNotItems={ErrorServer}
            type={LoadingSkeletonProductPage}
        >
            <Title TextTitle={ChangeParams} />
            {/* nav bar time o besket */}
            <RestaurantsNavBarCart
                hiddenNavBar={hiddenNavBar}
                yourOrder={yourOrder}
                setYourOrder={setYourOrder}
                openDescription={openDescription}
                setOpenDescription={setOpenDescription}
                cartinfo={cartinfo}
            />
            <Row className='justify-content-center'>

                {/* image to restrange */}
                <PagePhotoResta cartinfo={cartinfo} />


                <LoadingErrorHandle
                    error={errorCategoryPublicError}
                    loading={loadingCategoryPublicError}
                    TextNotItems={ErrorServer}
                >

                    {/* name restrurang */}
                    <RestaurantsPagePhotoNavBar
                        category={CategoryPublic}
                        cartinfo={cartinfo}
                    />

                    {/* views all category och time rating  and seaching  */}
                    <PageNavBarScreen
                        setOpenDescription={setOpenDescription}
                        openDescription={openDescription}
                        NavBarScroll={NavBarScroll}
                        addTop={addTop}
                        category={CategoryPublic}
                        ChangeParams={ChangeParams}

                    />
                    {CategoryPublic?.length >= 1 &&

                        <PageItemsScreen
                            idRes={cartinfo?._id}
                            category={CategoryPublic}
                        />
                    }

                </LoadingErrorHandle>






            </Row>

            {/* besket bottom */}
            <CartScreen
                setYourOrder={setYourOrder}
                yourOrder={yourOrder}
            />



            {/* selection your cart  */}
            <RestaurantsYourOrderCart
                setYourOrder={setYourOrder}
                yourOrder={yourOrder}
            />



            {/* datilas restrange  */}

            <RestaurangetsDescription
                openDescription={openDescription}
                setOpenDescription={setOpenDescription}
                cartinfo={cartinfo}

            />

                   {/* <Footer /> */}
        </LoadingErrorHandle>
      
    </Container>
}







    // const scrollUseRef = useRef()
    // ref={scrollUseRef}
    // useEffect(() => {
    //     scrollUseRef.current?.scrollIntoView({
    //         block: "nearest",
    //         inline: "center",
    //         behavior: "smooth",
    //         alignToTop: false
    //     });
    //     // eslint-disable-next-line
    // }, [])



    // const tESTINFL = true
