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
            <Header name={"A NEW YOU"} home={true} />
            <Nav />
            <div className="home">
                <div className="home-gallery">
                    <img src={girl1}></img>
                    <img src={girl2}></img>
                    <img src={girl3}></img>
                </div>
                <div className="home-button">
                    <button>Contact Us</button>
                    <button>Our Services</button>
                </div>
            </div>
            <Footer />
        </>
    )
}