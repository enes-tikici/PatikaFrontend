import './Navbar.css';
import logo from "../../assets/img/logo.png";
import { useState, useEffect } from 'react';


const Logo = () => {
    return (
        <div className="logo">
            <a href="#hero"><img src={logo} alt="Sport Center Logo" /></a>
        </div>
    )
}

const MenuContainer = ({ children, show }) => {
    return (
        <div className={`${show ? "menu show" : "menu"}`} id="menu">{children}</div>
    )
}

const NavMenu = () => {
    return (
        <ul id="menu-list">
            <li className="menu-item"><a href="#hero" className="menu-button">Home</a></li>
            <li className="menu-item"><a href="#our-classes" className="menu-button">Classes</a></li>
            <li className="menu-item"><a href="#our-best-trainers" className="menu-button">Trainer</a></li>
            <li className="menu-item"><a href="#review-container" className="menu-button">Review</a></li>
            <li className="menu-item"><a href="#contact-container" className="menu-button">Contact</a></li>
            <li className="menu-item" id="join-button"><a href="#" className="menu-button">JOIN US</a></li>
        </ul>
    )
}

const ToggleButton = ({ onClick }) => {
    return (
        <div id="toggle"><i className="bi bi-list" onClick={onClick}></i></div>
    )
}


const Navbar = () => {

    const [show, setShow] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = () => {
        setShow(!show)
    }


    return (
        <nav id="navbar" style={{
            backgroundColor: scrolled ? "#355592" : "transparent",
        }}>
            <Logo />
            <MenuContainer show={show}>
                <NavMenu />
            </MenuContainer>
            <ToggleButton onClick={handleClick} />
        </nav>
    )
}

export default Navbar