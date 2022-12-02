import ImageScreen from '../../../Components/ImageScreen/ImageScreen'
import { FirstNameRest } from '../../../Assistant/Selection'
import { useHistory } from 'react-router-dom'
import '../Home.css'


export default function LoginDriverScreen() {

    const history = useHistory()


    return <div className='driver-box-screen'>

        <div className='font-size-driver'> become a courier</div>

        <ImageScreen ImageIcon={`/MyOrder/login-driver.jpg`} className='logindriver' />


        <div className='item-screen-driver-apply'>
            <div className=''>
                <div className='item-screen-driver-apply-text'>
                    Start earning money
                </div>

                <div className='item-screen-driver-apply-text'>
                    as a {FirstNameRest} courier
                </div>


            </div>
            <div className='Buttom-driver' onClick={() => history.push(`/sw/fex/signup/driver/`)} >
                apply now
            </div>
        </div>

    </div>



}