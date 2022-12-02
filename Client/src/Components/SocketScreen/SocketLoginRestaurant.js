import React, { useEffect, useState, createContext } from "react"
import { useSelector } from "react-redux"
import io from 'socket.io-client'



export const OnlineSocketLoginRestaurant = createContext()


export default function SocketLoginRestaurant({ children }) {



    const [socket, setSocket] = useState(null)
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin


    const supSocket = () => {
        if (!socket) {

            const newSocket = io.connect(`http://localhost:8000/`, { reconnect: true })
            newSocket.on('disconnect', () => {
                setSocket(null)
                // setTimeout(supSocket, 3000)
                console.log('disconnect', 'socket Disconnect !')
            })

            newSocket.on('connect', () => {
                console.log('restaurant online')
            })
            setSocket(newSocket)

        }

    }




    // console.log(userInfo?.cartinfo)

    // connect socket.....
    useEffect(() => {
        supSocket()


        if (userInfo?.cartinfo && socket) {

            socket.emit('ResturantJoin', userInfo?.cartinfo)

            // socket.on('getUser', (users) => {
            //     // console.log('users')
            // })

        }

        // eslint-disable-next-line
    }, [socket, userInfo?.cartinfo])





    return <OnlineSocketLoginRestaurant.Provider value={{ socket }}>
        {children}
    </OnlineSocketLoginRestaurant.Provider>
}