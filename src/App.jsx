import { Route, Routes } from "react-router";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Footer from "./components/Footer";
import CV from "./components/CV";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cv" element={<CV />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
