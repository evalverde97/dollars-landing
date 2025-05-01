import React from 'react';
import './index.css';
import './styles/Header.css';
import './styles/Hero.css';
import './styles/Services.css';
import './styles/Footer.css';
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Footer />
    </>
  );
}

export default App;