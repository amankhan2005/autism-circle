import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import FAQ from "../pages/FAQ";
import Contact from "../pages/Contact";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

// ✅ Scroll components
import ScrollToTop from "../components/ScrollToTop";
import RouteScrollTop from "../components/RouteScrollTop";

const AppRoutes = () => {
  return (
    <BrowserRouter>

      {/* ✅ Global scroll handlers */}
      <ScrollToTop />
      <RouteScrollTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default AppRoutes;