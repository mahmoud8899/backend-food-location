import { Fragment, useState } from 'react'
import { ValtionMe } from '../../../Assistant/ValtionMe'
import TheInputForm from '../../../Components/TheInputForm/TheInputForm'
import { RiCheckFill } from 'react-icons/ri'
import ButtomClick from '../../../Components/Buttom/Buttom'
import Styles from '../../../Components/Update/StylesComponents/style'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { CreateNewfoodTypesAction } from '../../../redux/Action/CartItemAction'
import { useDispatch, useSelector } from 'react-redux'
import CodeError from '../../../Components/CodeError/CodeError'
import { RemoveErrorCategory } from '../../../Components/CloseScreen/CloseScreen'
import LoadingScreen from '../../../Components/LoadingScreen/LoadingScreen'
export default function CreateFoodType(props) {

    // params class oppen page nytt
    const { nytt, setNytt } = props




    // get all category...
    // get all category...
    const pageHomeCategory = useSelector((state) => state?.pageHomeCategory)
    const { loading, error: errorCategory, successfully } = pageHomeCategory






    const [foodType, setFoodType] = useState('')
    const image = '/uploads/image-1646996665036.jpeg'


    const dispatch = useDispatch()


    // option [1]: input [2] : buttom 
    // icons callback


    // handle 
    const HandleFoodType = () => {

        RemoveErrorCategory(dispatch)

        if (foodType?.length > Number(1)) {
            const user = {
                foodType,
                image
            }

            dispatch(CreateNewfoodTypesAction(user))

            return setFoodType('')
        }


    }





    // back if have error and Loading
    const HandleClose = () => {

        setNytt({ value: false, object: '' })
        setFoodType('')
        RemoveErrorCategory(dispatch)
    }




    return nytt?.value && <Fragment>

     
            <div className='FOOD-TYPES'>
                <HiArrowNarrowLeft className='close-pp-pp-image' onClick={HandleClose} />
                {loading ?
                    <div className='error-input-red' >
                        <LoadingScreen />
                    </div>

                    : errorCategory ?

                        < div className='error-input-red' >
                            <CodeError error={errorCategory} />
                        </div>
                        : successfully &&
                        < div className='error-input-red-color' >
                            <span>Successfully</span>
                        </div>

                }

                <div className='input-types'>
                    <span className='selection-name'>skapa ny mattyp</span>
                    <TheInputForm
                        placeholder='skapa ny mattyp'
                        className='Input-type-style productdetials'
                        value={foodType}
                        ows={6}
                        onChange={(e) => setFoodType(e.target.value.trim())}
                        FirstIcons={
                            <Fragment>
                                {ValtionMe(foodType, 'inputname')
                                    ? <RiCheckFill className='Icons-LEFT-right' /> : null
                                }
                            </Fragment>
                        }
                    />

                </div>

                <div className='Buttom-type'>
                    <ButtomClick
                        style={Styles.TabButtomCreate}
                        disabled={
                            !ValtionMe(foodType, 'inputname')
                        }
                        onClick={HandleFoodType}
                        title='skapa ny mattyp'
                    />

                </div>

            </div>

    </Fragment >


}