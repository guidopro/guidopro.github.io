import { Route, Routes } from "react-router";
import Nav from "./components/Nav";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
