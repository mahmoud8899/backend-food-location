import { BiCheck, BiFolderOpen } from 'react-icons/bi'
import LoadingScreen from '../../LoadingScreen/LoadingScreen'
import Styles from '../StylesComponents/style'




export function PageEmpty(props) {

    const { onClick } = props
    return <div className='lagg-New-resta' style={Styles.colorcreate} onClick={onClick}>
        <BiFolderOpen className='font-icons icons-right' style={Styles.coloricons} />
        <span>Lägg till ny restaurang</span>
        <BiCheck className='font-icons icons-left' style={Styles.coloricons} />
    </div>
}




export function PageTextEmpty(props) {



    return <div className='Empty-uploading'>
        <span>{props?.Pagetext}</span>
        <div className='loading-loading-lading'>
            <LoadingScreen />
        </div>
    </div>
}
