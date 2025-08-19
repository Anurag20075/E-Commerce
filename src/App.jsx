// import React from "react";
// import "./App.css";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import NavBar from "./Component/NavBar";
// import Home from "./Component/Home";
// import Footer from "./Component/Footer";
// // import HomePage from "./Component/HomePage";
// import Categories from "./Component/CategoryPAge";
// function App() {
//   return (
//     <BrowserRouter>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         {/* <Route path="/" element={<Categories />} /> */}
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;
import React from "react";
import { motion } from "framer-motion";
import Header from "./Component/Header";
import HeroSection from "./Component/HeroSection";
import FeaturedProducts from "./Component/FeaturedProducts";
import Categories from "./Component/Categories";
import PromotionalBanner from "./Component/PromotionalBanner";
import Footer from "./Component/Footer1";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <Categories />
        <PromotionalBanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
