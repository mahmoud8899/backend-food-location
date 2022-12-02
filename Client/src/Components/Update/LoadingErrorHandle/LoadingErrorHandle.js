import CodeError from '../../CodeError/CodeError'
import LoadingScreen from '../../LoadingScreen/LoadingScreen'
import SkeletonLoading from '../SkeletonLoading/SkeletonLoading'




export default function LoadingErrorHandle(props) {

    const { children, loading, error, TextNotItems, extraStyle, type } = props






    return loading ?
        <div className={type && extraStyle ? '' : ''}>

            {type ? <SkeletonLoading type={type} /> : <LoadingScreen />}

        </div>
        :
        error ?
            <div className={error && extraStyle ? 'Dev-Error extraStyle' : 'Dev-Error-Error'}>
                <CodeError error={TextNotItems} />
            </div>
            :

            children

}


