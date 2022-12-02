import { Platform } from "react-native"

let Url = ''




// {
//     Platform.OS === 'android' ?
//         Url = 'http://10.0.31.202:8000/'
//         : Url = 'http://10.0.31.202:8000/'
// }



{
    Platform.OS === 'android' ?
        Url = 'http://192.168.0.9:8000/'
        : Url = 'http://192.168.0.9:8000/'
}







export default Url