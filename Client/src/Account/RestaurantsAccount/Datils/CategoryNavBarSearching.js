import { FormControl } from 'react-bootstrap'
import Styles from '../../../Components/Update/StylesComponents/style'
import NavBarList from './NavBarList'
import {BiCloudUpload,BiSearch} from 'react-icons/bi' 



export default function CategoryNavBarSearching(props) {
    const {
        setEditCategory,
        setQuery
    } = props



    return <NavBarList
      
        Other={
            <div className='Order-List-New-other'>
                <div style={Styles.NavBarSearchingColor} className='AddClass-c'>
                    <BiCloudUpload
                        
                        style={Styles.TabBoximage}
                    />
                    <span className='font-all'>Create Category</span>
                </div>


            </div>


        }
        OtherLast={
            <div className='Order-List-New-other'>
                <FormControl
                    className='with-input'
                    placeholder='Searching category...'
                    onChange={(e) => setQuery(e.target.value)}
                    style={Styles.NavBarSearchingColorInput}
                />

                <BiSearch
                  style={Styles.searchingcolor}
                    className='Searching-input'
                />
            </div>

        }
    />
}