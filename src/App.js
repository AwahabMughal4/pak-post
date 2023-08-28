import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Complaints from "./components/Complaints";

import './styles/App.css';
import './styles/StampsSlider.css';

import Services from "./components/Services";
import FAQs from "./components/FAQs";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/faqs" element={<FAQs/>}/>
        <Route path="/Online Complaints" element={<Complaints/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;