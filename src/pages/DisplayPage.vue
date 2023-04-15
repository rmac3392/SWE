<template>
  <div class="flex h-full justify-center items-center w-full mx-0">
      <div class="white h-full justify-center items-center w-full mx-0">
          <div class="form ">
              <div class="left">
                <div class="text">
                  <p class= "text1">Scan Here</p>
                </div>
                <div class="qr">
                  <img src="../assets/images/qr.png" alt="">
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
                          <p class="queue">045</p>
                        </div>
                      </div>
                      <div class="b">
                        <div class="upB">
                          <p class="windowName">Window B</p>
                        </div>
                        <div class="lowB">
                          <p class="queue">046</p>
                        </div>
                      </div>
                    </div>
                    <div class="lower">
                      <div class="number">
                        <div class="queueNum">
                          <p class="label">Ticket Number</p>
                          <p class="items">044</p>
                          <p class="items">043</p>
                          <p class="items">042</p>
                          <p class="items">041</p>
                          <p class="items">040</p>
                        </div>
                      </div>
                        <div class="windowSide">
                          <div class="windowNum">
                            <p class="label">Window</p>
                            <p class="items"> A</p>
                            <p class="items"> B</p>
                            <p class="items"> A</p>
                            <p class="items"> B</p>
                            <p class="items"> A</p>
                          </div>

                        </div>
                      </div>
                </div>
              </div>
          </div>
      </div>
</template>

<script setup>
// import { ref } from "vue";
import logo from "~/assets/images/logo.png";
// import axios from "axios";

// const name = ref("");
// const pass = ref("");

async function onLogin() {
  // const response = await axios.post("http://127.0.0.1:3000/login", {
  //     user: "asdc",
  //     pass: "asdcasdcasdcs"
  // });
}
</script>

<style scoped>

.label{
  text-align: center;
  color: #0F172A;
  font-size: 25px;
  font-weight: 600;
}

.items{
  text-align: center;
  color: #0F172A;
  font-size: 30px;
  font-weight: 800;
}

.number{
  display: flex;
  border-right: #0F172A solid 1px;
  align-items: center;
  justify-content: center;
  width: 50%;
}
.windowSide{
  display: flex;
  width: 50%;
  border-left: #0F172A solid 1px;
  align-items: center;
  justify-content: center;
}

.windowName{
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 12px;
  margin-top: 5px;
}
.lowA{
  display: flex;
  justify-content: center;
  align-items: center;
}
.upA{
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FEFEFE;
}
.lowB{
  display: flex;
  justify-content: center;
  align-items: center;
}
.upB{
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FEFEFE;
}
.queue{
  color: #FEFEFE;
  font-size: 40px;
  font-weight: 800;
}
.a{
  width: 50%;
  border-right: #FEFEFE solid 1px;
  align-items: center;
  justify-content: center;
}
.b{
  width: 50%;
  border-left: #FEFEFE solid 1px;
  align-items: center;
  justify-content: center;
}
.text2{
  font-family: 'Baloo Bhai 2';
  text-align: center;
  color: #0F172A;
  font-size: 40px;
  font-weight: bold;
  
}
.text1{
  text-align: center;
}
.upper{
  display: flex;
  background-color: #0F172A;
  height: 30%;
  border-radius: 20px;
}

.lower{
  display: flex;
  background-color: #D9D9D9;
  height: 58%;
  margin-top: 10px;
  border-radius: 20px;
}

.right{
  padding: 15px;
}
.qr{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
}
.text{
  color: #FEFEFE;
  font-size: 50px;
  margin-top: 50px;
  font-weight:bold;
  font-family: 'Baloo Bhai 2';
}
.form {
  @apply grid grid-cols-2 m-4 bg-white;
  background: #FEFEFE;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.75);
  border-radius: 25px;
  width: 957px;
  height: 587px;
}

.left {
  background: #0F172A;
  border: 1px solid #0F172A;
  border-radius: 25px;
}

.elements{
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
  background-image: url(..\assets\images\loginBg.jpg);
  background-size: cover;
}
</style>
