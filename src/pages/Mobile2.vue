<template>
    <div class="body">
        <div class="upper">
            <div class="left">
              <audio ref="audio" src="https://firebasestorage.googleapis.com/v0/b/fir-68a5f.appspot.com/o/X2Download.app%20-%20Cycle%20Bell%20Ring%20Sound%20Effect%20_%20Non%20Copyright%20(128%20kbps).mp3?alt=media&token=760578d2-3675-45d3-a3ca-f357df3699b4" loop></audio>

                <h3>{{ currentAtext }}</h3>
            </div>
            <div class="right">
                <h3>B{{ counterVariableB }}</h3>
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
        <div class="queue">
            <div class="no">
                <h2>Window A</h2>
                <div class="squares">{{ q1Af }}</div>
                <div class="squares">{{ q2Af }}</div>
                <div class="squares">{{ q3Af }}</div>
                <div class="squares">{{ q4Af }}</div>
                <div class="squares" id="current">{{ q5Af }}</div>
                <div class="squares">{{ q6Af }}</div>
            </div>
            <div class="assign">
                <h2>Window B</h2>
                <div class="txt"> {{ counterVariableB }}</div>
                <div class="txt"> {{ counterVariableB+1 }}</div>
                <div class="txt"> {{ counterVariableB+2 }}</div>
                <div class="txt"> {{ counterVariableB+3 }}</div>
                <div class="txt" id="cur"> {{ counterVariableB+4 }}</div>
                <div class="txt"> {{ counterVariableB+5 }}</div>
            </div>
        </div>
        <div class="personal">
            <h3 class="num">Queue No : {{ queCur }}</h3>
        </div>
    </div>
    <audio :src="audioLink"></audio>

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
      currentAtext: '',
      counterVariable: null,
      counterVariableB: '',
      qA: '',
      q1Af : '',
      q2Af : '',
      q3Af: '',
      q4Af:'',
      q5Af:'',
      q6Af:'',
      queCur:'',
      audioLink: "https://firebasestorage.googleapis.com/v0/b/fir-68a5f.appspot.com/o/X2Download.app%20-%20Cycle%20Bell%20Ring%20Sound%20Effect%20_%20Non%20Copyright%20(128%20kbps).mp3?alt=media&token=760578d2-3675-45d3-a3ca-f357df3699b4",


     

    };
  },
  
  
  
  mounted() {
    const dbRef = ref(db);
    const dbRefB = ref(db);

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
       

// window recognizer
this.window = localStorage.getItem('window');
console.log("this is window "+this.window)
// que recognizer

if(this.window == "A"){
  console.log("HI I'M WINDOW A")
  this.myVariable = localStorage.getItem('que');
    this.queCur = this.myVariable;
    if (this.myVariable > this.counterVariable){
        console.log("THIS IS TRUE")
        this.queCur = "A"+this.myVariable;
        this.queCurNum = this.myVariable;
    }
const ring = `users/${this.queCurNum}/ring`;
// A Ring
    onValue(
      child(dbRef, ring),
      (snapshot) => {
        console.log(snapshot.val())

        if(snapshot.val()== true){

          this.$refs.audio.play();

          
          }
        else{
            const audio = this.$refs.audio
            audio.pause();
            audio.currentTime = 0;
        }
       
      },
      (error) => {
        console.error(error);
      }
    );
}
//B ring
else{
  console.log("HI I'M WINDOW B")

  this.myVariable = localStorage.getItem('que');
    this.queCur = this.myVariable;
    if (this.myVariable > this.counterVariable){
        console.log("THIS IS TRUE")
        this.queCur = "B"+this.myVariable;
        this.queCurNum = this.myVariable;
    }
const ring = `usersB/${this.queCurNum}/ring`;
    onValue(
      child(dbRef, ring),
      (snapshot) => {
        console.log(snapshot.val())

        if(snapshot.val()== true){

          this.$refs.audio.play();

          
          }
        else{
            const audio = this.$refs.audio
            audio.pause();
            audio.currentTime = 0;
        }
       
      },
      (error) => {
        console.error(error);
      }
    );

}
   




// COUNTER A 
onValue(
        child(dbRef, "Counter/Counter"),
        (snapshot) => {
          this.counterVariable = Number(snapshot.val());
          console.log(this.counterVariable)
          console.log(this.queCurNum);

          // if(this.counterVariable==this.queCurNum){
          // this.$refs.audio.play()
          //   console.log(this.counterVariable)

          // }
          // else {
          //   const audio = this.$refs.audio
          //   audio.pause();
          //   audio.currentTime = 0;
          // }
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
// A 5th que
onValue(
    child(dbRef, "Counter/Counter"),
    (snapshot) => {
    const counterValue = snapshot.val();
    const userId = `users/${counterValue+5}/queNum`;
    onValue(
      child(dbRef, userId),
      (snapshot) => {
        if(snapshot.val()!=null){ this.q5A = snapshot.val();
                                  this.q5Af = "A" + this.q5A;}
        else { this.q5Af = '-'; }
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

// 6th que
onValue(
    child(dbRef, "Counter/Counter"),
    (snapshot) => {
    const counterValue = snapshot.val();
    const userId = `users/${counterValue+6}/queNum`;
    onValue(
      child(dbRef, userId),
      (snapshot) => {
        if(snapshot.val()!=null){ this.q6A = snapshot.val();
                                  this.q6Af = "A" + this.q6A;}
        else { this.q6Af = '-'; }
        
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
  },
  methods: {


      playAudio() {
      
        if (counterVariable == queCur) {
          this.$refs.audio.play()
          

        }
      },
   
  
  
  
   
 },
 
  
}
 


  
  </script>
  
  <style scoped>

    h2{
        font-size: 25px;
    }

    .txt{
        display: flex;
        margin-left: 30px;
        width:  100px;
        height: 65px;
        align-items: center;
        justify-content: center;
        margin-bottom: 8px;
        border-radius: 8px;
        font-size: 22px;
    }
    .current{
        background-color: #334155;
        color: #fefefe;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
        
    }

    #cur{
        background-color: #334155;
        color: #fefefe;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    }
    .no{
        width: 100%;
        border-radius: 0px;
        border-right: 1px solid #0F172A;    
        justify-content: center;
        align-items: center;
        text-align: center;
        font-weight: 700;
        font-size: 22px;
    }

    .txt{
        background-color: #D9D9D9;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    }

    .squares{
        display: flex;
        margin-left: 30px;
        width:  100px;
        height: 65px;
        background-color: #D9D9D9;
        align-items: center;
        justify-content: center;
        margin-bottom: 8px;
        border-radius: 8px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    }



    .assign{
        width: 100%;
        border-radius: 0px;
        border-left: 1px solid #0F172A;    
        justify-content: center;
        align-items: center;
        text-align: center;
        font-weight: 700;
    }
    .personal{
        margin-top: 15px;
        background-color: #0F172A;
        width: 360px;
        border-radius: 10px,10px,10px,10px;
        padding: 15px;
        text-align: center;
    }

    .num{
        font-size: 43px;
    }

    .queue{
        display: flex;
        height: 485px;
        width: 325px;
        background-color: #fefefe;
        margin-left: 18px;
        border-radius: 10px;
    }
    .body {
      background-color: #D9D9D9;
      display: flex;
      flex-wrap: wrap; /* Allows elements to wrap to next line on small screens */
      justify-content: center; /* Centers elements horizontally */
      flex-direction: column;
      box-sizing: border-box;
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
      margin-bottom: 3px;
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