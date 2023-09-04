import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './styles/App.css';
import './styles/StampsSlider.css';

import ScrollToTop from "./components/Extras/ScrollToTop"
import Header from "./components/Header";

import Complaint from "./components/Complaint";
import LocateUs from "./components/LocatePostOffices";

import Home from "./components/Home";
import TrackingData from "./components/HomeSubcomponents/TrackingData";
import CalculatePostage from "./components/CalculatePostage";
import PostCodes from "./components/PostCodes";

import AboutUs from "./components/AboutUs";
import DomesticMail from "./components/DomesticMail";
import InternationalMail from "./components/InternationalMail";
import ExpressServices from "./components/ExpressServices";
import Track from "./components/Track";
import NewsTenders from "./components/NewsTenders";
import ContactUs from "./components/ContactUs";

import Careers from "./components/Careers";
import OfficialEmails from "./components/OfficialEmails";
import FAQs from "./components/FAQs";
import Privacy from "./components/Privacy";
import RestHouses from "./components/RestHouses";
import Manuals from "./components/Queries&Info";
import Suggestions from "./components/Suggestions";

import Footer from "./components/Footer";
import Developers from "./components/Extras/Developers";

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Header/>
      <Routes>
        <Route path="/complaints" element={<Complaint/>}/>
        <Route path="/locate" element={<LocateUs/>}/>

        <Route path="/" exact element={<Home/>}/>
        <Route path="/tracking/:articleId" element={<TrackingData/>}/>
        <Route path="/postage" element={<CalculatePostage/>}/>
        <Route path="/postcode" element={<PostCodes/>}/>

        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/domesticservices" element={<DomesticMail/>}/>
        <Route path="/internationalservices" element={<InternationalMail/>}/>
        <Route path="/expressservices" element={<ExpressServices/>}/>
        <Route path="/track" element={<Track/>}/>
        <Route path="/news" element={<NewsTenders/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        
        <Route path="/careers" element={<Careers/>}/>
        <Route path="/emails" element={<OfficialEmails/>}/>
        <Route path="/faqs" element={<FAQs/>}/>
        <Route path="/privacy" element={<Privacy/>}/>
        <Route path="/resthouses" element={<RestHouses/>}/>
        <Route path="/manuals" element={<Manuals/>}/>
        <Route path="/suggestions" element={<Suggestions/>}/>
        
        <Route path="/devs" element={<Developers/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;