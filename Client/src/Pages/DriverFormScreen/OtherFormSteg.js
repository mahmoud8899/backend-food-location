import { Form } from 'react-bootstrap'
import { AskOne, Stand } from '../../Assistant/Selection'
import TheInputForm from '../../Components/TheInputForm/TheInputForm'
import Styles from '../../Components/Update/StylesComponents/style'




export default function OtherFormSteg(props) {

    const { HandleDriver, askOne, setAskOne, handleError } = props


    return <>



        <div className='ask-1'>
            <div className='ask-text margin-bottom-style'>
                <span className='ask-text-style' > 1 </span>
                <span className='ask-text-style-text'>ask  do you have</span>
            </div>
            {AskOne?.map((one, index) => (
                <div className='ask-text-checked' key={index} onClick={() => setAskOne({ ...askOne, ask1: one })}>
                    <span className={askOne?.ask1 === one ? 'ask-true add-color' : 'ask-true'}></span>
                    <span className='ask-aser' >{one}</span>
                </div>
            ))}

            <p className='handelerror'>{handleError ? askOne?.ask1?.length === 0 ? 'please choose' : null : null}
            </p>

        </div>

        <div className='ask-text add-cloum'>
            <div className='margin-bottom-style'>
                <span className='ask-text-style' >2</span>
                <span className='ask-text-style-text'>what city do you want to work in </span>
            </div>


            <Form.Control
                as='select'
                style={Styles.input_selector_user}
                onChange={(e) => setAskOne({ ...askOne, city: e.target.value })}
                value={askOne.city}
            >
                <option value='value'  >value</option>
                {Stand?.map((st, index) => (

                    <option key={index} value={st.address}  >{st.address}</option>
                ))}



            </Form.Control>








            <p className='handelerror'> {handleError ? askOne?.city?.length === 0 ? 'please choose' : null : null}</p>

        </div>







        <div className='ask-text'>
            <div className='margin-bottom-style'>
                <span className='ask-text-style'> 4 </span>
                <span className='ask-text-style-text'>tell me about yourself  option</span>
            </div>



            <TheInputForm
                placeholder='tell me about yourself  option'
                as="textarea"
                onChange={(e) => setAskOne({ ...askOne, yourself: e.target.value })}
                onKeyPress={(e) => e.key === 'Enter' ? HandleDriver : null}
                className='Input-type-style hegith'
            />

        </div>


    </>
}

