import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Component/NavBar";

import Footer from "./Component/Footer";
import Homepage from "./Component/Homepage";
// import Categories from "./Component/CategoryPAge";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/" element={<Categories />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
