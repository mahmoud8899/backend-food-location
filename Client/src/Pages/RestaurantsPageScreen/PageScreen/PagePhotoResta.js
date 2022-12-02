import { Col } from 'react-bootstrap'
import ImageScreen from '../../../Components/ImageScreen/ImageScreen'

export default function PagePhotoResta({cartinfo}) {



    return <Col xs={12} md={12} lg={12} className='removePaddingmarggin'>
            <ImageScreen
             ImageIcon={cartinfo?.image} 
            className='Cover-image' 
            fluid
            />

    </Col>
}