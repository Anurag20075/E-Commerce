import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Component/NavBar";
import GamerHub from "./Component/HomePage";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<GamerHub />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
