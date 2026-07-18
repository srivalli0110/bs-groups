```jsx
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

// Service Pages
import Loans from "./pages/Loans";
import Solar from "./pages/Solar";
import Insurance from "./pages/Insurance";
import Farmhouse from "./pages/Farmhouse";
import OpenPlots from "./pages/OpenPlots";
import Tensile from "./pages/Tensile";

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

        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Service Pages */}
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
```
