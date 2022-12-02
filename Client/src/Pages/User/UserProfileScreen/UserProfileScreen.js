import { Container, Row, Col } from 'react-bootstrap'
import React, { Fragment, useEffect, useState } from 'react'
import Title from '../../../Components/ScreenTitle/ScreenTitle'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import UserNavBarScreen from '../UserNavBarScreen/UserNavBarScreen'
import { SliceNameNot } from '../../../Assistant/Slice'
import ScreenLike from '../../Like/Like'
import UserAddTelefonNumber from '../UserAddTelefonNumber/UserAddTelefonNumber'
import LoadingErrorHandle from '../../../Components/Update/LoadingErrorHandle/LoadingErrorHandle'
import { ErrorServer, LoadingSkeletonProductPage } from '../../../Assistant/TextError'
import Styles from '../../../Components/Update/StylesComponents/style'
import { GetUserInfoAction } from '../../../redux/Action/Auth_Action'
import './Profile.css'


const UserProfileScreen = () => {



    const dispatch = useDispatch()
    const history = useHistory()

    // user info...
    const userLogin = useSelector((state) => state?.userLogin)
    const { userInfo, loading, successfully, error } = userLogin

    // class open page add number if user not has telefonunmber....
    const [openAddNumber, setOpenAddNumber] = useState(false)


    // updated user info 
    useEffect(() => {

        if (!userInfo?.firstname) {

            return history.push('/uppsala')
        } else {
            dispatch(GetUserInfoAction())
        }

        // eslint-disable-next-line

    }, [userInfo?.firstname, dispatch, history])



    useEffect(() => {
        if (!userInfo?.telephone) {
            return setOpenAddNumber(true)
        }
        return () => {
            setOpenAddNumber(false)
        }

    }, [userInfo?.telephone, setOpenAddNumber])









    // get all cart like
    const LikeLength = useSelector((state) => state.like?.likeCart)






    return <Fragment>



        <Container>

            <Title TextTitle={`Profile : ${userInfo?.firstname}`} />

            <Row className="justify-content-center margin-top-class" >



                <Col xs={12} sm={12} md={12} lg={12} >
                    <div className='myprofile'>
                        <h1>Profil</h1>
                    </div>

                </Col>

                <Col xs={12} sm={12} md={12} lg={12}>


                    <UserNavBarScreen ClassNameProfile />

                    <div className='margin-bottom-class'>  </div>

                </Col>


                <LoadingErrorHandle
                    loading={loading}
                    error={error}
                    TextNotItems={ErrorServer}
                    type={LoadingSkeletonProductPage}
                >

                    <Col xs={12} sm={12} md={12} lg={8}>

                        <div className='class-box'>
                            <div className='image-box-css'>
                                {SliceNameNot(userInfo?.firstname, 1)} {SliceNameNot(userInfo?.lastname, 1)}
                            </div>

                            <div className='class-profile-name'>
                                <h1 className='font-all-all-edit'>{userInfo?.firstname} {userInfo?.lastname}</h1>
                                <div className='classInfo'>
                                    <div className='classInfo-email'>
                                        <span >Email</span>
                                        <span >{userInfo?.email}</span>
                                    </div>

                                    <div className='classInfo-email add-margin-left'>
                                        <span >Phone number</span>
                                        <span >{userInfo?.telephone}</span>
                                    </div>
                                </div>
                            </div>


                        </div>


                    </Col>

                    <Col xs={12} sm={12} md={12} lg={8}>
                        {LikeLength?.length > Number(0) &&

                      
                            <>
                                <div className='yourFavorut margin-top-'>

                                    <div className='yourFavorutnavbar'>
                                        <h1 className='font-all-all-edit'>your Favourites</h1>
                                        <Link to={{ pathname: '/sw/personal/like/like/user/' }} style={Styles.newBox}>
                                            se all
                                        </Link>
                                    </div>
                                </div>
                                <Row>
                                    <ScreenLike Hidding />

                                </Row>
                             </>


                                

                           

                        }

                    </Col>





                </LoadingErrorHandle>





            </Row>




        </Container>








        <UserAddTelefonNumber
            openAddNumber={openAddNumber}
            setOpenAddNumber={setOpenAddNumber}
            successfully={successfully}

        />


    </Fragment>



}


export default UserProfileScreen





// onClick={(e) => LikePage(history)}