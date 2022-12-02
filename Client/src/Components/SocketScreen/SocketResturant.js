
import React, {  createContext, useEffect, useState } from 'react'
import io from 'socket.io-client'


export const SocketChildrenResturant = createContext()

export default function SocketResturant({ children }) {


    const [socket, setSocket] = useState(null)

    const supSocket = () => {
        if (!socket) {

            const newSocket = io.connect(`http://localhost:8000/`, { reconnect: true })
            newSocket.on('disconnect', () => {
                setSocket(null)
                // setTimeout(supSocket, 3000)
                console.log('disconnect', 'socket Disconnect !')
            })

            newSocket.on('connect', () => {
                console.log('success pay....')
            })
            setSocket(newSocket)

        }

    }




    // connect socket.....
    useEffect(() => {
        supSocket()
        // eslint-disable-next-line
    }, [])



    return <SocketChildrenResturant.Provider value={{socket}}>
        {children}
    </SocketChildrenResturant.Provider>

}