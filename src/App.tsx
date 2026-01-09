import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Services } from "./components/Services";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { Tips } from "./components/Tips";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>

      <Footer />
      
      
      
      
      
    </>
  );
}

export default App;