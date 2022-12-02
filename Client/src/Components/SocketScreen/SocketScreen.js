import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import { useSelector } from 'react-redux'


export const SocketContact = React.createContext()

export default function SocketScreen({ children }) {




    const [socket, setSocket] = useState(null)
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo ,token} = userLogin


    const supSocket = () => {
        if (!socket) {

            const newSocket = io.connect(`http://localhost:8000/`, { reconnect: true })
            newSocket.on('disconnect', () => {
                setSocket(null)
                // setTimeout(supSocket, 3000)
                console.log('disconnect', 'socket Disconnect !')
            })

            newSocket.on('connect', () => {
                console.log('success')
            })
            setSocket(newSocket)

        }

    }




    // connect socket.....
    useEffect(() => {
        supSocket()


        if(userInfo?._id && socket){
       
                socket.emit('join', userInfo?._id)
    
                socket.on('getUser', (users) => {
                    // console.log('users')
                })
            
        }
        
        // eslint-disable-next-line
    }, [socket, userInfo?._id])






    return <SocketContact.Provider value={{socket, userInfo,token}} >
        {children}

    </SocketContact.Provider>

}