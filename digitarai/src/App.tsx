import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Solutions from "./pages/Solutions";
import HowWeHelp from "./pages/HowWeHelp";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";

// Component to reset scroll on route switches
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  // Add the redirect check right here before the application mounts
  if (window.location.hostname === 'digitarai.pages.dev') {
    window.location.replace('https://digitarai.com' + window.location.pathname + window.location.search);
  }
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white">
        {/* Sticky navbar */}
        <Navbar />

        {/* Primary Page Content Wrapper */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Master services list & subroutes */}
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceSlug" element={<Services />} />
            {/* Solutions page */}
            <Route path="/solutions" element={<Solutions />} />
            {/* Process page */}
            <Route path="/how-we-help" element={<HowWeHelp />} />
            {/* About Us section page */}
            <Route path="/about-us" element={<About />} />
            {/* Blogs index & detailed template */}
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:blogSlug" element={<Blogs />} />
            {/* Contact map page */}
            <Route path="/contact" element={<Contact />} />
            {/* Fallback route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Enterprise global footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
