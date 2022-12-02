import { useDispatch, useSelector } from 'react-redux'
import { PorudtsActionPaganationPublic } from '../../../redux/Action/Product_Action'
import { useEffect, useState, useContext } from 'react'
import RestaurantsOneProduct from '../RestaurantsOneProduct'
import RestaurantProducts from '../../../Components/Update/RestaurantProducts/RestaurantProducts'
import LoadingErrorHandle from '../../../Components/Update/LoadingErrorHandle/LoadingErrorHandle'
import { ErrorServer } from '../../../Assistant/TextError'
import { SearchingContext } from '../../../Components/Update/UseContext/SearchingResult'
import InfiniteScrollData from '../../../Components/InfiniteScroll/InfiniteScroll'
export default function PageItemsScreen(props) {
    const { idRes, category } = props




    //option if costus will searching with products
    // input searching and remove searching
    const { searching, setSearching } = useContext(SearchingContext)
    // open one product....
    const [openCartProduct, setOpenCartProduct] = useState({ value: false, id: '' })
    const dispatch = useDispatch()


    //pagination products...
    // next page and event error and loading
    const matProducts = useSelector((state) => state?.PagePublicProducts?.allProducts[idRes]) || []
    const NumberPages = useSelector((state) => state?.PagePublicProducts?.productNextNumber[idRes]) || null
    const ProductList = useSelector((state) => state?.PagePublicProducts)
    const {  error } = ProductList





    // get all products .....
    // testing loading and error
    useEffect(() => {
        if (idRes) {
            return matProducts?.length === 0 && dispatch(PorudtsActionPaganationPublic(idRes))
        }

    }, [idRes, dispatch, NumberPages, matProducts?.length])



    // open sigel page one product
    const HandleOpenProductid = (e, id) => {
        e.preventDefault()
        return setOpenCartProduct({ value: true, id: id })

    }



    // fetching products....
    const fetchData = () => {

      
        if (NumberPages > Number(1)) {
            if (idRes) {
                return dispatch(PorudtsActionPaganationPublic(idRes))
            }
        }
    }


    // [1] : scroll All products and paganition.....
    // [2] : one products if custom click 

    // searching in category....
    const keys = ["name", "description"];
    const search = (data) => {
        return data?.filter((item) =>

            keys?.some((key) => item?.category ? item?.category[key]?.includes(searching) : item[key]?.includes(searching))
            || keys?.some((key) => item[key]?.includes(searching))

        )
    };

    
    


    return <LoadingErrorHandle error={error}  TextNotItems={ErrorServer} >
    
    <div className='Margin-top-lit'>
        <InfiniteScrollData
            products={matProducts}
            categoryProductsNextPagesxp={NumberPages}
            fetchData={fetchData}
            TypeSkeleton='OneCart'
        >
            <RestaurantProducts
                matProducts={search(matProducts)}
                HandleOpenProductid={HandleOpenProductid}
                setSearching={setSearching}
                searching={searching}
                category={category}
            />

        </InfiniteScrollData>


        <RestaurantsOneProduct
            openCartProduct={openCartProduct}
            setOpenCartProduct={setOpenCartProduct}
        />




    </div >

    </LoadingErrorHandle>














}


// {/* <LoadingErrorHandle error={error} loading={loading} TextNotItems={ErrorServer} >
        // <div className='Margin-top-lit'></div>
        // <RestaurantsOneProduct
        //         openCartProduct={openCartProduct}
        //         setOpenCartProduct={setOpenCartProduct}
        //     />




        // </div>

//     </LoadingErrorHandle> */}
// {/* <InfiniteScroll
// style={Styles.hidden}
// dataLength={matProducts?.length}
// next={fetchData}
// hasMore={NumberPages !== null ? 'false' : 'true'}
// loader={NumberPages !== null ?  <div className='center-loading'><LoadingScreen /></div> : null}
// endMessage={<p ><b>Yay! You have seen it all</b> </p>}
// >
// </InfiniteScroll> */}