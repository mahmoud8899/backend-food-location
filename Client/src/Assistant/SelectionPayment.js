

// selection user takeway and delivery
import { DliveryPrice, LitenBeställning, LitenBeställningPrics, Serviceavgift, TotalPrice } from "./TotalPrice"



// what need method need user for food
export const Usercheck = (data, theremoveArray, cartinfo) => {

   switch (data?.name) {

      case 'hämta själv': return `Takeaway om ${cartinfo?.finishfood?.to}-${cartinfo?.finishfood?.end} min`

      case 'utkörning': return theremoveArray?.doornumber ? `Leverans om  ${cartinfo?.finishfood?.to}-${cartinfo?.finishfood?.end} min till ${theremoveArray?.address}` : 'lägg till leveransadress'

      default: return 'lägg till leveransadress'


   }
}


// selection if customs want dlivery show your address
export const CheckDriverUser = (dri, theremoveArray) => {

   if (dri?.name === 'utkörning' && theremoveArray?.doornumber) {

    return `${theremoveArray?.address} ${theremoveArray?.doornumber} ${theremoveArray?.city} ${theremoveArray?.work} `

   }
}


// return `${use?.Adress?.addres} ${use?.Adress?.homeNumber} ${use?.Adress?.city} ${use?.Adress?.work} `





export const classWeek = () => {


   const TheWeek = [
      'mon',
      'tue',
      'wed',
      'thu',
      'fri',
      'sat',
      'sun',
   ]

   const tody = new Date()?.toDateString()


   const WhilTody = tody.slice(0, 3).toLocaleLowerCase()

   const mnayToday = TheWeek.indexOf(WhilTody)


   // // array
   const FirstWeek = TheWeek.slice(mnayToday, TheWeek?.length)
   const lastWeek = TheWeek.slice(0, mnayToday)

   let arrayPush = []

   arrayPush.push(...FirstWeek)
   arrayPush.push(...lastWeek)

   return arrayPush


}




// collect total 
export function CollectTotla(TheCheckOutDriver, filterCartProduct) {
   // pries driver
   const Driver = TheCheckOutDriver?.name === 'utkörning' ? DliveryPrice : Number(0)
   // order less
   const lessOrder = LitenBeställning(TotalPrice(filterCartProduct)) ? Number(LitenBeställningPrics) : Number(0)

   // setItemsPrics(TotalPrice(filterCartProduct) + Driver + Serviceavgift + lessOrder)
   return TotalPrice(filterCartProduct) + Driver + Serviceavgift + lessOrder
}