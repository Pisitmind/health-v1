<template>
  <div class="dia_noti">
    <v-card-content>
      <div class="content_dialog_page_top">
        <div class="content_top_left_page">
          <div class="set_center">
            <canvas id="graphdia1_c1_p2" width="" height=""></canvas>
          </div>
        </div>
        <div class="content_top_right_page">
          <!-- data top right -->
          <div>
            <v-card width="" class="c1_c2_dialog bdr_12">
              <table class="data_c1c2">
                <tr>
                  <td class="left" width="80%" height="20%">
                    <span>HEART RATE (TODAY)</span>
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
                    <div class="card_c1_c2_pd">
                      <canvas
                        id="graph_dialogc2"
                        width=""
                        height="100px"
                      ></canvas>
                    </div>
                  </td>
                  <td>
                    <div class="wd_100">
                      <table class="align-center">
                        <tr>
                          <span>119</span>
                        </tr>
                        <tr class="grey--text">
                          <span>
                            MON
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
                    <span>HEART RATE (YESTERDAY)</span>
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
                    <div class="card_c1_c2_pd">
                      <canvas
                        id="graph_dialogc3"
                        width=""
                        height="100px"
                      ></canvas>
                    </div>
                  </td>
                  <td>
                    <div class="wd_100">
                      <table class="align-center">
                        <tr>
                          <span>124</span>
                        </tr>
                        <tr class="grey--text">
                          <span>
                            THU
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
      <br />
      <div class="content_dialog_page_bot">
        <div>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <span class="set_bold fz_20"> NOTIFY : ADMIN LIST</span>
                <tr>
                  <th class="text-left">
                    No
                  </th>
                  <th class="text-left">
                    Name
                  </th>
                  <th class="text-left">
                    Location
                  </th>
                  <th class="text-left">
                    ROOM NO
                  </th>
                  <th class="text-left">
                    AVG (BPM)
                  </th>
                  <th class="text-left">
                    NOW (BPM)
                  </th>
                  <th class="text-left">
                    AUTO NOTIFY
                  </th>
                  <th class="text-left">
                    MANUAL NOTFY
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in data_card1_info" :key="item.id">
                  <td>{{ item.no }}</td>
                  <td>{{ item.name }}</td>
                  <td class="text_green">{{ item.location }}</td>
                  <td>{{ item.room_no }}</td>
                  <td>{{ item.avg_bpm }}</td>
                  <td>{{ item.now_bpm }}</td>
                  <td>
                    <div>
                      <v-switch
                        v-model="ex11"
                        color="#22CE8B"
                        hide-details
                        value
                        input-value="true"
                      ></v-switch>
                    </div>
                  </td>
                  <td>
                    <v-btn
                      :style="{ backgroundColor: item.color }"
                      elevation="2"
                      small
                    >
                      {{ item.manual_noti }}
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <br />
        </div>
      </div>
    </v-card-content>
  </div>
</template>

