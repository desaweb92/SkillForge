import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Services from './pages/Services';
import About from './pages/About';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import Faq from "./components/Faq";
import WhatsappChatbot from "./components/WhatsappChatbot";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/whatsapp" element={<WhatsappChatbot />} />
      </Routes>
    </Router>
  );
};

export default App;
