import { Container, Row, Col, Modal } from 'react-bootstrap'
import UserNavBarScreen from '../UserNavBarScreen/UserNavBarScreen'
import Styles from '../../../Components/Update/StylesComponents/style'
import CreateNewAddress from '../../../Components/MyAddress/CreateNewAddress'
import Title from '../../../Components/ScreenTitle/ScreenTitle'
import AddOpenComponent from '../../../Components/Update/AddOpenComponent/AddOpenComponent'
import { HiArrowNarrowLeft, HiOutlineX } from 'react-icons/hi'
import HandleLoadingPage from '../../../Components/Update/HandleLoadingPage/HandleLoadingPage'
import { ErrorServer } from '../../../Assistant/TextError'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ShowListAddress from './ShowListAddress'
import '../UserProfileScreen/Profile.css'

export default function UserAddresScreen(props) {

    const { history } = props

    // const dispatch = useDispatch()

    // open page add address
    const [openAddres, setOpenAddres] = useState({ value: false, object: '' })

    // user Info.......
    const userInfo = useSelector((state) => state?.userLogin?.userInfo)
    // updated successfully
    const [updateSuccessFully, setUpdateSuccessFully] = useState(false)

    // user address...
    const locateAddress = useSelector((state) => state.locateAddress)
    const { loading } = locateAddress

    console.log(locateAddress)


    // check user
    useEffect(() => {
        if (!userInfo?.firstname) return history.push('/uppsala')
    }, [userInfo, history])




    // close page
    const HandleClose = () => {
        setUpdateSuccessFully(false)
        setOpenAddres({ value: false, object: '' })
        setNextStep(false)
        console.log('close...')
    }
    // remove error 
    const BackAndRemoveError = () => {
        setUpdateSuccessFully(false)
        console.log('remove error')
    }







    // close navBar add address.......................>
    const [nextStep, setNextStep] = useState(false)
    const [oppenMpas, setOppenMaps] = useState(false)
    // handel city
    const HandleCity = (Event) => {
        Event.preventDefault()
        if (oppenMpas) {
            setOppenMaps(!oppenMpas)
            return console.log('close Maps')
        }


        if (nextStep) {

            return setNextStep(!nextStep)
        }


    }



    // options 
    // [1]  : page navBar .....
    // [2]  :   list user address  ShowListAddress
    // [3] : buttom click  create new address AddOpenComponent
    // [4] : page create new addresss.

    console.log(locateAddress)
    return <Container>

        <Title TextTitle='Lägg Till Ny Adress' />
        <Row className="justify-content-center margin-top-class" >

            <Col xs={12} sm={12} md={12} lg={12} >
                <div className='myprofile'>
                    <h1>Profil</h1>
                </div>

            </Col>




            <Col xs={12} sm={12} md={12} lg={12}>


                <UserNavBarScreen ClassNameAddress />

                <div className='margin-bottom-class'> </div>

            </Col>


            <Col xs={12} sm={12} md={12} lg={8} className='heigth-margin' >


                {locateAddress?.myAddressLocal?.length > Number(0) ?


                    <ShowListAddress
                    
                        setOpenAddres={setOpenAddres}
                        locateAddress={locateAddress}
                    />
                    :
                    <div className='addToCart-option'>
                        <span className='firstBack' >Du har inte sparat några adresser än
                        </span>
                        <span className='firstBack-option'>
                            Add a new address easily below
                        </span>
                    </div>

                }

                <div className='addToCart' onClick={(e) => setOpenAddres({ value: true, object: '' })}>
                    <AddOpenComponent
                        Titel='Lägg till din adress'
                        style={Styles.addPayment}
                        className='className-link'
                        classNameTitle='className-linkleft'

                    />

                </div>

                <Row className="justify-content-center" >


                    <Modal show={openAddres.value} onHide={HandleClose} >
                        <HandleLoadingPage
                            loading={loading}
                            ErrorText={ErrorServer}
                            updateSuccessFully={updateSuccessFully}
                            HandleClose={HandleClose}
                            BackAndRemoveError={BackAndRemoveError}

                        >
                            <div className='box-alert'>

                                <div >
                                    {nextStep && <HiArrowNarrowLeft className='close-pp-pp-image'onClick={HandleCity} />}
                                </div>

                                <div className='title-add'>
                                    <span className='title-add-profile'>
                                        {openAddres.object ? 'Uppdatering' : ' Lägg Till Ny Adress'}
                                    </span>
                                </div>

                                <HiOutlineX className='close-pp-pp-image' onClick={HandleClose} />



                            </div>



                            <CreateNewAddress
                                setOpenAddres={setOpenAddres}
                                openAddres={openAddres}
                                setUpdateSuccessFully={setUpdateSuccessFully}
                                nextStep={nextStep}
                                setNextStep={setNextStep}
                                oppenMpas={oppenMpas}
                                setOppenMaps={setOppenMaps}

                            />




                        </HandleLoadingPage>



                    </Modal>

                </Row>

            </Col>
        </Row>
    </Container>

}



//uppdatera adressuppgifter