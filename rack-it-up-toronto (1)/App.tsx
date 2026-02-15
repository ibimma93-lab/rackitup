import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans selection:bg-brand-green selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;