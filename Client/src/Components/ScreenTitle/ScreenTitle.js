import { Helmet } from 'react-helmet'




const Title = ({ TextTitle, description }) => {



    return <Helmet>
        <title name="title">{TextTitle}</title>
        <meta name="description" content={description} />
    </Helmet>
}


Title.defaultProps = {
    title: 'Welcom To Shipping',
    description: 'Buy ....'
}

export default Title