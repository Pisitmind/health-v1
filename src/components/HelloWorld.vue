<template>
  <v-container grid-list-lg-xl>
    <div class="card_el">
      <v-card elevation="2" outlined height="350">
        <div class="card1-root">
          <div class="head-card1">
            <div class="card1-left">
              <div>
                <p>สมาชิกผู้ใช้</p>
              </div>
              <div>
                <v-btn>วันนี้</v-btn>
              </div>
              <div><h3>ปฏิทิน</h3></div>
            </div>
            <div class="card1-right">
              <div class="right-icon">
                <v-icon class="exit-icon">mdi-exit-to-app</v-icon>
              </div>
            </div>
          </div>
          <div class="card1-content">
            <div class="text-center">
              <canvas id="graph0" width="" height="200px"></canvas>
            </div>
            <v-card>
              <v-card-subtitle>
                ตัวบ่งชี้
              </v-card-subtitle>
              <v-card-text>
                <div class="male-content">
                  <div class="top-male-content">
                    <div class="text-male">
                      <v-icon x-small>mdi-circle</v-icon>
                      <v-icon>mdi-human-male</v-icon>
                      <!-- <v-icon>mdi-human-female</v-icon> -->
                      <span>ชาย</span>
                    </div>
                    <div>
                      1,471
                    </div>
                  </div>
                  <div class="bot-male-content">
                    <div class="male-subdt">
                      ค่าเฉลี่ยผู้ใช้งานเพศชายรายวัน
                    </div>
                    <div>
                      63%
                    </div>
                  </div>
                </div>
                <div class="female-content">
                  <div class="top-male-content">
                    <div class="text-male">
                      <v-icon x-small>mdi-circle</v-icon>
                      <v-icon>mdi-human-female</v-icon>
                      <span>หญิง</span>
                    </div>
                    <div>
                      1,329
                    </div>
                  </div>
                  <div class="bot-male-content">
                    <div class="male-subdt">
                      ค่าเฉลี่ยผู้ใช้งานเพศหญิงรายวัน
                    </div>
                    <div>
                      27%
                    </div>
                  </div>
                </div>
              </v-card-text>
            </v-card>
            <v-card width="350">
              <v-card-subtitle>
                อุปกรณ์
              </v-card-subtitle>
              <div class="pd-10">
                <div class="brand-content">
                  <div class="text-brand">
                    <v-icon x-small>mdi-circle </v-icon>
                    <span> Garmin</span>
                  </div>
                  <div>
                    395
                  </div>
                  <div>
                    14.1%
                  </div>
                </div>
                <div class="brand-content">
                  <div class="text-brand">
                    <v-icon x-small>mdi-circle </v-icon>
                    <span> Suunto</span>
                  </div>
                  <div>
                    422
                  </div>
                  <div>
                    15%
                  </div>
                </div>
                <div class="brand-content">
                  <div class="text-brand">
                    <v-icon x-small>mdi-circle </v-icon>
                    <span> Xiaomi</span>
                  </div>
                  <div>
                    796
                  </div>
                  <div>
                    28.4%
                  </div>
                </div>
                <div class="brand-content">
                  <div class="text-brand">
                    <v-icon x-small>mdi-circle </v-icon>
                    <span> Honor</span>
                  </div>
                  <div class="center-text">
                    <span>321</span>
                  </div>
                  <div class="center-text">
                    11.4%
                  </div>
                </div>
                <div class="brand-content">
                  <div class="text-brand">
                    <v-icon x-small>mdi-circle </v-icon>
                    <span> Apple Watch</span>
                  </div>
                  <div>
                    <span class="text-center">844</span>
                  </div>
                  <div>
                    31.1%
                  </div>
                </div>
                <div class="brand-content">
                  <div class="text-brand">
                    <v-icon x-small>mdi-circle </v-icon>
                    <span> อื่นๆ</span>
                  </div>
                  <div class="center-text">
                    22
                  </div>
                  <div class="center-text">
                    0.7%
                  </div>
                </div>
              </div>
            </v-card>
            <!-- <p>content</p> -->
          </div>
        </div>
      </v-card>
    </div>
    <div class="card_el">
      <v-card elevation="2" outlined >
        <div class="card2">
          <div class="head-card2">
            <p>ช่วงอายุ</p>
          </div>
          <div class="card2-content">
            <v-card elevation="1" class="card2-graph ">
              <canvas id="graph" width="" height="150px"></canvas>
            </v-card>
            <v-card>
              <v-card-title>
                เนื้อหา
              </v-card-title>
            </v-card>
            <!-- <p>content</p> -->
          </div>
        </div>
      </v-card>
    </div>
    <div class="card_el">
      <div class="card-split">
        <div class="card_l">
          <v-card elevation="2" outlined height="350">
            <div class="card3">
              <div class="head_card3">
                <div class="title-card3">
                  <div class=""><p>การก้าว</p></div>
                </div>
                <div class="sex-age-title-card3">
                  <div class="sex-title"><p>เพศ</p></div>
                  <div class="age-title"><p>อายุ</p></div>
                </div>
                <div class="icon-card3">
                  <div class="exit-icon-card3">
                    <v-icon class="exit-icon">mdi-exit-to-app</v-icon>
                  </div>
                </div>
              </div>
              <div class="card1-content">
                <v-card>
                  <v-card-subtitle>
                    ตัวบ่งชี้
                  </v-card-subtitle>
                  <v-card-text>
                    <canvas id="graph3-1" width="" height="180"></canvas>
                  </v-card-text>
                </v-card>
                <v-card>
                  <v-card-title>
                    เนื้อหา
                  </v-card-title>
                </v-card>
                <!-- <p>content</p> -->
              </div>
            </div>
          </v-card>
        </div>
        <div class="card_r">
          <v-card elevation="2" outlined height="350">
            <div class="card3">
              <div class="head_card3">
                <div class="title-card3">
                  <div class=""><p>การเผาผลาญ</p></div>
                </div>
                <div class="sex-age-title-card3">
                  <div class="sex-title"><p>เพศ</p></div>
                  <div class="age-title"><p>อายุ</p></div>
                </div>
                <div class="icon-card3">
                  <div class="exit-icon-card3">
                    <v-icon class="exit-icon">mdi-exit-to-app</v-icon>
                  </div>
                </div>
              </div>
              <div class="card1-content">
                <v-card>
                  <v-card-title>
                    <canvas id="graph1" width="" height="200px"></canvas>
                  </v-card-title>
                  <v-card-content>
                    
                  </v-card-content>
                </v-card>
                <!-- <p>content</p> -->
              </div>
            </div>
          </v-card>
        </div>
      </div>
    </div>
    <div class="card_el">
      <v-card elevation="2" outlined height="">
        <div class="card2">
          <div class="head_card4">
            <div class="title_card4">
              <div class="h_card4"><p>สัดส่วนน้ำหนัก</p></div>
              <div class="sexnage_card4">
                <div class="sex_card4"><p>เพศ</p></div>
                <div class="age_card4"><p>อายุ</p></div>
              </div>
            </div>
            <div class="icon-card3 card4">
              <div class="exit-icon-card3">
                <v-icon class="exit-icon">mdi-exit-to-app</v-icon>
              </div>
            </div>
          </div>
          <div class="card4-content">
            <div class="card6-graph">
              <canvas id="graphline" width="" height="25px"></canvas>
            </div>
            <div class="card6-details center">
              <h2>Icon human</h2>
            </div>
            <v-container>
              <v-row v-for="item in items"
          :key="item.id">
                <v-col v-for="n in 6"
          :key="n">
                  <v-card
            class="pa-2"
            outlined
            tile
          >
           {{item.data[n-1]}}
          </v-card>
                </v-col>
              </v-row>
            </v-container>
            <!-- <p>content</p> -->
          </div>
        </div>
      </v-card>
    </div>
  </v-container>
