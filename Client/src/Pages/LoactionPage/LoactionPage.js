import { useEffect, useState } from "react"
import { createContext } from 'react'
import { Modal } from "react-bootstrap";
// import { RemoveLocationUserAction } from "../../redux/Action/LoactionUserAction";
import { AddAddressAction } from "../../redux/Action/Auth_Action";
import { useDispatch, useSelector } from 'react-redux'
import LocationSelectCity from "./LocationSelectCity";

export const UserLoaction = createContext()

export default function LocationPage({ children }) {



    const [lat, setLat] = useState(null);
    const [long, setLong] = useState(null);
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false)
    // Give a mark I'm the user has no location
    const [locationUser, setLocationUser] = useState(false)
    const [openSelectCity, setOpenSelectCity] = useState(false)
    const dispatch = useDispatch()






    // locat save location user... some select 
    // user address...
    const locateAddress = useSelector((state) => state.locateAddress?.myAddressLocal)

 


  









    // find location to user
    useEffect(() => {

        if (navigator.geolocation) {
            setStatus('Locating...');
            setLoading(true)
            navigator.geolocation.getCurrentPosition((position) => {
                // dispatch(RemoveLocationUserAction())
                setStatus(null);
                setLoading(false)

                setLat(position.coords.latitude);
                setLocationUser(true)
                return setLong(position.coords.longitude);
            }, () => {

                const THEcheckActive = locateAddress.filter((s) => s.firstAddress === true)
                const theremoveArray = Object(...THEcheckActive)
                //    console.log('check Out',locationIndex?.name)
                if (theremoveArray?.address) {
                    setLat(theremoveArray.location.lat)
                    setLong(theremoveArray.location.long)
                    setLoading(false)
                    return
                }

                setLoading(true)
                setStatus('Unable to retrieve your location');
                return setOpenSelectCity(true)

            });

        }




        return () => {
            setStatus(null)
            setLong(null)
            setLat(null)
            setLoading(false)

        }
    }, [dispatch,locateAddress])




    // add city if not location to user...
    const HandleAddCityLocation = (data) => {


        dispatch(AddAddressAction(data))
        setLat(data.location.lat)
        setLong(data.location.long)
        setOpenSelectCity(false)
        setLoading(false)
        setStatus(null)
        return


    }

    // close 
    const handleClose = () => {

        return console.log('close....')
    }






    return <UserLoaction.Provider value={{
        lat,
        long,
        status,
        loading,
        locationUser,
    }}>
        {openSelectCity ?
            <Modal show={openSelectCity} onHide={handleClose}>

                <LocationSelectCity
                    HandleAddCityLocation={HandleAddCityLocation}
                />


            </Modal>
            :
            children
        }

    </UserLoaction.Provider>

}







