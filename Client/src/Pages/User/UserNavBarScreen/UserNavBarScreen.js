import { useHistory } from 'react-router-dom'
import '../UserProfileScreen/Profile.css'

const UserNavBarScreen = (props) => {

    const {
        clasNamePayment,
        ClassNameProfile,
        ClassNameAddress,
        ClassNameOrder,
        ClassNameSetting,
    } = props


    const history = useHistory()




    const PageHome = (e) => {
        e.preventDefault()
        return history.push('/sw/fex/profil/personal/')
    }

    const PagePayment = (e) => {

        e.preventDefault()

        return history.push('/sw/fex/profil/payment/')
    }


    const PageAddres = (e) => {
        e.preventDefault()

        return history.push('/sw/fex/profil/address/')
    }


    const PageOrders = (e) => {
        e.preventDefault()

        return history.push('/sw/fex/profil/orders/')
    }




    const PageSetting = (e) => {
        e.preventDefault()
        return history.push('/sw/fex/profil/settings/')
    }



    return <div className='padding-null'>
        <div className='box-navbar'>
            <div className={ClassNameProfile ? 'Personal-Info action-personal' : 'Personal-Info'} onClick={(e) => PageHome(e)}>Personlig information</div>
            <div className={clasNamePayment ? 'Personal-Info action-personal' : 'Personal-Info'} onClick={(e) => PagePayment(e)} >Betalningsmetoder</div>
            <div className={ClassNameAddress ? 'Personal-Info action-personal' : 'Personal-Info'} onClick={(e) => PageAddres(e)}>Adresser</div>
            <div className={ClassNameOrder ? 'Personal-Info action-personal' : 'Personal-Info'} onClick={(e) => PageOrders(e)}>Beställningshistorik</div>
            <div className='Personal-Info'> Redeem code</div>
            <div className={ClassNameSetting ? 'Personal-Info action-personal' : 'Personal-Info'} onClick={(e) => PageSetting(e)} >inställningar</div>
        </div>

    </div>

}

export default UserNavBarScreen