</template>

<script>

import Chart from 'chart.js'
export default{
  mounted: function () {
    var ctx0 = document.getElementById('graph0').getContext('2d')
    var bar0 = new Chart(ctx0, {
      type: 'doughnut',
      data:{
        datasets: [{
        data: [1471, 1329],
            backgroundColor: ['#9ACDE9','#F8C5C5']
        }],
        labels: [
            'ชาย',
            'หญิง'
        ]
      }
    })
    console.log(bar0)
    var ctx = document.getElementById('graph').getContext('2d')
    var bar = new Chart(ctx, {
      type: 'bar',
      data:{
        labels: ['18-20' , '21-30' , '31-40', '41-50','51-60', '60 Up'],
        backgroundColor: [
            '#ff6384',
            '#36a2eb'
        ],
        datasets: [
          {
            label: 'Man',
            backgroundColor:'#9ACDE9',
            data: [638,557,784,652,145,24]
          },
          {
            label: 'Woman',
            backgroundColor:'#F8C5C5',
            data: [270,250,275,480,145,40]
          }
          ]

      }
    })
    console.log(bar)
    var ctx1 = document.getElementById('graph1').getContext('2d')
    var bar1 = new Chart(ctx1, {
      type: 'horizontalBar',
      data:{
        labels: ['18-20' , '21-30' , '31-40', '41-50','51-60', '60 Up'],
        datasets: [
          {
            label:'',
            backgroundColor:['#58BFAE','#FF3E80','#FF850A','#DA2121','#B4B4B4','#2289D8'],
            data: [270,250,275,480,145,40]
          }
          ]

      }
    })
    console.log(bar1)
    var ctx3 = document.getElementById('graph3-1').getContext('2d')
    var bar3 = new Chart(ctx3, {
      type: 'horizontalBar',
      data:{
        labels: ['man','woman'],
       datasets: [
          {
            label: 'ก้าว',
            backgroundColor:['#9ACDE9','#F8C5C5'],
            data: [5380,3700]
          },
          ]
      }
    })
    console.log(bar3)
    var ctx_line = document.getElementById('graphline').getContext('2d')
    var bar_line = new Chart(ctx_line, {
      type: 'line',
      options: {
        scales: {
          yAxes: [{
            display: false
          }],
        }
      },
      data:{
        datasets: [{
            data: [10,10,10,10,10],
            // backgroundColor:['purple'],
            backgroundColor:['purple','blue','green','orange','red'],
            above: ['purple','blue','green','orange','red'],   // Area will be red above the origin
            below: ['purple','blue','green','orange','red'], 
           borderColor: ['purple','blue','green','orange','red'], 
        }],
        labels: [
            '0','56.7','76.6','85.8','98.0'
        ],
      }
      
    })
    console.log(bar_line)
  },
  data(){
   
    return {
        items: [
          { id:'1',gender: 'ชาย', data:['27','98','780','34','0']},
          { id:'2',gender: 'หญิง', data:[12,132,560,22,0] },
        ],
        data_male:[{
        }
        ]
    }
  }
}
</script>

