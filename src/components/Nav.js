import React, { useState } from "react"
import { Link } from "react-router-dom";

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
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/contacts">Contact us</Link>
            <Link to="/products">Our products</Link>
            <Link to="/about">About us</Link>
            <hr />
            <div className="nav-social-icons">
                <img src={ig} alt="instagram icon"></img>
                <img src={fb} alt="facebook icon"></img>
            </div>
        </nav>
        </>
    )
}