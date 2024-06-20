import React from 'react';
import Hero from './components/Hero';
import Items from './components/Items';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const HomePage: React.FC = () => {
  return (
    <>
    <div className='main'>
      <Hero />
      <Items />
      <CallToAction />
      <Footer />
      </div>
    </>
  );
};

export default HomePage;
