import { Link } from "react-router-dom"
import { HiPlus } from "react-icons/hi";




export default function AddOpenComponent(props) {
    const {
        PathName,
        Titel,
        style,
        className,
        classNameTitle,
        classNamePluse
    } = props



    return <Link
        className={className}
        style={style}
        to={{
            pathname : PathName
        }}
    >

           <HiPlus  className={classNamePluse ? classNamePluse : 'close-pp-pp-image-add'} />
      
        <div className={classNameTitle ? classNameTitle : 'items-name-first-name'}>{Titel}</div>
    </Link>
}