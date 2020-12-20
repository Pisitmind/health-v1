<template>
  <v-container grid-list-lg-xl class="dialog_p4_card1">
    <div class="card_el">
      <v-card class="card1_p3_root bdr_12">
        <v-card-title>
          <div class="head_dialog_c1_p4">
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
            <div>
              <span class="headline pl-5">รายละเอียดค่าการนอนหลับ</span>
            </div>
          </div>
        </v-card-title>
        <v-card-text>
          กราฟสรุปรายละเอียดการนอนหลับต่อเดือน
          เพื่อสังเกตุพฤติกรรมที่อาจส่งผลถึง ปัญหาสุขภาพในระยะสั้น กลาง
          และยาวได้
        </v-card-text>
        <v-card-content>
          <div class="content_dialog_page_top">
            <div class="content_top_left_page">
              <div class="set_center">
                <canvas id="graph1_c1_p4" width="500px" height="200px"></canvas>
              </div>
              <div class="table_content_card2">
                <table style="width: 100%;">
                  <tr v-for="item in data_card3" :key="item.id" align="center">
                    <th scope="row" width="15%" class="head_table_card3">
                      <v-icon small :style="{ color: item.color }">{{
                        item.icon
                      }}</v-icon>
                      <span
                        class="black--text pd_text_table_c3 pd_text_5 font_sm"
                        ><strong>{{ item.type }}</strong></span
                      >
                    </th>
                    <td
                      v-for="n in 6"
                      :key="n"
                      height="35px"
                      style="border:1px solid black;"
                      class="font_omg"
                    >
                      {{ item.data[n - 1] }}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="content_top_right_page">
              <!-- data top right -->
              <div>
                <v-card width="" class="c1_c2_dialog bdr_12">
                  <table class="data_c1c2">
                    <tr>
                      <td class="left" width="80%" height="20%">
                        <span>ค่าเฉลี่ยการนอนหลับ ผู้ชาย </span>
                        <br />
                        <span>(ในช่วง 6 เดือน) </span>
                      </td>
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
                        <div class="sub_card_dia_mini">
                          <canvas
                            id="graph_dialog_c2"
                            width=""
                            height="100px"
                          ></canvas>
                        </div>
                      </td>
                      <td>
                        <div class="wd_100">
                          <table class="text-align-center">
                            <tr>
                              <span style="font-size:30px;"
                                ><strong>2:10</strong></span
                              >
                            </tr>
                            <tr class="sm_text" width="100%">
                              <span>
                                ชั่วโมง / วัน
                              </span>
                            </tr>
                          </table>
                        </div>
                      </td>
                    </tr>
                  </table>
                </v-card>
              </div>
              <br />
              <div>
                <v-card width="" class="c1_c2_dialog bdr_12">
                  <table class="data_c1c2">
                    <tr>
                      <td class="left" width="80%" height="20%">
                        <span>ค่าเฉลี่ยการนอนหลับ ผู้หญิง </span>
                        <br />
                        <span>(ในช่วง 6 เดือน) </span>
                      </td>
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
                    <tr>
                      <td>
                        <div class="sub_card_dia_mini">
                          <canvas
                            id="graph_dialog_c3"
                            width=""
                            height="100px"
                          ></canvas>
                        </div>
                      </td>
                      <td>
                        <div class="wd_100">
                          <table class="align-center">
                            <tr>
                              <span style="font-size:30px;"
                                ><strong>1:05</strong></span
                              >
                            </tr>
                            <tr class="sm_text">
                              <span>
                                ชั่วโมง / วัน
                              </span>
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
                      <th class="text-left" width="10%">
                        รหัส
                      </th>
                      <th class="text-left">
                        ชื่อ-สกุล
                      </th>
                      <th class="text-center">
                        ตำแหน่ง
                      </th>
                      <th class="text-center">
                        ระยะเวลานอน (วันนี้)
                      </th>
                      <th class="text-center">
                        เปลี่ยนแปลงระยะเวลานอน
                      </th>
                      <th class="text-center">
                        ดูประวัติ
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      class="table_content"
                      v-for="item in status_data_1"
                      :key="item.id"
                    >
                      <td width="10%">{{ item.no }}</td>
                      <td>{{ item.name }}</td>
                      <td class="text-center">{{ item.pos }}</td>
                      <td class="text-center">{{ item.sleep_sum }}</td>
                      <td class="text-center" :style="{ color: item.color0 }">
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
        .getElementById("graph1_c1_p4")
        .getContext("2d"),
      gradient_1c1p4 = ctx_dia_c1_p4.createLinearGradient(0, 0, 0, 300),
      gradient1_1c1p4 = ctx_dia_c1_p4.createLinearGradient(0, 0, 0, 300);
    gradient_1c1p4.addColorStop(0, "rgb(125, 174, 231)");
    gradient_1c1p4.addColorStop(0.5, "rgb(255, 255, 255)");
    gradient1_1c1p4.addColorStop(0, "rgb(237, 119, 119)");
    gradient1_1c1p4.addColorStop(0.4, "rgb(255, 255, 255)");
    var bar_dia_c1_p4 = new Chart(ctx_dia_c1_p4, {
      type: "line",
      data: {
        datasets: [
          {
            label: "ชาย",
            backgroundColor: gradient_1c1p4,
            borderColor: "#A8C5DD",
            pointBackgroundColor: "white",
            data: [8.11, 3.3, 7.0, 5.4, 7.3, 4.05],
          },
          {
            label: "หญิง",
            backgroundColor: gradient1_1c1p4,
            borderColor: "#FFD4D4",
            pointBackgroundColor: "white",
            data: [6.15, 4.15, 6.15, 7.45, 6.1, 9.5],
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
                max: 10,
                stepSize: 2,
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
      gradient_diac2 = ctx_dia_c2.createLinearGradient(0, 0, 0, 300);
    gradient_diac2.addColorStop(0, "rgb(82, 76, 239)");
    gradient_diac2.addColorStop(0.32, "rgb(255, 255, 255)");
    gradient_diac2.addColorStop(1, "rgb(255, 255, 255)");
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
            backgroundColor: gradient_diac2,
            borderColor: "#524cef",
            borderDash: [2],
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
    gradient_diac3.addColorStop(0, "rgb(250, 207, 37)");
    gradient_diac3.addColorStop(0.31, "rgb(255, 255, 255)");
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
            borderColor: "#facf25",
            borderDash: [2],
            pointRadius: 0,
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
          sleep_sum: "4:30 ชั่วโมง",
          sleep_change: "+ 0:15 ชั่วโมง",
          icon: "mdi-menu-up",
          long_sit: "159",
          sit_change: "+ 3",
          color: "#B4B4B4",
          color0: "green",
          color1: "red",
          show_history: "ดู",
        },
        {
          name: "Niles Peppertrout",
          no: "102",
          pos: "ผู้ช่วยสอน",
          sleep_sum: "6:30 ชั่วโมง",
          sleep_change: "- 2:15 ชั่วโมง",
          icon: "mdi-menu-down",
          long_sit: "157",
          sit_change: "- 1",
          color: "#22CE8B",
          color0: "red",
          color1: "green",
          show_history: "ดู",
        },
        {
          name: "Abraham Pigeon",
          no: "103",
          pos: "อาจารย์",
          sleep_sum: "2:15 ชั่วโมง",
          sleep_change: "+ 3:05 ชั่วโมง",
          icon: "mdi-menu-up",
          long_sit: "174",
          sit_change: "+ 0",
          color: "#22CE8B",
          color0: "green",
          color1: "green",
          show_history: "ดู",
        },
        {
          name: "Abraham Pigeon",
          no: "104",
          pos: "อาจารย์",
          sleep_sum: "7:15 ชั่วโมง",
          sleep_change: "+ 1:00 ชั่วโมง",
          icon: "mdi-menu-up",
          long_sit: "159",
          sit_change: "+ 3",
          color: "#22CE8B",
          color0: "green",
          color1: "red",
          show_history: "ดู",
        },
        {
          name: "Abraham Pigeon",
          no: "105",
          pos: "อาจารย์",
          sleep_sum: "4:10 ชั่วโมง",
          sleep_change: "- 0:10 ชั่วโมง",
          icon: "mdi-menu-down",
          long_sit: "159",
          sit_change: "3",
          color: "#22CE8B",
          color0: "red",
          color1: "green",
          show_history: "ดู",
        },
      ],
      data_card3: [
        {
          type: "เฉลี่ย",
          icon: "mdi-circle",
          color: "#359BD3",
          data: ["7:30", "3:55", "6:45", "6:20", "7:05", "6:15"],
        },
        {
          type: "ชาย",
          icon: "mdi-circle",
          color: "#A3A1FB",
          data: ["8:11", "3:30", "7:00", "5:40", "7:30", "4:05"],
        },
        {
          type: "หญิง",
          icon: "mdi-circle",
          color: "#FFDA83",
          data: ["6:15", "4:15", "6:15", "7:45", "6:10", "9:50"],
        },
      ],
    };
  },
};
</script>

<style scoped>
.dialog_p4_card1 {
  width: 100%;
}
.wd_100 {
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
.content_dialog_page_top {
  display: flex;
  justify-content: space-around;
}
.c1_c2_dialog {
  padding: 20px;
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
.sm_text {
  font-size: 14px;
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
</style>
