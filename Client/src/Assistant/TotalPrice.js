
// collect all order
export const TotalPrice = (data) => {
    return data?.reduce((acc, item) => acc + item.prices * item.qty, 0)
}


// collect all order and dlivery Totalsumma
export const Totalsumma = (firstorder, lastDleiver) => {
    let TotaltOrder = firstorder?.reduce((acc, item) => acc + item.prices * item.courrent, 0).toFixed(2)

    let CollectAll = Number(TotaltOrder) + Number(lastDleiver)

    return CollectAll

}



// collect all cart order 
export const CollectOrder = (data) => {


    return data?.reduce((acc, item) => acc + item.qty, 0)

}


// discount is not loop
export const AllDiscount = (data) => {


    const Totalprics = data?.reduce((acc, item) => acc + item.prics * item.qty, 0).toFixed(2)
    const Totaldiscount = data?.reduce((acc, item) => acc + item?.discount / 100, 0).toFixed(2)

    return Number(Totalprics) - (Number(Totalprics) * Number(Totaldiscount))
}

// cod discount
export const CodeDiscountOtumat = (data, prosent) => {


    const Totalprics = data?.reduce((acc, item) => acc + item.prics * item.qty, 0).toFixed(2)
    const Totaldiscount = data?.reduce((acc, item) => acc + prosent / 100, 0).toFixed(2)

    return Number(Totalprics) - (Number(Totalprics) * Number(Totaldiscount))
}

// discount is loop
export const TotalDiscount = (name) => {



    const result = Number(name?.discount) / 100
    const lastresult = Number(name?.prices) - (Number(name?.prices) * result)


    return lastresult.toFixed(2)



}





// Serviceavgift
export const Serviceavgift = Number(5)


// order less than 120
export const LitenBeställning = (courrent) => {

    if (courrent >= Number(120)) {


        return false
    } else {
        return true

    }



}

// lite bestling
export const LitenBeställningPrics = Number(20)
// Dlivery price 
export const DliveryPrice = Number(30)