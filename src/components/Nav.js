import React, { useState } from "react"
import { NavLink } from "react-router-dom";

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
            <NavLink exact={true} to="/" activeClassName="nav-active">Home</NavLink>
            <NavLink to="/services" activeClassName="nav-active">Services</NavLink>
            <NavLink to="/contacts" activeClassName="nav-active">Contact us</NavLink>
            <NavLink to="/products" activeClassName="nav-active">Our products</NavLink>
            <NavLink to="/about" activeClassName="nav-active">About us</NavLink>
            <hr />
            <div className="nav-social-icons">
                <img src={ig} alt="instagram icon"></img>
                <img src={fb} alt="facebook icon"></img>
            </div>
        </nav>
        </>
    )
}