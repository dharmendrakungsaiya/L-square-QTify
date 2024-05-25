import React, {useState, useEffect} from "react";
import "swiper/css";
import {Navigation} from "swiper/modules";
import {Swiper,useSwiper,SwiperSlide} from "swiper/react";
import Stylesheet from "../Carousel/Carousel.module.css";
import CarouselLeft from "./CarouselLeft/CarouselLeft";
import CarouselRight from "./CarouselRight/CarouselRight";

const Controls=({data})=>{
    let swiper = useSwiper();
    
    useEffect(()=>{
        swiper.slideTo(0,1)
    },[data])

    return <></>
}

const Carousel = ({data,renderCardComponent}) => {
    return (
  
      <div className={Stylesheet.wrapper}>
      <Swiper
          initialSlide={0}
          spaceBetween={40}
          slidesPerView={"auto"}
           // The Pagination module from Swiper.js is explicitly imported and passed to the modules prop of the Swiper component.
           modules={[Navigation]}
           allowTouchMove
          >
          <Controls data={data}/>
              <CarouselLeft />
           <CarouselRight />
           {/* since we need to show the cards of album inside the section, hence use SwiperSlide inside map on data array */}
        {data.map((item, index) => (
           // renderCardComponent is using the card component in it to show cards, see in section component
          <SwiperSlide key={index}>{renderCardComponent(item)}</SwiperSlide>
        ))}
         
      </Swiper>
      </div>
    )
  }

  export default Carousel;
