import { Container, Row, Col, Form } from 'react-bootstrap'
import ButtomClick from '../../Components/Buttom/Buttom'
import { useEffect, useState } from 'react'
import CheckedMe from '../../Components/CheckedMe/CheckedMe'
import Title from '../../Components/ScreenTitle/ScreenTitle'
import { useDispatch, useSelector } from 'react-redux'
import FirstFormSteg from './FirstFormSteg'
import OtherFormSteg from './OtherFormSteg'
import { FirstNameRest } from '../../Assistant/Selection'
import ImageScreen from '../../Components/ImageScreen/ImageScreen'
import { MyOderImage } from '../../Assistant/MyOrderImage'
import { useHistory } from 'react-router-dom'
import Styles from '../../Components/Update/StylesComponents/style'
import { DriverWork } from '../../redux/Action/Auth_Action'
import LoadingErrorHandle from '../../Components/Update/LoadingErrorHandle/LoadingErrorHandle'
import { ErrorServer, ErrorTextInput } from '../../Assistant/TextError'
import './DriverFormScreen.css'
import CodeError from '../../Components/CodeError/CodeError'
// import { useRef } from 'react'

export default function DriverFormScreen() {


    const history = useHistory()
    const dispatch = useDispatch()

    // emil, fristname,lastname, phone number  country,
    // what languages do you speak
    // date of birth  
    // 1 ask  do you have         car // bike / motorcycle  ....
    // 2 ask  what city do you want to work in  uppsala / gothenburg ....
    // 3 ask what days do you want to work    how many work  / week 
    // 4 ask tell me about yourself  option .......

    const userLogin = useSelector((state) => state?.userLogin)
    const { userInfo } = userLogin
    const [handleError, setHandleError] = useState('')
    const [nextStep, setNextStep] = useState(false)
    const [addOkey, setAddOkey] = useState(false)
    const [successfully, setSuccessfully] = useState(false)


    // input 
    const [userInfoInput, setUserInfoInput] = useState({
        firstname: userInfo?.firstname ? userInfo?.firstname : '',
        lastname: userInfo?.lastname ? userInfo?.lastname : '',
        email: userInfo?.email ? userInfo?.email : '',
        telephone: userInfo?.telephone ? userInfo?.telephone : '',
        country: 'sweden',
        birth: '',

    })

    // step other card and city
    const [askOne, setAskOne] = useState({ ask1: '', city: '', yourself: '' })



    // check out succfulle event from server succsfully
    const driverAsk = useSelector((state) => state.driverAsk)
    const { loading, error, } = driverAsk


//  successfully: SuccessfullyDriver,

    // check user Info 
    useEffect(() => {

        if (!userInfo?.firstname) {

            return history.push('/')
        }

    }, [history, userInfo])






    // send data..
    const HandleDriver = (e) => {
        e.preventDefault()
        setHandleError('')

        if (userInfoInput?.birth?.length === 0
            || userInfoInput?.telephone === ''
            || userInfoInput?.firstname === ''
            || userInfoInput?.lastname === '') {
            return setHandleError('Write your date of birth')
        }
        if (!addOkey) {
            return setHandleError('')
        }
        setHandleError('')


        if (!nextStep) {
            
            setNextStep(!nextStep)

        } else {

            if (askOne?.ask1?.length === 0 || askOne?.city?.length === 0) {
                return setHandleError('error')
            }
            setHandleError('')

            const data = {
                work: 'okey',
                askOne,
                userInfoInput
            }
            dispatch(DriverWork(data))
            return setSuccessfully(true)





        }




        // return setNextStep(true)

    }



    // const scrollUseRef = useRef()
    // ref={scrollUseRef}
    // useEffect(() => {
    //     scrollUseRef.current?.scrollIntoView({
    //         block: "nearest",
    //         inline: "center",
    //         behavior: "smooth",
    //         alignToTop: false
    //     });
    //     // eslint-disable-next-line
    // }, [])






    return <Container fluid  >

        <Title TextTitle='Driver' />
        <Row className='justify-content-center'  >

            <Col xs={12} sm={12} md={12} lg={12}>

                <div className='started-driver top-top'>
                    <h1>Become a {FirstNameRest} courier partner</h1>
                    <span>Ready to become a Wolt courier partner and get started? Sign up and apply in a few clicks.</span>
                </div>
            </Col>

            <LoadingErrorHandle loading={loading} error={error} TextNotItems={ErrorServer} >
                <Col xs={12} sm={12} md={10} lg={10}>
                    <Form onSubmit={HandleDriver} className='ClassForm-form'>


                        {successfully ?
                            <div className='successfully-successfully'>

                                <p className='successfully-successfully-text'>
                                    thanks your for your registraion.
                                    we will contact you as soon poosible
                                </p>
                                <ImageScreen
                                    ImageIcon={MyOderImage.logindriver}
                                    className='successfully-image'
                                />




                            </div>
                            :
                            <>
                                <div className='pages-details'>
                                    Page {nextStep ? 2 : 1} out of 2 – Your details
                                </div>

                                <div className='started-driver'>
                                    <h1> Let's get started!</h1>
                                    <span>We'll ask a few basic things about you first.</span>
                                </div>

    

                                <Row className='justify-content-center'>
                                {handleError &&
                                    <div className='error-input-red sopppp' >
                                        <CodeError error={ErrorTextInput} />
                                    </div>
                                }
                                    <Col xs={11} sm={11} md={6} lg={6} className='ClassForm-input'>

                                        {nextStep ?

                                            <OtherFormSteg
                                                HandleDriver={HandleDriver}
                                                askOne={askOne}
                                                setAskOne={setAskOne}
                                                handleError={handleError}
                                            />
                                            :
                                            <FirstFormSteg
                                                setUserInfoInput={setUserInfoInput}
                                                userInfoInput={userInfoInput}
                                                HandleDriver={HandleDriver}
                                                handleError={handleError}
                                            />
                                        }
                                        <div className='bottom-buttom'>



                                            <CheckedMe
                                                addOkey={addOkey}
                                                setAddOkey={setAddOkey}
                                                handleError={handleError}
                                            />



                                            <ButtomClick
                                                title='next'
                                                style={Styles.TabButtomCreate}
                                            />
                                        </div>

                                    </Col>
                                </Row>

                            </>
                        }
                    </Form>

                </Col>
            </LoadingErrorHandle>


            <div className='postion-driver'>

            </div>
        </Row>

    </Container>
}