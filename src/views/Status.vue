<template>
  <v-container grid-list-lg-xl class="status">
    <!-- <div> -->
    <div class="card1_p4">
      <v-card class="bdr_12">
        <div class="card1_p4_root">
          <div class="card1_p4_headNsub">
            <!-- head lr -->
            <div class="card1_head_lr">
              <!-- head left div -->
              <div class="head_card1_p4_l">
                <!-- head left -->
                <div class="head_card1_p4_l_title">
                  <!-- การก้าว+icon -->
                  <div class="title_card1_p4">
                    <div style="padding-right:10px;">
                      <img
                        height="40px"
                        class="filter-white"
                        src="../assets/icon/icon_sleep_03.svg"
                        alt="burn"
                      />
                    </div>
                    <div class="card3-bot-text " style="text-align: center;">
                      <span><strong>การนอนหลับ</strong></span>
                    </div>
                  </div>
                  <!-- btn sex & age -->
                  <div class="sex_age_title_card1_p4">
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
              <div class="head_card1_p4_r">
                <!-- head right -->
                <div class="head_card1_p4_r_title">
                  <div class="exit-icon-card3">
                    <!-- คอนเท้นย่อย ยัง -->
                    <template>
                      <v-btn
                        small
                        icon
                        fab
                        @click="$router.push('sleep_dtail')"
                      >
                        <img
                          height="30px"
                          class="filter-white"
                          src="../assets/icon/icon_detail.svg"
                          alt="detail"
                        />
                      </v-btn>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Content  -->
          <v-container-text>
            <v-layout row wrap justify="space-between">
              <v-flex xs12 md6 class="set_of_c1_top">
                <v-card
                  elevation="0"
                  class="bdr_0 set_boder_right"
                  style="padding-righ:5px;"
                >
                  <div class="card3_line2 grey--text">
                    <span>ค่าเฉลี่ยการนอนหลับของผู้ใช้เพศชาย และเพศหญิง</span>
                  </div>
                  <v-card-content>
                    <!-- ใส่กราฟ -->
                    <div class="set_content_space" style="">
                      <canvas
                        class="set_norm_size_graph "
                        id="graph1_p4"
                        width=""
                        height=""
                      ></canvas>
                    </div>
                  </v-card-content>
                </v-card>
                <div class="label_grpah1_c1_p4 set_h_table">
                  <table
                    width="100%"
                    class="set_tb_size"
                    justify="space-between"
                  >
                    <tr>
                      <td style="text-align:center;">
                        <div class="label_text_card_norm">
                          <div>
                            <v-icon small color="blue"> mdi-circle</v-icon>
                            <span class="black--text pl-1">ชาย</span>
                          </div>
                          <div class="pd_10">
                            <v-icon small color="pink"> mdi-circle</v-icon>
                            <span class="black--text pl-1">หญิง</span>
                          </div>
                        </div>
                      </td>
                      <td
                        width="50%"
                        align="right"
                        style="font-size:14px; padding-right:40px;"
                        class="sm_pd_left"
                      >
                        <span>จำนวนผู้ใช้ทั้งหมด 2,800 คน</span>
                      </td>
                    </tr>
                  </table>
                </div>
              </v-flex>
              <v-flex xs12 md6 class="set_of_c1_top">
                <v-card
                  elevation="0"
                  style="padding-left:10px;"
                  class="sm_pd_top"
                >
                  <div class="card3_line2 grey--text">
                    <span>ค่าเฉลี่ยก้าวจากผู้ใช้ทั้งหมดตามช่วงอายุ</span>
                  </div>
                  <v-card-content>
                    <!-- ใส่กราฟ -->
                    <div class="set_content_space" style="">
                      <canvas
                        class="set_norm_size_graph "
                        id="graph2_c1_p4"
                        width=""
                      ></canvas>
                    </div>
                  </v-card-content>
                </v-card>
                <div class="set_h_table">
                  <table width="100%" class="set_tb_size">
                    <tr>
                      <td
                        style="padding-left:40px;"
                        class="text_sub pd_text_table"
                      >
                        <span
                          >ค่าเฉลี่ยสูงสุดอยู่ที่่ 49 ปี มีจำนวนการนอนหลับประมาณ
                          5:40 ชั่วโมงต่อวัน</span
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
    <div class="card1_p4">
      <v-card class="bdr_12">
        <div class="card1_p4_root">
          <div class="card1_p4_headNsub">
            <!-- head lr -->
            <div class="card1_head_lr">
              <!-- head left div -->
              <div class="head_card1_p4_l">
                <!-- head left -->
                <div class="head_card1_p4_l_title">
                  <!-- การก้าว+icon -->
                  <div class="title_card1_p4">
                    <div style="padding-right:10px;">
                      <img
                        height="40px"
                        class="filter-white"
                        src="../assets/icon/icon_heartrate_01.svg"
                        alt="heartrate"
                      />
                    </div>
                    <div class="card3-bot-text ">
                      <span><strong>การเต้นของหัวใจ</strong></span>
                    </div>
                  </div>
                  <!-- btn sex & age -->
                  <div class="sex_age_title_card1_p4">
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
              <div class="head_card1_p4_r">
                <!-- head right -->
                <div class="head_card1_p4_r_title">
                  <div class="exit-icon-card3">
                    <!-- คอนเท้นย่อย ยัง -->
                    <template>
                      <v-btn
                        small
                        icon
                        fab
                        @click="$router.push('heart_dtail')"
                      >
                        <img
                          height="30px"
                          class="filter-white"
                          src="../assets/icon/icon_detail.svg"
                          alt="detail"
                        />
                      </v-btn>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card2_p4_content">
            <div class="card3_line2 grey--text">
              <span
                >ค่าเฉลี่ยการเต้นของหัวใจสูงสุดของผู้ใช้เพศชาย และเพศหญฺิง</span
              >
            </div>
            <br />
            <div class="card2_content_top">
              <canvas
                id="graph1_c2_p4"
                width="400px"
                height="80px"
                class="set_wd_graph_c"
              ></canvas>
              <div class="label_grpah1_c1_p4 set_pd_top_sp">
                <table width="100%">
                  <tr>
                    <td style="text-align:center;">
                      <div class="label_text_card_norm">
                        <div>
                          <v-icon small color="blue"> mdi-circle</v-icon>
                          <span class="black--text pl-1"> ชาย </span>
                        </div>
                        <div class="pd_10">
                          <v-icon small color="pink"> mdi-circle</v-icon>
                          <span class="black--text pl-1"> หญิง </span>
                        </div>
                      </div>
                    </td>
                    <td width="50%"></td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="card2_content_bot">
              <div class="card2_p4_content_left">
                <v-card-title>
                  <img
                    height="30px"
                    class="filter-white"
                    src="../assets/icon/icon_men.svg"
                    alt="man"
                  />
                  <span style="font-size:15px; font-weight:bold;"
                    >ค่าเฉลี่ยในเพศชาย
                  </span>
                </v-card-title>
                <v-card-subtitle>
                  <div class="card3_line2 grey--text">
                    <span
                      >ค่าเฉลี่ยการเต้นของหัวใจจากผู้ใช้เพศชายทั้งหมดตามช่วงอายุ</span
                    >
                  </div>
                </v-card-subtitle>
                <div class="set_of_card_graph">
                  <v-card-text>
                    <!-- ใส่กราฟ -->
                    <div class="card_out">
                      <canvas
                        id="graph2_c2_p4"
                        width="200px"
                        height=""
                        class="set_mx_width set_wd_graph_hr"
                      ></canvas>
                    </div>
                  </v-card-text>
                  <div class="label_grpah1_c1_p4">
                    <table width="100%">
                      <span class="" style="font-size:14px; font-weight:normal;"
                        >ค่าเฉลี่ยสูงสุดอยู่ที่่ 49 ปี มีการเต้นของหัวใจประมาณ
                        135 BPM ต่อวัน</span
                      >
                    </table>
                  </div>
                </div>
              </div>
              <v-divider vertical></v-divider>
              <div class="card2_p4_content_right">
                <v-card-title>
                  <img
                    height="30px"
                    class="filter-white"
                    src="../assets/icon/icon_women.svg"
                    alt="woman"
                  />
                  <span style="font-size:15px; font-weight:bold;">
                    ค่าเฉลี่ยในเพศหญิง
                  </span>
                </v-card-title>
                <v-card-subtitle>
                  <div class="card3_line2 grey--text">
                    <span
                      >ค่าเฉลี่ยการเต้นของหัวใจจากผู้ใช้เพศหญิงทั้งหมดตามช่วงอายุ</span
                    >
                  </div>
                </v-card-subtitle>
                <div class="set_of_card_graph">
                  <v-card-text>
                    <!-- ใส่กราฟ -->
                    <div class="card_out">
                      <canvas
                        id="graph3_c2_p4"
                        width="200px"
                        height=""
                        class="set_mx_width set_wd_graph_hr"
                      ></canvas>
                    </div>
                  </v-card-text>
                  <div class="label_grpah1_c1_p4">
                    <table width="100%">
                      <span class="" style="font-size:14px; font-weight:normal;"
                        >ค่าเฉลี่ยสูงสุดอยู่ที่่ 49 ปี มีการเต้นของหัวใจประมาณ
                        135 BPM ต่อวัน</span
                      >
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </div>
    <div class="card1_p4">
      <v-card class="bdr_12">
        <div class="card1_p4_root">
          <div class="card1_p4_headNsub">
            <!-- head lr -->
            <div class="card1_head_lr">
              <!-- head left div -->
              <div class="head_card1_p4_l">
                <!-- head left -->
                <div class="head_card1_p4_l_title">
                  <!-- การก้าว+icon -->
                  <div class="title_card1_p4">
                    <div style="padding-right:10px;">
                      <img
                        height="40px"
                        class="filter-white"
                        src="../assets/icon/icon_step.svg"
                        alt="Step"
                      />
                    </div>
                    <div class="card3-bot-text ">
                      <span><strong>คะแนนร่างกาย</strong></span>
                    </div>
                  </div>
                  <!-- btn sex & age -->
                  <div class="sex_age_title_card1_p4">
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
              <div class="head_card1_p4_r">
                <!-- head right -->
                <div class="head_card1_p4_r_title">
                  <div class="exit-icon-card3">
                    <!-- ยังก่อน -->
                    <template>
                      <v-btn
                        small
                        icon
                        fab
                        @click="$router.push('bmi_dtail')"
                        class="hid"
                      >
                        <img
                          height="30px"
                          class="filter-white"
                          src="../assets/icon/icon_detail.svg"
                          alt="detail"
                        />
                      </v-btn>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card1_p4_content">
            <div class="card1_p4_content_left">
              <div class="card3_line2 grey--text">
                <span
                  >วัดจากค่าไขมันในร่างกาย
                  เป็นสัดส่วนสำคัญในการสังเกตุคุณภาพของระบบเซลล์ในร่างกาย</span
                >
              </div>
              <v-card-subtitle> </v-card-subtitle>
              <div class="set_of_card_graph">
                <v-card-text>
                  <!-- ใส่กราฟ -->
                  <div class="card_out">
                    <canvas
                      id="graph1_c3_p4"
                      width="200px"
                      height=""
                      class="set_mx_width set_size_canvas"
                    ></canvas>
                  </div>
                </v-card-text>
              </div>
            </div>
            <v-divider vertical></v-divider>
            <div class="card1_p4_content_right">
              <div class="card3_line2 grey--text">
                <span
                  >ค่าเฉลี่ยคะแนนร่างกายของผู้ใช้เพศชาย และเพศหญิง รายวัน</span
                >
              </div>
              <v-card-subtitle> </v-card-subtitle>
              <div class="set_of_card_graph">
                <v-card-text>
                  <!-- ใส่กราฟ -->
                  <div class="card_out">
                    <canvas
                      id="graph2_c3_p4"
                      width="200px"
                      height=""
                      class="set_mx_width "
                    ></canvas>
                  </div>
                </v-card-text>

                <div class="label_grpah1_c1_p4">
                  <table width="100%">
                    <span class="" style="font-size:14px; font-weight:normal;"
                      >ค่าเฉลี่ยสูงสุดอยู่ที่่ 22.4% มีจำนวน 684 คน</span
                    >
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </div>
    <div style="padding-bottom:40px;"></div>
    <!-- </div> -->
  </v-container>
