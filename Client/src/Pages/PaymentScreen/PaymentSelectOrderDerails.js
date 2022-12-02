import { Modal } from 'react-bootstrap'
import ButtomClick from '../../Components/Buttom/Buttom'
import PaymentDrivery from './HandleDetalis/PaymentDrivery'
import PaymentDetailsAddres from './HandleDetalis/PaymentDetailsAddres'
import PaymentDate from './HandleDetalis/PaymentDate'
import Styles from '../../Components/Update/StylesComponents/style'
import { HiOutlineX } from 'react-icons/hi'
export default function PaymentSelectOrderDerails(props) {


    // params
    // [1]- open navbar selection and close
    // [2] - what user selection method - name -driver and loading
    // [3] - user info
    const {
        openNavBarList,
        setOpenNavBarList,
        driver,
        loading,
        
     
    } = props








    // close navbar selection -- // -- 
    const handleClose = () => setOpenNavBarList(false)






    // options 
    // [1] : choose the type of requires takeway and delivery   class name -- PaymentDrivery
    // [2] : add my address if i want home delivery   class name  -- PaymentDetailsAddres
    // [3] :  add time and tady to order -- class name  PaymentDate
    // [4] : close nav bar if customer wnat



    return <Modal
        show={openNavBarList}
        onHide={handleClose}

    >

        <div className='sdfsdfds' id="myDIV">


            <div className='box-alert'>

                <div >
                    <span></span>
                </div>

                <div className='title-add'>
                    <span className='title-add-profile'>Välj beställningsdetaljer</span>
                </div>


                <HiOutlineX className='close-pp-pp-image' onClick={(e) => setOpenNavBarList(false)} />

            </div>


            <div className='add-scroll-to'>
                {/* choose the type of requrest */}
                <PaymentDrivery driver={driver} loading={loading} />
                {/* add my address if i want home delivery  */}
                <PaymentDetailsAddres driver={driver} />

                {/* add time and day */}
                <PaymentDate />

            </div>

            <div className='class-buttom-postion'>
                <div className='class-buttom-postion-children'>
                    <ButtomClick
                        title='Klar'
                        style={Styles.buttomColorPage}
                        onClick={(e) => setOpenNavBarList(false)}
                    />
                </div>
            </div>





        </div>

    </Modal>




}