import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import './styles/App.css';
import './styles/StampsSlider.css';



import Domestic_Mail from "./components/Domestic_Mail";
import International_Mail from "./components/International_Mail";
import Express_Services from "./components/Express_Services";
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
        <Route path="/domesticservices" element={<Domestic_Mail/>}/>
        <Route path="/internationalservices" element={<International_Mail/>}/>
        <Route path="/expressservices" element={<Express_Services/>}/>
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