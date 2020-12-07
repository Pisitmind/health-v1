<template>
  <div class="noti">
    <div class="card_el">
      <v-card class="bdr_12">
        <div class="card1-root">
          <div class="head-card1">
            <div class="card1-left">
              <div class="head_name_tag">
                <p><strong>Hearth rate</strong></p>
              </div>
            </div>
            <div class="card1-right">
              <div class="right-icon">
                <v-row justify="center">
                  <v-dialog v-model="dialog" width="">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn small icon fab v-bind="attrs" v-on="on">
                        <img
                          height="30px"
                          class="filter-white"
                          src="../assets/icon/icon_detail.svg"
                          alt="detail"
                        />
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
                              color="black darken-1"
                              icon
                              x-large
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
                      <dia_noti />
                    </v-card>
                  </v-dialog>
                </v-row>
              </div>
            </div>
          </div>
          <div class="content1-card1">
            <div class="cont1-card1 c_size c1">
              <div class="head_ct1_c1">
                <span style="text-align: center;" class="center"
                  ><strong>Resting state</strong></span
                >
                <p
                  class="grey--text "
                  style="text-align: center; font-size:14px;"
                >
                  Heart rate is resting state usually varies between 60 and 100
                  BPM.
                </p>
              </div>
              <div class="c3">
                <canvas id="graph0" width="" height="200px"></canvas>
              </div>

              <div class="table_ct1_c1 c1">
                <table
                  class="table_c1 c1"
                  style="width: 100%;
  border-collapse: collapse;"
                >
                  <v-title class="title_table_c1 "
                    >Resting state of people</v-title
                  >
                  <v-row
                    no-gutters
                    style="height:auto;"
                    v-for="item in table1_ct1"
                    :key="item.id"
                  >
                    <v-col v-for="n in 6" :key="n" cols="12" sm="4">
                      <div class="">
                        <v-card class="box_ct1 pa-2" outlined tile>
                          <div class="">
                            <div>
                              <p class="font_omg">{{ item.data[n - 1] }}</p>
                            </div>
                            <div class="name_lb_c1">
                              <v-icon
                                x-small
                                :style="{ color: item.color[n - 1] }"
                                >mdi-circle</v-icon
                              >
                              <span class="font_sm pd_text_5">{{
                                item.name[n - 1]
                              }}</span>
                            </div>
                          </div>
                        </v-card>
                      </div>
                    </v-col>
                  </v-row>
                </table>
              </div>
            </div>
            <div class="cont2-card1 c_size c2">
              <div class="head_ct1_c1">
                <span style="text-align: center;" class="center"
                  ><strong>Active state</strong></span
                >
                <p class="grey--text " style="font-size:14px;">
                  Your exercise heart rate zone is calculated as below. Select
                  the appropriate heart rate zone to get the most out of your
                  exercise.
                </p>
              </div>
              <div class="c3">
                <canvas id="graph1" width="" height="200px"></canvas>
              </div>
              <div class="table_ct2_c1 c1">
                <table
                  class="table_c1 c1"
                  style="width: 100%;
  border-collapse: collapse;"
                >
                  <v-title class="title_table_c1"
                    >Active state of people</v-title
                  >
                  <v-row
                    no-gutters
                    style="height:auto;"
                    v-for="item in table1_ct2"
                    :key="item.id"
                  >
                    <v-col v-for="n in 6" :key="n" cols="12" sm="4">
                      <v-dialog
                        v-model="dialog1"
                        width="270px"
                        hide-overlay
                        scrollable
                      >
                        <template v-slot:activator="{ on, attrs }">
                          <v-card
                            class="box_ct1 pa-2"
                            outlined
                            tile
                            v-bind="attrs"
                            v-on="on"
                          >
                            <div class="">
                              <div>
                                <p class="font_omg">{{ item.data[n - 1] }}</p>
                              </div>
                              <div class="name_lb_c1">
                                <v-icon
                                  x-small
                                  :style="{ color: item.color[n - 1] }"
                                  >mdi-circle</v-icon
                                >
                                <span class="font_sm pd_text_5">{{
                                  item.name[n - 1]
                                }}</span>
                              </div>
                            </div>
                          </v-card>
                        </template>
                        <v-card>
                          <v-card-title>
                            <span>Heart rate {{ item.name[n - 1] }}</span>
                          </v-card-title>
                          <v-card-text>
                            <thead>
                              <tr width="100%" justify="space-around">
                                <th width="" class="text-left">
                                  NO
                                </th>
                                <th width="" class="text-center">
                                  NAME
                                </th>
                                <th width="" class="text-left">
                                  Notification
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr
                                v-for="item in mini_data"
                                :key="item.id"
                                class="text-left mini_fz"
                                width="100%"
                                justify="space-around"
                              >
                                <td width="20%">{{ item.no }}</td>
                                <td width="60%">{{ item.name }}</td>
                                <td width="20%" class="text-center">
                                  <v-btn
                                    :style="{
                                      backgroundColor: item.color,
                                      color: item.color1,
                                    }"
                                    elevation="2"
                                    x-small
                                  >
                                    {{ item.noti }}
                                  </v-btn>
                                </td>
                              </tr>
                            </tbody>
                          </v-card-text>
                        </v-card>
                      </v-dialog>
                    </v-col>
                  </v-row>
                </table>
              </div>
              <br />
            </div>

            <div class="c_size c1">
              <v-card
                class="card1-subcard-3 ct_set bdr_12_only"
                width=""
                height=""
              >
                <v-card-title>
                  <span class="topic_name_card pl-5 ">
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
                            <span class="txt_pd font_sm font_bold">
                              {{ item.name[x - 1] }}
                            </span>
                          </div>
                        </td>
                        <td class="alr font_sm font_bold">
                          {{ item.avg[x - 1] }}
                        </td>
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
    <div class="card_el_card2">
      <!-- card2 head+content -->
      <v-card class="bdr_12">
        <div class="card2_root">
          <!-- card2 header -->
          <div class="head-card2">
            <div class="">
              <div class="header_card2">
                <div class="title_card2">
                  <div class="card2_nameNicon">
                    <div style="padding-right:10px;">
                      <img
                        height="40px"
                        src="../assets/icon/icon_weight_01.svg"
                        alt="phone"
                      />
                    </div>
                    <div class="card2_bot_text ">
                      <span><strong>Ideal weight</strong></span>
                    </div>
                  </div>
                </div>
                <div class="head_card2_btn">
                  <v-btn small icon fab class="hid">
                    <v-icon class="exit-icon">mdi-exit-to-app</v-icon>
                  </v-btn>
                </div>
              </div>
              <div class="card2_line2 grey--text">
                <span
                  >Weightrefers to the weight of a person's body. You can know
                  your health state besed on weight change.</span
                >
              </div>
            </div>
          </div>
          <!-- card2 content -->
          <div class="content1_card2">
            <!-- card l -->
            <div class="chart1_card2 c30">
              <div>
                <canvas id="graph1_c2" width="200px" height="220"></canvas>
              </div>
            </div>
            <!-- card r  -->
            <div class="data_table_card2 c30">
              <div class="card1-subcard-3 ct_set" width="" height="">
                <div class="table_content_card2">
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
                            <span class="text-top ">56.7kg.</span>
                            <v-progress-linear
                              color="none"
                              rounded
                              value="100"
                            ></v-progress-linear>
                            <br />
                            <span class="text-top">76.6kg.</span>
                            <v-progress-linear
                              color="none"
                              rounded
                              value="100"
                            ></v-progress-linear>
                            <br />
                            <span class="text-top">85.8kg.</span>
                            <v-progress-linear
                              color="none"
                              rounded
                              value="100"
                            ></v-progress-linear>
                            <br />
                            <span class="text-top">98.0kg.</span>
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
                          <div>
                            <img
                              height="40px"
                              class="filter-white"
                              src="../assets/icon/Login-Regis_8Jul20-21.png"
                              alt="phone"
                            />
                          </div>
                          <div><p>Underweight</p></div>
                        </div>
                      </th>
                      <th>
                        <div class="i-human">
                          <div>
                            <img
                              height="40px"
                              class="filter-white"
                              src="../assets/icon/Login-Regis_8Jul20-23.png"
                              alt="phone"
                            />
                          </div>
                          <div><p>Normal</p></div>
                        </div>
                      </th>
                      <th>
                        <div class="i-human">
                          <div>
                            <img
                              height="40px"
                              class="filter-white"
                              src="../assets/icon/Login-Regis_8Jul20-20.png"
                              alt="phone"
                            />
                          </div>
                          <div><p>Overweight</p></div>
                        </div>
                      </th>
                      <th>
                        <div class="i-human">
                          <div>
                            <img
                              height="40px"
                              class="filter-white"
                              src="../assets/icon/Login-Regis_8Jul20-18.png"
                              alt="phone"
                            />
                          </div>
                          <div><p>Obese I</p></div>
                        </div>
                      </th>
                      <th>
                        <div class="i-human">
                          <div>
                            <img
                              height="40px"
                              class="filter-white"
                              src="../assets/icon/Login-Regis_8Jul20-15.png"
                              alt="phone"
                            />
                          </div>
                          <div><p>Obese II</p></div>
                        </div>
                      </th>
                    </tr>
                    <tr v-for="item in items" :key="item.id" align="center">
                      <th scope="row" class="text-left">
                        <v-icon :style="{ color: item.color }">{{
                          item.icon
                        }}</v-icon>
                        <span class="black--text"
                          ><strong>{{ item.gender }}</strong></span
                        >
                      </th>
                      <td
                        v-for="n in 5"
                        :key="n"
                        width="16.67%"
                        height="40px"
                        style="border:1px solid black;"
                        class="font_omg"
                      >
                        {{ item.data[n - 1] }}
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </div>
    <div class="card_el_card2">
      <!-- card2 head+content -->
      <v-card class="bdr_12">
        <div class="card2_root">
          <!-- card2 header -->
          <div class="head-card2">
            <div class="">
              <div class="header_card2">
                <div class="title_card2">
                  <div class="card2_nameNicon">
                    <div style="padding-right:10px;">
                      <v-icon color="#009688">mdi-google-fit</v-icon>
                    </div>
                    <div class="card2_bot_text ">
                      <span><strong>BMI</strong></span>
                    </div>
                  </div>
                </div>
                <div class="head_card2_btn">
                  <v-btn small icon fab class="hid">
                    <v-icon class="exit-icon">mdi-exit-to-app</v-icon>
                  </v-btn>
                </div>
              </div>
              <div class="card2_line2 grey--text">
                <span
                  >Weight (kg) / height(m2) You can't judge if you're "Odese"
                  just by BMI value. People can have more fat than muscle with
                  normal BMI and still classify as obese.</span
                >
              </div>
            </div>
          </div>
          <!-- card2 content -->
          <div class="content1_card2">
            <!-- card l -->
            <div class="chart1_card2 c30">
              <div class="">
                <canvas id="graph2_c2" width="200px" height="220"></canvas>
              </div>
            </div>
            <!-- card r  -->
            <div class="data_table_card2 c30">
              <div class="card1-subcard-3 ct_set" width="" height="">
                <div class="table_content_card2">
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
                            <span class="text-top">18.5</span>
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
                          <div><p>Low</p></div>
                        </div>
                      </th>
                      <th>
                        <div class="i-human">
                          <div><p>Normal</p></div>
                        </div>
                      </th>
                      <th>
                        <div class="i-human">
                          <div><p>increased</p></div>
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
                    <tr v-for="item in items_2" :key="item.id" align="center">
                      <th scope="row" class="text-left">
                        <v-icon :style="{ color: item.color }">{{
                          item.icon
                        }}</v-icon>
                        <span class="black--text"
                          ><strong>{{ item.gender }}</strong></span
                        >
                      </th>
                      <td
                        v-for="n in 5"
                        :key="n"
                        width="16.67%"
                        height="40px"
                        style="border:1px solid black;"
                        class="font_omg"
                      >
                        {{ item.data[n - 1] }}
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </div>
    <div class="card_el_card2">
      <v-card class="bdr_12">
        <div class="card3_root">
          <div class="head-card2">
            <div class="">
              <div class="header_card2">
                <div class="title_card2">
                  <div class="card2_nameNicon">
                    <div style="padding-right:10px;">
                      <img
                        height="40px"
                        class="filter-white"
                        src="../assets/icon/icon_step_03.svg"
                        alt="step"
                      />
                    </div>
                    <div class="card2_bot_text ">
                      <span><strong>Step</strong></span>
                    </div>
                  </div>
                </div>
                <div class="head_card2_btn">
                  <v-btn small icon fab class="hid">
                    <v-icon class="exit-icon">mdi-exit-to-app</v-icon>
                  </v-btn>
                </div>
              </div>
            </div>
          </div>
          <div class="card2_line2 grey--text">
            <span>Daily avg doing more exercise id good for health</span>
          </div>
          <div class="content1_card3">
            <!-- card l -->
            <div class="chart1_card3 c30">
              <div class="size_chart3">
                <canvas id="graph1_c3" width="800px" height="200px"></canvas>
              </div>
            </div>
            <br />
            <!-- card r  -->
            <div class="data_table_card3 c30">
              <div class="card1-subcard-3 ct_set" width="" height=""></div>
              <div class="table_content_card2">
                <table
                  style="width: 100%;
  border-collapse: collapse;"
                >
                  <tr v-for="item in data_card3" :key="item.id" align="center">
                    <th scope="row" width="12%" class="head_table_card3">
                      <v-icon small :style="{ color: item.color }">{{
                        item.icon
                      }}</v-icon>
                      <span
                        class="black--text pd_text_table_c3 pd_text_5 font_sm"
                        ><strong>{{ item.type }}</strong></span
                      >
                    </th>
                    <td
                      v-for="n in 5"
                      :key="n"
                      width="17%"
                      height="40px"
                      style="border:1px solid black;"
                      class="font_omg"
                    >
                      {{ item.data[n - 1] }}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js";
