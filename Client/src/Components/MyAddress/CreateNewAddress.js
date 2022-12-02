import { Form } from 'react-bootstrap'
import React, { useState, Fragment, useEffect } from "react";
import Styles from '../Update/StylesComponents/style';
import ButtomClick from '../Buttom/Buttom'
import SelectCityInput from './SelectCityInput'
import LoactionAddress from './LocationAddress'
import { AddAddressAction, RemoveOneAddress } from '../../redux/Action/Auth_Action';
import { useDispatch } from 'react-redux'
import ShowMaps from './Maps'


export default function CreateNewAddress(props) {
    // params 
    const {
        nextStep,
        setNextStep,
        oppenMpas,
        setOppenMaps,
        openAddres,
        setUpdateSuccessFully
    } = props

    const dispatch = useDispatch()
    // handle error 
    const [handleError, setHandleError] = useState(false)

    // navbar slider close and call back
    const [addAddress, setAddAddress] = useState({
        address: '', doornumber: '',
        city: '',
        zipcode: '',
        location: {
            lat: Number(),
            long: Number(),
        },
        work: '',
        // firstAddress: false,
    })



    // event if user want change addresss..
    useEffect(() => {

        if (openAddres?.object) {
            setAddAddress({
                address: openAddres?.object?.address ? openAddres?.object?.address : '',
                doornumber: openAddres?.object?.doornumber ? openAddres?.object?.doornumber : '',
                zipcode: openAddres?.object?.zipcode ? openAddres?.object?.zipcode : '',
                city: openAddres?.object?.city ? openAddres?.object?.city : '',
                location: {
                    lat: openAddres?.object?.location?.lat ? openAddres?.object?.location?.lat : '',
                    long: openAddres?.object?.location?.long ? openAddres?.object?.location?.long : '',
                },
                work: openAddres?.object?.work ? openAddres?.object?.work : '',
                // firstAddress: openAddres?.object?.firstAddress ? openAddres?.object?.firstAddress : false,
            })

            return

        }


    }, [openAddres])









    // handel add addresss.... >
    const HandleCity = (Event) => {
        Event.preventDefault()
        if (!nextStep) {
            setHandleError(false)
            if (!openAddres?.object) setAddAddress({
                address: '',
                city: addAddress.city,
                doornumber: '',
                zipcode: '',
                location: {
                    lat: Number(),
                    long: Number(),
                },
                work: '',

            })
            return setNextStep(!nextStep)
        }

        if (oppenMpas) {
            setOppenMaps(!oppenMpas)
            return console.log('close Maps')
        }


        setHandleError(false)
        if (
            addAddress.address.length > Number(3) &&
            addAddress.doornumber.length > Number(0) &&
            addAddress.zipcode.length > Number(3) &&
            addAddress.location.lat > Number(1) &&
            addAddress.location.long > Number(1) &&
            addAddress.work.length > Number(3)
        ) {
            // if user want change address remove old addresss ...
            openAddres?.object && dispatch(RemoveOneAddress(openAddres?.object.address))
            dispatch(AddAddressAction(addAddress))
            setUpdateSuccessFully(true)
            return setHandleError(false)
        } else {
            setHandleError(true)
            // console.log(handleError)
            return console.log('this is not match ...empty')
        }



    }







    return <Fragment>
        <Form onSubmit={HandleCity}>
            {nextStep ?
                oppenMpas ?

                    <ShowMaps
                        addAddress={addAddress}
                        setAddAddress={setAddAddress}
                    />

                    :
                    <LoactionAddress
                        nextStep={nextStep}
                        setNextStep={setNextStep}
                        oppenMpas={oppenMpas}
                        setOppenMaps={setOppenMaps}
                        addAddress={addAddress}
                        setAddAddress={setAddAddress}
                        HandleCity={HandleCity}
                        handleError={handleError}
                    />

                :

                <SelectCityInput
                    addAddress={addAddress}
                    setAddAddress={setAddAddress}
                />

            }




            <div className='buttom-close'>
                <ButtomClick
                    title={oppenMpas ? 'Fortsätt' : nextStep ? 'Spara' : 'Nästa'}
                    style={Styles.TabButtomCreate}
                    disabled={
                        addAddress.city === 'value' ||
                        addAddress.city === ''


                    }
                />
            </div>

        </Form>



    </Fragment>


}



//  <div className={nextStep ? 'Handl-navBar-only' : 'flexrow'}>
// {nextStep &&
//     <>
//         <HiArrowNarrowLeft className='close-pp-pp-image' onClick={(e) => CallBack(e)} />
//         <h1 className='font-edit'>Adressdetaljer</h1>
//     </>
// }

// <HiOutlineX className='close-pp-pp-image' />
// </div> 

