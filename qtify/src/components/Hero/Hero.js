import React from "react";
import Stylesheet from "../Hero/Hero.module.css"
import HeroImage from "../../assets/headphone.png"
import "@fontsource/poppins";

const Hero = () => {
    return (
        <section className={Stylesheet.hero}> 
        <div className={Stylesheet.title}>
            <h1>100 Thousand Songs, ad-free</h1>
            <h1>Over thousands podcast episodes</h1>
            </div>
        <img src={HeroImage} alt="headphone" className={Stylesheet.Image}></img>
        </section>
    )
}

export default Hero;