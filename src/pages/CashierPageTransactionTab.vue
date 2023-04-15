<template>
           

    <div class="flex h-full justify-center items-center  mx-0 w-full">
        <div class="queuePane">
            <br>
          <span>  <p  class="current"> Currently Serving A</p> </span>
            <br>
            <div class="uQueue">
                <div class="windowA">
                    <span id ="countSpan" class="currentNum">{{ counterVariable  }}</span>
                </div>
                <div class="windowB">
                    <p class="currentNum">{{ counterVariableB  }}</p>
                </div>
            </div>
            <div class="uQueue">
                <div class="windowTextA">Window A</div>
                <div class="windowTextB">Window B</div>
            </div>
            <div class="dQueue">
                <div class="line">
                    <div class="lineBox">
                        <div class="lineNum">
                            <div class="num">{{ counterVariable +2  }}</div>
                        </div>
                        <div class="lineWindow">WINDOW A</div>
                    </div>
                    <div class="lineBox">
                        <div class="lineNum">
                            <div class="num">{{ counterVariableB +2  }}</div>
                        </div>
                        <div class="lineWindow">WINDOW B</div>
                    </div>
                    <div class="lineBox">
                        <div class="lineNum">
                            <div class="num">{{ counterVariable + 4  }}</div>
                        </div>
                        <div class="lineWindow">WINDOW A</div>
                    </div>
                    <div class="lineBox">
                        <div class="lineNum">
                            <div class="num">{{ counterVariableB + 4  }}</div>
                        </div>
                        <div class="lineWindow">WINDOW B</div>
                    </div>
                    <div class="lineBox">
                        <div class="lineNum">
                            <div class="num">{{ counterVariable + 6 }}</div>
                        </div>
                        <div class="lineWindow">WINDOW A</div>
                    </div>
                    <div class="lineBox">
                        <div class="lineNum">
                            <div class="num">{{ counterVariableB + 6 }}</div>
                        </div>
                        <div class="lineWindow">WINDOW B</div>
                    </div>
                    <div class="lineBox">
                        <div class="lineNum">
                            <div class="num">{{ counterVariable +8  }}</div>
                        </div>
                        <div class="lineWindow">WINDOW A</div>
                       
                        
                    </div>
                </div>
                <div class="controls">
                    <button class="commandBox">
                        <BellAlertIcon class="commandIcon"/> CALL</button>
                    <button class="commandBox" @click="incCounter">
                        <ForwardIcon class="commandIcon"/>NEXT</button>
                    <button class="commandBox">
                        <ArrowPathIcon class="commandsIcon"/>TRANSFER</button>
                    <button class="commandBox" @click="reloadPage">
                        <CheckBadgeIcon class="commandIcon"/>DONE</button>
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
                        <p id="time"><span>12:35</span></p>
                    </div>
                    <div class="image">
                    <a href="http://localhost:5173/">    <UserCircleIcon class="logout" /></a>
                        
                    </div>
                </div>
            </div>
            <div class="bottom">
                <div class="editDetailsPane">
                    <div class="title">
                        <p>PERSONAL INFORMATION</p>
                    </div>
                        <div class="personal">
                            <label for="id" class="name">I.D. #</label>
                            <input type="text" class="field1" id="id"><br>
                            <label for="fname" class="name">First Name</label>
                            <input type="text" class="field2" id="fname"><br>
                            <label for="mname" class="name">Middle Name</label>
                            <input type="text" class="field3" id="mname"><br>
                            <label for="lname" class="name">Last Name</label>
                            <input type="text" class="field4" id="lname"><br>
                        </div>
                    <div class="title">
                        <p>EDUCATIONAL INFORMATION</p>
                    </div>
                    <div class="educational">
                            <label for="educ" class="name">Educ. Level</label>
                            <input type="text" class="field5" id="educ"><br>
                            <label for="level" class="name">Grade/Year</label>
                            <input type="text" class="field6" id="level"><br>
                    </div>
                    <div class="title">
                        <p>PAYMENT INFORMATION</p>
                    </div>   
                    <div class="payment">
                            <label for="tuition" class="name">Tuition Fees</label>
                            <input type="text" class="field7" id="tuition"><br>
                            <label for="misc" class="name">Miscellaneus</label>
                            <input type="text" class="field8" id="misc"><br>
                            <label for="mname" class="name">Total Amount</label>
                            <input type="total" class="field9" id="total"><br>
                    </div>   
                    <div class="buttons">
                        <button class="edit">EDIT</button>
                    </div>
                    
                    </div>
                <div class="tabs">
                    <div class="tabUp">
                        <input type="text" class="search" placeholder="Search...">
                    </div>
                    <div class="tabDown">
                        <div class="transactionTab">Transaction</div>
                        <div class="invoiceTab">Invoice</div>
                        <div class="historyTab">History</div>
                    </div>
                    <div class="content">
                    </div>
                </div>
            </div>
        </div>
    </div>

    
   