<style scoped lang="scss">
/* .card {
  display: flex;
  flex-direction: column;
} */
.head-card1 {
  display: flex;
  /* justify-items: space-between; */
  justify-content: space-between;
}
.head-card2 {
  display: flex;
  justify-content: start;
  padding: 20px;
}
.card2-graph{
  width: 60%;
}
.card1-left {
  display: flex;
  width: 100%;
  justify-content: space-around;
  justify-items: space-around;
  padding: 20px;
}
.card1-right {
  display: flex;
  width: 100%;
  padding: 10px;
  justify-content: center;
  align-items: right;
}
.card1-content {
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
}
.card2-content {
  display: flex;
  justify-content: space-around;
  padding:20px 0;
}
.right-icon {
  display: flex;
  padding-left: 90%;
}
.male-content {
  display: flex;
  flex-direction: column;
  padding: 10px;
}
.female-content {
  display: flex;
  flex-direction: column;
  padding: 10px;
}
.top-male-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.text-male {
  display: flex;
}
.bot-male-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.male-subdt {
  font-size: 11px;
  padding-right: 40px;
  padding-left: 15px;
}

.item-set {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.all {
  display: flex;
  flex-direction: column;
}

.brand-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
}

.pd-10 {
  padding: 10px;
}
.head_card3 {
  display: flex;
  justify-content: space-around;
  padding: 10px 10px;
}
.sex-age-title-card3 {
  display: flex;
  /* width: 50%; */
  /* background-color:violet; */
}
.sex-title {
  padding: 0 30px;
}
.age-title {
  padding: 0 30px;
}
.icon-card3 {
  padding: 0 0 0 50px;
  /* width: 100%; */
  /* padding: 10px; */
}
.title-card3 {
  display: flex;
  /* width: 100%; */
  justify-content: space-around;
}
.card_el {
  padding: 10px 10px;
  margin-bottom: 5px;
}
.card-split {
  display: flex;
  flex-direction: row;
}
.card_l {
  width: 100%;
  /* margin-right:10px; */
  padding-right: 10px;
}
.card_r {
  width: 100%;
  /* margin-left:10px; */
  padding-left: 10px;
}
.head_card4 {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
.title_card4 {
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.sex_card4 {
  padding: 0 10px;
}
.age_card4 {
  padding: 0 10px;
}
.sexnage_card4{
  display: flex;
  flex-direction: row;
  width: 20%;
}
.flex {
  display: flex;
}
.row {
  flex-direction: row;
}
.col {
  flex-direction: column;
}
.space-between {
  justify-content: space-between;
}
.space-around {
  justify-content: space-around;
}
/* .card4-content{
  display: flex;
  
} */
.card6-details{
  padding-top:20px;
}
</style>
