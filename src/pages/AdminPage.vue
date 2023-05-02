<template>
  <div class="flex h-full justify-center items-center  mx-0 w-full">
      <div class="queuePane">
          <div class="editDetailsPane">
            <div class="field">
              <p class="title">USER'S INFORMATION</p>
              <p class="title1">PERSONAL INFORMATION</p>
              <label for="fname">First Name</label>
              <input type="text" id="fname" class="field1"><br>
              <label for="mname">Middle Name</label>
              <input type="text" id="mname"  class="field2"><br>
              <label for="lname">Last Name</label>
              <input type="text" id="lname"  class="field3"><br>
              <label for="bdate">Birthdate</label>
              <input type="date" name="" id="bdate"  class="field4"><br>
              <label for="age">Age</label>
              <input type="text" id="age"  class="field5"><br>
              <label for="email">Email</label>
              <input type="email" name="" id="email"  class="field6"><br>
              <label for="Address">Address</label>
              <input type="text" id="address"  class="field7"><br>
              <p class="title1">ACCOUNT INFORMATION</p>
              <label for="userType">User Type</label>
              <select name="user" id="userType"  class="field8">
                <option value="administrator">Administrator</option>
                <option value="cashier">Cashier</option>
              </select><br>
              <label for="id">ID No.</label>
              <input type="number" id="id"  class="field9"><br>
              <label for="username">Username</label>
              <input type="text" id="username"  class="field10"><br>
              <label for="password">Password</label>
              <input type="password" id="password"  class="field11"><br>
              <div class="buttons">
                <button class="cancelBut">CANCEL</button>
                <button class="saveBut">SAVE</button>
              </div>
            </div>
          </div>
    </div>
      <div class="billingPane justify-center">
          <div class="upper ">
              <div class="userInfo">
                  <div class="user">
                      <p>Name: <span id="userName">Ryan James Macawili</span></p>
                      <p>ID No: <span id="userId">20229464</span></p>
                  </div>
                  <div class="dateTime">
                      <p id="date">March 31, 2023</p>
                      <p id="time">12:35</p>
                  </div>
                  <div class="image">
                      <UserCircleIcon @click="logout()" class="logout"/>   
                  </div>
              </div>
          </div>
          <div class="bottom">
              <div class="tabs">
                  <div class="tabUp">
                      <button class="controls">
                        <UserPlusIcon class="icon"/>ADD</button>
                      <button class="controls">
                        <UserMinusIcon class="icon"/>DELETE</button>
                      <button class="controls">
                        UPDATE</button>
                      <input type="text" class="search" placeholder="Search...">
                  </div>
                  <div class="tabDown">
                      <div class="transactionTab">Cashier</div>
                      <div class="invoiceTab">Accounting</div>
                  </div>
                  <div class="content">
                  </div>
              </div>
          </div>
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
      errMsg: '',
 
    }
  },
  mounted (){
    const dbRef = ref(db);
    let loggedas = localStorage.getItem('loggedas');

    let loggedin = localStorage.getItem('log-in');
    console.log(loggedin)

    if( loggedin==="false"){
      console.log("true ang asd")
      this.$router.push('/');
    }


    localStorage.setItem('currentWindow', 'A');
    const currentWindow = localStorage.getItem('currentWindow')
    console.log("current window is: "+currentWindow)
    if( loggedin=="true"){
      if(loggedas=='admin'){
        this.$router.push('/adminPage');
      }
      if(loggedas=='cashier'){
        this.$router.push('/cashierPage');
      }
    }




  },
  methods: {
    logout(){
      localStorage.setItem('log-in', false);
      localStorage.setItem('loggedas', '');
      location.reload();

    },
   
  
  }
}

  </script>

<script setup>
import { UserCircleIcon , UserPlusIcon,UserMinusIcon} from '@heroicons/vue/24/solid'
</script>

<style scoped>

.icon{
  width: 45px;
  height: 45px;
  margin-right: 15px;
}

button:hover{
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    background-color: grey;
    color: #fefefe;
}

.logout:hover{
    color: grey;
}

input:hover{
  box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.5);
}
select:hover{
  box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.5);
}

.invoiceTab:hover{
    background-color: grey;
    color: #fefefe;
}

.buttons{
  display: flex;
}

.cancelBut{
  display: flex;
  width: 150px;
  height: 45px;
  margin-top: 15px;
  justify-content: center;
  align-items: center;
  margin-left: 35px;
}
.saveBut{
  display: flex;
  width: 150px;
  height: 45px;
  margin-top: 15px;
  justify-content: center;
  align-items: center;
  margin-left: 35px;
}

.title{
  margin-bottom: 6px;
}

