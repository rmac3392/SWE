<template>
    <div class="flex h-full justify-center items-center w-full mx-0">
        <div class="white h-full justify-center items-center w-full mx-0">
            <div class="form ">
                <div class="left">
                </div>
                <div class="right">
                    <img :src="logo" alt="logo">
                    <br>
                    <div class="element px-16">
                        <label for="email">Username</label>
                        <br>
                        <input type="text" id="email" v-model="email" rounded-xl placeholder=" example@gmail.com     ">
                        <br>
                        <br>
                        <label for="password">Password </label>
                        <br>
                        <input type="password" id="password" v-model="password" placeholder="   **********">
                        <br>
                        <p v-f="errMsg">{{ errMsg	}}</p>

                        <br>
                        <label for="user">User</label>
                        <br>
                        <select name="user" id="user">
                            <option value="administrator">Administrator</option>
                            <option value="cashier">Cashier</option>
                        </select>
                        <br>
                        <br>
                        <br>
                        <br>
                        <button @click="register">LOGIN</button>
                        <p>Forgot Password? <span><a href="forgotPassword">CLICK HERE!</a></span></p>
                        <br>
                        <br>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

let loggedin = localStorage.getItem('log-in');
    

localStorage.setItem('currentWindow', 'A');
const currentWindow = localStorage.getItem('currentWindow')
console.log("current window is: "+currentWindow)


import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter} from "vue-router";
import logo from "~/assets/images/logo.png";
const email = ref("");
const password = ref("");
const errMsg = ref();
const router = useRouter();






const register =() => {
    if( loggedin=="true"){
        router.push("/cashierPage");
     
    }
	signInWithEmailAndPassword(getAuth(),email.value, password.value)
	.then((data) =>{
		console.log("Sucessfully signed in!");
        router.push("/cashierPage");
        
        localStorage.setItem('log-in', true);

       

		
	})
	.catch((error)=>{
		console.log(error.code);
		switch(error.code) {
		
		case "auth/invalid-email":
		errMsg.value = "INVALID EMAIL!";
		break;
		
		case "auth/user-not-found":
		errMsg.value = "NO ACCOUNT WITH THAT EMAIL IS FOUND";
		break;
		
		case "auth/wrong-password":
		errMsg.value = "INCORRECT PASSWORD";
		break;
		
		default:
		errMsg.value = "Email or Password was incorrect";
		break;

		}

	})
};

register();


</script>

<style scoped>
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
    background-image:url(../assets/images/img4.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position:-550px;
}

.element {
    padding-left: 90px;
    padding-right: 90px;
}

input,
select {
    border-radius: 30px;
    box-sizing: border-box;
    border-bottom: 2px solid #0F172A;
    position: flex;
    width: 291px;
    height: 38px;
    margin-left: auto;
    margin-right: auto;
}

select {
    text-align: center;
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
}

button {
    border-radius: 30px;
    box-sizing: border-box;
    background-color: #0F172A;
    color: #FEFEFE;
    position: flex;
    width: 291px;
    height: 47px;
    left: 779px;

}

span:hover {
    color: blue;
    text-decoration: underline;
    font-size: small;
    cursor: pointer;
}

button:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.50);
}

input:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.50);
}

select:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.50);
}

span {
    text-decoration: underline;
    font-size: small;
}

p {
    font-size: small;
    position: flex;
    text-align: center;
    margin-top: 10px;
}

label {
    color: #0F172A;
    position: flex;
}

img {
    margin-top: 5%;
    width: 105.26px;
    height: 100px;
    margin-left: auto;
    margin-right: auto;
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
