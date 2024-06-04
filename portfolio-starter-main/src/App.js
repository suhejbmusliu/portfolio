import React from 'react';
// components
import Banner from './components/Banner';

import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';


const App = () => {
  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Banner />
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
      
    </div>
  );
};

export default App;
