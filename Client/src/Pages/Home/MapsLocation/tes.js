
// function Map() {
//     const [selectedPark, setSelectedPark] = useState(null);

  
//     useEffect(() => {
//       const listener = e => {
//         if (e.key === "Escape") {
//           setSelectedPark(null);
//         }
//       };
//       window.addEventListener("keydown", listener);
  
//       return () => {
//         window.removeEventListener("keydown", listener);
//       };
//     }, []);
  
//     return (
//       <GoogleMap
//         defaultZoom={10}
//         defaultCenter={{ lat: lat, lng: lng }}
//         defaultOptions={{ styles: mapStyles }}
//       >
//         {/* {parkData.features.map(park => (
//           <Marker
//             key={park.properties.PARK_ID}
//             position={{
//               lat: park.geometry.coordinates[1],
//               lng: park.geometry.coordinates[0]
//             }}
//             onClick={() => {
//               setSelectedPark(park);
//             }}
//             icon={{
//               url: `/skateboarding.svg`,
//               scaledSize: new window.google.maps.Size(25, 25)
//             }}
//           />
//         ))} */}
  
//         {selectedPark && (
//           <InfoWindow
//             onCloseClick={() => {
//               setSelectedPark(null);
//             }}
//             position={{
//               lat: selectedPark.geometry.coordinates[1],
//               lng: selectedPark.geometry.coordinates[0]
//             }}
//           >
//             <div>
//               <h2>{selectedPark.properties.NAME}</h2>
//               <p>{selectedPark.properties.DESCRIPTIO}</p>
//             </div>
//           </InfoWindow>
//         )}
//       </GoogleMap>
//     );
//   }
  
//   const MapWrapped = withScriptjs(withGoogleMap(Map));