import React from 'react'
import { Col, } from 'react-bootstrap'
// import GoogleLogin from 'react-google-login'
import { MyOderImage } from '../../Assistant/MyOrderImage'
import ImageScreen from '../../Components/ImageScreen/ImageScreen'
// import {LoginGoogle} from '../../redux/Action/Auth_Action'
// import {useDispatch} from 'react-redux'
export default function LoginWithOther() {


     
// const dispatch = useDispatch()

    // const responseGoogle = async (res) => {

    //     try {

    //         if (res.profileObj.email || res.profileObj.familyName || res.profileObj.givenName || res.profileObj.googleId) {
    //             // console.log(res.profileObj.email, res.profileObj.name, res.profileObj.googleId, res.profileObj.imageUrl)
                
    //                const user = {
    //                 email: res.profileObj.email?.toLowerCase(),
    //                 lastname: res.profileObj.familyName?.toLowerCase(),
    //                 firstname: res.profileObj.givenName?.toLowerCase(),
    //                 googleId: res.profileObj.googleId?.toLowerCase(),

    //             }

    //              dispatch(LoginGoogle(user))
    //         }
    //     } catch (error) {

    //         return console.error(error.response &&
    //             error.response.data.message ?
    //             error.response.data.message :
    //             error.message)
    //     }



    // }




    return <Col lg={12}>
        <div
            className='GOOLGELOGIN'>


            {/* <GoogleLogin
                clientId='137354333475-4id7nm4un15d2kf811jh2jvg5b90cvk8.apps.googleusercontent.com'
                onSuccess={responseGoogle}
                buttonText='continuer with google'
                className='xppsdpd'
                isSignedIn={false}
            /> */}




        </div>


        <div className='login-other-color login-margin-top-bottom'>
            <div className='class-facebook'>
                <ImageScreen
                    ImageIcon={MyOderImage.facebookicons}
                    className='login-other-image'
                />
            </div>


            <span className='color-text' >
                continue with Facebook
            </span>


        </div>



    </Col>
}



