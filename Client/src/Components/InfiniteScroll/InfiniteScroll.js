import Styles from '../Update/StylesComponents/style'
import InfiniteScroll from 'react-infinite-scroll-component'
import SkeletonLoading from '../Update/SkeletonLoading/SkeletonLoading'





export default function InfiniteScrollData(props) {
    const { products, categoryProductsNextPagesxp, fetchData, children ,TypeSkeleton} = props






    return <InfiniteScroll
        style={Styles.hidden}
        className='fex-style-more'
        dataLength={products.length}
        next={fetchData}
        hasMore={categoryProductsNextPagesxp !== null ? 'false' : 'true'}
        loader={categoryProductsNextPagesxp !== null ?
            <div className='center-loading'>
                <SkeletonLoading type={TypeSkeleton ? TypeSkeleton : 'fetchMore'} />
            </div>
            : null}
        endMessage={<p ><b>Yay! You have seen it all</b> </p>}

    >

        {children}


    </InfiniteScroll>

}