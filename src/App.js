import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './styles/App.css';
import './styles/StampsSlider.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import PostCodes from "./components/PostCodes";

import DomesticMail from "./components/DomesticMail";
import InternationalMail from "./components/InternationalMail";
import ExpressServices from "./components/ExpressServices";
import NewsTenders from "./components/NewsTenders";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import FAQs from "./components/FAQs";
import Careers from "./components/Careers";
import Complaints from "./components/Complaints";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/post-code" element={<PostCodes/>}/>
        <Route path="/domesticservices" element={<DomesticMail/>}/>
        <Route path="/internationalservices" element={<InternationalMail/>}/>
        <Route path="/expressservices" element={<ExpressServices/>}/>
        <Route path="/news" element={<NewsTenders/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/faqs" element={<FAQs/>}/>
        <Route path="/careers" element={<Careers/>}/>
        <Route path="/complaints" element={<Complaints/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;