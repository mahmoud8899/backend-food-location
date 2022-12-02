

export function TheTimeOppenProduct(name) {

    const TheslicTimeOppen = name?.oppen?.slice(0, 2)
    const TheslicTimeOppenMinutes = name?.oppen?.slice(3, 5)
    const TheslicTimeClose = name?.close?.slice(0, 2)
    const TheslicCloseOppenMinutes = name?.close?.slice(3, 5)

    
    // console.log(TheslicCloseOppenMinutes)


    var currentD = new Date();
    var startHappyHourD = new Date();
    startHappyHourD.setHours(Number(TheslicTimeOppen), Number(TheslicTimeOppenMinutes), 0)
    var endHappyHourD = new Date();
    endHappyHourD.setHours(Number(TheslicTimeClose), Number(TheslicCloseOppenMinutes), 0)



    if (currentD >= startHappyHourD && currentD < endHappyHourD) {
        return true
    } else {
        return false
    }
}