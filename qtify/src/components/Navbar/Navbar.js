import React from "react";
import Button from "../Button/Button";
import Search from "../Search/Search";
import Logo from "../../assets/Logo.png";
import StyleSheet from "./Navbar.module.css";

const Navbar = () => {
    return(
        <>
        <nav className={StyleSheet.navbar}>
            <div className={StyleSheet.logoDiv}><img src={Logo} alt="logo"></img></div>
            <Search search={"Search a song of your choice"} />
            <Button children={"Give feedback"}/>
        </nav>
        </>
    )
}

export default Navbar;