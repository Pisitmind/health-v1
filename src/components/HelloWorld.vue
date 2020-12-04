<template>
  <v-container grid-list-lg-xl>
    <div class="card_el">
      <v-card elevation="2" outlined>
        <div class="card1-root">
          <div class="head-card1">
            <div class="card1-left">
              <div class="head_name_tag">
                <p><strong>สมาชิกผู้ใช้</strong></p>
              </div>
              <div class="">
                <v-btn class="white--text" small color="#AD8DBB" width="80px"
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
                      placeholder=""
                      prepend-inner-icon="mdi-calendar"
                      v-bind="attrs"
                      v-on="on"
                      dense
                      autofocus="true"
                      outlined
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    no-title
                    scrollable
                    color="#AD8DBB"
                  >
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false">
                      Cancel
                    </v-btn>
                    <v-btn text color="primary" @click="$refs.menu.save(date)">
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </div>
            </div>
            <div class="card1-right">
              <div class="right-icon">
                <v-btn small icon fab class="hid">
                  <v-icon class="exit-icon">mdi-exit-to-app</v-icon>
                </v-btn>
              </div>
            </div>
          </div>
          <div class="card1-content">
            <div class="text-center">
              <canvas id="graph0" width="" height="200px"></canvas>
            </div>
            <v-card height="">
              <v-card-subtitle>
                <span class="topic-name-card ">
                  ตัวบ่งชี้
                </span>
              </v-card-subtitle>
              <v-card-text v-for="item in data_card1" :key="item.id">
                <div class="male-content">
                  <div class="top-male-content">
                    <div class="text-male">
                      <v-icon x-small :style="{ color: item.color }"
                        >mdi-circle</v-icon
                      >
                      <v-icon :style="{ color: item.color }">{{
                        item.icon
                      }}</v-icon>
                      <span class="black--text"
                        ><strong>{{ item.gender }}</strong></span
                      >
                    </div>
                    <div class="black--text ">
                      <strong>{{ item.data }}</strong>
                    </div>
                  </div>
                  <div class="bot-male-content">
                    <div class="male-subdt grey--text">
                      {{ item.info }}
                    </div>
                    <div class="percent-subdt grey--text">
                      {{ item.percent }}
                    </div>
                  </div>
                </div>
              </v-card-text>
            </v-card>
            <v-card class="card1-subcard-3" width="350px" height="">
              <v-card-subtitle class="set_pdbot0">
                <span class="topic-name-card pl-5">
                  อุปกรณ์
                </span>
              </v-card-subtitle>
              <v-card-text class="pa-1">
                <div>
                  <table
                    class="card1-table"
                    justify="space-around"
                    width="100%"
                  >
                    <tr>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                    <tr v-for="item in data_card1_info" :key="item.name">
                      <td width="50%">
                        <v-icon x-small :style="{ color: item.color }"
                          >mdi-circle
                        </v-icon>
                        {{ item.name }}
                      </td>
                      <td>{{ item.data }}</td>
                      <td>{{ item.percent }}</td>
                    </tr>
                  </table>
                </div>
              </v-card-text>
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
            <p><strong>ช่วงอายุ</strong></p>
          </div>
          <div class="card2-content">
            <div class="card_left_c2_p1">
              <div class="card2-graph">
                <canvas id="graph" width="" height=""></canvas>
              </div>
              <div class="label_grpah">
                <table width="100%">
                  <tr>
                    <td style="text-align:center;">
                      <div class="label_text_card1">
                        <div>
                          <v-icon small color="blue"> mdi-circle</v-icon>
                          <span class="black--text"><strong>ชาย</strong></span>
                        </div>
                        <div class="pd_10">
                          <v-icon small color="pink"> mdi-circle</v-icon>
                          <span class="black--text"><strong>หญิง</strong></span>
                        </div>
                      </div>
                    </td>
                    <td width="50%"></td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="card_right_c2_p1">
              <v-card class="card2-subcard-3 ct_set" width="" height="300px">
                <v-card-subtitle>
                  <span class="topic-name-card pl-5">
                    ตัวบ่งชี้
                  </span>
                </v-card-subtitle>
                <v-card-text class="pa-1">
                  <div class="card-info-right pa-1">
                    <table class="card2-table">
                      <tr>
                        <th>ช่วงอายุ</th>
                        <th>ชาย</th>
                        <th>หญิง</th>
                        <th>เฉลี่ยรวม</th>
                      </tr>
                      <tr
                        v-for="item in data_card2_info"
                        :key="item.id"
                        height="30px"
                      >
                        <td class="two-data-card2">
                          <v-icon x-small :style="{ color: item.color }"
                            >mdi-circle
                          </v-icon>
                          {{ item.name }}
                        </td>
                        <td>{{ item.dataMan }}</td>
                        <td>{{ item.dataWman }}</td>
                        <td>{{ item.avg }}</td>
                      </tr>
                    </table>
                  </div>
                </v-card-text>
              </v-card>
            </div>
            <!-- <p>content</p> -->
          </div>
        </div>
      </v-card>
    </div>
    <div class="card_el">
      <div class="card-split">
        <div class="card_l">
          <v-card elevation="2" outlined height="350">
            <div class="card3 c_l">
              <div class="card3_headNsub">
                <div class="head_card3_l">
                  <div class="title-card3">
                    <div style="padding-right:10px;">
                      <v-icon large color="#AD8DBB">mdi-shoe-print</v-icon>
                    </div>
                    <div
                      class="card3-bot-text"
                      style=" display: flex; flex-wrap: wrap; align-content: center; 
                      text-align: center; align-item:center;"
                    >
                      <span><strong>การก้าว</strong></span>
                    </div>
                  </div>
                  <div class="sex-age-title-card3">
                    <div
                      class="sex-title"
                      style=" display: flex; flex-wrap: wrap; align-content: center; 
                      text-align: center; align-item:center;"
                    >
                      <v-btn
                        class="white--text "
                        small
                        color="#AD8DBB"
                        width="80px"
                        ><span>เพศ</span></v-btn
                      >
                    </div>
                    <div
                      class="age-title"
                      style=" display: flex; flex-wrap: wrap; align-content: center; 
                      text-align: center; align-item:center;"
                    >
                      <v-btn
                        class="#AD8DBB--text "
                        small
                        outlined
                        color="#AD8DBB"
                        width="80px"
                        ><span>อายุ</span></v-btn
                      >
                    </div>
                  </div>
                  <div class="icon-card">
                    <div class="exit-icon-card3">
                      <v-btn small icon fab class="hid">
                        <v-icon class="exit-icon">mdi-exit-to-app</v-icon>
                      </v-btn>
                    </div>
                  </div>
                </div>
                <div class="card3_line2 grey--text">
                  <span
                    >ค่าเฉลี่ยก้าวเดินของผู้ใช้เพศชาย และเพศหญิง รายวัน</span
                  >
                </div>
              </div>

              <div class="card3-content">
                <div>
                  <v-card-text>
                    <canvas id="graph3-1" width="450px" height="200px"></canvas>
                  </v-card-text>
                  <div class="label_grpah">
                    <table width="100%">
                      <tr>
                        <td style="text-align:left;">
                          <div class="label_text_card3">
                            <div>
                              <v-icon small color="blue"> mdi-circle</v-icon>
                              <span class="black--text"
                                ><strong>ชาย</strong></span
                              >
                            </div>
                            <div class="pd_10">
                              <v-icon small color="pink"> mdi-circle</v-icon>
                              <span class="black--text"
                                ><strong>หญิง</strong></span
                              >
                            </div>
                          </div>
                        </td>
                        <td width="50%"></td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </v-card>
        </div>
        <div class="card_r">
          <v-card elevation="2" outlined height="350">
            <div class="card3 c_r">
              <div class="card3_headNsub">
                <div class="head_card3_r">
                  <div class="title-card3">
                    <div style="padding-right:10px;">
                      <v-icon large color="#F57C00">mdi-fire</v-icon>
                    </div>
                    <div
                      class="card3-bot-text "
                      style="display: flex; flex-wrap: wrap; align-content: center;"
                    >
                      <span><strong>การเผาผลาญ</strong></span>
                    </div>
                  </div>
                  <div class="sex-age-title-card3">
                    <div class="sex-title">
                      <v-btn
                        class="#AD8DBB--text "
                        small
                        outlined
                        color="#AD8DBB"
                        width="80px"
                        ><span>เพศ</span></v-btn
                      >
                    </div>
                    <div class="age-title">
                      <v-btn
                        class="white--text "
                        small
                        color="#AD8DBB"
                        width="80px"
                        ><span>อายุ</span></v-btn
                      >
                    </div>
                  </div>
                  <div class="icon-card">
                    <div class="exit-icon-card3">
                      <v-btn small icon fab class="hid">
                        <v-icon class="exit-icon">mdi-exit-to-app</v-icon>
                      </v-btn>
                    </div>
                  </div>
                </div>
                <div class="card3_line2 grey--text">
                  <span>ค่าเฉลี่ยการเผาผลาญของผู้ใช้แต่ละช่วงอายุคน</span>
                </div>
              </div>
              <div class="card1-content">
                <div>
                  <v-card-title>
                    <canvas id="graph1" width="450px" height="220px"></canvas>
                  </v-card-title>
                  <v-card-content> </v-card-content>
                </div>
                <!-- <p>content</p> -->
              </div>
            </div>
          </v-card>
        </div>
      </div>
    </div>
    <div class="card_el">
      <v-card elevation="2" outlined>
        <div class="card5">
          <div>
            <div class="head_card4">
              <div class="title_card4">
                <div class="card4_nameNicon">
                  <div style="padding-right:10px;">
                    <v-icon color="#009688">mdi-scale</v-icon>
                  </div>
                  <div class="card3-bot-text ">
                    <span><strong>สัดส่วนน้ำหนัก</strong></span>
                  </div>
                </div>
                <div class="card4_head_btn">
                  <div class="sexnage_card4">
                    <div class="sex_card4">
                      <v-btn
                        class="white--text "
                        small
                        color="#AD8DBB"
                        width="80px"
                        ><span>เพศ</span></v-btn
                      >
                    </div>
                    <div class="age_card4">
                      <v-btn
                        class="#AD8DBB--text "
                        small
                        outlined
                        color="#AD8DBB"
                        width="80px"
                        ><span>อายุ</span></v-btn
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="icon-card">
                <div class="exit-icon-card3">
                  <v-btn small icon fab class="hid">
                    <v-icon class="exit-icon">mdi-exit-to-app</v-icon>
                  </v-btn>
                </div>
              </div>
            </div>
            <div class="card5_line2 grey--text">
              <span
                >สัดส่วนน้ำหนักร่างกายของแต่ละบุคคล สามารถบ่งบอกถึงสุขภาพได้
                ตามการเปลี่ยนแปลงของน้ำหนักตัว</span
              >
            </div>
          </div>
          <div class="card4-content">
            <div class="card5-top-content">
              <div class="graph6-details ">
                <!-- แถบprogress -->
                <table
                  style="width: 100%;
  border-collapse: collapse;"
                >
                  <tr>
                    <th width="16.67%"></th>
                    <th>
                      <div class="graph6-details ">
                        <!-- แถบprogress -->
                        <div class="progress-el">
                          <v-progress-linear
                            color="none"
                            rounded
                            value="100"
                          ></v-progress-linear>
                          <br />
                          <span class="text-top">56.7กก.</span>
                          <v-progress-linear
                            color="none"
                            rounded
                            value="100"
                          ></v-progress-linear>
                          <br />
                          <span class="text-top">76.6กก.</span>
                          <v-progress-linear
                            color="none"
                            rounded
                            value="100"
                          ></v-progress-linear>
                          <br />
                          <span class="text-top">85.8กก.</span>
                          <v-progress-linear
                            color="none"
                            rounded
                            value="100"
                          ></v-progress-linear>
                          <br />
                          <span class="text-top">98.0กก.</span>
                          <v-progress-linear
                            color="none"
                            rounded
                            value="100"
                          ></v-progress-linear>
                        </div>
                        <div class="progress-el">
                          <v-progress-linear
                            color="purple darken-2"
                            height="15"
                            class="rounded-l-xl"
                            value="100"
                          ></v-progress-linear>
                          <br />
                          <v-progress-linear
                            color="blue darken-2"
                            height="15"
                            value="100"
                          ></v-progress-linear>
                          <br />
                          <v-progress-linear
                            color="green darken-2"
                            height="15"
                            value="100"
                          ></v-progress-linear>
                          <br />
                          <v-progress-linear
                            color="yellow darken-2"
                            height="15"
                            value="100"
                          ></v-progress-linear>
                          <br />
                          <v-progress-linear
                            color="red darken-2"
                            height="15"
                            class="rounded-r-xl"
                            value="100"
                          ></v-progress-linear>
                        </div>
                      </div>
                    </th>
                  </tr>
                </table>
              </div>
            </div>
            <div class="card5-bottom-content">
              <!-- ใส่ในนี้ -->
              <div class="table_c5">
                <table
                  style="width: 100%;
  border-collapse: collapse;"
                >
                  <tr>
                    <th></th>
                    <th>
                      <div class="i-human">
                        <div><v-icon>mdi-human-male</v-icon></div>
                        <div class="t-icon"><p>ผอมมาก</p></div>
                      </div>
                    </th>
                    <th>
                      <div class="i-human">
                        <div><v-icon>mdi-human-male</v-icon></div>
                        <div class="t-icon"><p>ปกติ</p></div>
                      </div>
                    </th>
                    <th>
                      <div class="i-human">
                        <div><v-icon>mdi-human-male</v-icon></div>
                        <div class="t-icon"><p>อวบ</p></div>
                      </div>
                    </th>
                    <th>
                      <div class="i-human">
                        <div><v-icon>mdi-human-male</v-icon></div>
                        <div class="t-icon"><p>อ้วน ระยะที่1</p></div>
                      </div>
                    </th>
                    <th>
                      <div class="i-human">
                        <div><v-icon>mdi-human-male</v-icon></div>
                        <div class="t-icon"><p>อ้วน ระยะที่2</p></div>
                      </div>
                    </th>
                  </tr>
                  <tr v-for="item in items" :key="item.id" align="center">
                    <th scope="row">
                      <v-icon :style="{ color: item.color }">{{
                        item.icon
                      }}</v-icon>
                      <span class="black--text"
                        ><strong>{{ item.gender }}</strong></span
                      >
                    </th>
                    <td
                      v-for="n in 5"
                      :key="n"
                      width="16.67%"
                      height="40px"
                      style="font-size:24px; font-weight: bold; border:1.5px solid; #757575;"
                    >
                      {{ item.data[n - 1] }}
                    </td>
                  </tr>
                </table>
              </div>
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
    var config = {
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
      options: {
        elements: {
          center: {
            text: "ผู้ใช้ทั้งหมด 2,800 คน",
            color: "#000000", // Default is #000000
            fontStyle: "Arial", // Default is Arial
            sidePadding: 40, // Default is 20 (as a percentage)
            minFontSize: 15, // Default is 20 (in px), set to false and text will not wrap.
            lineHeight: 25, // Default is 25 (in px), used for when text wraps
          },
        },
        responsive: true,
        legend: {
          display: false,
        },
      },
    };
    var ctx0 = document.getElementById("graph0").getContext("2d");
    var bar0 = new Chart(ctx0, config);
    console.log(bar0);

    var ctx = document.getElementById("graph").getContext("2d");
    var bar = new Chart(ctx, {
      type: "bar",
      options: {
        legend: {
          display: false,
        },
        tooltips: {
          enabled: false,
        },
        scales: {
          yAxes: [
            {
              display: true,
              ticks: {
                suggestedMin: 200, // minimum will be 0, unless there is a lower value.
                stepValue: 250,
                max: 1000,
              },
              scaleLabel: {
                display: false,
                labelString: "",
              },
            },
          ],
          xAxes: [
            {
              display: true,
            },
          ],
        },
      },
      data: {
        labels: ["18-20", "21-30", "31-40", "41-50", "51-60", "60 Up"],
        backgroundColor: ["#ff6384", "#36a2eb"],
        Color: [
          "#58BFAE",
          "#FF3E80",
          "#FF850A",
          "#DA2121",
          "#B4B4B4",
          "#2289D8",
        ],
        datasets: [
          {
            label: "ชาย",
            backgroundColor: "#9ACDE9",
            data: [638, 557, 784, 652, 145, 24],
          },
          {
            label: "หญิง",
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
      options: {
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              // display: true,
            },
          ],
          xAxes: [
            {
              display: true,
              ticks: {
                suggestedMin: 0, // minimum will be 0, unless there is a lower value.
                stepValue: 250,
                max: 1200,
              },
              scaleLabel: {
                display: true,
                labelString: "แคล",
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
      data: {
        labels: ["18-20", "21-30", "31-40", "41-50", "51-60", "60 Up"],
        datasets: [
          {
            label: "",
            barPercentage: 0.8,
            categoryPercentage: 0.8,
            backgroundColor: [
              "#58BFAE",
              "#FF3E80",
              "#FF850A",
              "#DA2121",
              "#B4B4B4",
              "#2289D8",
            ],
            data: [984, 627, 743, 505, 286, 211],
          },
        ],
      },
    });
    console.log(bar1);
    var ctx3 = document.getElementById("graph3-1").getContext("2d");
    var bar3 = new Chart(ctx3, {
      type: "horizontalBar",
      options: {
        tooltips: {
          // Add this..
        },
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              display: true,
            },
          ],
          xAxes: [
            {
              display: true,
              ticks: {
                suggestedMin: 1000, // minimum will be 0, unless there is a lower value.
                stepValue: 1000,
                max: 6000,
              },
              scaleLabel: {
                display: false,
                labelString: "ก้าว",
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
      data: {
        labels: ["male", "female"],
        // labels: ["mdi-human-male", "mdi-human-female"],
        datasets: [
          {
            barPercentage: 0.5,
            label: "ก้าว",
            backgroundColor: ["#9ACDE9", "#F8C5C5"],
            data: [3628, 4874],
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
        {
          gender: "ชาย",
          icon: "mdi-human-male",
          icons: "../assets/icon/icon_men.svg",
          color: "#359BD3",
          data: [27, 98, 780, 34, 0],
        },
        {
          gender: "หญิง",
          icon: "mdi-human-female",
          icons: "../assets/icon/icon_women.svg",
          color: "#F28C8C",
          data: [12, 132, 560, 22, 0],
        },
      ],
      data_card1: [
        {
          id: "1",
          color: "#359BD3",
          icon: "mdi-human-male",
          gender: "ชาย",
          data: "1,471",
          info: "ค่าเฉลี่ยผู้ใช้งานเพศชายรายวัน",
          percent: "63%",
        },
        {
          id: "2",
          color: "#F28C8C",
          icon: "mdi-human-female",
          gender: "หญิง",
          data: "1,329",
          info: "ค่าเฉลี่ยผู้ใช้งานเพศหญิงรายวัน",
          percent: "27%",
        },
      ],
      data_card1_info: [
        { name: "Garmin", color: "#2289D8", data: "395", percent: "14.1%" },
        { name: "Suunto", color: "#DA2121", data: "422", percent: "15%" },
        { name: "Xiaomi", color: "#FF850A", data: "796", percent: "28.4%" },
        { name: "Honor", color: "#FF3E80", data: "321", percent: "11.4%" },
        {
          name: "Apple Watch",
          color: "#9C9C9C",
          data: "844",
          percent: "31.1%",
        },
        { name: "อื่นๆ", color: "#58BFAE", data: "22", percent: "0.7%" },
      ],
      data_card2_info: [
        {
          name: "18-20",
          color: "#58BFAE",
          dataMan: "638",
          dataWman: "270",
          avg: "22.7%",
        },
        {
          name: "21-30",
          color: "#FF3E80",
          dataMan: "557",
          dataWman: "250",
          avg: "19.9%",
        },
        {
          name: "31-40",
          color: "#FF850A",
          dataMan: "784",
          dataWman: "275",
          avg: "28%",
        },
        {
          name: "41-50",
          color: "#DA2121",
          dataMan: "652",
          dataWman: "480",
          avg: "23.2%",
        },
        {
          name: "51-60",
          color: "#B4B4B4",
          dataMan: "145",
          dataWman: "145",
          avg: "5.1%",
        },
        {
          name: "60ขึ้นไป",
          color: "#2289D8",
          dataMan: "24",
          dataWman: "40",
          avg: "1.1%",
        },
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
.hid {
  display: none;
}
.head_name_tag {
  font-size: 20px;
}
.v-text-field {
  padding-top: 0px;
  margin-top: 0px;
}
.ct_set {
  align-items: center;
  justify-content: center;
  justify-items: center;
  // text-align: center;
  padding: auto;
  margin: auto;
}
th {
  text-align: center;
}
.card1-root td {
  padding: 0 25px;
  text-align: left;
}
.card1-table {
  font-size: 12px;
  color: #5b5b5b;
}
.card2-table {
  font-size: 12px;
  color: #5b5b5b;
  td {
    padding: 0 26px;
    text-align: left;
  }
}
.topic-name-card {
  color: #ad8dbb;
}
.two-data-card2 {
  padding: 2px 0px;
}
.head-card1 {
  display: flex;
  justify-content: space-between;
  // padding-bottom:20px;
}
.card1-root {
  padding: 20px;
}
.card1-percent {
  padding-right: 10px;
}
.card1-left {
  display: flex;
  width: 100%;
  justify-content: space-around;
  justify-items: space-around;
  // background-color:rgba(0,0,50,0.2);
}
.pd_top10 {
  padding-top: 10px;
}
.card1-right {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: right;
}
.card1-content {
  display: flex;
  justify-content: space-around;
  // padding-top: 20px;
  // height:"100%";
}
.card-info-right {
  font-size: 12px;
}
.pdr-5 {
  padding: 10px;
}
.card1-subcard-3 {
  padding-bottom: 15px;
}
.set-center {
  margin: auto;
  width: 90%;
}
.text-brand {
  padding-left: 10px;
}
.head-card2 {
  display: flex;
  justify-content: start;
  padding-left: 10px;
  font-size: 20px;
}
.card2 {
  padding: 20px;
}
.card2-graph {
  width: 100%;
  padding-right: 10px;
}
.card2-subcard-3 {
  padding-left: 10px;
}
.card2-content {
  display: flex;
  width: 100%;
  justify-content: space-around;
  padding: 20px 0;
}
.text-ageRange {
  padding-left: 15px;
}
.head_card3_l {
  display: flex;
  justify-content: space-around;
  padding: 20px 10px 0px 10px;
}
.head_card3_r {
  display: flex;
  justify-content: space-around;
  padding: 20px 10px 0px 10px;
}
.subtext-card3 {
  display: flex;
  justify-content: start;
  padding: 0px 10px;
}
.card3-content {
  display: flex;
  justify-content: space-around;
}

.card3-bot-text {
  display: flex;
  justify-content: center;
  font-size: 20px;
}
.card3_line2 {
  padding-left: 30px;
  font-size: 11px;
  padding-top: 5px;
}
.card5_line2 {
  font-size: 11px;
  padding-top: 5px;
}
.sex-age-title-card3 {
  display: flex;
  /* width: 50%; */
  /* background-color:violet; */
}
.sex-title {
  padding: 0 10px 0 30px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  text-align: center;
  align-items: center;
}
.age-title {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  text-align: center;
  align-items: center;
}
.icon-card {
  padding: 0 0 0 50px;

  /* width: 100%; */
  /* padding: 10px; */
}
.title-card3 {
  display: flex;
  /* width: 100%; */
  justify-content: space-around;
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
.percent-subdt {
  font-size: 11px;
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
  // justify-content: space-around;
  justify-content: space-between;
  margin: 0 auto;
  // text-align: left;
}
.set_pdbot0 {
  padding: 16px 16px 0 16px;
}
.pd-10 {
  padding: 10px;
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
.card3_headNsub {
  display: flex;
  flex-direction: column;
  // background-color:gray;
}
.head_card4 {
  display: flex;
  justify-content: space-between;
  // padding: 20px;
}
.title_card4 {
  width: 60%;
  display: flex;
  flex-direction: row;
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
.card4-content {
  display: flex;
  flex-direction: column;
}
.card4_nameNicon {
  display: flex;
  padding-right: 60px;
}
.card_left_c2_p1 {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.card_right_c2_p1 {
  width: 40%;
  padding-left: 20px;
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

.graph6-details {
  padding-top: 20px;
}
.text-top {
  font-size: 12px;
}
.card5 {
  padding: 20px;
}
.i-human .v-icon {
  color: #7b1fa2;
  width: 50px;
  height: 50px;
}
.i-human .t-icon {
  font-size: 14px;
  font-weight: lighter;
}
.label_text_card1 {
  display: flex;
  justify-content: center;
}
.label_text_card3 {
  display: flex;
  justify-content: left;
  padding-left: 20px;
}
</style>
