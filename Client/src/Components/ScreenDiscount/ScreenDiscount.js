import Styles from "./style"




const ScreenDiscount = (props) => {




    return <div className='discount'style={Styles.color}>
        <span>discount</span>
        <span>%{props.dis}</span>
    </div>


}


export default ScreenDiscount