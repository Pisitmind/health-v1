<template>
  <v-container grid-list-lg-xl class="dialog_p5_card1">
    <div class="card_el">
      <v-card class="card1_p3_root bdr_12">
        <v-card-title>
          <div class="head_dialog_c2_p4">
            <div>
              <v-btn color="green darken-1" icon @click="$router.go(-1)">
                <img
                  height="30px"
                  class="filter-white"
                  src="../assets/icon/icon_prev.svg"
                  alt="prev"
                />
              </v-btn>
            </div>
            <div class="pd_text">
              <span class="headline pl-5">รายละเอียดค่า BMI</span>
            </div>
          </div>
        </v-card-title>
        <v-card-text>
          <span
            >กราฟสรุปรายละเอียดค่า BMI
            เพื่อสังเกตุความแข็งแรงและสมบูรณ์ของร่างกายเพื่อระวังปัญหาสุขภาพในระยะสั้น
            กลาง และยาวได้</span
          >
        </v-card-text>

        <v-card-content>
          <div class="content_dialog_page_top">
            <div class="content_top_left_page">
              <div class="">
                <!-- card2 head+content -->
                <v-card class="card2_size" elevation="0">
                  <div class="card2_root">
                    <!-- card2 content -->
                    <div class="content1_card2">
                      <div class="card_top_lNr">
                        <!-- card l -->
                        <div class="card_left_top">
                          <div
                            class="donut_chart_1"
                            style="float: left; position: relative;"
                          >
                            <div
                              style="width: 100%; position: absolute; top: 50%; left: 0; margin:-15px 0px; 
                line-height:19px; text-align: center; z-index: 2"
                            >
                              <span class="text_inside1">27</span><br />
                              <span class="text_inside">avg.</span>
                            </div>
                            <div>
                              <canvas
                                id="donut_g1"
                                width="250px"
                                height="250px"
                              ></canvas>
                            </div>
                          </div>
                        </div>
                        <!-- card r  -->
                        <div class="card_right_top">
                          <!-- graph 2 card -->
                          <div class="card_content_right_top">
                            <div class="mini_r_Card">
                              <v-card class="card_man bdr_12">
                                <v-card-content>
                                  <table class="">
                                    <tr height="30px" width="" class="">
                                      <td width="" class="text_lft">
                                        <span
                                          >ค่าเฉลี่ยการเต้นของหัวใจ ผู้ชาย</span
                                        >
                                      </td>
                                      <td width="" class="btn_right">
                                        <v-btn
                                          color="#22CE8B"
                                          depressed
                                          class="white--text"
                                          elevation="2"
                                          height="24px"
                                          >+2%</v-btn
                                        >
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div class="pd_x_15">
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
                                            <tr class="bold_tx card_num_head">
                                              <td>
                                                <span>24</span>
                                              </td>
                                            </tr>
                                            <tr class="grey--text">
                                              <td></td>
                                              <td class="card_num_text_bot">
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
                                </v-card-content>
                              </v-card>
                            </div>
                            <div class="mini_l_Card">
                              <v-card class="card_wman bdr_12">
                                <v-card-content>
                                  <table class="">
                                    <tr height="30px" class="">
                                      <td width="" class="text_lft">
                                        <span
                                          >ค่าเฉลี่ยการเต้นของหัวใจ
                                          ผู้หญิง</span
                                        >
                                      </td>
                                      <td width="" class="btn_right">
                                        <v-btn
                                          color="#22CE8B"
                                          depressed
                                          class="white--text"
                                          elevation="2"
                                          height="24px"
                                          >+4%</v-btn
                                        >
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div class="pd_x_15">
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
                                            <tr class="bold_tx card_num_head">
                                              <span>34</span>
                                            </tr>
                                            <tr class="grey--text">
                                              <td></td>
                                              <td class="card_num_text_bot">
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
                                </v-card-content>
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
                                <th scope="row" class="fix_center_table">
                                  <img
                                    height="40px"
                                    class="filter-white"
                                    :src="
                                      require('../assets/icon/' + item.icons)
                                    "
                                  />
                                  <span class="black--text"
                                    ><strong>{{ item.gender }}</strong></span
                                  >
                                </th>
                                <td
                                  v-for="n in 5"
                                  :key="n"
                                  width="16.67%"
                                  height="40px"
                                  style="font-size:29px; font-weight: bold; border:1.5px solid; #757575;"
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
                          <span class="font_size_title_card bold_text">
                            ข้อมูลผู้ใช้งาน</span
                          >
                          <v-simple-table>
                            <template v-slot:default>
                              <thead>
                                <tr width="40%"></tr>
                                <tr justify="space-between" class="table_head1">
                                  <th class="text-left" width="8%">
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
                                  <th class="text-center">
                                    เปลี่ยนแปลง BMI
                                  </th>
                                  <th class="text-center">
                                    ดูประวัติ
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr
                                  v-for="item in moving_data_1"
                                  :key="item.id"
                                  class="table_content text-center"
                                >
                                  <td class="text-left">{{ item.no }}</td>
                                  <td class="text-left">{{ item.name }}</td>
                                  <td>{{ item.pos }}</td>
                                  <td>{{ item.bmi_sum }}</td>
                                  <td :style="{ color: item.color0 }">
                                    <v-icon :style="{ color: item.color0 }">{{
                                      item.icon
                                    }}</v-icon>
                                    {{ item.bmi_change }}
                                  </td>
                                  <td>
                                    <v-btn
                                      style="background-color:#AD8DBB; color:white;"
                                      elevation="2"
                                      small
                                      width="80px"
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
  </v-container>
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

    var ctx_dia_c1_man = document.getElementById("graph_man").getContext("2d"),
      gradient_man = ctx_dia_c1_man.createLinearGradient(0, 0, 0, 300);
    gradient_man.addColorStop(0, "rgb(132, 127, 234)");
    gradient_man.addColorStop(0.3, "rgb(255, 255, 255)");
    gradient_man.addColorStop(1, "rgb(255, 255, 255)");
    var bar_dia_c1_man = new Chart(ctx_dia_c1_man, {
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
            backgroundColor: gradient_man,
            pointRadius: 0,
            borderDash: [3],
            boderColor: "#E9E8FE",
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

    var ctx_dia_c1_wman = document
        .getElementById("graph_wman")
        .getContext("2d"),
      gradient_wman = ctx_dia_c1_wman.createLinearGradient(0, 0, 0, 300);
    gradient_wman.addColorStop(0, "rgb(249, 199, 89)");
    gradient_wman.addColorStop(0.30808080808080807, "rgb(255, 255, 255)");
    gradient_wman.addColorStop(1, "rgb(255, 255, 255)");
    var bar_dia_c1_wman = new Chart(ctx_dia_c1_wman, {
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
            backgroundColor: gradient_wman,
            pointRadius: 0,
            borderDash: [3],
            borderColor: "#f9c759",
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
          icons: "icon_men.svg",
          color: "#359BD3",
          data: [27, 98, 780, 34, 0],
        },
        {
          gender: "หญิง",
          icon: "mdi-human-female",
          icons: "icon_women.svg",
          color: "#F28C8C",
          data: [12, 132, 560, 22, 0],
        },
      ],
      moving_data_1: [
        {
          name: "สารุท อินทร์ศรี",
          no: "101",
          pos: "อาจารย์",
          bmi_sum: "18.5",
          bmi_change: "+ 2.1",
          icon: "mdi-menu-up",
          color: "#AD8DBB",
          color0: "green",
          color1: "red",
          show_history: "ดู",
        },
        {
          name: "Niles Peppertrout",
          no: "102",
          pos: "ผู้ช่วยสอน",
          bmi_sum: "20.0",
          bmi_change: "- 0.2",
          icon: "mdi-menu-down",
          color: "#AD8DBB",
          color0: "red",
          color1: "green",
          show_history: "ดู",
        },
        {
          name: "Abraham Pigeon",
          no: "103",
          pos: "อาจารย์",
          bmi_sum: "12.4",
          bmi_change: "+ 0.1",
          icon: "mdi-menu-up",
          color: "#AD8DBB",
          color0: "green",
          color1: "green",
          show_history: "ดู",
        },
        {
          name: "Abraham Pigeon",
          no: "104",
          pos: "อาจารย์",
          bmi_sum: "28.2",
          bmi_change: "+ 2",
          icon: "mdi-menu-up",
          color: "#AD8DBB",
          color0: "green",
          color1: "green",
          show_history: "ดู",
        },
        {
          name: "Abraham Pigeon",
          no: "105",
          pos: "อาจารย์",
          bmi_sum: "30.1",
          bmi_change: "- 4",
          icon: "mdi-menu-down",
          color: "#AD8DBB",
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
.pd_x_15 {
  padding: 0 20px 0 0;
}
.fix_center {
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
}
.fix_center_table {
  display: flex;
  justify-content: left;
  align-items: center;
  text-align: left;
}
.dialog_p5_card1 {
  width: 100%;
  /* padding: 20px; */
}
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
  padding: 40px 10px;
  width: 30%;
  /* background-color: rgba(0, 0, 200, 0.2); */
  /* width: 50%; */
}
.donut_chart_1 {
  display: flex;
  width: 100%;
  justify-content: center;
  /* background-color: rgba(0, 0,100,.3); */
}
.set_pos_donut {
  padding: 40px 10px;
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
  /* display: flex; */
}
.card2_nameNicon {
  display: flex;
  /* background-color:rgba(0,0,100,0.2); */
}
.mini_r_Card,
.mini_l_Card {
  width: 50%;
  padding: 0px 5px;
}
.card_man {
  /* height: 120px; */
  padding: 20px 10px;
}
.card_wman {
  /* height: 120px; */
  padding: 20px 10px;
}
.text_inside {
  font-size: 16px;
  color: #5b5b5b;
  padding-top: 15px;
}
.text_inside1 {
  font-size: 35px;
  font-weight: bold;
}
.btn_right {
  display: flex;
}
.bg_xr {
  background-color: rgba(0, 140, 0, 0.5);
}
.bold_tx {
  font-weight: bold;
}
.pd_5 {
  padding-right: 5px;
}
</style>