</template>

<script>
import Chart from "chart.js";
// import dialog_p4 from "@/components/dialog_p4_card1.vue";
// import dialog_p4_2 from "@/components/dialog_p4_card2.vue";
export default {
  components: {
    // dialog_p4,
    // dialog_p4_2,
  },
  mounted: function() {
    // card1 graph
    var ctx1_p4 = document.getElementById("graph1_p4").getContext("2d");
    var bar1_p4 = new Chart(ctx1_p4, {
      type: "horizontalBar",
      options: {
        plugins: {
          legend: {
            labels: {
              // This more specific font property overrides the global property
              font: {
                size: 16,
              },
            },
          },
        },
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
            },
          ],
          xAxes: [
            {
              display: true,
              ticks: {
                suggestedMin: 2, // minimum will be 0, unless there is a lower value.
                stepValue: 2,
                max: 12,
              },
              scaleLabel: {
                display: true,
                labelString: "ชั่วโมง",
              },
            },
          ],
        },
      },
      data: {
        labels: ["ชาย", "หญิง"],
        datasets: [
          {
            label: "ชั่วโมง",
            backgroundColor: ["#9ACDE9", "#F8C5C5"],
            data: [4, 7.3],
            barPercentage: 0.5,
          },
        ],
      },
    });
    console.log(bar1_p4);

    var ctx2_c1_p4 = document.getElementById("graph2_c1_p4").getContext("2d"),
      gradient_2_c2_p4 = ctx2_c1_p4.createLinearGradient(0, 0, 0, 300);
    gradient_2_c2_p4.addColorStop(0, "rgb(107, 179, 253)");
    gradient_2_c2_p4.addColorStop(0.61, "rgb(255, 255, 255)");
    gradient_2_c2_p4.addColorStop(1, "rgb(255, 255, 255)");
    var bar2_c1_p4 = new Chart(ctx2_c1_p4, {
      type: "line",
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
        tooltips: {
          enabled: false,
        },
        scales: {
          yAxes: [
            {
              display: true,
              ticks: {
                suggestedMin: 2, // minimum will be 0, unless there is a lower value.
                stepValue: 2,
                max: 8,
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
              scaleLabel: {
                display: true,
                labelString: "อายุ",
              },
            },
          ],
        },
      },
      data: {
        datasets: [
          {
            label: "",
            backgroundColor: gradient_2_c2_p4,
            borderColor: "#49ade5",
            data: [2.9, 4.0, 4.1, 3.8, 6.2, 2.8],
            borderDash: [4],
            pointRadius: 0,
          },
        ],
        labels: ["10", "20", "30", "40", "50", "60 ปีขึ้นไป"],
      },
    });
    console.log(bar2_c1_p4);

    // ืcard2 grpah
    var ctx1_c2_p4 = document.getElementById("graph1_c2_p4").getContext("2d");
    var bar1_c3_p4 = new Chart(ctx1_c2_p4, {
      type: "bar",
      options: {
        responsive: true,
        layout: {
          padding: {
            left: 10,
            right: 10,
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
                stepValue: 250,
                max: 1000,
              },
              scaleLabel: {
                display: true,
                labelString: "คน",
              },
            },
          ],
          xAxes: [
            {
              display: true,
            },
          ],
        },
      },
      data: {
        labels: [
          ["พักผ่อน", "60 - 100 BPM"],
          ["ปกติ", "101 - 116 BPM"],
          ["เริ่มเต้นแรง", "117 - 135 ฺBPM"],
          ["ออกกำลังกาย", "136 - 154 BPM"],
          ["ออกกำลังกายหนัก", "155 - 174 BPM"],
          ["ค่าออกซิเจนสูงสุด", "สูงกว่า 175 BPM"],
        ],
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
            data: [638, 557, 784, 652, 145, 24],
            barPercentage: 0.5,
          },
          {
            label: "หญิง",
            backgroundColor: "#F8C5C5",
            data: [270, 250, 275, 480, 145, 40],
            barPercentage: 0.5,
          },
        ],
      },
    });
    console.log(bar1_c3_p4);
    // กราฟชาย เฉลี่ย
    var ctx2_c2_p4 = document.getElementById("graph2_c2_p4").getContext("2d"),
      gradient_2c2p4 = ctx2_c2_p4.createLinearGradient(0, 0, 0, 300);
    gradient_2c2p4.addColorStop(0, "rgb(30, 135, 244)");
    gradient_2c2p4.addColorStop(0.57, "rgb(255, 255, 255)");
    gradient_2c2p4.addColorStop(1, "rgb(255, 255, 255)");
    var bar2_c2_p4 = new Chart(ctx2_c2_p4, {
      type: "line",
      options: {
        responsive: true,
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 10,
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
                suggestedMin: 70, // minimum will be 0, unless there is a lower value.
                stepValue: 35,
                max: 175,
              },
              scaleLabel: {
                display: true,
                labelString: "BPM",
              },
            },
          ],
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "อายุ",
              },
            },
          ],
        },
      },
      data: {
        datasets: [
          {
            label: "BPM",
            backgroundColor: gradient_2c2p4,
            pointRadius: 0,
            borderColor: "#1796d8",
            data: [60, 89, 92, 107, 122, 59],
            borderDash: [4],
          },
        ],
        labels: ["10", "20", "30", "40", "50", "60 ปีขึ้นไป"],
      },
    });
    console.log(bar2_c2_p4);

    var ctx3_c2_p4 = document.getElementById("graph3_c2_p4").getContext("2d"),
      gradient_3c2p4 = ctx3_c2_p4.createLinearGradient(0, 0, 0, 300);
    gradient_3c2p4.addColorStop(0, "rgb(242, 140, 140)");
    gradient_3c2p4.addColorStop(0.58, "rgb(255, 255, 255)");
    gradient_3c2p4.addColorStop(1, "rgb(255, 255, 255)");
    var bar3_c2_p4 = new Chart(ctx3_c2_p4, {
      type: "line",
      options: {
        responsive: true,
        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 10,
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
                suggestedMin: 70, // minimum will be 0, unless there is a lower value.
                stepValue: 35,
                max: 175,
              },
              scaleLabel: {
                display: true,
                labelString: "BPM",
              },
            },
          ],
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: "อายุ",
              },
            },
          ],
        },
      },
      data: {
        datasets: [
          {
            label: "BPM",
            backgroundColor: gradient_3c2p4,
            borderColor: "#F28C8C",
            pointRadius: 0,
            data: [60, 89, 92, 107, 122, 59],
            borderDash: [5],
          },
        ],
        labels: ["10", "20", "30", "40", "50", "60 ปีขึ้นไป"],
      },
    });
    console.log(bar3_c2_p4);

    // card3 graph
    var ctx1_c3_p4 = document.getElementById("graph1_c3_p4").getContext("2d");
    var bar1_c2_p4 = new Chart(ctx1_c3_p4, {
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
                stepValue: 10,
                max: 40,
              },
              scaleLabel: {
                display: true,
              },
            },
          ],
        },
      },
      data: {
        labels: ["18-20", "21-30", "31-40", "41-50", "51-60", "60 Up"],
        datasets: [
          {
            barPercentage: 0.9,
            barThickness: 10,
            minBarLength: 2,
            backgroundColor: [
              "#58BFAE",
              "#FF3E80",
              "#FF850A",
              "#DA2121",
              "#B4B4B4",
              "#2289D8",
            ],
            data: [27.9, 19.5, 25.6, 24.2, 32.7, 38.0],
          },
        ],
      },
    });
    console.log(bar1_c2_p4);

    var ctx2_c3_p4 = document.getElementById("graph2_c3_p4").getContext("2d"),
      gradient_2c3p4 = ctx2_c3_p4.createLinearGradient(0, 0, 0, 300);
    gradient_2c3p4.addColorStop(0, "rgb(201, 83, 250)");
    gradient_2c3p4.addColorStop(0.68, "rgb(255, 255, 255)");
    gradient_2c3p4.addColorStop(1, "rgb(255, 255, 255)");
    var bar2_c3_p4 = new Chart(ctx2_c3_p4, {
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
                display: false,
                labelString: "ก้าว",
              },
            },
          ],
          xAxes: [
            {
              display: true,
            },
          ],
        },
      },
      data: {
        datasets: [
          {
            label: "ก้าว",
            pointRadius: 0,
            backgroundColor: gradient_2c3p4,
            borderColor: "#bc35f4",
            borderDash: [5],
            data: [2900, 4000, 4100, 3800, 7200, 2800],
          },
        ],
        labels: ["10", "20", "30", "40", "50", "60 ปีขึ้นไป"],
      },
    });
    console.log(bar2_c3_p4);
  },
  data() {
    return {
      dialog0: false,
      dialog1: false,
      dialog2: false,
    };
  },
};
</script>

