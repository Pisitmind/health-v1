<template>
  <v-container grid-list-lg-xl class="bodyinfo">
    <!-- <div class="bodyinfo"> -->
    <div class="card1_p5">
      <v-card class="bdr_12">
        <div class="card1_p5_root">
          <div class="card1_p5_headNsub">
            <!-- head lr -->
            <div class="card1_head_lr">
              <!-- head left div -->
              <div class="head_card1_p5_l">
                <!-- head left -->
                <div class="head_card1_p5_l_title">
                  <!-- การก้าว+icon -->
                  <div class="title_card1_p5 set_center">
                    <div style="padding-right:10px;">
                      <img
                        height="40px"
                        class="filter-white"
                        src="../assets/icon/icon_weight_01.svg"
                        alt="weight"
                      />
                    </div>
                    <div class="card5-bot-text" style="text-align: center;">
                      <span><strong>ค่าน้ำหนัก</strong></span>
                    </div>
                  </div>
                  <!-- btn sex & age -->
                  <div class="sex_age_title_card1_p5">
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
              <div class="head_card1_p5_r">
                <!-- head right -->
                <div class="head_card1_p5_r_title">
                  <div class="exit-icon-card3">
                    <!-- คอนเท้นย่อย ยัง -->
                    <v-dialog v-model="dialog0" width="">
                      <template v-slot:activator="{ on, attrs1 }">
                        <v-btn
                          small
                          icon
                          fab
                          v-bind="attrs1"
                          v-on="on"
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
                      <v-card>
                        <v-card-title>
                          <div class="head_dialog_c1_p5">
                            <div>
                              <v-btn
                                color="green darken-1"
                                icon
                                @click="dialog0 = false"
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
                              <span class="headline">รายละเอียดค่าน้ำหนัก</span>
                            </div>
                          </div>
                        </v-card-title>
                        <v-card-text>
                          กราฟสรุปรายละเอียดน้ำหนักต่อเดือน
                          เพื่อสังเกตุพฤติกรรมที่อาจส่งผลถึง
                          ปัญหาสุขภาพในระยะสั้น กลาง และยาวได้
                        </v-card-text>
                        <v-card-content>
                          <div>
                            <dialog_p5_1 />
                          </div>
                        </v-card-content>
                      </v-card>
                    </v-dialog>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="card3_line2 grey--text">
            <span>ค่าเฉลี่ยน้ำหนักของผู้ใช้เพศชาย และเพศหญิง</span>
          </div> -->
          <!-- Content  -->
          <v-container-text class="card1_p5_content">
            <v-layout row wrap justify="space-between">
              <v-flex xs12 md6 class="set_of_c1_top ">
                <div class="set_graph_mb">
                  <v-card
                    elevation="0"
                    class="bdr_0 set_border_left"
                    style="padding-righ:5px;"
                  >
                    <div class="card3_line2_fx grey--text">
                      <span>ค่าเฉลี่ยน้ำหนักของผู้ใช้เพศชาย และเพศหญิง</span>
                    </div>
                    <!-- <div style="height:230px"> -->
                    <v-card-content>
                      <!-- ใส่กราฟ -->
                      <div
                        class="set_content_space set_md_spac"
                        style="height:"
                      >
                        <canvas
                          id="graph1_p5"
                          width=""
                          height=""
                          class="set_norm_size_graph"
                        ></canvas>
                      </div>
                    </v-card-content>
                  </v-card>
                  <!-- </div> -->
                  <div class="label_grpah1_c1_p5 set_h30_na">
                    <table width="100%" class="set_tb_size">
                      <tr>
                        <td style="text-align:center;">
                          <div class="label_text_card1">
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
                          class="set_pd_r0"
                          width="50%"
                          align="right"
                          style="font-size:14px; padding-right:40px;"
                        >
                          <span>จำนวนผู้ใช้ทั้งหมด 2,800 คน</span>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </v-flex>
              <v-flex xs12 md6 class="set_of_c1_top">
                <div class="set_graph_mb">
                  <v-card elevation="0" style="padding-left:10px;">
                    <div class="card3_line2 grey--text">
                      <span>ค่าเฉลี่ยน้ำหนักจากผู้ใช้ทั้งหมดตามช่วงอายุ</span>
                    </div>
                    <v-card-content>
                      <div class="set_content_space" style="height:">
                        <!-- ใส่กราฟ -->
                        <canvas
                          id="graph2_c1_p5"
                          width=""
                          height=""
                          class="set_wd_graph_c"
                        ></canvas>
                      </div>
                    </v-card-content>
                  </v-card>
                  <div class="label_grpah1_c1_p5 set_h30_na">
                    <table width="100%" class="set_tb_size">
                      <tr>
                        <td
                          style="padding-left:40px;"
                          class="text_sub text_sub_binfo"
                        >
                          <span
                            >ค่าเฉลี่ยสูงสุดอยู่ที่่ 49 ปี มีน้ำหนักประมาณ 78
                            กิโลกรัม</span
                          >
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </v-flex>
            </v-layout>
          </v-container-text>
        </div>
      </v-card>
    </div>
    <div class="card1_p5">
      <v-card class="bdr_12">
        <div class="card1_p5_root">
          <div class="card1_p5_headNsub">
            <!-- head lr -->
            <div class="card1_head_lr">
              <!-- head left div -->
              <div class="head_card1_p5_l">
                <!-- head left -->
                <div class="head_card3_p5_l_title">
                  <!-- การก้าว+icon -->
                  <div class="title_card3_p5">
                    <div class="card5-bot-text set_center">
                      <img
                        height="40px"
                        class="filter-white"
                        src="../assets/icon/bmi.svg"
                        alt="BMI"
                        style="padding-right: 10px;"
                      />
                      <span>BMI</span>
                    </div>
                  </div>
                  <!-- btn sex & age -->
                  <!-- <div class="btn_date_head_card3">
                    <div class="">
                      <v-btn class="white--text " small color="#AD8DBB"
                        ><span>วันนี้</span></v-btn
                      >
                    </div>
                    <div class="">
                      <v-btn
                        class="#AD8DBB--text "
                        small
                        outlined
                        color="#AD8DBB"
                        ><span>สัปดาห์</span></v-btn
                      >
                    </div>
                    <div class="">
                      <v-btn
                        class="#AD8DBB--text "
                        small
                        outlined
                        color="#AD8DBB"
                        ><span>เดือน</span></v-btn
                      >
                    </div>
                    <div class="">
                      <v-btn
                        class="#AD8DBB--text "
                        small
                        outlined
                        color="#AD8DBB"
                        ><span>ปี</span></v-btn
                      >
                    </div>
                  </div> -->
                </div>
              </div>
              <!-- head right div -->
              <div class="head_card1_p5_r">
                <!-- head right -->
                <div class="head_card1_p5_r_title">
                  <div class="exit-icon-card3">
                    <template>
                      <v-btn small icon fab @click="$router.push('bmi_dtail')">
                        <img
                          height="30px"
                          class="filter-white"
                          src="../assets/icon/icon_detail.svg"
                          alt="detail"
                        />
                      </v-btn>
                    </template>
                    <!-- <v-card>
                        <v-card-title>
                          <div class="head_dialog_c2_p4">
                            <div>
                              <v-btn
                                color="green darken-1"
                                icon
                                @click="dialog2 = false"
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
                                ><strong>รายละเอียดค่า BMI</strong></span
                              >
                            </div>
                          </div>
                        </v-card-title>
                        <v-card-text>
                          <span
                            >กราฟสรุปรายละเอียดค่า BMI
                            เพื่อสังเกตุความแข็งแรงและสมบูรณ์ของร่างกายเพื่อระวังปัญหาสุขภาพในระยะสั้น
                            กลาง และยาวได้</span
                          >
                        </v-card-text>
                        <v-card-content>
                          <div>
                            <dialog_p5 />
                          </div>
                        </v-card-content>
                      </v-card> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card3_line2 grey--text">
            <span
              >น้ำหนัก(กก.)/ ส่วนสูง (m2) คุณไม่สามารถตัดสินได้ว่าคุณเป็น
              "คนอ้วน" เพียงแค่ตามค่า BMI
              ผู้คนสามารถมีไขมันมากกว่ากล้ามเนื้อด้วยค่าดัชนีมวลกายปกติและยังจัดว่าเป็นโรคอ้วน</span
            >
          </div>
          <div class="card1_p5_content">
            <div class="card3_p5_content_left">
              <!-- <div class="card3_line2 grey--text">
                  <span>graph here</span>
                </div> -->
              <div class="set_of_card_graph">
                <v-card-content>
                  <div class="card_out">
                    <canvas
                      id="graph1_c2_p5"
                      width="200px"
                      height=""
                      class="set_wd_graph_c set_size_canvas"
                    ></canvas>
                  </div>
                  <div class="label_grpah1_c1_p5">
                    <table width="100%" class="set_tb_size">
                      <tr>
                        <td style="text-align:center;">
                          <div class="label_text_card1">
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
                </v-card-content>
              </div>
            </div>
            <!-- <v-divider vertical></v-divider> -->
            <div class="card3_p5_content_right pd_r_30">
              <v-card
                class="card2-subcard-3 ct_set bdr_12_only"
                width=""
                height=""
              >
                <v-card-subtitle class="font_style_title_card">
                  <span class="pl-5">
                    ตัวบ่งชี้
                  </span>
                </v-card-subtitle>
                <v-card-text class="pa-1">
                  <div class="card-info-right pa-1">
                    <table class="card2-table set_tb_size">
                      <tr>
                        <th class="set_left_xl" height="30px">กิจกรรม</th>
                        <th>ชาย</th>
                        <th>หญิง</th>
                        <th>เฉลี่ยรวม</th>
                      </tr>
                      <tr
                        v-for="item in data_card2_p5"
                        :key="item.id"
                        height="30px"
                        class="filter-white two-data-card2"
                      >
                        <td class="">
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
      </v-card>
    </div>
    <div style="padding-bottom:40px;"></div>
    <!-- </div> -->
  </v-container>