<script>
import Chart from "chart.js";
export default {
  mounted: function() {
    // bar_dia make the code broken 1

    var ctx_dia_c1_p2 = document
        .getElementById("graphdia1_c1_p2")
        .getContext("2d"),
      gradient_c1p1 = ctx_dia_c1_p2.createLinearGradient(0, 0, 0, 300);
    gradient_c1p1.addColorStop(0, "rgb(38, 216, 135)");
    gradient_c1p1.addColorStop(0.76, "rgb(255, 255, 255)");
    gradient_c1p1.addColorStop(1, "rgb(255, 255, 255)");
    var config_g1_noti = {
      type: "line",
      options: {
        title: {
          display: true,
          text: "MONTHLY GRAPH",
          color: "gray--text",
          position: "top",
        },
        scales: {
          yAxes: [
            {
              ticks: {
                suggestedMin: 0, // minimum will be 0, unless there is a lower value.
                // OR //
                // beginAtZero: true,
                stepValue: 50,
                max: 200,
              },
            },
          ],
        },
      },
      data: {
        datasets: [
          {
            label: "AVG",
            backgroundColor: gradient_c1p1,
            data: [55, 99, 148, 120, 125, 146, 100, 98, 85],
          },
          {
            label: "TODAY",
            // backgroundColor: "#FECD54",
            borderDash: [4],
            borderColor: "#FECD54",
            fill: "Disabled",
            pointRadius: 0,
            data: [170, 150, 110, 130, 140, 80, 150, 150, 160],
          },
          {
            label: "YESTERDAY",
            backgroundColor: "#F7617D",
            borderColor: "#F7617D",
            borderDash: [4],
            fill: "Disabled",
            pointRadius: 0,
            data: [120, 110, 130, 50, 100, 80, 70, 120, 130],
            // Changes this dataset to become a line
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
    };
    var bar_dia_c1_p2 = new Chart(ctx_dia_c1_p2, config_g1_noti);

    console.log(bar_dia_c1_p2);
    // broken2
    var ctx_dia_c2 = document.getElementById("graph_dialogc2").getContext("2d"),
      gradient_2p1 = ctx_dia_c2.createLinearGradient(0, 0, 0, 300);
    gradient_2p1.addColorStop(0, "rgb(38, 216, 135)");
    gradient_2p1.addColorStop(0.29, "rgb(255, 255, 255)");
    gradient_2p1.addColorStop(1, "rgb(255, 255, 255)");
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
            backgroundColor: gradient_2p1,
            data: [20, 35, 20, 40, 35, 50, 42, 50, 80],
            pointRadius: 0,
            borderDash: [4],
            borderColor: "#8AEABE",
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
    // boken3
    var ctx_dia_c3 = document.getElementById("graph_dialogc3").getContext("2d"),
      gradient_3p1 = ctx_dia_c3.createLinearGradient(0, 0, 0, 300);
    gradient_3p1.addColorStop(0, "rgb(177, 0, 255)");
    gradient_3p1.addColorStop(0.22, "rgb(255, 255, 255)");
    gradient_3p1.addColorStop(1, "rgb(255, 255, 255)");
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
            backgroundColor: gradient_3p1,
            data: [14, 73, 33, 43, 74, 66, 76, 24, 72],
            pointRadius: 0,
            borderDash: [4],
            borderColor: "#E874FA",
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
  },

  data: function() {
    return {
      card2: {
        labels: ["18-20", "21-30", "31-40", "41-50", "51-60", "60 Up"],
        Color: [
          "#58BFAE",
          "#FF3E80",
          "#FF850A",
          "#DA2121",
          "#B4B4B4",
          "#2289D8",
        ],
        avg: ["22.7%", "19.9%", "28%", "23.2%", "5.1%", "1.1%"],
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
      table1_ct1: [
        {
          name: [
            "Relaxed",
            "Light",
            "Intensive",
            "Aerbic",
            "Anaerobic",
            "VO" + 2 + "max",
          ],
          //   icon: "mdi-circle",
          color: [
            "#359BD3",
            "#E7F524",
            "#FC9A38",
            "#F92969",
            "#FF1A1A",
            "#9406FF",
          ],
          data: [1980, 452, 368, 0, 0, 0],
          avg: [
            "60-100 BPM",
            "101-116 BPM",
            "117-135 BPM",
            "136-154 BPM",
            "155-174 BPM",
            "Over 175 BPM",
          ],
        },
      ],
      table1_ct2: [
        {
          name: [
            "Relaxed",
            "Light",
            "Intensive",
            "Aerbic",
            "Anaerobic",
            "VO" + 2 + "max",
          ],
          //   icon: "mdi-circle",
          color: [
            "#359BD3",
            "#E7F524",
            "#FC9A38",
            "#F92969",
            "#FF1A1A",
            "#9406FF",
          ],
          data: [946, 1003, 324, 527, 0, 0],
          avg: [
            "60-100 BPM",
            "101-116 BPM",
            "117-135 BPM",
            "136-154 BPM",
            "155-174 BPM",
            "Over 175 BPM",
          ],
        },
      ],
      data_card1_info: [
        {
          name: "Inverness McKenzie",
          no: "101",
          location: "Production B1",
          room_no: "102",
          avg_bpm: "104",
          now_bpm: "159",
          color: "#B4B4B4",
          manual_noti: "SENDED",
        },
        {
          name: "Niles Peppertrout",
          no: "102",
          location: "Production B1",
          room_no: "140",
          avg_bpm: "140",
          now_bpm: "157",
          color: "#22CE8B",
          manual_noti: "SEND",
        },
        {
          name: "Abraham Pigeon",
          no: "103",
          location: "Production B1",
          room_no: "106",
          avg_bpm: "161",
          now_bpm: "174",
          color: "#22CE8B",
          manual_noti: "SEND",
        },
      ],
      items: [
        {
          gender: "Men",
          icon: "mdi-human-male",
          color: "#359BD3",
          data: [27, 98, 780, 34, 0],
        },
        {
          gender: "Women",
          icon: "mdi-human-female",
          color: "#F28C8C",
          data: [12, 132, 560, 22, 0],
        },
      ],
      items_2: [
        {
          gender: "Men",
          icon: "mdi-human-male",
          color: "#359BD3",
          data: [269, 492, 293, 34, 1],
        },
        {
          gender: "Women",
          icon: "mdi-human-female",
          color: "#F28C8C",
          data: [154, 569, 601, 22, 7],
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
.dia_noti {
  /* padding: 0 30px; */
}
.noti {
  padding: 16px;
}
.c_size {
  height: auto;
  width: 300px;
}
.set_bold {
  font-weight: bold;
}
.fz_20 {
  font-size: 20px;
}
/* .c1 {
  background-color: greenyellow;
}
.c2 {
  background-color: purple;
}
.c3 {
  background-color: gray;
} */
.head-card1 {
  display: flex;
  justify-content: space-between;
  padding: 30px;
  margin: auto;
}
.content1-card1 {
  display: flex;
  /* justify-content:space-between; */
  justify-content: space-around;
}
.font_bold {
  font-weight: bold;
}
.font_norm {
  font-weight: normal;
}
.font_sm {
  font-size: 14px;
}
.font_omg {
  font-size: 24px;
}
.cont1-card1 {
  display: flex;
  flex-direction: column;
}
.name_lb_c1 {
  display: flex;
  justify-content: center;
  /* padding: 5 0 px; */
}
.t1 {
  color: white;
  background-color: skyblue;
}
.topic_name_card {
  color: #ad8dbb;
}
.title_table_c1 {
  font-size: 14px;
  font-weight: bold;
}
.t_name_ct3c1 {
  display: flex;
}
.box_ct1 {
  align-items: center;
  text-align: center;
}
.txt_pd {
  padding-left: 10px;
}
.pd_text {
  padding-left: 20px;
}
.pd_text_5 {
  padding-left: 2px;
}

.alr {
  text-align: right;
  padding-right: 20px;
}
.card1-subcard-3 {
  border-spacing: 15px;
}
.column_wrapper {
  column-count: 3;
}
.col3 {
  display: flex;
  flex-grow: 1;
  width: 33%;
  height: 100px;
}
.text_green {
  color: #22ce8b;
}
.head_dialog {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.content_dialog_page_top {
  display: flex;
  justify-content: space-around;
  /* padding : 0 30px; */
  /* background-color:#22CE8B; */
}
.c1_c2_dialog {
  padding: 20px;
}
.card_c1_c2_pd {
  padding: 15px;
}

.content_top_left_page {
  width: 50%;
  /* background-color:#22CE8B; */
}
.set_center {
  /* height: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color:#22CE8B; */
}
.data_c1c2 {
  text-align: center;
  vertical-align: middle;
}
.left {
  text-align: left;
}
.content_dialog_page_bot {
  padding: 30px;
  /* padding: 0 30px; */
}

/* .c30{
  background-color:pink;
} */
.header_card2 {
  display: flex;
  justify-content: space-between;
}
.card_el {
  padding: 10px;
}
.card_el_card2 {
  padding: 10px;
}
.head_card2_btn {
  align-content: center;
}
.card2_root {
  padding: 10px;
}
/* .card2_size{
  background-color:rgba(0,0,0,0.1);
} */
.card2_nameNicon {
  display: flex;
  justify-content: center;
  /* padding:20px; */
}
.t_switch {
  display: flex;
  /* justify-items: center; */
  justify-content: center;
}
.chart1_card2 {
  padding: 20px 0;
}
.chart1_card3 {
  width: 100%;
  display: flex;
  /* align-content: center; */
  /* align-items: center; */
  justify-content: center;
}
.content1_card2 {
  display: flex;
  justify-content: space-around;
}
.content1_card3 {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}
.title_card2 {
  justify-content: center;
  align-items: center;
  text-align: bottom;
  padding-top: 10px;
}
.card2_line2 {
  font-size: 12px;
}
.data_table_card2 {
  width: 70%;
  padding: 20px 0;
}
.card3_root {
  padding: 10px;
}
.data_table_card3 {
  padding: 0 40px;
}
.size_chart3 {
  width: 80%;
  padding-top: 20px;
  align-items: center;
  justify-content: center;
  justify-items: center;
  align-content: center;
}
.head_table_card3 {
  text-align: left;
}
</style>
