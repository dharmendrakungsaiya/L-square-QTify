import React from "react";
import { useState, useEffect } from "react";
import {useSwiper, Swiper, SwiperSlide} from "swiper/react";
import Stylesheet from "../CarouselRight/CarouselRight.module.css";
import {ReactComponent as RightArrow} from "../../../assets/RightArrow.svg";

const CarouselRight = () => {
    const swiper = useSwiper();
    const [isEnd, setIsEnd] = useState(swiper?.isEnd || false);

    useEffect(() => {
        if (swiper) {
            const handleSlideChange = () => {
                setIsEnd(swiper.isEnd);
            };

            swiper.on("slideChange", handleSlideChange);

            // Clean up the event listener on component unmount
            return () => {
                swiper.off("slideChange", handleSlideChange);
            };
        }
    }, [swiper]);

    return (
        <div className={Stylesheet.rightNavigation}>
            {!isEnd && <RightArrow onClick={()=>swiper.slideNext()} />}
        </div>
    )

}

export default CarouselRight;