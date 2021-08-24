//icons & images
import fb from '../img/facebook_icon.svg'
import ig from '../img/instagram_icon.svg'

export default function Footer() {
    return (
        <footer>
            <div className="footer-info">
                <div>
                    <p>Williamsburg</p>
                    <p>160 Grand St Brooklyn</p>
                    <p>718 567 8906</p>
                </div>
                <div>
                    <p>Follow our social media</p>
                    <div className="footer-icons">
                        <img src={fb}></img>
                        <img src={ig}></img>
                    </div>
                </div>
                <div>
                    <p>© 2021 A New You Salon</p>
                    <p>All Rights Reserved. </p>
                    <p>Policies and Disclaimers | FAQ</p>
                </div>
            </div>
            <div className="footer-button">
                <button>Send us a message</button>
                <button>Send us an E-mail</button>
            </div>
        </footer>
    )
}