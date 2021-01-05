<template>
  <v-container grid-list-lg-xl class="Moving">
    <!-- <div > -->
    <!-- การ์ดการก้าว -->
    <div class="card_el">
      <v-card class="card1_p3_root bdr_12 set_h_step_sp">
        <!-- <div class=""> -->
        <v-card-content>
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
                      <span>การก้าว</span>
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
                    <template>
                      <v-btn small icon fab @click="$router.push('move_dtail')">
                        <img
                          height="30px"
                          class="filter-white"
                          src="../assets/icon/icon_detail.svg"
                          alt="detail"
                        />
                      </v-btn>
                    </template>
                    <!-- <v-dialog v-model="dialog1" width="">
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
                        เพื่อสังเกตุพฤติกรรมที่อาจส่งผลถึง ปัญหาสุขภาพในระยะสั้น
                        กลาง และยาวได้
                      </v-card-text>
                      <v-card-content>
                        <div>
                          <dialog_p3 />
                        </div>
                      </v-card-content>
                    </v-card>
                  </v-dialog> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- content  -->
          <v-container-text>
            <v-layout row wrap justify="space-between" height="fit-content">
              <v-flex xs12 sm12 md6 lg6 xl6 class="set_line_div">
                <v-card elevation="0" class="bdr_0 " style="">
                  <div class="card3_line2 grey--text ">
                    <span
                      >ค่าเฉลี่ยก้าวเดินของผู้ใช้เพศชาย และเพศหญิง รายวัน</span
                    >
                  </div>
                  <v-card-content>
                    <div class="set_content_space step_card_size_l">
                      <div class="graph_line_step px-2">
                        <canvas
                          class="set_norm_size_graph "
                          id="graph1_p3"
                          width=""
                          height=""
                        ></canvas>
                      </div>
                      <div class="set_h30 sub_ct_graph">
                        <table width="100%">
                          <tr>
                            <td style="text-align:center;">
                              <div class="label_text_card1">
                                <div>
                                  <v-icon small color="blue">
                                    mdi-circle</v-icon
                                  >
                                  <span class="black--text pl-1">ชาย</span>
                                </div>
                                <div class="pd_10">
                                  <v-icon small color="pink">
                                    mdi-circle</v-icon
                                  >
                                  <span class="black--text pl-1">หญิง</span>
                                </div>
                              </div>
                            </td>
                            <td
                              width="50%"
                              class="text_sub set_sm_pd0 "
                              style="text-align: right;padding-right:40px;"
                            >
                              <span>จำนวนผู้ใช้ทั้งหมด 2,800 คน</span>
                            </td>
                          </tr>
                        </table>
                      </div>
                    </div>
                  </v-card-content>
                </v-card>
              </v-flex>
              <v-flex xs12 sm12 md6 lg6 xl6>
                <v-card elevation="0" style="padding-left:10px;">
                  <div class="card3_line2 grey--text">
                    <span>ค่าเฉลี่ยก้าวจากผู้ใช้ทั้งหมดตามช่วงอายุ</span>
                  </div>
                  <v-card-content class="set_content_space" style="">
                    <div class="set_grap_mov_2">
                      <canvas
                        id="graph2_c1_p3"
                        width=""
                        height=""
                        class="set_gp_size_mov2 set_norm_size_graph"
                      ></canvas>
                    </div>
                    <div class="set_h30 sub_ct_graph">
                      <table width="100%">
                        <tr>
                          <td
                            width="80%"
                            class="text_sub set_sm_pd0 pb_10"
                            style="text-align: left;padding-left:40px;"
                          >
                            <span
                              >ค่าเฉลี่ยสูงสุดอยู่ที่่ 49 ปี มีจำนวนก้าวประมาณ
                              7,580 ก้าวต่อวัน</span
                            >
                          </td>
                          <!-- <td style="text-align:center;">
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
                          </td> -->
                        </tr>
                      </table>

                      <!-- <table width="100%">
                        <tr>
                          <td style="padding-left:20px;" class="text_sub">
                            <div class="label_text_card1">
                              <span
                                >ค่าเฉลี่ยสูงสุดอยู่ที่่ 49 ปี มีจำนวนก้าวประมาณ
                                7,580 ก้าวต่อวัน</span
                              >
                            </div>
                          </td>
                        </tr>
                      </table> -->
                    </div>
                  </v-card-content>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container-text>
          <!-- </div> -->
        </v-card-content>
      </v-card>
    </div>
    <!-- การ์ดเผาผลาญ -->
    <div class="card_el">
      <v-card class="card1_p3_root_sp bdr_12 set_h_step">
        <!-- <div class="card1_p3_root"> -->
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
                    <span>การเผาผลาญ</span>
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
                  <template>
                    <v-btn small icon fab @click="$router.push('burn_dtail')">
                      <img
                        height="30px"
                        class="filter-white"
                        src="../assets/icon/icon_detail.svg"
                        alt="detail"
                      />
                    </v-btn>
                  </template>
                  <!--  <v-card>
                     
                      <v-card-content>
                        <div>
                          <dialog_p3_2 />
                        </div>
                      </v-card-content>
                    </v-card> -->
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- content -->
        <v-container-text>
          <v-layout row wrap justify="space-between" height="fit-content">
            <v-flex xs12 md6>
              <v-card
                elevation="0"
                class="bdr_0 line_divi_content"
                style="padding-righ:5px;"
              >
                <!-- หัวตาราง -->
                <div class="card3_line2 grey--text">
                  <span>ค่าเฉลี่ยการเผาผลาญของผู้ใช้แต่ละช่วงอายุ</span>
                </div>
                <v-card-content>
                  <div class="set_content_space step_card_size_l">
                    <div
                      class="set_content_space set_of_scroll px-2"
                      style="height:auto"
                    >
                      <!-- graph -->
                      <canvas
                        id="graph1_c2_p3"
                        width=""
                        height=""
                        class="set_size_burn set_norm_size_graph"
                      ></canvas>
                    </div>
                  </div>
                </v-card-content>
              </v-card>

              <!-- ก้นตาราง -->
              <!-- <div class="set_h30_sp">
              </div> -->
            </v-flex>
            <v-flex xs12 md6 lg6 xl6>
              <v-card elevation="0" style="padding-left:10px;">
                <!-- หัวตาราง -->
                <div class="card3_line2 grey--text">
                  <span>ค่าเฉลี่ยการเผาผลาญ จากผู้ใช้ทั้งหมดตามช่วงอายุ</span>
                </div>
                <v-card-content>
                  <div>
                    <!-- กราฟ -->
                    <div
                      class="set_content_space set_of_scroll"
                      style="height:auto"
                    >
                      <canvas
                        id="graph2_c2_p3"
                        width=""
                        height=""
                        class="set_size_burn_2 set_norm_size_graph"
                      ></canvas>
                    </div>
                  </div>
                  <!-- <v-row class="pd_subtext_sm set_h50"> -->
                  <!-- ก้นตาราง -->
                  <table
                    class="set_pdt_table"
                    width="100%"
                    cellspacing="0"
                    cellpadding="0"
                    style="padding-left:20px"
                  >
                    <tr style="padding:0; margin:0;" class="set_pre_table">
                      <!-- <td style="padding-left:20px; "> -->
                      <span class="text_sub"
                        >ค่าเฉลี่ยสูงสุดอยู่ที่่ 24 ปี มีค่าการเผาผลาญประมาณ 658
                        แคลต่อวัน</span
                      ><br />
                      <span class="grey--text text_sub"
                        >(*เพิ่มจากค่าการเผาผลาญปกติที่ประมาณ 2,000 แคล
                        ต่อวัน)</span
                      >
                      <!-- </td> -->
                    </tr>
                    <!-- <tr style="">
                    <td style="padding-left:20px;">
                    <span class="grey--text text_sub"
                      >(*เพิ่มจากค่าการเผาผลาญปกติที่ประมาณ 2,000 แคล
                      ต่อวัน)</span
                    >
                    </td>
                  </tr> -->
                  </table>

                  <!-- </v-row> -->
                </v-card-content>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container-text>
        <!-- </div> -->
      </v-card>
    </div>
    <!-- การ์ด ออกกำลังกาย -->
    <div class="card1_p3 pb_40">
      <v-card class="card1_p3_root set_h_exer_card bdr_12">
        <v-card-content>
          <div class=" pb_20">
            <div class="card1_p3_headNsub">
              <!-- head lr -->
              <div class="card1_head_lr">
                <!-- head left div -->
                <div class="head_card1_p3_l_last">
                  <!-- head left -->
                  <div class="head_card3_p3_l_title">
                    <!-- การก้าว+icon -->
                    <div class="title_card3_p3">
                      <div class="card3-bot-text sp_card">
                        <span>การออกกำลังกาย</span>
                      </div>
                    </div>
                    <!-- btn all -->
                    <div class="btn_date_head_card3">
                      <div>
                        <v-btn
                          class="white--text set_btn_ex"
                          small
                          color="#AD8DBB"
                          width="80px"
                          ><span>วันนี้</span></v-btn
                        >
                      </div>
                      <div>
                        <v-btn
                          class="#AD8DBB--text set_btn_ex"
                          small
                          outlined
                          color="#AD8DBB"
                          width="80px"
                          ><span>สัปดาห์</span></v-btn
                        >
                      </div>
                      <div>
                        <v-btn
                          class="#AD8DBB--text set_btn_ex"
                          small
                          outlined
                          color="#AD8DBB"
                          width="80px"
                          ><span>เดือน</span></v-btn
                        >
                      </div>
                      <div>
                        <v-btn
                          class="#AD8DBB--text set_btn_ex"
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
                <v-card-text class="set_content_space set_graph1c3_size">
                  <canvas
                    id="graph1_c3_p3"
                    class="set_size_graph_ex_card_bot"
                    width=""
                    height=""
                  ></canvas>
                </v-card-text>
                <div class="label_grpah1_c1_p3">
                  <table width="100%">
                    <tr>
                      <td style="text-align:center;">
                        <div class="label_text_card3">
                          <div>
                            <v-icon small color="blue"> mdi-circle</v-icon>
                            <span class="black--text pl-1">ชาย</span>
                          </div>
                          <div class="pd_20">
                            <v-icon small color="pink"> mdi-circle</v-icon>
                            <span class="black--text pl-1">หญิง</span>
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
              <div class="card3_p3_content_right pd_r_20">
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
                  <v-card-text class="pa-1 table_bot_mov">
                    <div class="card-info-right pa-1">
                      <table class="card2-table">
                        <tr>
                          <th class="set_left" height="30px">กิจกรรม</th>
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
                          <td class="text-center">{{ item.dataMan }}</td>
                          <td class="text-center">{{ item.dataWman }}</td>
                          <td class="text-center">{{ item.avg }}</td>
                        </tr>
                      </table>
                    </div>
                  </v-card-text>
                </v-card>
              </div>
            </div>
          </div>
        </v-card-content>
      </v-card>
    </div>
    <!-- <div class="card1_p3 pb_40">
      <v-card class="bdr_12">
        <sub_dia3 />
      </v-card>
    </div> -->
    <!-- </div> -->
  </v-container>
