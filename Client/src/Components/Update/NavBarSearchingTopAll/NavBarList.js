
export default function NavBarList(props) {
    const {
        onClick,
        Other,
        OtherLast

    } = props




    return <div className='HandleNavBar'>
        <div className='HandleNavBar-left' onClick={onClick}>
            {Other}
        </div>
        <div className='HandleNavBar-rigth'>
            {OtherLast}

        </div>
    </div>



} 