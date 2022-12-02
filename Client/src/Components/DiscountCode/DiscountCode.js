import { Form } from 'react-bootstrap'
import { CheckInDiscountCodAction } from '../../redux/Action/Product_Action'
import ButtomClick from '../Buttom/Buttom'
import CodeError from '../CodeError/CodeError'
import LoadingScreen from '../LoadingScreen/LoadingScreen'
import React, { useEffect } from 'react'
import Styles from './style'
import { useDispatch, useSelector } from 'react-redux'


const DiscountCode = (props) => {


    const {setSuccessFul,setSuccessFulDiscount,inputDiscount, setInputDiscount} = props


    const dispatch = useDispatch()

    const checkdiscount = useSelector((state) => state.checkdiscount)
    const { loading, success ,discount : TotalDis } = checkdiscount
    


   


    useEffect(() => {
       if(success){
        if (success === 'The discount code is not work.'){
            return 
        } else {
            setSuccessFulDiscount(TotalDis)
            return setSuccessFul(true)
        }
       
       }


        
    }, [success,setSuccessFul,TotalDis,setSuccessFulDiscount])



    // handle discount
  
    const HandlelDiscount = (e) => {
        e.preventDefault()
        if (inputDiscount.trim()) {
            return dispatch(CheckInDiscountCodAction({ checkinCode: inputDiscount }))
        }

    }



    const checkValidation = (data) => {

        return data.length === 30 ? 'true' : 'false'


    }


    return <div style={Styles.discount}>
        {loading ? <LoadingScreen /> :
            <>
                {success && <CodeError error={success} />}
                <Form onSubmit={(e) => HandlelDiscount(e)}>
                    <Form.Control
                        placeholder='discount Code'
                        style={Styles.input}
                        onChange={(e) => setInputDiscount(e.target.value)}
                        validation={checkValidation(inputDiscount)}
                        value={inputDiscount}


                    />
                    <ButtomClick
                        title='discount code'
                        disabled={inputDiscount?.length === 30 ? false : true}

                    />
                </Form>

            </>
        }

    </div>
}


export default DiscountCode