import Styles from '../DriverScreen/style'
import '../DriverScreen/style.css'


export default function MessageTopScreen(props) {


    const { data ,userInfo} = props

    return data.users?.map((user,Index) => (
        userInfo?._id !== user?._id &&
        <div className='first-navbar' style={Styles.colorChat} key={Index} >



            <div className='left-name' >
                <span>Chat with server name : {user?.username}</span>
                <span className='online'></span>
            </div>


        </div>
    ))


}