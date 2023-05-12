<template>
  <div class="receipt">
  <div class="rHole">
    <div class="hole"></div>
    <div class="hole"></div>
    <div class="hole"></div>
    <div class="hole"></div>
    <div class="hole"></div>
    <div class="hole"></div>
    <div class="hole"></div>
    <div class="hole"></div>
  </div>
  <div class="content">
    <div class="header">
    <div class="headLeft">
      <img class="imgLogo" :src="logo" alt="logo">
    </div>
    <div class="headRight">
      <div class="rUp"> 
        <div class="schoolName">SAINT WILLIAM COOPERATIVE SCHOOL</div>
        <div class="official">OFFICIAL RECEIPT</div> 
      </div>
      <hr>
      <div class="rDown">
        <div class="schoolDetails">Corazon Poblacion, Catmon, Cebu Philippines</div>
        <div class="schoolDetails">+63 995 932 0034</div>
        <div class="schoolDetails">TIN 000-000-000-000 NON-VAT·BIR PERMIT No. 00-0000-000-00000-000</div>
      </div>
    </div>
  </div>
  </div>
  <div class="lHole">
    <div class="hole"></div>
    <div class="hole"></div>
    <div class="hole"></div>
    <div class="hole"></div>
    <div class="hole"></div>
    <div class="hole"></div>
    <div class="hole"></div>
    <div class="hole"></div>
  </div>
</div>
</template>

<script setup>
  import logo from "~/assets/images/logo.png";
</script>

<script>
  export default {
    methods: {
    printPage() {
      const printWindow = window.open('http://192.168.1.236:5173/receipt', 'printWindow');
      printWindow.onload = function() {
        printWindow.print();
      };
    }
  }
}
</script>

<style>
  .receipt{
    display: flex;
    print-color-adjust: exact;
  }

  .rHole,.lHole{
    width: 5%;
  }

  .hole{
    height: 15px;
    width: 15px;
    background-color: #52525b;
    border-radius: 30px;
    margin: 10px;
    margin-bottom: 15px;
  }

  .content{
    width: 90%;
    display: flex;
    padding-top: 15px;
  }

  .header{
    display: flex;
    width: 100%;
  }
  .imgLogo{
    height: 42px;
    width: 42px;
  }

  .rUp{
    display: flex;
  }

  .schoolName{
    width: 70%;
  }
  
  .official{
    width: 30%;
    text-align: end;
  }

  .headLeft{
    width: 7%;
  }
  .headRight{
    width: 93%;
  }

  .schoolDetails{
    font-size: 10px;
  }

  hr{
    border: 1px solid green;
  }
</style>
