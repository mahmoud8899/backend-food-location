import { Table } from 'react-bootstrap'
import { MyOderImage } from '../../../Assistant/MyOrderImage'
import ImageScreen from '../../../Components/ImageScreen/ImageScreen'
import { TabScreen, TabScrrenDor } from '../../../Components/TabScreen/TabScreen'
import RemoveAlrt from '../../../Components/Update/RemoveAlrt/RemoveAlrt'
import { RemoveProductAction } from '../../../redux/Action/Product_Action'
import InfiniteScrollData from '../../../Components/InfiniteScroll/InfiniteScroll'
import { productpaginationAction } from '../../../redux/Action/Product_Action'
import Styles from '../../../Components/Update/StylesComponents/style'
import { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'
import { BiTrashAlt } from 'react-icons/bi'






export default function CartItemsProducts(props) {

    const {
        categoryProductsNextPagesxp,
        products,
        setShow,
        resturantId
    } = props




    const dispatch = useDispatch()
    //  alrt remove...
    const [alrtRemove, setAlrtRemove] = useState({ value: false, object: '' })
    // remove products...
    const HandleRemove = () => {
        console.log('remove....', alrtRemove?.object)
        dispatch(RemoveProductAction(alrtRemove?.object))
        return setAlrtRemove({ value: false, object: '' })
    }





    // fetch data more...
    const fetchData = () => {
        if(categoryProductsNextPagesxp > Number(1)){

            return dispatch(productpaginationAction(resturantId))
        }
    }


    return <Fragment>


        <InfiniteScrollData
            products={products}
            categoryProductsNextPagesxp={categoryProductsNextPagesxp}
            fetchData={fetchData}
        >

            <Table responsive >
                <thead style={Styles.TabBackColor}>
                    <tr style={Styles.Tabcolor}>
                        <TabScreen TitleTh='number' style={Styles.TabfontText} />
                        <TabScreen TitleTh='username' style={Styles.TabfontText} />
                        <TabScreen TitleTh='image' style={Styles.TabfontText} />
                        <TabScreen TitleTh='prices' style={Styles.TabfontText} />
                        <TabScreen TitleTh='category' style={Styles.TabfontText} />
                        <TabScreen TitleTh='edit' style={Styles.TabfontText} />
                        <TabScreen TitleTh='remove' style={Styles.TabfontText} />

                    </tr>

                </thead>
                <tbody style={Styles.Tabcolor}>
                    {products?.map((product, Index) => (
                        <tr style={Styles.Tabcolor} key={Index}>
                            <TabScrrenDor TitleTd={Index + 1} style={Styles.TabfontText} />
                            <TabScrrenDor TitleTd={product?.name} style={Styles.TabfontText} />
                            <TabScrrenDor other={<ImageScreen ImageIcon={product?.image} style={Styles.Tabimageproduct} />} />
                            <TabScrrenDor TitleTd={`${product?.prices} Kr`} style={Styles.TabfontText} />
                            <TabScrrenDor TitleTd={
                                product?.category?.name ? product?.category?.name : 'add category'
                                
                                } style={Styles.TabfontText} />
                            <TabScrrenDor other={
                                <div className='remove' style={Styles.TabButtomEdit}>
                                    <ImageScreen ImageIcon={MyOderImage.edit} style={Styles.TabIconsremov} />
                                    <span  >Edit</span>

                                </div>
                            }
                             
                            
                                 onClick={() => setShow({ value: true, object: product })}
                            />
                            <TabScrrenDor other={
                                <div className='remove' style={Styles.TabButtomRemove}>
                                     <BiTrashAlt style={Styles.TabIconsremov} />
                                    <span >remove</span>

                                </div>
                            }
                                onClick={() => setAlrtRemove({ value: true, object: product?._id })}
                            />

                        </tr>
                    ))}

                </tbody>





            </Table>

        </InfiniteScrollData>






        {alrtRemove?.value &&
            <RemoveAlrt
                show={alrtRemove}
                setShow={setAlrtRemove}
                TextRemove='ta bort produkt'
                HandleRemove={HandleRemove}
            />
        }
    </Fragment>











}