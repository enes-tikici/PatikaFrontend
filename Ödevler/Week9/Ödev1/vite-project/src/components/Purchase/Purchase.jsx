import './Purchase.css'
import purchase1 from '../../assets/img/purchase1.jpg'
import purchase2 from '../../assets/img/purchase2.jpg'
import purchase3 from '../../assets/img/purchase3.jpg'
import purchase4 from '../../assets/img/purchase4.jpg'


const SectionTitle = ({ text }) => {
    return (
        <h2 id="purchase-title">{text}</h2>
    )
}

const SectionText = () => {
    return (
        <p id="purchase-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo molestias recusandae
            consectetur incidunt est dolor nemo modi quos eius dolore. </p>
    )
}

const CardContainer = ({ children }) => {
    return (
        <div id="purchase-card-container">
            {children}
        </div>
    )
}

const PruchaseCard = ({ img, desc, oldPrice, newPrice }) => {
    return (
        <div className="purchase-card">
            <img className="purchase-img" src={img} alt="Purchase image" />
            <p className="purchase-desc">{desc}</p>
            <p className="purchase-price">
                <span className="old-price">{oldPrice}</span>
                <span>/</span>
                <span className="new-price">{newPrice}</span>
            </p>
            <a href="#" className="add-to-cart">
                <i className="bi bi-cart-fill"></i>
                <span href="#">Add to Cart</span>
            </a>
        </div>
    )
}

const Purchase = () => {
    return (
        <section id="purchase-container">
            <SectionTitle text={"PURCHASE FROM US"} />
            <SectionText text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo molestias recusandae consectetur incidunt est dolor nemo modi quos eius dolore." />
            <CardContainer>
                <PruchaseCard img={purchase1} desc={"Kettlebell / 5kg"} oldPrice={"89,99$"} newPrice={"59,99$"} />
                <PruchaseCard img={purchase2} desc={"Treadmill"} oldPrice={"89,99$"} newPrice={"59,99$"} />
                <PruchaseCard img={purchase3} desc={"Adjustible Dumbbell"} oldPrice={"899,99$"} newPrice={"599,99$"} />
                <PruchaseCard img={purchase4} desc={"Kettlebell / 3kg"} oldPrice={"89,99$"} newPrice={"59,99$"} />
            </CardContainer>
        </section >
    )
}

export default Purchase