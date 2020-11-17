<template>
  <div class="noti">
    <h1>This is a Notifications page</h1>
    <br />
    <!-- <canvas id="graph" width="200" height="100"></canvas> -->
    <br />
    <div class="card_el">
      <v-card elevation="3" outlined>
        <div class="card1-root">
          <div class="head-card1">
            <div class="card1-left">
              <div class="">
                <p><strong>Hearth rate</strong></p>
              </div>
            </div>
            <div class="card1-right">
              <div class="right-icon">
                <v-btn x-small icon fab>
                  <v-icon class="exit-icon">mdi-exit-to-app</v-icon>
                </v-btn>
              </div>
            </div>
          </div>
          <div class="content1-card1">
            <div class="cont1-card1 c_size c1">
              <div class="head_ct1_c1">
                <span><strong>Resting state</strong></span>
                <p style="grey--text">
                  Heart rate is resting state usually varies between 60 and 100
                  BPM.
                </p>
              </div>
              <div class="c3">
                <p>use canva graph</p>
                <canvas id="graph0" width="" height="200px"></canvas>
              </div>
              <div class="table_ct1_c1 c1">
                <v-title>Resting state of people</v-title>
                <table
                  class="table c3"
                  style="width: 100%;
  border-collapse: collapse;"
                >
                  <tr class="">
                    <td class="t1">
                      <div class="">
                        <div>
                          <p>1980</p>
                        </div>
                        <div class="name_lb_c1">
                          <v-icon x-small>mdi-circle</v-icon>
                          <span>Relaxed</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
              <br />
              <br />
              <div class="c2">
                <span class>------test-------</span>
              </div>
              <div class="table_ct1_c1 c1">
                <table
                  class="table c3"
                  style="width: 100%;
  border-collapse: collapse;"
                >
                <v-title>Resting state of people2</v-title>
                    <v-row  no-gutters style="height:auto;">
                      <v-col v-for="n in 6" :key="n">
                        <v-card class="pa-2" outlined tile>
                          <div class="">
                        <div>
                          <p>1980</p>
                        </div>
                        <div class="name_lb_c1">
                          <v-icon x-small>mdi-circle</v-icon>
                          <span>Relaxed</span>
                        </div>
                      </div>
                        </v-card>
                      </v-col>
                    </v-row>
                </table>
              </div>
              <br />
            </div>
            <div class="c_size c2"></div>
            <div class="c_size c1"></div>
            <!-- <p>content</p> -->
          </div>
        </div>
      </v-card>
    </div>
    <br />
    <br />
    <h2>how can i insert table data in graph hmm?</h2>
    <!-- <p>{{card2.labels[0]}}</p> -->
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
          "VO<sub>2</sub>max",
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
            "VO<sub>2</sub>max",
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
        },
      ],
    };
  },
};
</script>

<style scope>
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

.content1-card1 {
  display: flex;
  /* justify-content:space-between; */
  justify-content: space-around;
}
.cont1-card1 {
  display: flex;
  flex-direction: column;
}
.name_lb_c1 {
  display: flex;
}
.t1 {
  color: white;
  background-color: skyblue;
}
.column_wrapper {
  column-count: 3;
}
</style>
