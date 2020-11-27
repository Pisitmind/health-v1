<template>
  <div class="status">
    <div class="card1_p4">
      <v-card elevation="2" outlined height="">
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
                      <v-icon large color="#AD8DBB">mdi-weather-night</v-icon>
                    </div>
                    <div class="card3-bot-text ">
                      <span><strong>การนอนหลับ</strong></span>
                    </div>
                  </div>
                  <!-- btn sex & age -->
                  <div class="sex_age_title_card1_p4">
                    <div class="sex_title">
                      <v-btn class="white--text " small color="#AD8DBB"
                        ><span>เพศ</span></v-btn
                      >
                    </div>
                    <div class="age_title">
                      <v-btn
                        class="#AD8DBB--text "
                        small
                        outlined
                        color="#AD8DBB"
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
                    <v-dialog v-model="dialog0" width="">
                      <template v-slot:activator="{ on, attrs1 }">
                        <v-btn small icon fab v-bind="attrs1" v-on="on">
                          <v-icon class="exit-icon">mdi-exit-to-app</v-icon>
                        </v-btn>
                      </template>
                      <v-card>
                        <v-card-title>
                          <div class="head_dialog_c1_p4">
                            <div>
                              <v-btn
                                color="green darken-1"
                                icon
                                @click="dialog0 = false"
                              >
                                <v-icon
                                  >mdi-arrow-left-drop-circle-outline</v-icon
                                >
                              </v-btn>
                            </div>
                            <div>
                              <span class="headline"
                                >รายละเอียดค่าการนอนหลับ</span
                              >
                            </div>
                          </div>
                        </v-card-title>
                        <v-card-text>
                          กราฟสรุปรายละเอียดการนอนหลับต่อเดือน
                          เพื่อสังเกตุพฤติกรรมที่อาจส่งผลถึง
                          ปัญหาสุขภาพในระยะสั้น กลาง และยาวได้
                        </v-card-text>
                        <v-card-content>
                          <div>
                            <dialog_p4 />
                          </div>
                        </v-card-content>
                      </v-card>
                    </v-dialog>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Content  -->
          <div class="card1_p4_content">
            <div class="card1_p4_content_left">
              <v-card-subtitle class="pd_0">
                <div class="card3_line2 grey--text">
                  <span>ค่าเฉลี่ยการนอนหลับของผู้ใช้เพศชาย และเพศหญิง</span>
                </div>
              </v-card-subtitle>
              <v-card-text>
                <!-- ใส่กราฟ -->
                <canvas id="graph1_p4" width="200px" height=""></canvas>
              </v-card-text>

              <div class="label_grpah1_c1_p4">
                <table width="100%">
                  <tr>
                    <td style="text-align:center;">
                      <div class="label_text_card1">
                        <div>
                          <v-icon small color="blue"> mdi-circle</v-icon>
                          <span class="black--text"><strong>ชาย</strong></span>
                        </div>
                        <div class="pd_10">
                          <v-icon small color="pink"> mdi-circle</v-icon>
                          <span class="black--text"><strong>หญิง</strong></span>
                        </div>
                      </div>
                    </td>
                    <td width="50%">
                      <span>จำนวนผู้ใช้ทั้งหมด 2,800 คน</span>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <v-divider vertical></v-divider>
            <div class="card1_p4_content_right">
              <v-card-subtitle class="pd_0">
                <div class="card3_line2 grey--text">
                  <span>ค่าเฉลี่ยก้าวจากผู้ใช้ทั้งหมดตามช่วงอายุ</span>
                </div>
              </v-card-subtitle>
              <v-card-text>
                <!-- ใส่กราฟ -->
                <canvas id="graph2_c1_p4" width="200px" height=""></canvas>
              </v-card-text>

              <div class="label_grpah1_c1_p4">
                <table width="100%">
                  <span class
                    >ค่าเฉลี่ยสูงสุดอยู่ที่่ 49 ปี มีจำนวนการนอนหลับประมาณ 5:40
                    ชั่วโมงต่อวัน</span
                  >
                </table>
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </div>
    <div class="card1_p4">
      <v-card elevation="2" outlined height="">
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
                      <v-icon large color="#F72040">mdi-heart-pulse</v-icon>
                    </div>
                    <div class="card3-bot-text ">
                      <span><strong>การเต้นของหัวใจ</strong></span>
                    </div>
                  </div>
                  <!-- btn sex & age -->
                  <div class="sex_age_title_card1_p4">
                    <div class="sex_title">
                      <v-btn class="white--text " small color="#AD8DBB"
                        ><span>เพศ</span></v-btn
                      >
                    </div>
                    <div class="age_title">
                      <v-btn
                        class="#AD8DBB--text "
                        small
                        outlined
                        color="#AD8DBB"
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
                    <v-dialog v-model="dialog1" width="">
                      <template v-slot:activator="{ on, attrs2 }">
                        <v-btn small icon fab v-bind="attrs2" v-on="on">
                          <v-icon class="exit-icon">mdi-exit-to-app</v-icon>
                        </v-btn>
                      </template>
                      <v-card>
                        <v-card-title>
                          <div class="head_dialog_c2_p4">
                            <div>
                              <v-btn
                                color="green darken-1"
                                icon
                                @click="dialog1 = false"
                              >
                                <v-icon
                                  >mdi-arrow-left-drop-circle-outline</v-icon
                                >
                              </v-btn>
                            </div>
                            <div class="pd_text">
                              <span class="headline"
                                >รายละเอียดค่าการเต้นของหัวใจ</span
                              >
                            </div>
                          </div>
                        </v-card-title>
                        <v-card-text>
                          กราฟสรุปรายละเอียดการเต้นของหัวใจ
                          เพื่อสังเกตุพฤติกรรมที่อาจส่งผลถึง
                          ปัญหาสุขภาพในระยะสั้น กลาง และยาวได้
                        </v-card-text>
                        <v-card-content>
                          <div>
                            <dialog_p4_2 />
                          </div>
                        </v-card-content>
                      </v-card>
                    </v-dialog>
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
              <canvas id="graph1_c2_p4" width="400px" height="80px"></canvas>
              <div class="label_grpah1_c1_p4">
                <table width="100%">
                  <tr>
                    <td style="text-align:left;" width="15%">
                      <div class="label_text_card1">
                        <div>
                          <v-icon small color="blue"> mdi-circle</v-icon>
                          <span class="black--text"><strong>ชาย</strong></span>
                        </div>
                      </div>
                    </td>
                    <td style="text-align:left;" width="10%">
                      <div class="label_text_card1">
                        <div>
                          <v-icon small color="pink"> mdi-circle</v-icon>
                          <span class="black--text"><strong>หญิง</strong></span>
                        </div>
                      </div>
                    </td>
                    <v-spacer></v-spacer>
                  </tr>
                </table>
              </div>
            </div>
            <div class="card2_content_bot">
              <div class="card2_p4_content_left">
                <v-card-title>
                  <v-icon>mdi-human-male</v-icon>
                  <span style="font-size:14px; font-weight:bold;"
                    >ค่าเฉลี่ยในเพศชาย
                  </span>
                </v-card-title>
                <v-card-subtitle>
                  <div class="card3_line2 grey--text" style="font-size:12px;">
                    <span
                      >ค่าเฉลี่ยการเต้นของหัวใจจากผู้ใช้เพศชายทั้งหมดตามช่วงอายุ</span
                    >
                  </div>
                </v-card-subtitle>
                <v-card-text>
                  <!-- ใส่กราฟ -->
                  <canvas id="graph2_c2_p4" width="200px" height=""></canvas>
                </v-card-text>
                <div class="label_grpah1_c1_p4">
                  <table width="100%">
                    <span class="" style="font-size:14px; font-weight:bold;"
                      >ค่าเฉลี่ยสูงสุดอยู่ที่่ 49 ปี มีการเต้นของหัวใจประมาณ 135
                      BPM ต่อวัน</span
                    >
                  </table>
                </div>
              </div>
              <v-divider vertical></v-divider>
              <div class="card2_p4_content_right">
                <v-card-title>
                  <v-icon>mdi-human-female</v-icon>
                  <span style="font-size:14px; font-weight:bold;">
                    ค่าเฉลี่ยในเพศหญิง
                  </span>
                </v-card-title>
                <v-card-subtitle>
                  <div class="card3_line2 grey--text" style="font-size:12px;">
                    <span
                      >ค่าเฉลี่ยการเต้นของหัวใจจากผู้ใช้เพศหญิงทั้งหมดตามช่วงอายุ</span
                    >
                  </div>
                </v-card-subtitle>
                <v-card-text>
                  <!-- ใส่กราฟ -->
                  <canvas id="graph3_c2_p4" width="200px" height=""></canvas>
                </v-card-text>
                <div class="label_grpah1_c1_p4">
                  <table width="100%">
                    <span class="" style="font-size:14px; font-weight:bold;"
                      >ค่าเฉลี่ยสูงสุดอยู่ที่่ 49 ปี มีการเต้นของหัวใจประมาณ 135
                      BPM ต่อวัน</span
                    >
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </div>
    <div class="card1_p4">
      <v-card elevation="2" outlined height="">
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
                      <v-icon large color="#DDA0DD"
                        >mdi-human-female-dance</v-icon
                      >
                    </div>
                    <div class="card3-bot-text ">
                      <span><strong>คะแนนร่างกาย</strong></span>
                    </div>
                  </div>
                  <!-- btn sex & age -->
                  <div class="sex_age_title_card1_p4">
                    <div class="sex_title">
                      <v-btn class="white--text " small color="#AD8DBB"
                        ><span>เพศ</span></v-btn
                      >
                    </div>
                    <div class="age_title">
                      <v-btn
                        class="#AD8DBB--text "
                        small
                        outlined
                        color="#AD8DBB"
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
                    <v-dialog v-model="dialog2" width="">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn small icon fab v-bind="attrs" v-on="on">
                          <v-icon class="exit-icon">mdi-exit-to-app</v-icon>
                        </v-btn>
                      </template>
                      <v-card>
                        <v-card-title>
                          <div class="head_dialog_c2_p4">
                            <div>
                              <v-btn
                                color="green darken-1"
                                icon
                                @click="dialog2 = false"
                              >
                                <v-icon
                                  >mdi-arrow-left-drop-circle-outline</v-icon
                                >
                              </v-btn>
                            </div>
                            <div class="pd_text">
                              <span class="headline"
                                >รายละเอียดค่าคะแนนร่างกาย</span
                              >
                            </div>
                          </div>
                        </v-card-title>
                        <v-card-text>
                          กราฟสรุปรายละเอียดค่าคะแนนร่างกายต่อเดือน
                          เพื่อสังเกตุพฤติกรรมที่อาจส่งผลถึง
                          ปัญหาสุขภาพในระยะสั้น กลาง และยาวได้
                        </v-card-text>
                        <v-card-content>
                          <div>
                            <dialog_p4_3 />
                          </div>
                        </v-card-content>
                      </v-card>
                    </v-dialog>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card1_p4_content">
            <div class="card1_p4_content_left">
              <v-card-subtitle>
                <div class="card3_line2 grey--text" style="font-size:12px;">
                  <span
                    >วัดจากค่าไขมันในร่างกาย
                    เป็นสัดส่วนสำคัญในการสังเกตุคุณภาพของระบบเซลล์ในร่างกาย</span
                  >
                </div>
              </v-card-subtitle>
              <v-card-text>
                <!-- ใส่กราฟ -->
                <canvas id="graph1_c3_p4" width="200px" height=""></canvas>
              </v-card-text>
            </div>
            <v-divider vertical></v-divider>
            <div class="card1_p4_content_right">
              <v-card-subtitle>
                <div class="card3_line2 grey--text" style="font-size:12px;">
                  <span
                    >ค่าเฉลี่ยคะแนนร่างกายของผู้ใช้เพศชาย และเพศหญิง
                    รายวัน</span
                  >
                </div>
              </v-card-subtitle>
              <v-card-text>
                <!-- ใส่กราฟ -->
                <canvas id="graph2_c3_p4" width="200px" height=""></canvas>
              </v-card-text>

              <div class="label_grpah1_c1_p4">
                <table width="100%">
                  <span class="" style="font-size:14px; font-weight:bold;"
                    >ค่าเฉลี่ยสูงสุดอยู่ที่่ 22.4% มีจำนวน 684 คน</span
                  >
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
import dialog_p4 from "@/components/dialog_p4_card1.vue";
import dialog_p4_2 from "@/components/dialog_p4_card2.vue";
export default {
  components: {
    dialog_p4,
    dialog_p4_2,
  },
  mounted: function() {
    // card1 graph
    var ctx1_p4 = document.getElementById("graph1_p4").getContext("2d");
    var bar1_p4 = new Chart(ctx1_p4, {
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
          },
        ],
      },
    });
    console.log(bar1_p4);

    var ctx2_c1_p4 = document.getElementById("graph2_c1_p4").getContext("2d");
    var bar2_c1_p4 = new Chart(ctx2_c1_p4, {
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
            backgroundColor: "#BADCEF",
            data: [2.9, 4.0, 4.1, 3.8, 6.2, 2.8],
            borderDash: [5],
            fill: "Disabled",
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
          },
          {
            label: "หญิง",
            backgroundColor: "#F8C5C5",
            data: [270, 250, 275, 480, 145, 40],
          },
        ],
      },
    });
    console.log(bar1_c3_p4);

    var ctx2_c2_p4 = document.getElementById("graph2_c2_p4").getContext("2d");
    var bar2_c2_p4 = new Chart(ctx2_c2_p4, {
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
            backgroundColor: "#BADCEF",
            data: [60, 89, 92, 107, 122, 59],
            borderDash: [5],
            fill: "Disabled",
          },
        ],
        labels: ["10", "20", "30", "40", "50", "60 ปีขึ้นไป"],
      },
    });
    console.log(bar2_c2_p4);

    var ctx3_c2_p4 = document.getElementById("graph3_c2_p4").getContext("2d");
    var bar3_c2_p4 = new Chart(ctx3_c2_p4, {
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
            backgroundColor: "#F28C8C",
            data: [60, 89, 92, 107, 122, 59],
            borderDash: [5],
            fill: "Disabled",
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
            barPercentage: 0.5,
            barThickness: 6,
            maxBarThickness: 8,
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

    var ctx2_c3_p4 = document.getElementById("graph2_c3_p4").getContext("2d");
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
            backgroundColor: "#B192BE",
            data: [2900, 4000, 4100, 3800, 7200, 2800],
            borderDash: [5],
            fill: "Disabled",
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
.card1_p4 {
  padding:10px 20px 10px 20px;
}
.card1_p4_root {
  padding: 20px;
}
.card1_p4_content {
  display: flex;
  /* justify-content: space-between; */
  justify-content: space-around;
  /* width: 100%; */
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
.card2_content_bot {
  /* background-color: rgba(0, 80, 10, 0.1); */
  font-size: 16px;
}

.card2_content_bot {
  display: flex;
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
</style>
