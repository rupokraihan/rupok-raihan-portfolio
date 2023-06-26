import React from 'react';
import Navbar from './pages/home/navbar/Navbar';
import Banner from './pages/home/banner/Banner';
import About from './pages/home/about/About';

const App = () => {
  return <div>
    <Navbar />
    <Banner />
    <About/>
  </div>;
};

export default App;