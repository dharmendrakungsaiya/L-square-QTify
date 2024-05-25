import { useState, useEffect } from "react";
import Stylesheet from "../CarouselLeft/CarouselLeft.module.css";
import {ReactComponent as LeftArrow} from "../../../assets/LeftArrow.svg";
import {useSwiper, Swiper, SwiperSlide} from "swiper/react";

const CarouselLeft = () => {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(swiper?.isBeginning || false);

    useEffect(() => {
        if (swiper) {
            const handleSlideChange = () => {
                setIsBeginning(swiper.isBeginning);
            };

            swiper.on("slideChange", handleSlideChange);

            // Initial state check
            handleSlideChange();

            // Clean up the event listener on component unmount
            return () => {
                swiper.off("slideChange", handleSlideChange);
            };
        }
    }, [swiper]);

    return(
        <div className={Stylesheet.leftNavigation}>
      {!isBeginning && <LeftArrow onClick={()=>swiper.slidePrev()}/>}
    </div>
    )

}

export default CarouselLeft;
