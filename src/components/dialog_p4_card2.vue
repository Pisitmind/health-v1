<template>
  <v-container grid-list-lg-xl class="dialog_p4_card2">
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
              <span class="headline pl-5">รายละเอียดค่าการเต้นของหัวใจ</span>
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
                <canvas id="graph1_c2_p4" width="500px" height="250px"></canvas>
              </div>
            </div>
            <div class="content_top_right_page">
              <!-- data top right -->
              <div class="set_card_mNfm">
                <v-card width="" class="c1_c2_dialog bdr_12">
                  <table class="data_c1c2">
                    <tr width="">
                      <td class="left" width="80%" height="20%">
                        <span>ค่าเฉลี่ยการเต้นของหัวใจ ผู้ชาย</span>
                        <br />
                        <span>(ในช่วง 6 เดือน) </span>
                      </td>
                      <v-spacer></v-spacer>
                      <td>
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
                        <div class="card_c1_c2_pd">
                          <canvas
                            id="graph_dialog_c2"
                            width=""
                            height="100px"
                            class="set_graph_size_n"
                          ></canvas>
                        </div>
                      </td>
                      <v-spacer></v-spacer>
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
                  </table>
                </v-card>
              </div>
              <br />
              <div class="set_card_mNfm">
                <v-card width="" class="c1_c2_dialog bdr_12">
                  <table class="data_c1c2">
                    <tr width="">
                      <td class="left" width="80%" height="20%">
                        <span>ค่าเฉลี่ยการเต้นของหัวใจ ผู้หญิง</span>
                        <br />
                        <span>(ในช่วง 6 เดือน) </span>
                      </td>
                      <v-spacer></v-spacer>
                      <td>
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
                    <tr class="bg_22">
                      <td>
                        <div class="card_c1_c2_pd">
                          <canvas
                            id="graph_dialog_c3"
                            width=""
                            height="100px"
                            class="set_graph_size_n"
                          ></canvas>
                        </div>
                      </td>
                      <v-spacer></v-spacer>
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
                      <th class="text-left">
                        ตำแหน่ง
                      </th>
                      <th class="text-center">
                        ค่าเฉลี่ยการเต้นของหัวใจ
                      </th>
                      <th class="text-center">
                        เปลี่ยนแปลงการเต้นของหัวใจ
                      </th>
                      <th class="text-center">
                        ดูประวัติ
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="item in status_data_1"
                      :key="item.id"
                      class="table_content"
                    >
                      <td>{{ item.no }}</td>
                      <td>{{ item.name }}</td>
                      <td>{{ item.pos }}</td>
                      <td class="text-center">{{ item.sleep_sum }}</td>
                      <td :style="{ color: item.color0 }" class="text-center">
                        <v-icon :style="{ color: item.color0 }">{{
                          item.icon
                        }}</v-icon>
                        {{ item.sleep_change }}
                      </td>
                      <td class="text-center">
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
    var ctx_dia_c1_p4 = document
        .getElementById("graph1_c2_p4")
        .getContext("2d"),
      gradient_c2p4 = ctx_dia_c1_p4.createLinearGradient(0, 0, 0, 300);
    gradient_c2p4.addColorStop(0, "rgb(31, 226, 136)");
    gradient_c2p4.addColorStop(0.6818181818181818, "rgb(255, 255, 255)");
    gradient_c2p4.addColorStop(1, "rgb(255, 255, 255)");
    var bar_dia_c1_p4 = new Chart(ctx_dia_c1_p4, {
      type: "line",
      data: {
        datasets: [
          {
            label: "เฉลี่ย",
            backgroundColor: gradient_c2p4,
            borderColor: "#2CD889",
            pointRadius: 0,
            data: [71.0, 37.5, 65.5, 64.25, 50.5, 67.75, 37.0, 59.25, 42.4],
          },
          {
            label: "ชาย",
            borderColor: "#359BD3",
            fill: "Disabled",
            borderDash: [3],
            pointRadius: 0,
            data: [81.1, 33, 70, 54, 73, 40.5, 41.5, 61.5, 74.5],
          },
          {
            label: "หญิง",
            borderColor: "#F7617D",
            fill: "Disabled",
            borderDash: [3],
            pointRadius: 0,
            data: [61.5, 41.5, 61.5, 74.5, 61.0, 95.0, 10.5, 57.0, 10.3],
          },
        ],
        labels: [
          "00:00.",
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
                max: 200,
                stepSize: 50,
              },
            },
          ],
        },
      },
    });
    console.log(bar_dia_c1_p4);

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
      status_data_1: [
        {
          name: "สารุท อินทร์ศรี",
          no: "101",
          pos: "อาจารย์",
          sleep_sum: "124 BPM",
          sleep_change: "+ 1 BPM",
          icon: "mdi-menu-up",
          color: "#B4B4B4",
          color0: "green",
          color1: "red",
          show_history: "ดู",
        },
        {
          name: "Niles Peppertrout",
          no: "102",
          pos: "ผู้ช่วยสอน",
          sleep_sum: "120 BPM",
          sleep_change: "- 1 BPM",
          icon: "mdi-menu-down",
          color: "#22CE8B",
          color0: "red",
          color1: "green",
          show_history: "ดู",
        },
        {
          name: "Abraham Pigeon",
          no: "103",
          pos: "อาจารย์",
          sleep_sum: "105 BPM",
          sleep_change: "+ 4 BPM",
          icon: "mdi-menu-up",
          color: "#22CE8B",
          color0: "green",
          color1: "green",
          show_history: "ดู",
        },
        {
          name: "Abraham Pigeon",
          no: "104",
          pos: "อาจารย์",
          sleep_sum: "130 BPM",
          sleep_change: "+ 1 BPM",
          icon: "mdi-menu-up",
          color: "#22CE8B",
          color0: "green",
          color1: "red",
          show_history: "ดู",
        },
        {
          name: "Abraham Pigeon",
          no: "105",
          pos: "อาจารย์",
          sleep_sum: "109 ฺBPM",
          sleep_change: "- 4 BPM",
          icon: "mdi-menu-down",
          color: "#22CE8B",
          color0: "red",
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
.dialog_p4_card2 {
  width: 100%;
}
.t_switch {
  display: flex;
  /* justify-items: center; */
  justify-content: center;
}
/* .head_dialog_c1_p4 {
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
} */

.card1_p3_root {
  height: fit-content;
}
.content_dialog_page_top {
  display: flex;
  justify-content: space-around;
}
.c1_c2_dialog {
  padding: 20px;
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
  text-align: center;
  vertical-align: middle;
}
.left {
  text-align: left;
}

.content_top_left_page {
  width: 50%;
  height: 400px;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
}
.content_dialog_page_bot {
  padding: 0 30px;
}
.wd_100 {
  width: 100%;
  text-align: center;
  /* background-color:rgba(200,100,50,.2); */
}

@media only screen and (max-width: 320px) {
  .headline_sm {
    letter-spacing: 3px;
    font-size: 20px !important;
    padding-left: 0px !important;
  }
  .headline {
    white-space: normal;
    letter-spacing: 1.6px !important;
    padding-left: 0px !important;
  }
  .h_table_dia {
    white-space: nowrap;
  }
  .data_c1c2 {
    padding-right: 15px;
  }
  .content_dialog_page_top {
    flex-direction: column;
  }
  .content_top_left_page {
    width: 100%;
  }
  .content_top_right_page {
    width: 100%;
  }
  /* .table_content_card2,
  .set_of_graph {
    width: 100%;
    overflow-x: scroll;
  } */
  .c1_c2_dialog,
  .c1_c2_dialog {
    width: 100%;
    overflow-x: scroll;
  }
  .set_h_table {
    height: fit-content;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .content_dialog_page_top {
    flex-direction: column;
  }
  .content_top_left_page {
    width: 100%;
  }
  .table_content_card2 {
    padding-top: 20px;
  }
  .content_top_right_page {
    width: 100%;
    padding-top: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .set_card_mNfm {
    width: 48%;
  }
  .c1_c2_dialog {
    width: 100%;
  }
  .data_c1c2 {
    padding: 20px;
    /* width: 200px; */
  }
  .set_graph_size_n {
    max-width: 200px;
  }
  .set_tr_width {
    width: 100%;
  }

  .sub_card_dia_mini {
    max-width: 200px;
  }
  .set_table {
    width: 100%;
  }
  .card_c1_c2_pd {
    width: 100%;
  }
  .set_full_size_table {
    width: 100%;
    overflow-x: scroll;
  }
}
@media screen and (min-width: 1441px) and (max-width: 1920px) {
  .content_dialog_page_bot {
    height: fit-content;
    padding-top: 30px;
  }
}
@media only screen and (min-width: 1921px) {
  .content_dialog_page_top {
    height: fit-content;
  }
  .content_dialog_page_bot {
    height: fit-content;
    padding-top: 50px;
  }
}
</style>
