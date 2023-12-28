// import { observable, computed, action, makeObservable, runInAction } from 'mobx';
// import { observer } from 'mobx-react';
// const meeting = {
//     serviceName: '',
//     serviceDescription: '',
//     servicePrice: '',
//     dateTime: '',
//     clientName: '',
//     clientPhone: '',
//     clientEmail: ''
// }
// class MeetingsStore {

//     data = [{serviceName:'demo',servicePrice:'123456'}];

//     constructor() {
//         makeObservable({
//             data: observable,
//             getMeetings: computed,
//             addMeeting: action,

//         })
//     }
//     get getMeetings() {
//         return this.data;
//     }
//     addMeeting(meeting) {
        //     fetch("http://localhost:8787/appointment", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify(meeting),
        //     })
        //         .then((response) => {
        //             if (response.status === 200) {
        //                 this.data.push(meeting);
        //                 console.log("Appointment added successfully!");
        //             } else {
        //                 console.log("Appointment is not available!");
        //             }
        //         })
        //         .catch((error) => {
        //             console.error("Error adding appointment:", error);
        //         });

//         this.data = [...this.data, meeting]

//         console.log("from store:"+meeting.clientName+" "+meeting.serviceName+" "+meeting.clientEmail +" "+meeting.serviceName)
//     }


// }


// export default new MeetingsStore();
import {observable, computed, action, makeObservable, } from 'mobx';

class Meetings {
    meetingList = [];
    constructor(){
        makeObservable(this, {
            meetingList: observable,
            getMeetings: computed,
            addMeeting: action,
            deleteMeeting: action,
            updateMeeting: action
        });  
        this.initData();
    }

    initData(){
        fetch('http://localhost:8787/appointments').then(response => response.json()).then(data => {
            this.meetingList = data;       
        }); 
    }

    addMeeting(meeting) {
        fetch('http://localhost:8787/appointment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(meeting)
        }).then(response => response.json()).then(data => {
            console.log(data);
            this.meetingList.push(data);
        }).catch(err => {
            console.log(err);
        });
    }
    
    get getMeetings() {
        
        return this.meetingList;
    }   
    deleteMeeting(id) {
        const index = this.meetingList.findIndex(meeting => meeting.id === id);
        this.meetingList = this.meetingList.splice(index, 1);
    }   

    updateMeeting(id, meeting) {
        const index = this.meetingList.findIndex(meeting => meeting.id === id);
        this.meetingList[index] = meeting;
    }
}

export default new Meetings();