import {FirstNameRest} from '../../../Assistant/Selection'
// from home to restauran
export const Conversion = (conv) => {

    let TheSplit = conv?.username?.split(" ").join('-')
    let nameproductType = conv?.productType
    let cityName = conv?.addressinfo?.city
    return `/${cityName}/${nameproductType}/${TheSplit}`

   
}

// from home to restauran
export const ConversionCheckOut = (conv) => {
    let TheSplit = conv?.username?.split(" ").join('-')
    let nameproductType = conv?.productType
    let cityName = conv?.addressinfo?.city

    return `/${cityName}/${nameproductType}/${TheSplit}/checkout`
}







// navigation work
export const RouterWork = (history) => {

    return history.push(`/sw/mig/${FirstNameRest}/work`)
}

// navigation canact
export const ContactPage = (history) => {

    return history.push(`/sw/mig/${FirstNameRest}/contact`)
}


// Navigation About ...
export const AboutPage = (history) => {

    return history.push(`/sw/mig/${FirstNameRest}/about`)
}




// category like
export const TheCategoryLike = (FilterLocation, name) => {

    return `${FilterLocation}${name}/`
}