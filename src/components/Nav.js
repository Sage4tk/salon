import React, { useState } from "react"

//svg
import close from "../img/close.svg";
import fb from "../img/fb_black.svg";
import ig from "../img/ig_black.svg";

export default function Nav() {
    const [toggleNav, setToggleNav] = useState(false)

    const toggler = () => {
        setToggleNav(!toggleNav);
    }

    return (
        <>
        <div className="burger" onClick={toggler}>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <nav className={toggleNav ? "show":""}>
            <div className="nav-control">
                <p>MENU</p>
                <img src={close} alt="close button" onClick={toggler}></img>
            </div>
            <p>Services</p>
            <p>Contact us</p>
            <p>Our products</p>
            <p>Lookbook</p>
            <p>About us</p>
            <hr />
            <div className="nav-social-icons">
                <img src={ig} alt="instagram icon"></img>
                <img src={fb} alt="facebook icon"></img>
            </div>
        </nav>
        </>
    )
}