</template>


  <script>
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  import { getDatabase, ref, child, get, update } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyDtsKwx7mcaSnoPnZ2hlcolB8qluY69LMQ",
    authDomain: "fir-68a5f.firebaseapp.com",
    databaseURL: "https://fir-68a5f-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fir-68a5f",
    storageBucket: "fir-68a5f.appspot.com",
    messagingSenderId: "939974599498",
    appId: "1:939974599498:web:40392f504dd093d1c257b3"
  };
  
  const app = initializeApp(firebaseConfig);
const db = getDatabase();

export default {
  data() {
    return {
      counterVariable: null,
      counterVariableB:null
    }
  },
  mounted() {
    const dbRef = ref(db, 'Counter/Counter');
    const dbRefB = ref(db, 'CounterB/CounterB');
    get(dbRef).then((snapshot) => {
      this.counterVariable = Number(snapshot.val());
    });
    get(dbRefB).then((snapshot) => {
      this.counterVariableB = Number(snapshot.val());
    });
  },
  methods: {
    reloadPage() {
      window.location.reload();
    },
    incCounter() {
      const dbRef = ref(db, 'Counter');
      this.counterVariable = this.counterVariable + 2;
      update(dbRef, { Counter: this.counterVariable });
      this.reloadPage();
    },
    incCounterB() {
      const dbRefB = ref(db, 'CounterB');
      this.counterVariableB = this.counterVariableB + 2;
      update(dbRefB, { CounterB: this.counterVariableB });
    }
  }
}
setTimeout(function(){
                window.location.reload(1);
            }, 5000);
</script>
  

<script setup>
import { UserCircleIcon , BellAlertIcon , ForwardIcon, ArrowPathIcon, CheckBadgeIcon} from '@heroicons/vue/24/solid'
</script>






<style scoped>
.edit:hover{
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    background-color: grey;
    color: #fefefe;
}
.logout:hover{
    color: grey;
}
.invoiceTab:hover{
    background-color: grey;
    color: #fefefe;
}
.historyTab:hover{
    background-color: grey;
    color: #fefefe;
}

input{
    color:#fefefe;
    padding-left: 10px;
}

