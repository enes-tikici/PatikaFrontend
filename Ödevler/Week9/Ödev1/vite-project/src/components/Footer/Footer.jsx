import './Footer.css'
import logo from '../../assets/img/logo.png'

const FooterInfo = () => {
    return (
        <>
            <div id="footer-logo">
                <img src={logo} alt="logo" />
            </div>
            <div id="footer-desc">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis debitis cupiditate nobis, quo
                    accusamus perferendis maxime aut eum sunt dolorum voluptatum temporibus necessitatibus rem sapiente,
                    magni dolores reiciendis eos harum?</p>
            </div>
        </>
    )
}

const InformationLinks = () => {
    return (
        <div id="information">
            <h4>Information</h4>
            <ul>
                <li><a href="#hero-container">About Us</a></li>
                <li><a href="#our-classes">Classes</a></li>
                <li><a href="#info">Blog</a></li>
                <li><a href="#contact-container">Contact</a></li>
            </ul>
        </div>
    )
}

const HelpfulLinks = () => {
    return (
        <div id="helpful-links">
            <h4>Helpful Links</h4>
            <ul>
                <li><a href="#">Services</a></li>
                <li><a href="#">Supports</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </ul>
        </div>
    )
}

const Footer = () => {
    return (
        <footer id="footer">
            <section id="footer-container">
                <FooterInfo />
                <div id="footer-links">
                    <InformationLinks />
                    <HelpfulLinks />
                </div>
            </section>
        </footer>
    )
}

export default Footer