</template>

<script>
import Chart from "chart.js";
// import dialog_p3 from "@/components/dialog_p3_card1.vue";
// import dialog_p3_2 from "@/components/dialog_p3_card2.vue";
// import sub_dia3 from "@/components/dialog_p3_1_c1.vue";
export default {
  components: {
    // dialog_p3,
    // dialog_p3_2,
    // sub_dia3,
  },
  mounted: function() {
    var ctx1_p3 = document.getElementById("graph1_p3").getContext("2d");
    var bar1_p3 = new Chart(ctx1_p3, {
      type: "horizontalBar",
      options: {
        responsive: true,
        layout: {
          padding: {
            left: 20,
            right: 20,
            top: 20,
            bottom: 0,
          },
        },
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
            // categoryPercentage: 0.7,
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
        responsive: true,
        layout: {
          padding: {
            left: 20,
            right: 20,
            top: 0,
            bottom: 0,
          },
        },
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
        responsive: true,
        layout: {
          padding: {
            left: 20,
            right: 40,
            top: 20,
            bottom: 0,
          },
        },
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
            barPercentage: 0.9,
            barThickness: 10,
            minBarLength: 2,
          },
        ],
      },
    });
    console.log(bar1_c2_p3);

    var ctx2_c2_p3 = document.getElementById("graph2_c2_p3").getContext("2d"),
      gradient_mov_2 = ctx2_c2_p3.createLinearGradient(0, 0, 0, 300);
    gradient_mov_2.addColorStop(0, "rgb(245, 124, 0)");
    gradient_mov_2.addColorStop(0.010101010101010102, "rgb(245, 124, 0)");
    gradient_mov_2.addColorStop(0.8717171717171717, "rgb(255, 255, 255)");
    gradient_mov_2.addColorStop(1, "rgb(255, 255, 255)");
    var bar2_c2_p3 = new Chart(ctx2_c2_p3, {
      type: "line",
      options: {
        responsive: true,
        layout: {
          padding: {
            left: 20,
            right: 20,
            top: 20,
            bottom: 0,
          },
        },
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
        responsive: true,
        layout: {
          padding: {
            left: 20,
            right: 20,
            top: 20,
            bottom: 0,
          },
        },
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
// .card3_line2 {
//   padding-top: 0px;
//   padding-left: 30px;
//   font-size: 12px;
// }
.progress-el {
  display: flex;
  flex-direction: row;
}
.text-top {
  text-align: top;
}
.pb_10 {
  padding-bottom: 11px;
}
.s-20 {
  width: 20%;
}
.set_pdt_table {
  display: flex;
  padding-left: 60px !important;
  padding-top: 20px;
  align-items: center;
  justify-items: center;
}
.big_font {
  font-size: 25px;
}
.line_divi_content {
  border-right: 1px solid grey !important;
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
.card1_p3_root {
  min-height: fit-content;
  height: 400px;
  // height: auto;
  // height: fit-content;
}
.card1_head_lr {
  /* background-color:rgba(0,0,0,0.1); */
  display: flex;
  justify-content: space-between;
  padding: 10px 20px 0px 20px;
}
.card3-bot-text {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  // text-align: center;
  text-align: left;
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
  justify-content: start;
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
.set_norm_size_graph {
  max-width: 450px;
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
  justify-content: start;
  font-size: 14px;
  padding-left: 70px;
}
.label_text_card3 {
  display: flex;
  justify-content: center;
}
.title_card3_p3 {
  width: 30%;
  align-items: left;
  text-align: left;
}

.btn_date_head_card3 {
  display: flex;
  /* padding-left:30px; */
  justify-content: space-around;
  width: 50%;
  padding: 3px 0px;
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
.set_space_c1 {
  display: flex;
  justify-content: flex-start;
  padding-top: 20px;
}
.card2-table {
  font-size: 15px;
  color: #5b5b5b;
  td {
    padding: 0 20px;
    text-align: left;
  }
}
.topic-name-card_c3 {
  color: #ad8dbb;
  font-size: 18px;
}

.pd_r_20 {
  padding-right: 20px;
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

.set_content_space {
  // padding: 0 20px;
  height: auto;
}
.v-card__text {
  padding: 20px;
}
.two-data-card2 {
  font-size: 14px;
}
.set_h30_sp {
  height: 20px;
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
  padding-top: 20px;
  // background-color: green;
}
.set_h50 {
  // height: 50px;
}
.set_gp_size_mov2 {
  max-width: 450px;
}
.set_size_burn_2 {
  // min-height: 200px;
  // max-width: 800px;
  max-width: 450px;
  // width: 700px;
  // height: 370px;
}
.step_card_size_l {
  height: auto;
  width: 100%;
}
.set_pre_table {
  height: 30px;
}
.set_size_on_graph {
  width: 100%;
  padding: 0 20px;
}
@media (max-width: 320px) {
  .card1_p3_headNsub {
    display: flex;
    width: fit-content;
    flex-direction: column;
  }
  .pd_subtext_sm {
    padding-top: 20px;
  }
  .card1_head_lr {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .head_card1_p3_l_title {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }
  .head_card3_p3_l_title {
    display: flex;
    flex-direction: column;
  }
  .btn_date_head_card3 {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0px !important;
  }
  .set_btn_ex {
    // width: 60%;
  }
  .head_card3_p3_r_title,
  .exit-icon-card3 {
    display: flex;
    justify-content: center;
  }
  .title_card1_p3 {
    width: max-content;
  }
  .set_pdt_table {
    padding-top: 20px;
  }

  .sex_age_title_card1_p3 {
    // width: auto;
    width: fit-content;
  }
  .step_card_size_l {
    // height: 200px;
    min-width: 250px;
    max-width: 600px;
    // overflow-x: scroll;
  }
  .sub_ct_graph {
    width: 100%;
    padding: 0px !important;
    // overflow-x: scroll;
  }
  .graph_line_step {
    width: 100%;
    padding: 0 20px;
    // overflow-x: scroll;
  }
  .set_sm_pd0 {
    text-align: right;
    padding-right: 0px !important;
  }
  .label_text_card1 {
    padding-left: 0px !important;
  }
  .set_grap_mov_2 {
    min-width: 200px;
    max-width: 600px;
  }
  .set_gp_size_mov2 {
    min-width: 200px;
    max-width: 600px;
    width: 100%;
    overflow-x: scroll;
  }
  .set_size_burn {
    min-width: 300px;
    max-width: 600px;
    // min-height: 150px;
  }
  .set_size_burn_2 {
    min-width: 300px;
    max-width: 600px;
    min-height: 200px;
    overflow-x: scroll;
  }
  .card3-bot-text {
    white-space: nowrap;
  }
  .set_h50 {
    padding: 0px !important;
  }
  .card1_p3_content {
    display: flex;
    flex-direction: column;
  }
  .card3_p3_content_left,
  .card1_p3_content_right {
    width: 100%;
  }
  .set_of_scroll {
    overflow-x: scroll;
  }
  .table_bot_mov {
    width: max-content;
  }
  .card-info-right {
    width: max-content;
  }
  .set_left {
    padding-left: 0px !important;
  }
  .card2-table {
    width: max-content;
  }
  .pd_r_20 {
    padding-right: 0px;
    padding-left: 0px;
  }
}
@media (max-width: 768px) {
  .set_h_step,
  .card1_p3_root,
  .set_content_space {
    height: fit-content !important;
  }
  .content1-card1 {
    flex-direction: column;
  }
  .set_line_div {
    padding-right: 0px;
    border-right: 0px solid grey !important;
  }
  .step_card_size_l {
    height: fit-content !important;
  }
  .set_size_burn {
  }
  .set_size_burn_2 {
    // min-height: 200px;
    min-width: 600px;
    max-width: 800px;
    width: 680px;
  }
  .set_h50 {
    padding-left: 90px;
  }
  .line_divi_content {
    border-right: 0px solid grey !important;
  }
  .title_card1_p3 {
    min-width: fit-content;
  }
  .head_card1_p3_l {
    width: 60%;
  }
  .head_card3_p3_l_title {
    display: flex;
    width: 100%;
    // flex-direction: column;
  }
  .head_card1_p3_l_last {
    display: flex;
    justify-content: space-between;
    width: 90%;
  }
  .title_card3_p3 {
    width: 60%;
  }
  .card3_p3_content_right {
    width: auto;
  }
  .btn_date_head_card3 {
    display: flex;
    justify-content: space-between;
    // width: 60%;
    width: 100%;
    padding-left: 30px;
  }
  .pd_10 {
    padding-left: 10px;
  }
  .card1_p3_content {
    display: flex;
    flex-direction: column;
  }
  .card3_p3_content_left {
    width: 100%;
  }
  .card3_p3_content_right {
    // width: fit-content;
  }

  .card2-table {
    width: -webkit-fill-available;
  }
  .set_left {
    text-align: left;
    padding-left: 30px;
  }
  .set_norm_size_graph {
    height: 200px !important;
  }
  .label_text_card3 {
    padding-bottom: 20px;
  }
}
@media only screen and (min-width: 769px) and (max-width: 1440px) {
  .set_h50 {
    height: 50px;
    padding-top: 50px;
  }
  .set_h_step_sp {
    height: fit-content;
  }
  .set_h_exer_card {
    height: auto;
  }
  .set_size_burn_2 {
    min-height: 200px;
    min-width: 400px;
    // max-width: 800px;
    // width: 503px;
    // height: 270px;
  }
  .set_norm_size_graph {
    width: 100%;
    // max-height: 200px;
  }
}
@media only screen and (min-width: 1441px) and(max-width: 1920px) {
  .set_card_base {
    display: block;
    width: 770px;
    height: 300px;
  }
  .set_h_step_sp {
    height: fit-content;
  }
  .set_left {
    text-align: left;
    padding-left: 20px;
  }
  .set_h_step {
    height: 500px !important;
  }
  .set_size_burn {
    // width: 100%;
    // height: 300px;
  }
  .card3_p3_content_left {
    width: 55%;
  }
  .set_h_exer_card {
    height: min-content;
  }
  .set_graph1c3_size {
    min-width: 900px;
    min-height: 200px;
  }
  .set_h50 {
    padding-top: 100px;
  }
  .head_card1_p3_l_title {
    display: flex;
    justify-content: normal;
  }

  .btn_date_head_card3 {
    display: flex;
    justify-content: space-around;
    width: 35%;
  }
  .card2-table {
    width: -webkit-fill-available;
  }
  .set_norm_size_graph {
    width: 100%;
    max-width: 700px;
  }
  .set_size_graph_ex_card_bot {
    max-width: 850px;
  }
  .card1_p3_root_sp {
    height: fit-content !important;
    padding: 20px;
  }
  .text_sub {
    line-height: 1.2;
  }
  .title_card1_p3 {
    width: 30%;
  }
  .sex_age_title_card1_p3 {
    width: 30%;
    justify-content: space-around;
  }
}
@media only screen and (min-width: 1921px) {
  .set_size_graph_ex_card_bot,
  .set_norm_size_graph {
    width: 100%;
  }
  .set_size_graph_ex_card_bot {
    max-width: 950px !important;
  }
  .set_h_step_sp {
    height: fit-content;
  }
  .set_h_exer_card {
    height: fit-content;
  }
  .set_gp_size_mov2 {
    max-width: 800px;
  }
  .set_size_burn_2 {
    max-width: 800px;
  }
  .set_norm_size_graph {
    max-width: 800px;
  }
  .pb_10 {
    padding-bottom: 0px;
  }
}
</style>
