import React from "react";
import Stylesheet from "../Button/Button.module.css";

const Button = ({children}) => {
    return(
        <div>
            <button className={Stylesheet.button} >{children}</button>
        </div>
    )
}

export default Button