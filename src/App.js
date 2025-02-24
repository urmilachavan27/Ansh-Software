import { Route, Routes } from "react-router-dom";
import "../src/styles/styles.css";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Feature from "./pages/Feature";
import Pricing from "./pages/Pricing"
import LandingPageMainPage from "./Softwarecomponents/Landing Pages/LandingPageMainPage"
import Hero from "./components/Hero"
function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Footer /> */}
      <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}
        {/* <Route exact path="/" element={<LandingPageMainPage />} /> */}
        <Route exact path="/" element={<LandingPageMainPage />} />
        {/* <Route exact path="/hero" element={<Hero/>}/> */}

        <Route path="/home" element={<Home />} />
        <Route path="/features" element={<Feature />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </>
  );
}

export default App;
