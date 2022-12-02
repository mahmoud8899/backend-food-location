import { useSelector } from 'react-redux'
import { useEffect, useState, createContext } from 'react'


export const FilterCartDetials = createContext()


export default function FilterRestarangeProduct({ children }) {



    const [locationNotNu, setLocationNotNu] = useState('')
    const [mapsFil, setMapsFil] = useState(null)
    const [idProduct, setIdProduct] = useState('')
    const [filterCartProduct, setFilterCartProduct] = useState([])
    const [loading, setLoading] = useState(false)
    // cart info .... 
    const cart = useSelector((state) => state?.cart)
    const { cartItems } = cart




    useEffect(() => {
        if (cartItems) {

            return setFilterCartProduct(cartItems?.filter((x) => x?.cartinfo?._id?.toString() === locationNotNu?.toString()))

        }

        // eslint-disable-next-line

    }, [locationNotNu, cartItems, setFilterCartProduct])






    useEffect(() => {

        if (idProduct) {
            setLoading(true)

            // testing ...  this is cart after thet filter console.log('run', filterCartProduct)
            setMapsFil(filterCartProduct?.find((x) => x?.product === idProduct))
            setLoading(false)
            return
        }

        return () => {
            setMapsFil(null)
            setLoading(false)

        }


        // eslint-disable-next-line
    }, [filterCartProduct, setMapsFil, idProduct, setLoading])














    return <FilterCartDetials.Provider value={{ filterCartProduct, setLocationNotNu, setIdProduct, mapsFil, loading }}>
        {children}
    </FilterCartDetials.Provider>
}