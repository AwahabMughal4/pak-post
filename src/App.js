import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

import './styles/App.css';
import './styles/StampsSlider.css';

import Domestic_Mail from "./components/Domestic_Mail";
import International_Mail from "./components/International_Mail";
import Express_Services from "./components/Express_Services";
import FAQs from "./components/FAQs";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/domesticservices" element={<Domestic_Mail/>}/>
        <Route path="/internationalservices" element={<International_Mail/>}/>
        <Route path="/expressservices" element={<Express_Services/>}/>
        <Route path="/faqs" element={<FAQs/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;