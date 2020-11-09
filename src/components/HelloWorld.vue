<template>
  <v-container>
    <v-card
  elevation="2"
  outlined
>
      <div class="card1">
        <div class="head-card1">
          <div class="card1-left">
            <div><h1>สมาชิกผู้ใช้</h1></div>
            <div><h2>วันนี้</h2></div>
            <div><h3>ปฏิทิน</h3></div>
          </div>
          <div class="card1-right">
            <p>icon exit</p>
          </div>
        </div>
        <div >
          <p>content</p>
        </div>
      </div>

    </v-card>
    
  </v-container>
</template>



<style scoped>
.head-card1{
  display: flex;
  /* justify-items: space-between; */
  justify-content: space-between;
}
.card1-left{
  display: flex;
  justify-content: space-around;
  justify-items: space-around;
  padding:10px;
}
.card1-right{
  display: flex;
  padding:10px;
}
</style>