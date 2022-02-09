import React, { useState } from 'react';
import Footer from '../components/footer/footer';
import Navbar from '../components/navbar/navbar';
import { Routes } from '../routes/routes';

const Root = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 black min-h-screen">
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <Routes />
        <Footer />
      </div>
    </div>

  );
};

export default Root;