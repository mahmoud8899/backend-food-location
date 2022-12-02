import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoactionCity from './LoactionCity'
import { BiStore, BiRestaurant } from 'react-icons/bi'
import { BsChevronDown, BsCursor } from 'react-icons/bs'
import { FaCity } from 'react-icons/fa'
import { useState } from 'react'
import './NavBarCity.css'
import ShowStreetName from './ShowStreetName';
const NavBarCity = (props) => {

    const {
        ClassNameHOMEactive,
        ClassNameCategory,
        ClassNameLike,
    } = props





    const [showCity, setShowCity] = useState(false)









    return <Container fluid>
        <Row className='justify-content-center'>

            <Col xs={12} sm={12} md={3} lg={3} className='TestingCol xs'>
                <div className='NavBar-city' onClick={() => setShowCity(true)}>
                    <div className='center-image-city'>
                        <BsCursor className='NavBar-city-image' />
                    </div>
                    <div className='center-city-city'>
                        <span className='font-name-size-line' >
                            <ShowStreetName />
                        </span>
                    </div>

                    <BsChevronDown className='NavBar-city-image-left' />


                </div>

            </Col>
            <Col xs={12} sm={12} md={8} lg={8} className='TestingCol'>
                <div className='NavBar-city add-postion'>



                    <Link className={ClassNameHOMEactive ? 'center-image-city home addx' : 'center-image-city home'}
                        to={{ pathname: '/' }}
                    >
                        <FaCity className='NavBar-city-image' />
                        <span>Upptäck</span>

                    </Link>

                    <Link
                        to='/restaurants'
                        className={ClassNameCategory ? 'center-image-city home addx' : 'center-image-city home'}
                    >
                        <BiRestaurant className='NavBar-city-image' />
                        <span>restaurants</span>
                    </Link>


                    <Link
                        to='/butiker'
                        className={ClassNameLike ? 'center-image-city home addx' : 'center-image-city home'}
                    >


                        <BiStore className='NavBar-city-image' />
                        <span>Butiker</span>

                    </Link>


                </div>



            </Col>

        </Row>


        <LoactionCity
            showCity={showCity}
            setShowCity={setShowCity}

        />
    </Container>

}


export default NavBarCity

