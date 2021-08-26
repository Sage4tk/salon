//components
import Header from "./Header"
import Footer from "./Footer"
import Nav from "./Nav";


export default function Products() {
    return (
        <>
            <Header name={"PRODUCTS"} />
            <Nav />
            <div className="common-page">
                <div className="service-col">
                    <div className="common-title">
                        <p>HAIR CARE</p>
                        <hr />
                    </div>
                    <div className="service-name">
                        <p>Shampoo</p>
                        <p>$50</p>
                    </div>
                    <div className="service-name">
                        <p>Conditioner</p>
                        <p>$40</p>
                    </div>
                    <div className="service-name">
                        <p>Hair mask</p>
                        <p>$40</p>
                    </div>
                    <div className="service-name">
                        <p>Hair oil</p>
                        <p>$60</p>
                    </div>
                    <div className="service-name">
                        <p>Heat protection</p>
                        <p>$60</p>
                    </div>
                    <div className="service-name">
                        <p>Colored Hair Shampoo</p>
                        <p>$63</p>
                    </div>
                </div>
                <div className="service-col">
                    <div className="common-title">
                        <p>STYLING</p>
                        <hr />
                    </div>
                    <div className="service-name">
                        <p>Styling mousse 100 ml</p>
                        <p>$16</p>
                    </div>
                    <div className="service-name">
                        <p>Styling spray 400 ml</p>
                        <p>$33</p>
                    </div>
                    <div className="service-name">
                        <p>Volume spray 100 ml</p>
                        <p>$16</p>
                    </div>
                    <div className="service-name">
                        <p>Dry shampoo</p>
                        <p>$21</p>
                    </div>
                    <div className="service-name">
                        <p>Bamboo combs</p>
                        <p>$30</p>
                    </div>
                    <div className="service-name">
                        <p>Curling iron</p>
                        <p>$80</p>
                    </div>
                </div>
                <div className="service-col">
                    <div className="common-title">
                        <p>Gift Ideas</p>
                        <hr />
                    </div>
                    <div className="product-gift">
                        <div className="service-name">
                            <p>Summer styling bag</p>
                            <p>Includes shampoo, styling mousse
                            and volume spray
                            <br />$90</p>
                        </div>
                        <div className="service-name">
                            <p>Repair beauty bag</p>
                            <p>Includes hair oil, hair mask and
                            heat protection
                            <br />$90</p>
                        </div>
                        <div className="service-name">
                            <p>Summer styling bag</p>
                            <p>Includes shampoo, styling mousse
                            and volume spray; sunscreen
                            hydrating mask for body, organic
                            orange soap, lavander eau de 
                            toilete.
                            <br />$150</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}