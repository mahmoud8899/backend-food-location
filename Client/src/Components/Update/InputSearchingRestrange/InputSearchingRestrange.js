import { Fragment, useContext } from 'react'
import { SearchingContext } from '../UseContext/SearchingResult'
import { BiSearch } from 'react-icons/bi'
import { HiOutlineX } from 'react-icons/hi'
import TheInputForm from '../../TheInputForm/TheInputForm'


export default function InputSearchingRestrange(props) {




    // singe Page Searching with products......
    const { searching, setSearching } = useContext(SearchingContext)



    // tesing... console.log(searching)

    return <div className='searching-rest'>

        <div className='Searching-Products'>

            <TheInputForm
                placeholder='Söker efter Produkter...'
                onChange={(e) => setSearching(e.target.value?.toLowerCase())}
                value={searching}
                FirstIcons={
                    <Fragment>
                        <BiSearch className='Icons-LEFT' />
                        {
                            searching?.length > Number(1) && <HiOutlineX
                                className='close-pp-pp-image ADD-REMOVE'
                                onClick={() => setSearching('')}
                            />
                        }
                    </Fragment>
                }

                className='Input-type-style productdetials text-searching'
            />








        </div>
    </div>

}



// <FormControl
// className='with-input'

// style={Styles.NavBarSearchingColorInput}
// />

// <BiSearch
// style={Styles.searchingcolor}
// className='Searching-input'
// />
// {searching?.length >= 1 && <HiOutlineX
// className='close-pp-pp-image ADD-REMOVE'
// onClick={() => setSearching('')}
// />}