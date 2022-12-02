import { SearchingHomeDatilas } from '../UseContext/SearchingHome'
import { Fragment, useContext } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import LoadingErrorHandle from '../LoadingErrorHandle/LoadingErrorHandle'
import { ErrorServer ,LoadingSkeletonFilterHome} from '../../../Assistant/TextError'
import Items from './Items'
import '../../../Pages/Home/Home.css'
// import SkeletonLoading from '../SkeletonLoading/SkeletonLoading'
// import { useState } from 'react'
// import { SearchingProductsAction } from '../../../redux/Action/SearchingProduct'
export default function SearchingResultHome(props) {


    // const history = useHistory()



    //filter params id city....
    // const LastLength = history?.location?.pathname?.length
    // const city = history?.location?.pathname?.slice(1, LastLength - 1)
    // input searching....
    const { inputSearching, setInputSearching ,products } = useContext(SearchingHomeDatilas)

    // import { useContext } from 'react'









    // searching product
    const ProductsSearching = useSelector((state) => state?.ProductsSearching)
    const { loading, error, searchingLength } = ProductsSearching








    return inputSearching?.length > Number(1) && <div className='flex-ddd' onClick={() => setInputSearching('')}>
        <div className='result-col'>

            <LoadingErrorHandle loading={loading} error={error} TextNotItems={ErrorServer} type={LoadingSkeletonFilterHome} >
                {products?.length > Number(0) ?
                    <Fragment>
                        <Items home={products} />
                        <Link className='empty-hitta add-color'
                            to={{
                                pathname: `/sw/filter/result/search=`,
                                search: `${inputSearching}`,
                                state: { fromDashboard: true }

                            }} >
                            <span className='Visa-alla-title color-color-all'>
                                Visa alla {searchingLength} träffar
                            </span>
                        </Link>

                    </Fragment>

                    :

                    <div className='empty-hitta'   >
                        <span>
                            Inget hittades. Vänligen försök på nytt. 😕
                        </span>
                    </div>
                }

            </LoadingErrorHandle>
        </div>

    </div>



}



    // {/* <Col xs={12} md={12} md={6} xl={6} className='postion-abs'>
    // </Col> */}
    // inputSearching?.length > Number(1) &&
    // // get all restrange and stores....
    // const PageHomeRestrange = useSelector((state) => state?.PageHomeRestrange)
    // const { loading, home, error, nextNumber } = PageHomeRestrange
    // // get restrants cart....
    // useEffect(() => {
    //     inputSearching?.length > Number(1)

    //     && home?.length === Number(0) && dispatch(GetCartInfoHomeRestranges({
    //         city: city,
    //         productType: "restaurant"
    //     }))
    //     // eslint-disable-next-line
    // }, [home, city, dispatch,inputSearching])
    // // fetch more data....
    // const fetchData = () => alert('ddd')
    // const keys = ["username", "description"];
    // const search = (data) => {
    //     return data?.filter((item) =>
    //         keys?.some((key) => item[key]?.toLowerCase()?.includes(inputSearching))
    //     )
    // };