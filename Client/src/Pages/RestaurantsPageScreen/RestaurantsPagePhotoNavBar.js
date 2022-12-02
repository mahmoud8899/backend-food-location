import { Row, Col } from 'react-bootstrap'
import { TheDoday } from '../../Assistant/Selection'
import {SliceNameNot} from '../../Assistant/Slice'
import './style.css'
export default function RestaurantsPagePhotoNavBar(props) {


    const {cartinfo,category} = props





    return <Col xs={12} md={12} lg={12} className='removePaddingmarggin'>

        <div className='navbar-slider'>



            <Row className='justify-content-center'>
                <Col xs={11} sm={11} md={11} lg={11}>
                    <div className='class-bottom-name'>
                        <h1 className='name-res'>
                            {cartinfo ? cartinfo?.username : null}
                        </h1>
                        
                     
                            <div className='margin-top-navbar'>
                                {category?.map((us, Index) => (
                                    <span
                                        className='font-name-size-line color-with'
                                        key={Index}
                                    >
                                        {us?.name},
                                    </span>
                                ))}

                            </div>

                        

                        <div className='Open-time-tody'>
                            <span className='font-all-all-edit'>{TheDoday()} open {SliceNameNot(cartinfo?.opentime?.oppen, 5)  }</span>
                        </div>
                    </div>
                </Col>
            </Row>



        </div>
    </Col>
}