import { useSelector } from 'react-redux'
import { createContext } from 'react'
import { useContext, useEffect } from 'react'
import { UserLoaction } from './LoactionPage'
import { useState } from 'react'


// this is Choose Another Location

export const AnotherLocation = createContext()

export default function ChooseAnotherLocation({ children }) {

    const { lat, long } = useContext(UserLoaction)
    const locateAddress = useSelector((state) => state.locateAddress?.myAddressLocal)
    const THEcheckActive = locateAddress.filter((s) => s.firstAddress === true)
    const theremoveArray = Object(...THEcheckActive)
    // console.log('check Out', typeof theremoveArray.address === 'undefined', theremoveArray)


    const [getLocation, setGetLocation] = useState({
        location: {
            lat: null,
            long: null
        }
    })
    const [loading, setLoading] = useState(false)





    useEffect(() => {

        setLoading(false)

        if (typeof theremoveArray.address === 'undefined') {

            return lat !== null && long !== null ? setGetLocation({
                location: {
                    lat,
                    long
                }

            })
                :
                setLoading(true)




        } else {

            setGetLocation(theremoveArray)
            setLoading(false)
        }






        return () => {
            setGetLocation([])
            setLoading(false)

        }
        // eslint-disable-next-line
    }, [lat, long])


    // console.log()



    return <AnotherLocation.Provider value={{ loading, getLocation }}  >
        {children}
    </AnotherLocation.Provider>
}