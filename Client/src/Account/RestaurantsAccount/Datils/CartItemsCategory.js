import { Table } from 'react-bootstrap'
import { MyOderImage } from '../../../Assistant/MyOrderImage'
import ImageScreen from '../../../Components/ImageScreen/ImageScreen'
import { TabScreen, TabScrrenDor } from '../../../Components/TabScreen/TabScreen'
import Styles from '../../../Components/Update/StylesComponents/style'
import RemoveAlrt from '../../../Components/Update/RemoveAlrt/RemoveAlrt'
import { useState } from 'react'
import { DeleteCategoryAction } from '../../../redux/Action/Category_Action'
import { useDispatch } from 'react-redux'
import {BiTrashAlt} from 'react-icons/bi'

export default function CartItemsCategory(props) {
    const { ListCategoryUX, setEditCategory } = props

    const dispatch = useDispatch()
    const [show, setShow] = useState({ value: false, object: '' })

    const HandleRemove = () => {
        //  testing   console.log('remove....', show?.object)
        dispatch(DeleteCategoryAction(show?.object))
        return setShow({ value: false, object: '' })

    }



    return <Table responsive >
        <thead style={Styles.TabBackColor}>
            <tr style={Styles.Tabcolor}>
                <TabScreen TitleTh='number' style={Styles.TabfontText} />
                <TabScreen TitleTh='username' style={Styles.TabfontText} />
                <TabScreen TitleTh='edit' style={Styles.TabfontText} />
                <TabScreen TitleTh='remove' style={Styles.TabfontText} />
            </tr>

        </thead>
        <tbody style={Styles.Tabcolor}  >
            {ListCategoryUX?.length === 0 ? null : ListCategoryUX?.map((category, Index) => (
                <tr style={Styles.Tabcolor} key={Index}>
                    <TabScrrenDor TitleTd={Index + 1} style={Styles.TabfontText} />

                    <TabScrrenDor TitleTd={category?.name} style={Styles.TabfontText} />

                    <TabScrrenDor other={
                        <div className='remove' style={Styles.TabButtomEdit}>
                            <ImageScreen ImageIcon={MyOderImage.edit}
                                style={Styles.TabIconsremov} />
                            <span>Edit</span>

                        </div>
                    }
                        onClick={() => setEditCategory({ value: true, object: category })}
                    />
                    <TabScrrenDor other={
                        <div className='remove' style={Styles.TabButtomRemove}>
                            <BiTrashAlt style={Styles.TabIconsremov} />
                            <span>remove</span>

                        </div>
                    }
                        onClick={() => setShow({ value: true, object: category?._id })}
                    />

                </tr>
            ))}


        </tbody>


        {show?.value &&

            <RemoveAlrt
                show={show}
                setShow={setShow}
                HandleRemove={HandleRemove}
                TextRemove='Ta bort category'
            />
        }

    </Table>





}