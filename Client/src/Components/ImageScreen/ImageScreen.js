
import { LazyLoadImage } from 'react-lazy-load-image-component';




export default function ImageScreen(props) {

    const {
        ImageIcon,
        className,
        style,
        onClick,
        
    } = props


    return <LazyLoadImage
        // fluid={fluid}
        style={style}
        className={className}
        alt={ImageIcon}
        height={ImageIcon}
        src={ImageIcon}
        width={ImageIcon}
        onClick={onClick}
    />
}

// {/* <Image
//     fluid={fluid}
//         src={ImageIcon}
//         className={className}
//         alt={ImageIcon}
//         style={style}
//         onClick={onClick}

//     /> */}