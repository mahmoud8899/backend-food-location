



export default function ValidationInput(props) {
    const { handleError, ValidationError ,errorName} = props




    return handleError && ValidationError &&
        <div className='error-input-address'>
            <span className='error-input-address-children'>{errorName ? errorName : 'error from input.....'}</span>

        </div>

}