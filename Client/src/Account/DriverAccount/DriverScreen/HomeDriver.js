
import { Route } from 'react-router-dom'
import SocketScreen from '../../../Components/SocketScreen/SocketScreen'
import HomeDriverProfile from '../DriverProfile/HomeDriverProfile'
import HomeDriverMessage from '../MessageChat/HomeDriverMessage'
import DriverItemsScreen from './DriverItemScreen'
import HomeCancelDriver from './HomeCancelDriver'

export default function HomeDriver() {


    return <SocketScreen>

        <Route path='/sw/driver/online/driver/' component={DriverItemsScreen} exact />
        <Route path='/sw/driver/online/driver/profile/' component={HomeDriverProfile} exact />
        <Route path='/sw/driver/online/driver/processing/' component={HomeCancelDriver} exact />
        <Route path='/sw/driver/online/driver/message/' component={HomeDriverMessage} exact />

    </SocketScreen>
}