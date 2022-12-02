import { CollectOrder, TotalPrice } from '../../../Assistant/TotalPrice'
import { useSelector } from 'react-redux'
import Styles from '../StylesComponents/style'
import LoginScreen from '../../../Pages/LoginScreen/LoginScreen'
import { Fragment, useState } from 'react'
import { ConversionCheckOut } from '../Conversion/Conversion'
import { Link } from 'react-router-dom'
export default function GoToCheckOut(props) {


    // USER INFO 
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    // open login 
    const [loginOpen, setLoginOpen] = useState(false)


    // cart info.....
    const cartInfoid = useSelector((state) => state?.cartInfoid)
    const { cartinfo } = cartInfoid






    return <Fragment>
        <div className='close-yourOrder'>
            {userInfo?.firstname ?
                <Link style={Styles.backgroundBox} className='checkout-yourorder' to={{ pathname: ConversionCheckOut(cartinfo) }} >
                    <div className='checkout-dev'>
                        <span className='checkout-dev-one'>{CollectOrder(props?.filterCartProduct)}</span>
                        <span className='checkout-dev-twe'> Till kassan</span>

                    </div>
                    <span>kr {TotalPrice(props?.filterCartProduct)}</span>
                </Link>
                :
                <div style={Styles.backgroundBox} className='checkout-yourorder' onClick={() => setLoginOpen(!loginOpen)}>

                    <div className='checkout-dev' >
                        <span className='checkout-dev-one'>{CollectOrder(props?.filterCartProduct)}</span>
                        <span className='checkout-dev-twe'> login</span>

                    </div>
                    <span className='font-size-st'>kr {TotalPrice(props?.filterCartProduct)}</span>
                </div>
            }
        </div>






        <LoginScreen
            loginOpen={loginOpen}
            setLoginOpen={setLoginOpen}

        />




    </Fragment>

}