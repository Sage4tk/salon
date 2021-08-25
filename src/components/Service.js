//components
import Header from "./Header"
import Footer from "./Footer"
import Nav from "./Nav";


export default function Service() {
    return (
        <>
            <Header name={"SERVICES"} />
            <Nav />
            <div className="common-page">
                <div className="service-col">
                    <div className="common-title">
                        <p>COLOR</p>
                        <hr />
                    </div>
                    <div className="service-name">
                        <p>Bleach & Tone Retouch</p>
                        <p>2 hr $200-220</p>
                    </div>
                    <div className="service-name">
                        <p>Half Head Balayage or Highlights</p>
                        <p>2 hr $200-270</p>
                    </div>
                    <div className="service-name">
                        <p>Full Head Balayage or Highlights</p>
                        <p>2 hr $250-300</p>
                    </div>
                    <div className="service-name">
                        <p>Color Correcting</p>
                        <p>15 min Price Upon Consultation</p>
                    </div>
                    <div className="service-name">
                        <p>Partial Balayage or Highlights</p>
                        <p>2 hr $175-195</p>
                    </div>
                    <div className="service-name">
                        <p>AirTouch Dimensional Blonding</p>
                        <p>3 hr $300</p>
                    </div>
                </div>
                <div className="service-col">
                    <div className="common-title">
                        <p>STYLING</p>
                        <hr />
                    </div>
                    <div className="service-name">
                        <p>Blowout</p>
                        <p>1 hr $65</p>
                    </div>
                    <div className="service-name">
                        <p>Event Hair Service</p>
                        <p>1 hr $150</p>
                    </div>
                    <div className="service-name">
                        <p>Hand Sewn Weft Extensions</p>
                        <p>15 min Price upon consultation</p>
                    </div>
                    <div className="service-name">
                        <p>Custom Tape-In Extensions</p>
                        <p>15 min Price upon consultation</p>
                    </div>
                    <div className="service-name">
                        <p>Full (curling/flat iron)</p>
                        <p>1 hr $90</p>
                    </div>
                    <div className="service-name">
                        <p>Luxury (curling/flat iron)</p>
                        <p>1 hr $100</p>
                    </div>
                </div>
                <div className="service-col">
                    <div className="common-title">
                        <p>HAIRCUTS</p>
                        <hr />
                    </div>
                    <div className="service-name">
                        <p>Curly Dry Cut</p>
                        <p>1 hr $90-120</p>
                    </div>
                    <div className="service-name">
                        <p>Short / Medium / Long / Haircuts</p>
                        <p>1 hr $75-120</p>
                    </div>
                    <div className="service-name">
                        <p>Barber Cuts</p>
                        <p>1 hr $55-75</p>
                    </div>
                    <div className="service-name">
                        <p>Express Haircut</p>
                        <p>20 min $30</p>
                    </div>
                    <div className="service-name">
                        <p>Haircut and Shampoo</p>
                        <p>40 min $50</p>
                    </div>
                    <div className="service-name">
                        <p>Kid’s Haircut & Shampoo</p>
                        <p>40 min $80</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}