import { Fragment, useContext, useEffect, useState } from 'react'
import { FoodTypesAction } from '../../../redux/Action/CartItemAction'
import { useDispatch, useSelector } from 'react-redux'
import LoadingErrorHandle from '../LoadingErrorHandle/LoadingErrorHandle'
import { FilterCategory } from '../UseContext/FilterCategoryScreen'
import { BsFilterRight } from 'react-icons/bs'
import { Modal } from 'react-bootstrap'
import ButtomClick from '../../Buttom/Buttom'
import Styles from '../StylesComponents/style'


export default function FilterProducts(props) {



    // filter category 
    const { addCart, setAddCart } = useContext(FilterCategory)

    // open and close. filter
    const [show, setShow] = useState(false)

    // get all category...
    const pageHomeCategory = useSelector((state) => state?.pageHomeCategory)
    const { loading: loadingCategory, category, error: errorCategory } = pageHomeCategory
    const dispatch = useDispatch()


    // get category
    useEffect(() => {

        // if(props?.location) return 
        return category?.length === Number(0) && dispatch(FoodTypesAction())
    }, [category?.length, dispatch])
















    // items testing
    const FunctionAdd = (queryData) => {

        const items = queryData
        const filterItmes = addCart?.includes(items)

        if (filterItmes) {

            return setAddCart(prev => [...prev?.filter((x) => x !== items)])
        } else {
            return setAddCart(prev => [...prev, items])
        }

    }








    return <Fragment>



        <div className='Title-name-products-filter' onClick={() => setShow(true)} >
            <div className='text-filter-product'>
                Sorterat per Rekommenderas
            </div>
            <div className='text-filter-product-method'>
                <BsFilterRight className='close-pp-pp-image notColor' />
            </div>
        </div>


        <Modal show={show} onHide={() => setShow(false)}>

            <div className='Title-name-products-text  add-padding-filter'>

                <h1>filtrera</h1>
            </div>






            <LoadingErrorHandle loading={loadingCategory} error={errorCategory} home={category} >
                <div className='filter-text add-padding-filter'>
                    {category?.map((food, Index) => (
                        <span
                            key={Index}
                            onClick={(e) => FunctionAdd(food?.foodType)}
                            className={addCart?.includes(food?.foodType) ? 'Active-items-filter active' : 'Active-items-filter'}
                        >{food?.foodType}</span>
                    ))}
                </div>
            </LoadingErrorHandle>


            <div className='buttom-close' onClick={() => setShow(false)}>
                <ButtomClick  title='spara' style={Styles.TabButtomCreate} />
                
            </div>

        </Modal>



    </Fragment>
}

