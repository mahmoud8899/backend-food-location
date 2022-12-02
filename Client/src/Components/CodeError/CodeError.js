import React from 'react'
import { MyOderImage } from '../../Assistant/MyOrderImage'
import ImageScreen from '../ImageScreen/ImageScreen'

const CodeError = (props) => {


    const { error, onClick, AddClose } = props


    return <div className='handle-dev-image'>
        <span>{error}</span>
        {AddClose &&
            <ImageScreen
                ImageIcon={MyOderImage.close}
                className='close-image-error'
                onClick={onClick}
            />
        }

    </div>





}


export default CodeError