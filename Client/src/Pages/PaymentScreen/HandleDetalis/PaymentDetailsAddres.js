import { MyOderImage } from '../../../Assistant/MyOrderImage'
import ImageScreen from '../../../Components/ImageScreen/ImageScreen'
import ShowListAddress from '../../User/UserAddresScreen/ShowListAddress'
import { useEffect, useState } from 'react'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { AddAddressAction } from '../../../redux/Action/Auth_Action'
import { useDispatch, useSelector } from 'react-redux'
import CreateNewAddress from '../../../Components/MyAddress/CreateNewAddress'
import { Modal } from 'react-bootstrap'

export default function PaymentDetailsAddres(props) {

    // params 
    // [1] : driver info if customer selection this 
    // [2] : that onther this is customer info
    const { driver } = props

    const dispatch = useDispatch()
    // option add addres 
    const [openAddresScreen, setOpenAddresScreen] = useState(false)
    // succsfully  when change address
    const [updateSuccessFully, setUpdateSuccessFully] = useState(false)


    // updated add address....
    useEffect(() => {
        if (updateSuccessFully) {
            setOpenAddresScreen(false)
            return setUpdateSuccessFully(false)
        }

    }, [updateSuccessFully])







    // options 
    // [1] : if the customer chooese the delivery service, he must add a address
    // [2] : page add addres if customer  name -- MyAddress



    // user address...
    const locateAddress = useSelector((state) => state.locateAddress)
    // valja address 
    const ViljaAddress = (data) => {
        dispatch(AddAddressAction(data))
        // window.location.reload()
    }





    // START ADD ADDRSS.
    const [nextStep, setNextStep] = useState(false)
    const [oppenMpas, setOppenMaps] = useState(false)
    const [updateSuccessFullyAddress, setUpdateSuccessFullyAddress] = useState(false)
    // succfully add address....
    useEffect(() => {
        if (updateSuccessFullyAddress) {
            setUpdateSuccessFullyAddress(false)
           setOpenAddresScreen(false)
            setNextStep(false)
         
            return
        }


        // eslint-disable-next-line
    }, [updateSuccessFullyAddress])


        // function handle close add addres och open
        const HandlAddAddres = (e) => {
            e.preventDefault()
            if(oppenMpas){

                return setOppenMaps(!oppenMpas)
            }

            if(nextStep){

                return setNextStep(!nextStep)
            }
           
            return setOpenAddresScreen(!openAddresScreen)
        }





    return driver?.name === 'hämta själv' ? null :
        <div className='FIrst-how add-padding-slider' >

            <div className='how-class font-all-all-edit color-color-all'>
                Vart till?
            </div>


            {openAddresScreen ?
                <Modal show={openAddresScreen} onHide={() => setOpenAddresScreen(!openAddresScreen)}>

                    <div className='first-city-location add-padding-loaction'>
                        <HiArrowNarrowLeft
                            className='class-close-image'
                            onClick={(e) => HandlAddAddres(e)}
                        />
                    </div>




                    <CreateNewAddress
                        nextStep={nextStep}
                        setNextStep={setNextStep}
                        oppenMpas={oppenMpas}
                        setOppenMaps={setOppenMaps}
                        setUpdateSuccessFully={setUpdateSuccessFullyAddress}
                    />




                </Modal>
                :


                <>
                  
                        <div className='drivery-class express-express'>
                            <ShowListAddress
                                locateAddress={locateAddress}
                                ViljaAddress={ViljaAddress}
                                StyleLastPadding
                                StopCity
                            />

                          
                        </div>

                       

                        <div className='drivery-class' onClick={(e) => HandlAddAddres(e)}>

                            <ImageScreen ImageIcon={MyOderImage.mpablack} className='bike' />

                            <div className='drivery-text'>
                                <span className='font-all-all-edit'>
                                    lägg till en leveransadress
                                </span>

                            </div>

                            <div className='change-drivery' >
                                <span className='font-all-all-edit color-color-all'>ändra</span>
                            </div>




                        </div>
            


                </>

            }




        </div>


}





