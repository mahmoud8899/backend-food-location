import { useEffect } from 'react'
import CartItemsScreen from '../CartItemsScreen/CartItemsScreen'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { SearchingProductsAction } from '../../redux/Action/SearchingProduct'
import LoadingErrorHandle from '../../Components/Update/LoadingErrorHandle/LoadingErrorHandle'
import { SearchingRestrant } from '../../Assistant/TextError'
import Title from '../../Components/ScreenTitle/ScreenTitle'
import { Fragment } from 'react'
import { useState } from 'react'
export default function SearchingPage({ history }) {



    const TheSlice = history?.location?.search.slice(1)



    const dispatch = useDispatch()


    // searching product event from Server...
    const ProductsSearching = useSelector((state) => state?.ProductsSearching)
    const { searchingHome, loading } = ProductsSearching
    const [dataLocation, setDataLocation] = useState({
        lat: Number(59.858131),
        long: Number(17.644621)
    })



 

    useEffect(() => {
        if (TheSlice) {
            searchingHome?.length === Number(0) && dispatch(SearchingProductsAction(dataLocation, TheSlice, true))
        }
        return () => setDataLocation([])
   // eslint-disable-next-line
    }, [dispatch,TheSlice, searchingHome?.length,setDataLocation])







    return <Fragment>

        <Title TextTitle={TheSlice} />

        <LoadingErrorHandle loading={loading} type={SearchingRestrant}>
            <Container>

                <Row className='justify-content-center'>
                    <Col xs={12} sm={12} md={12} lg={12} >

                        <div className='result-data'>
                            <h1 className='Visa-alla-title color-color-all'>Search results</h1>
                        </div>

                    </Col>
                    {searchingHome?.map((produx, Index) => (
                        <Col xs={6} sm={6} md={searchingHome?.length === 2 ? 6 : 4} lg={4} key={Index}>
                            <CartItemsScreen item={produx} />
                        </Col>
                    ))}

                </Row>
            </Container>
        </LoadingErrorHandle>

    </Fragment>

}


