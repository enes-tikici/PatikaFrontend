
import { useState } from 'react';
import './BmiCalculator.css';
import bmiIndex from '../../assets/img/bmi-index.jpg';

const calculateBMI = (height, weight) => {
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        return { result: null, categoryIndex: -1 };
    }
    const heightM = height / 100;

    const result = weight / (heightM * heightM);

    let categoryIndex = -1;

    if (result < 18.5) {
        categoryIndex = 0;
    } else if (result < 25) {
        categoryIndex = 1;
    } else if (result < 30) {
        categoryIndex = 2;
    } else if (result < 35) {
        categoryIndex = 3;
    } else {
        categoryIndex = 4;
    }

    return {
        result: result.toFixed(2),
        categoryIndex
    };
};

const InfoSection = () => (
    <>
        <h2 id="bmi-info-title">BMI CALCULATOR</h2>
        <p className="bmi-info-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, dolor facere cum
            alias
            dicta ex
            incidunt
            consectetur qui id libero animi, tempora voluptas totam veritatis eius ea ipsa vero molestias!
        </p>
        <p className="bmi-info-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dicta modi placeat!
            Incidunt, natus.
            Reiciendis optio recusandae eos nobis architecto similique molestias illum doloremque, facere ad ab
            atque eveniet dolor.
        </p>
    </>
);

const CalculatingArea = ({ height, weight, setHeight, setWeight }) => (
    <div id="bmi-calculate">
        <div className="calculate-container">
            <input
                type="number"
                min="0"
                step="0.1"
                inputMode="numeric"
                name="customer-height"
                id="customer-height-input"
                placeholder="Your height)"
                value={height || ''}
                onChange={(e) => setHeight(parseFloat(e.target.value))}
            />
            <span className="bmi-info-text">cm</span>
        </div>
        <div className="calculate-container">
            <input
                type="number"
                min="0"
                step="0.1"
                inputMode="numeric"
                name="customer-weight"
                id="customer-weight-input"
                placeholder="Your Weight"
                value={weight || ''}
                onChange={(e) => setWeight(parseFloat(e.target.value))}
            />
            <span className="bmi-info-text">kg</span>
        </div>
    </div>
);

const ImgArea = ({ categoryIndex }) => {
    const sections = Array.from({ length: 5 }, (_, i) => i + 1);

    return (
        <div id="bmi-bmi">
            <div id="bmi-img-area">
                <img src={bmiIndex} alt="BMI Index Scale" />
            </div>
            <div id="bmi-triangle">
                {sections.map(index => (
                    <div
                        key={index}
                        id={`section${index}`}
                        className={categoryIndex === index - 1 ? "triangle-area" : ""}
                    ></div>
                ))}
            </div>
        </div>
    );
};


const BmiCalculator = () => {
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);

    const { result: bmiResult, categoryIndex } = calculateBMI(height, weight);

    return (
        <section id="bmi-container">
            <div id="bmi-info">
                <InfoSection />
                <CalculatingArea
                    height={height}
                    weight={weight}
                    setHeight={setHeight}
                    setWeight={setWeight}
                />
            </div>
            <ImgArea
                categoryIndex={categoryIndex}
                bmiResult={bmiResult}
            />
        </section>
    );
};

export default BmiCalculator;
