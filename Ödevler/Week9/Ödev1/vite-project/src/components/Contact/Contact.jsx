import './Contact.css'


const ContactInfo = () => {
    return (
        <div id="contact-info">
            <h2 id="contact-title">CONTACT US</h2>
            <p id="contact-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eos voluptas
                aspernatur
                possimus blanditiis, molestiae ipsum at cupiditate optio voluptate!</p>
        </div>
    )
}

const LeftSide = () => {
    return (
        <div id="left-side">
            <div id="contact-area">
                <div className="contact">
                    <span className="contact-type">Mobile Number</span>
                    <span className="contact-value">+135 773 321 4442</span>
                </div>
                <div className="contact">
                    <span className="contact-type">Email Address</span>
                    <span className="contact-value">demo@demo.com</span>
                </div>
            </div>
            <h3>Make An Appoinment</h3>
            <form action="" id="contact-form">
                <input type="text" name="name" id="name-input" placeholder="Your Name" />
                <input type="text" name="email" id="email-input" placeholder="Your Email" />
                <textarea name="message" id="message-input" placeholder="Your Message" />
            </form>
        </div>
    )
}


const MapArea = () => {
    return (
        <div id="map-area">
            <iframe
                title="Patika Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.891652035758!2d28.96990927553733!3d41.02762631823412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab91ef219e13d%3A0x99c136f220088f3!2sPatika.dev%20-%20Bootcamp!5e0!3m2!1str!2sus!4v1764084194665!5m2!1str!2sus"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    )
}

const Contact = () => {
    return (
        <section id="contact-container">
            <ContactInfo />
            <div id="container">
                <LeftSide />
                <MapArea />
            </div>
        </section>
    )
}

export default Contact