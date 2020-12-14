<template>
  <div class="dialog_p3_card2">
    <v-card elevation="0">
      <v-card-title> </v-card-title>
      <v-card-content>
        <div class="content_dialog_page_top">
          <div class="content_top_left_page">
            <div class="set_center">
              <canvas
                id="graphdia1_c1_p3"
                width="500px"
                height="200px"
              ></canvas>
            </div>
            <div class="table_content_card2">
              <table style="width: 100%;">
                <tr v-for="item in data_card3" :key="item.id" align="center">
                  <th
                    scope="row"
                    width="15%"
                    align="left"
                    class="head_table_card3"
                  >
                    <v-icon small :style="{ color: item.color }">{{
                      item.icon
                    }}</v-icon>
                    <span class="black--text pd_text_table_c3 pd_text_5 font_sm"
                      ><strong>{{ item.type }}</strong></span
                    >
                  </th>
                  <td
                    v-for="n in 7"
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
                      <span>ค่าเฉลี่ยการเผาผลาญ ผู้ชาย </span>
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
                    <td class="left" width="80%" height="">
                      <span>(ในช่วง 6 เดือน) </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="sub_card_dia_mini">
                        <canvas
                          id="graphdia_c2_p3"
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
                              ><strong>92</strong></span
                            >
                          </tr>
                          <tr class="">
                            <span>
                              แคล / วัน
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
                      <span>ค่าเฉลี่ยการเผาผลาญ ผู้หญิง</span>
                    </td>
                    <td>
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
                  <tr>
                    <td class="left" width="80%" height="">
                      <span>(ในช่วง 6 เดือน) </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="sub_card_dia_mini">
                        <canvas
                          id="graphdia_c3_p3"
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
                              ><strong>136</strong></span
                            >
                          </tr>
                          <tr class="">
                            <span>
                              แคล / วัน
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
                  <span
                    class=""
                    width="100%"
                    style="font-size:18px; font-weight: bold;"
                  >
                    ข้อมูลผู้ใช้งาน</span
                  >
                  <tr>
                    <th class="text-left" width="10%">
                      รหัส
                    </th>
                    <th class="text-left" width="20%">
                      ชื่อ-สกุล
                    </th>
                    <th class="text-left" width="15%">
                      ตำแหน่ง
                    </th>
                    <th class="text-left" width="20%">
                      แคลอรี่ (วันนี้)
                    </th>
                    <th class="text-left" width="20%">
                      เปลี่ยนแปลงแคลอรี่
                    </th>
                    <th class="text-left" width="10%">
                      ดูประวัติ
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in moving_data_1" :key="item.id">
                    <td>{{ item.no }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.pos }}</td>
                    <td>{{ item.walk_sum }}</td>
                    <td :style="{ color: item.color0 }">
                      <v-icon :style="{ color: item.color0 }">{{
                        item.icon
                      }}</v-icon>

                      {{ item.walk_change }}
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
</template>

<script>
import Chart from "chart.js";
export default {
  mounted: function() {
    var ctx_dia_c1_p3 = document
        .getElementById("graphdia1_c1_p3")
        .getContext("2d"),
      gradient1_c1_p3 = ctx_dia_c1_p3.createLinearGradient(0, 0, 0, 300),
      gradient2_c1_p3 = ctx_dia_c1_p3.createLinearGradient(0, 0, 0, 300);
    gradient1_c1_p3.addColorStop(0, "rgb(82, 169, 217)");
    gradient1_c1_p3.addColorStop(0.6414141414141414, "rgb(255, 255, 255)");
    gradient1_c1_p3.addColorStop(1, "rgb(255, 255, 255)");

    gradient2_c1_p3.addColorStop(0, "rgb(255, 161, 161)");
    gradient2_c1_p3.addColorStop(0.6414141414141414, "rgb(255, 255, 255)");
    gradient2_c1_p3.addColorStop(1, "rgb(255, 255, 255)");
    var bar_dia_c1_p3 = new Chart(ctx_dia_c1_p3, {
      type: "line",
      data: {
        datasets: [
          {
            label: "ชาย",
            backgroundColor: gradient1_c1_p3,
            borderColor: "#A3A1FB",
            data: [139, 384, 223, 189, 158, 318],
            pointBackgroundColor: "white",
          },
          {
            label: "หญิง",
            backgroundColor: gradient2_c1_p3,
            borderColor: "#ffa1a1",
            data: [385, 259, 196, 230, 106, 237],
            pointBackgroundColor: "white",
          },
        ],
        labels: ["ม.ค", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย."],
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
              stacked: true,
              ticks: {
                reverse: false,
                min: 0,
                max: 1000,
                stepSize: 200,
              },
              scaleLabel: {
                display: true,
                labelString: "แคล",
              },
            },
          ],
        },
      },
    });
    console.log(bar_dia_c1_p3);

    var ctx_dia_c2 = document.getElementById("graphdia_c2_p3").getContext("2d"),
      gradient_dia_c2_p3 = ctx_dia_c2.createLinearGradient(0, 0, 0, 300);
    gradient_dia_c2_p3.addColorStop(0, "rgb(114, 114, 242)");
    gradient_dia_c2_p3.addColorStop(0.31, "rgb(255, 255, 255)");
    gradient_dia_c2_p3.addColorStop(1, "rgb(255, 255, 255)");
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
            backgroundColor: gradient_dia_c2_p3,
            data: [20, 35, 20, 40, 35, 50, 42, 50, 80],
            pointRadius: 0,
            borderDash: [2],
            borderColor: "#A5A5F7",
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
    var ctx_dia_c3 = document.getElementById("graphdia_c3_p3").getContext("2d"),
      gradient_dia_c3_p3 = ctx_dia_c3.createLinearGradient(0, 0, 0, 300);
    gradient_dia_c3_p3.addColorStop(0, "rgb(255, 226, 156)");
    gradient_dia_c3_p3.addColorStop(0.4797979797979798, "rgb(255, 255, 255)");
    gradient_dia_c3_p3.addColorStop(1, "rgb(255, 255, 255)");
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
            backgroundColor: gradient_dia_c3_p3,
            pointRadius: 0,
            borderColor: "#f9b000",
            borderDash: [2],
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
          icon: "mdi-menu-up",
          walk_change: "+ 156",
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
          walk_sum: "4875",
          walk_change: "- 395",
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
          walk_sum: "3621",
          walk_change: "+ 0",
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
          walk_sum: "2541",
          walk_change: "+ 156",
          icon: "mdi-menu-up",
          long_sit: "159",
          sit_change: "+ 3",
          color: "#22CE8B",
          color0: "green",
          color1: "green",
          show_history: "ดู",
        },
      ],
      data_card3: [
        {
          type: "เฉลี่ย",
          icon: "mdi-circle",
          color: "#359BD3",
          data: [524, 643, 419, 419, 264, 555, 200],
        },
        {
          type: "ชาย",
          icon: "mdi-circle",
          color: "#A3A1FB",
          data: [139, 384, 223, 189, 158, 318, 93],
        },
        {
          type: "หญิง",
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
.dialog_p3_card1 {
  width: 100%;
}
.t_switch {
  display: flex;
  /* justify-items: center; */
  justify-content: center;
}
/* .head_dialog_c1_p3 {
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
