const ObjectMaps = {

    IsPassword: ValidationPassword,
    isEmail: ValidationEmial,
    isUsername: ValidationUsername,
    IsNumber :  ValidationNumber,
    telefon : ValidationNumberStory

}



// validation number 
function ValidationNumberStory(valueNumber){
    //  console.log(valueNumber)
    return valueNumber.length >= 7
   
}

// validation number 
function ValidationNumber(valueNumber){
     console.log(valueNumber)
    return valueNumber.length >= 7
   
}


// validation username
function ValidationUsername(valueEmail) {
    // console.log(valueEmail)
    return valueEmail?.length >= 6
}


// validation password
function ValidationPassword(inputValue) {
//    console.log(inputValue)
    return inputValue.length >= 3
}

// validation Email
function ValidationEmial(enteredPhone) {
//   console.log(enteredPhone)

    return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(enteredPhone)

    // return /^[0-9]+$/.test(enteredPhone);
}






export const Validate = (inputValue, rutes) => {

    let isValid = true

    for (let rute of rutes) {

        isValid = isValid && ObjectMaps[rute.key](inputValue)
    }



    return isValid
}