</template>

<script>
import Chart from "chart.js";
// import dialog_p5 from "@/components/dialog_p5_card1.vue";
export default {
  components: {
    // dialog_p5,
  },
  mounted: function() {
    // card1 graph
    var ctx1_p5 = document.getElementById("graph1_p5").getContext("2d");
    var bar1_p5 = new Chart(ctx1_p5, {
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
            label: "ก้าว",
            backgroundColor: ["#9ACDE9", "#F8C5C5"],
            data: [4, 7.3],
            barPercentage: 0.5,
            // barPercentage: 0.9,
          },
        ],
      },
    });
    console.log(bar1_p5);

    var ctx2_c1_p5 = document.getElementById("graph2_c1_p5").getContext("2d"),
      gradient2_c1p5 = ctx2_c1_p5.createLinearGradient(0, 0, 0, 300);
    gradient2_c1p5.addColorStop(0, "rgb(26, 184, 169)");
    gradient2_c1p5.addColorStop(0.57, "rgb(255, 255, 255)");
    gradient2_c1p5.addColorStop(1, "rgb(255, 255, 255)");
    var bar2_c1_p5 = new Chart(ctx2_c1_p5, {
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
            label: "ก้าว",
            backgroundColor: gradient2_c1p5,
            data: [2.9, 4.0, 4.1, 3.8, 7.2, 2.8],
            borderDash: [5],
            borderColor: "#1ab8a9",
            pointRadius: 0,
          },
        ],
        labels: ["10", "20", "30", "40", "50", "60 ปีขึ้นไป"],
      },
    });
    console.log(bar2_c1_p5);

    var ctx1_c2_p5 = document.getElementById("graph1_c2_p5").getContext("2d");
    var bar1_c3_p5 = new Chart(ctx1_c2_p5, {
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
          ["ต่ำ", "0 - 18.5"],
          ["ปานกลาง", "18.5 - 25.0"],
          ["ค่อนข้างสูง", "25.1 - 28.0"],
          ["สูง", "28.1 - 32.0"],
          ["สูงมาก", "32.0 ขึ้นไป"],
        ],
        backgroundColor: ["#ff6384", "#36a2eb"],
        Color: ["#58BFAE", "#FF3E80", "#FF850A", "#DA2121", "#B4B4B4"],
        datasets: [
          {
            label: "ชาย",
            backgroundColor: "#9ACDE9",
            data: [638, 857, 980, 875, 750],
          },
          {
            label: "หญิง",
            backgroundColor: "#F8C5C5",
            data: [270, 250, 275, 480, 750],
          },
        ],
      },
    });
    console.log(bar1_c3_p5);
  },
  data() {
    return {
      dialog0: false,
      dialog1: false,
      dialog2: false,
      data_card2_p5: [
        {
          name: "ต่ำ",
          color: "#B699C2",
          dataMan: "638",
          dataWman: "270",
          avg: "22.7%",
        },
        {
          name: "ปกติ",
          color: "#2289D8",
          dataMan: "557",
          dataWman: "250",
          avg: "19.9%",
        },
        {
          name: "ค่อนข้างสูง",
          color: "#B4E4B4",
          dataMan: "784",
          dataWman: "275",
          avg: "28%",
        },
        {
          name: "สูง",
          color: "#FF850A",
          dataMan: "145",
          dataWman: "145",
          avg: "5.1%",
        },
        {
          name: "สูงมาก",
          color: "#DA2121",
          dataMan: "652",
          dataWman: "480",
          avg: "23.2%",
        },
      ],
    };
  },
};
</script>

