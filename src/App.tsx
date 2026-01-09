import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<div style={{ padding: "120px 40px" }}>Home page (vide pour l’instant)</div>} />
        <Route path="/services" element={<div style={{ padding: "120px 40px" }}>Services page</div>} />
       
       
        <Route path="/contact" element={<div style={{ padding: "120px 40px" }}>Contact page</div>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
