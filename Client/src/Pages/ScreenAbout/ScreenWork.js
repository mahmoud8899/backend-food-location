import { Container, Row, Col } from 'react-bootstrap'
import Title from '../../Components/ScreenTitle/ScreenTitle'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { workAction } from '../../redux/Action/Work_action'
import PageEmpty from '../../Components/PageEmpty/PageEmpty'
import LoadingErrorHandle from '../../Components/Update/LoadingErrorHandle/LoadingErrorHandle'
import { ErrorServer } from '../../Assistant/TextError'
import { format } from 'timeago.js'
import Styles from './style'
const ScreenWork = () => {




    const [lookLikeId, setLookLikeId] = useState(null)

    const dispatch = useDispatch()

    const allwork = useSelector((state) => state.allwork)
    const { loading, work, error } = allwork



    useEffect(() => {
        return work === null && dispatch(workAction())

    }, [dispatch, work])



    const OpenNavBar = (e, id) => {
        e.preventDefault()

        setLookLikeId(id)
    }




    return <Container  >
        <Title TextTitle='Job Search' />

        <LoadingErrorHandle loading={loading} error={error} TextNotItems={ErrorServer}>
            <Row className='justify-content-center'>
                <Col sm={12} xs={12} md={12} lg={12} >
                    <div style={Styles.row}>



                        <div style={Styles.test} >
                            <div className="HoME_link_Home" >

                                <span style={Styles.logText}>  Job</span>
                                <span style={Styles.First_NavBarList_writ_name_lastName} >search</span>


                            </div>
                        </div>
                    </div>



                    <div>
                        {work?.length > 0 ? work?.map((work, index) => (
                            <div key={work._id} style={Styles.firstbox} >
                                <span style={Styles.color}>{index}</span>
                                <div style={Styles.Tilte} onClick={(e) => OpenNavBar(e, work._id)}>
                                    <h1 style={Styles.font}>{work.name}</h1>
                                    <span>{format(work.lasttime)}</span>
                                </div>
                                {lookLikeId === work._id ?
                                    <div style={Styles.active}>

                                        <span style={Styles.close} onClick={(e) => setLookLikeId(null)} >X</span>

                                        <div>

                                            <span style={Styles.discription}>{work.discription}</span>
                                        </div>
                                        <div style={Styles.Contcat}>
                                            <h2 style={Styles.contakt}>Contcat</h2>
                                            <span style={Styles.fontemail} >email : {work.email}</span>
                                            <span style={Styles.fontemail}>telefon :{work.Telephone}</span>
                                        </div>
                                    </div>
                                    : null
                                }

                            </div>
                        )) :
                            <PageEmpty TextTitle='Vi har ingenting för dig nu' />
                        }
                    </div>
                </Col>
            </Row>
        </LoadingErrorHandle>




    </Container>
}



export default ScreenWork