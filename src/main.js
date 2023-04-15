import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'



import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAF6AmQwc8_xQCsN9OCi_sQdbaKLFkSv9E",
  authDomain: "fir-prac-6263d.firebaseapp.com",
  projectId: "fir-prac-6263d",
  storageBucket: "fir-prac-6263d.appspot.com",
  messagingSenderId: "62625647160",
  appId: "1:62625647160:web:eeeb21b67f0c6b2f7974cd"
};

initializeApp(firebaseConfig);

const app = createApp(App)

import { getDatabase, ref,child ,get , update  } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";



app.use(router);

app.mount('#app')
