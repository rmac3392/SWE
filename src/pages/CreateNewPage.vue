<template>
    <div class="flex h-full justify-center items-center w-full mx-0">
        <div class="white h-full justify-center items-center w-full mx-0">
            <div class="form">
                <img :src="logo" alt="logo">
                <p>CREATE NEW PASSWORD</p>
                <br>
                <br>
                <form class="element px-16">
                    <label for="newPassword">New Password</label><br>
                    <input type="text" id="newPassword" class="no1"><br>
                    <label for="retryPassword">Retry Password</label><br>
                    <input type="text" id="createPassword" class="no2"><br>
                    <br>
                    <br>
                    <button>SUBMIT</button>
                    <button>CANCEL</button>
                </form>
            </div>
        </div>

    </div>
</template>

<script setup>
import logo from "~/assets/images/logo.png";
</script>

<style scoped>
.form {
    position: flex;
    width: 482px;
    height: 512px;
    background: #FEFEFE;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.75);
    border-radius: 25px;
    padding-left: 3%;
    padding-right: 3%;
}


label {
    position: flex;
    width: 172px;
    height: 19px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    color: #0F172A;
    padding-left: 0px;

}

button {
    border-radius: 30px;
    box-sizing: border-box;
    background-color: #0F172A;
    color: #FEFEFE;
    width: 291px;
    height: 47px;
    left: 779px;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    position: flex;
}

button:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.50);
}

input:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.50);
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
    text-align: center;
    margin-top: 5px;
}



img {
    height: 85px;
    margin-top: 5%;
    margin-left: auto;
    margin-right: auto;
    display: block;
}

input {
    border-radius: 30px;
    box-sizing: border-box;
    border-bottom: 2px solid #0F172A;
    width: 280px;
    height: 38px;
}

.white {
    display: flex;
    background-color: #ffffff99;
    height: 100%;
}

.flex {
    background-image: url(..\assets\images\loginBg.jpg);
    background-size: cover;
    width: 100%;
}
</style>
