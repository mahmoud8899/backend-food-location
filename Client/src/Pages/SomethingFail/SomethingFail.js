import { Container, Row, Col } from 'react-bootstrap'
import './style.css'
import ImageScreen from '../../Components/ImageScreen/ImageScreen'
import { MyOderImage } from '../../Assistant/MyOrderImage'
import { FirstNameRest } from '../../Assistant/Selection'
import Title from '../../Components/ScreenTitle/ScreenTitle'
export default function SomethingFail({ history }) {



    const HomePage = (e) => {
        e.preventDefault()
        return history.push('/')
    }
    return <Container fluid>



        <Title TextTitle='Något oväntat hände' />

        <Row className='justify-content-center'>
            <Col xs={12} sm={12} md={6} lg={6}>
                <div className='Image-something'>
                    <ImageScreen ImageIcon={MyOderImage.cooking} className='cooking' />
                    <div className='flex-something'>
                        <span className='flex-something-first'>    Något oväntat hände</span>

                        <span className='flex-something-first-text'>Tyvärr kunde vi inte hitta innehållet du letade efter. Ursäkta besväret!</span>
                        <div className='back-buttom' onClick={(e) => HomePage(e)}>
                            <span>tillbaka till{FirstNameRest}</span>
                        </div>
                    </div>

                </div>
            </Col>
        </Row>

    </Container>
}