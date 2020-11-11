<template>
  <v-container grid-list-lg-xl>
    <div class="card_el">
      <v-card elevation="2" outlined height="auto">
        <div class="card1-root">
          <div class="head-card1">
            <div class="card1-left">
              <div>
                <p><strong>สมาชิกผู้ใช้</strong></p>
              </div>
              <div>
                <v-btn class="white--text " small color="#AD8DBB"
                  >วันนี้</v-btn
                >
              </div>
              <div>
                <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            color="#AD8DBB"
            v-model="date"
            label="select date"
            prepend-icon="mdi-calendar"
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          no-title
          scrollable
          color="#AD8DBB"
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.menu.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
              </div>
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
              <v-card-text v-for="item in data_card1" :key="item.id">
                <div class="male-content">
                  <div class="top-male-content">
                    <div class="text-male" >
                      <v-icon x-small :style="{'color': item.color}" >mdi-circle</v-icon>
                      <v-icon :style="{'color': item.color}">{{item.icon}}</v-icon>
                      <span ><strong>{{item.gender}}</strong></span>
                    </div>
                    <div>
                      {{item.data}}
                    </div>
                  </div>
                  <div class="bot-male-content">
                    <div class="male-subdt">
                      {{ item.info}}
                    </div>
                    <div>
                      {{ item.percent}}
                    </div>
                  </div>
                </div>
              </v-card-text>
            </v-card>
            <v-card width="350" >
              <v-card-subtitle>
                อุปกรณ์
              </v-card-subtitle>
              <div class="card1-info-right pa-1" v-for="item in data_card1_info" :key="item.id">
                <div class="brand-content">
                  <div class="text-brand">
                    <v-icon x-small :style="{'color': item.color}">mdi-circle </v-icon>
                    <span> {{item.name}}</span>
                  </div>
                  <div>
                    {{item.data}}
                  </div>
                  <div class="card1-percent">
                    {{ item.percent}}
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
      <v-card elevation="2" outlined>
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
              <div class="card3-content">
                <v-card>
                  <v-card-text>
                    <canvas id="graph3-1" width="" height="200px"></canvas>
                  </v-card-text>
                </v-card>
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
                  <v-card-content> </v-card-content>
                </v-card>
                <!-- <p>content</p> -->
              </div>
            </div>
          </v-card>
        </div>
      </div>
    </div>
    <div class="card_el">
      <v-card elevation="2" outlined >
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
            <div class="card4-l-content">
              <div>
                
              </div>
            </div>
            <div class="card4-r-content">
                <div class="graph6-details px-2">
              <div class="progress-el">
                <v-progress-linear
                  color="purple darken-2"
                  rounded
                  value="100"
                ></v-progress-linear>
                <br />
                <span class="text-top">56.7 กก.</span>
                <v-progress-linear
                  color="blue darken-2"
                  rounded
                  value="100"
                ></v-progress-linear>
                <br />
                <span>76.6 กก.</span>
                <v-progress-linear
                  color="green darken-2"
                  rounded
                  value="100"
                ></v-progress-linear>
                <br />
                <span>85.8 กก.</span>
                <v-progress-linear
                  color="yellow darken-2"
                  rounded
                  value="100"
                ></v-progress-linear>
                <br />
                <span>98.0 กก.</span>
                <v-progress-linear
                  color="red darken-2"
                  rounded
                  value="100"
                ></v-progress-linear>
              </div>
              <br />
              <div class="progress-el icon-set">
                <div class="i-human">
                  <div><v-icon>mdi-human-male</v-icon></div>
                  <div><p>ผอมมาก</p></div>
                </div>
                <div class="i-human">
                  <div><v-icon>mdi-human-male</v-icon></div>
                  <div><p>ปกติ</p></div>
                </div>
                <div class="i-human">
                  <div><v-icon>mdi-human-male</v-icon></div>
                  <div><p>อวบ</p></div>
                </div>
                <div class="i-human">
                  <div><v-icon>mdi-human-male</v-icon></div>
                  <div><p>อ้วน ระยะที่1</p></div>
                </div>
                <div class="i-human">
                  <div><v-icon>mdi-human-male</v-icon></div>
                  <div><p>อ้วน ระยะที่2</p></div>
                </div>
              </div>
            </div>
            <v-container>
              <v-row v-for="item in items" :key="item.id">
                <v-col v-for="n in 5" :key="n">
                  <v-card class="black--text" outlined tile>
                    {{ item.data[n - 1] }}
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
            </div>
            <!-- <p>content</p> -->
          </div>
        </div>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import Chart from "chart.js";
