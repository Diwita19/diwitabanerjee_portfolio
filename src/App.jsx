import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import PortfolioTabs from './components/PortfolioTabs'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />

      <div className="hero-dark-bg text-white">
        <Hero />
      </div>

      <div className="holo-bg">
        <About />
        <Experience />
        <PortfolioTabs />
        <Education />
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App