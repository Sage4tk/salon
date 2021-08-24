//components
import Header from "./Header"
import Footer from "./Footer"

export default function Home() {
    return (
        <div className="home">
            <Header name={"A NEW YOU"} home={true} />
            <Footer />
        </div>
    )
}