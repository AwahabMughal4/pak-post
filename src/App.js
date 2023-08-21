import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

import './styles/App.css';
import './styles/StampsSlider.css';

import Services from "./components/Services";
import News from "./components/News";
import FAQs from "./components/FAQs";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/faqs" element={<FAQs/>}/>
        <Route path="/about" element={<AboutUs/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;