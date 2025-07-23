import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Component/Header";
// import NavBar from "./Component/NavBar";
function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <NavBar /> */}
      <Routes>
        {/* <Route path="/" element={<div>Home Page</div>} /> */}
        {/* <Route path="/about" element={<div>About Page</div>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
