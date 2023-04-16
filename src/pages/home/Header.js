import React, { useContext } from "react";
import Slider from "react-slick";
import Promotion from "../../photo/PromotionImage.png";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Discount } from "./Discount";
import { DataContext } from "../../Context";

export const Header = () => {
    const {settings}=useContext(DataContext);
    return (
        <div className="slider">
            <Slider {...settings}>
                <div className="sliderItem">
                    <figure className="headerPhoto">
                        <img className="headerGirl" src={Promotion} alt="" />
                        <h1>Super Flash Sale
                            50% Off</h1>
                    </figure>
                </div>
                <div className="sliderItem">
                    <figure className="headerPhoto">
                        <img className="headerGirl" src={Promotion} alt="" />
                        <h1>Super Flash Sale
                            50% Off</h1>
                    </figure>
                </div>
                <div className="sliderItem">
                    <figure className="headerPhoto">
                        <img className="headerGirl" src={Promotion} alt="" />
                        <h1>Super Flash Sale
                            50% Off</h1>
                    </figure>
                </div>
                <div className="sliderItem">
                    <figure className="headerPhoto">
                        <img className="headerGirl" src={Promotion} alt="" />
                        <h1>Super Flash Sale
                            50% Off</h1>
                    </figure>
                </div>
            </Slider>
            <Discount/>
        </div>
    );
};
