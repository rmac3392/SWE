<template>
  <form @submit.prevent="saveData">
    <label>
      ID
      <input type="text" v-model="id">
      <br>
    </label>
    <br>
    <label>
      First Name
      
      <input type="text" v-model="fname">
    </label>
    <br>
    <label>
Middle Name      
      <input type="text" v-model="mname">
    </label>
    <br>
    <label>
Last Name      
      <input type="text" v-model="lname">
    </label>

    <br>
    <label>
      Email:
      
      <input type="text" v-model="asd">
    </label>
    <br>
    <select id="my-select" v-model="selectedOption">
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>

    <br>
    <br>
    <button @click="saveData()">Save</button>
  </form>
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
      name: '',
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
            lname: this.lname,
            selectedOption: this.selectedOption,
          }
          update(dbRefcustomers, { id: this.id });
          update(dbRefcustomers, { fname: this.fname });
          update(dbRefcustomers, { mname: this.mname });
          update(dbRefcustomers, { lname: this.lname });
          update(dbRefcustomers, { selectedOption: this.selectedOption });

      
      
    });


 


    }
  }
}
</script>
