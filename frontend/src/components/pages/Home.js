import React from 'react';
import Banking from '../main/Banking';
import ChooseEasy from '../main/ChooseEasy';
import Latest from '../main/Latest';
import Footer from '../footer/Footer';

const Home = () => {
  return (
    <>
      <main>
        <Banking />
        <ChooseEasy />
        <Latest />
      </main>
      <Footer />
    </>
  );
};

export default Home;
