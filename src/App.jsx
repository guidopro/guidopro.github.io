import { Route, Routes } from "react-router";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Footer from "./components/Footer";
import CV from "./components/CV";
import NCNews from "./components/NCNews";
import ScrollToTop from "./utilities/PageScrollToTop";
import ScrollToTopButton from "./utilities/ScrollToTopButton";

function App() {
  return (
    <>
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route index element={<Home />} />
        <Route path="nc-news" element={<NCNews />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cv" element={<CV />} />
      </Routes>
      {/* <ScrollToTopButton /> */}
      <Footer />
    </>
  );
}

export default App;
