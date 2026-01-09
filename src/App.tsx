import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Services } from "./components/Services";

function App() {
  return (
    <>
      <Header />
      <Services/>

      <Routes>
        <Route path="/" />
        <Route path="/services" element={<div style={{ padding: "120px 40px" }}>Services page</div>} />
       
       
        <Route path="/contact" element={<div style={{ padding: "120px 40px" }}>Contact page</div>} />
      </Routes>
      
    </>
  );
}

export default App;
