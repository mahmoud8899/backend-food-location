import { Modal } from 'react-bootstrap'
import { HiOutlineX } from 'react-icons/hi'





export default function InformationServices(props) {

    // params open and close show infrom serives
    const { show, setShow } = props




    const HandleHide = () => {


        return setShow(!show)
    }



    return <Modal show={show} onHide={HandleHide}>

        <div className='box-alert'>

            <div >
                <span></span>
            </div>

            <div className='title-add'>
                <span className='title-add-profile'> Hur våra avgifter funkar</span>
            </div>


            <HiOutlineX className='close-pp-pp-image' onClick={HandleHide} />

        </div>

        <div className='box-levrans-uppsala'>
            <h1 className='Visa-alla-title color-color-all'>Leverans</h1>
            <p className='font-name-size-line'>

                Din leveransavgift är baserad på ditt avstånd till stället du beställer ifrån. I det här fallet är det 1,02 km bort, så din leveransavgift blir 49,00 kr.
                Tillägg för liten beställning
                Vi lägger till en mindre summa för att täcka mellanskillnaden från din ordersumma till det minsta ordervärdet, 120,00 kr.
                Serviceavgift
                För en bättre leverans, upplevelse och servicenivå.
            </p>

          
        </div>



    </Modal>
}