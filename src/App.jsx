import React, { useEffect, useState } from 'react';
import Navbar from './pages/home/navbar/Navbar';
import Banner from './pages/home/banner/Banner';
import About from './pages/home/about/About';
import Skills from './pages/home/skills/Skills';
import Projects from './pages/home/projects/Projects';
import Contact from './pages/home/contact/Contact';
import Footer from './pages/home/footer/Footer';
import Aos from "aos";
import Loader from './components/Loader';

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 3000);

      return () => clearTimeout(timeout);
    }, []);
  
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <>
          <Navbar />
          <Banner />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;