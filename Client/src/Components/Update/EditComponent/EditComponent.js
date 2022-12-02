import { BiDotsHorizontalRounded } from 'react-icons/bi'




export default function EditComponent(props) {


    const {
        setOptionMore,
        optionMore,
        OpenEditAddress,
        ENoption,
        NoRemove,
        address,
        dataSome
    } = props








    return <div className='Remove-div-all'>
        <div className='routx-'
            onClick={(e) => setOptionMore(!optionMore)}

        >
            <BiDotsHorizontalRounded />
        </div>

        {dataSome === address &&
            <div className={optionMore ? 'class-edit-postion hidden' : 'class-edit-postion'}>
                <div className='flex-ddd'>
                </div>
                <span onClick={NoRemove}>ta bort</span>
                {ENoption ? null : <span onClick={OpenEditAddress}>uppdatering</span>}

            </div>

        }


    </div>
}


