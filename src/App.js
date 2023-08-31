import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import './styles/App.css';
import './styles/StampsSlider.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import TrackingData from "./components/HomeSubcomponents/TrackingData";

import DomesticMail from "./components/DomesticMail";
import InternationalMail from "./components/InternationalMail";
import ExpressServices from "./components/ExpressServices";
import NewsTenders from "./components/NewsTenders";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import FAQs from "./components/FAQs";
import Careers from "./components/Careers";
import Complaints from "./components/Complaints";
import Complaint from "./components/Complaint";
import RestHouses from "./components/RestHouses";
import PostalCodeTable from "./components/PostalCodeTable";
import LocateUs from "./components/LocatePostOffices";
import Privacy from "./components/Privacy";
import Manuals from "./components/Queries&Info";
import CalculatePostage from "./components/CalculatePostage";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/tracking/:articleId" element={<TrackingData/>}/>
        <Route path="/domesticservices" element={<DomesticMail/>}/>
        <Route path="/internationalservices" element={<InternationalMail/>}/>
        <Route path="/expressservices" element={<ExpressServices/>}/>
        <Route path="/news" element={<NewsTenders/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/faqs" element={<FAQs/>}/>
        <Route path="/careers" element={<Careers/>}/>
        <Route path="/complaints" element={<Complaints/>}/>
        <Route path="/customersupport" element={<Complaint/>}/>
        <Route path="/guesthouses" element={<RestHouses/>}/>
        <Route path="/postcode" element={<PostalCodeTable/>}/>
        <Route path="/locateus" element={<LocateUs/>}/>
        <Route path="/privacy" element={<Privacy/>}/>
        <Route path="/manuals" element={<Manuals/>}/>
        <Route path="/postage" element={<CalculatePostage/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;