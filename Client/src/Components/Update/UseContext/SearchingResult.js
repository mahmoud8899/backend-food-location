import React, { createContext, useState } from 'react'



export const SearchingContext = createContext()

export default function SearchingResult({ children }) {



    // input searching
    const [searching, setSearching] = useState('')



    return <SearchingContext.Provider value={{ searching, setSearching }}>
        {children}
    </SearchingContext.Provider>

}