<style scoped>
.card1_p4_root {
  padding: 20px;
}
.card1_p4_content {
  display: flex;
  /* justify-content: space-between; */
  justify-content: space-around;
  /* width: 100%; */
}
.set_boder_right {
  border-right: 1px solid grey !important;
}
.set_tb_size {
  /* display: flex; */
  /* justify-content: space-between; */
  white-space: nowrap;
  height: 30px;
  width: 100%;
}
.card2_p4_content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* width: 100%; */
}
.card2_content_top {
  /* padding-bottom: 60px; */
  /* background-color: rgba(0, 0, 90, 0.2); */
}
/* set style */
.card2_content_bot {
  /* background-color: rgba(0, 80, 10, 0.1); */
  font-size: 16px;
}
.card3_line2 {
  font-size: 14px;
}
/* .set_wd_graph_c {
  width: 100%;
  max-height: 300px;
   width="400px"
   height="80px"
} */
.card2_content_bot {
  display: flex;
  padding-top: 20px;
  /* justify-content: space-between; */
  justify-content: space-around;
  /* width: 100%; */
}

.card1_p4_content_left {
  width: 50%;
  /* background-color: rgba(0, 0, 0, 0.2); */
}
.card1_p4_content_right {
  width: 50%;
  padding-left: 20px;
  /* background-color: rgba(0, 0, 0, 0.1); */
}
.card2_p4_content_left {
  width: 50%;
  padding-left: 20px;
  /* background-color: rgba(0, 0, 0, 0.2); */
}
.card2_p4_content_right {
  width: 50%;
  padding-left: 20px;
}

