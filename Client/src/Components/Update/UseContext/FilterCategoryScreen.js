
import { createContext, useState } from 'react'

export const FilterCategory = createContext()

export default function FilterCategoryScreen({ children }) {

  const [addCart, setAddCart] = useState([])

  return <FilterCategory.Provider value={{ addCart, setAddCart }}>
    {children}
  </FilterCategory.Provider>

}