import { Image } from "react-bootstrap"
import restaurant from './ImagePage/restaurant.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';





export default function Testing(){






  return     <LazyLoadImage
  alt={restaurant}
  height={restaurant}
  src={restaurant} // use normal <img> attributes as props
  width={restaurant.width} />
}












// import React, {   useState } from 'react'
// import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
// import mapStyles from './mapStyles';

// const mapContainerStyle = {
//   height: "400px",
//   width: "100%",
// };


// const options = {
//   styles: mapStyles,
//   disableDefaultUI: true,
//   zoomControl: true,
// };
// export default function Testing() {




//   const [lat, setLat] = useState(Number(59.858131))
//   const [lng, setLng] = useState(Number(17.644621))


//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: 'AIzaSyAaiHP2Akwa5NPa_WNDy7rv_SRAL3PJy1U',
//     passive: true
//   });

//   const onMapClick = React.useCallback((e) => {
    
     
    
//     setLat(e.latLng.lat())
//     setLng(e.latLng.lng())

//   }, []);



//   if (loadError) return "Error";
//   if (!isLoaded) return "Loading...";




//   return <GoogleMap
//     mapContainerStyle={mapContainerStyle}
//     zoom={18}
//     center={{ lat, lng }}
//     options={options}
//     onClick={onMapClick}

//   >
//     <Marker
//       position={{ lat, lng }}
//       icon={{
//         url: `/MyOrder/food.png`,
//         origin: new window.google.maps.Point(0, 0),
//         anchor: new window.google.maps.Point(15, 15),
//         scaledSize: new window.google.maps.Size(30, 30),
//       }}



//     />
//   </GoogleMap>
// }


