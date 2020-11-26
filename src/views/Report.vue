<template>
  <div class="report">
    <h1>Report page</h1>
    <br />
    <div class="dialog_p3_card1">
      <v-card>
        <v-card-title> </v-card-title>
        <v-card-content>
          <div class="content_dialog_page_top">
            <div class="content_top_left_page">
              <div class="card_el_card2">
                <!-- card2 head+content -->
                <v-card class="card2_size" elevation="3" outlined>
                  <div class="card2_root">
                    <!-- card2 header -->
                    <div class="head-card2">
                      <div class="">
                        <div class="header_card2">
                          <div class="title_card2">
                            <div class="card2_nameNicon">
                              <div style="padding-right:10px;">
                               <v-btn
                                color="green darken-1"
                                icon
                                @click="dialog1 = false"
                              >
                                <v-icon
                                  >mdi-arrow-left-drop-circle-outline</v-icon
                                >
                              </v-btn>
                              </div>
                              <div class="card2_bot_text ">
                                <span><strong>รายละเอียดค่า BMI</strong></span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card2_line2 grey--text">
                          <span
                            >กราฟสรุปรายละเอียดค่า BMI
                            เพื่อสังเกตุความแข็งแรงและสมบูรณ์ของร่างกายเพื่อระวังปัญหาสุขภาพในระยะสั้น
                            กลาง และยาวได้</span
                          >
                        </div>
                      </div>
                    </div>
                    <!-- card2 content -->
                    <div class="content1_card2">
                      <div class="card_top_lNr">
                        <!-- card l -->
                        <div class="card_left_top">
                          <div class="donut_chart_1">
                            <canvas
                              id="donut_g1"
                              width=""
                              height="200px"
                            ></canvas>
                          </div>
                        </div>
                        <!-- card r  -->
                        <div class="card_right_top">
                          <!-- graph 2 card -->
                          <div class="card_content_right_top">
                            <div class="mini_r_Card">
                              <v-card class="card_man">
                                <table class="">
                                    <tr height="30px" class="">
                                    <td width="260px" class="text_lft">
                                      <span
                                        >ค่าเฉลี่ยการเต้นของหัวใจ ผู้ชาย</span
                                      >
                                    </td>
                                    <td width="" class="btn_right">
                                      <v-btn
                                        color="#22CE8B"
                                        depressed
                                        x-small
                                        class="white--text"
                                        elevation="2"
                                        >+4%</v-btn
                                      >
                                    </td>
                                  </tr>
                                  <tr>
                                    <td >
                                       <div class="">
                                        <canvas
                                          id="graph_man"
                                          width="200px"
                                          height="70px"
                                        ></canvas>
                                      </div>
                                    </td>
                                    <td>
                                      <div class="">
                                        <table class="align-center pd_5">
                                          <tr class="bold_tx big_text">
                                            <span>24</span>
                                          </tr>
                                          <tr class="grey--text">
                                            <td></td>
                                            <td class="sm_text">
                                              <span>
                                                BPM
                                              </span>
                                            </td>
                                          </tr>
                                        </table>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </v-card>
                            </div>
                            <div class="mini_l_Card">
                              <v-card class="card_wman">
                                 <table class="">
                                    <tr height="30px" class="">
                                    <td width="260px" class="text_lft">
                                      <span
                                        >ค่าเฉลี่ยการเต้นของหัวใจ ผู้หญิง</span
                                      >
                                    </td>
                                    <td width="" class="btn_right">
                                      <v-btn
                                        color="#22CE8B"
                                        depressed
                                        x-small
                                        class="white--text"
                                        elevation="2"
                                        >+4%</v-btn
                                      >
                                    </td>
                                  </tr>
                                  <tr>
                                    <td >
                                       <div class="">
                                        <canvas
                                          id="graph_wman"
                                          width="200px"
                                          height="70px"
                                        ></canvas>
                                      </div>
                                    </td>
                                    <td>
                                      <div class="">
                                        <table class="align-center pd_5">
                                          <tr class="bold_tx big_text">
                                            <span>34</span>
                                          </tr>
                                          <tr class="grey--text">
                                            <td></td>
                                            <td class="sm_text">
                                              <span>
                                                BPM
                                              </span>
                                            </td>
                                          </tr>
                                        </table>
                                      </div>
                                    </td>
                                  </tr>
                                </table>
                              </v-card>
                            </div>
                          </div>
                          <br />
                          <div class="table_content_right_bot">
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
                                      <span class="text-top ">18.5</span>
                                      <v-progress-linear
                                        color="none"
                                        rounded
                                        value="100"
                                      ></v-progress-linear>
                                      <br />
                                      <span class="text-top">25.0</span>
                                      <v-progress-linear
                                        color="none"
                                        rounded
                                        value="100"
                                      ></v-progress-linear>
                                      <br />
                                      <span class="text-top">28.0</span>
                                      <v-progress-linear
                                        color="none"
                                        rounded
                                        value="100"
                                      ></v-progress-linear>
                                      <br />
                                      <span class="text-top">32.0</span>
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
                                    <br />
                                  </div>
                                </th>
                              </tr>
                            </table>

                            <table
                              style="width: 100%;
  border-collapse: collapse;"
                            >
                              <tr>
                                <th></th>
                                <th>
                                  <div class="i-human">
                                    <div><p>low</p></div>
                                  </div>
                                </th>
                                <th>
                                  <div class="i-human">
                                    <div><p>Normal</p></div>
                                  </div>
                                </th>
                                <th>
                                  <div class="i-human">
                                    <div><p>Increased</p></div>
                                  </div>
                                </th>
                                <th>
                                  <div class="i-human">
                                    <div><p>Hight</p></div>
                                  </div>
                                </th>
                                <th>
                                  <div class="i-human">
                                    <div><p>Very hight</p></div>
                                  </div>
                                </th>
                              </tr>
                              <tr
                                v-for="item in items"
                                :key="item.id"
                                align="center"
                              >
                                <th scope="row" class="text-left">
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
                                  style="border:1px solid black;"
                                  class="font_omg"
                                >
                                  {{ item.data[n - 1] }}
                                </td>
                              </tr>
                            </table>
                          </div>
                        </div>
                      </div>
                      <div class="card_bot_table">
                        <div>
                          <br />
                          <v-simple-table>
                            <template v-slot:default>
                              <thead>
                                <span class=""> ข้อมูลผู้ใช้งาน</span>
                                <tr>
                                  <th class="text-left">
                                    รหัส
                                  </th>
                                  <th class="text-left">
                                    ชื่อ-สกุล
                                  </th>
                                  <th class="text-left">
                                    ตำแหน่ง
                                  </th>
                                  <th class="text-left">
                                    ค่าเฉลี่ย BMI
                                  </th>
                                  <th class="text-left">
                                    เปลี่ยนแปลง BMI
                                  </th>
                                  <th class="text-left">
                                    ดูประวัติ
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr
                                  v-for="item in moving_data_1"
                                  :key="item.id"
                                >
                                  <td>{{ item.no }}</td>
                                  <td>{{ item.name }}</td>
                                  <td>{{ item.pos }}</td>
                                  <td>{{ item.walk_sum }}</td>
                                  <td :style="{ color: item.color0 }">
                                    {{ item.walk_change }}
                                  </td>
                                  <td>
                                    <v-btn
                                      :style="{ backgroundColor: item.color }"
                                      elevation="2"
                                      small
                                    >
                                      {{ item.show_history }}
                                    </v-btn>
                                  </td>
                                </tr>
                              </tbody>
                            </template>
                          </v-simple-table>
                          <v-divider></v-divider>
                        </div>
                      </div>
                    </div>
                  </div>
                </v-card>
              </div>
              <br />
            </div>
          </div>
          <!-- <canvas id="graphline" width="" height="40px"></canvas> -->
        </v-card-content>
      </v-card>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js";
