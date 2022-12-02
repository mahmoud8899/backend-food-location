import '../../Pages/DriverFormScreen/DriverFormScreen.css'




export default function CheckedMe(props) {


    const {addOkey, setAddOkey ,handleError} = props

  
    // console.log(addOkey)

    return <div className='agree-checked '>
        <div className='text'>Håller du med</div>
        <div className={handleError ?  ! addOkey ?  'box-checked HandleError' : 'box-checked' : 'box-checked'}>

            <span className={addOkey ? 'box-checked-yes add_clor' : 'box-checked-yes '} onClick={() => setAddOkey(!addOkey)}>jo</span>

            <span className={addOkey ? 'box-checked-no ' : 'box-checked-no add_clor'} onClick={() => setAddOkey(!addOkey)}>nej</span>


        </div>

    </div>

}