




export default function PageSwitch(props) {

    const {
        onClick,
        OtherInput,
        TextInput,
    } = props




    return <div className='switch-type' onClick={onClick} >

        <span className={OtherInput ? 'checkOut-popluer' : ''}>

        </span>
        <span>{TextInput}</span>

    </div>

}