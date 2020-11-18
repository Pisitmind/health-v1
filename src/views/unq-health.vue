<template>
  <div class="unqHealth">
    <h1>unqHealth page</h1>
    <v-divider></v-divider>
    <br />
    <v-card>
      <v-card-title>
        <div class="head_dialog">
          <div>
            <span class="headline">Heart rate risk</span>
          </div>
          <div>
            <v-btn color="green darken-1" icon @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>
        </div>
      </v-card-title>
      <v-card-text>
        exercise and Weight loss can help limit some of the health risks
        associated with tachycardia by reducing the negative effects of high
        blood pressure and sleep apnea.
      </v-card-text>
      <v-card-content>
        <div class="content_dialog_page_top">
          <div class="content_top_left_page">
            <div class="set_center">
              <canvas id="graph_dialog" width="800px" height="400px"></canvas>
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
            <br/>
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
          <h1>Table bot page</h1>
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
    var ctx_dia = document.getElementById("graph_dialog").getContext("2d");
    var bar_dia = new Chart(ctx_dia, {
      type: "line",
      options: {
        title: {
            display: true,
            text: 'MONTHLY GRAPH',
            color:"gray--text",
            position: "top"
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
            data: [14 ,73 ,33 ,43 ,74 ,66 ,76 ,24 ,72],
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
    };
  },
};
</script>

<style scoped>
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
.set_center{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.data_c1c2 {
  text-align: center;
  vertical-align: middle;
}
.left{
  text-align: left;
}

</style>
