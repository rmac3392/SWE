<template>
    <div class="body">
        <div class="upper">
            <div class="left">
                <h3>A32</h3>
            </div>
            <div class="right">
                <h3>A33</h3>
            </div>
        </div>
        <div class="window">
            <div class="a">
                Window A
            </div>
            <div class="b">
                Window B
            </div>
        </div>
        <div class="queue">
            <div class="no">
                <h2>Queue No.</h2>
            </div>
            <div class="assign">
                <h2>Window</h2>
            </div>
        </div>
        <div class="personal">
            <h3 class="num">Queue No. :A35</h3>
        </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>

    h2{
        font-size: 25px;
    }

    .no{
        width: 100%;
        border-radius: 0px;
        display: flex;
        border-right: 1px solid #0F172A;    
        justify-content: center;
    }

    .assign{
        width: 100%;
        display: flex;
        border-left: 1px solid #0F172A;
        text-align: center;
        justify-content: center;
    }
    .personal{
        margin-top: 15px;
        background-color: #0F172A;
        width: 360px;
        border-radius: 10px,10px,10px,10px;
        padding: 15px;
        text-align: center;
    }

    .num{
        font-size: 43px;
    }

    .queue{
        display: flex;
        height: 475px;
        width: 325px;
        background-color: #fefefe;
        margin-left: 18px;
        border-radius: 10px;
    }
    .body {
      background-color: #D9D9D9;
      display: flex;
      flex-wrap: wrap; /* Allows elements to wrap to next line on small screens */
      justify-content: center; /* Centers elements horizontally */
      flex-direction: column;
      box-sizing: border-box;
    }
    .upper{
      background-color: #D9D9D9;
      display: flex;
      flex-wrap: wrap; /* Allows elements to wrap to next line on small screens */
      justify-content: center; /* Centers elements horizontally */
      align-items: center; /* Centers elements vertically */
    }

    .window{
      background-color: #D9D9D9;
      display: flex;
      flex-wrap: wrap; /* Allows elements to wrap to next line on small screens */
      justify-content: center; /* Centers elements horizontally */
      align-items: center; 
      margin-bottom: 15px;
    }

    .a{

        font-weight: 600;
        font-size: 30px;
    }
    .b{
        font-weight: 600;
        font-size: 30px;
    }
  
    .left {
      background-color: #0F172A;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
      height: 15px;
      width: 15px;
      border-radius: 20px;
      padding: 15px;
      text-align: center;
      /* Adds some space between elements */
    }
  
    .right {
      background-color: #0F172A;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
      border-radius: 20px;
      height: 15px;
      width: 15px; 
      padding: 15px;
      text-align: center;
    }

    h3{
        color: #fefefe;
        font-weight: 700;
        font-size: 45px;
    }
    /* Media query for screens smaller than 768px */
    @media (max-width: 768px) {
      .left, .right {
        height: 80px;
        width: 125px;
        margin-top: 25px;
        margin-left: 20px;
        margin-right: 20px; /* Reduces the size and space between elements */
        margin-bottom: 5px;
        border-radius: 20px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
        padding: 8px;
      }

      .a,.b{
        font-size: 20px;
      }
      .b{
        margin-left: 80px;
      }
    }
  </style>