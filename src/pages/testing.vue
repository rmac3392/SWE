<template>
  <form @submit.prevent="saveData">
    <label>
      Name:
      <input type="text" v-model="name">
    </label>
    <label>
      Email:
      <input type="email" v-model="email">
    </label>
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
            name: this.name,
            email: this.email
          }
          push(dbRefcustomers, { name: this.name });
          push(dbRefcustomers, { email: this.email });
      
    });

 


    }
  }
}
</script>
