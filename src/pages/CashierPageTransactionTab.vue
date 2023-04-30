<template>
           

  <div class="flex h-full justify-center items-center  mx-0 w-full">
      <div class="queuePane">
          <br>
        <span>  <p  class="current"> Currently Serving A</p> </span>
          <br>
          <div class="uQueue">
              <div class="windowA">
                  <span id ="countSpan" class="currentNum"> {{ currentAtext  }}</span>
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
                          <div class="num">{{ q1Af  }}</div>
                      </div>
                      <div class="lineWindow">WINDOW A</div>
                  </div>
                  <div class="lineBox">
                      <div class="lineNum">
                          <div class="num">{{ q2Af }}</div>
                      </div>
                      <div class="lineWindow">WINDOW A</div>
                  </div>
                  <div class="lineBox">
                      <div class="lineNum">
                          <div class="num">{{ q3Af }}</div>
                      </div>
                      <div class="lineWindow">WINDOW A</div>
                  </div>
                  <div class="lineBox">
                      <div class="lineNum">
                          <div class="num">{{ q4Af }}</div>
                      </div>
                      <div class="lineWindow">WINDOW A</div>
                  </div>
                  <div class="lineBox">
                      <div class="lineNum">
                          <div class="num">{{ counterVariableB + 1 }}</div>
                      </div>
                      <div class="lineWindow">WINDOW B</div>
                  </div>
                  <div class="lineBox">
                      <div class="lineNum">
                          <div class="num">{{ counterVariableB + 2 }}</div>
                      </div>
                      <div class="lineWindow">WINDOW B</div>
                  </div>
                  <div class="lineBox">
                      <div class="lineNum">
                          <div class="num">{{ counterVariableB +3  }}</div>
                      </div>
                      <div class="lineWindow">WINDOW B</div>
                     
                      
                  </div>
              </div>
              <div class="controls">
                  <button class="commandBox" @click="callUser()">
                      <BellAlertIcon class="commandIcon"/> CALL</button>
                  <button class="commandBox" @click="incCounter">
                      <ForwardIcon class="commandIcon"/>NEXT</button>
                  <button class="commandBox">
                      <ArrowPathIcon class="commandsIcon"/>TRANSFER</button>
                  <button class="commandBox" @click="doneUser()">
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
                      <p id="date">{{ currentDate }}</p>
                      <p id="time"><span>{{ currentTime }}</span></p>
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
                          <label for="id" class="name">ID#</label>
                          <input type="text" class="field1" id="id"   v-bind:placeholder="id"><br>
                          <label for="fname" class="name" >First Name</label>
                          <input type="text" class="field2" id="fname" v-bind:placeholder="fname"><br>
                          <label for="mname" class="name">Middle Name</label>
                          <input type="text" class="field3" id="mname" v-bind:placeholder="mname"><br>
                          <label for="lname" class="name">Last Name</label>
                          <input type="text" class="field4" id="lname" v-bind:placeholder="lname"><br>
                      </div>
                  <div class="title">
                      <p>EDUCATIONAL INFORMATION</p>
                  </div>
                  <div class="educational">
                          <label for="educ" class="name">Educ. Level</label>
                          <input type="text" class="field5" id="educ" v-bind:placeholder="edlevel"><br>
                          <label for="level" class="name">Grade/Year</label>
                          <input type="text" class="field6" id="level" v-bind:placeholder="grade"><br>
                  </div>
                  <div class="title">
                      <p>PAYMENT INFORMATION</p>
                  </div>   
                  <div class="payment">
                          <label for="tuition" class="name">Tuition Fees</label>
                          <input type="text" class="field7" id="tuition" v-bind:placeholder="tint"><br>
                          <label for="misc" class="name" >Miscellaneus</label>
                          <input type="text" class="field8" id="tmisc" v-bind:placeholder="tmisc"><br>
                          <label for="mname" class="name">Total Amount</label>
                          <input type="total" class="field9" id="total" v-bind:placeholder="total"><br>
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
                      <div :class="currentTab == 0 ? 'tab-active' : 'general-tab'" @click="currentTab = 0">Transaction</div>
                      <div :class="currentTab == 1 ? 'tab-active' : 'general-tab'" @click="currentTab = 1">Invoice</div>
                      <div :class="currentTab == 2 ? 'tab-active' : 'general-tab'" @click="currentTab = 2">History</div>
                  </div>
                  <div class="content">
                    <Transition name="fade" mode="out-in">
                      <div v-if="currentTab == 0">
                        Transactioms
                      </div>
                      <div v-else-if="currentTab == 1">
                        Invoive
                      </div>
                      <div v-else="currentTab == 2">
                        History
                      </div>
                    </Transition>
                  </div>
              </div>
          </div>
      </div>
  </div>

  
 
</template>

<script>
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
  };

const app = initializeApp(firebaseConfig);
const db = getDatabase();

