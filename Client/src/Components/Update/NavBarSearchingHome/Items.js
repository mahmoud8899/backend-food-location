import { MdDirectionsBike } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { SliceName } from '../../../Assistant/Slice'
import ImageScreen from '../../ImageScreen/ImageScreen'
import Rating from '../../Rating/Rating'
import { Conversion } from '../Conversion/Conversion'
// import InfiniteScrollData from '../../../Account/RestaurantsAccount/Datils/InfiniteScrollData'


export default function Items(props) {
    const { home } = props





    //   const fetchData = () => console.log('fetch data....')




    return home?.map((rest, Index) => (

        <Link className='searching-result' key={Index} to={{ pathname: Conversion(rest) }} >
            <ImageScreen
                ImageIcon={rest?.image}
                className='result-image'
            />
            <div className='rigth-result'>
                <span className='font-name-size font-all-all-edit add-color-cart'>{rest?.username}</span>
                <span className='font-name-size-line'>{SliceName(rest?.description, 20)}</span>
                <div className='Driver-pri'>
                    {rest?.freeDelvery ?
                        <span>Fri Leverans</span>
                        :
                        <div className='pries-div'>
                            <MdDirectionsBike className='font-icons' />
                            <span> 29,00 kr</span>
                        </div>
                    }
                    <span className='left-rating'><Rating value={rest?.rating} text={`${rest?.numReviews}`} /></span>

                </div>
            </div>




        </Link>

    ))



}