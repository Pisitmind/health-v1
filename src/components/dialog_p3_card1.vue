<template>
  <v-container grid-list-lg-xl class="dialog_p3_card1">
    <div class="card_el">
      <v-card class="card1_p3_root bdr_12">
        <v-card-title>
          <div class="head_dialog_c1_p3">
            <div>
              <!-- @click="$router.push('Moving')" -->
              <v-btn color="black darken-1" icon @click="$router.go(-1)">
                <img
                  height="30px"
                  class="filter-white"
                  src="../assets/icon/icon_prev.svg"
                  alt="prev"
                />
              </v-btn>
            </div>
            <div>
              <span class="headline pl-5">รายละเอียดการเคลื่อนไหว</span>
            </div>
          </div>
        </v-card-title>
        <v-card-text>
          กราฟสรุปรายละเอียดการเคลื่อนไหวต่อเดือน
          เพื่อสังเกตุพฤติกรรมที่อาจส่งผลถึง ปัญหาสุขภาพในระยะสั้น กลาง
          และยาวได้
        </v-card-text>
        <v-card-content>
          <div class="content_dialog_page_top">
            <div class="content_top_left_page">
              <div class="set_center">
                <canvas id="graph1_c1_p3" width="500px" height="200px"></canvas>
              </div>
              <div class="table_content_card2">
                <table style="width: 100%;">
                  <tr v-for="item in data_card3" :key="item.id" align="center">
                    <th
                      scope="row"
                      width="17%"
                      align="left"
                      class="head_table_card3"
                    >
                      <v-icon small :style="{ color: item.color }">{{
                        item.icon
                      }}</v-icon>
                      <span
                        class="black--text pd_text_table_c3 pd_text_5 font_sm"
                        ><strong>{{ item.type }}</strong></span
                      >
                    </th>
                    <td
                      v-for="n in 7"
                      :key="n"
                      height="35px"
                      class="text_table_font_stle"
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
                        <span>ค่าเฉลี่ยการเดิน (ในช่วง 6 เดือน)</span>
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
                              <span style="font-size:30px;"
                                ><strong>119</strong></span
                              >
                            </tr>
                            <tr class="">
                              <span>
                                ก้าว / วัน
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
                        <span>ค่าเฉลี่ยการนั่ง (ในช่วง 6 เดือน)</span>
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
                                ><strong>64</strong></span
                              >
                            </tr>
                            <tr class="">
                              <span>
                                ครั้ง / วัน
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
                      <th class="text-left">
                        รหัส
                      </th>
                      <th class="text-left">
                        ชื่อ-สกุล
                      </th>
                      <th class="text-center">
                        ตำแหน่ง
                      </th>
                      <th class="text-center">
                        การเดิน (วันนี้)
                      </th>
                      <th class="text-center">
                        เปลี่ยนแปลงการเดิน
                      </th>
                      <th class="text-center">
                        การนั่งนาน (วันนี้)
                      </th>
                      <th class="text-center">
                        เปลี่ยนแปลงการนั่ง
                      </th>
                      <th class="text-center">
                        ดูประวัติ
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="item in moving_data_1"
                      :key="item.id"
                      class="table_content"
                    >
                      <td>{{ item.no }}</td>
                      <td>{{ item.name }}</td>
                      <td class="text-center">{{ item.pos }}</td>
                      <td class="text-center">{{ item.walk_sum }}</td>
                      <td class="text-center" :style="{ color: item.color0 }">
                        <v-icon :style="{ color: item.color0 }">{{
                          item.icon
                        }}</v-icon>
                        {{ item.walk_change }}
                      </td>
                      <td class="text-center">{{ item.long_sit }}</td>
                      <td class="text-center" :style="{ color: item.color1 }">
                        <v-icon :style="{ color: item.color0 }">{{
                          item.icon
                        }}</v-icon>
                        {{ item.sit_change }}
                      </td>
                      <td class="text-center">
                        <v-dialog
                          v-model="dialog_2"
                          :retain-focus="false"
                          width="80vw"
                        >
                          <template v-slot:activator="{ on, attrs50 }">
                            <v-btn
                              style="background-color:#AD8DBB; color:white;"
                              elevation="2"
                              small
                              width="80px"
                              v-bind="attrs50"
                              v-on="on"
                              @click="dialog_2 = true"
                              id="item.id"
                            >
                              {{ item.show_history }}
                            </v-btn>
                          </template>
                          <v-card>
                            <v-card-title class="set_head_dia">
                              <div class="head_dialog">
                                <div>
                                  <span class="headline"
                                    >รายละเอียดการเคลื่อนไหว</span
                                  >
                                </div>
                                <div>
                                  <v-btn
                                    color="black darken-1"
                                    icon
                                    @click="dialog_2 = false"
                                  >
                                    <v-icon>mdi-close</v-icon>
                                  </v-btn>
                                </div>
                              </div>
                              <div class="card2_line2 grey--text">
                                <span class="">
                                  กราฟสรุปรายละเอียดการเคลื่อนไหวต่อเดือน
                                  เพื่อสังเกตุพฤติกรรมที่อาจส่งผลถึง
                                  ปัญหาสุขภาพในระยะสั้น กลาง และยาวได้
                                </span>
                              </div>
                            </v-card-title>
                            <v-card-content>
                              <div class="dialog_p3_1_c1">
                                <div class="card1_p3">
                                  <v-card class="bdr_12" elevation="0">
                                    <div class="card1_p3_root_sp">
                                      <div class="card1_p3_headNsub">
                                        <!-- head lr -->
                                        <v-row>
                                          <v-col
                                            cols="12"
                                            md="6"
                                            sm="6"
                                            class="set_rowcontent"
                                          >
                                            <div class="title_card1_p3">
                                              <v-img
                                                max-height="100"
                                                max-width="100"
                                                class="round-img"
                                                src="https://pbs.twimg.com/profile_images/1002416157280727040/7SjA9KTJ_400x400.jpg"
                                              ></v-img>
                                            </div>
                                            <div class="set_center_sp">
                                              <v-row class="pdl_10">
                                                <v-col
                                                  cols="12"
                                                  md="12"
                                                  sm="12"
                                                  class="zero_pd"
                                                >
                                                  <span class="big_font"
                                                    >Supratcha
                                                    Wiwattanakorn</span
                                                  >
                                                </v-col>
                                                <v-col
                                                  cols="12"
                                                  md="12"
                                                  sm="12"
                                                  class="zero_pd"
                                                >
                                                  <span class="grey--text"
                                                    >ตำแหน่ง : ผู้ช่วยสอน</span
                                                  >
                                                </v-col>
                                              </v-row>
                                            </div>
                                          </v-col>
                                          <v-col cols="12" md="6" sm="6">
                                          </v-col>
                                        </v-row>
                                      </div>
                                      <!-- End head page -->
                                      <v-container-text>
                                        <v-layout
                                          row
                                          wrap
                                          justify="space-between"
                                          width="100%"
                                        >
                                          <v-flex xs12 md6>
                                            <v-card
                                              elevation="0"
                                              class="bdr_0"
                                              style="padding-righ:15px !important; border-right: 1px solid grey !important;"
                                              width="100%"
                                            >
                                              <v-row
                                                class=" pt-0 set_height"
                                                style="
    margin-right: 0px;"
                                              >
                                                <v-col
                                                  cols="12"
                                                  md="8"
                                                  sm="4"
                                                  class="set_center set_left_text  set_height pt-5"
                                                >
                                                  <span> การเดิน</span>
                                                </v-col>
                                                <v-col
                                                  cols="12"
                                                  md="4"
                                                  sm="4"
                                                  class="set_center set_height"
                                                  style="padding-right: 22px; padding-left: 0px;"
                                                >
                                                  <v-select
                                                    :items="itm_walk"
                                                    placeholder="7 วันล่าสุด"
                                                    outlined
                                                    dense
                                                    class="text-md-center rounded-lg select_itm_style"
                                                    height="40px"
                                                  >
                                                  </v-select>
                                                </v-col>
                                              </v-row>
                                              <v-card-text>
                                                <div
                                                  class="chart_31c1"
                                                  style="width:95%"
                                                >
                                                  <canvas
                                                    id="walk_graph1_2"
                                                    width="250px"
                                                    height=""
                                                  ></canvas>
                                                </div>
                                              </v-card-text>
                                            </v-card>
                                          </v-flex>
                                          <v-flex xs12 md6 class="">
                                            <v-card
                                              elevation="0"
                                              style="padding-left:10px;"
                                            >
                                              <v-row class=" pt-0 set_height">
                                                <v-col
                                                  cols="12"
                                                  md="8"
                                                  sm="4"
                                                  class="set_center  set_height pt-5"
                                                >
                                                  <tr
                                                    style="padding:0; margin:0;"
                                                    class="set_pre_table"
                                                  >
                                                    <span> การนั่งนาน</span>
                                                    <br />
                                                    <span
                                                      class="grey--text text_sub"
                                                      >ข้อมูลการนั่งมาจากการนั่งอย่างต่อเนื่องเป็นเวลา
                                                      1ชั่วโมงจะมีการเตือน</span
                                                    >
                                                  </tr>
                                                </v-col>

                                                <v-col
                                                  cols="12"
                                                  md="4"
                                                  sm="4"
                                                  class="set_center set_height"
                                                >
                                                  <v-select
                                                    :items="itm_walk"
                                                    placeholder="7 วันล่าสุด"
                                                    outlined
                                                    dense
                                                    justify-center
                                                    class="rounded-lg "
                                                    height="40px"
                                                  ></v-select>
                                                </v-col>
                                              </v-row>
                                              <v-card-text>
                                                <div
                                                  class="chart_31c1"
                                                  style="width:95%"
                                                >
                                                  <!-- id="walk_graph2_2" -->
                                                  <canvas
                                                    :id="
                                                      'walk_graph2_' +
                                                        moving_data_1.id
                                                    "
                                                    width="250px"
                                                    height=""
                                                  ></canvas>
                                                </div>
                                              </v-card-text>
                                            </v-card>
                                          </v-flex>
                                        </v-layout>
                                      </v-container-text>
                                      <!-- table done -->
                                      <div
                                        class="table_content31c1"
                                        style="width:100%"
                                      >
                                        <br />
                                        <span
                                          style="font-size:18px; font-weight: bold;"
                                        >
                                          ประวัติการแจ้งเตือน
                                        </span>
                                        <span
                                          class="grey--text"
                                          style="font-size:15x;"
                                          >(การถูกแจ้งเตือนโดยผู้ดูแล)</span
                                        >
                                        <br />
                                        <!-- <br /> -->
                                        <v-simple-table
                                          width="100%"
                                          id="customers"
                                        >
                                          <thead>
                                            <tr
                                              class="set_title_text grey--text "
                                              width="100%"
                                              cellspacing="0"
                                            >
                                              <td>ครั้งที่</td>
                                              <td width="">วันที่ , เวลา</td>
                                              <td width="">โดย</td>
                                              <td width="65%">หมายเหตุ</td>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr
                                              v-for="item in new_item"
                                              :key="item.id"
                                              height="30px"
                                              style="font-size:14px;"
                                            >
                                              <td>{{ item.no }}</td>
                                              <td>{{ item.date_time }}</td>
                                              <td>{{ item.by }}</td>
                                              <td>{{ item.dtail }}</td>
                                            </tr>
                                          </tbody>
                                        </v-simple-table>
                                      </div>
                                    </div>
                                  </v-card>
                                </div>
                              </div>
                            </v-card-content>
                          </v-card>
                        </v-dialog>
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
// import sub_dia3 from "@/components/dialog_p3_1_c1.vue";
import Chart from "chart.js";
import { fabric } from "fabric";
export default {
  components: {
    // sub_dia3,
  },
  mounted: function() {
    var ctx_dia_c1_p3 = document
      .getElementById("graph1_c1_p3")
      .getContext("2d");
    var bar_dia_c1_p3 = new Chart(ctx_dia_c1_p3, {
      type: "bar",
      data: {
        datasets: [
          {
            label: "Setting",
            backgroundColor: "#FFDA83",
            data: [385, 259, 196, 230, 106, 237, 107],
            barPercentage: 0.4,
          },
          {
            label: "Steps",
            backgroundColor: "#A3A1FB",
            data: [139, 384, 223, 189, 158, 318, 93],
            barPercentage: 0.4,
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
    console.log(bar_dia_c1_p3);

    var ctx_dia_c2 = document
        .getElementById("graph_dialog_c2")
        .getContext("2d"),
      gradient_p3_1 = ctx_dia_c2.createLinearGradient(0, 0, 0, 300);
    gradient_p3_1.addColorStop(0, "rgb(141, 141, 244)");
    gradient_p3_1.addColorStop(0.41414, "rgb(255, 255, 255)");
    gradient_p3_1.addColorStop(1, "rgb(255, 255, 255)");
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
            backgroundColor: gradient_p3_1,
            borderColor: "#8d8df4",
            pointRadius: 0,
            borderDash: [2],
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
      gradient_p3_2 = ctx_dia_c3.createLinearGradient(0, 0, 0, 300);
    gradient_p3_2.addColorStop(0, "rgb(181, 28, 181)");
    gradient_p3_2.addColorStop(0.3414141, "rgb(255, 255, 255)");
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
            backgroundColor: gradient_p3_2,
            pointRadius: 0,
            borderDash: [2],
            borderColor: "#b51cb5",
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

    // new data graph
    var ctx_3_1c1 = document.getElementById("walk_graph1_2").getContext("2d"),
      gradient2_c1_p3 = ctx_3_1c1.createLinearGradient(0, 0, 0, 300);
    gradient2_c1_p3.addColorStop(0, "rgb(255, 161, 161)");
    gradient2_c1_p3.addColorStop(0.61, "rgb(255, 255, 255)");
    gradient2_c1_p3.addColorStop(1, "rgb(255, 255, 255)");

    var config_g1 = {
      type: "line",
      data: {
        datasets: [
          {
            label: "",
            // backgroundColor: gradient2_c1_p3,
            backgroundColor: gradient2_c1_p3,
            borderColor: "#ffa1a1",
            data: [3000, 2000, 3000, 3500, 3000, 4800],
            pointBackgroundColor: "white",
          },
        ],
        labels: ["07/08", "08/08", "09/08", "10/08", "11/08", "12/08"],
      },
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
              stacked: true,
              ticks: {
                reverse: false,
                min: 1000,
                max: 5000,
                stepSize: 1000,
              },
              scaleLabel: {
                display: true,
                labelString: "ก้าว",
              },
            },
          ],
        },
      },
    };

    var bar_31c1 = new Chart(ctx_3_1c1, config_g1);
    console.log(bar_31c1);

    var ctx_3_1c1_2 = document.getElementById("walk_graph2_2").getContext("2d"),
      gradient31c1_2 = ctx_3_1c1_2.createLinearGradient(0, 0, 0, 300);
    gradient31c1_2.addColorStop(0, "rgb(0, 0, 0)");
    gradient31c1_2.addColorStop(0.1, "rgb(0, 0, 0)");
    gradient31c1_2.addColorStop(0.61, "rgb(255, 255, 255)");
    gradient31c1_2.addColorStop(1, "rgb(255, 255, 255)");
    var config_g2 = {
      type: "line",
      data: {
        datasets: [
          {
            label: "",
            backgroundColor: gradient31c1_2,
            borderColor: "#000000",
            data: [14, 3, 12, 7, 12, 5],
            pointBackgroundColor: "white",
          },
        ],
        labels: ["07/08", "08/08", "09/08", "10/08", "11/08", "12/08"],
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
                max: 20,
                stepSize: 5,
              },
              scaleLabel: {
                display: true,
                labelString: "ครั้ง",
              },
            },
          ],
        },
      },
    };
    var bar_3_1c1_2 = new Chart(ctx_3_1c1_2, config_g2);
    console.log(bar_3_1c1_2);

    // 'ผอมมาก','ปกติ','อวบ','อ้วน ระยะที่1','อ้วน ระยะที่2'
  },
  data() {
    return {
      arr: [],
      curIdx: -1,
      dialog_2: false,
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
          walk_change: "+ 156",
          icon: "mdi-menu-up",
          long_sit: "159",
          sit_change: "+ 3",
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
          walk_change: "- 395",
          icon: "mdi-menu-down",
          long_sit: "157",
          sit_change: "- 1",
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
          color: "#AD8DBB",
          color0: "green",
          color1: "green",
          show_history: "ดู",
        },
      ],
      data_card3: [
        {
          type: "รวม",
          icon: "mdi-circle",
          color: "#359BD3",
          data: [524, 643, 419, 419, 264, 555, 200],
        },
        {
          type: "การก้าว",
          icon: "mdi-circle",
          color: "#A3A1FB",
          data: [139, 384, 223, 189, 158, 318, 93],
        },
        {
          type: "การนั่งนาน",
          icon: "mdi-circle",
          color: "#FFDA83",
          data: [385, 259, 196, 230, 106, 237, 107],
        },
      ],
      itm_walk: ["7 วันล่าสุด", "1 เดือนล่าสุด", "1 ปีล่าสุด"],
      new_item: [
        {
          no: "02",
          date_time: "15 มิ.ย.20 , 14:30 น.",
          by: "ศิริญญา ศุนาญ",
          dtail:
            "แจ้งเตือนการนั่งเพิ่มสูงขึ้นผิดปกติ มากกว่า 5 ครั้ง โปรดตรวจสอบว่าสวมใส่อุปกรณ์หรือไม่",
        },
        {
          no: "01",
          date_time: "6 มิ.ย.20 , 14:30 น.",
          by: "ศิริญญา ศุนาญ",
          dtail:
            "แจ้งเตือนการนั่งต่อเนื่องเกินกว่า 3 ชั่วโมง ควรขยับ หรือลุกจากที่นั่งเผื่อผ่อนคลายกล้ามเนื้อ",
        },
      ],
    };
  },
  methods: {
    createCanvas(id) {
      let _name = "canvas" + id;
      let dom = document.getElementById(_name);
      console.log(id);
      console.log(dom);
      let _this = this;
      if (!dom) {
        setTimeout(function() {
          _this.createCanvas(id);
        }, 50);
        return;
      }
      let _canvas = new fabric.Canvas(_name);
      //canvas.setDimensions({height: 300, width: 800})
      let text = new fabric.Textbox(_name, {
        left: 50,
        top: 50,
        width: 150,
        fontSize: 20,
      });
      _canvas.add(text);
    },
  },
};
</script>