<style scoped>
.head_card1_p5_l {
  width: 50%;
}
.label_grpah1_c1_p5 {
  padding-left: 16px;
  /* background-color: rgba(0, 0, 0, 0.1); */
}

/* .head_card1_p5_r{
  padding:20px;
} */
.head_card1_p5_l_title {
  display: flex;
  /* padding:20px; */
  justify-content: space-between;
  width: 100%;
  /* background-color:rgba(0, 0,100,.3); */
}
.title_card1_p5 {
  display: flex;
}
.card3_p5_content_left {
  width: 60%;
  /* background-color: rgba(0, 0, 0, 0.2); */
}
.card3_p5_content_right {
  width: 40%;
  padding: 20px 0px 0px 20px;
  /* background-color: rgba(0, 0, 0, 0.1); */
}
.card1_p5_content_right {
  width: 50%;
  padding-left: 20px;
  /* background-color: rgba(0, 0, 0, 0.1); */
}

.head_card3_p5_l_title {
  display: flex;
  width: 100%;
}
.sex_age_title_card1_p5 {
  display: flex;
  width: 50%;
  justify-content: center;
  /* background-color: rgba(0, 0, 0, 0.4); */
}
.card1_p5_content_left {
  width: 50%;
}
.head_dialog_c2_p4 {
  display: flex;
}
/* .head_card1_p5_l {
  display: flex;
  justify-content: space-between;
  width: 50%;
} */
.two-data-card2 {
  font-size: 14px !important;
}
.set_h30_na {
  height: 30px;
}
.label_text_card3 {
  display: flex;
  justify-content: space-around;
  background-color: rgba(red, green, blue, 0.3);
}
.text_sub_binfo {
  padding-top: 3px;
}
.set_md_spac {
  padding-bottom: 25px;
}
.set_border_left {
  border-right: 1px solid grey !important;
}

