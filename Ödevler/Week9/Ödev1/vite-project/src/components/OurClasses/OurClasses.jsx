import './OurClasses.css'
import yoga from '../../assets/img/yoga.jpg'
import group from '../../assets/img/group.webp'
import solo from '../../assets/img/solo.jpg'
import stret from '../../assets/img/stret.webp'
import { useState } from 'react'

const Button = ({ text, className, onClick }) => {
    return (
        <button className={className} onClick={onClick}>{text}</button>
    )
}

const CourseInfo = ({ title, text, hoursTitle, img }) => {
    return (
        <div id="course-info">
            <div id="course-info-text">
                <h3 id="course-info-title" className="course-title">{title}</h3>
                <p className="course-text">{text}</p>
                <h3 id="course-hours-title" className="course-title">{hoursTitle}</h3>
                <ul id="corse-hours-list">
                    <li className="course-text">Saturday - Sunday: 8:00am - 10:00pm</li>
                    <li className="course-text">Monday - Tuesday: 10:00am - 12:00pm</li>
                    <li className="course-text">Wednesday - Friday: 3:00pm - 6:00pm</li>
                </ul>
            </div>
            <div id="course-info-img">
                <img id="course-img" src={img} alt="Course image" />
            </div>
        </div>
    )
}


const courses = [
    {
        name: "Yoga",
        courseTitle: "Why are your Yoga?",
        courseText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        courseHoursTitle: "When comes Yoga Your Time.",
        courseImg: yoga,
    },
    {
        name: "Group",
        courseTitle: "Why are your Group?",
        courseText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        courseHoursTitle: "When comes Group Your Time.",
        courseImg: group,
    },
    {
        name: "Solo",
        courseTitle: "Why are your Solo?",
        courseText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        courseHoursTitle: "When comes Solo Your Time.",
        courseImg: solo,
    },
    {
        name: "Stretching",
        courseTitle: "Why are your Stretching?",
        courseText:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
        courseHoursTitle: "When comes Stretching Your Time.",
        courseImg: stret,
    },
];

const OurClasses = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const activeCourse = courses[activeIndex];

    return (
        <section id="our-classes">
            <h2 id="our-classes-title">OUR CLASSES</h2>
            <div id="our-classes-text-container">
                <p id="our-classes-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius, quam quis. Facilis
                    voluptates sequi cum ratione eos quia iure esse!</p>
            </div>
            <div id="our-classes-buttons">
                {
                    courses.map((course, index) => (
                        <Button key={course.name} className={`our-classes-button ${index === activeIndex ? "active" : ""
                            }`}
                            onClick={() => setActiveIndex(index)} text={course.name} />
                    ))
                }
            </div>

            <CourseInfo title={activeCourse.courseTitle} text={activeCourse.courseText} hoursTitle={activeCourse.courseHoursTitle} img={activeCourse.courseImg} />
        </section>
    )
}

export default OurClasses