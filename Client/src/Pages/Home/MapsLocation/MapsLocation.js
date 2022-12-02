import { GoogleMap, Marker, useLoadScript, InfoWindow } from '@react-google-maps/api';
import { options } from '../../../Components/MyAddress/OptionMaps'
import { AnotherLocation } from '../../LoactionPage/ChooseAnotherLocation'
import { useContext, useState } from 'react'

export default function MapsLocation(props) {
    const { className, coordinates } = props




    




    const { getLocation } = useContext(AnotherLocation)


    const ArrayItem = [
        {
            name: 'Köpadress 👨‍🍳',
            lat: Number(coordinates?.[0]),
            lng: Number(coordinates?.[1])
        },
        {
            name:  'det är min plats 😋',
            lat: Number(getLocation?.location?.lat),
            lng: Number(getLocation?.location?.long),
        }
    ]





    // style width and height 
    const mapContainerStyle = {
        height: className,
        width: "100%",
    };


    const [selectMarke, setSelectMarke] = useState(null)



    // console.log(selectMarke)

    // loading and error 
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyAaiHP2Akwa5NPa_WNDy7rv_SRAL3PJy1U',
        passive: true
    });

    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";


    return <div className={className}>

        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={10}
            center={{ lat: Number(coordinates?.[0]), lng: Number(coordinates?.[1]) }}
            options={options}


        >

            {ArrayItem?.map((marker) => (
                <Marker
                    key={marker?.name}
                    position={{ lat: Number(marker?.lat), lng: Number(marker?.lng) }}
                    icon={{
                        url: marker?.name === 'Köpadress 👨‍🍳' ? `/MyOrder/restaurant.png` : `/MyOrder/HomeAddress.png`,
                        origin: new window.google.maps.Point(0, 0),
                        anchor: new window.google.maps.Point(15, 15),
                        scaledSize: new window.google.maps.Size(20, 20),
                    }}

                    onClick={(e) => {
                        setSelectMarke(marker)
                    }}



                />
            ))}
            {selectMarke &&
                <InfoWindow
                    position={{ lat: Number(selectMarke?.lat), lng: Number(selectMarke?.lng) }}
                    onCloseClick={() => {
                        setSelectMarke(null)
                    }}
                >
                    <div >
                        <h1 className='MarkeMpasss' >{selectMarke.name}</h1>
                        
                    </div>


                </InfoWindow>
            }


        </GoogleMap>

    </div>
}




// <Marker
// position={{ lat: Number(coordinates[0]), lng: Number(coordinates[1]) }}
// icon={{
//     url: `/MyOrder/restaurant.png`,
//     origin: new window.google.maps.Point(0, 0),
//     anchor: new window.google.maps.Point(15, 15),
//     scaledSize: new window.google.maps.Size(30, 30),
// }}

// onClick={(e) => {
//     setSelectMarke({
//         lat: Number(coordinates[0]),
//         lng: Number(coordinates[1]),
//         name: 'Köpadress 👨‍🍳'
//     })
// }}



// />


// <Marker
// position={{ lat: Number(getLocation?.location?.lat), lng: Number(getLocation?.location?.long) }}
// icon={{
//     url: `/MyOrder/HomeAddress.png`,
//     origin: new window.google.maps.Point(0, 0),
//     anchor: new window.google.maps.Point(15, 15),
//     scaledSize: new window.google.maps.Size(20, 20),
// }}

// onClick={(e) => {
//     setSelectMarke({
//         lat: Number(getLocation?.location?.lat),
//         lng: Number(getLocation?.location?.lat),
//         name: 'det är min plats 😋'
//     })
// }}


// />

// {selectMarke &&
// <InfoWindow
//     position={{ lat: Number(selectMarke?.lat), lng: Number(selectMarke?.lng) }}
//     onCloseClick={() => {
//         setSelectMarke(null)
//     }}
// >
//     <div >
//         <h1>{selectMarke.name}</h1>
//         <span>hello</span>
//     </div>


// </InfoWindow>
// }