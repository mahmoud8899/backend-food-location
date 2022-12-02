import { Modal } from 'react-bootstrap'
import './NavBarCity.css'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import NotUserSerchingCity from './NotUserSerchingCity'
import ActiveUserSearchCity from './ActiveUserSearchCity'
import { HiOutlineX, HiArrowNarrowLeft } from 'react-icons/hi'



export default function LoactionCity(props) {

    const { showCity, setShowCity } = props
    const theUserCheckIn = useSelector((state) => state?.userLogin?.userInfo)
    const [openAddres, setOpenAddres] = useState({ value: false, object: '' })
    const [openSelectionCity, setOpenSelectionCity] = useState(false)





    // open address.... 
    const [nextStep, setNextStep] = useState(false)
    const HandleOpenAdddress = (e) => {
        e.preventDefault()


        if (nextStep) {

            return setNextStep(false)

        } else if (!openAddres.value) {
            // console.log(openAddres)
            setOpenAddres({ value: true, object: '' })
            return
        } else {
            setOpenAddres({ value: false, object: '' })
        }



    }


    // selection city 
    const HandleCity = (e) => {
        e.preventDefault()
        setOpenSelectionCity(!openSelectionCity)
    }





    // close all
    function TheCloseAll() {
        setShowCity(false)
        setNextStep(false)
        setOpenAddres(false)
        setOpenSelectionCity(false)
    }





    return <Modal show={showCity} onHide={TheCloseAll}>
        <div className='first-city-location add-padding-loaction'>
            <div>
                {openAddres.value || openSelectionCity ?
                    <HiArrowNarrowLeft
                        className='close-pp-pp-image'
                        onClick={(e) => openAddres.value ? HandleOpenAdddress(e) : HandleCity(e)}
                    />
                    : null

                }

            </div>
            <div className='font-edit'>
            Redigera adressuppgifter
            </div>
            <HiOutlineX className='close-pp-pp-image' onClick={TheCloseAll} />

        </div>

        <div className='loaction-bottom'></div>

        {theUserCheckIn?.firstname ?

            // option if user login 
            <ActiveUserSearchCity
                openAddres={openAddres}
                setOpenAddres={setOpenAddres}
                openSelectionCity={openSelectionCity}
                setOpenSelectionCity={setOpenSelectionCity}
                theUserCheckIn={theUserCheckIn}
                HandleOpenAdddress={HandleOpenAdddress}
                HandleCity={HandleCity}
                setShowCity={setShowCity}
                showCity={showCity}
                nextStep={nextStep}
                setNextStep={setNextStep}

            />

            :
            // option if NOT  login 

            <NotUserSerchingCity />

        }








    </Modal>
}