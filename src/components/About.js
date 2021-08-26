//components
import Header from "./Header"
import Footer from "./Footer"
import Nav from "./Nav"

//pictures and svgs
import owner from "../img/owner.png";
import staff1 from "../img/staff1.png";
import staff2 from "../img/staff2.png";
import staff3 from "../img/staff3.png";
import staff4 from "../img/staff4.png";
import staff5 from "../img/staff5.png";

export default function About() {
    return (
        <>
            <Header name={"ABOUT US"} />
            <Nav />
            <div className="about-page">
                <div className="about-founder">
                    <div className="about-title">
                        <p>FOUNDER AND CREATIVE DIRECTOR</p>
                    </div>
                    <div className="about-founder-inside">
                        <img src={owner}></img>
                        <div className="about-founder_description">
                            <p>MARY RUSSELL</p>
                            <p>Passion, community, and determination are just a few words that can be used to describe Mary Russell. Mary was already putting herself through beauty school by the age of seventeen. She found inspiration in the city’s style and culture that surrounded her but she was by far captivated by Brooklyn. Mary quickly set her sights on owning her own salon in Brooklyn and in February of 2004, she opened A New You Salon in its original location on Grand Street, in Williamsburg; she was only twenty-three.</p>
                            <p>Passion, community, and determination are just a few words that can be used to describe Mary Russell. Mary was already putting herself through beauty school by the age of seventeen. She found inspiration in the city’s style and culture that surrounded her but she was by far captivated by Brooklyn. Mary quickly set her sights on owning her own salon in Brooklyn and in February of 2004, she opened A New You Salon in its original location on Grand Street, in Williamsburg; she was only twenty-three.</p>
                            <p>Passion, community, and determination are just a few words that can be used to describe Mary Russell. Mary was already putting herself through beauty school by the age of seventeen. She found inspiration in the city’s style and culture that surrounded her but she was by far captivated by Brooklyn. Mary quickly set her sights on owning her own salon in Brooklyn and in February of 2004, she opened A New You Salon in its original location on Grand Street, in Williamsburg; she was only twenty-three.</p>
                        </div> 
                    </div>
                </div>
                <div className="about-team">
                    <div className="about-title">
                        <p>OUR STAFF</p>
                    </div>
                    <div className="staff-row">
                        <div className="staff-box">
                            <img src={staff1} alt="LAYLA WHITE"></img>
                            <p>LAYLA WHITE</p>
                            <p>Stylist</p>
                        </div>x
                        <div className="staff-box">
                            <img src={staff2} alt="STHEPHANIE OLSON"></img>
                            <p>STHEPHANIE OLSON</p>
                            <p>Esthetician | Nail Technician</p>
                        </div>
                        <div className="staff-box">
                            <img src={staff3} alt="LIZZY PETERS"></img>
                            <p>LIZZY PETERS</p>
                            <p>Brow and lash specialist</p>
                        </div>
                    </div>
                    <div className="staff-row">
                        <div className="staff-box">
                            <img src={staff4} alt="SARA SICKELS"></img>
                            <p>SARA SICKELS</p>
                            <p>Stylist | manager</p>
                        </div>
                        <div className="staff-box">
                            <img src={staff5} alt="KAMERYN BELL"></img>
                            <p>KAMERYN BELL</p>
                            <p>Massage therapist</p>
                        </div>
                        <div className="staff-box">
                            <img src={staff1} alt="LAYLA WHITE"></img>
                            <p>LAYLA WHITE</p>
                            <p>Stylist</p>
                        </div>
                    </div> 
                </div>
            </div>
            <Footer />
        </>
    )
}