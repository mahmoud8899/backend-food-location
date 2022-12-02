import { useEffect, createContext, useState } from "react"



export const TimePrive = createContext()

export default function TimeContext({ children }) {



    const [dataTime, setDataTime] = useState('')

    useEffect(() => {


        const TheClearTime = setInterval(() => {
            setDataTime(new Date())

        }, 1000);
        return () => {
            clearInterval(TheClearTime)
        }


    }, [])









    return <TimePrive.Provider value={{ dataTime }}>
        {children}
    </TimePrive.Provider>
}