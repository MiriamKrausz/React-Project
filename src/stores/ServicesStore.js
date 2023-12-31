
import { observable, action, computed, makeObservable } from 'mobx';
class ServiceStore {
    constructor() {
        makeObservable(this, {
            // countId: observable,
            // increaseCountId: action,
            getServices: action,
            serviceArr: observable,
            addService: action,
        })
    }
    serviceArr = []
    service = {
        id: '1',
        name: 'Counseling sessions and guidance',
        description: 'The purpose of the counseling and orientation meetings is to check with the applicant his desires and abilities and to build together with him a work plan to find the profession and employment suitable for him.',
        price: '300',
        duration:'60',
        imgService: '../src/assets/images/יעוץ.jpg'
    }
    getServices=async()=>{
        // console.log("getServices")
        const response=await fetch("http://localhost:8787/service",{
            method:"post",
            body:JSON.stringify(this.service),
            headers: {
                "Content-Type": "application/json"
            },
        });
        //עדכון למערך שיכיל לפחות שירות אחד
        const response1=await fetch("http://localhost:8787/services",{
            headers: {
                "Content-Type": "application/json"
            },  
        });
        this.serviceArr=await response1.json();//ממלא את המערך המקומי כל עוד יש תגובה לבקשה (כל עוד יש שירותים)
    }
    addService=async(service)=>{
        console.log("addserv")
        console.log("service",service);
        console.log("service json",JSON.stringify(service));
        const response=await fetch("http://localhost:8787/service",{
            method: "POST",
            body: JSON.stringify(service),
            headers: {
              "Content-Type": "application/json",
            },  
        });
        console.log(response.status)
        this.getServices();//כדי לעדכן את המערך המקומי
    }
}
export default new ServiceStore();



