
// import { observable, action, computed, makeObservable } from 'mobx';
// const service={
//     id:'',
//     name:'',//לדוג: משכנתא למסורבים
//     description:'',//לדוג:קבלת הלוואת משכנתא עבור נכס שאנחנו רוצים לקנות הוא כבר חוויה לא פשוטה בפני עצמה, אבל מה קורה כשאנחנו מגיעים לבנק עם כל המסמכים שהפקנו, אחרי כל הבדיקות שעשינו ומגלים שהבנק פשוט מסרב לתת לנו משכנתא מבלי יכולת לערער על ההחלטה? דחייה של הבנק יכולה להיות חוויה לא נעימה בכלל
//     price:'',//לדוג:400 שח
//     imgService:'',
// }
//  class ServicesStore {
   
//     servicesList = [
//         {
//             id:'1',
//             name: 'New mortgage',
//             description: 'One of the biggest advantages of working with a mortgage consulting firm is that we have access to a wide variety of mortgage products and financial products in general, whether it is a bank or non-bank entities such as insurance companies. In other words it means we can help you find the lowest interest rates and the best terms for you.',
//             price: '300',
//             imgService: '../src/assets/images/123.webp'
//         },
//         {
//             id:'2',
//             name: 'Mortgage for the rejected',
//             description: 'Getting a mortgage loan for a property we want to buy is already a difficult experience in itself, but what happens when we arrive at the bank with all the documents we have produced, after all the tests we have done and discover that the bank simply refuses to give us a mortgage without being able to appeal the decision? Rejection by the bank can be an unpleasant experience at all',
//             price: '400',
//             imgService: '../src/assets/images/house-bills-elements-arrangement.jpg'

//         },
//         {
//             id:'3',
//             name: 'Mortgage cycle',
//             description: 'One of the biggest advantages of working with us is the large network we have created of banks and financial institutions. This means that we work with all banks and all other financing bodies in the country, without exception, and thus we can provide you with a variety of different solutions with different advantages.',
//             imgService: '../src/assets/images/Mortgage_thumbnail.jpg'

//         }
//     ]
//     constructor() {
//         makeObservable(this, {
//             servicesList: observable,
//             getServices: computed,

//         })
        

//     }

//     get getServices() {
//         return this.servicesList;
//     }
//     addService = async (newService) => {
//         const response = await fetch("http://localhost:8787/service", {
//             method: "POST",
//             body: JSON.stringify(newServiceDetails),
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         });
//         console.log(response.statusText)

//         if (response.status === 200) {
//             this.servicesList = ([...this.servicesList, newService])
//         }
//         Swal.fire({
//             title: "The service was successfully added!",
//             icon: "success"
//         });
//     }

// }
// export default new ServicesStore();


import { observable, action, computed, makeObservable } from 'mobx';
 class ServiceStore {
    name;
    description;
    price;
    imgService;
    servicesList = [
        {
            name: 'Counseling sessions and guidance',
            description: 'The purpose of the counseling and orientation meetings is to check with the applicant his desires and abilities and to build together with him a work plan to find the profession and employment suitable for him.',
            price: '300',
            imgService: '../src/assets/images/יעוץ.jpg'
        },
        {
            name: 'Workshops for the world of employment',
            description: 'The workshops give the participants background on the job market they are applying for, as well as useful tools for integrating into the market professionally and efficiently.',
            price: '900',
            imgService: '../src/assets/images/קורסים.jpg'
        },
        {
            name: 'diagnoses',
            description: 'The occupational diagnosis is intended for applicants who are debating about a suitable field of occupation or a suitable profession, and wish to define for themselves an occupational path adapted to their individual abilities and needs.',
            price: '250',
            imgService: '../src/assets/images/אבחונים.jpg'

        },
        {
            name: 'Supplementary education',
            description: 'The courses deal with applied computer studies, English, mathematics, and Hebrew. Their goal is to expand the basic knowledge and the tools of use for the purpose of acquiring employment and a profession.',
            price: '700',
            imgService: '../src/assets/images/השכלה.jpg'

        }

    ];
    constructor() {
        makeObservable(this, {
            servicesList: observable,
           // getServices: computed,
            addService: action
        });
    }

    // get getServices() {
    //     return this.servicesList;
    // }
    addService = async(service) => {
        const response = await fetch("http://localhost:8787/service", {// כתיבה עם fetch
            method: "POST",
            body: JSON.stringify({//הופך את האוביקט לstring וככה האוביקט נשלח נכון בfetch
              service// ==={name:name,password:password}
            }),
            headers: {
                "Content-Type": "application/json",//כותרת שתשלח כחלק מהרקווסט ותגדיר שהמשתנים נשלחים וחוזרים במבנה של json
            },
        });
        console.log(response.statusText)

        if (response.status === 200) {
            console.log(success)
            this.servicesList = [...servicesList, service];
        }
        else{
            console.log(error)
        }
    }
    
}
export default new ServiceStore();


// export const servicesList = [
//            {
//             name: 'Counseling sessions and guidance',
//             description: 'The purpose of the counseling and orientation meetings is to check with the applicant his desires and abilities and to build together with him a work plan to find the profession and employment suitable for him.',
//             price: '300',
//             imgService: '../src/assets/images/יעוץ והכוון.png'
//         },
//         {
//             name: 'Workshops for the world of employment',
//             description: 'The workshops give the participants background on the job market they are applying for, as well as useful tools for integrating into the market professionally and efficiently.',
//             price: '900',
//             imgService: '../src/assets/images/סדנאות.png'

//         },
//         {
//             name: 'diagnoses',
//             description: 'The occupational diagnosis is intended for applicants who are debating about a suitable field of occupation or a suitable profession, and wish to define for themselves an occupational path adapted to their individual abilities and needs.',
//             price: '250',
//             imgService: '../src/assets/images/אבחון.png'

//         },
//         {
//             name: 'Supplementary education',
//             description: 'The courses deal with applied computer studies, English, mathematics, and Hebrew. Their goal is to expand the basic knowledge and the tools of use for the purpose of acquiring employment and a profession.',
//             price: '700',
//             imgService: '../src/assets/images/השלמת השכלה.png'

//         }

// ];

// export class service {

//     name;
//     description;
//     price;
//     imgService;

//     get getServicesList() {
//         return this.servicesList;
//       }
// }

// const addService = (service) => {
//     servicesList = [...servicesList, service];
// }

