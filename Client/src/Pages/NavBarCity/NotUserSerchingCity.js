import { Fragment, useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import ButtomClick from '../../Components/Buttom/Buttom'
import Styles from '../../Components/Update/StylesComponents/style'
import LoginScreen from '../LoginScreen/LoginScreen'
import LocationSelectCity from '../LoactionPage/LocationSelectCity'
import { FirstNameRest } from '../../Assistant/Selection'
import { AddAddressAction } from '../../redux/Action/Auth_Action'
import { useDispatch } from 'react-redux'

export default function NotUserSerchingCity(props) {


    // oppen loin 
    const [loginOpen, setLoginOpen] = useState(false)

    const dispatch = useDispatch()



    // selection city 
    const HandleAddCityLocation = (data) => {
        // console.log(data)
        setOppenCity(!oppenCity)
        dispatch(AddAddressAction(data))
        window.location.reload()
        return
    }


    // open select city.....
    const [oppenCity, setOppenCity] = useState(false)
    const HandleCity = () => {
        setOppenCity(!oppenCity)
    }

    // console.log(oppenCity)

    return !oppenCity ? <Fragment>

        <div className='first-city-location add-padding-loaction'>
            <p>
                Ange din adress för att se från vilka restauranger och butiker vi levererar till dig
            </p>
        </div>


        <Form>

            <div className='Add-Addres add-padding-loaction' >
                <div className='classPluseTitel normail' onClick={(e) => HandleCity(e)} >
                    Visa alla städer med {FirstNameRest}
                </div>
            </div>

        </Form>

        <div className='loaction-bottom'></div>

        <Row className='add-padding-loaction'>

            <Col xs={5} sm={4} md={4} lg={4}>
                <ButtomClick
                    title='Sing up'
                    style={Styles.LocationcolorB}
                    onClick={() => setLoginOpen(!loginOpen)}
                />

            </Col>
            <Col xs={5} sm={4} md={4} lg={4}>

                <ButtomClick
                    title='log in'
                    style={Styles.Locationcolor}
                    onClick={() => setLoginOpen(!loginOpen)}
                />

            </Col>
        </Row>



        {loginOpen &&
            <LoginScreen
                loginOpen={loginOpen}
                setLoginOpen={setLoginOpen}
            />
        }


    </Fragment> : <div className='add-padding-loaction'>
        <LocationSelectCity HandleAddCityLocation={HandleAddCityLocation} />
    </div>

}



