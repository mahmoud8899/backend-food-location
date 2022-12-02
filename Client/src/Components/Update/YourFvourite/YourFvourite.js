import { useSelector } from 'react-redux'
import LoadingScreen from '../../LoadingScreen/LoadingScreen'
import { useDispatch } from 'react-redux'
import { AddLikeCartAction, removeLikeAction } from '../../../redux/Action/Like_Action'
import { useEffect, useState } from 'react'
import { GoHeart } from "react-icons/go";
import { FiHeart } from "react-icons/fi";


export default function YourFvourite() {

// options like to productCart
    // [1] : if you like cart coming herat red 
    // [2] : remove add cart

    const dispatch = useDispatch()

    // cart info id....
    const cartInfoid = useSelector((state) => state?.cartInfoid)
    const { loading, cartinfo } = cartInfoid

    /// like restarge...
    const like = useSelector((state) => state?.like)
    const { likeCart } = like


    const [likeProduct, setLikeProduct] = useState('')



    useEffect(() => {

        if (cartinfo && likeCart) {
            setLikeProduct(likeCart?.find((result) => result?._id === cartinfo?._id))
        }

    }, [likeCart, cartinfo, likeProduct])










    const AddFavourit = (e) => {
        e.preventDefault()

        if (likeProduct) {

            return dispatch(removeLikeAction(cartinfo?._id))
        }

        if (cartinfo !== null) {

            return dispatch(AddLikeCartAction(cartinfo))
        }



    }

    return loading ? <LoadingScreen /> :
        <div className='favourite' onClick={(e) => AddFavourit(e)}>

            {likeProduct ?
                <GoHeart className='image-favourite color-favourite' /> :
                <FiHeart className='image-favourite' />
            }


            <span className='text-favourit asdextrax font-all-all-edit'>Favourit</span>
        </div>
}