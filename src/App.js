import React from 'react';
import Featured from './component/Featured';
import Footer from './component/Footer';
import Hero from './component/Hero';
import Navbars from './component/Navbars';
import Signup from './component/Signup';

function App() {
  return (
    <>
      <Navbars />
      <Hero />
      <Featured />
      <Signup />
      <Footer />
    </>
  );
}

export default App;