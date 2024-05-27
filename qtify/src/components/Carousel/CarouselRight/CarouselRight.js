import React from "react";
import { useState, useEffect } from "react";
import {useSwiper, Swiper, SwiperSlide} from "swiper/react";
import Stylesheet from "../CarouselRight/CarouselRight.module.css";
import {ReactComponent as RightArrow} from "../../../assets/RightArrow.svg";

const CarouselRight = () => {
    const swiper = useSwiper();
    const [isEnd,setIsEnd] = useState(swiper.isEnd)

    useEffect(() => {
        swiper.on("slideChange", () => {
            setIsEnd(swiper.isEnd)
        })
    })
  return (
    <div className={Stylesheet.rightNavigation}>
        {!isEnd && <RightArrow onClick={() => swiper.slideNext()}/>}
    </div>
  )
}

export default CarouselRight;