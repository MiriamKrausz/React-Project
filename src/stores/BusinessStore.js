



import { observable, action, computed, makeObservable } from 'mobx';
import React, { useState, useEffect } from 'react';



class BusinessDetails {
  details = {
    // id: '1',
    name: "Orientation Center - the occupational orientation center for the ultra-orthodox public in Jerusalem",
    address: "15 Hzvi St. Jerusalem",
    email: "kivun52@gmail.com",
    phone: "02-6456222",
    owner: "Dan Levi",
    description: "The 'Direction' center was established in 2014 in cooperation with the Ministry of Economy and the Jerusalem Municipality.",
    logo: '../../assets/images/logo-direction-transparent.png'
  };
  constructor() {
    makeObservable(this, {
      details: observable,
      business: computed,
      updateBusiness: action,
      // createBusiness: action
    });
  }

  // createBusiness() {
  //   fetch('http://localhost:8787/businessData', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(this.details)
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data);
  //       this.details = data;
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  get business() {
    return this.details;
  }

  updateBusiness(business) {
    fetch('http://localhost:8787/businessData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(business)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.details = data;
      })
      .catch(err => {
        console.log(err);
      });
  }
}

export default new BusinessDetails();


