import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from './container/Home/Home'
import AboutUs from './container/AboutUs/AboutUs';
import Services from './container/Services/Services';
import News from './container/News/News';
import Events from './container/Events/Events';
import Blog from './container/Blog/Blog';
import FAQs from './container/FAQs/FAQs';

import Contact from './container/Contact/Contact';
import "./App.css";

const App = () => (
  <div>
    <Navbar />
    <Home/>
    <AboutUs/>
    <Services />
    <Events />
    <News/>
    <Blog/>
    <FAQs/>
    <Contact/>
  </div>
);

export default App;
