import { useState } from 'react'
import { BsFillCreditCardFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import EditComponent from '../../../Components/Update/EditComponent/EditComponent'
import { RemoveCardNumberAction } from '../../../redux/Action/Cart_Action'




export default function ShowDetailsCard(props) {
    const { TheCartNumber, classNamePayment } = props

    const dispatch = useDispatch()

    // open page cartnumber....
    const [openDown, setOpenDown] = useState(false)

    // remove cartnumber....
    const NoRemove = () => {
        dispatch(RemoveCardNumberAction())
    }




    return <div className={classNamePayment ? 'add-selected-item addxpxp' : 'Edit-updateCart'} >
           
        <div className='first-class-add-remove'>
            <BsFillCreditCardFill
               
                className='visa-image'
            />

            <span className={classNamePayment ? 'dddddddd' : ''}>{TheCartNumber?.cartnumber}</span>
        </div>



        <EditComponent
            setOptionMore={setOpenDown}
            optionMore={openDown}
            OpenEditAddress
            ENoption
            NoRemove={NoRemove}
        />



    </div>
}