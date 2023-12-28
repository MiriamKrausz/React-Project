import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { Observer } from 'mobx-react';
import GlobalStore from '../../stores/GlobalStore';

import BusineessStore from '../../stores/BusinessStore';
import './BusinessDetails.css'; // Assuming you have a separate CSS file for styling
import EditDetails from '../editDetails/EditDetails';
import EditIcon from '@mui/icons-material/Edit';
const BusinessDetails = (observer) => {
  const [animate, setAnimate] = useState(false);
  const businessDetails = [
    { label: 'Business Name:', value: BusineessStore.details.name },
    { label: 'Address:', value: BusineessStore.details.address },
    { label: 'Email:', value: BusineessStore.details.email },
    { label: 'Phone:', value: BusineessStore.details.phone },
    { label: 'Owner:', value: BusineessStore.details.owner },
    { label: 'Description:', value: BusineessStore.details.description},
  ];
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className={`business-container`}>
      <div className={`business-details ${animate ? 'animate' : ''}`}>
        {businessDetails.map((detail, index) => (
          <div
            key={index}
            className="business-detail"
            style={{ animationDelay: `${index * 1.2}s` }}
          >
            <span className="label">{detail.label}</span>
            <span className="value">{detail.value}</span>
          </div>
        ))}

        {GlobalStore.isLogin && (
          <>
          <div className="button-container">
            {/* <Button variant="outlined" className="bottom-left-button" startIcon={<EditIcon />}>
              edit
            </Button> */}
            {<EditDetails/>}
          </div>
          </>
        )}
       
      </div>
    </div>
  );
};

export default BusinessDetails;