import { Fragment, useState } from "react";
import { Form } from "react-bootstrap";
import ButtomClick from "../../Buttom/Buttom";
import Styles from "../StylesComponents/style";
import TheInputForm from '../../TheInputForm/TheInputForm'
import { RiCheckFill } from 'react-icons/ri'
import { ValtionMe } from '../../../Assistant/ValtionMe'
import { useDispatch, useSelector } from 'react-redux'
import { AddDriverText } from '../../../redux/Action/Payment_action'
import LoadingErrorHandle from '../LoadingErrorHandle/LoadingErrorHandle'
export default function DriverComment(props) {

    const { setOpenComment } = props




    // event loading add text to driver 
    const driverselection = useSelector((state) => state.driverselection)
    const { loading, textdriver } = driverselection


    const dispatch = useDispatch()
    const [inputText, setInputText] = useState(textdriver ? textdriver : '')

    const SendTextToDriver = (e) => {
        e.preventDefault()
        if (inputText?.trim()) {

            dispatch(AddDriverText(inputText))
            return setOpenComment(false)
            // console.log('M', ?.trim())
        }

    }



    return <div className='close-yourOrder add-heigth'>
        <LoadingErrorHandle loading={loading}>
            <h1 className='name-res'>Lägg till kommentar</h1>
            <span className='comment-image-top-text-last'>

                Vi kan behöva dela din kommentar med de som hanterar eller levererar din beställning.

            </span>

            <Form onSubmit={SendTextToDriver} >
                <TheInputForm
                    placeholder='Särskilda önskemål, allergier, diet. restriktioner'
                    className='Input-type-style productdetials hegith'
                    as='textarea'
                    type='text'
                    value={inputText}
                    ows={6}
                    onChange={(e) => setInputText(e.target.value)}
                    FirstIcons={
                        <Fragment>
                            {ValtionMe(inputText, 'inputname')
                                ? <RiCheckFill className='Icons-LEFT-right' /> : null
                            }
                        </Fragment>
                    }
                />

                <div className='button-comment-box'>
                    <div className='button-comment-box-helf'>
                        <ButtomClick
                            title='skicka in'
                            style={Styles.buttomColorPage}
                            disabled={!ValtionMe(inputText, 'inputname')}
                            onClick={(e) => SendTextToDriver(e)}
                        />
                    </div>
                </div>
            </Form>


        </LoadingErrorHandle>
    </div>
}


// <span className='selection-name'>Beskrivning</span>
// <TheInputForm
//     placeholder='Beskrivning'


//     onChange={(e) => setProductDetails({ ...productDetails, description: e.target.value })}
//     value={productDetails.description}

//     FirstIcons={
//         <Fragment>

//             {ValtionMe(productDetails.description, 'description')
//                 ? <RiCheckFill className='Icons-LEFT-right' /> : null
//             }
//         </Fragment>
//     }


// />