import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home"
import About from './Pages/Aboutus';
import Contact from './Pages/Contact';
import Signup from "./Pages/Singup"
import Signin from './Pages/Signin';
import ServiceMain from './Pages/ServiceMain';
import AboutHome from './Components/AboutHome';
import Accordion from './Components/Acordian';
import Footer from './Components/Footer';
import Herosection from './Components/Herosection';

const AllRoutes = () => {
  return (
    <Routes>
    {/* Define your routes using the Route component */}
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contactus" element={<Contact/>} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/sign" element={<Signin/>} />
    <Route path="/service" element={<ServiceMain/>} />
    <Route path="/abouthome" element={<AboutHome/>} />
    <Route path="/acordain" element={<Accordion/>} />
    <Route path="/footer" element={<Footer/>} />
    <Route path="/herosection" element={<Herosection/>} />

  </Routes>
  )
}

export default AllRoutes