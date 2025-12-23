import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Info from './components/Info/Info'
import OurClasses from './components/OurClasses/OurClasses'
import BmiCalculator from './components/BmiCalculator/BmiCalculator'
import BestTrainers from './components/BestTrainers/BestTrainers'
import Purchase from './components/Purchase/Purchase'
import Review from './components/Review/Review'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Info />
      <OurClasses />
      <BmiCalculator />
      <BestTrainers />
      <Purchase />
      <Review />
      <Contact />
      <Footer />
    </>
  )
}

export default App