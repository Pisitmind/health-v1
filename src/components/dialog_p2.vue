<template>
  <div>
      <v-dialog v-model="dialog" width="">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn large icon fab v-bind="attrs" v-on="on">
                        <v-icon class="exit-icon">mdi-exit-to-app</v-icon>
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                        <div class="head_dialog">
                          <div>
                            <span class="headline">Heart rate risk</span>
                          </div>
                          <div>
                            <v-btn
                              color="green darken-1"
                              icon
                              @click="dialog = false"
                            >
                              <v-icon>mdi-close</v-icon>
                            </v-btn>
                          </div>
                        </div>
                      </v-card-title>
                      <v-card-text>
                        exercise and Weight loss can help limit some of the
                        health risks associated with tachycardia by reducing the
                        negative effects of high blood pressure and sleep apnea.
                      </v-card-text>
                      <v-card-content>
                        <div class="content_dialog_page_top">
                          <div class="content_top_left_page">
                            <div class="set_center">
                              <canvas
                                id="graph_dialog"
                                width="600px"
                                height="400px"
                              ></canvas>
                            </div>
                          </div>
                          <div class="content_top_right_page">
                            <!-- data top right -->
                            <div>
                              <v-card width="" class="c1_c2_dialog">
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
                                        >-4%</v-btn
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
                              <v-card width="" class="c1_c2_dialog">
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
                                        >+2%</v-btn
                                      >
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <div class="card_c1_c2_pd">
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
                        <div class="content_dialog_page_bot">
                          <div>
                            <v-simple-table>
                              <template v-slot:default>
                                <thead>
                                  <span class=""> NOTIFY : ADMIN LIST</span>
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
                                  <tr
                                    v-for="item in data_card1_info"
                                    :key="item.id"
                                  >
                                    <td>{{ item.no }}</td>
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.location }}</td>
                                    <td>{{ item.room_no }}</td>
                                    <td>{{ item.avg_bpm }}</td>
                                    <td>{{ item.now_bpm }}</td>
                                    <td>
                                      <div>
                                        <v-switch
                                          v-model="ex11"
                                          color="#22CE8B"
                                          hide-details
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
                            <v-divider></v-divider>
                          </div>
                        </div>
                        <!-- <canvas id="graphline" width="" height="40px"></canvas> -->
                      </v-card-content>
                    </v-card>
                  </v-dialog>
  </div>
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
    console.log(bar0);

    var ctx1 = document.getElementById("graph1").getContext("2d");
    var bar1 = new Chart(ctx1, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [946, 1003, 324, 527, 0, 0],
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
    console.log(bar1);

    var ctx_dia = document.getElementById("graph_dialog").getContext("2d");
    var bar_dia = new Chart(ctx_dia, {
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
                suggestedMin: 50, // minimum will be 0, unless there is a lower value.
                // OR //
                // beginAtZero: true,
                stepValue: 50,
                max: 250,
              },
            },
          ],
        },
      },
      data: {
        datasets: [
          {
            label: "AVG",
            backgroundColor: "#1dd171",
            data: [55, 99, 148, 120, 125, 146, 100, 98, 85],
          },
          {
            label: "TODAY",
            backgroundColor: "#FECD54",
            data: [170, 150, 110, 130, 140, 80, 150, 150, 160],
          },
          {
            label: "YESTERDAY",
            backgroundColor: "#F7617D",
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
    });
    console.log(bar_dia);

    var ctx_dia_c2 = document
      .getElementById("graph_dialog_c2")
      .getContext("2d");
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
            backgroundColor: "#3db161",
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
      .getContext("2d");
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
            backgroundColor: "purple",
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
  },

  data: function() {
    return {
      dialog: false,
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
    };
  },
};
</script>

<style scope>
.noti {
  padding: 16px;
}
.c_size {
  height: auto;
  width: 300px;
}
.c1 {
  background-color: greenyellow;
}
.c2 {
  background-color: purple;
}
.c3 {
  background-color: gray;
}
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
.head_ct1_c1 {
  height: 20%;
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

.head_dialog {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
.content_dialog_page_bot {
  padding: 20px;
}
</style>
