import { Form, Modal, Row, Col } from 'react-bootstrap'
import ButtomClick from '../../../Components/Buttom/Buttom'
import ImageScreen from '../../../Components/ImageScreen/ImageScreen'
import { useDispatch, useSelector } from 'react-redux'
import Styles from '../../../Components/Update/StylesComponents/style'
import PageSwitch from '../../../Components/Update/PageSwitch/PageSwitch'
import { ValtionMe } from '../../../Assistant/ValtionMe'
import CodeError from '../../../Components/CodeError/CodeError'
import { UpdatedCartInfoAction, UpdatedImageAction } from '../../../redux/Action/CartItemAction'
import OppenImage from '../../../Components/Update/OppenImage/OppenImage'
import HandleLoadingPage from '../../../Components/Update/HandleLoadingPage/HandleLoadingPage'
import { ValidationCartInfo, ChangeCode, ValidationCreateCart } from '../../../Assistant/ValidationPayment'
import { TheCartInfo } from '../../../Components/CloseScreen/CloseScreen'
import { ChnageTime } from '../../../Assistant/Selection'
import {ErrorTextInput} from '../../../Assistant/TextError'
import { Fragment, useEffect, useState } from 'react'
import { BiEditAlt } from 'react-icons/bi'
import { HiOutlineX } from 'react-icons/hi'
import CreateFoodType from './CreateFoodType'
import TheInputForm from '../../../Components/TheInputForm/TheInputForm'
import { RiCheckFill } from 'react-icons/ri'

