//components
import Header from "./Header"
import Footer from "./Footer"
import Nav from "./Nav";

//pictures
import store from "../img/storepic.png"
import location from "../img/location.svg"
import contact1 from '../img/contact1.png'
import contact2 from '../img/contact2.png'

export default function Contact() {
    return (
        <>
            <Header name={"CONTACT"} />
            <Nav />
            <div className="common-page">
                <div className="contact-timings contact-col">
                    <div className="common-title">
                        <p>HOURS OF OPERATION</p>
                        <hr />
                    </div>
                    <p>Sunday <span>10:00 am - 8:00 pm</span></p>
                    <p>Monday <span>10:00 am - 8:00 pm</span></p>
                    <p>Tuesday <span>10:00 am - 8:00 pm</span></p>
                    <p>Wednesday <span>10:00 am - 8:00 pm</span></p>
                    <p>Thursday <span>10:00 am - 4:00 pm</span></p>
                    <p>Friday <span>Closed</span></p>
                    <p>Saturday <span>Closed</span></p>
                </div>
                <div className="contact-col">
                    <img className="contact-image" src={contact1} alt="salon picture"></img>
                    <img className="contact-image" src={contact2} alt="salon picture 2"></img>
                </div>
                <div className="contact-col">
                    <div className="common-title">
                        <p>LOCATION</p>
                        <hr />
                    </div>
                    <div className="contact-location">
                        <p>Williamsburg</p>
                        <p>160 Grand St Brooklyn, NY 11672</p>
                        <p>718 567 8906</p>
                    </div>
                    <button>Call Us</button>
                    <div className="contact-direction">
                        <img src={location} alt="location icon"></img>
                        <p>Get Directions</p>
                    </div>
                    <img src={store} alt="store picrture"></img>
                </div>
            </div>
            <Footer />
        </>
    )
}