import { Routes,Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Services from './components/Services'
import Navbar from "./components/Navbar"

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Services />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
     
    </div>
  )
}

export default App