.field1{
  width: 200px;
  height: 30px;
  background: #1E293B;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  margin: 5px;
  margin-left: 75px;
}
.field2{
  width: 200px;
  height: 30px;
  background: #1E293B;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  margin: 5px;
  margin-left: 55px;
}
.field3{
  width: 200px;
  height: 30px;
  background: #1E293B;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  margin: 5px;
  margin-left: 75px;
}
.field4{
  text-align: center;
  width: 200px;
  height: 30px;
  background: #1E293B;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  margin: 5px;
  margin-left: 85px;
}
.field5{
  
  width: 200px;
  height: 30px;
  background: #1E293B;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  margin: 5px;
  margin-left: 122px;
}
.field6{
  width: 200px;
  height: 30px;
  background: #1E293B;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  margin: 5px;
  margin-left: 112px;
}
.field7{
  width: 200px;
  height: 30px;
  background: #1E293B;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  margin: 5px;
  margin-left: 93px;
}
.field8{
  text-align: center;
  width: 200px;
  height: 30px;
  background: #1E293B;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  margin: 5px;
  margin-left: 78px;
}
.field9{
  width: 200px;
  height: 30px;
  background: #1E293B;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  margin: 5px;
  margin-left: 103px;
}
.field10{
  width: 200px;
  height: 30px;
  background: #1E293B;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  margin: 5px;
  margin-left: 76px;
}
.field11{
  width: 200px;
  height: 30px;
  background: #1E293B;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  margin: 5px;
  margin-left: 81px;
}

label{
  margin-left: 40px;

}

.title1{
  font-size: 18px;
  font-weight: 700;
  margin-left: 15px;
  margin-bottom: 3px;
  margin-top: 3px;
}
.tabUp{
  display: flex;
  margin-bottom: 10px;
}

.controls{
  margin-right: 5px;
  height: 45px;
  width: 150px;
}


input{
  color:#fefefe;
  padding-left: 10px;
}

.content{
  height: 465px;
  background: #1E293B;
  border: 1px solid #293549;
  border-radius: 0px 15px 15px 15px;
}
.tabs{
  padding: 15px;
}
.search{
  margin-left: 315px;
  margin-bottom: 10px;
  width: 200px;
  height: 30px;
  background: #293549;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 12px;
  padding-left: 10px;
  color: #fefefe;
}
.tabDown{
  display: flex;
}
.transactionTab{
  display: flex;
  width: 120px;
  height: 25px;
  background: #1E293B;
  border-width: 1px 1px 0px 1px;
  border-style: solid;
  border-color: #293549;
  border-radius: 8px 8px 0px 0px;
  margin-right: 1px;
  color: #FEFEFE;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.invoiceTab{
  display: flex;
  width: 120px;
  height: 25px;
  background: #fefefe;
  border-width: 1px 1px 0px 1px;
  border-style: solid;
  border-color: #293549;
  border-radius: 8px 8px 0px 0px;
  margin-right: 1px;
  color: #0F172A;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

button{
  display: flex;
  background-color: #fefefe;
  border-radius: 10px;
  width: 85%;
  height: 38px;
  color: #0F172A;
  font-weight: 700;
  justify-content: center;
  align-items: center;
}
.title{
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #fefefe;
  text-align: center;
  margin-top: 0px;
}

.logout {
  color: #ffffff;
  width: 55px;
  height: 55px;
  margin-bottom: 2px;
}

.image {
  height: 100%;
}


.dateTime {
  color: #ffffff;
  width: 15%;
  height: 100%;
  padding-top: 2px;
}

.user {
  color: #ffffff;
  width: 85%;
  padding-left: 20px;
  height: 100%;
  padding-top: 2px;
}

.upper {
  display: flex;
  margin-top: 10px;
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 0px;
}

.bottom {
  display: flex;
  height: 85%;
  margin: 5px;
}

.flex {
  background-color: #0F172A;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 10px;
  padding-bottom: 10px;

}

.queuePane {
  display: flex;
  background-color: #1E293B;
  width: 30%;
  height: 100%;
  margin-right: 7.5px;
  border-radius: 35px;
  border: 1px solid #293549;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.8);
  padding: 10px;
  color: #fefefe;
}

.billingPane {
  position: flex;
  background-color: #1E293B;
  width: 70%;
  height: 100%;
  margin-left: 7.5px;
  border-radius: 35px;
  padding: 0px;
  border: 1px solid #293549;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.8);
}

.userInfo {
  display: flex;
  width: 100%;
  height: 54px;
  background-color: #0F172A;
  border-radius: 30px;
  align-items: flex-end;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  padding-top: 1.5px;
}

.editDetailsPane {
  position: flex;
  width: 100%;
  height: 97%;
  background-color: #0F172A;
  margin: 5px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  padding-top: 18px;
}

.tabs {
  width: 100%;
  height: 100%;
  background-color: #0F172A;
  margin: 5px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
}</style>
