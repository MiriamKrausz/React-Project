
import MeetingsStore from '../../stores/MeetingsStore';
import Header from '../Header/Header';
import Footer from '../footer/Footer';
import ServicesTabs from '../servicesTabs/ServicesTabs';
import './Costumer.css'
import * as React from 'react';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { useState } from 'react';
import BusinessDetails from '../businessDetails/BusinessDetails';

export default function Costumer() {
  return (
    <>
      <Header />
      <BusinessDetails />
           <div className='space'>Our services<br/><ArrowCircleDownIcon fontSize='large'/></div>
      {<ServicesTabs/>}
      <Footer />
    </>
  );
}
