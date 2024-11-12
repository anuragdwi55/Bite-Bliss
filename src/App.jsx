import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Success from "./pages/Success";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
<<<<<<< HEAD
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<Error />} />
=======
        <Route path="/success" element={<Success/>} />
        <Route path="*" element={<Error/>} />
        
>>>>>>> 9a53048f052128ae592ed32e1a20031ae3b4320f
      </Routes>
    </BrowserRouter>
  );
};

export default App;
