import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import DiwaliLanding from "./Components/DiwaliLanding/DiwaliLanding";
import Giveaway from "./Components/Giveaway/Giveaway";

const App = () => {
  const [playState, setPlayState] = useState(false);
  const [showMain, setShowMain] = useState(false);

  return (
    <div>
      {!showMain ? (
        <DiwaliLanding onEnter={() => setShowMain(true)} />
      ) : (
        <Router>
          <Navbar />
          <Hero />
          <div className="container">
            <Title subtitle="Give Away" title="Your Dream Prize Awaits" />
            <Giveaway />
            <Title subtitle="ABOUT US" title="Learn More About Us" />
            <About />
            <Title subtitle="CONTACT US" title="Get in Touch" />
            <Contact />
            <Footer />
          </div>
        </Router>
      )}
    </div>
  );
};

export default App;
