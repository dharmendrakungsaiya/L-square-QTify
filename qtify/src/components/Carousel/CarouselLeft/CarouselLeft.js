import { useState, useEffect } from "react";
import Stylesheet from "../CarouselLeft/CarouselLeft.module.css";
import {ReactComponent as LeftArrow} from "../../../assets/LeftArrow.svg";
import {useSwiper, Swiper, SwiperSlide} from "swiper/react";

const CarouselLeft = () => {
    const swiper = useSwiper();
    const [isBeginning,setIsBeginning] = useState(swiper.isBeginning)

    useEffect(() => {
        swiper.on("slideChange", () => {
            setIsBeginning(swiper.isBeginning)
        })
    },[swiper])
  return (
    <div className={Stylesheet.leftNavigation}>
        {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()}/>}
    </div>
  )
}

export default CarouselLeft;
