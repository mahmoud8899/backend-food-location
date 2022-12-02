import { useSelector } from 'react-redux'
import Styles from '../../../Components/Update/StylesComponents/style'

export default function UserName() {


    const userLogin = useSelector((state) => state.userLogin?.userInfo)




    return <div   >
        <h1 style={Styles.user} >välkommen -  {userLogin?.firstname ? userLogin?.firstname : ''} </h1>
    </div>
}