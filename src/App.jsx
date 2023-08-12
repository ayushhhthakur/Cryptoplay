import Home from './Home'
import About from './About'
import Contact from './Contact'
import Creators from './Creators'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
  <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/creators" element={<Creators />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
  <Footer />
  </BrowserRouter>
  );
}

export default App