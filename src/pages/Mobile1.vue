<template>
    <div class="body">
        <div class="upper">
            <div class="left">
                <h3>A</h3>
            </div>
            <div class="right">
                <h3>B</h3>
            </div>
        </div>
        <div class="window">
            <div class="a">
                Window A
            </div>
            <div class="b">
                Window B
            </div>
        </div>
        <div class="personalInformation">
            <h4>PERSONAL INFORMATION</h4>
        </div>
        <div class="fields" >
            <label>ID No.</label><br>
            <input type="number" required="required" v-model="id">
        </div>
        <div class="fields">
            <label>First Name</label><br>
            <input type="text" required="required" v-model="fname">
        </div>
        <div class="fields">
            <label>Middle Name</label><br>
            <input type="text" v-model="mname">
        </div>
        <div class="fields">
            <label>Last Name</label><br>
            <input type="text" required="required" v-model="lname">
        </div>
        <div class="educational">
            <h4>EDUCATIONAL INFORMATION</h4>
        </div>
        <div class="fields">
            <label>Educational Level</label><br>
            <select v-model="edlevel">
                <option value="Primary">Primary</option>
                <option value="Secondary">Secondary</option>
            </select>
        </div>
        <div class="fields">
            <label>Grade Level</label><br>
            <select v-model="grade">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
            </select>
        </div>
        <div class="payment">
            <h4>PAYMENT INFORMATION</h4>
        </div>
        <div class="fields" >
            <label>Tuition Fee</label><br>
            <input type="number" required="required" v-model="tint">
        </div>
        <div class="fields" >
            <label>Miscellaneus Fee</label><br>
            <input type="number" v-model="tmisc">
        </div>
        <div class="fields" >
            
        </div>
        <div class="buttons">
            <button>Cancel</button>
            <a href="/Mobile2"><button >Done</button></a> 
        </div>
    </div>
  </template>
  
  <script>
  
import { push } from "firebase/database";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import {
  getDatabase,
  ref,
  child,
  get,
  update,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";


const firebaseConfig = {
    apiKey: "AIzaSyDtsKwx7mcaSnoPnZ2hlcolB8qluY69LMQ",
    authDomain: "fir-68a5f.firebaseapp.com",
    databaseURL: "https://fir-68a5f-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fir-68a5f",
    storageBucket: "fir-68a5f.appspot.com",
    messagingSenderId: "939974599498",
    appId: "1:939974599498:web:40392f504dd093d1c257b3",
}

const app = initializeApp(firebaseConfig);

const db = getDatabase();

export default {
  data() {
    return {
      id: null,
      email: ''
    }
  },
  created (){
    const dbRef = ref(db);



  },
  methods: {
    saveData() {
      const dbRef = ref(db, 'Counter/Counter');
      const dbRefcustomers = ref(db);
      let counterVariable;
      get(dbRef).then((snapshot) => {
        
        counterVariable = Number(snapshot.val());
          const userId = `customers/${counterVariable}`;

          const dbRefcustomers = ref(db, userId);
          const data = {
            id: this.id,
            fname: this.fname,
            mname: this.mname,
            mname: this.mname,
            tint: this.tint,
            tmisc: this.tmisc,







          }
          update(dbRefcustomers, { id: this.id });
          update(dbRefcustomers, { fname: this.fname });
          update(dbRefcustomers, { mname: this.mname });
          update(dbRefcustomers, { lname: this.lname });
          update(dbRefcustomers, { tint: this.tint });
          update(dbRefcustomers, { tmisc: this.tmisc });
      
    });

 


    }
  }
}


  </script>
  
  <style scoped>

    .body {
      background-color: #D9D9D9;
      display: flex;
      flex-wrap: wrap; /* Allows elements to wrap to next line on small screens */
      justify-content: center; /* Centers elements horizontally */
      flex-direction: column;
      box-sizing: border-box;
    }
    button{
        height: 50px;
        width: 120px;
        background-color: #0F172A;
        color: #fefefe;
        border-radius: 15px;
        margin-top: 15px;
        margin-left: 40px;
        margin-bottom: 15px;
    }
    .educational{
        margin-top: 12px;
    }
    .payment{
        margin-top: 12px;
    }
    input:focus{
        box-shadow: 0px 4px 4px rgba(15, 23, 42, 0.5);
        background-color: #fefefe;
    }

    select{
        margin-bottom: 10px;
        height: 38px;
        width: 290px;
        border-radius: 8px;
        padding-left: 10px;
        padding-right: 10px;
        border: 1px solid #0F172A;
        background-color: #D9D9D9;
    }

    input{
        margin-bottom: 10px;
        height: 38px;
        width: 290px;
        border-radius: 8px;
        padding-left: 10px;
        border: 1px solid #0F172A;
        background-color: #D9D9D9;
    }

    .fields{
        padding-left: 35px;
    }
    label{
        color: #0F172A;
        font-weight: 500;
    }
    h4{
        color: #0F172A;
        font-size: 20px;
        font-weight: bold;
        margin-left: 20px;
        margin-bottom: 10px;
    }
    .upper{
      background-color: #D9D9D9;
      display: flex;
      flex-wrap: wrap; /* Allows elements to wrap to next line on small screens */
      justify-content: center; /* Centers elements horizontally */
      align-items: center; /* Centers elements vertically */
    }

    .window{
      background-color: #D9D9D9;
      display: flex;
      flex-wrap: wrap; /* Allows elements to wrap to next line on small screens */
      justify-content: center; /* Centers elements horizontally */
      align-items: center; 
      margin-bottom: 15px;
    }

    .a{

        font-weight: 600;
        font-size: 30px;
    }
    .b{
        font-weight: 600;
        font-size: 30px;
    }
  
    .left {
      background-color: #0F172A;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
      height: 15px;
      width: 15px;
      border-radius: 20px;
      padding: 15px;
      text-align: center;
      /* Adds some space between elements */
    }
  
    .right {
      background-color: #0F172A;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
      border-radius: 20px;
      height: 15px;
      width: 15px; 
      padding: 15px;
      text-align: center;
    }

    h3{
        color: #fefefe;
        font-weight: 700;
        font-size: 45px;
    }
    /* Media query for screens smaller than 768px */
    @media (max-width: 768px) {
      .left, .right {
        height: 80px;
        width: 125px;
        margin-top: 25px;
        margin-left: 20px;
        margin-right: 20px; /* Reduces the size and space between elements */
        margin-bottom: 5px;
        border-radius: 20px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
        padding: 8px;
      }

      .a,.b{
        font-size: 20px;
      }
      .b{
        margin-left: 80px;
      }
    }
  </style>