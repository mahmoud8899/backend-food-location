import { Stand } from '../../Assistant/Selection'





export default function LocationSelectCity(props) {

    const { HandleAddCityLocation } = props




    return <div className='Add-Scroll-Home'>
        <div className='top-margin-'>
            <span>
                City view används för att du
                snabbt ska få en överblick.
                För att enbart se restauranger
                som levererar till dig

            </span>

            {Stand?.map((city, Index) => (
                <div className='stad-div' key={Index} onClick={(e) => HandleAddCityLocation(city)}>
                    <div className='classPluseTitel notleft'>{city.address}</div>
                    <div className='classPluseTitel notleft' >10 km</div>
                </div>
            ))}


        </div>
    </div>
}