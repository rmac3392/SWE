<template>
  <div class="flex h-full justify-center items-center container mx-auto">
        <div class="form">
        <div class="left">            
        </div>
        <div class="right">
            <img :src="logo" alt="logo">
            <br>
           <form class="px-16">
            <label for="uname">Username</label>
            <br>
            <input type="text" id="uname" rounded-xl placeholder="   Username..."> 
            <br>
            <br>
            <label for="pword">Password </label>
            <br>
            <input type="password" id="password" placeholder="   **********">
            <br>
            <br>
            <label for="user">User</label>
            <br>
            <select name="user" id="user">
                <option value="administrator">Administrator</option>
                <option value="cashier">Cashier</option>
                <option value="accounting">Accounting</option>
            </select>
            <br>
            <br>
            <br>
            <br>
            <br>
            <button>LOGIN</button>
            <br>
            <br>
            <p>Forgot Password? <span>CLICK HERE!</span></p>
            <br>
            <br>
            <br>
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
    @apply grid grid-cols-2 m-4 bg-white ;
    
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
input,select{
    border-radius: 30px;
    box-sizing: border-box;
    border-bottom: 2px solid #0F172A; 
    position: absolute;
    width: 291px;
    height: 38px;
    left: 782px;
    margin-left: auto;
    margin-right: auto;
}
select{
    text-align:center;
}
label{
    position: absolute;
width: 172px;
height: 19px;
left: 782px;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 15px;
line-height: 18px;
}
button{
    border-radius: 30px;
    box-sizing: border-box;
    background-color: #0F172A;
    color: #FEFEFE;
    position: absolute;
    width: 291px;
    height: 47px;
    left: 779px;
  
}
span:hover{
    color: blue;
    text-decoration: underline;
    font-size:small;
    cursor: pointer;
}
span{
    text-decoration: underline;
    font-size:small;
}
p{
    font-size: small;
    position: absolute;
    left: 847px;
    margin-top: 10px;
}
label{
    color: #0F172A;
}
img{
    margin-top: 5%;
    width: 105.26px;
    height: 100px;
    margin-left: auto;
    margin-right: auto;
}
.flex{
    background-size: cover;
}
</style>
