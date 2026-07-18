import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import WhyChooseUs from "./sections/WhyChooseUs";
import Stats from "./sections/Stats";
import ApplyNow from "./sections/ApplyNow";
import Contact from "./sections/Contact";
import Location from "./sections/Location";
import Footer from "./sections/Footer";
import FloatingButtons from "./components/FloatingButtons";

import Loans from "./pages/loans";
import Solar from "./pages/solar";
import Insurance from "./pages/insurance";
import Farmhouse from "./pages/farmhouse";
import OpenPlots from "./pages/openplots";
import Tensile from "./pages/tensile";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Stats />
      <ApplyNow />
      <Contact />
      <Location />
      <Footer />
      <FloatingButtons />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/services/loans" element={<Loans />} />
        <Route path="/services/solar" element={<Solar />} />
        <Route path="/services/insurance" element={<Insurance />} />
        <Route path="/services/farmhouse" element={<Farmhouse />} />
        <Route path="/services/open-plots" element={<OpenPlots />} />
        <Route path="/services/tensile" element={<Tensile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;