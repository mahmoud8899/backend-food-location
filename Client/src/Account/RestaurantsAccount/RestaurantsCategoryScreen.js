import Title from '../../Components/ScreenTitle/ScreenTitle'
import { useDispatch, useSelector } from 'react-redux'
import CartItemsCategory from './Datils/CartItemsCategory'
import { FetchCategoryUser } from '../../redux/Action/Category_Action'
import CategoryEditOchCreate from './Datils/CategoryEditOchCreate'
import LoadingErrorHandle from '../../Components/Update/LoadingErrorHandle/LoadingErrorHandle'
import { PageTextEmpty } from '../../Components/Update/PageEmpty/PageEmpty'
import NavBarSearchingTopAll from '../../Components/Update/NavBarSearchingTopAll/NavBarSearchingTopAll'
import { ErrorServer, CategoryTextCeate, categorySearching } from '../../Assistant/TextError'
import {Fragment, useEffect, useState } from 'react'
import { BiCloudUpload } from 'react-icons/bi'
import './style.css'





export default function RestaurantsCategoryScreen(props) {

    const { history } = props

    // appen requrest category....
    const dispatch = useDispatch()

    // user check ut
    const userLogin = useSelector((state) => state?.userLogin)
    const { userInfo } = userLogin
    // open edit and create.....
    const [editCategory, setEditCategory] = useState({ value: false, object: '' })
    // get all category to user.
    const UserpageCategory = useSelector((state) => state?.UserpageCategory)
    const { loading: UserpageCategoryloading, error: UserpageCategoryerror, usercategory } = UserpageCategory
    // event after reqqurest...
    const PageCategory = useSelector((state) => state?.PageCategory)
    const { updated, create, remove } = PageCategory








    // requrest category
    useEffect(() => {

        if (userInfo?.restaurantid) {
            return userInfo?.cartinfo && usercategory?.length === 0 && dispatch(FetchCategoryUser())
        } else {
            return history.push('/uppsala/')
        }
    }, [usercategory?.length, dispatch, userInfo, history])




    // updated and create category....
    // fetch data after updated and remove 
    // [1] : updated category
    useEffect(() => {

        if (updated || create || remove) {


            dispatch(FetchCategoryUser())
            return
        }

    }, [updated, create, dispatch, remove])


    // searching in category....
    const [query, setQuery] = useState("");
    const keys = ["name"];
    const search = (data) => {
        return data?.filter((item) =>
            keys?.some((key) => item[key]?.toLowerCase()?.includes(query))
        )
    };




    return <Fragment>




        <Title TextTitle='product Admin' />







                {userInfo?.cartinfo && !UserpageCategoryerror &&

                    <NavBarSearchingTopAll
                    onClick={() => setEditCategory({ value: true })}
                        setQuery={setQuery}
                        query={query}
                        Icons={BiCloudUpload}
                        TextIcons={CategoryTextCeate}
                        Placeholder={categorySearching}
                        IconStyle
                    />


                   
                }





                {usercategory?.length === Number(0) || usercategory === 'Empty' ?

                    <PageTextEmpty Pagetext='skapa ny kategori ' />

                    :

                    <LoadingErrorHandle
                        loading={UserpageCategoryloading}
                        error={UserpageCategoryerror}
                        home={usercategory}
                        TextNotItems={ErrorServer}
                        extraStyle
                    >

                        <CartItemsCategory
                            ListCategoryUX={search(usercategory)}
                            setEditCategory={setEditCategory}

                        />
                    </LoadingErrorHandle>

                }




        <CategoryEditOchCreate
            editCategory={editCategory}
            setEditCategory={setEditCategory}
            userInfo={userInfo}
        />





</Fragment>



}

