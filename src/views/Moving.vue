<template>
  <div class="Moving">
    <!-- การ์ดการก้าว -->
    <div class="card1_p3">
      <v-card class="bdr_12">
        <div class="card1_p3_root">
          <div class="card1_p3_headNsub">
            <!-- head lr -->
            <div class="card1_head_lr">
              <!-- head left div -->
              <div class="head_card1_p3_l">
                <!-- head left -->
                <div class="head_card1_p3_l_title">
                  <!-- การก้าว+icon -->
                  <div class="title_card1_p3">
                    <div style="padding-right:10px;">
                      <img
                        height="40px"
                        class="filter-white"
                        src="../assets/icon/icon_step_03.svg"
                        alt="step"
                      />
                    </div>
                    <div class="card3-bot-text ">
                      <span><strong>การก้าว</strong></span>
                    </div>
                  </div>
                  <!-- btn sex & age -->
                  <div class="sex_age_title_card1_p3">
                    <div class="sex_title">
                      <v-btn
                        class="white--text "
                        small
                        color="#AD8DBB"
                        width="80px"
                        ><span>เพศ</span></v-btn
                      >
                    </div>
                    <div class="age_title">
                      <v-btn
                        class="#AD8DBB--text "
                        small
                        outlined
                        color="#AD8DBB"
                        width="80px"
                        ><span>อายุ</span></v-btn
                      >
                    </div>
                  </div>
                </div>
              </div>
              <!-- head right div -->
              <div class="head_card1_p3_r">
                <!-- head right -->
                <div class="head_card1_p3_r_title">
                  <div class="exit-icon-card3">
                    <v-dialog v-model="dialog1" width="">
                      <template v-slot:activator="{ on, attrs2 }">
                        <v-btn small icon fab v-bind="attrs2" v-on="on">
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
                          <div class="head_dialog_c1_p3">
                            <div>
                              <v-btn
                                color="black darken-1"
                                icon
                                @click="dialog1 = false"
                              >
                                <img
                                  height="30px"
                                  class="filter-white"
                                  src="../assets/icon/icon_prev.svg"
                                  alt="prev"
                                />
                              </v-btn>
                            </div>
                            <div>
                              <span class="headline"
                                >รายละเอียดการเคลื่อนไหว</span
                              >
                            </div>
                          </div>
                        </v-card-title>
                        <v-card-text>
                          กราฟสรุปรายละเอียดการเคลื่อนไหวต่อเดือน
                          เพื่อสังเกตุพฤติกรรมที่อาจส่งผลถึง
                          ปัญหาสุขภาพในระยะสั้น กลาง และยาวได้
                        </v-card-text>
                        <v-card-content>
                          <div>
                            <dialog_p3 />
                          </div>
                          <!-- <canvas id="graphline" width="" height="40px"></canvas> -->
                        </v-card-content>
                      </v-card>
                    </v-dialog>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- content  -->
          <v-container-text>
            <v-layout row wrap justify="space-between">
              <v-flex xs12 md6>
                <v-card
                  elevation="0"
                  class="bdr_0"
                  style="padding-righ:5px; border-right: 1px solid grey !important;"
                >
                  <div class="card3_line2 grey--text">
                    <span
                      >ค่าเฉลี่ยก้าวเดินของผู้ใช้เพศชาย และเพศหญิง รายวัน</span
                    >
                  </div>
                  <v-card-text>
                    <div style="height:180px">
                      <canvas id="graph1_p3" width="" height="120px"></canvas>
                    </div>
                  </v-card-text>
                </v-card>
                <div class="set_h30">
                  <table width="100%">
                    <tr>
                      <td style="text-align:center;">
                        <div class="label_text_card1">
                          <div>
                            <v-icon small color="blue"> mdi-circle</v-icon>
                            <span class="black--text">ชาย</span>
                          </div>
                          <div class="pd_10">
                            <v-icon small color="pink"> mdi-circle</v-icon>
                            <span class="black--text">หญิง</span>
                          </div>
                        </div>
                      </td>
                      <td width="50%" class="text_sub" style="text-align: right;padding-right:40px;">
                        <span>จำนวนผู้ใช้ทั้งหมด 2,800 คน</span>
                      </td>
                    </tr>
                  </table>
                </div>
              </v-flex>
              <v-flex xs12 md6>
                <v-card elevation="0" style="padding-left:10px;">
                  <div class="card3_line2 grey--text">
                    <span>ค่าเฉลี่ยก้าวจากผู้ใช้ทั้งหมดตามช่วงอายุ</span>
                  </div>
                  <v-card-text>
                    <div style="height:180px">
                      <canvas
                        id="graph2_c1_p3"
                        width=""
                        height="120px"
                      ></canvas>
                    </div>
                  </v-card-text>
                </v-card>
                <div class="set_h30">
                  <table width="100%">
                    <tr>
                      <td style="padding-left:20px;" class="text_sub">
                        <span
                          >ค่าเฉลี่ยสูงสุดอยู่ที่่ 49 ปี มีจำนวนก้าวประมาณ 7,580
                          ก้าวต่อวัน</span
                        >
                      </td>
                    </tr>
                  </table>
                </div>
              </v-flex>
            </v-layout>
          </v-container-text>
        </div>
      </v-card>
    </div>
    <!-- การ์ดเผาผลาญ -->
    <div class="card1_p3">
      <v-card class="bdr_12">
        <div class="card1_p3_root">
          <div class="card1_p3_headNsub">
            <!-- head lr -->
            <div class="card1_head_lr">
              <!-- head left div -->
              <div class="head_card1_p3_l">
                <!-- head left -->
                <div class="head_card1_p3_l_title">
                  <!-- การก้าว+icon -->
                  <div class="title_card1_p3">
                    <div style="padding-right:10px;">
                      <img
                        height="40px"
                        class="filter-white"
                        src="../assets/icon/icon_brun_01.svg"
                        alt="burn"
                      />
                    </div>
                    <div class="card3-bot-text">
                      <span><strong>การเผาผลาญ</strong></span>
                    </div>
                  </div>
                  <!-- btn sex & age -->
                  <div class="sex_age_title_card1_p3">
                    <div class="sex_title">
                      <v-btn
                        class="#AD8DBB--text "
                        small
                        outlined
                        color="#AD8DBB"
                        width="80px"
                        ><span>เพศ</span></v-btn
                      >
                    </div>
                    <div class="age_title">
                      <v-btn
                        class="white--text "
                        small
                        color="#AD8DBB"
                        width="80px"
                        ><span>อายุ</span></v-btn
                      >
                    </div>
                  </div>
                </div>
              </div>
              <!-- head right div -->
              <div class="head_card1_p3_r">
                <!-- head right -->
                <div class="head_card1_p3_r_title">
                  <div class="exit-icon-card3">
                    <v-dialog v-model="dialog20" :retain-focus="false" width="">
                      <template v-slot:activator="{ on, attrs10 }">
                        <v-btn small icon fab v-bind="attrs10" v-on="on">
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
                          <div class="head_dialog_c2_p3">
                            <div>
                              <v-btn
                                color="black darken-1"
                                icon
                                @click="dialog20 = false"
                              >
                                <img
                                  height="30px"
                                  class="filter-white"
                                  src="../assets/icon/icon_prev.svg"
                                  alt="prev"
                                />
                              </v-btn>
                            </div>
                            <div class="pd_text">
                              <span class="headline"
                                >รายละเอียดค่าการเผาผลาญ</span
                              >
                            </div>
                          </div>
                        </v-card-title>
                        <v-card-text>
                          กราฟสรุปรายละเอียดการเผาผลาญต่อเดือน
                          เพื่อสังเกตุพฤติกรรมที่อาจส่งผลถึง
                          ปัญหาสุขภาพในระยะสั้น กลาง และยาวได้
                        </v-card-text>
                        <v-card-content>
                          <div>
                            <dialog_p3_2 />
                          </div>
                        </v-card-content>
                      </v-card>
                    </v-dialog>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- content -->
          <v-container-text>
            <v-layout row wrap justify="space-between">
              <v-flex xs12 md6>
                <v-card
                  elevation="0"
                  class="bdr_0"
                  style="padding-righ:5px; border-right: 1px solid grey !important;"
                >
                  <!-- หัวตาราง -->
                  <div class="card3_line2 grey--text">
                    <span>ค่าเฉลี่ยการเผาผลาญของผู้ใช้แต่ละช่วงอายุ</span>
                  </div>
                  <v-card-text>
                    <div style="height:250px">
                      <!-- graph -->
                      <canvas
                        id="graph1_c2_p3"
                        width="200px"
                        height="130"
                      ></canvas>
                    </div>
                  </v-card-text>
                </v-card>
                <div class="set_h30">
                  <!-- ก้นตาราง -->
                </div>
              </v-flex>
              <v-flex xs12 md6>
                <v-card elevation="0" style="padding-left:10px;">
                  <!-- หัวตาราง -->
                  <div class="card3_line2 grey--text">
                    <span>ค่าเฉลี่ยการเผาผลาญ จากผู้ใช้ทั้งหมดตามช่วงอายุ</span>
                  </div>
                  <v-card-text>
                    <div style="height:250px">
                      <!-- กราฟ -->
                      <canvas
                        id="graph2_c2_p3"
                        width="200px"
                        height=""
                      ></canvas>
                    </div>
                  </v-card-text>
                </v-card>
                <div class="set_h50">
                  <!-- ก้นตาราง -->
                  <table width="100%" cellspacing="0" cellpadding="0">
                    <tr style="padding:0; margin:0;">
                      <td style="padding-left:20px;">
                        <span class="text_sub"
                          >ค่าเฉลี่ยสูงสุดอยู่ที่่ 24 ปี มีค่าการเผาผลาญประมาณ
                          658 แคลต่อวัน</span
                        >
                      </td>
                    </tr>
                    <tr>
                      <td style="padding-left:20px;">
                        <span class="grey--text text_sub"
                          >(*เพิ่มจากค่าการเผาผลาญปกติที่ประมาณ 2,000 แคล
                          ต่อวัน)</span
                        >
                      </td>
                    </tr>
                  </table>
                </div>
              </v-flex>
            </v-layout>
          </v-container-text>
        </div>
      </v-card>
    </div>
    <!-- การ์ด ออกกำลังกาย -->
    <div class="card1_p3 pb_40">
      <v-card class="bdr_12">
        <div class="card1_p3_root pb_20">
          <div class="card1_p3_headNsub">
            <!-- head lr -->
            <div class="card1_head_lr">
              <!-- head left div -->
              <div class="head_card1_p3_l_last">
                <!-- head left -->
                <div class="head_card3_p3_l_title">
                  <!-- การก้าว+icon -->
                  <div class="title_card3_p3">
                    <div class="card3-bot-text ">
                      <span><strong>การออกกำลังกาย</strong></span>
                    </div>
                  </div>
                  <!-- btn all -->
                  <div class="btn_date_head_card3">
                    <div class="">
                      <v-btn
                        class="white--text "
                        small
                        color="#AD8DBB"
                        width="80px"
                        ><span>วันนี้</span></v-btn
                      >
                    </div>
                    <div class="">
                      <v-btn
                        class="#AD8DBB--text "
                        small
                        outlined
                        color="#AD8DBB"
                        width="80px"
                        ><span>สัปดาห์</span></v-btn
                      >
                    </div>
                    <div class="">
                      <v-btn
                        class="#AD8DBB--text "
                        small
                        outlined
                        color="#AD8DBB"
                        width="80px"
                        ><span>เดือน</span></v-btn
                      >
                    </div>
                    <div class="">
                      <v-btn
                        class="#AD8DBB--text "
                        small
                        outlined
                        color="#AD8DBB"
                        width="80px"
                        ><span>ปี</span></v-btn
                      >
                    </div>
                  </div>
                </div>
              </div>
              <!-- head right div -->
              <div class="head_card1_p3_r">
                <!-- head right -->
                <div class="head_card1_p3_r_title">
                  <div class="exit-icon-card3">
                    <v-btn small icon fab class="hid">
                      <img
                        height="30px"
                        class="filter-white"
                        src="../assets/icon/icon_detail.svg"
                        alt="detail"
                      />
                    </v-btn>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card1_p3_content">
            <div class="card3_p3_content_left">
              <!-- <div class="card3_line2 grey--text">
                  <span>graph here</span>
                </div> -->
              <v-card-text>
                <canvas id="graph1_c3_p3" width="200px" height=""></canvas>
              </v-card-text>
              <div class="label_grpah1_c1_p3">
                <table width="100%">
                  <tr>
                    <td style="text-align:center;">
                      <div class="label_text_card3">
                        <div>
                          <v-icon small color="blue"> mdi-circle</v-icon>
                          <span class="black--text">ชาย</span>
                        </div>
                        <div class="pd_20">
                          <v-icon small color="pink"> mdi-circle</v-icon>
                          <span class="black--text">หญิง</span>
                        </div>
                      </div>
                    </td>
                    <td width="50%" class="text_sub">
                      <span></span>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <!-- <v-divider vertical></v-divider> -->
            <div class="card3_p3_content_right pd_r_30">
              <v-card
                class="card2-subcard-3 ct_set bdr_12_only"
                width=""
                height=""
              >
                <v-card-subtitle>
                  <span class="topic-name-card_c3 ">
                    ตัวบ่งชี้
                  </span>
                </v-card-subtitle>
                <v-card-text class="pa-1">
                  <div class="card-info-right pa-1">
                    <table class="card2-table">
                      <tr>
                        <th height="30px">กิจกรรม</th>
                        <th>ชาย</th>
                        <th>หญิง</th>
                        <th>เฉลี่ยรวม</th>
                      </tr>
                      <tr
                        v-for="item in data_card3_p3"
                        :key="item.id"
                        height="30px"
                      >
                        <td class="two-data-card2">
                          <v-icon x-small :style="{ color: item.color }"
                            >mdi-circle
                          </v-icon>
                          {{ item.name }}
                        </td>
                        <td>{{ item.dataMan }}</td>
                        <td>{{ item.dataWman }}</td>
                        <td>{{ item.avg }}</td>
                      </tr>
                    </table>
                  </div>
                </v-card-text>
              </v-card>
            </div>
          </div>
        </div>
      </v-card>
    </div>
    <!-- <div class="card1_p3 pb_40">
      <v-card class="bdr_12">
        <sub_dia3 />
      </v-card>
    </div> -->
  </div>