export default {
  mounted: function() {
    var ctx0 = document.getElementById("graph0").getContext("2d");
    var bar0 = new Chart(ctx0, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [1471, 1329],
            backgroundColor: ["#9ACDE9", "#F8C5C5"],
          },
        ],
        labels: ["ชาย", "หญิง"],
      },
    });
    console.log(bar0);
    var ctx = document.getElementById("graph").getContext("2d");
    var bar = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["18-20", "21-30", "31-40", "41-50", "51-60", "60 Up"],
        backgroundColor: ["#ff6384", "#36a2eb"],
        datasets: [
          {
            label: "Man",
            backgroundColor: "#9ACDE9",
            data: [638, 557, 784, 652, 145, 24],
          },
          {
            label: "Woman",
            backgroundColor: "#F8C5C5",
            data: [270, 250, 275, 480, 145, 40],
          },
        ],
      },
    });
    console.log(bar);
    var ctx1 = document.getElementById("graph1").getContext("2d");
    var bar1 = new Chart(ctx1, {
      type: "horizontalBar",
      data: {
        labels: ["18-20", "21-30", "31-40", "41-50", "51-60", "60 Up"],
        datasets: [
          {
            label: "",
            backgroundColor: [
              "#58BFAE",
              "#FF3E80",
              "#FF850A",
              "#DA2121",
              "#B4B4B4",
              "#2289D8",
            ],
            data: [270, 250, 275, 480, 145, 40],
          },
        ],
      },
    });
    console.log(bar1);
    var ctx3 = document.getElementById("graph3-1").getContext("2d");
    var bar3 = new Chart(ctx3, {
      type: "horizontalBar",
      data: {
        labels: ["man", "woman"],
        datasets: [
          {
            label: "ก้าว",
            backgroundColor: ["#9ACDE9", "#F8C5C5"],
            data: [5380, 3700],
          },
        ],
      },
    });
    console.log(bar3);
  },
  date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
  data() {
    
    return {
      items: [
        { id: "1", gender: "ชาย", data: ["27", "98", "780", "34", "0"] },
        { id: "2", gender: "หญิง", data: [12, 132, 560, 22, 0] },
      ],
      data_card1: [
        { id: "1",color:'#9ACDE9',icon:'mdi-human-male', gender: "ชาย", data:"1471" ,info:"ค่าเฉลี่ยผู้ใช้งานเพศชายรายวัน",percent:"63%" },
        { id: "2",color:'#F8C5C5',icon:'mdi-human-female', gender: "หญิง", data: "1329",info:"ค่าเฉลี่ยผู้ใช้งานเพศหญิงรายวัน",percent:"27%" },
      ],
      data_card1_info:[
        { name:'Garmin',color:'#2289D8',data:'395',percent:'14.1%'},
        { name:'Suunto',color:'#DA2121',data:'422',percent:'15%'},
        { name:'Xiaomi',color:'#FF850A',data:'796',percent:'28.4%'},
        { name:'Honor',color:'#FF3E80',data:'321',percent:'11.4%'},
        { name:'Apple Watch',color:'#9C9C9C',data:'844',percent:'31.1%'},
        { name:'อื่นๆ',color:'#58BFAE',data:'22',percent:'0.7%'},
      ],
      data_card2: [
        {id:"1"},
      ],
    };
    
  },
};
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
.card1-root{
  padding-bottom:20px;
}
.card1-percent{
  padding-right:10px;
}
.head-card2 {
  display: flex;
  justify-content: start;
  padding: 20px;
}
.card2-graph {
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
.card1-info-right{
  font-size:12px;
}
.card3-content {
  display: flex;
  justify-content: space-around;
}
.text-brand{
  padding-left: 10px;
}
.card2-content {
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
}
.right-icon {
  display: flex;
  padding-left: 90%;
}
.male-content {
  display: flex;
  flex-direction: column;
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
.card4-l-content{
  width: 20%;
}
.card4-r-content{
  width: 80%;
}
.sex_card4 {
  padding: 0 10px;
}
.age_card4 {
  padding: 0 10px;
}
.sexnage_card4 {
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
.card4-content{
  display: flex;
}
.graph6-details {
  padding-top: 20px;
}
</style>
