import { Col, Row } from 'react-bootstrap'
import MyAddress from '../../../Components/MyAddress/MyAddress'
import Styles from '../DriverScreen/style'

const ChangeAddres = (props) => {


    const {openAddres,setOpenAddres} = props


    return <Row className="justify-content-center">
        <Col xs={12} md={12} lg={4} className={openAddres ? "Add_open_Adress open" : "Add_open_Adress"}>
            <div className="test_code">


                <div>
                    <span className="close_items" onClick={() => setOpenAddres(false)}>X</span>
                    <div className="Billing_Address">
                        <h1 style={Styles.font} >Add Addres</h1>
                        <MyAddress />

                    </div>
                </div>
            </div>

        </Col>
    </Row>
}


export default ChangeAddres