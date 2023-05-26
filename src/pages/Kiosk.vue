<template>
  <div class="flex h-full justify-center items-center w-full mx-0">
    <div class="white h-full justify-center items-center w-full mx-0">
      <div class="form ">
        <div class="left">
          <div class="text">

            <div class="editDetailsPane">
              <div class="editP">
              <div class="title">
                <p class="per">PERSONAL INFORMATION</p>
              </div>
              <div class="personal">
                <label for="id" class="name">ID#</label>
                <input type="number" class="field1" id="id" v-model="idT"><br>
                <label for="fname" class="name">First Name</label>
                <input type="text" class="field2" id="fname" v-model="fnameT"><br>
                <label for="mname" class="name">Middle Name</label>
                <input type="text" class="field3" id="mname" v-model="mnameT"><br>
                <label for="lname" class="name">Last Name</label>
                <input type="text" class="field4" id="lname" v-model="lnameT"><br>
              </div>
              <div class="title">
                <p>EDUCATIONAL INFORMATION</p>
              </div>
              <div class="educational">
                <label for="educ" class="name">Educ. Level</label>
                <select v-model="edlevel" class="field5">
              <option value="Primary">Primary</option>
              <option value="Secondary">Secondary</option>
          </select>
                <label for="level" class="name">Grade/Year</label>
                <select v-model="grade" class="field6">
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
              <div class="title">
                <p>PAYMENT INFORMATION</p>
              </div>
              <div class="payment">
                <label for="tuition" class="name">Tuition Fees</label>
                <input type="text" class="field7" id="tuition" v-model="tintT"><br>
                <label for="misc" class="name">Miscellaneus</label>
                <input type="text" class="field8" id="tmisc" v-model="tmiscT"><br>

              </div>
            </div>
              <div class="buttons">
                <button class="butLow" @click="editInfo()">
                  <ArchiveBoxXMarkIcon class="commandIcon" />
                  CANCEL
                </button>
                <button class="butLow" @click="printPage()">
                  <DocumentCheckIcon class="commandIcon" />
                  SAVE
                </button>
              </div>
            </div>
          </div>
          </div>
          <div class="right">
            <p class="text2">Currently Serving</p>
            <div class="upper">
              <div class="a">
                <div class="upA">
                  <p class="windowName">Window A</p>
                </div>
                <div class="lowA">
                  <p class="queue">{{ currentAtext }}</p>
                </div>
              </div>
              <div class="b">
                <div class="upB">
                  <p class="windowName">Window B</p>
                </div>
                <div class="lowB">
                  <p class="queue">{{ currentBtext }}</p>
                </div>
              </div>
            </div>
            <div class="lower">
              <div class="number">
                <div class="queueNum">
                  <p class="label">WINDOW A</p>
                  <p class="items">{{ q1Af }}</p>
                  <p class="items">{{ q2Af }}</p>
                  <p class="items">{{ q3Af }}</p>
                  <p class="items">{{ q4Af }}</p>
                  <p class="items">{{ q5Af }}</p>
                </div>
              </div>
              <div class="windowSide">
                <div class="windowNum">
                  <p class="label">WINDOW B</p>
                  <p class="items"> {{ q1Bf }}</p>
                  <p class="items"> {{ q2Bf }}</p>
                  <p class="items"> {{ q3Bf }}</p>
                  <p class="items"> {{ q4Bf }}</p>
                  <p class="items"> {{ q5Bf }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <audio ref="audioNotif"
          src="https://firebasestorage.googleapis.com/v0/b/fir-68a5f.appspot.com/o/Announcement%20FX.mp3?alt=media&token=127c3677-c804-4523-a5bd-dd4438ce56ba"></audio>
    </div>
  </div>
</template>

<script>
  export default {
  methods: {
    printPage() {
      console.log("print");
      const printWindow = window.open('https://qmate.vercel.app/token', 'printWindow');
      printWindow.onload = function() {
        setTimeout(function(){
          printWindow.print();
          printWindow.close();
        }, 500);
      };
    },
  },
};
</script>

<script setup>
// import { ref } from "vue";
import logo from "~/assets/images/logo.png";
// import axios from "axios";
import { UserCircleIcon , BellAlertIcon , ForwardIcon, ArrowPathIcon, CheckBadgeIcon,DocumentCheckIcon,PencilSquareIcon,ArchiveBoxXMarkIcon,PrinterIcon,PaperAirplaneIcon} from '@heroicons/vue/24/solid'
// const name = ref("");
// const pass = ref("");


</script>



<style scoped>
.butLow:hover .commandIcon{
  color:#fefefe;
}

select{
  padding-left: 10px;
  color: #FEFEFE;
}


.commandIcon{
  width:40px ;
  height:40px;
  margin-right: 15px;
  color: #0F172A;
}

.butLow:hover{
  background-color: grey;
  color: #fefefe;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
}

.butLow{
  display: flex;
  background-color: #fefefe;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  margin-left: 10px;
  height: 65px;
  width: 150px;
  margin-top: 30px;
  color: #0F172A;
  font-weight: 900;
}

.buttons{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
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

.payments{
    width: 18%;
    height: 225px;
    text-align: end;
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
  margin-left: 102px;
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
  margin-left: 28px;
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

select:hover{
  box-shadow: 0px 4px 4px rgba(255, 255, 255, 0.5);
}

.personal{
  height: 156px;
}

.name{
  margin-left: 45px;
  color: #fefefe;
  font-size: 18px;
}

.per{
  margin-top: 33px;
}

.title{
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #fefefe;
  padding-left: 18px;
  margin-top: 5px;
}

.editDetailsPane {
  position: flex;
  width: 100%;
  height: 100%;
 
  /* margin: 5px; */
  border-radius: 25px;
  /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4); */
}

.editP {
  position: flex;
  width: 100%;
  height: 100%;
  
  margin-left: 48px;
  /* margin: 5px; */
  border-radius: 25px;
  /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4); */
}

input{
  color: #FEFEFE;
  padding-left: 10px;
}

img {
  height: 325px;
  width: 325px;
}

.label {
  text-align: center;
  color: #0F172A;
  font-size: 25px;
  font-weight: 600;
}

.items {
  text-align: center;
  color: #0F172A;
  font-size: 30px;
  font-weight: 800;
}

.number {
  display: flex;
  border-right: #0F172A solid 1px;
  align-items: center;
  justify-content: center;
  width: 50%;
}

.windowSide {
  display: flex;
  width: 50%;
  border-left: #0F172A solid 1px;
  align-items: center;
  justify-content: center;
}

.windowName {
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 12px;
  margin-top: 5px;
}

.lowA {
  display: flex;
  justify-content: center;
  align-items: center;
}

.upA {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FEFEFE;
}

.lowB {
  display: flex;
  justify-content: center;
  align-items: center;
}

.upB {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FEFEFE;
}

.queue {
  color: #FEFEFE;
  font-size: 40px;
  font-weight: 800;
}

.a {
  width: 50%;
  border-right: #FEFEFE solid 1px;
  align-items: center;
  justify-content: center;
}

.b {
  width: 50%;
  border-left: #FEFEFE solid 1px;
  align-items: center;
  justify-content: center;
}

.text2 {
  font-family: 'Baloo Bhai 2';
  text-align: center;
  color: #0F172A;
  font-size: 40px;
  font-weight: bold;

}

.text1 {
  text-align: center;
}

.upper {
  display: flex;
  background-color: #0F172A;
  height: 30%;
  border-radius: 20px;
}

.lower {
  display: flex;
  background-color: #D9D9D9;
  height: 58%;
  margin-top: 10px;
  border-radius: 20px;
}

.right {
  display: flex;
  flex-direction: column;
  /* background-color: aqua; */
  padding: 15px;
}

.qr {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
}

/* .text{
  color: #FEFEFE;
  font-size: 50px;
  margin-top: 50px;
  font-weight:bold;
  font-family: 'Baloo Bhai 2';
} */
.form {
  @apply grid grid-cols-2 m-4 bg-white;
  background: #FEFEFE;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.75);
  border-radius: 25px;
  width: 957px;
  height: 587px;
}

.left {
  display: flex;
  background: #0F172A;
  border: 1px solid #0F172A;
  border-radius: 25px;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.elements {
  display: flex;
  align-items: center;
  justify-content: center;
}

.white {
  display: flex;
  background-color: #ffffff99;
  height: 100%;
}

.flex {
  background-image: url(../assets/images/loginBg.jpg);
  background-size: cover;
}</style>