<style scoped>
.v-main__wrap {
  background-color: #f6f6f6 !important;
}
.dialog_p3_card1 {
  width: 100%;
}
/* padding: 10px 20px 0px 20px; */
.head_table_card3 {
  font-size: 14px;
}
.t_switch {
  display: flex;
  /* justify-items: center; */
  justify-content: center;
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
.card1_p3_root {
  height: fit-content;
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

.head_dialog_c2_p3 {
  width: 27%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
/* new style diaplog */

.head_card1_p3_l_title {
  display: flex;
  justify-content: space-between;
  width: 85%;
  /* background-color: rgba(0, 0, 0, 0.2); */
}
.big_font {
  font-weight: bold;
}
.pdl_10 {
  padding-left: 10px !important;
}
.v-select__selection {
  width: 100%;
  justify-content: center;
}
.set_row_select {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  /* background-color: rgba(0, 0, 0, 0.2); */
  /* background-color:blueviolet; */
}
.clear_fix {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  text-align: center;
  /* background-color: pink; */
}
/* #customers tr:nth-child(even){background-color: #f2f2f2;} */
.bg_green {
  /* background-color: rgba(9, 231, 21, 0.397); */
  padding-top: 25px;
}
.set_left_text {
  justify-content: start;
  padding-left: 30px;
}
.select_itm_style {
}
</style>