export default {
  mounted: function() {
    var ctx_dia_do1 = document.getElementById("donut_g1").getContext("2d");
    var bar_dia_do1 = new Chart(ctx_dia_do1, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [1980, 452, 368, 0, 0, 0],
            backgroundColor: [
              "#359BD3",
              "#E7F524",
              "#FC9A38",
              "#F92969",
              "#FF1A1A",
              "#9406FF",
            ],
          },
        ],
        labels: [
          "Relaxed",
          "Light",
          "Intensive",
          "Aerbic",
          "Anaerobic",
          "VO" + 2 + "max",
        ],
      },
      options: {
        responsive: true,
        legend: {
          display: false,
        },
      },
    });
    console.log(bar_dia_do1);

    var  ctx_dia_c1_man = document.getElementById("graph_man").getContext("2d");
    var bar_dia_c1_man = new Chart( ctx_dia_c1_man, {
      type: "line",
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
              display: false,
              ticks: {
                suggestedMin: 0, // minimum will be 0, unless there is a lower value.
                stepValue: 5,
                max: 100,
              },
            },
          ],
          xAxes: [
            {
              display: false,
            },
          ],
        },
      },
      data: {
        datasets: [
          {
            label: "TODAY",
            backgroundColor: "#E7E7FE",
            data: [20, 35, 20, 40, 35, 50, 42, 50, 80],
          },
        ],
        labels: [
            "00:00",
            "03:00",
            "06:00",
            "09:00",
            "12:00",
            "15:00",
            "18:00",
            "21:00",
            "00:00",
        ],
      },
    });
    console.log(bar_dia_c1_man);

    var  ctx_dia_c1_wman = document.getElementById("graph_wman").getContext("2d");
    var bar_dia_c1_wman = new Chart( ctx_dia_c1_wman, {
      type: "line",
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
              display: false,
              ticks: {
                suggestedMin: 0, // minimum will be 0, unless there is a lower value.
                stepValue: 5,
                max: 100,
              },
            },
          ],
          xAxes: [
            {
              display: false,
            },
          ],
        },
      },
      data: {
        datasets: [
          {
            label: "TODAY",
            backgroundColor: "#FFE5A9",
            data: [20, 35, 20, 40, 35, 50, 42, 50, 80],
          },
        ],
        labels: [
            "00:00",
            "03:00",
            "06:00",
            "09:00",
            "12:00",
            "15:00",
            "18:00",
            "21:00",
            "00:00",
        ],
      },
    });
    console.log(bar_dia_c1_wman);
    
    

  },
  data() {
    return {
      items: [
        {
          gender: "ชาย",
          icon: "mdi-human-male",
          color: "#359BD3",
          data: [27, 98, 780, 34, 0],
        },
        {
          gender: "หญิง",
          icon: "mdi-human-female",
          color: "#F28C8C",
          data: [12, 132, 560, 22, 0],
        },
      ],
      moving_data_1: [
        {
          name: "สารุท อินทร์ศรี",
          no: "101",
          pos: "อาจารย์",
          walk_sum: "4596",
          walk_change: "+156",
          long_sit: "159",
          sit_change: "+3",
          color: "#B4B4B4",
          color0: "green",
          color1: "red",
          show_history: "ดู",
        },
        {
          name: "Niles Peppertrout",
          no: "102",
          pos: "ผู้ช่วยสอน",
          walk_sum: "4875",
          walk_change: "-395",
          long_sit: "157",
          sit_change: "-1",
          color: "#22CE8B",
          color0: "red",
          color1: "green",
          show_history: "ดู",
        },
        {
          name: "Abraham Pigeon",
          no: "103",
          pos: "อาจารย์",
          walk_sum: "3621",
          walk_change: "+0",
          long_sit: "174",
          sit_change: "+0",
          color: "#22CE8B",
          color0: "green",
          color1: "green",
          show_history: "ดู",
        },
        {
          name: "Abraham Pigeon",
          no: "104",
          pos: "อาจารย์",
          walk_sum: "2541",
          walk_change: "+156",
          long_sit: "159",
          sit_change: "+3",
          color: "#22CE8B",
          color0: "red",
          color1: "green",
          show_history: "ดู",
        },
      ],
    };
  },
};
</script>
<style scoped>
.head-card2 {
  padding: 20px;
}
.content1_card2 {
  display: flex;
  padding: 20px;
  flex-direction: column;
}
.card_top_lNr {
  display: flex;
  width: 100%;
  /* background-color: rgba(0, 0, 200, 0.1); */
}
.card_left_top {
  /* padding-top: 40px; */
  width: 30%;
  /* background-color: rgba(0, 0, 200, 0.2); */
  /* width: 50%; */
}
.donut_chart_1 {
  display: flex;
  padding-top: 50px;
  width: 100%;
  /* background-color: rgba(0, 0,100,.3); */
}
.card_right_top {
  width: 70%;
}
.card_content_right_top {
  display: flex;
  justify-content: space-around;
  width: 100%;
  /* background-color:rgba(0,150,0, 0.4); */
}
.header_card2 {
  display: flex;
  padding-top: 20px;
  justify-content: space-between;
  /* background-color:rgba(0,150,0, 0.4); */
}
.card_content_right_right_top_l {
  width: 50%;
}
.donut_g1 {
  display: flex;
}
.card2_nameNicon {
  display: flex;
  /* background-color:rgba(0,0,100,0.2); */
}
.mini_r_Card {
  width: 45%;
}
.mini_l_Card {
  width: 45%;
}
.card_man {
  /* height: 120px; */
  padding: 10px;
}
.card_wman {
  /* height: 120px; */
  padding: 10px;
}
.table_card_l_top {
  /* background-color: rgba(0, 140, 0, 0.3); */
}
.btn_right {
  display: flex;
}
.bg_xr {
  background-color: rgba(0, 140, 0, 0.5);
}
.bold_tx{
  font-weight: bold;
}
.sm_text{
  font-weight: bold;
  font-size: 10px;
}
.big_text{
  font-size:20px;
}
.pd_5{
  padding-right:5px;
}
</style>
