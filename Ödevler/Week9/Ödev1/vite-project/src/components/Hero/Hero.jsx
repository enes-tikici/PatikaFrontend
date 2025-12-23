import './Hero.css';
import heroImg from "../../assets/img/hero-man.jpg";

const HeroTitle = ({ span1, span2, span3 }) => {
    return (
        <h1 id="hero-title">
            <span>{span1}</span>
            <span>{span2}</span>
            <span>{span3}</span>
        </h1>
    )
}

const HeroText = (props) => {
    return (
        <p id="hero-text">{props.text}</p>
    )
}

const HeroButtons = ({ sign, details }) => {
    return (
        <div id="hero-buttons">
            <a id="sign-up-button" href="#">{sign}</a>
            <a id="details-button" href="#">{details}</a>
        </div>
    )
}

const Hero = () => {
    return (
        <section id="hero">
            <div id="hero-container">
                <img id="hero-img" src={heroImg} alt="Sport center image" />
                <div id="hero-content">
                    <span id="hero-sup-title">POWERFULL</span>
                    <HeroTitle span1={"Group"} span2={"Practice"} span3={"With Trainer"} />
                    <HeroText text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, aliquam officiis Magnamitaque consectetur odio cumque accusamus culpa sit aspernatur quod exercitationem! Ullam, voluptas ipsam. Vero id aliquam quibusdam beatae!"} />
                    <HeroButtons sign="Sign Up" details="Details" />
                </div>
            </div>
        </section>

    )
}

export default Hero