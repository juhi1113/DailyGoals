import './App.css';
import Header from './Components/Header';
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Footer from './Components/Footer';
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    
<Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

    </Routes>
    <Footer />
   </Router>
  );
}

export default App;
