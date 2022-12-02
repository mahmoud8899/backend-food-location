import { Modal, Form } from 'react-bootstrap'
import ButtomClick from '../../Components/Buttom/Buttom'
import Styles from '../../Components/Update/StylesComponents/style'
import { TheRating } from '../../Assistant/Selection'
import { CartInfoIdRatingAction } from '../../redux/Action/CartItemAction'
import { useDispatch, useSelector } from 'react-redux'
import { RatingError } from '../../Components/CloseScreen/CloseScreen'
import HandleLoadingPage from '../../Components/Update/HandleLoadingPage/HandleLoadingPage'
import { HiOutlineX } from 'react-icons/hi'
import { ErrorServer } from '../../Assistant/TextError'
import { useState } from 'react'
import './style.css'

export default function RestaurangetsProductRating(props) {
    const { showRating, setShowRating, cartid,ChangeParams } = props

    const dispatch = useDispatch()
    const [rating, setRating] = useState(1)




    // event requrest from rating user.... 
    const theRating = useSelector((state) => state?.theRating)
    const { loading, error, success } = theRating


    // succsfull
    const [updateSuccessFully, setUpdateSuccessFully] = useState(false)








    // Handle requres
    const HandleRating = (e) => {
        e.preventDefault()
        const user = {
            _id: cartid,
            rating
        }
        dispatch(CartInfoIdRatingAction(user, ChangeParams))
        return setUpdateSuccessFully(true)
    }



    // close 
    const HandleClose = () => {

        error !== null && RatingError(dispatch)
        setShowRating(!showRating)
        setUpdateSuccessFully(false)

    }

    // remove error 
    const BackAndRemoveError = () => {

        RatingError(dispatch)
        setUpdateSuccessFully(false)

    }

    return <Modal show={showRating} onHide={HandleClose}>


        <HandleLoadingPage
            loading={loading}
            error={error}
            ErrorText={error === 'request failed with status code 404' ? ErrorServer : error}
            HandleClose={HandleClose}
            BackAndRemoveError={BackAndRemoveError}
            updateSuccessFully={updateSuccessFully}
            updated={success}

        >

            <div className='small-select-form'>
                <HiOutlineX className='Login-Close-Image-rigth left-black' onClick={() => setShowRating(!showRating)} />

                <h1 className='select-h'>products rating</h1>


                <Form.Control
                    as='select'
                    style={Styles.input_selector_user}
                    onChange={(e) => setRating(e.target.value)}
                >
                    {TheRating?.map((x, Index) => (
                        <option value={x} key={Index} >{x}</option>
                    ))}

                </Form.Control>

                <div className='dev-buttom'>
                    <ButtomClick
                        title='select'
                        style={Styles.buttomColorPage}
                        onClick={(e) => HandleRating(e)}
                        disabled={rating === 1}
                    />
                </div>



            </div>

        </HandleLoadingPage>



    </Modal>

}

