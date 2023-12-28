// import { observable, action, computed, makeObservable } from 'mobx';

// export class BusinessStore {
//   businessDetails = {
//     name: "save-mortgage and finance consulting",
//     address: "Derech Bar Yehuda 52, Nesher",
//     email: "info@save.org.il",
//     phone: "0723326584",
//     owner: "Yron Katz",
//     description: "We offer a wide variety of mortgage options designed to meet the needs of home buyers and property investors alike. Our team of experts works in cooperation with all banks without exception and ensures you the best interest rates and terms you can ask for.",
//     logo: '../src/assets/images/save_logo.png'
//   };

//   constructor() {
//     makeObservable(this, {
//       businessDetails: observable,
//       saveChanges: action,
//       getBusinessDetails: computed,
//     });
//   }

//   saveChanges(data) {
//     console.log("try to save");
//     this.businessDetails.name = data.name;
//     this.businessDetails.address = data.address;
//     this.businessDetails.email = data.email;
//     this.businessDetails.phone = data.phone;
//     this.businessDetails.owner = data.owner;
//     this.businessDetails.description = data.description;
//   }

//   get getBusinessDetails() {
//     return this.businessDetails;
//   }
// }

// export default new BusinessStore();
// import { observable, action, computed, makeObservable } from 'mobx';

// export class BusinessStore {
//   businessDetails = {
//     id:'0',
//     name: "מרכז כיוון – מרכז הכוון תעסוקתי לציבור החרדי בירושלים",
//     address: "רח' הצבי 15 ירושלים (בנין בזק)",
//     email: "kivun52@gmail.com",
//     phone: "02-6456222",
//     owner: "Dan Levi",
//     description: "",
//     logo: '../../assets/images/לוגו-כיוון-שקוף.png'
//   };

//   constructor() {
//     makeObservable(this, {
//       businessDetails: observable,
//       saveChanges: action,
//       getBusinessDetails: computed,
//     });
//   }

//   saveChanges(data) {
//     console.log("try to save");
//     this.businessDetails.name = data.name;
//     this.businessDetails.address = data.address;
//     this.businessDetails.email = data.email;
//     this.businessDetails.phone = data.phone;
//     this.businessDetails.owner = data.owner;
//     this.businessDetails.description = data.description;
//   }

//   get getBusinessDetails() {
//     return this.businessDetails;
//   }
// }

// export default new BusinessStore();





import { observable, action, computed, makeObservable } from 'mobx';
class BussinessDetails {
  details = {
    id: '1',
    name: "מרכז כיוון – מרכז הכוון תעסוקתי לציבור החרדי בירושלים",
    address: "רח' הצבי 15 ירושלים (בנין בזק)",
    email: "kivun52@gmail.com",
    phone: "02-6456222",
    owner: "Dan Levi",
    description: "The 'Direction' center was established in 2014 in cooperation with the Ministry of Economy and the Jerusalem Municipality.",
    logo: '../../assets/images/לוגו-כיוון-שקוף.png'
  };
constructor(){
  makeObservable(this, {
    details: observable,
    bussiness: computed,
    updateBussiness: action,
    createBussiness: action
  });
}

createBussiness() {
  fetch('http://localhost:8787/businessData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bussiness)
  }).then(response => response.json()).then(data => {
    console.log(data);
    this.details = data;

  }).catch(err => {
    console.log(err);
  });
}  

    get bussiness() {
  return this.details;
}

updateBussiness(bussiness) {
  fetch('http://localhost:8787/businessData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bussiness)
  }).then(response => response.json()).then(data => {
    console.log(data);
    this.details = data;

  }).catch(err => {
    console.log(err);
  });
}


}

export default new BussinessDetails();

