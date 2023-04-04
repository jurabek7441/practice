import Icon from "../photo/icon.png"
import { FaFacebookF } from "react-icons/fa"
import { GrTwitter } from "react-icons/gr"
import Western_union from "../photo/Western-union.png"
import Master_card from "../photo/Master-card.png"
import Paypal from "../photo/Paypal.png"
import Visa from "../photo/Visa.png"
export let Footer = () => {

    return (
        <div className="footer">
            <div className="footer_top">
                <div className="footerTop_line1">
                    <div className="footer_icon">
                        <figure>
                            <img src={Icon} alt="icon" />
                        </figure>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.</p>
                    </div>
                    <div className="follow_us">
                        <h5>Follow Us</h5>
                        <p>Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                        <div className="facebook_twitter">
                            <i className="facebook"><FaFacebookF /></i>
                            <i className="twitter"><GrTwitter /></i>
                        </div>
                    </div>
                    <div className="contact_us">
                        <h5>Contact Us</h5>
                        <p>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</p>
                    </div>
                </div>
                <div className="footerTop_line2">
                    <div>
                        <h5>Information</h5>
                        <p>About us</p>
                        <p>Information</p>
                        <p>Privacy Police</p>
                        <p>Terms & Conditions</p>
                    </div>
                    <div>
                        <h5>Service</h5>
                        <p>About us</p>
                        <p>Information</p>
                        <p>Privacy Police</p>
                        <p>Terms & Conditions</p>
                    </div>
                    <div>
                        <h5>My Account</h5>
                        <p>About us</p>
                        <p>Information</p>
                        <p>Privacy Police</p>
                        <p>Terms & Conditions</p>
                    </div>
                    <div>
                        <h5>Our Offers</h5>
                        <p>About us</p>
                        <p>Information</p>
                        <p>Privacy Police</p>
                        <p>Terms & Conditions</p>
                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>
                <div className="brands">
                    <img src={Western_union}alt="Wetern-union" />
                    <img src={Master_card}alt="Master-card" />
                    <img src={Paypal}alt="Paypal" />
                    <img src={Visa}alt="Visa" />
                </div>
            </div>
        </div>
    )
}