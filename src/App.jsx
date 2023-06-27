import React from 'react';
import Navbar from './pages/home/navbar/Navbar';
import Banner from './pages/home/banner/Banner';
import About from './pages/home/about/About';
import Skills from './pages/home/skills/Skills';
import Projects from './pages/home/projects/Projects';
import Contact from './pages/home/contact/Contact';

const App = () => {
  return <div>
    <Navbar />
    <Banner />
    <About />
    <Skills />
    <Projects />
    <Contact/>
  </div>;
};

export default App;