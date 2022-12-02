import { HiOutlineX  } from 'react-icons/hi'
import ImageScreen from '../../ImageScreen/ImageScreen'



export default function OppenImage(props) {

    const { showImage, setShowImage } = props




    return showImage?.value ?
        <div className="div-oppen-image-class">
            <ImageScreen ImageIcon={showImage?.image} className='oppen-image' />
            <HiOutlineX
               
                className='close-pp-pp-image oppen-close'
                onClick={() => setShowImage({ value: false, image: '' })}
            />
        </div>

        : null
}



