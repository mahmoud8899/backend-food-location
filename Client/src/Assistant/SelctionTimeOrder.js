

// time nu och change with today....
export function NewTime(userOptimtim, dateOrder) {

    // open 
    const TheOpenHour = userOptimtim?.oppen?.slice(0, 2)
    const TheOpenMinute = userOptimtim?.oppen?.slice(3)
    const theTimeJustNow = new Date()?.getHours() + 1
    const Mahmoud = new Date()
    if (dateOrder === 'today -  -' || dateOrder === '') {
        if (Number(theTimeJustNow) > TheOpenHour) return Mahmoud.setHours(theTimeJustNow, TheOpenMinute, 0)
    }
    
    return Mahmoud.setHours(TheOpenHour, TheOpenMinute, 0)
}









// time to close butiker....
export function ClosTime(userOptimtim) {


    // close 
    const TheClosenHour = userOptimtim?.close?.slice(0, 2)
    const TheCloseMinute = userOptimtim?.close?.slice(3)
    // close.....
    let ACXD = new Date()
    return ACXD.setHours(TheClosenHour, TheCloseMinute, 0)
}
