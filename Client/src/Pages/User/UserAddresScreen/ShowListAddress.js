import { WhichWork } from '../../../Assistant/Selection'
import EditComponent from '../../../Components/Update/EditComponent/EditComponent'
import { RemoveAddressAction, RemoveOneAddress } from '../../../redux/Action/Auth_Action'
import LoadingErrorHandle from '../../../Components/Update/LoadingErrorHandle/LoadingErrorHandle'
import { useDispatch } from 'react-redux'
import RemoveAlrt from '../../../Components/Update/RemoveAlrt/RemoveAlrt'
import '../UserProfileScreen/Profile.css'
import { useState } from 'react'
import { BiCheck } from 'react-icons/bi'
import { Fragment } from 'react'


// show user addrsss and remove addresss
export default function ShowListAddress(props) {
    // params userinfo and  change style 
    const { locateAddress, setOpenAddres, StyleHome, ViljaAddress, StyleLastPadding, StopCity } = props

    // ClassNamepAY


    const dispatch = useDispatch()
    // open nav bar updated or remove
    const [optionMore, setOptionMore] = useState(false)
    // oppen one page when click buttom remove and updated...
    const [dataSome, setDataSome] = useState(null)




    // open add address.
    const OpenEditAddress = (data) => {

        // console.log('testing', data)
        setOpenAddres({ value: true, object: data })
        setOptionMore(false)
    }













    // remove all address 
    // remove one address 
    // edit address 
    // create new addres 


    // remove all address..
    // oppen remove all address 
    const [show, setShow] = useState({ value: false, object: '' })
    const HandleRemove = () => {

        dispatch(RemoveAddressAction())

        setShow({ value: false })
    }


    // edit///
    //StyleHome ? 'className-infoUser add-style-remove-padding' :
    return <LoadingErrorHandle loading={locateAddress.loading}>

        <div className={StyleLastPadding ? 'ClassLast-fex' : 'className-infoUser'}>

            {StopCity ? null  : locateAddress?.myAddressLocal?.length > Number(1) &&
                <div className='remove-all-address' onClick={(e) => setShow({ value: true })}>
                    <span>😢</span>
                    <span>
                        Radera alla adresser
                    </span>
                </div>
                

            }



            <div className={StyleLastPadding ? 'show-fex' : 'show-sort-address'}>
                {locateAddress?.myAddressLocal?.map((showadd) => (
                    <div className='first-left-box' key={showadd?.address} onClick={() => setDataSome(showadd?.address)} >
                        {StopCity && !showadd?.doornumber ? null :
                            <Fragment>
                                <div className={showadd.firstAddress ? 'box-infoUser color-avtive' : 'box-infoUser'}>

                                    <span className={showadd.firstAddress ? 'font-size-work color-avtive' : 'font-size-work icons-icons'}  >
                                        {WhichWork(showadd.work)}
                                    </span>


                                    <span className='font-size-work' >
                                        {showadd?.work}
                                    </span>
                                </div>


                                <div className='address-list-edit' >

                                    <div className={showadd.firstAddress ? 'address-list-edit-children color-avtive' :
                                        'address-list-edit-children'}>
                                        <span >
                                            {showadd.address} {showadd.doornumber}
                                        </span>
                                        <span>
                                            {showadd?.zipcode} {showadd?.city}
                                        </span>
                                    </div>

                                    <div className='margin-left-class'>
                                        {StyleHome || StyleLastPadding ?
                                            !showadd.firstAddress ?
                                                <div className='valje' onClick={(e) => ViljaAddress(showadd)}>
                                                    <span>Välj</span>
                                                </div>
                                                :
                                                <div className='checkout-address' >
                                                    <BiCheck className='checkout-address-children' />
                                                </div>

                                            :
                                            <EditComponent
                                                address={showadd.address}
                                                dataSome={dataSome}
                                                setOptionMore={setOptionMore}
                                                optionMore={optionMore}
                                                OpenEditAddress={(e) => OpenEditAddress(showadd)}
                                                NoRemove={(e) => dispatch(RemoveOneAddress(showadd?.address))}
                                            />
                                        }


                                    </div>
                                </div>

                            </Fragment>

                        }


                    </div>
                ))}

            </div>
        </div>




        {show.value &&
            <RemoveAlrt
                show={show}
                setShow={setShow}
                HandleRemove={HandleRemove}
            />
        }


    </LoadingErrorHandle>



}


