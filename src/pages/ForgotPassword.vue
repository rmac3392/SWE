<template>
    <div class="flex h-full justify-center items-center w-full mx-0">
        <div class="white h-full justify-center items-center w-full mx-0">
            <div class="form py-2">
                <div class="x">
                    <XMarkIcon class="exit"  @click="back"/>
                </div>
                <div class="lower">
                <p>FORGOT PASSWORD</p>
                <p class="bold">Please verify your account by answering security</p>
                <p class="bold">questions you provided during registration</p>
             
                <p>What is the name of your first pet?</p>
                <img src="../assets/images/img5.png" alt="paper plane" class="plane"> 
                <input class="security" type="text">
                <button @click="proceed">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import logo from "~/assets/images/logo.png";
import {XMarkIcon} from '@heroicons/vue/24/solid';
</script>

<script>
export default {
  methods: {
    back() {
        this.$router.push('/');
    },
    proceed(){
        this.$router.push('/newPassword');
    }
  }
}
</script>

<style scoped>

.x{
    margin-left: 445px;
    height: 25px;
    width: 25px;

}
.form {
    position: flex;
    width: 482px;
    height: 512px;
    text-align: center;
    background: #FEFEFE;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.75);
    border-radius: 25px;
}

span{
    text-decoration: underline;
}

span:hover {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
}

.plane{
    width: 225px;
    height: 225px;
}

select {
    text-align: center;
}

button {
    border-radius: 30px;
    box-sizing: border-box;
    background-color: #0F172A;
    color: #FEFEFE;
    position: block;
    width: 280px;
    height: 47px;
    left: 779px;
    margin-top: 15px;
    margin-bottom: 0px;
}

button:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.50);
}

input:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.50);
}

.bold {
    font-family: 'Inter';
    color: #0F172A;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
}

p {
    position: block;
    margin-left: auto;
    margin-right: auto;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 45px;
    color: #0F172A;
}

img {
    height: 85px;
    margin-top: 0%;
    margin-left: auto;
    margin-right: auto;
    display: block;
}

input {
    border-radius: 30px;
    box-sizing: border-box;
    border: 2px solid #0F172A;
    width: 280px;
    height: 38px;
    margin-right: 15px;
    margin-left: 15px;
    text-align: center;
}

.white {
    display: flex;
    background-color: #ffffff99;
    height: 100%;
}

.flex {
    background-image: url(../assets/images/loginBg.jpg);
    background-size: cover;
    width: 100%;
}</style>