export default {
  
  data() {
    return {
      currentAtext : '',
      currentA: 0,
      counterVariable: null,
      counterVariableB: '',
      qA: '',
      q1Af : '',
      q2Af : '',
      q3Af: '',
      q4Af:'',
      id: null ,
      fname : '',
      mname : '',
      lname : '',
      edlevel : '',
      grade : '',
      tint: null ,
      tmisc: null ,
      currentTime: "",
      currentDate: "",
      currentTab: 0,
      ring : false,
    };
  },
  
  
  
  mounted() {
    const dbRef = ref(db);
    const dbRefB = ref(db);
    console.log(this.currentA)



    
// Currently Serving A
onValue(
        child(dbRef, "curA/curA"),
        (snapshot) => {
          this.currentA = Number(snapshot.val());
          if(snapshot.val() == 0){
              this.currentAtext = "-";

          }
          else{this.currentA = Number(snapshot.val());
               this.currentAtext = "A"+Number(snapshot.val());}
        
        },
        (error) => {
          console.error(error);
        }
      );

// COUNTER A 
onValue(
        child(dbRef, "Counter/Counter"),
        (snapshot) => {
          this.counterVariable = Number(snapshot.val());
        
        },
        (error) => {
          console.error(error);
        }
      );
// COUNTER B
onValue(
        child(dbRefB, "CounterB/CounterB"),
        (snapshot) => {
          this.counterVariableB = snapshot.val();
        },
        (error) => {
          console.error(error);
        },
        () => {
        }
      );



//A 1st q
onValue(
    child(dbRef, "Counter/Counter"),
    (snapshot) => {
    const counterValue = snapshot.val();
    const userId = `users/${counterValue+1}/queNum`;
    onValue(
      child(dbRef, userId),
      (snapshot) => {
        if(snapshot.val()!=null){ this.q1A = snapshot.val();
                                  this.q1Af = "A" + this.q1A;}
        else { this.q1Af = "-"; }
      },
      (error) => {
        console.error(error);
      }
    );
  },
  (error) => {
    console.error(error);
  }
);
// A 2nd que
onValue(
    child(dbRef, "Counter/Counter"),
    (snapshot) => {
    const counterValue = snapshot.val();
    const userId = `users/${counterValue+2}/queNum`;
    onValue(
      child(dbRef, userId),
      (snapshot) => {
        if(snapshot.val()!=null){ this.q2A = snapshot.val();
                                  this.q2Af = "A" + this.q2A;}
        else { this.q2Af = '-'; }
      },
      (error) => {
        console.error(error);
      }
    );
  },
  (error) => {
    console.error(error);
  }
);
// A 3rd que
onValue(
    child(dbRef, "Counter/Counter"),
    (snapshot) => {
    const counterValue = snapshot.val();
    const userId = `users/${counterValue+3}/queNum`;
    onValue(
      child(dbRef, userId),
      (snapshot) => {
        if(snapshot.val()!=null){ this.q3A = snapshot.val();
                                  this.q3Af = "A" + this.q3A;}
        else { this.q3Af = '-'; }
      },
      (error) => {
        console.error(error);
      }
    );
  },
  (error) => {
    console.error(error);
  }
);
// A 4th que
onValue(
    child(dbRef, "Counter/Counter"),
    (snapshot) => {
    const counterValue = snapshot.val();
    const userId = `users/${counterValue+4}/queNum`;
    onValue(
      child(dbRef, userId),
      (snapshot) => {
        if(snapshot.val()!=null){ this.q4A = snapshot.val();
                                  this.q4Af = "A" + this.q4A;}
        else { this.q4Af = '-'; }
      },
      (error) => {
        console.error(error);
      }
    );
  },
  (error) => {
    console.error(error);
  }
);

 





    

// id
    onValue(
    child(dbRef, "curA/curA"),
    (snapshot) => {
    const counterValue = snapshot.val();
    const userId = `users/${counterValue}/id/`;
    onValue(
      child(dbRef, userId),
      (snapshot) => {
        this.id = Number(snapshot.val());
      },
      (error) => {
        console.error(error);
      }
    );
  },
  (error) => {
    console.error(error);
  }
);

// first name
onValue(
  child(dbRef, "curA/curA"),
  (snapshot) => {
    const counterValue = snapshot.val();
    const userId = `users/${counterValue}/fname`;
    onValue(
      child(dbRef, userId),
      (snapshot) => {
        this.fname = snapshot.val(); 
      },
      (error) => {
        console.error(error);
      }
    );
  },
  (error) => {
    console.error(error);
  }
);

// mid name
onValue(
  child(dbRef, "curA/curA"),
  (snapshot) => {
    const counterValue = snapshot.val();
    const userId = `users/${counterValue}/mname`;
    onValue(
      child(dbRef, userId),
      (snapshot) => {
        this.mname = snapshot.val(); 
      },
      (error) => {
        console.error(error);
      }
    );
  },
  (error) => {
    console.error(error);
  }
);
//last name
onValue(
  child(dbRef, "curA/curA"),
  (snapshot) => {
    const counterValue = snapshot.val();
    const userId = `users/${counterValue}/lname`;
    onValue(
      child(dbRef, userId),
      (snapshot) => {
        this.lname = snapshot.val(); 
      },
      (error) => {
        console.error(error);
      }
    );
  },
  (error) => {
    console.error(error);
  }
);
//ed level
onValue(
  child(dbRef, "curA/curA"),
  (snapshot) => {
    const counterValue = snapshot.val();
    const userId = `users/${counterValue}/edlevel`; // assuming `edlevel` is the key for the `edlevel` string value
    onValue(
      child(dbRef, userId),
      (snapshot) => {
        this.edlevel = snapshot.val(); // set the value of `this.edlevel`
      },
      (error) => {
        console.error(error);
      }
    );
  },
  (error) => {
    console.error(error);
  }
);
//grade/year
onValue(
  child(dbRef, "curA/curA"),
  (snapshot) => {
    const counterValue = snapshot.val();
    const userId = `users/${counterValue}/grade`; // assuming `edlevel` is the key for the `edlevel` string value
    onValue(
      child(dbRef, userId),
      (snapshot) => {
        this.grade = snapshot.val(); // set the value of `this.edlevel`
      },
      (error) => {
        console.error(error);
      }
    );
  },
  (error) => {
    console.error(error);
  }
);
// tuition fee
onValue(
    child(dbRef, "curA/curA"),
    (snapshot) => {
    const counterValue = snapshot.val();
    const userId = `users/${counterValue}/tint`;
    onValue(
      child(dbRef, userId),
      (snapshot) => {
        this.tint = Number(snapshot.val());
      },
      (error) => {
        console.error(error);
      }
    );
  },
  (error) => {
    console.error(error);
  }
);
// miscfker
// id


// tmisc
onValue(
  child(dbRef, "curA/curA"),
  (snapshot) => {
    const counterValue = snapshot.val();
    const userMisc = `users/${counterValue}/tmisc`; 
    const userTuiton = `users/${counterValue}/tint`;
    onValue(
      child(dbRef, userMisc),
      (snapshot) => {
        this.tmisc = Number(snapshot.val()); 
        onValue(
      child(dbRef, userTuiton),
      (snapshot) => {
        this.tuiton = Number(snapshot.val()); 
        this.total = this.tuiton + this.tmisc;

      },
      (error) => {
        console.error(error);
      }
    );
      },
      (error) => {
        console.error(error);
      }
    );
    //total
    
  },
  (error) => {
    console.error(error);
  }
);









//time
 setInterval(() => {
      const now = new Date();
      this.currentTime = now.toLocaleTimeString();
      this.currentDate = now.toLocaleDateString();

    }, 1000);

    
    

    // assign the reference value to the component's data property
    
  },
  
  
  
  methods: {
    incCounter() {
      
      if(this.currentA == 0){

      const dbRef = ref(db, "Counter");
      this.counterVariable = this.counterVariable + 1;
      update(dbRef, { Counter: this.counterVariable });

      const dbRefC = ref(db, "curA");
      this.currentA = this.counterVariable;
      update(dbRefC, { curA: this.currentA });

      }

      else if(this.currentA != 0){
        alert("PLEASE PRESS DONE BEFORE PROCEEDING!");
      }
      const dbRef = ref(db, 'Counter/Counter');
      let counterVariable;
      get(dbRef).then((snapshot) => {
          
        
          counterVariable = Number(snapshot.val());
          const userId = `users/${counterVariable}`;
          const dbRefcustomers = ref(db, userId);
          this.ring = false;
         
          update(dbRefcustomers, { ring: this.ring });           
      });
        
    },
    


    doneUser(){
      const dbReftemp = ref(db, "curA");
     
      update(dbReftemp, { curA: 0 });

      const dbRef = ref(db, 'Counter/Counter');
      let counterVariable;

      get(dbRef).then((snapshot) => {

      counterVariable = Number(snapshot.val());
          const userId = `users/${counterVariable}`;
          const dbRefcustomers = ref(db, userId);
          this.ring = false;
         
          update(dbRefcustomers, { ring: this.ring }); 
        });

    },



    callUser() {        
      const dbRef = ref(db, 'Counter/Counter');
      let counterVariable;
      get(dbRef).then((snapshot) => {
          
          if(this.currentA==0){alert("There is nobody to call.")}
          console.log("snapshot value: "+snapshot.val())
        
          counterVariable = Number(snapshot.val());
          const userId = `users/${counterVariable}`;
          const dbRefcustomers = ref(db, userId);
          this.ring = !this.ring;
         
          update(dbRefcustomers, { ring: this.ring });           
      });
      },
  },
      
};
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
  color: white;
  padding: 16px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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
.tab-active {
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
.general-tab {
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
