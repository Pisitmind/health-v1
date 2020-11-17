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
                <v-row justify="center">
                  <v-dialog v-model="dialog" width="600px">
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
                    </v-card>
                  </v-dialog>
                </v-row>
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
                <canvas id="graph0" width="" height="200px"></canvas>
              </div>
              <br />
              <div class="table_ct1_c1 c1">
                <table
                  class="table_c1 c1"
                  style="width: 100%;
  border-collapse: collapse;"
                >
                  <v-title>Resting state of people</v-title>
                  <v-row
                    no-gutters
                    style="height:auto;"
                    v-for="item in table1_ct1"
                    :key="item.id"
                  >
                    <v-col v-for="n in 6" :key="n" cols="12" sm="4">
                      <v-card class="box_ct1 pa-2" outlined tile>
                        <div class="">
                          <div>
                            <p>{{ item.data[n - 1] }}</p>
                          </div>
                          <div class="name_lb_c1">
                            <v-icon
                              x-small
                              :style="{ color: item.color[n - 1] }"
                              >mdi-circle</v-icon
                            >
                            <span>{{ item.name[n - 1] }}</span>
                          </div>
                        </div>
                      </v-card>
                    </v-col>
                  </v-row>
                </table>
              </div>
              <br />
            </div>

            <div class="cont2-card1 c_size c2">
              <div class="head_ct1_c1">
                <span><strong>Active state</strong></span>
                <p style="grey--text">
                  Your exercise heart rate zone is calculated as below. Select
                  the appropriate heart rate zone to get the most out of your
                  exercise.
                </p>
              </div>
              <div class="c3">
                <canvas id="graph1" width="" height="200px"></canvas>
              </div>
              <br />
              <div class="table_ct2_c1 c1">
                <table
                  class="table_c1 c1"
                  style="width: 100%;
  border-collapse: collapse;"
                >
                  <v-title>Resting state of people</v-title>
                  <v-row
                    no-gutters
                    style="height:auto;"
                    v-for="item in table1_ct2"
                    :key="item.id"
                  >
                    <v-col v-for="n in 6" :key="n" cols="12" sm="4">
                      <v-card class="box_ct1 pa-2" outlined tile>
                        <div class="">
                          <div>
                            <p>{{ item.data[n - 1] }}</p>
                          </div>
                          <div class="name_lb_c1">
                            <v-icon
                              x-small
                              :style="{ color: item.color[n - 1] }"
                              >mdi-circle</v-icon
                            >
                            <span>{{ item.name[n - 1] }}</span>
                          </div>
                        </div>
                      </v-card>
                    </v-col>
                  </v-row>
                </table>
              </div>
              <br />
            </div>

            <div class="c_size c1">
              <v-card class="card1-subcard-3 ct_set" width="" height="">
                <v-card-title>
                  <span class="topic-name-card pl-5">
                    Heart rate zone
                  </span>
                </v-card-title>
                <v-card-text class="pa-1">
                  <div class="card-info-right pa-1">
                    <table
                      class="card2-table"
                      v-for="item in table1_ct1"
                      :key="item.id"
                      style="width: 100%;
  border-collapse: collapse;"
                    >
                      <tr>
                        <th></th>
                        <th></th>
                      </tr>
                      <tr v-for="x in 6" :key="x" class="two-data-card2">
                        <td height="40px" class="pd_text 3">
                          <div class="t_name_ct3c1">
                            <v-icon
                              x-small
                              :style="{ color: item.color[x - 1] }"
                              >mdi-circle
                            </v-icon>
                            <span class="txt_pd">
                              {{ item.name[x - 1] }}
                            </span>
                          </div>
                        </td>
                        <td class="alr c1">{{ item.avg[x - 1] }}</td>
                      </tr>
                    </table>
                  </div>
                </v-card-text>
              </v-card>
            </div>
            <!-- <p>content</p> -->
          </div>
        </div>
      </v-card>
    </div>
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
.table_ct1_c1 table {
  /* width: 280px; */
  /* align-items: center; */
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
</style>