export default function EditCartInfo(props) {

    const { show, setShow, info, userInfo, category } = props

    const dispatch = useDispatch()
    // SHOW IMAGE
    const [showImage, setShowImage] = useState({ value: false, image: '' })
    // successfully updated
    const [updateSuccessFully, setUpdateSuccessFully] = useState(false)
    // Handle error input 
    const [handleError, setHandleError] = useState(false)
    // value updated cart info....
    const [productDetails, setProductDetails] = useState([])
    const [opentime, setOpentime] = useState([])
    const [finishfood, setFinishfood] = useState([])
    const [addressinfo, setAddressinfo] = useState([])
    const [changeImage, setChangeImage] = useState('')
    const [imageSave, setImageSave] = useState('')
    const [foodType, setFoodType] = useState('')
    // create new food type to restrant 
    const [nytt, setNytt] = useState({ value: false, object: '' })
    // console.log(nytt)
    // handle after requirest.... 
    const updatedCartInfo = useSelector((state) => state?.updatedCartInfo)
    const { loading, updated, error } = updatedCartInfo

    useEffect(() => {
        if (show?.value) {

            setAddressinfo({
                address: info?.addressinfo?.address ? info?.addressinfo?.address : '',
                city: info?.addressinfo?.city ? info?.addressinfo?.city : '',
                telefon: info?.addressinfo?.telefon ? info?.addressinfo?.telefon : '',
                website: info?.addressinfo?.website ? info?.addressinfo?.website : ''
            })

            setProductDetails({
                username: info?.username ? info?.username : '',
                restrangeDriver: info?.restrangeDriver ? info?.restrangeDriver : false,
                productType: info?.productType ? info?.productType : '',
                freeDelvery: info?.freeDelvery ? info?.freeDelvery : false,
                description: info?.description ? info?.description : '',
                image: info?.image ? info?.image : ''
            })
            setOpentime({ oppen: info?.opentime?.oppen ? info?.opentime?.oppen : '', close: info?.opentime?.close ? info?.opentime?.close : '' })
            setFinishfood({ to: info?.finishfood?.to ? info?.finishfood?.to : '', end: info?.finishfood?.end ? info?.finishfood?.end : '' })
            setFoodType(info?.foodtype?._id ? info?.foodtype?._id : '')
        } else {
            setAddressinfo({ address: '', city: '', telefon: '', website: '', })
            setProductDetails({ username: '', restrangeDriver: false, productType: '', image: '', freeDelvery: false, description: '', })
            setOpentime({ oppen: '', close: '' })
            setFinishfood({ to: '', end: '' })
            setFoodType('')

        }

    }, [show, info])






    // successfully create and updated cart info....
    // this is singepage after succsfully ....
    useEffect(() => {

        if (updated) {

            return setUpdateSuccessFully(true)
        }

        return () => {
            setUpdateSuccessFully(false)
        }

    }, [updated, error, updateSuccessFully])








    // handle updated cart info.... 
    const HandleForm = (e) => {
        e.preventDefault()
        setHandleError(false)
        if (opentime?.oppen > '00:00'
            && opentime?.close > '00:00'
            && finishfood?.to >= 1
            && finishfood?.end >= 1
            && addressinfo?.address?.length >= Number(3)
            && addressinfo?.city?.length >= Number(3)
            && addressinfo?.telefon?.length >= Number(10)
            && addressinfo?.website?.length >= Number(3)
            && productDetails?.username?.length >= Number(3)
            && productDetails?.productType?.length >= Number(3)
            && productDetails?.description?.length >= Number(3)
            // && foodType >= Number(3)
        ) {


            const dataInfo = {
                _id: info?._id,
                user: userInfo?._id,
                username: ChangeCode(productDetails?.username),
                restrangeDriver: productDetails?.restrangeDriver,
                productType: ChangeCode(productDetails?.productType),
                freeDelvery: productDetails?.freeDelvery,
                description: ChangeCode(productDetails?.description),
                image: productDetails.image,
                addressinfo,
                finishfood,
                opentime: {
                    oppen: ChnageTime(opentime.oppen),
                    close: ChnageTime(opentime.close),
                },
                foodtype: foodType === '' ? category[0]?._id : foodType
            }
            if (info === 'Empty') {

                if (imageSave) {
                    return dispatch(UpdatedImageAction(imageSave, dataInfo, true))
                }

            } else {

                if (imageSave) {
                    return dispatch(UpdatedImageAction(imageSave, dataInfo))
                } else {
                    return dispatch(UpdatedCartInfoAction(dataInfo))

                }
            }

        } else {
            return setHandleError(true)
        }
    }

    // uploading image 
    const HandleIamge = async (e) => {
        e.preventDefault()
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image', file)
        const changeImage = URL.createObjectURL(file)
        setChangeImage(changeImage)
        setImageSave(formData)


    }



    // close 
    const HandleClose = () => {
        setShow({ value: false, updated: false })
        setUpdateSuccessFully(false)
        TheCartInfo(dispatch)
        setImageSave('')
        setChangeImage('')
        setHandleError(false)
        return
    }
    // close error and update and create
    const BackAndRemoveError = () => {
        // setShow({ value: false, updated: false })
        setUpdateSuccessFully(false)
        TheCartInfo(dispatch)
        setImageSave('')
        setChangeImage('')
        setHandleError(false)
        return
    }



    

    // console.log(foodType)

    // value to food type selection
    const SelectValueFunction = (data) => {

        // console.log(data)

        if (data?.toLowerCase() === 'nytt name') return setNytt({ value: true, object: info })
        setFoodType(data)

        // console.log('select', data?._id)

    }



    




    return <Modal show={props?.show?.value} onHide={HandleClose}>

        <HandleLoadingPage
            loading={loading}
            updated={updated}
            error={error}
            updateSuccessFully={updateSuccessFully}
            HandleClose={HandleClose}
            BackAndRemoveError={BackAndRemoveError}
        >




            {nytt?.value ?
                <CreateFoodType nytt={nytt} setNytt={setNytt} />

                :
                showImage?.value ?
                    <OppenImage
                        showImage={showImage}
                        setShowImage={setShowImage}
                    />
                    :

                    <div className='body-category'>

                        <div className='modal-title-edit-category'>
                            <h1> ändring </h1>
                            <HiOutlineX className='close-pp-pp-image' onClick={HandleClose} />

                        </div>

                        {handleError &&
                            <div className='error-input-red' >
                                <CodeError error={ErrorTextInput} />
                            </div>
                        }






                        <div className='form-Scrolling'>

                            <Form onSubmit={HandleForm} className='form-padding'>

                                <span className='selection-name'>Namnet på restaurangen eller butiken</span>
                                <TheInputForm
                                    placeholder='Namnet på restaurangen eller butiken'
                                    onChange={(e) => setProductDetails({ ...productDetails, username: e.target.value })}
                                    value={productDetails?.username}
                                    type='text'

                                    FirstIcons={
                                        <Fragment>

                                            {ValtionMe(productDetails?.username, 'inputname')
                                                ? <RiCheckFill className='Icons-LEFT-right' /> : null
                                            }
                                        </Fragment>
                                    }
                                    className='Input-type-style productdetials'

                                />



                                <span className='selection-name'>Description</span>
                                <TheInputForm
                                    placeholder='Description'
                                    as='textarea'
                                    type='text'
                                    onChange={(e) => setProductDetails({ ...productDetails, description: e.target.value })}
                                    value={productDetails.description}
                                    FirstIcons={
                                        <Fragment>

                                            {ValtionMe(productDetails.description, 'inputname')
                                                ? <RiCheckFill className='Icons-LEFT-right' /> : null
                                            }
                                        </Fragment>
                                    }
                                    className='Input-type-style productdetials hegith'

                                />




                                <Row className='justify-content-center'>
                                    <Col xs={6} sm={6} md={6} lg={6}>

                                        <span className='selection-name'>öppnings tid - - {opentime?.oppen}</span>
                                        <TheInputForm
                                            placeholder='öppnings tid'
                                            name="image"
                                            className='Input-type-style productdetials'
                                            type='time'
                                            onChange={(e) => setOpentime({ ...opentime, oppen: e.target.value })}
                                            
                                            // value={opentime?.oppen?.length === Number(5) && opentime?.oppen}
                                            // FirstIcons={
                                            //     <Fragment>

                                            //         {ValtionMe(opentime.oppen, 'inputname')
                                            //             ? <RiCheckFill className='Icons-LEFT-right' /> : null
                                            //         }
                                            //     </Fragment>
                                            // }


                                        />

                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6}>
                                        <span className='selection-name'>stängningstid - {opentime?.close}</span>
                                        <TheInputForm
                                            placeholder='stängningstid'
                                            name="image"
                                            type='time'
                                            title='stängningstid'
                                            className='Input-type-style productdetials'
                                            onChange={(e) => setOpentime({ ...opentime, close: e.target.value })}
                                            // value={opentime?.close?.length === Number(5) && opentime?.close }
                                           
                                            // FirstIcons={
                                            //     <Fragment>

                                            //         {ValtionMe(opentime.close, 'inputname')
                                            //             ? <RiCheckFill className='Icons-LEFT-right' /> : null
                                            //         }
                                            //     </Fragment>
                                            // }


                                        />



                                    </Col>
                                </Row>



                                <Row className='justify-content-center'>
                                    <Col xs={6} sm={6} md={6} lg={6}>
                                        <span className='selection-name'>Matlagningstid</span>
                                        <TheInputForm
                                            placeholder='från'
                                            className='Input-type-style productdetials'
                                            onChange={(e) => setFinishfood({ ...finishfood, to: e.target.value })}
                                            value={finishfood.to}
                                            type='number'
                                            FirstIcons={
                                                <Fragment>

                                                    {ValtionMe(finishfood.to, 'TheTime')
                                                        ? <RiCheckFill className='Icons-LEFT-right' /> : null
                                                    }
                                                </Fragment>
                                            }


                                        />



                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6}>
                                        <span className='selection-name'>till</span>
                                        <TheInputForm

                                            placeholder='till'
                                            className='Input-type-style productdetials'
                                            onChange={(e) => setFinishfood({ ...finishfood, end: e.target.value })}
                                            value={finishfood.end}
                                            type='number'
                                            FirstIcons={
                                                <Fragment>

                                                    {ValtionMe(finishfood.end, 'TheTime')
                                                        ? <RiCheckFill className='Icons-LEFT-right' /> : null
                                                    }
                                                </Fragment>
                                            }


                                        />


                                    </Col>
                                </Row>

                                <div className='selection-name extrastyle'>

                                    <BiEditAlt className='icons-class' />
                                    <span className='selection-name'>din plats adress</span>

                                </div>
                                <Row className='justify-content-center'>
                                    <Col xs={6} sm={6} md={6} lg={6}>
                                        <span className='selection-name'>Address</span>
                                        <TheInputForm
                                            placeholder='Address'
                                            className='Input-type-style productdetials'
                                            title='Address'
                                            value={addressinfo?.address}
                                            onChange={(e) => setAddressinfo({ ...addressinfo, address: e.target.value?.toLowerCase() })}
                                            type='text'
                                            FirstIcons={
                                                <Fragment>

                                                    {ValtionMe(addressinfo?.address, 'inputname')
                                                        ? <RiCheckFill className='Icons-LEFT-right' /> : null
                                                    }
                                                </Fragment>
                                            }


                                        />



                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6}>
                                        <span className='selection-name'>Stad</span>
                                        <TheInputForm
                                            placeholder='Stad'
                                            className='Input-type-style productdetials'
                                            value={addressinfo?.city}
                                            onChange={(e) => setAddressinfo({ ...addressinfo, city: e.target.value?.toLowerCase() })}
                                            type='text'
                                            FirstIcons={
                                                <Fragment>

                                                    {ValtionMe(addressinfo?.city, 'inputname')
                                                        ? <RiCheckFill className='Icons-LEFT-right' /> : null
                                                    }
                                                </Fragment>
                                            }


                                        />



                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6}>
                                        <span className='selection-name'>Telefonnummber</span>
                                        <TheInputForm
                                            placeholder='Telefonnummber'
                                            className='Input-type-style productdetials'
                                            type='number'
                                            value={addressinfo?.telefon}
                                            onChange={(e) => setAddressinfo({ ...addressinfo, telefon: e.target.value?.toLowerCase() })}
                                            FirstIcons={
                                                <Fragment>

                                                    {ValtionMe(addressinfo?.telefon, 'isPhone')
                                                        ? <RiCheckFill className='Icons-LEFT-right' /> : null
                                                    }
                                                </Fragment>
                                            }


                                        />



                                    </Col>
                                    <Col xs={6} sm={6} md={6} lg={6}>
                                        <span className='selection-name'>Website</span>
                                        <TheInputForm
                                            placeholder='Website'
                                            className='Input-type-style productdetials'
                                            value={addressinfo?.website}
                                            onChange={(e) => setAddressinfo({ ...addressinfo, website: e.target.value?.toLowerCase() })}
                                            FirstIcons={
                                                <Fragment>

                                                    {ValtionMe(addressinfo?.website, 'inputname')
                                                        ? <RiCheckFill className='Icons-LEFT-right' /> : null
                                                    }
                                                </Fragment>
                                            }


                                        />


                                    </Col>
                                </Row>

                                <div className='selection-name'>food type</div>
                                <Form.Control
                                    as='select'
                                    style={Styles.input_selector_user}
                                    onChange={(e) => SelectValueFunction(e.target.value)}
                                    value={foodType}
                                >

                                    {category?.length > Number(0) ? category?.map((data, Index) => (
                                        <option
                                            value={data._id}
                                            key={Index}>
                                            {data.foodType}
                                        </option>
                                    )) : <option > value</option>}

                                    <option value='Nytt name' > Nytt name</option>

                                </Form.Control>




                                <div className='selection-name'>Produkttyp</div>
                                <div className='flex-switch'>

                                    <PageSwitch
                                        onClick={() => setProductDetails({
                                            ...productDetails, productType: 'restaurant'
                                        })}
                                        TextInput='restaurant'
                                        OtherInput={productDetails?.productType === 'restaurant'}
                                    />
                                    <PageSwitch
                                        onClick={() => setProductDetails({
                                            ...productDetails, productType: 'butiker'
                                        })}
                                        TextInput='butiker'
                                        OtherInput={productDetails?.productType === 'butiker'}
                                    />


                                </div>



                                <div className='edit-product-image-div'>

                                    <TheInputForm
                                        placeholder='image'
                                        title='ladda upp bild'
                                        type="file"
                                        onChange={HandleIamge}
                                        name="image"
                                    />


                                    
                                    <ImageScreen
                                        ImageIcon={changeImage ? changeImage : productDetails?.image ? productDetails?.image : null}
                                        className='image-xo'
                                        onClick={() => setShowImage({ value: true, image: changeImage ? changeImage : productDetails?.image })}
                                    />
                                </div>
                                <PageSwitch
                                    onClick={() => setProductDetails({
                                        ...productDetails, freeDelvery: productDetails?.freeDelvery ? false : true

                                    })}
                                    TextInput='fri leverans'
                                    OtherInput={productDetails?.freeDelvery}
                                />



                                <PageSwitch
                                    onClick={() => setProductDetails({
                                        ...productDetails, restrangeDriver: productDetails?.restrangeDriver ? false : true
                                    })}
                                    TextInput='Vill du ha chauffören till restaurangen eller butiken'
                                    OtherInput={productDetails?.restrangeDriver}
                                />





                                <div className='Buttom-class'>
                                    <ButtomClick
                                        style={Styles.TabButtomCreate}
                                        title='ändring'
                                        onClick={HandleForm}
                                        disabled={
                                            info === 'Empty' ?
                                                ValidationCreateCart(productDetails, opentime, addressinfo, finishfood, changeImage, foodType) !== true
                                                :
                                                ValidationCartInfo(productDetails, info, opentime, addressinfo, finishfood, changeImage, foodType) === true
                                        }
                                    />
                                </div>
                            </Form>
                        </div>



                    </div>
            }












        </HandleLoadingPage>





    </Modal >


}

