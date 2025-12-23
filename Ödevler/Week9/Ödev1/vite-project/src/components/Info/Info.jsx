import './Info.css'

const InfoContainer = ({ children }) => {
    return (
        <section id="info">
            {children}
        </section>
    )
}

const InfoItem = ({ number, text }) => {
    return (
        <div className="info-item">
            <div className="info-number">{number}</div>
            <div className="info-text">{text}</div>
        </div>
    )
}

const Info = () => {
    return (
        <InfoContainer>
            <InfoItem number={325} text={"Course"} />
            <InfoItem number={405} text={"Work Out"} />
            <InfoItem number={305} text={"Working Hour"} />
            <InfoItem number={705} text={"Happy Client"} />
        </InfoContainer>
    )
}

export default Info