import { Modal,Col,Row } from 'react-bootstrap'
import ButtomClick from '../../Buttom/Buttom'
import Styles from '../StylesComponents/style'
import { HiOutlineX  } from 'react-icons/hi'

export default function RemoveAlrt(props) {
    const { show, setShow, HandleRemove, TextRemove } = props



    // handel Close 
    const HandlClose = () => {
        return setShow({ value: false, object: '' })
    }


    return show?.value && <Modal show={show?.value}
        onHide={() => HandlClose()}>


        <div className='body-category'>

            <div className='modal-title-edit-category'>
                <h1>
                    {TextRemove}
                </h1>
                <HiOutlineX  className='close-pp-pp-image'    onClick={() => setShow({ value: false, object: '' })} />
               
            </div>




            <Row className='justify-content-center class-Half'>
                <Col xs={12} sm={12} md={12} lg={12}>
                    <div className='Div-center'>
                        är du säker?
                    </div>

                </Col>

                <Col xs={6} sm={6} md={6} lg={6}>
                    <ButtomClick
                        title='Stäng'
                        style={Styles.buttomRemoveStag}
                        onClick={() => setShow({ value: false, object: '' })}

                    />

                </Col>
                <Col xs={6} sm={6} md={6} lg={6}>

                    <ButtomClick
                        title='ta bort'
                        style={Styles.buttomRemove}
                        onClick={HandleRemove}
                    />

                </Col>
            </Row>


        </div>

    </Modal>
}