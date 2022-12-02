import { Fragment, useEffect, useState } from 'react'
import AddOpenComponent from '../../Components/Update/AddOpenComponent/AddOpenComponent'
import ShowListAddress from '../User/UserAddresScreen/ShowListAddress'
import ButtomClick from '../../Components/Buttom/Buttom'
import Styles from '../../Components/Update/StylesComponents/style'
import { FirstNameRest } from '../../Assistant/Selection'
import { useSelector, useDispatch } from 'react-redux'
import { AddAddressAction } from '../../redux/Action/Auth_Action'
import CreateNewAddress from '../../Components/MyAddress/CreateNewAddress'
import LocationSelectCity from '../LoactionPage/LocationSelectCity'
export default function ActiveUserSearchCity(props) {

    // params....
    const {
        openAddres,
        setOpenAddres,
        openSelectionCity,
        HandleOpenAdddress,
        HandleCity,
        setShowCity,
        showCity,
        nextStep,
        setNextStep
    } = props


    const dispatch = useDispatch()


    // user address...
    const locateAddress = useSelector((state) => state.locateAddress)







    // valja address 
    const ViljaAddress = (data) => {
        dispatch(AddAddressAction(data))
        window.location.reload()
    }





    //  start oppen address add new address..... //openAddres
    // this is next input after select city...
    // oppen the maps
    const [oppenMpas, setOppenMaps] = useState(false)
    // succfully after user add addrss.
    const [updateSuccessFully, setUpdateSuccessFully] = useState(false)

    // succfully add address....
    useEffect(() => {
        if (updateSuccessFully) {
            setUpdateSuccessFully(false)
            setOpenAddres({ value: false })
            setNextStep(false)
            window.location.reload()
            return
        }


        // eslint-disable-next-line
    }, [updateSuccessFully])





    // change city....
    const HandleAddCityLocation = (data) => {
        // testing  console.log(data)
        dispatch(AddAddressAction(data))
        window.location.reload()
    }




    return <Fragment>
        {!openAddres.value && !openSelectionCity ?

            <div className='scroll-down-body'>


                {locateAddress?.myAddressLocal?.length > Number(0) &&
                <div className='padding-d'>
                     <ShowListAddress
                        locateAddress={locateAddress}
                        StyleLastPadding
                        ViljaAddress={ViljaAddress}
                    />
                </div>
                   
                }



                <div className='Add-Addres add-padding-loaction' onClick={(e) => HandleOpenAdddress(e)}>
                    <AddOpenComponent
                        Titel='Lägg till din adress'
                        className='Font-address'
                        classNameTitle='classPluseTitel exstra-style font-all-all-edit color-color-all'
                        classNamePluse='classPlusefont'

                    />
                </div>


                <div className='Add-Addres add-padding-loaction' >
                    <div className='font-name-size-line' onClick={(e) => HandleCity(e)} >
                        Visa alla städer med {FirstNameRest}
                    </div>
                </div>

                <div className='buttom-close'>
                    <ButtomClick
                        title='Save'
                        onClick={() => setShowCity(!showCity)}
                        style={Styles.TabButtomCreate}
                    />

                </div>

            </div>

            :
            <Fragment>
                {openAddres.value &&
                    <div >
                        <CreateNewAddress
                            openAddres={openAddres}
                            nextStep={nextStep}
                            setNextStep={setNextStep}
                            oppenMpas={oppenMpas}
                            setOppenMaps={setOppenMaps}
                            setUpdateSuccessFully={setUpdateSuccessFully}
                        />
                    </div>
                }
                {openSelectionCity &&

                    <LocationSelectCity HandleAddCityLocation={HandleAddCityLocation} />
                }


            </Fragment>



        }


    </Fragment>

}

