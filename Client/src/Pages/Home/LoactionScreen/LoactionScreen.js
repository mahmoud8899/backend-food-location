import { Col, Container, Row } from 'react-bootstrap'
import { MyOderImage } from '../../../Assistant/MyOrderImage'
import ImageScreen from '../../../Components/ImageScreen/ImageScreen'
import { FirstNameRest, Stand } from '../../../Assistant/Selection'
import ScreenAbout from '../../ScreenAbout/ScreenAbout'
import { LocationUserAction } from '../../../redux/Action/LoactionUserAction'
import { useDispatch } from 'react-redux'
import TheInputForm from '../../../Components/TheInputForm/TheInputForm'
import { Fragment, useState } from 'react'
import { BiMap } from 'react-icons/bi'
import '../Home.css'
import { HiOutlineX } from 'react-icons/hi'
import { BsCursor } from 'react-icons/bs'
import SearchingCity from './SearchingCity'
export default function LocationScreen({ history }) {


  const dispatch = useDispatch()




  // select city .....
  const SelectionCity = (id) => {

    dispatch(LocationUserAction(id))
    history.push(`/${id.name.toLowerCase()}/`)
  }


  // filter 
  const [query, setQuery] = useState('')
  console.log(query)
  const keys = ["name"];
  const search = (data) => {
    return data?.filter((item) =>
      keys?.some((key) => item[key]?.toLowerCase()?.includes(query))
    );
  };


  return <Container fluid>

    <div className='dev-top-top'>
      <Row >

        <Col xs={12} sm={12} md={12} lg={12} className='dev-top' >
          <ImageScreen ImageIcon={MyOderImage.loaction5} className='Cover-image-loaction' />

        </Col>
        <Col xs={12} sm={12} md={12} lg={12} className='back-color'>
          <h1 className='fontt'>Leveransadress</h1>
          <Row>
            <div className='mAPS-INPUT'>
              <Col xs={12} sm={6} md={4} lg={4}>
                <div className='postin-city'>

                  <TheInputForm
                    placeholder='Hitta din stad'
                    onChange={(e) => setQuery(e.target.value.toLowerCase())}
                    value={query}
                    FirstIcons={
                      <Fragment>
                        <BiMap className='Icons-LEFT' />
                        {query.length > Number(0) && <HiOutlineX
                          className='close-pp-pp-image ADD-REMOVE'
                          onClick={() => setQuery('')}
                        />
                        }
                      </Fragment>
                    }

                    className='Input-type-style productdetials text-searching ADD-HEIGTH'
                  />


                  {query.length > Number(0) &&
                    <div className='resultSearchingcity'>

                      <div className='flex-ddd'>
                      </div>
                      <div className='nuvarande'>
                        <BsCursor />
                        <span>Använd min nuvarande plats</span>
                      </div>

                      <SearchingCity Stand={search(Stand)} />



                    </div>
                  }

                </div>


              </Col>

            </div>

          </Row>
        </Col>



        <Col xs={12} sm={12} md={12} lg={12}>

          <div className='first-text-country'>
            Upptäck städer där   {FirstNameRest} finns

          </div>

          <div className='box-country'>
            <div className='selection-image-country'>
              <ImageScreen ImageIcon={MyOderImage.sweden} className='Image-country' />
              <span className='flex-font-sw'>Sverige</span>
            </div>


            <div className='text-city'>
              {Stand?.map((land, Index) => (
                <div className='text-city-city' key={Index} onClick={() => SelectionCity(land)} >
                  <span>{land.address}</span>
                  <ImageScreen ImageIcon={MyOderImage.right} className='Image-right' />
                </div>
              ))}


            </div>
          </div>


        </Col>

        <ScreenAbout />

      </Row>
    </div>
  </Container>
}