import dia_noti from "@/components/dia_noti.vue";
export default {
  components: {
    dia_noti,
  },
  mounted: function() {
    var ctx1_c2 = document.getElementById("graph1_c2").getContext("2d");
    var bar1_c2 = new Chart(ctx1_c2, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [300, 350, 130, 200, 50],
            backgroundColor: [
              "#AD8DBB",
              "#359BD3",
              "#58BFAE",
              "#FF850A",
              "#DA2121",
            ],
          },
        ],
        labels: ["Relaxed", "Light", "Intensive", "Aerbic", "Anaerobic"],
      },
      options: {
        responsive: true,
        legend: {
          display: false,
        },
      },
    });
    console.log(bar1_c2);
    var ctx2_c2 = document.getElementById("graph2_c2").getContext("2d");
    var bar2_c2 = new Chart(ctx2_c2, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [269, 492, 293, 34, 10],
            backgroundColor: [
              "#AD8DBB",
              "#359BD3",
              "#58BFAE",
              "#FF850A",
              "#DA2121",
            ],
          },
        ],
        labels: ["Relaxed", "Light", "Intensive", "Aerbic", "Anaerobic"],
      },
      options: {
        responsive: true,
        legend: {
          display: false,
        },
      },
    });
    console.log(bar2_c2);
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
    var ctx2_c3 = document.getElementById("graph1_c3").getContext("2d");
    var bar2_c3 = new Chart(ctx2_c3, {
      type: "bar",
      data: {
        datasets: [
          {
            label: "Steps",
            backgroundColor: "#A3A1FB",
            data: [139, 384, 223, 189, 158, 318, 93],
            barPercentage: 0.5,
          },
          {
            label: "Setting",
            backgroundColor: "#FFDA83",
            data: [385, 259, 196, 230, 106, 237, 107],
            barPercentage: 0.5,
          },
        ],
        labels: ["7/8", "7/9", "7/10", "7/11", "7/12", "7/13", "7/14"],
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
            },
          ],
        },
      },
    });
    console.log(bar2_c3);
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
      mini_data: [
        {
          no: "101",
          name: "inverness McKenzie",
          noti: "SEND",
          color: "#22CE8B",
          color1: "white",
        },
        {
          no: "102",
          name: "inverness McKenzie",
          noti: "SEND",
          color: "#22CE8B",
          color1: "white",
        },
        {
          no: "103",
          name: "inverness McKenzie",
          noti: "SEND",
          color: "#22CE8B",
          color1: "white",
        },
        {
          no: "104",
          name: "inverness McKenzie",
          noti: "SEND",
          color: "#22CE8B",
          color1: "white",
        },
        {
          no: "105",
          name: "inverness McKenzie",
          noti: "SEND",
          color: "#22CE8B",
          color1: "white",
        },
      ],
    };
  },
};
</script>

<style scoped>
.v-dialog {
  position: absolute;
  bottom: 0;
  right: 0;
}
.noti {
  padding: 16px;
}
.hid {
  display: none;
}
.card2_bot_text {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  text-align: center;
  font-size: 22px !important;
}
.mini_fz {
  font-size: 12px;
}
.head_name_tag {
  font-size: 20px;
}
.c_size {
  height: auto;
  width: 300px;
}
.head_ct1_c1 {
  height: 84px;
}
/* .c1 {
  background-color: greenyellow;
}
.c2 {
  background-color: purple;
} */
.c3 {
  /* background-color: gray; */
  padding: 10px 0 10px 0;
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
  justify-items: center;
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
