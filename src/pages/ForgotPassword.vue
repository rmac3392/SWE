<template>
  <div class="flex h-full justify-center items-center container mx-auto">
        <div class="form">  
            <img :src="logo" alt="logo">
                <p >FORGOT PASSWORD</p>
                <p class="bold">Please enter your verification code you had received </p>
                <p class="bold">from the email you registered.</p>
                <br>
          
                <p>Verification Code</p>
                <br>
            <form>
                <input type="text" class="no1">
                <input type="text" class="no2">
                <input type="text" class="no2">
                <input type="text" class="no2">
            </form>
            <br>
            <br>
            <button>SUBMIT</button>
            
            <button>CANCEL</button>
        </div>
    </div>
</template>

<script setup>
    import logo from "~/assets/images/logo.png";
</script>

<style scoped>
.form {
    position: absolute;
    width: 482px;
    height: 512px;
    text-align: center;
    background: #FEFEFE;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.75);
    border-radius: 25px;
}
.left {
    background: #0F172A;
    border: 1px solid #0F172A;
    border-radius: 25px;
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
    position: block;
    width: 291px;
    height: 47px;
    left: 779px;
    margin-bottom: 10px;
}

.bold{


    color: #0F172A;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
}

p{
    position: block;
    margin-left:auto;
    margin-right:auto;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 45px;
    color: #0F172A;
}


label{
    color: #0F172A;
}
img{
    height: 85px;
    margin-top: 5%;
    margin-left: auto;
    margin-right: auto;
    display: block;
}

input{
    border-radius: 30px;
    box-sizing: border-box;
    border-bottom: 2px solid #0F172A; 
    width: 70px;
    height: 38px;
    margin-right: 15px;
    margin-left: 15px;
    text-align: center;
}
</style>