.head_card1_p4_l {
  display: flex;
  justify-content: space-between;
  /* background-color:green; */
  width: 50%;
}
.pd_text_table {
  /* padding-top: 6px; */
  /* padding-top: 6px; */
  /* padding-bottom: 10px; */
}
.card1_p4_content_left {
  width: 50%;
  /* background-color: rgba(0, 0, 0, 0.2); */
}
.card1_p4_content_right {
  width: 50%;
  padding-left: 20px;
  /* background-color: rgba(0, 0, 0, 0.1); */
}
.head_card1_p4_l_title {
  display: flex;
  justify-content: space-between;
  width: 100%;
  /* background-color: rgba(0, 0, 0, 0.2); */
}
.label_grpah1_c1_p4 {
  padding-left: 40px;
}
.title_card1_p4 {
  display: flex;
}
.sex_age_title_card1_p4 {
  display: flex;
  width: 50%;
  justify-content: center;
  /* background-color: rgba(0, 0, 0, 0.4); */
}
.pd_0 {
  padding-top: 0px;
}

.head_dialog_c1_p4 {
  display: flex;
  /* justify-content: space-between; */
}
.head_dialog_c2_p4 {
  display: flex;
}
.label_text_card_norm {
  font-size: 14px;
}
.v-card__title {
  padding: 20px;
}

