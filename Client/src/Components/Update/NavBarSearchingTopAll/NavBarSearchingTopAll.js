import Styles from '../StylesComponents/style'
import NavBarList from './NavBarList'
import { BiSearch } from 'react-icons/bi'
import TheInputForm from '../../TheInputForm/TheInputForm'
import { Fragment } from 'react'
import { HiOutlineX } from 'react-icons/hi'



export default function NavBarSearchingTopAll(props) {
    // params
    const {
        onClick,
        setQuery,
        query,
        Icons,
        TextIcons,
        IconStyle,
        Placeholder
    } = props



    return <NavBarList
        onClick={onClick ? onClick : null}
        Other={
            <div className='Order-List-New-other'>
                <div style={IconStyle && Styles.NavBarSearchingColor} >
                    {Icons && <Icons style={Styles.TabBoximage} />}
                    <span className='font-all font-all-all-edit'>{TextIcons}</span>
                </div>
            </div>


        }
        OtherLast={
            <div className='Order-List-New-other'>
                <TheInputForm
                    placeholder={Placeholder ? Placeholder : 'Sök'}
                    onChange={(e) => setQuery(e.target.value.toLowerCase().trim())}
                    style={Styles.NavBarSearchingColorInput}
                    value={query}
                    FirstIcons={
                        <Fragment>
                            <BiSearch className='Icons-LEFT' />
                            {
                                query?.length > Number(1) && <HiOutlineX
                                    className='close-pp-pp-image ADD-REMOVE'
                                    onClick={() => setQuery('')}
                                />
                            }
                        </Fragment>
                    }

                    className='Input-type-style productdetials text-searching'
                />
            </div>

        }
    />

}