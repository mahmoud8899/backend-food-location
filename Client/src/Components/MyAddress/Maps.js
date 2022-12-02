import React, { useContext, useEffect, } from 'react'
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { options } from './OptionMaps'
import { Stand } from '../../Assistant/Selection';
import { UserLoaction } from '../../Pages/LoactionPage/LoactionPage'

const mapContainerStyle = {

    width: "100%",
    height: "400px",

};



export default function ShowMaps(props) {
    const { addAddress, setAddAddress } = props




    const { locationUser, lat, long } = useContext(UserLoaction)







    // get lat and long when loading page...
    useEffect(() => {




        function TheLocation() {

            if (locationUser) {
                setAddAddress({
                    ...addAddress,
                    location: {
                        lat: lat,
                        long: long,
                    }
                })

            } else if (addAddress.city) {

                if (!addAddress?.location?.lat) {

                    const Thefilter = Stand.filter((s) => s.address === addAddress.city)

                    const Newchange = Object(...Thefilter)


                    setAddAddress({
                        ...addAddress,
                        location: {
                            lat: Number(Newchange?.location?.lat),
                            long: Number(Newchange?.location?.long),
                        }
                    })
                }
            }
        }

        TheLocation()
        document.addEventListener('touchstart', TheLocation, { passive: true })
        return () => {
            TheLocation()
        }

        // eslint-disable-next-line
    }, [])





    // loading and error 
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyAaiHP2Akwa5NPa_WNDy7rv_SRAL3PJy1U',
        passive: true
    });





    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";

    // set new lat and long
    const onMapClick = (e) => {
        // e.preventdefault()
        setAddAddress({
            ...addAddress,
            location: {
                lat: e.latLng.lat(),
                long: e.latLng.lng()
            }


        })
    }






    return <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={{ lat: Number(addAddress.location.lat), lng: Number(addAddress.location.long) }}
        options={options}
        onClick={onMapClick}

    >
        <Marker
            position={{ lat: Number(addAddress.location.lat), lng: Number(addAddress.location.long) }}
            icon={{
                url: `/MyOrder/food.png`,
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(15, 15),
                scaledSize: new window.google.maps.Size(30, 30),
            }}



        />
    </GoogleMap>


}

    // // show location tap
    // const [selectedPark, setSelectedPark] = useState(null)
    // // toush remove.....
    // useEffect(() => {
    //     const listener = e => {
    //         if (e.key === "Escape") {
    //             setSelectedPark(null);
    //         }
    //     };
        // window.addEventListener("keydown", listener);

        // return () => {
        //     window.removeEventListener("keydown", listener);
        // };
    // }, []);