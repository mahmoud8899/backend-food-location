import { MyOderImage } from "../../../Assistant/MyOrderImage";
import { TheTimeOppenProduct } from "../../../Assistant/TheTimeOppenProduct";
import ImageScreen from '../../../Components/ImageScreen/ImageScreen'
import Rating from "../../../Components/Rating/Rating";
import { Conversion } from "../../../Components/Update/Conversion/Conversion";
import Styles from "../../../Components/Update/StylesComponents/style";
import { SliceName } from '../../../Assistant/Slice'
import React from "react";
import Slider from "react-slick/lib";
import { Row, Col } from 'react-bootstrap'
import { Link } from "react-router-dom";
import '../Home.css'






export default function Carousel(props) {

    const { home, Title } = props

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                },
            }
        ],
    };
    return (
        <Row>

            <Col xs={12} sm={12} md={12} lg={12} >


                <h1 className="first-frist Visa-alla-title color-color-all">
                    {Title}
                </h1>
                <Slider {...settings}>

                    {home?.map((item, Index) => (

                        <div className='box-Slider-Show-home' key={Index}>
                            <Link to={{ pathname: Conversion(item) }} >
                                <div className="image-coursel-home">

                                    <div className="image-coursel-home-clidren">

                                        <ImageScreen ImageIcon={item?.image} className='image-coursel-home-clidren-Image' />



                                        <div className="callBack-info"  >


                                            <h1 className="Visa-alla-title">{item?.username}</h1>
                                            <span className="spanClass">{SliceName(item?.description, 20)}</span>

                                            <div className='callBack-info-driver' style={Styles.buttom}>

                                                <ImageScreen
                                                    ImageIcon={MyOderImage.delivery}
                                                    className='driver-image'
                                                />

                                                <div className='title-bottom-price'>
                                                    SEK0.00
                                                </div>

                                                <div className='title-bottom-price'>
                                                    <Rating value={item?.rating} text={item?.numReviews} />
                                                </div>


                                                <div className='callBack-info-time'>
                                                    <div className='callBack-info-time-children'>{item?.finishfood?.to}-{item?.finishfood?.to}</div>
                                                    <div className='callBack-info-time-children'> min</div>
                                                </div>

                                            </div>

                                            {TheTimeOppenProduct(item?.opentime)?.toString() === 'true' ?
                                                <></>
                                                :
                                                <div className='list-image-close add-close'>
                                                    stängd
                                                </div>

                                            }


                                        </div>



                                    </div>


                                </div>
                            </Link>


                        </div>


                    ))}



                </Slider>


            </Col>
        </Row>
    );

}