@media only screen and (min-width: 426px) and (max-width: 768px) {
  .set_boder_right {
    border-right: 0px solid grey !important;
  }
  .label_grpah1_c1_p4 {
    /* padding-left: 40px; */
    /* padding-top: 20px; */
    padding: 20px 0px 20px 40px;
  }
  .pd_text_table {
    padding-top: 20px;
  }
  .head_card1_p4_l {
    width: 60%;
  }
  .set_pd_top_sp {
    padding-top: 10px !important;
  }
  .card2_content_bot,
  .card1_p4_content {
    display: flex;
    padding-top: 20px;
    justify-content: space-around;
    /* width: 100%; */
    flex-direction: column;
  }
  .label_grpah1_c1_p4 {
    padding: 0px 0px 20px 40px;
  }
  .card2_p4_content_left,
  .card1_p4_content_left {
    width: 100%;
  }
  .card2_p4_content_right,
  .card1_p4_content_right {
    width: 100%;
    /* max-width: 640px; */
    /* overflow-x: scroll; */
  }
  .set_wd_graph_c {
    width: 100%;
  }
}
@media only screen and (min-width: 1441px) and (max-width: 1920px) {
  .set_norm_size_graph {
    /* max-height: 300px; */
    max-width: 700px;
    /* max-width: 800px; */
  }
  .head_card1_p4_l_title {
    display: flex;
    justify-content: unset;
  }
  .sex_age_title_card1_p {
    justify-content: space-around;
  }
  .title_card1_p4 {
    width: 30%;
  }
  .sex_age_title_card1_p4 {
    width: 30%;
    justify-content: space-around;
  }
  .set_wd_graph_c {
    padding-right: 20px;
    max-width: 1563px;
    max-height: 312px;
  }
  .set_mx_width {
    max-width: 700px;
  }
  .pd_text_table {
    padding-top: 0px;
    padding-bottom: 3px;
  }
}
@media only screen and (min-width: 320px) and (max-width: 425px) {
  .card1_head_lr {
    flex-direction: column;
  }
  .set_of_card_graph,
  .card2_content_top {
    width: 100%;
    overflow-x: scroll;
    height: auto;
  }
  .set_size_canvas {
    width: 100%;
    overflow-x: scroll;
  }
  .set_wd_graph_hr {
    width: 100%;
    max-width: 600px;
  }
  .head_card1_p4_l_title {
    flex-direction: column;
  }
  .title_card1_p4 {
    width: 100%;
  }
  .sex_age_title_card1_p4 {
    display: flex;
    width: 100%;
  }
  .head_card1_p4_l {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .set_boder_right {
    border-right: 0px solid grey !important;
  }
  .set_of_c1_top {
    width: 100%;
    overflow-x: scroll;
  }
  .sm_pd_left {
    padding-left: 50px;
    padding-right: 0px;
  }
  .set_norm_size_graph {
    width: 100%;
    max-width: 400px;
  }
  .sm_pd_top {
    padding-top: 20px;
  }
  .card2_content_top {
    width: 100%;
    max-width: 600px;
  }
  .set_wd_graph_c {
    max-width: 300px !important;
    overflow-x: scroll !important;
  }
  .card2_content_bot,
  .card1_p4_content {
    flex-direction: column;
  }
  .card2_p4_content_left,
  .card1_p4_content_left {
    width: 100%;
    padding-left: 0px;
    /* overflow-x: scroll; */
  }
  .card2_p4_content_right,
  .card1_p4_content_right {
    width: 100%;
    padding-left: 0px;
    /* max-width: 640px; */
    /* overflow-x: scroll; */
  }
  .set_mx_width {
    display: block;
    width: 300px !important;

    /* height: 150px; */
  }
  .card3_line2 {
    padding-top: 10px;
  }
  /* overflow-x: scroll; */
}

@media only screen and (min-width: 1921px) {
  .set_norm_size_graph,
  .set_mx_width {
    max-width: 800px;
  }
  .set_wd_graph_c {
    padding-right: 30px;
    max-height: 460px;
  }
  .pd_text_table {
    padding-top: 0px;
    padding-bottom: 0px;
  }
}
</style>
