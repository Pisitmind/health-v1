<template>
  <v-container grid-list-lg-xl class="dialog_p6_card1">
    <div class="card_el">
      <v-card class="card1_p3_root bdr_12">
        <v-card-title>
          <div class="head_dialog_c1_p6">
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
              <span class="headline pl-5">รายละเอียดค่าความดันโลหิต</span>
            </div>
          </div>
        </v-card-title>
        <v-card-text>
          กราฟสรุปรายละเอียดการเต้นของหัวใจ เพื่อสังเกตุพฤติกรรมที่อาจส่งผลถึง
          ปัญหาสุขภาพในระยะสั้น กลาง และยาวได้
        </v-card-text>
        <v-card-content>
          <div class="content_dialog_page_top">
            <div class="content_top_left_page">
              <div class="set_center">
                <canvas
                  id="graph1_c1_p6"
                  width="500px"
                  height="200px"
                  class="set_left_graph"
                ></canvas>
              </div>
              <div class="table_content_card2">
                <table style="width: 100%;"></table>
              </div>
            </div>
            <div class="content_top_right_page">
              <!-- data top right -->
              <div>
                <v-card width="" class="c1_c2_dialog bdr_12">
                  <v-card-content class="set_ct_full">
                    <v-simple-table class="data_c1c2">
                      <tr
                        style="padding:0; margin:0;"
                        class="set_pre_table_sp_sp"
                      >
                        <!-- <td style="padding-left:20px; "> -->
                        <td width="40%">
                          <span class="text_sub"
                            >ค่าเฉลี่ยความดันโลหิต ผู้ชาย</span
                          ><br />
                          <span class="text_sub">(ในช่วง 6 เดือน) </span>
                        </td>
                        <!-- </td> -->
                        <td class="text-center">
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
                      <!-- <v-row>
                        <v-col class="left" width="70%" height="">
                          <span>ค่าเฉลี่ยความดันโลหิต ผู้ชาย</span>
                          <br />
                          <span>(ในช่วง 6 เดือน) </span>
                        </v-col>
                        <v-col width="20%">
                          <v-btn
                            color="#22CE8B"
                            depressed
                            class="white--text"
                            elevation="2"
                            height="24px"
                            >+4%</v-btn
                          >
                        </v-col>
                      </v-row> -->
                      <tr>
                        <td>
                          <div class="card_c1_c2_pd">
                            <canvas
                              id="graph_dialog_c2"
                              width="200px"
                              height="100px"
                              class="set_graph_size_n"
                            ></canvas>
                          </div>
                        </td>
                        <!-- <v-spacer></v-spacer> -->
                        <td>
                          <div class="wd_100">
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
                    </v-simple-table>
                  </v-card-content>
                </v-card>
              </div>
              <br />
              <div>
                <v-card width="" class="c1_c2_dialog bdr_12">
                  <v-card-content>
                    <v-simple-table class="data_c1c2">
                      <tr
                        style="padding:0; margin:0;"
                        class="set_pre_table_sp_sp"
                      >
                        <!-- <td style="padding-left:20px; "> -->
                        <td width="40%">
                          <span class="text_sub"
                            >ค่าเฉลี่ยความดันโลหิต ผู้หญิง </span
                          ><br />
                          <span class="text_sub">(ในช่วง 6 เดือน) </span>
                        </td>
                        <!-- </td> -->
                        <td class="text-center">
                          <v-btn
                            color="#22CE8B"
                            depressed
                            class="white--text"
                            elevation="2"
                            height="24px"
                            >+12%</v-btn
                          >
                        </td>
                      </tr>

                      <!-- <tr>
                        <td class="left" width="70%" height="20%">
                          <span>ค่าเฉลี่ยความดันโลหิต ผู้หญิง </span>
                          <br />
                          <span>(ในช่วง 6 เดือน) </span>
                        </td>
                        <v-spacer></v-spacer>
                        <td width="20%">
                          <v-btn
                            color="#22CE8B"
                            depressed
                            class="white--text"
                            elevation="2"
                            height="24px"
                            >+12%</v-btn
                          >
                        </td>
                      </tr> -->
                      <tr class="bg_22">
                        <td>
                          <div class="card_c1_c2_pd">
                            <canvas
                              id="graph_dialog_c3"
                              width="200px"
                              height="100px"
                              class="set_graph_size_n"
                            ></canvas>
                          </div>
                        </td>
                        <td>
                          <div class="wd_100">
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
                    </v-simple-table>
                  </v-card-content>
                </v-card>
              </div>
            </div>
          </div>
          <div class="content_dialog_page_bot">
            <div>
              <br />
              <v-simple-table>
                <template v-slot:default>
                  <thead>
                    <span class="h_table_dia"> ข้อมูลผู้ใช้งาน</span>
                    <tr class="table_head1">
                      <th class="text-left">
                        รหัส
                      </th>
                      <th class="text-left">
                        ชื่อ-สกุล
                      </th>
                      <th class="text-center">
                        ตำแหน่ง
                      </th>
                      <th>
                        การเดิน (วันนี้)
                      </th>
                      <th>
                        เปลี่ยนแปลงการเดิน
                      </th>
                      <th>
                        การนั่งนาน (วันนี้)
                      </th>
                      <th>
                        เปลี่ยนแปลงการนั่ง
                      </th>
                      <th class="text-center">
                        ดูประวัติ
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      class="table_content text-center"
                      v-for="item in moving_data_1"
                      :key="item.id"
                    >
                      <td class="text-left">{{ item.no }}</td>
                      <td class="text-left">{{ item.name }}</td>
                      <td>{{ item.pos }}</td>
                      <td>{{ item.walk_sum }}</td>
                      <td :style="{ color: item.color0 }">
                        <v-icon :style="{ color: item.color0 }">{{
                          item.icon
                        }}</v-icon>
                        {{ item.walk_change }}
                      </td>
                      <td>{{ item.long_sit }}</td>
                      <td :style="{ color: item.color1 }">
                        <v-icon :style="{ color: item.color0 }">{{
                          item.icon
                        }}</v-icon>
                        {{ item.sit_change }}
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
    var ctx_dia_c1_p6 = document
        .getElementById("graph1_c1_p6")
        .getContext("2d"),
      gradient_m1 = ctx_dia_c1_p6.createLinearGradient(0, 0, 0, 300);
    gradient_m1.addColorStop(0, "rgb(31, 226, 136)");
    gradient_m1.addColorStop(0.6818181818181818, "rgb(255, 255, 255)");
    gradient_m1.addColorStop(1, "rgb(255, 255, 255)");
    var bar_dia_c1_p6 = new Chart(ctx_dia_c1_p6, {
      type: "line",
      data: {
        datasets: [
          {
            label: "all",
            backgroundColor: gradient_m1,
            borderColor: "#2CD889",
            pointRadius: 0,
            data: [240, 240, 320, 240, 120, 248, 115],
          },
          {
            label: "Steps",
            borderColor: "#359BD3",
            fill: "Disabled",
            borderDash: [3],
            pointRadius: 0,
            data: [139, 384, 223, 189, 158, 318, 93],
          },
          {
            label: "Setting",
            borderColor: "#F7617D",
            fill: "Disabled",
            borderDash: [3],
            pointRadius: 0,
            data: [385, 259, 196, 230, 106, 237, 107],
          },
        ],
        labels: ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย."],
      },
      options: {
        responsive: true,
        legend: {
          display: false,
        },
        scales: {
          xAxes: [{ stacked: true }],
          yAxes: [
            {
              stacked: false,
              ticks: {
                reverse: false,
                min: 0,
                max: 1000,
                stepSize: 200,
              },
            },
          ],
        },
      },
    });
    console.log(bar_dia_c1_p6);

    var ctx_dia_c2 = document
        .getElementById("graph_dialog_c2")
        .getContext("2d"),
      gradient_diac2_0 = ctx_dia_c2.createLinearGradient(0, 0, 0, 300);
    gradient_diac2_0.addColorStop(0, "rgb(116, 110, 244)");
    gradient_diac2_0.addColorStop(0.31, "rgb(255, 255, 255)");
    gradient_diac2_0.addColorStop(1, "rgb(255, 255, 255)");
    var bar_dia_c2 = new Chart(ctx_dia_c2, {
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
            backgroundColor: gradient_diac2_0,
            borderDash: [3],
            pointRadius: 0,
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
    console.log(bar_dia_c2);
    var ctx_dia_c3 = document
        .getElementById("graph_dialog_c3")
        .getContext("2d"),
      gradient_diac3 = ctx_dia_c3.createLinearGradient(0, 0, 0, 300);
    gradient_diac3.addColorStop(0, "rgb(249, 132, 153)");
    gradient_diac3.addColorStop(0.36, "rgb(255, 255, 255)");
    gradient_diac3.addColorStop(1, "rgb(255, 255, 255)");
    var bar_dia_c3 = new Chart(ctx_dia_c3, {
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
            backgroundColor: gradient_diac3,
            borderColor: "#f98499",
            pointRadius: 0,
            borderDash: [3],
            data: [14, 73, 33, 43, 74, 66, 76, 24, 72],
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
    console.log(bar_dia_c3);

    var ctx_line = document.getElementById("graphline").getContext("2d");
    var bar_line = new Chart(ctx_line, {
      type: "line",
      options: {
        scales: {
          yAxes: [
            {
              display: false,
            },
          ],
        },
      },
      data: {
        datasets: [
          {
            data: [10, 10, 10, 10, 10],
            // backgroundColor:['purple'],
            backgroundColor: ["purple", "blue", "green", "orange", "red"],
            above: ["purple", "blue", "green", "orange", "red"], // Area will be red above the origin
            below: ["purple", "blue", "green", "orange", "red"],
            borderColor: ["purple", "blue", "green", "orange", "red"],
          },
        ],
        labels: ["0", "56.7", "76.6", "85.8", "98.0"],
      },
    });
    console.log(bar_line);

    // 'ผอมมาก','ปกติ','อวบ','อ้วน ระยะที่1','อ้วน ระยะที่2'
  },
  data() {
    return {
      items: [
        { gender: "ผช", color: "#359BD3", data: [27, 98, 780, 34, 0] },
        { gender: "ผญ", color: "F28C8C", data: [12, 132, 560, 22, 0] },
      ],
      moving_data_1: [
        {
          name: "สารุท อินทร์ศรี",
          no: "101",
          pos: "อาจารย์",
          walk_sum: "4596",
          walk_change: "+156",
          icon: "mdi-menu-up",
          long_sit: "159",
          sit_change: "+3",
          color: "#B4B4B4",
          color0: "green",
          color1: "green",
          show_history: "ดู",
        },
        {
          name: "Niles Peppertrout",
          no: "102",
          pos: "ผู้ช่วยสอน",
          walk_sum: "4875",
          walk_change: "-395",
          icon: "mdi-menu-down",
          long_sit: "157",
          sit_change: "-1",
          color: "#22CE8B",
          color0: "red",
          color1: "red",
          show_history: "ดู",
        },
        {
          name: "Abraham Pigeon",
          no: "103",
          pos: "อาจารย์",
          walk_sum: "3621",
          walk_change: "+0",
          icon: "mdi-menu-up",
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
          icon: "mdi-menu-up",
          long_sit: "159",
          sit_change: "+3",
          color: "#22CE8B",
          color0: "green",
          color1: "green",
          show_history: "ดู",
        },
      ],
      data_card3: [
        {
          type: "All",
          icon: "mdi-circle",
          color: "#359BD3",
          data: [524, 643, 419, 419, 264, 555, 200],
        },
        {
          type: "Steps",
          icon: "mdi-circle",
          color: "#A3A1FB",
          data: [139, 384, 223, 189, 158, 318, 93],
        },
        {
          type: "Setting",
          icon: "mdi-circle",
          color: "#FFDA83",
          data: [385, 259, 196, 230, 106, 237, 107],
        },
      ],
    };
  },
};
</script>

<style scoped>
.dialog_p6_card1 {
  width: 100%;
}
.card1_p3_root {
  height: fit-content;
}
.t_switch {
  display: flex;
  /* justify-items: center; */
  justify-content: center;
}
/* .head_dialog_c1_p6 {
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
} */
.content_dialog_page_top {
  display: flex;
  justify-content: space-around;
}
/* padding:0px 20px; */
.c1_c2_dialog {
  padding: 20px;
  /* height: fit-content; */
  /* width: fit-content; */
}
.card_c1_c2_pd {
  padding: 15px;
}
.set_center {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.data_c1c2 {
  text-align: left;
  vertical-align: middle;
  width: 100%;
}
.left {
  text-align: left;
}
.content_top_left_page {
  width: 60%;
  height: 400px;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
}
.content_top_right_page {
  width: 40%;
  padding: 0px 20px;
}
.content_dialog_page_bot {
  padding: 0 30px;
}
.text_sub {
  font-size: 16px !important;
}
.set_pre_table_sp {
  /* white-space: pre; */
  white-space: normal;
  line-height: 0.9;
}

@media only screen and (max-width: 320px) {
  .content_dialog_page_top {
    display: flex;
    flex-direction: column;
  }
  .headline {
    white-space: normal;
    letter-spacing: 2.9px !important;
    padding-left: 0px !important;
  }
  .content_top_left_page {
    width: 100%;
  }
  .set_left_graph {
    width: 100%;
    max-width: 300px;
    overflow-x: scroll;
  }
  .content_top_right_page {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .c1_c2_dialog {
    width: 100%;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .content_dialog_page_top {
    display: flex;
    flex-direction: column;
  }
  .content_top_left_page {
    width: 100%;
  }
  .content_top_right_page {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
  }
  .c1_c2_dialog {
    padding: 20px 10px;
  }
  .set_ct_full {
    width: 100%;
  }
  .h_table_dia {
    white-space: nowrap;
  }
}

@media only screen and (min-width: 1441px) and (max-width: 1920px) {
  .data_c1c2 {
    width: 100%;
  }
  .c1_c2_dialog {
    width: 80%;
    /* padding: 0px 50px; */
  }
  .wd_100 {
    text-align: center;
  }
  .pd_5 {
    padding: 0px !important;
  }
  .content_top_right_page {
    /* display: flex;
    flex-direction: column;
    justify-content: center; */
    padding-left: 90px;
  }
}
@media only screen and (min-width: 1921px) {
  .data_c1c2 {
    width: 100%;
  }
  .mini_r_Card,
  .mini_l_Card {
    width: 40%;
    /* padding: 0px 50px; */
  }
}
</style>
