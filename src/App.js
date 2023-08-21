import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

import './styles/App.css';
import './styles/StampsSlider.css';

import Services from "./components/Services";
import FAQs from "./components/FAQs";
import NewsTenders from "./components/NewsTenders";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/news" element={<NewsTenders/>}/>
        <Route path="/faqs" element={<FAQs/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;