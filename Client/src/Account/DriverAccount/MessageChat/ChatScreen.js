import { useContext, useEffect, useState } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import Title from '../../../Components/ScreenTitle/ScreenTitle'
import Styles from '../DriverScreen/style'
import MessagesScreen from './MessagesScreen'
import MessageInput from './MessageInput'
import DriverNavBar from '../DriverScreen/DriverNavBar'
import { SocketContact } from '../../../Components/SocketScreen/SocketScreen'
import MessageTopScreen from './MessageTopScreen'
import LoadingScreen from '../../../Components/LoadingScreen/LoadingScreen'
import usex from '../../../Assistant/sound/sound.mp3'
import axios from 'axios'
import useSound from 'use-sound'
import '../DriverScreen/style.css'
export default function ChatScreen(props) {


    const [play] = useSound(usex)


 
    const { socket, userInfo } = useContext(SocketContact)
    const [infoUserRoute, setInfoUserRoute] = useState('')
    const [chatId, setChatId] = useState(null)
    const [alMessages, setAlMessages] = useState([])
    const [loading, setLoading] = useState(false)
    const [updateMessage, setUpdateMessage] = useState('')



   

    // console.log(infoUserRoute[0]?.users)



    useEffect(() => {


        const getUser = async () => {

            try {
                setLoading(true)

                const { data } = await axios.get(`/api/message/view/${userInfo?._id}`)
                if (data?.message) {
                    setInfoUserRoute(data.data)
                    return setChatId(data.data._id)
                }
                setInfoUserRoute(data)
                setChatId(data[0]?._id)


                // setLoading(false)
            } catch (error) {

                return console.error(error.message)
            }

        }

        getUser()

        return () => {

            setInfoUserRoute('')
            setChatId(null)

        }

    }, [userInfo?._id])





    useEffect(() => {

        if (chatId !== null) {

            const MessageChat = async () => {

                try {
                    setLoading(true)
                    const { data } = await axios.get(`/api/message/all/chat/${chatId}`)

                    setAlMessages(data.message)
                    setLoading(false)
                } catch (error) {


                    console.error(error)
                }


            }

            MessageChat()
        }





        return () => {


            setAlMessages([])
        }

    }, [chatId])



    useEffect(()=>{
        if(socket){
            socket.on('sendigen', (data) => {

                
                setUpdateMessage({
                    sender: data.userid,
                    text: data.text,
                    date: Date.now()
                })

                play()

            })
        }

    },[socket,play])



    // check message... 
    useEffect(() => {

        updateMessage && infoUserRoute[0]?.users?.find((x)=> x?._id === updateMessage?.sender) &&
      
         setAlMessages(prev=>[...prev,updateMessage])
           

    }, [infoUserRoute, updateMessage])



    console.log(infoUserRoute)



    return <Container fluid>



        <Title TextTitle='Chat with server' />
        <Row className='justify-content-center'>

            <Col xs={12} sm={4} md={4} lg={4}>

                <DriverNavBar ClassNameChat />

            </Col>





            {loading ? <LoadingScreen /> :
                <Col xs={12} sm={8} md={8} lg={8}>
                    <Row className="justify-content-center" style={Styles.boxtop}>

                        <Col xs={12} sm={12} md={12} lg={12}>


                            <div style={Styles.firstbox} className='box-chat'>

                                <div style={Styles.chatBOX} className='chat-box'>


                                    {infoUserRoute.length > 0 ? infoUserRoute?.map((data, Index) => (
                                        <MessageTopScreen
                                            key={Index}
                                            data={data}
                                            userInfo={userInfo}
                                        />
                                    )) : null}



                                    <MessagesScreen
                                        alMessages={alMessages}
                                        userInfo={userInfo}
                                    />



                                    <MessageInput
                                        socket={socket}
                                        userInfo={userInfo}
                                        chatId={chatId}
                                        infoUserRoute={infoUserRoute}
                                        alMessages={alMessages}
                                        setAlMessages={setAlMessages}
                                    />





                                </div>


                            </div>



                        </Col>


                    </Row>
                </Col>
            }
        </Row>
    </Container>
}