</template>

<script>
import Chart from "chart.js";
import dialog_p3 from "@/components/dialog_p3_card1.vue";
import dialog_p3_2 from "@/components/dialog_p3_card2.vue";
// import sub_dia3 from "@/components/dialog_p3_1_c1.vue";
export default {
  components: {
    dialog_p3,
    dialog_p3_2,
    // sub_dia3,
  },
  mounted: function() {
    var ctx1_p3 = document.getElementById("graph1_p3").getContext("2d");
    var bar1_p3 = new Chart(ctx1_p3, {
      type: "horizontalBar",
      options: {
        legend: {
          display: false,
        },
        tooltips: {
          enabled: true,
        },

        scales: {
          yAxes: [
            {
              display: true,
              ticks: {
                suggestedMin: 0, // minimum will be 0, unless there is a lower value.
                stepValue: 5,
                max: 100,
              },
              gridLines: {
                offsetGridLines: true,
              },
            },
          ],
          xAxes: [
            {
              display: true,
              ticks: {
                suggestedMin: 1000, // minimum will be 0, unless there is a lower value.
                stepValue: 1000,
                max: 6000,
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
      data: {
        labels: ["ชาย", "หญิง"],
        datasets: [
          {
            label: "ก้าว",
            backgroundColor: ["#9ACDE9", "#F8C5C5"],
            data: [3628, 4874],
            barPercentage: 0.5,
            categoryPercentage: 0.8,
          },
        ],
      },
    });
    console.log(bar1_p3);

    var ctx2_c1_p3 = document.getElementById("graph2_c1_p3").getContext("2d"),
      gradient_mov_1 = ctx2_c1_p3.createLinearGradient(0, 0, 0, 300);
    gradient_mov_1.addColorStop(0, "rgb(186, 119, 215)");
    gradient_mov_1.addColorStop(0.6717171717171717, "rgb(255, 255, 255)");
    gradient_mov_1.addColorStop(1, "rgb(255, 255, 255)");
    var bar2_c1_p3 = new Chart(ctx2_c1_p3, {
      type: "line",
      options: {
        legend: {
          display: false,
        },
        tooltips: {
          enabled: true,
        },
        scales: {
          yAxes: [
            {
              display: true,
              ticks: {
                suggestedMin: 0, // minimum will be 0, unless there is a lower value.
                stepValue: 3000,
                max: 12000,
              },
              scaleLabel: {
                display: true,
                labelString: "ก้าว",
              },
            },
          ],
          xAxes: [
            {
              display: true,
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
      data: {
        datasets: [
          {
            label: "ก้าว",
            backgroundColor: gradient_mov_1,
            borderColor: "#D8B1E8",
            data: [2900, 4000, 4100, 3800, 7200, 2800],
            borderDash: [5],
            pointRadius: 0,
            // fill: "Disabled",
          },
        ],
        labels: ["10", "20", "30", "40", "50", "60 ปีขึ้นไป"],
      },
    });
    console.log(bar2_c1_p3);

    var ctx1_c2_p3 = document.getElementById("graph1_c2_p3").getContext("2d");
    var bar1_c2_p3 = new Chart(ctx1_c2_p3, {
      type: "horizontalBar",
      options: {
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              // display: true,
            },
          ],
          xAxes: [
            {
              display: true,
              ticks: {
                suggestedMin: 0, // minimum will be 0, unless there is a lower value.
                stepValue: 250,
                max: 1200,
              },
              scaleLabel: {
                display: true,
                labelString: "แคล",
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
      data: {
        labels: ["18-20", "21-30", "31-40", "41-50", "51-60", "60 Up"],
        datasets: [
          {
            label: "แคล",
            backgroundColor: [
              "#58BFAE",
              "#FF3E80",
              "#FF850A",
              "#DA2121",
              "#B4B4B4",
              "#2289D8",
            ],
            data: [984, 627, 743, 505, 286, 211],
            barPercentage: 0.5,
          },
        ],
      },
    });
    console.log(bar1_c2_p3);

    var ctx2_c2_p3 = document.getElementById("graph2_c2_p3").getContext("2d"),
      gradient_mov_2 = ctx2_c2_p3.createLinearGradient(0, 0, 0, 300);
    gradient_mov_2.addColorStop(0, "rgb(245, 124, 0)");
    gradient_mov_2.addColorStop(0.010101010101010102, "rgb(245, 124, 0)");
    gradient_mov_2.addColorStop(0.6717171717171717, "rgb(255, 255, 255)");
    gradient_mov_2.addColorStop(1, "rgb(255, 255, 255)");
    var bar2_c2_p3 = new Chart(ctx2_c2_p3, {
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
              display: true,
              ticks: {
                suggestedMin: 0, // minimum will be 0, unless there is a lower value.
                stepValue: 3000,
                max: 12000,
              },
              scaleLabel: {
                display: true,
                labelString: "ก้าว",
              },
            },
          ],
          xAxes: [
            {
              display: true,
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
      data: {
        datasets: [
          {
            label: "ก้าว",
            backgroundColor: gradient_mov_2,
            borderColor: "#f57c00",
            data: [2900, 4000, 4100, 3800, 7200, 2800],
            borderDash: [5],
            pointRadius: 0,
            // fill: "Disabled",
          },
        ],
        labels: ["10", "20", "30", "40", "50", "60 ปีขึ้นไป"],
      },
    });
    console.log(bar2_c2_p3);

    var ctx1_c3_p3 = document.getElementById("graph1_c3_p3").getContext("2d");
    var bar1_c3_p3 = new Chart(ctx1_c3_p3, {
      type: "bar",
      options: {
        legend: {
          display: false,
        },
        tooltips: {
          enabled: true,
        },
        scales: {
          yAxes: [
            {
              display: true,
              ticks: {
                suggestedMin: 0, // minimum will be 0, unless there is a lower value.
                stepValue: 0.5,
              },
              scaleLabel: {
                display: true,
                labelString: "ชั่วโมง",
              },
            },
          ],
          xAxes: [
            {
              display: true,
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
      data: {
        labels: ["18-20", "21-30", "31-40", "41-50", "51-60", "60 Up"],
        backgroundColor: ["#ff6384", "#36a2eb"],
        Color: [
          "#58BFAE",
          "#FF3E80",
          "#FF850A",
          "#DA2121",
          "#B4B4B4",
          "#2289D8",
        ],
        datasets: [
          {
            label: "ชาย",
            backgroundColor: "#9ACDE9",
            // แก้เป็นจน เต็ม
            data: [2.8, 3.4, 3.9, 3.6, 3.0, 2.5],
          },
          {
            label: "หญิง",
            backgroundColor: "#F8C5C5",
            data: [1.4, 1.1, 1.3, 1.8, 3.0, 3.0],
          },
        ],
      },
    });
    console.log(bar1_c3_p3);
  },
  data() {
    return {
      dialog1: false,
      dialog_2: false,
      dialog20: false,
      items: [
        { gender: "ผช", color: "#359BD3", data: [27, 98, 780, 34, 0] },
        { gender: "ผญ", color: "F28C8C", data: [12, 132, 560, 22, 0] },
      ],
      data_card3_p3: [
        {
          name: "เดิน",
          color: "#58BFAE",
          dataMan: "638",
          dataWman: "270",
          avg: "22.7%",
        },
        {
          name: "วิ่ง",
          color: "#FF3E80",
          dataMan: "557",
          dataWman: "250",
          avg: "19.9%",
        },
        {
          name: "ว่ายน้ำ",
          color: "#FF850A",
          dataMan: "784",
          dataWman: "275",
          avg: "28%",
        },
        {
          name: "ปั่นจักรยาน",
          color: "#DA2121",
          dataMan: "652",
          dataWman: "480",
          avg: "23.2%",
        },
        {
          name: "เครื่องวิ่งวงรี",
          color: "#B4B4B4",
          dataMan: "145",
          dataWman: "145",
          avg: "5.1%",
        },
        {
          name: "กิจกรรมในร่ม",
          color: "#2289D8",
          dataMan: "24",
          dataWman: "40",
          avg: "1.1%",
        },
      ],

      data_card3_p3_1: [
        {
          name: [
            "เดิน",
            "วิ่ง",
            "ว่ายน้ำ",
            "ปั่นจักรยาน",
            "เครื่องวิ่งวงรี",
            "กิจกรรมในร่ม",
          ],
          //   icon: "mdi-circle",
          color: [
            "#58BFAE",
            "#FF3E80",
            "#FF850A",
            "#DA2121",
            "#B4B4B4",
            "#2289D8",
          ],
          dataMan: [638, 557, 784, 652, 145, 24],
          dataWman: [270, 250, 275, 480, 145, 40],
          avg: ["22.7%", "19.9%", "28%", "23.2%", "5.1%", "1.1%"],
        },
      ],
      itm_walk: ["7วันล่าสุด", "1เดือนล่าสุด", "1ปีล่าสุด"],
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
};
</script>

<style lang="scss" scope>
.hid {
  display: none;
}
.card3_line2 {
  padding-top: 0px;
  padding-left: 10px;
  font-size: 12px;
}
.progress-el {
  display: flex;
  flex-direction: row;
}
.text-top {
  text-align: top;
}
.s-20 {
  width: 20%;
}
.big_font {
  font-size: 25px;
}
.icon-set {
  display: flex;
  justify-content: space-around;
}
// .pd_text{
//   padding-left:5px;
// }
.i-human {
  display: flex;
  flex-direction: column;
}
.card_sp {
  width: 200px;
  height: 200px;
  /* background-color: gray; */
}
.card1_p3 {
  padding: 10px 20px 10px 20px;
}
.card1_p3_root {
  padding: 20px;
}
.card1_p3_content {
  display: flex;
  /* justify-content: space-between; */
  justify-content: space-around;
  /* width: 100%; */
}
.card1_head_lr {
  /* background-color:rgba(0,0,0,0.1); */
  display: flex;
  justify-content: space-between;
}
.card3-bot-text {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  text-align: center;
  align-items: center;
}
.head_card1_p3_l {
  display: flex;
  justify-content: space-between;
  /* background-color:green; */
  width: 50%;
}
.head_card1_p3_l_last {
  display: flex;
  justify-content: space-between;
  // background-color:green;
  width: 70%;
}

.card1_p3_content_left {
  width: 50%;
  /* background-color: rgba(0, 0, 0, 0.2); */
}
.card1_p3_content_right {
  width: 50%;
  padding-left: 20px;
  /* background-color: rgba(0, 0, 0, 0.1); */
}

.card3_p3_content_left {
  width: 60%;
  /* background-color: rgba(0, 0, 0, 0.2); */
}
.card3_p3_content_right {
  width: 40%;
  padding-left: 20px;
  /* background-color: rgba(0, 0, 0, 0.1); */
}
.head_card1_p3_l_title {
  display: flex;
  justify-content: space-between;
  width: 100%;
  /* background-color: rgba(0, 0, 0, 0.2); */
}
.head_card3_p3_l_title {
  display: flex;
  /* padding: 0 10px; */
  // background-color: rgba(0, 0, 0, 0.2);
  // justify-content: space-between;
  width: 100%;
  /* background-color: rgba(0, 0, 0, 0.2); */
}
.title_card1_p3 {
  display: flex;
}
.sex_age_title_card1_p3 {
  display: flex;
  width: 50%;
  justify-content: center;
  /* background-color: rgba(0, 0, 0, 0.4); */
}
.sex_title {
  padding: 0 10px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  text-align: center;
  align-items: center;
}
.age_title {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  text-align: center;
  align-items: center;
}
.dis_flex {
  display: flex;
}
.sp_bt {
  justify-content: space-between;
}
.sp_ar {
  justify-content: space-around;
}
.pd_10 {
  padding-left: 50px;
}
.pd_20 {
  padding-left: 60px;
}
.label_text_card1 {
  display: flex;
  justify-content: center;
  font-size: 14px;
}
.label_text_card3 {
  display: flex;
  justify-content: center;
}
.title_card3_p3 {
  width: 30%;
  align-items: left;
}
.btn_date_head_card3 {
  display: flex;
  /* padding-left:30px; */
  justify-content: space-around;
  width: 50%;
  // background-color: rgba(0, 200, 200, 0.4);
}

.male-content {
  display: flex;
  flex-direction: column;
}
.top-male-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.text-male {
  display: flex;
}

.card2-subcard-3 {
  padding-left: 10px;
}

.card2-table {
  font-size: 12px;
  color: #5b5b5b;
  td {
    padding: 0 20px;
    text-align: left;
  }
}
.topic-name-card_c3 {
  color: #ad8dbb;
}

.pd_r_30 {
  padding-right: 30px;
}

.head_dialog_c1_p3 {
  width: 25%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.head_dialog_c2_p3 {
  width: 27%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.text_sub {
  font-size: 14px;
  // font-weight:lighter;
}
.pb_20 {
  padding-bottom: 20px;
}
.pb_40 {
  padding-bottom: 40px;
}
/* 

.ct_set {
  align-items: center;
  justify-content: center;
  justify-items: center;
  padding: auto;
  margin: auto;
} */
.set_h30 {
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
  height: 30px;
  // background-color: green;
}
.set_h50 {
  height: 50px;
}
</style>
