<template>
    <div class="flex h-full justify-center items-center  mx-0 w-full">
        <div class="queuePane">
            <br>
            <p class="current">CURRENTLY SERVING</p>
            <br>
            <div class="uQueue">
                <div class="windowA">
                    <p class="currentNum">034</p>
                </div>
                <div class="windowB">
                    <p class="currentNum">035</p>
                </div>
            </div>
            <div class="uQueue">
                <div class="windowTextA">Window A</div>
                <div class="windowTextB">Window B</div>
            </div>
        </div>
        <div class="billingPane justify-center">
            <div class="upper ">
                <div class="userInfo">
                    <div class="user">
                        <p>Name: <span id="userName">Ryan James Macawili</span></p>
                        <p>ID No: <span id="userId">20229464</span></p>
                    </div>
                    <div class="dateTime">
                        <p id="date">March 31, 2023</p>
                        <p id="time">12:35</p>
                    </div>
                    <div class="image">
                        <UserCircleIcon class="logout" />
                    </div>
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
import { UserCircleIcon } from '@heroicons/vue/24/solid'
</script>

<style scoped>

.uQueue{
    display: flex;
}
.windowA{
    display: flex;
    height: 64px;
    width: 97px;
    margin-left: 75px;
    margin-right: 25.5px;
    background-color: #0F172A;
    border-radius: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
}

.windowB{
    display: flex;
    height: 64px;
    width: 97px;
    margin-left: 25.5px;
    margin-right: 51px;
    background-color: #0F172A;
    border-radius: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
}

.currentNum{
    font-size: 32px;
    color: #ffffff;
    font-weight: 800;
    line-height: 60px;
}

.windowTextA{
    color: #ffffff;
    margin-left: 80px;
    margin-right: 29px;
    margin-top: 7px;
    font-weight: 700;
    font-size: 18px;
}
.windowTextB{
    color: #ffffff;
    margin-left: 29px;
    margin-right: 55px;
    margin-top: 7px;
    font-weight: 700;
    font-size: 18px;
}

.logout {
    color: #ffffff;
    width: 55px;
    height: 55px;
    margin-bottom: 2px;

}

.image {
    height: 100%;
}

.current{
    text-align: center;
    font-size: 20px;
    color: #ffffff;
    font-style: normal;
    font-weight: 600;
}

.dateTime {
    color: #ffffff;
    width: 15%;
    height: 100%;
    padding-top: 2px;
}

.user {
    color: #ffffff;
    width: 85%;
    padding-left: 20px;
    height: 100%;
    padding-top: 2px;
}

.upper {
    display: flex;
    margin-top: 10px;
    margin-left: 8px;
    margin-right: 8px;
    margin-bottom: 0px;
}

.bottom {
    display: flex;
    height: 85%;
    margin: 5px;
}

.flex {
    background-color: #0F172A;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 10px;
    padding-bottom: 10px;

}

.queuePane {
    position: flex;
    background-color: #1E293B;
    width: 30%;
    height: 100%;
    margin-right: 7.5px;
    border-radius: 35px;
    border: 1px solid #293549;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.8);

}

.billingPane {
    position: flex;
    background-color: #1E293B;
    width: 70%;
    height: 100%;
    margin-left: 7.5px;
    border-radius: 35px;
    padding: 0px;
    border: 1px solid #293549;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.8);
}

.userInfo {
    display: flex;
    width: 100%;
    height: 54px;
    background-color: #0F172A;
    border-radius: 30px;
    align-items: flex-end;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
}

.editDetailsPane {
    width: 40%;
    height: 100%;
    background-color: #0F172A;
    margin: 5px;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
}

.tabs {
    width: 60%;
    height: 100%;
    background-color: #0F172A;
    margin: 5px;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
}</style>
