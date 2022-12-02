import NavBarSearchingTopAll from '../../Components/Update/NavBarSearchingTopAll/NavBarSearchingTopAll'
import Title from '../../Components/ScreenTitle/ScreenTitle'
import CartItemsProducts from './Datils/CartItemsProducts'
import { productpaginationAction } from '../../redux/Action/Product_Action'
import { useDispatch, useSelector } from 'react-redux'
import ProductEditOchCreate from './Datils/ProductEditOchCreate'
import { TheClearing } from '../../Components/CloseScreen/CloseScreen'
import { FetchCategoryUser } from '../../redux/Action/Category_Action'
import { PageTextEmpty } from '../../Components/Update/PageEmpty/PageEmpty'
import LoadingErrorHandle from '../../Components/Update/LoadingErrorHandle/LoadingErrorHandle'
import { ErrorServer, TextProduct, IconText, PlaceholderProduct } from '../../Assistant/TextError'
import { Fragment,useEffect, useState } from 'react'
import { BiCloudUpload } from 'react-icons/bi'
import './style.css'





export default function RestaurantsProductScreen(props) {

    const { history } = props




    // testing 
    const loading = false
    const dispatch = useDispatch()
    // user check ut
    const userLogin = useSelector((state) => state?.userLogin)
    const { userInfo } = userLogin

    // get all products..
    const matProducts = useSelector((state) => state?.PaginationProducts)
    const { categoryProductsNextPagesxp, products, error } = matProducts

    // [1]  open create product --- show.value equal true
    // [2] show.object  has object product for edit 
    const [show, setShow] = useState({ value: false, object: '' })

    //----------- updated and remove and create product  ---------- important ---------->
    const PageUpdatedProduct = useSelector((state) => state?.PageUpdatedProduct)
    const { updated, created, removeproduct } = PageUpdatedProduct


    // get all category to user.
    const UserpageCategory = useSelector((state) => state?.UserpageCategory)
    const { usercategory: ListCategoryUX } = UserpageCategory





    // console.log(userInfo)
    // '622b3885fc1613a48d2dc4fb1'
    // get products...
    useEffect(() => {
        if (userInfo?.restaurantid) {
            return userInfo?.cartinfo && products?.length === 0 && dispatch(productpaginationAction(userInfo?.cartinfo))
        } else {
            return history.push('/uppsala/')
        }

    }, [
        dispatch,
        products,
        userInfo,
        history
    ])







    // get all category to restrant
    useEffect(() => {

        if (userInfo?.restaurantid) {


            return products?.length === Number(0) && userInfo?.cartinfo
                && ListCategoryUX?.length === 0 && dispatch(FetchCategoryUser())
        } else {
            return history.push('/uppsala/')
        }


    }, [
        dispatch,
        userInfo,
        ListCategoryUX,
        history,
        products,


    ])







    // Update State and products...
    // if there is an updated and remove and create
    useEffect(() => {

        if (updated || created || removeproduct) {

            return TheClearing(dispatch)

        }

    }, [
        dispatch,
        updated,
        created,
        removeproduct
    ])



    // searching with products....
    const [query, setQuery] = useState("");
    const keys = ["name"];
    const search = (data) => {
        return data?.filter((item) =>
            keys?.some((key) => item[key]?.toLowerCase()?.includes(query))
        );
    };













    return <Fragment>
        <Title TextTitle='Alla Produkter...' />

        <LoadingErrorHandle
            loading={loading}
            error={error}
            home={products}
            TextNotItems={ErrorServer}
            TextData='ccc'
            extraStyle
        >


            {ListCategoryUX?.length !== 0
                && ListCategoryUX !== 'Empty'
                && userInfo?.cartinfo &&
                <NavBarSearchingTopAll
                    onClick={(e) => setShow({ value: true, object: '' })}
                    setQuery={setQuery}
                    query={query}
                    Icons={BiCloudUpload}
                    TextIcons={IconText}
                    Placeholder={PlaceholderProduct}
                    IconStyle
                />
            }



            {products?.length === Number(0) ?
                <PageTextEmpty Pagetext={TextProduct} />

                :
                <CartItemsProducts
                    products={search(products)}
                    setShow={setShow}
                    categoryProductsNextPagesxp={categoryProductsNextPagesxp}
                    resturantId={userInfo?.cartinfo}
                />
            }






            {show?.value &&


                <ProductEditOchCreate
                    show={show}
                    setShow={setShow}
                    userInfo={userInfo}
                    ListCategoryUX={ListCategoryUX}
                />

            }



        </LoadingErrorHandle>

    </Fragment>




}









