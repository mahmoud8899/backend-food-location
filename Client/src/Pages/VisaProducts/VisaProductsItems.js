import ProductsChildrenItems from './ProductsChildrenItems'
import InfiniteScrollData from '../../Components/InfiniteScroll/InfiniteScroll'
import { FatchButik, GetCartInfoHomeRestranges } from '../../redux/Action/CartItemAction'
import { FilterCategory } from '../../Components/Update/UseContext/FilterCategoryScreen'
import { useContext } from 'react'
import { Row } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import './VisaProducts.css'

export default function VisaProductItems(props) {
  // params [1] : home data , [2] :nextNumber : next number with fetch
  const { fetchMore, home, IdMatch, lat, long } = props


  const dispatch = useDispatch()

  // fliter restrest 

  const { addCart } = useContext(FilterCategory)




  // fetch only restrants...
  const fetchData = () => {

    if (fetchMore > Number(1)) {
      // console.log('helllo')

      // console.log(city)
      return dispatch(GetCartInfoHomeRestranges({
        lat: lat,
        long: long,
        productType: "restaurant"
      }))
    }
  }



  // stores....... only fetch data....
  const fetchStores = () => {


    if (fetchMore > Number(1)) {

      return dispatch(FatchButik({
        lat: lat,
        long: long,
        productType: "butiker"
      }))

    }
  }







  // fliter ..... sort.... 
  const Searching = (home) => {

    return home?.filter((item) =>
      addCart?.length >= 1 ? addCart.some((key) => item.foodtype?.foodType?.toLowerCase()?.includes(key))
        : item
    );
  }



  // console.log(IdMatch !== 'restaurants' && IdMatch !== 'butiker')



  // console.log(fetchMore,IdMatch === 'butiker' ? console.log('here') : console.log('not here'))


  return <InfiniteScrollData
    products={home}
    categoryProductsNextPagesxp={fetchMore}
    fetchData={IdMatch === 'butiker' ? fetchStores : fetchData}

  >
    <Row  >
      <ProductsChildrenItems home={Searching(home)} />
    </Row>
  </InfiniteScrollData>






}






