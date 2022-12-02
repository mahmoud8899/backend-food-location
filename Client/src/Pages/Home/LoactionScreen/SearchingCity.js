



export default function SearchingCity(props) {


    const { Stand, setQuery ,setSelectCity} = props


    const HandleCity = (data) => {
        setQuery(data)

        setSelectCity(true)
    }

    return Stand?.map((city, Index) => (
        <span key={Index} onClick={(e) => HandleCity(city?.address)}>{city?.address}</span>
    ))

}