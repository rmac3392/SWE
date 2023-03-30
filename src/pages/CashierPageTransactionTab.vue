<template>
  <div class="flex h-full justify-center items-center  mx-0 w-full">
    <div class="queuePane"></div>
    <div class="billingPane justify-center">
        <div class="upper ">
            <div class="userInfo"></div>
            <div class="logoutImage">
                
            </div>
        </div>
        <div class="bottom">
            <div class="editDetailsPane"></div>
            <div class="tabs"></div>  
        </div>
    </div>
  </div>
</template>
<script setup>
    import logo from "~/assets/images/logo.png";
   
</script>

<style scoped>
.upper{
    display: flex;
    margin-top: 10px;
    margin-left: 8px;
    margin-right: 8px;
    margin-bottom: 0px;
}

.bottom{
    display: flex;
    height: 85%;
    margin: 5px;
}
.flex{

    background-color: #0F172A;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 10px;
    padding-bottom: 10px;

}
.queuePane{

    position: flex;
    background-color: #1E293B;
    width: 30%;
    height: 100%;
    margin-right: 7.5px;
    border-radius: 35px;

}
.billingPane{
    position: flex;
    background-color: #1E293B;
    width: 70%;
    height: 100%;
    margin-left: 7.5px;
    border-radius: 35px;
    padding: 0px;
}
.userInfo{
    position: flex;
    width: 90%;
    height: 54px;
    background-color: #0F172A;
    border-radius: 30px;
}
.logoutImage{
    position: flex;
    width: 10%;
    height: 54px;
}



.editDetailsPane{

    width: 40%;
    height: 100%;
    background-color: #0F172A;
    margin: 5px;
    border-radius: 10px;
}

.tabs{
    width: 60%;
    height: 100%;
    background-color: #0F172A;
    margin: 5px;
    border-radius: 10px;
}
</style>
