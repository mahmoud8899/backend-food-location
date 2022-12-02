
import { Modal } from 'react-bootstrap'
import { HiOutlineX } from 'react-icons/hi'
import MapsLocation from '../Home/MapsLocation/MapsLocation'
import './style.css'


export default function RestaurangetsDescription(props) {


    const { openDescription, setOpenDescription, cartinfo } = props


    // google maps...
    const MpasClick = (e) => {
        e.preventDefault()
        return window.open((`http://${cartinfo?.addressinfo?.website}`), '_blank')
    }





    return <Modal show={openDescription} onHide={() => setOpenDescription(!openDescription)}>



        <div className='add-Open-Imae-postion'>

            <div className='description-image' >
                <MapsLocation className='277px'  coordinates={cartinfo?.location?.coordinates} />
            </div>




            <div className='close-yourOrder add-postion-close'>
                <HiOutlineX className='close-pp-pp-image' onClick={() => setOpenDescription(!openDescription)} />

            </div>
        </div>

        <div className='scroll-description'>

            <div className='close-yourOrder'>

                <h1 className='Addres-font-size'>name : {cartinfo?.username}</h1>


                <div className='Oppen-CLOSE'>
                <span className='comment-image-top-text-last'>
                öppen tid : {cartinfo?.opentime?.oppen}
                </span>
                <span className='comment-image-top-text-last'>
                öppna stäng : {cartinfo?.opentime?.close}
                </span>


                </div>
            </div>


            <div className='close-yourOrder'>
            <h1 className='Addres-font-size'>Beskrivning</h1>
                <div className='comment-image-top-text-last'>
                    {cartinfo?.description}
                </div>


            </div>

            <div className='close-yourOrder'>
                <div className='Addres-font-size'>
                Adress
                </div>

                <div className='Addres-maps-res'>
                    <span> {cartinfo?.addressinfo?.city}</span>
                    <span>{cartinfo?.addressinfo?.address}</span>
                    <span>+{cartinfo?.addressinfo?.telefon}</span>



                </div>

                <div className='Addres-font-size see_map'>
                se karta
                </div>


            </div>


            <div className='close-yourOrder'>
                <div className='Addres-font-size'>
                Kontakt
                </div>

                <div className='Addres-maps-res'>
                    <span className='comment-image-top-text-last'>
                        If you have allergies or other dietary restrictions, please contact the
                        restaurant. The restaurant will provide food-specific information upon request
                    </span>

                </div>

                <div className='website-contact'>
                    <span >
                    hemsida
                    </span>
                    <span onClick={MpasClick}>
                    besök hemsida
                    </span>
                </div>


            </div>


        </div>






    </Modal>

}