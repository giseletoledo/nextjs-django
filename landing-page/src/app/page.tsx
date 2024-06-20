import React from 'react';
import Hero from './components/Hero';
import Items from './components/Items';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Items />
      <CallToAction />
      <Footer />
    </>
  );
};

export default HomePage;
