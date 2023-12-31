import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { observer } from 'mobx-react';
import GlobalStore from '../../stores/GlobalStore';

import BusineessStore from '../../stores/BusinessStore';
import './BusinessDetails.css'; 
import EditDetails from '../editDetails/EditDetails';
import EditIcon from '@mui/icons-material/Edit';
const BusinessDetails = observer(()=> {
  const [animate, setAnimate] = useState(false);
  const businessDetails = [
    { label: 'Business Name:', value: BusineessStore.business.name },
    { label: 'Address:', value: BusineessStore.business.address },
    { label: 'Email:', value: BusineessStore.business.email },
    { label: 'Phone:', value: BusineessStore.business.phone },
    { label: 'Owner:', value: BusineessStore.business.owner },
    { label: 'Description:', value: BusineessStore.business.description},
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
});

export default BusinessDetails;