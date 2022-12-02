import '../DriverScreen/style.css'
import { Row, Col } from 'react-bootstrap'
import Styles from '../DriverScreen/style'
import { MyOderImage } from '../../../Assistant/MyOrderImage'
import ButtomClick from '../../../Components/Buttom/Buttom'
import { useState } from 'react'
import ImageScreen from '../../../Components/ImageScreen/ImageScreen'
import TheInputForm from '../../../Components/TheInputForm/TheInputForm'

export default function MessageInput(props) {


    const { socket, userInfo, chatId, infoUserRoute ,alMessages,setAlMessages} = props


    const [sendInput, setSendInput] = useState('')







    const SendMessage = e => {

        e.preventDefault()

        const lastUser = infoUserRoute[0]?.users?.find((x) => x?._id !== userInfo?._id)

        
        if (socket) {


            socket.emit('sendM', ({
                chatid : chatId,
                userid : userInfo?._id,
                text : sendInput,
                lastUser :lastUser?._id,
                image : 'hello.jpg'
            }))



        }


        socket.on('loadingMessage', (data)=>{

        
        setAlMessages([...data.message, alMessages])
        })


        setSendInput('')



        // return console.log('message', userInfo._id, sendInput, chatId)

    }

    // validtion 
    const Valdtion = (name) => {

        return name.length > 1 ? true : false
    }

    return <div className='buttom-chat'>
        <Row className="justify-content-center">
            <Col xs={9} sm={9} md={9} lg={9}>

         
                    <TheInputForm
                      placeholder='Send a Message'
                      as='textarea'
                      style={Styles.textarea}
                      onChange={(e) => setSendInput(e.target.value)}
                      name='input'
                      value={sendInput}
                      onKeyPress={(e) => e.key === 'Enter' ? SendMessage(e) : null}


                      
                     
                   
                        className='Input-type-style hegith'
                      


                    />



              
            </Col>
            <Col xs={3} sm={3} md={3} lg={3}>
                <ul className='ulplus'>

                    <li>
                        <ImageScreen ImageIcon={MyOderImage.map} style={Styles.image} />
                    </li>
                    <li>
                        <ImageScreen ImageIcon={MyOderImage.image}  style={Styles.image} />
                    </li>

                </ul>
            </Col>
            <Col xs={12} sm={12} md={10} lg={12}>
                <ButtomClick
                    title='Send'
                    onClick={(e) => SendMessage(e)}
                    disabled={!Valdtion(sendInput)}

                />
            </Col>
        </Row>

    </div>
}