@media only screen and (min-width: 320px) and (max-width: 425px) {
  .set_border_left {
    border-right: 0px solid grey !important;
  }
  .card1_head_lr {
    flex-direction: row;
  }
  .head_card3_p5_l_title {
    width: 100%;
  }
  .title_card1_p5 {
    justify-content: center;
  }
  .set_of_card_graph {
    width: 100%;
    overflow-x: scroll;
    height: auto;
    min-width: 450px;
    max-width: 600px;
  }
  .set_size_canvas {
    width: 100%;
    overflow-x: scroll;
  }
  .set_mx_width {
    display: block;
    width: 300px !important;

    /* height: 150px; */
  }
  .set_pd_r0 {
    padding-right: 0px !important;
  }
  .set_tb_size {
    width: 100%;
  }
  .head_card1_p5_l {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .card1_p5_content {
    flex-direction: column;
  }
  .card3_p5_content_left {
    width: 100%;
    overflow-x: scroll;
  }
  .card3_p5_content_right {
    width: 100%;
  }
  .title_card1_p5 {
    width: 100%;
  }
  .head_card1_p5_l_title {
    width: 100%;
    flex-direction: column;
  }
  .sex_age_title_card1_p5 {
    display: flex;
    width: 100%;
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
  .set_graph_mb {
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
    overflow-x: scroll;
    max-width: 600px;
    min-width: 400px;
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
    max-width: 600px !important;
    width: 100% !important;
    /* height: 200px; */
    overflow-x: scroll !important;
  }
  .card2_content_bot,
  .card1_p4_content {
    flex-direction: column;
  }
  .card2_p4_content_left,
  .card1_p4_content_left {
    width: 100%;
  }
  .card2_p4_content_right,
  .card1_p4_content_right {
    width: 100%;
    /* max-width: 640px; */
    overflow-x: scroll;
  }
  .set_mx_width {
    /* max-width: 600px; */
  }
  .card3_line2 {
    padding-top: 10px;
  }
}
@media only screen and (min-width: 426px) and (max-width: 768px) {
  .set_border_left {
    border-right: 0px solid grey !important;
  }
  .set_left_xl {
    text-align: left;
    padding-left: 20px;
  }
  /* .card1_head_lr {
    width: 100%;
  } */
  .head_card1_p5_l {
    width: 60%;
  }
  .card3_line2 {
    padding-top: 20px;
  }
  /* .set_gp_size_xl {
    max-width: 600px;
    width: 100% !important;
    height: 200px;
    overflow-x: scroll !important;
  } */
  .set_gp_size_xl {
    width: 100%;
    overflow-x: scroll;
  }
  .set_tb_size {
    width: 100%;
  }

  .card1_p5_content {
    flex-direction: column;
  }
  .card3_p5_content_left {
    width: 100%;
  }
  .card3_p5_content_right {
    width: 100%;
  }
  .label_grpah1_c1_p5 {
    padding-bottom: 20px;
  }
}

@media only screen and (min-width: 1441px) and (max-width: 1920px) {
  .card1_p5_root {
    height: fit-content;
  }
  .card1_p5 {
    height: fit-content;
  }
  .set_tb_size {
    height: 40px;
  }
  .card2-subcard-3 {
    padding-bottom: 20px;
  }
  .set_left_xl {
    text-align: left;
    padding-left: 20px;
  }
  .set_content_space {
    padding: 0px 20px;
  }
  .text_sub_binfo {
    padding-top: 7px;
  }
  .title_card1_p5 {
    width: 35%;
    white-space: nowrap;
  }
  .head_card1_p5_l_title {
    width: 100%;
  }
  .sex_age_title_card1_p5 {
    width: 50%;
    justify-content: space-around;
  }
  .head_card1_p5_l {
    width: 30%;
  }
}
@media only screen and (min-width: 1921px) {
  .text_sub_binfo {
    padding-top: 0px;
  }
  .set_gp_size_xl {
    max-width: 800px;
  }
  .card2-subcard-3 {
    padding-left: 20px;
    padding-right: 20px;
  }
  .card3_p5_content_right {
    width: 35%;
  }
  .card2-table {
    width: 100%;
  }
  .set_left_xl {
    text-align: left;
    padding-left: 20px;
  }
}
</style>
