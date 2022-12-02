import React, { useState, useEffect, createContext, useRef } from 'react'




export const ScrollDrow = createContext()

export default function ScrollDrowPageScreen({ children }) {

    const [addTop, setAddTop] = useState('')
    const [hiddenNavBar, setHiddenNavBar] = useState(false)
    const NavBarScroll = useRef()
    useEffect(() => {
        const xp = window.onscroll = function () {

            setAddTop('postion-top')
            window.scrollY >= NavBarScroll?.current?.offsetTop ? setAddTop('newPox') : setAddTop('postion-top')

            setHiddenNavBar(false)
            if (window.scrollY >= 30) {
                return setHiddenNavBar(true)
            } else {

                return setHiddenNavBar(false)
            }
        }

        xp()


        return () => {
            setHiddenNavBar(false)
            setAddTop('')

        }

    }, [NavBarScroll, setHiddenNavBar, setAddTop])



    return <ScrollDrow.Provider value={{ addTop, hiddenNavBar,NavBarScroll }} >
        {children}
    </ScrollDrow.Provider>
}