import './BestTrainers.css'
import trainer1 from '../../assets/img/trainer1.jpg'
import trainer2 from '../../assets/img/trainer2.jpg'
import trainer3 from '../../assets/img/trainer3.jpg'

const Title = ({ text }) => {
    return (
        <h2 id="our-best-trainers-title">{text}</h2>
    )
}

const PageText = ({ text }) => {
    return (
        <p id="our-best-trainers-text">{text}</p>
    )
}

const Trainer = ({ img, name, title }) => {
    return (
        <div className="trainer">
            <img src={img} alt="trainer" />
            <span className="line top"></span>
            <span className="line right"></span>
            <span className="line bottom"></span>
            <span className="line left"></span>
            <div className="trainer-hover">
                <h3 className="trainer-name">{name}</h3>
                <p className="trainer-title">{title}</p>
            </div>
        </div>
    )
}

const BestTrainers = () => {
    return (
        <section id="our-best-trainers">
            <Title text={"OUR BEST TRAINERS"} />
            <PageText text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquid quisquam a veniam numquam quod at molestias placeat itaque dolorum sint quaerat expedita, perspiciatis reiciendis corporis sit nulla. Repellendus, quis?"} />
            <div id="trainers">
                <Trainer img={trainer1} name={"Jane Doe"} title={"Cardio Trainer"} />
                <Trainer img={trainer2} name={"Jane Doe"} title={"Cardio Trainer"} />
                <Trainer img={trainer3} name={"Jane Doe"} title={"Cardio Trainer"} />
            </div>
        </section>
    )
}

export default BestTrainers