import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../components/Pages/Home/Home';
import Footer from '../components/shared/Footer/Footer';
import Navbar from '../components/shared/Navbar/Navbar';

const Main = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
};

export default Main;