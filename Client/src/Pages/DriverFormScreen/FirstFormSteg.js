import TheInputForm from '../../Components/TheInputForm/TheInputForm'



export default function FirstFormSteg(props) {

    const { setUserInfoInput, userInfoInput, HandleDriver, handleError } = props

    return <>
        <div className='ask-text margin-bottom-style'>
            <span className='selection-name'>e-post</span>

            <TheInputForm
                placeholder='emil'
                onChange={(e) => setUserInfoInput({ ...userInfoInput, email: e.target.value })}
                value={userInfoInput?.email}
                type='emil'
                onKeyPress={(e) => e.key === 'Enter' ? HandleDriver : null}
                className='Input-type-style productdetials'

            />



        </div>


        <div className='ask-text margin-bottom-style'>
            <span className='selection-name'>telefonnummer</span>
            <TheInputForm
                placeholder='phone number'
                onChange={(e) => setUserInfoInput({ ...userInfoInput, telephone: e.target.value })}
                value={userInfoInput?.telephone}
                type='number'
                onKeyPress={(e) => e.key === 'Enter' ? HandleDriver : null}
                className='Input-type-style productdetials'

            />



        </div>


        <div className='ask-text margin-bottom-style'>
            <span className='selection-name'>förnamn</span>
            <TheInputForm
                placeholder='first name'
                onChange={(e) => setUserInfoInput({ ...userInfoInput, firstname: e.target.value })}
                value={userInfoInput?.firstname}
                type='text'
                onKeyPress={(e) => e.key === 'Enter' ? HandleDriver : null}
                className='Input-type-style productdetials'
            />



        </div>

        <div className='ask-text margin-bottom-style'>
            <span className='selection-name'>efternamn</span>
            <TheInputForm
                placeholder='efternamn'
                onChange={(e) => setUserInfoInput({ ...userInfoInput, lastname: e.target.value })}
                value={userInfoInput?.lastname}
                type='text'
                onKeyPress={(e) => e.key === 'Enter' ? HandleDriver : null}
                className='Input-type-style productdetials'
            />

        </div>



        <div className='ask-text margin-bottom-style'>
            <span className='selection-name'>Land</span>
            <TheInputForm
                placeholder='Land'
                onChange={(e) => setUserInfoInput({ ...userInfoInput, country: e.target.value })}
                value={userInfoInput?.country}
                type='text'
                onKeyPress={(e) => e.key === 'Enter' ? HandleDriver : null}
                className='Input-type-style productdetials'
            />
        </div>



        <div className='ask-text margin-bottom-style'>
            <span className='selection-name'>födelsedatum</span>
            <TheInputForm
                placeholder='födelsedatum'
                onChange={(e) => setUserInfoInput({ ...userInfoInput, birth: e.target.value })}
                value={userInfoInput?.birth}
                type='date'
                onKeyPress={(e) => e.key === 'Enter' ? HandleDriver : null}
                className='Input-type-style productdetials'
            />


            <p className='handelerror'>{
                handleError ? userInfoInput?.birth?.length === 0 ? handleError : null : null

            }</p>
        </div>



    </>
}