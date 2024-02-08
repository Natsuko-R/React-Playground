import React from 'react';
import Header from '../components/Header/Header';
import Dashboard from './Dashboard/Dashboard';
import Footer from '../components/Footer';

function Main() {

  return (
    <div className='min-h-screen flex flex-col justify-between'>
      <div className=''>
        <Header />
      </div>
      <div className=''>
        <Dashboard />
      </div>
      <div className=''>
        <Footer />
      </div>
    </div>
  );
}

export default Main;