.content{
    height: 480px;
    background: #1E293B;
    border: 1px solid #293549;
    border-radius: 0px 15px 15px 15px;
}
.tabs{
    padding: 15px;
}
.search{
    margin-left: 380px;
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
.historyTab{
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

.buttons{
    padding-top: 30px;
    padding-left: 55px;
}
button{
    position: flex;
    background-color: #fefefe;
    border-radius: 10px;
    width: 85%;
    height: 38px;
    color: #0F172A;
    font-weight: 700;
}
.title{
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: #fefefe;
    padding-left: 18px;
    margin-top: 5px;
}
.personal{
    height: 156px;
}
.educational{
    height: 70x;
}
.name{
    margin-left: 45px;
    color: #fefefe;
    font-size: 18px;
}
.field1{
    width: 200px;
    height: 30px;
    left: 587px;
    top: 211px;
    background: #1E293B;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    border-radius: 12px;
    margin: 5px;
    margin-left: 90px;
}
.field2{
    width: 200px;
    height: 30px;
    left: 587px;
    top: 211px;
    background: #1E293B;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    border-radius: 12px;
    margin: 5px;
    margin-left: 44px;
}
.field3{
    width: 200px;
    height: 30px;
    left: 587px;
    top: 211px;
    background: #1E293B;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    border-radius: 12px;
    margin: 5px;
    margin-left: 23px;
}

.field4{
    width: 200px;
    height: 30px;
    left: 587px;
    top: 211px;
    background: #1E293B;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    border-radius: 12px;
    margin: 5px;
    margin-left: 47px;
}
.field5{
    width: 200px;
    height: 30px;
    left: 587px;
    top: 211px;
    background: #1E293B;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    border-radius: 12px;
    margin: 5px;
    margin-left: 42px;
}
.field6{
    width: 200px;
    height: 30px;
    left: 587px;
    top: 211px;
    background: #1E293B;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    border-radius: 12px;
    margin: 5px;
    margin-left: 41px;
}
.field7{
    width: 200px;
    height: 30px;
    left: 587px;
    top: 211px;
    background: #1E293B;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    border-radius: 12px;
    margin: 5px;
    margin-left: 34px;
}
.field8{
    width: 200px;
    height: 30px;
    left: 587px;
    top: 211px;
    background: #1E293B;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    border-radius: 12px;
    margin: 5px;
    margin-left: 30px;
}
.field9{
    width: 200px;
    height: 30px;
    left: 587px;
    top: 211px;
    background: #1E293B;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    border-radius: 12px;
    margin: 5px;
    margin-left: 24px;
}

input:hover{
    box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.5);
}
.commandsIcon{
    width:40px ;
    height:40px;
    margin-right: 5px;
    color: #0F172A;
}
.commandIcon{
    width:40px ;
    height:40px;
    margin-right: 15px;
    color: #0F172A;
}

.num{
    color: #0F172A;
    font-weight: 900;
    font-size:x-large;
}
.lineWindow{
    color: #fefefe;
    margin-left: 38px;
    font-weight: 700;
}
.lineNum{
    display: flex;
    width: 53px;
    height: 35px;
    background-color: #fefefe;
    margin: 5px;
    margin-left: 10px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
}
.lineBox{
    display: flex;
    height: 45px;
    width: 240px;
    margin: 10px;
    align-items: center;
    padding: 2px;
    margin-bottom: 15px;
    background-color: #0F172A;
    border-radius: 12px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    border-radius: 12px;
}
.controls{
    padding-top: 49px;
    padding-left: 13px;
}
.commandBox{
    display: flex;
    background-color: #fefefe;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    
    border-radius: 12px;
    height: 65px;
    width: 150px;
    margin-top: 13px;
    color: #0F172A;
    font-weight: 900;
}

.commandBox:hover .commandIcon{
    color:#fefefe;
}

.commandBox:hover .commandsIcon{
    color:#fefefe;   
}

.commandBox:hover{
    background-color: grey;
    color: #fefefe;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
}


.dQueue{
    margin-top: 25px;
    display: flex;
    width: 61%;
}
.uQueue{
    display: flex;
}
.windowA{
    display: flex;
    height: 80px;
    width: 120px;
    margin-left: 75px;
    margin-right: 25.5px;
    background-color: #0F172A;
    border-radius: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
}

.windowB{
    display: flex;
    height: 80px;
    width: 120px;
    margin-left: 25.5px;
    margin-right: 51px;
    background-color: #0F172A;
    border-radius: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
}

.currentNum{
    font-size: 32px;
    color: #ffffff;
    font-weight: 800;
    line-height: 60px;
}

.windowTextA{
    color: #ffffff;
    margin-left: 92px;
    margin-right: 29px;
    margin-top: 7px;
    font-weight: 700;
    font-size: 18px;
}
.windowTextB{
    color: #ffffff;
    margin-left: 53px;
    margin-right: 55px;
    margin-top: 7px;
    font-weight: 700;
    font-size: 18px;
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

.current{
    text-align: center;
    font-size: 28px;
    color: #ffffff;
    font-style: normal;
    font-weight: 600;
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
    position: flex;
    background-color: #1E293B;
    width: 30%;
    height: 100%;
    margin-right: 7.5px;
    border-radius: 35px;
    border: 1px solid #293549;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.8);

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
    width: 40%;
    height: 100%;
    background-color: #0F172A;
    margin: 5px;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
    padding-top: 18px;
}

.tabs {
    width: 60%;
    height: 100%;
    background-color: #0F172A;
    margin: 5px;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
}</style>
