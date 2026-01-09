import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { Tips } from "./components/Tips";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/"  />
        <Route path="/services" element={<div style={{ padding: "120px 40px" }}>Services page</div>} />
       
       
        <Route path="/contact" element={<div style={{ padding: "120px 40px" }}>Contact page</div>} />
      </Routes>
      <Hero />
      <Tips />
      <Footer />
    </>
  );
}

export default App;
