import Styles from '../StylesComponents/style'
import { Fragment, useContext, useEffect, useState } from 'react'
import { CollectNumber } from '../../../Assistant/CollectNumber'
import { AddCart_Action, RemoveCart_Action } from '../../../redux/Action/Cart_Action'
import { FilterCartDetials } from '../UseContext/FilterRestarangeProduct'
import { BiPlus } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { IoRemove, IoTrashOutline } from 'react-icons/io5'

export default function CurrentScreen(props) {
    const {
        productId,
        YourOrderClass,
        setOpenCartProduct,
        ScreenAdd,
        CheckOutReload
    } = props








    const { mapsFil } = useContext(FilterCartDetials)


    const dispatch = useDispatch()

    const [courrent, setCourrent] = useState(
        ScreenAdd ?
            mapsFil?.qty ? mapsFil?.qty : 1 :
            productId?.qty ? productId?.qty : 1)
    const [openArray, setOpenArray] = useState(false)






  


    // this is object 
    const CartProduct = {
        _id: productId?.product ? productId?.product : productId?._id,
        name: productId?.name,
        prices: productId?.prices,
        image: productId?.image,
        cartinfo: productId?.cartinfo,
        description: productId?.description,
        qty: courrent
    }




    useEffect(() => {

        if (courrent && openArray) {

            dispatch(AddCart_Action(CartProduct))

            return setOpenArray(false)

        } else {
            return
        }
        // eslint-disable-next-line
    }, [courrent, openArray])











    // this is add to cart 
    const AddProductCart = (e) => {

        e.preventDefault()
        if (CartProduct) {
            //  console.log(productId)
            dispatch(AddCart_Action(CartProduct))
            setOpenCartProduct({ value: false, id: '' })

            return

        }

    }



    // add plus more 
    const CourrentPlus = () => {

        if (YourOrderClass && courrent) {

            setCourrent(prev => prev + 1)


            return setOpenArray(true)


        }

        return setCourrent(prev => prev + 1)
    }



    // add minuse,,,,,
    const CurrentMinus = () => {




        if (YourOrderClass) {
            setCourrent(prev => prev - 1)
            // console.log(CartProduct)
            return setOpenArray(true)
        }
        return setCourrent(prev => prev - 1)
    }


    const Testingup = (e) => {
        e.preventDefault()


        if (CheckOutReload) {
            // testing... console.log('hello')
            if (courrent === Number(0)) return
            return setCourrent(prev => prev - 1)

        }



        if (courrent === Number(1)) {
            return dispatch(RemoveCart_Action(productId?.product ? productId?.product : productId?._id))
        }


    }



    // this is remove cart 
    const TheRemove = (e) => {
        e.preventDefault()
        dispatch(RemoveCart_Action(productId?.product ? productId?.product : productId?._id) )
        return setOpenCartProduct({ value: false, id: '' })

    }






    return <Fragment>


        <div style={Styles.backgroundAll} className={YourOrderClass ? 'remove-your-order-create add-transtion' : 'curent-box'}>


            <div className='Icons_click' style={CheckOutReload ? courrent === 0 ? Styles.backgroundSizenot : Styles.backgroundSize
                :
                courrent === 1 ? Styles.backgroundSizenot : Styles.backgroundSize} >
                <IoRemove
                    className='Icons_click-color'
                    onClick={(e) => courrent <= 1 ? Testingup(e) : CurrentMinus()} />
            </div>
            <div className='add-more-center'>
                {courrent}
            </div>

            <div className='Icons_click' style={Styles.backgroundSize} onClick={CourrentPlus} >
                <BiPlus className='Icons_click-color' />

            </div>

            {YourOrderClass &&
                <div className='center-c-more' onClick={(e) => dispatch(RemoveCart_Action(productId?.product ? productId?.product : productId?._id) )} >
                    <IoTrashOutline className='center-c-more-style' />
                </div>
            }


        </div>


        {YourOrderClass ? null :
            <div style={courrent === 0 ? Styles.backgroundAllnotcolor : Styles.backgroundAll} className='AddCart-box-add'
                onClick={(e) => courrent === 0 ? TheRemove(e) : AddProductCart(e)}

            >
                {courrent === 0 ?
                    <span>
                        ta bort från beställning
                    </span>
                    :
                    <>
                        <span className='color-family add-diffren'> Lägg till beställning</span>
                        <span className='color-family add-diffren'>kr
                            {CollectNumber(courrent, productId?.prices)}
                        </span>
                    </>
                }

            </div>
        }


    </Fragment>
}

