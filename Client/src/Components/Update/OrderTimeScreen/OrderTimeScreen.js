import { Row, Col, Form, } from 'react-bootstrap'
import { AddSstich, timeFrom } from '../../../Assistant/Selection'
import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { NewTime, ClosTime } from '../../../Assistant/SelctionTimeOrder'

export default function OrderTimeScreen(props) {


    const { setTimeOrder, setDateOrder, cartinfo, dateOrder } = props



 
    // if today and not....
    const [changeDateLocal, setChangeDateLocal] = useState(false)
    // set time and generate time
    const [startDate, setStartDate] = useState(new Date());



    // console.log(changeDateLocal)

    // store or restaurant timings
    const userOptimtim = {
        oppen: cartinfo?.opentime?.oppen,
        close: cartinfo?.opentime?.close
    }



    // set today and date....
    // handel
    const Hnadlechange = (name) => {
        setDateOrder(`${AddSstich(name)} - ${name.slice(5, 16)} -`)
        if (name === 'today') {
            setChangeDateLocal(false)
        } else {
            setChangeDateLocal(true)
        }

    }

    // selction time and date 
    const HandlTime = (name) => {

        if (dateOrder?.length === 0) {

            setTimeOrder(name.toLocaleTimeString())
            setDateOrder('today')
            return

        }

        setTimeOrder(name.toLocaleTimeString())
    }





    return <Row className='justify-content-center'>

        <Col xs={6} sm={6} md={6} lg={6}>

            <Form>
                <Form.Control as='select' className='Input-type-style productdetials'
                    onChange={(e) => Hnadlechange(e.target.value)}>
                    {timeFrom(-7)?.map((us, Index) => (
                        <option value={Index === 0 ? 'today' : us} key={Index} >
                            {Index === 0 ? 'today' : Index === 1 ? 'tomorrow' : AddSstich(us)}
                        </option>
                    ))}
                </Form.Control>
            </Form>

        </Col>


        <Col xs={6} sm={6} md={6} lg={6}>
            <DatePicker
                selected={startDate}
                onChange={(date) => HandlTime(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={10}
                minTime={NewTime(userOptimtim, dateOrder)}
                maxTime={ClosTime(userOptimtim)}
                timeCaption="Time"
                dateFormat="HH:mm"
                timeFormat="HH:mm"
                className='Input-type-style productdetials'

            />
        </Col>


       {changeDateLocal ? null : setStartDate && null}
    </Row>


}

    // const filterPassedTime = (time) => {
    //     const currentDate = new Date();
    //     const selectedDate = new Date(time);
    //     //  console.log(typeof  selectedDate)
    //     return currentDate.getTime() < selectedDate.getTime();
    // };
//  <Col xs={6} sm={6} md={6} lg={6}>
// <Form.Control
//     as='select'
//     className='ADD-SELECT'
//     onChange={(e) => setTimeOrder(e.target.value)}
// >

//     {theTimeNow(userOptimtim, changeDateLocal)?.map((x, Index) => (

//         <option key={Index} value={x}>{x}</option>
//     ))}
// </Form.Control>
// </Col> 

        // console.log('TheClosenHour', TheClosenHour)
        // console.log('TheCloseMinute', TheCloseMinute)
   // // open
        // const TheOpenHour = userOptimtim.oppen.slice(0, 2)
        // const TheOpenMinute = userOptimtim.oppen.slice(3)
        // console.log('TheOpenHour', TheOpenHour)
        // console.log('TheOpenMinute', TheOpenMinute)
        // let Mahmoud = new Date()
        // Mahmoud.setHours(TheOpenHour, TheOpenMinute, 0)





