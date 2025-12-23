import './Review.css'
import client1 from '../../assets/img/client1.jpg'
import client2 from '../../assets/img/client2.jpg'


const SectionTitle = ({ text }) => {
    return (
        <h2 id="review-title">{text}</h2>
    )
}

const CustomerReview = ({ img, job, jobTitle, review }) => {
    return (
        <div className="review">
            <div className="user-info">
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="job-desc">
                    <span className="job">{job}</span>
                    <span className="job-title">{jobTitle}</span>
                </div>
            </div>
            <div className="customer-review">{review}</div>
            <div className="left-triangle"></div>
            <div className="right-triangle"></div>
        </div>
    )
}

const ReviewSectionText = ({ text }) => {
    return (
        <p id="review-text">{text}</p>
    )
}

const Review = () => {
    return (
        <section id="review-container">
            <SectionTitle text={"REVIEW CLIENT"} />
            <ReviewSectionText text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ducimus laborum iure dicta quia animi deserunt facilis magnam illo molestiae, deleniti incidunt, eaque, maxime atque."} />
            <div id="reviews">

                <CustomerReview img={client1} job={"Diet Expert"} jobTitle={"CFO"} review={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum cumque unde doloremque incidunt possimus distinctio velit provident? Reiciendis, error nobis!"} />

                <CustomerReview img={client2} job={"Cardio Trainer"} jobTitle={"CEO"} review={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum laboriosam sunt recusandae atque consectetur dolorem facere qui quidem eaque aut!"} />

            </div>
        </section>
    )
}

export default Review