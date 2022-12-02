import { Col, Container, Row } from "react-bootstrap"
import { BiFilter, BiLeftArrowAlt, BiRightArrowAlt, BiSearch } from "react-icons/bi"
import { BsChevronDown, BsCursor } from "react-icons/bs"
import LoadingScreen from "../../LoadingScreen/LoadingScreen"
import { FirstNameRest } from '../../../Assistant/Selection'






export default function SkeletonLoading({ type }) {







    // filter home 
    function FilterHome() {


        return <div className='Skeleton-filter'>
            <div className='Skeleton-filter-image' ></div>

            <div className='Skeleton-filter-text'>
                <span></span>
                <span></span>
            </div>
        </div>
    }



    // home page
    function CartHome() {
        return <Container fluid>
            <Row className="justify-content-center">
                <Col xs={12} md={12} lg={12} className='removePaddingmarggin'>

                    <div className='Skeleton-Home'>
                        <div className='Skeleton-Home-image' ></div>

                        <div className='Skeleton-title-text'>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={12} lg={12} className='removePaddingmarggin'>

                    <div className='Skeleton-Home'>
                        <div className='Skeleton-Home-image' ></div>

                        <div className='Skeleton-title-text'>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </Col>

            </Row>
        </Container>

    }





    // home page
    function CartHomeLoading() {
        return <Container fluid>
            <Row className="justify-content-center">
                <Col xs={6} md={6} lg={6} >

                    <div className='Skeleton-Home'>
                        <div className='Skeleton-Home-image' ></div>

                        <div className='Skeleton-title-text'>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </Col>
                <Col xs={6} md={6} lg={6} >

                    <div className='Skeleton-Home'>
                        <div className='Skeleton-Home-image' ></div>

                        <div className='Skeleton-title-text'>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>

    }




    // Carousel 
    function HomeCarouselScreen() {
        return <Container fluid>
            <Row className='justify-content-center margin-carousel'>
                <Col xs={12} sm={6} md={6} lg={6}  >
                    <div className="container-className"> </div>

                </Col>
                <Col xs={12} sm={6} md={6} lg={6} className='hidden-xs'>
                    <div className="container-className"> </div>
                </Col>


            </Row>
        </Container>
    }





    // slider cart 
    function SliserCart({ Hidden }) {


        return <Container fluid>
            <Row className='justify-content-center'>
                {Hidden ? null : <Col xs={12} sm={12} md={12} lg={12} className='Skeletion-bottom'>
                    <div className="slider-icons">
                        <BiRightArrowAlt className="slider-icons-icon-skeleton right-icon" />
                        <BiLeftArrowAlt className="slider-icons-icon-skeleton left-icon" />
                    </div>
                </Col>}

                <Col xs={4} sm={4} md={4} lg={4}  >
                    <div className={Hidden ? "container-className addClass hidden" : "container-className addClass"}> </div>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4}  >
                    <div className={Hidden ? "container-className addClass hidden" : "container-className addClass"}> </div>
                </Col>

                <Col xs={4} sm={4} md={4} lg={4} >
                    <div className={Hidden ? "container-className addClass hidden" : "container-className addClass"}> </div>
                </Col>
            </Row>
        </Container>
    }




    // SkeletonCategory  category.... 
    function SkeletonCategory() {

        return <Container fluid>
            <Row className='justify-content-center'>
                <Col xs={12} sm={12} md={12} lg={12} className='Skeletion-bottom'>
                    <div className="slider-icons">
                        <BiRightArrowAlt className="slider-icons-icon-skeleton right-icon" />
                        <BiLeftArrowAlt className="slider-icons-icon-skeleton left-icon" />
                    </div>
                </Col>

                <Col xs={4} sm={4} md={4} lg={4}  >
                    <div className="container-className addClass category-box">
                        <span>category</span>
                    </div>

                </Col>
                <Col xs={4} sm={4} md={4} lg={4}  >
                    <div className="container-className addClass category-box">
                        <span>category</span>
                    </div>

                </Col>

                <Col xs={4} sm={4} md={4} lg={4} >
                    <div className="container-className addClass category-box">
                        <span>category</span>
                    </div>

                </Col>
            </Row>
        </Container>
    }


    // navbar 
    function NavBarCitySkeleton({ Hidden }) {


        return <Container fluid>
            <Row className='justify-content-center'>
                <Col xs={12} sm={12} md={12} lg={12} className='Skeletion-navbar'>

                    <div className='NavBar-city color-loading' >
                        <div className='center-image-city'>
                            <BsCursor className='NavBar-city-image color-loading' />
                        </div>
                        <div className='center-city-city'>
                            <span className='NavBar-city-text color-loading' >loading ....</span>
                        </div>

                        <BsChevronDown className='NavBar-city-image-left color-loading' />


                    </div>

                </Col>
            </Row>
        </Container>
    }





    // singel page 
    function ProductPage() {



        return <Container fluid >
            <Row >
                <Col xs={12} sm={12} md={12} lg={12} className='dsdfsdfdsf' >
                    <div className='full-screen'>

                        <div className='full-screen-Image' ></div>
                    </div>
                    <div className='full-screen-category'>
                        <div className='full-screen-Image-category' >

                            <div className="hert-class" ></div>
                            <div className="hert-class"></div>

                        </div>
                    </div>



                </Col>
            </Row>

        </Container >
    }




    // nav bar 
    function NavBarTop() {



        return <Container fluid >
            <Row className='justify-content-center classNv'>
                <Col xs={4} sm={4} md={4} lg={4} className='dsdfsdfdsf' >
                    <div className="first-skeleton-name">
                        <span>{FirstNameRest}</span>
                    </div>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4} className='dsdfsdfdsf' >
                    <div className="input-navbar-top-skeleton">
                        <span className="input-navbar-top-skeleton-children"></span>
                        <BiSearch className="searching-icons-skeleton" />
                    </div>
                </Col>
                <Col xs={4} sm={4} md={4} lg={4} className='dsdfsdfdsf' >
                    <div className="route-skeleton">
                        <span className="route-skeleton-children">U P</span>

                    </div>
                </Col>
            </Row>
        </Container>
    }




    // one cart fetch 
    function OneCart() {

        return <Container fluid>
            <Row className="justify-content-center" >
                <Col xs={12} md={8} lg={8} className='testinpadding' >
                    <div className="OneCart">
                        <div className="OneCart-text">
                            <span className="OneCart-text-children">loading</span>
                            <span className="OneCart-text-children">loading</span>
                        </div>
                        <div className="OneCart-IMAGR"></div>
                    </div>
                </Col>
                <Col xs={12} md={8} lg={8} className='testinpadding' >
                    <div className="OneCart">
                        <div className="OneCart-text">
                            <span className="OneCart-text-children">loading</span>
                            <span className="OneCart-text-children">loading</span>
                        </div>
                        <div className="OneCart-IMAGR"></div>
                    </div>
                </Col>
            </Row>
        </Container>
    }


    if (type === 'filterHome') return Array(3).fill(<FilterHome />)
    if (type === 'OneCart') return <OneCart />
    if (type === 'HomeCart') return <CartHome />

    if (type === 'loadingdata') return <CartHomeLoading />


    // loading Location ....>
    if (type === 'HomeScreen') return <div className="Home-Screen">
        <NavBarCitySkeleton />
        <HomeCarouselScreen />
        <SliserCart />
        <SliserCart />
        <SkeletonCategory />
    </div>

    // slider cart.
    if (type === 'SliserCart') return <SliserCart  Hidden/>


    // slider fetch data
    if (type === 'fetchMore') return <SliserCart Hidden />

    // category....
    if (type === 'SkeletonCategory') return <SkeletonCategory />


    // carousel
    if (type === 'HomeCarouselScreen') return <HomeCarouselScreen />

    if (type === 'ProductPage') return <ProductPage />
    // filter Searching
    if (type === 'SearchingSkeleton') return (<div className="searching-skeleton">
        <div className="Loading-laoding">
            <div className="class-xps"> restaurants</div>
            <div className="router-dem">
                <BiFilter />
            </div>
        </div>
        <SliserCart Hidden />
        <SliserCart Hidden />
    </div>)


    if (type === 'NavBarTop') return <NavBarTop />


    if (type === 'SearchingRestrant') return (<div className="searching-skeleton">
        <div className="Loading-laoding">
            <div className="class-xps"> Search results</div>
        </div>
        <SliserCart Hidden />
        <SliserCart Hidden />
    </div>)

    // loading 
    return <div className="loading-center">
        <LoadingScreen />
    </div>

}



