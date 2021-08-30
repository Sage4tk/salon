import { Link } from "react-router-dom";

//components
import Header from "./Header"
import Footer from "./Footer"
import Nav from "./Nav";

//pictures
import girl1 from "../img/girl1.png";
import girl2 from "../img/girl2.jpg";
import girl3 from "../img/girl3.jpg";

export default function Home() {
    return (
        <>
            <Header name={"LUNA SALON"} home={true} />
            <Nav />
            <div className="home">
                <div className="home-gallery">
                    <img src={girl1} alt="girl 1"></img>
                    <img src={girl2} alt="girl 2"></img>
                    <img src={girl3} alt="girl 3"></img>
                </div>
                <div className="home-button">
                    <Link to="/contacts">Contact Us</Link>
                    <Link to="/services">Our Services</Link>
                </div>
            </div>
            <Footer />
        </>
    )
}