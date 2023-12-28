
import MeetingsStore from '../../stores/MeetingsStore';
import Header from '../Header/Header';
import Footer from '../footer/Footer';
import ServicesTabs from '../servicesTabs/ServicesTabs';
import './Costumer.css'
import * as React from 'react';
import { useState } from 'react';
import BusinessDetails from '../businessDetails/BusinessDetails';

export default function Costumer() {
  return (
    <>
      <Header />
      <BusinessDetails />
           <div className='space'>our services</div>
      {<ServicesTabs/>}
      <Footer />
    </>
  );
}
