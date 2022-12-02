import ImageScreen from '../../../Components/ImageScreen/ImageScreen'
import { DeliveryTakeaway } from '../../../Assistant/Selection'
import LoadingScreen from '../../../Components/LoadingScreen/LoadingScreen'
import { useDispatch } from 'react-redux'
import { AddDriverySelection } from '../../../redux/Action/Payment_action'
import { MyOderImage } from '../../../Assistant/MyOrderImage'
import { useState } from 'react'


export default function PaymentDrivery(props) {


     // params 
     // [1] : driver selection if customs
     // [2] : other loading to selection customs
    const { driver, loading } = props


    const dispatch = useDispatch()



    
 // important  if user not selection takeway and delivery comming first delivery
    // open and selection method delivery or takeway
    const [clickOpenNav, setClickOpenNav] = useState(true)






    // Handle open and close selection method delivery or takway
    const HandelOpenDriver = (e) => {
        e.preventDefault()
        setClickOpenNav(!clickOpenNav)

        // setChangeDrivery(!changeDrivery)

    }



    // save selection user takeway and delivery
    // after that close selection
    const SaveSelection = (e, id) => {
        e.preventDefault()
        setClickOpenNav(!clickOpenNav)
        return dispatch(AddDriverySelection(id))


    }


   


    return <div className='FIrst-how add-padding-slider'>
        {loading ? <LoadingScreen /> :
            <div className='how-class font-all-all-edit color-color-all'>
               Hur ?
            </div>
        }

        {clickOpenNav ?

            <div className='drivery-class' onClick={(e) => HandelOpenDriver(e)} >

                <ImageScreen
                    ImageIcon={driver?.image ? driver?.image : DeliveryTakeaway[0]?.image}
                    className='bike'
                />

                <div className='drivery-text'>
                    <span className='font-all-all-edit'>{driver?.name ? driver?.name : DeliveryTakeaway[0]?.name}</span>
                    <span className='font-name-size-line' >{driver?.des ? driver?.des : DeliveryTakeaway[0]?.des}</span>
                </div>

                <div className='change-drivery' >
                    <span className='font-all-all-edit color-color-all'>ändra</span>
                </div>
            </div>
            :
            DeliveryTakeaway?.map((tak, Index) => (


                <div className='drivery-class' key={Index} onClick={(e) => SaveSelection(e, tak)} >


                    <ImageScreen ImageIcon={MyOderImage.checkedblack} className='bike' />
                   

                    <div className='drivery-text'>
                        <span className='color-family'>{tak?.name}</span>
                        <span className='color-last-items' >{tak?.des}</span>
                    </div>
                </div>
            ))

        }
    </div>
}