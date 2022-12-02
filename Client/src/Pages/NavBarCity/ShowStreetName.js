import { useSelector } from 'react-redux'


//Välj  lägg till din adress



export default function ShowStreetName() {


    // user address...
    const locateAddress = useSelector((state) => state.locateAddress?.myAddressLocal)

    const THEcheckActive = locateAddress.filter((s) => s.firstAddress === true)
    const theremoveArray = Object(...THEcheckActive)

  


    return theremoveArray.address ? theremoveArray.address : 'lägg till din adress'
}