import React, { useState } from "react";
import Stylesheet from "../Section/Section.module.css";
import Card from "../Card/Card";
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import 'typeface-poppins';


const Section = ({ title, data, type }) => {
    const [carouselToggle, setCarouselToggle] = useState(true);
  
    const handleToggle = () => {
      setCarouselToggle(!carouselToggle);
    };
    return (
      <div>
        <div className={Stylesheet.header}>
        <h3 style={{ fontFamily: 'Poppins', color: 'white' }}>{title}</h3>
          <h4 className={Stylesheet.toggleText} onClick={handleToggle}>
            {carouselToggle ? "Show All" : "Collapse All"}
          </h4>
        </div>
        {data.length === 0 ? (
          <CircularProgress />
        ) : (
          <div className={Stylesheet.cardWrapper}>
            {!carouselToggle ? (
              <div className={Stylesheet.wrapper}>
                  {data.map((card) => (
                  <Card data={card} type={type} key={card.id} />
                  ))}
              </div>
            ) : (
              <Carousel data={data} renderCardComponent={(data) => <Card data={data} type={type}/>}/>
            )}
          </div>
        )}
      </div>
    );
  };
  
  export default Section;