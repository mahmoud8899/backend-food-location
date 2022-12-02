import { Table } from 'react-bootstrap'
import { TabScreen, TabScrrenDor } from '../../../Components/TabScreen/TabScreen'
import ImageScreen from '../../../Components/ImageScreen/ImageScreen'
import { MyOderImage } from '../../../Assistant/MyOrderImage'
import { SliceName } from '../../../Assistant/Slice'
import Styles from '../../../Components/Update/StylesComponents/style'

export default function CartItemsInfo(props) {

    const { info, setShow } = props





    return <Table responsive >
        <thead style={Styles.TabBackColor} >
            <tr style={Styles.Tabcolor} >
                <TabScreen TitleTh='username' style={Styles.TabfontText} />
                <TabScreen TitleTh='image' style={Styles.TabfontText} />
                <TabScreen TitleTh='opentime' style={Styles.TabfontText} />
                <TabScreen TitleTh='address' style={Styles.TabfontText} />
                <TabScreen TitleTh='description' style={Styles.TabfontText} />
                <TabScreen TitleTh='finishfood' style={Styles.TabfontText} />
                <TabScreen TitleTh='productType' style={Styles.TabfontText} />
                <TabScreen TitleTh='comment' style={Styles.TabfontText} />
                <TabScreen TitleTh='food type' style={Styles.TabfontText} />
                <TabScreen TitleTh='free delivery' style={Styles.TabfontText} />
                <TabScreen TitleTh='restaurant driver' style={Styles.TabfontText} />
                <TabScreen TitleTh='edit' style={Styles.TabfontText} />


            </tr>

        </thead>
        <tbody style={Styles.Tabcolor}>


            <tr style={Styles.Tabcolor} onClick={(e) => setShow({ value: true, updated: true })} >
                <TabScrrenDor TitleTd={info?.username} style={Styles.TabfontText} />
                <TabScrrenDor other={
                    info?.image ?
                        <ImageScreen
                            ImageIcon={info?.image}
                            style={Styles.Tabimageproduct}
                        />
                        : <span>add image</span>


                } />

                <TabScrrenDor
                    TitleTd={`${info?.opentime?.oppen} -${info?.opentime?.close}`}
                    style={Styles.TabfontText} />
                <TabScrrenDor
                    other={<div className='class-sw'>
                        <span>{info?.addressinfo?.city}</span>
                        <span>{info?.addressinfo?.address}</span>
                        <span>{info?.addressinfo?.telefon}</span>
                        <span>{info?.addressinfo?.website}</span>

                    </div>}

                />
                <TabScrrenDor other={
                    <div className='class-sw'>
                        <span> {SliceName(info?.description, 50)}</span>
                    </div>
                } />
                <TabScrrenDor
                    TitleTd={`${info?.finishfood?.to}-${info?.finishfood?.end}`}

                    style={Styles.TabfontText} />
                <TabScrrenDor TitleTd={info?.productType} style={Styles.TabfontText} />
                <TabScrrenDor
                    TitleTd={info?.numReviews?.toString()}
                    style={Styles.TabfontText}
                />
                  <TabScrrenDor TitleTd={info?.foodtype?.foodType ?info?.foodtype?.foodType: 'lägg till mattyp'} style={Styles.TabfontText} />
                <TabScrrenDor
                    TitleTd={info?.freeDelvery === true ? 'yes' : 'no'}
                    style={Styles.TabfontText}
                />
                <TabScrrenDor
                    TitleTd={info?.restrangeDriver === true ? 'yes' : 'no'}
                    style={Styles.TabfontText}
                />



                <TabScrrenDor other={
                    <div className='remove' style={Styles.TabButtomEdit}>
                        <ImageScreen ImageIcon={MyOderImage.edit} style={Styles.TabIconsremov} />
                        <span>Ändra</span>

                    </div>
                }

                />


            </tr>





        </tbody>

    </Table>
}




    // "finishfood": {
    //     "to": 10,
    //     "end": 30
    // },

    // addressinfo: {city: 'uppsala', address: 'loget opc 20B', telefon: 7208939485, website: 'https://wolt.com/en/'}
    // comment: []
    // createdAt: "2022-02-16T15:58:08.189Z"
    // description: "Here you will find a range of ways to cook, bake and have fun making some lovely food. It is important to have fun and learn some wonderful new skills"
    // finishfood: {to: 10, end: 30}
    // firDlevery: false
    // foodType: "620d1cbcf27fed13d4eb62fc"
    // image: "https://bbqlovers.se/wp-content/uploads/2017/04/13-470x313.jpg"
    // numReviews: 0
    // opentime: {oppen: '11:00', close: '23:00'}
    // productType: "restaurant"
    // rating: 0
    // restrangeDriver: false
    // updatedAt: "2022-02-16T15:58:08.189Z"
    // user: "620a34b2b1d6e603a7096cbb"
    // username: "new testing"
    // __v: 0
    // _id: "620d1f1084f54514ebb4dac8"


