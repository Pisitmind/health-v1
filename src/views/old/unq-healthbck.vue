<template>
  <v-container grid-list-lg-xl class="unqHealth">
    <!-- <div class="unqHealth"> -->
    <div class="card1_p6">
      <v-card class="bdr_12">
        <div class="card1_p6_root">
          <div class="card1_p6_headNsub">
            <!-- head lr -->
            <div class="card1_head_lr">
              <!-- head left div -->
              <div class="head_card1_p6_l">
                <!-- head left -->
                <div class="head_card1_p6_l_title">
                  <!-- การก้าว+icon -->
                  <div class="title_card1_p6">
                    <div style="padding-right:10px;">
                      <img
                        height="40px"
                        class="filter-white"
                        src="../assets/icon/icon_bp.svg"
                        alt="blodpresure"
                      />
                    </div>
                    <div class="card6-bot-text" style="text-align: center;">
                      <span> ความดันโลหิต </span>
                    </div>
                  </div>
                  <!-- btn sex & age -->
                  <div class="sex_age_title_card1_p6">
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
              <div class="head_card1_p6_r">
                <!-- head right -->
                <div class="head_card1_p6_r_title">
                  <div class="exit-icon-card3">
                    <!-- คอนเท้นย่อย ยัง -->
                    <template>
                      <v-btn
                        small
                        icon
                        fab
                        @click="$router.push('bloodp_dtail')"
                      >
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
                          <div class="head_dialog_c1_p6">
                            <div>
                              <v-btn
                                color="green darken-1"
                              icon @click="$router.go(-1)">
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
                                >รายละเอียดค่าความดันโลหิต</span
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
                            <dialog_p6_1 />
                          </div>
                        </v-card-content>
                      </v-card> -->
                  </div>
                </div>
              </div>
            </div>
            <div class="split_me  grey--text">
              <div class="split_l card3_line2">
                <span>ค่าเฉลี่ยความดันโลหิตของผู้ใช้เพศชาย และเพศหญิง</span>
              </div>
              <div class="split_r card3_line2">
                <span>ค่าเฉลี่ยความดันโลหิต จากผู้ใช้ทั้งหมดตามช่วงอายุ</span>
              </div>
            </div>
            <v-card-subtitle class="pd_0"> </v-card-subtitle>
          </div>
          <!-- Content  -->
          <div class="card1_p6_content">
            <div class="card3_p6_content_left_old">
              <div style="height:230px">
                <!-- ใส่กราฟ -->
                <canvas id="graph1_p6" width="" height=""></canvas>
              </div>

              <div class="label_grpah1_c1_p6 set_h30">
                <table width="100%">
                  <tr>
                    <td style="text-align:center;">
                      <div class="label_text_card_norm">
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
                    <td width="50%" style="font-size:14px;">
                      <span>จำนวนผู้ใช้ทั้งหมด 2,800 คน</span>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
            <v-divider vertical></v-divider>
            <div class="card1_p6_content_right">
              <div style="height:230px">
                <!-- ใส่กราฟ -->
                <canvas id="graph2_c1_p6" width="" height=""></canvas>
              </div>

              <div class="label_grpah1_c1_p6 set_h30">
                <table width="100%" style="font-size: 14px;">
                  <tr>
                    <td style=" padding-top: 5px;">
                      <span class>ค่าเฉลี่ยสูงสุดอยู่ที่่ 49 ปี </span>
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </div>
    <div class="card2_p6">
      <v-card class="bdr_12">
        <div class="card1_p6_root">
          <div class="card1_p6_headNsub">
            <!-- head lr -->
            <div class="card1_head_lr">
              <!-- head left div -->
              <div class="head_card1_p6_l">
                <!-- head left -->
                <div class="head_card3_p6_l_title">
                  <!-- การก้าว+icon -->
                  <div class="title_card1_p6">
                    <div style="padding-right:10px;">
                      <img
                        height="40px"
                        class="filter-white"
                        src="../assets/icon/icon_blood_ox.svg"
                        alt="blodpresure"
                      />
                    </div>
                    <div class="card6-bot-text" style="text-align: center;">
                      <span> ออกซิเจนในเลือด </span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- head right div -->
              <div class="head_card1_p6_r">
                <!-- head right -->
                <div class="head_card1_p6_r_title">
                  <div class="exit-icon-card3">
                    <v-dialog v-model="dialog2" width="">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          small
                          icon
                          fab
                          v-bind="attrs"
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
                          <div class="head_dialog_c2_p6">
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
                                >รายละเอียดค่าออกซิเจนในเลือด</span
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
                            <dialog_p6 />
                          </div>
                        </v-card-content>
                      </v-card>
                    </v-dialog>
                  </div>
                </div>
              </div>
            </div>
            <v-subtitle class="card3_line2"
              >น้ำหนัก(กก.) / ส่วนสูง(m2) คุณไม่สามารถตัดสินได้ว่าคุณเป็น
              "คนอ้วน" เพียงแค่ตามค่า BMI
              ผู้คนสามารถมีไขมันมากกว่ากล้ามเนื้อด้วยค่าดัชนีมวลกายปกติและยังจัดว่าเป็นโรคอ้วน</v-subtitle
            >
          </div>
          <br />
          <div class="card2_lNr">
            <div class="card2_l_all">
              <div class="card1_p6_content">
                <div class="card3_p6_content_left">
                  <div
                    class="card_donut"
                    style="float: center; position: relative;"
                  >
                    <div
                      style="width: 100%; position: absolute; top: 50%; left: 0; margin-top: -30px; line-height:19px; text-align: center; z-index: 2"
                    >
                      <span class="text_inside">ผู้ใช้ทั้งหมด</span><br />
                      <span class="text_inside1">1,471</span><br />
                      <span class="text_inside">คน</span>
                    </div>
                    <canvas id="graph1_c2_p6" width="" height="220px"></canvas>
                  </div>
                </div>
                <div class="card3_p6_content_right">
                  <v-card class="card2_l1 bdr_12_only" width="450px" height="">
                    <v-card-subtitle>
                      <span class="topic-name-card_c3 ">
                        ตัวบ่งชี้
                      </span>
                    </v-card-subtitle>
                    <v-card-text class="">
                      <table class="card2_table">
                        <tr v-for="item in data_card2_p6" :key="item.id">
                          <!-- <td> -->
                          <table class="sub_table">
                            <tr height="40px" width="">
                              <td style="text-align: right;" width="80px">
                                <v-icon x-small :style="{ color: item.color }"
                                  >mdi-circle</v-icon
                                >
                              </td>
                              <td
                                class="table_content"
                                style="text-align:left; font-weight:bold;"
                                width="70%"
                              >
                                <div class="fix_center_card">
                                  <img
                                    height="25px"
                                    class="filter-white"
                                    src="../assets/icon/icon_men.svg"
                                    alt="men"
                                  />
                                  <span
                                    style="align-text:left; letter-spacing: -1px;"
                                    >{{ item.name }}</span
                                  >
                                </div>
                              </td>
                              <td style="text-align: left;  font-weight:bold;">
                                {{ item.dataMan }}
                              </td>
                            </tr>
                            <tr>
                              <td></td>
                              <td
                                style="text-align: left;color:grey; font-size: 11px;"
                              >
                                {{ item.dtail }}
                              </td>
                              <td
                                style="text-align: left;color:grey; font-size: 11px;"
                              >
                                {{ item.avg }}
                              </td>
                            </tr>
                          </table>

                          <!-- </td> -->
                          <td></td>
                        </tr>
                      </table>
                    </v-card-text>
                  </v-card>
                </div>
              </div>
            </div>
            <v-divider class="px-2" vertical></v-divider>
            <div class="card2_r_all">
              <div class="card1_p6_content">
                <div class="card3_p6_content_left">
                  <div
                    class="card_donut"
                    style="float: center; position: relative;"
                  >
                    <div
                      style="width: 100%; position: absolute; top: 50%; left: 0; margin-top: -30px; line-height:19px; text-align: center; z-index: 2"
                    >
                      <span class="text_inside">ผู้ใช้ทั้งหมด</span><br />
                      <span class="text_inside1">1,329</span><br />
                      <span class="text_inside">คน</span>
                    </div>
                    <canvas id="graph2_c2_p6" width="" height="220px"></canvas>
                    <div class="label_grpah1_c1_p6">
                      <table width="100%">
                        <tr>
                          <td style="text-align:center;"></td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
                <!-- <v-divider vertical></v-divider> -->
                <div class="card3_p6_content_right">
                  <v-card class="card2_l1 bdr_12_only" width="450px" height="">
                    <v-card-subtitle>
                      <span class="topic-name-card_c3 ">
                        ตัวบ่งชี้
                      </span>
                    </v-card-subtitle>
                    <v-card-text class="">
                      <table class="card2_table">
                        <tr v-for="item in data_card2_2_p6" :key="item.id">
                          <td>
                            <table class="sub_table">
                              <tr height="40px">
                                <td style="text-align: right;" width="40px">
                                  <v-icon x-small :style="{ color: item.color }"
                                    >mdi-circle</v-icon
                                  >
                                </td>
                                <td
                                  class="table_content"
                                  style="text-align:left; font-weight:bold; font-size: 13px;"
                                  width="70%"
                                >
                                  <div class="fix_center_card">
                                    <img
                                      height="25px"
                                      class="filter-white"
                                      src="../assets/icon/icon_women.svg"
                                      alt="women"
                                    />
                                    <span
                                      style="align-text:left; letter-spacing: 0px;"
                                      >{{ item.name }}</span
                                    >
                                  </div>
                                </td>
                                <td
                                  style=" font-weight: bold; text-align: left;"
                                >
                                  {{ item.dataWoman }}
                                </td>
                              </tr>
                              <tr>
                                <td></td>
                                <td
                                  style="text-align: left;color:grey; font-size: 11px;"
                                >
                                  {{ item.dtail }}
                                </td>
                                <td
                                  style="text-align: left;color:grey; font-size: 11px;"
                                >
                                  {{ item.avg }}
                                </td>
                              </tr>
                            </table>
                          </td>
                          <td></td>
                        </tr>
                      </table>
                    </v-card-text>
                  </v-card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </div>
    <div class="card3_p6">
      <v-card class="bdr_12" style="padding-bottom:30px;">
        <div class="card1_p6_root">
          <div class="card1_p6_headNsub">
            <!-- head lr -->
            <div class="card1_head_lr">
              <!-- head left div -->
              <div class="head_card1_p6_l">
                <!-- head left -->
                <div class="head_card1_p6_l_title">
                  <!-- การก้าว+icon -->
                  <div class="title_card1_p6">
                    <div style="padding-right:10px;">
                      <img
                        height="40px"
                        class="filter-white"
                        src="../assets/icon/icon_temp.svg"
                        alt="temp"
                      />
                    </div>
                    <div class="card6-bot-text " style="text-align: center;">
                      <span> อุณหภูมิร่างกาย </span>
                    </div>
                  </div>
                  <!-- btn sex & age -->
                </div>
              </div>

              <!-- head right div -->
              <div class="head_card1_p6_r">
                <!-- head right -->
                <div class="head_card1_p6_r_title">
                  <div class="exit-icon-card3">
                    <!-- คอนเท้นย่อย ยัง -->
                    <v-dialog v-model="dialog3" width="">
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
                          <div class="head_dialog_c1_p6">
                            <div>
                              <v-btn
                                color="green darken-1"
                                icon
                                @click="dialog3 = false"
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
                                >รายละเอียดค่าอุณหภูมิร่างกาย</span
                              >
                            </div>
                          </div>
                        </v-card-title>
                        <v-card-text>
                          กราฟสรุปรายละเอียดอุณหภูมิของผู้ใช้
                          เพื่อสังเกตุพฤติกรรมที่อาจส่งผลถึง
                          ปัญหาสุขภาพในระยะสั้น กลาง และยาวได้
                        </v-card-text>
                        <v-card-content>
                          <div>
                            <dialog_p6_2 />
                          </div>
                        </v-card-content>
                      </v-card>
                    </v-dialog>
                  </div>
                </div>
              </div>
            </div>
            <v-subtitle class="card3_line2"
              >ค่าเฉลี่ยอุณหภูมิร่างกายของผู้ใช้เพศชาย และเพศหญิง</v-subtitle
            >
          </div>
          <!-- Content  -->
          <div class="card3_p6_content_na">
            <v-card-text>
              <!-- ใส่กราฟ -->
              <canvas id="graph1_c3_p6" width="" height="80px"></canvas>
            </v-card-text>

            <div class="label_text_p6">
              <table width="100%" style="text-align:left!important;">
                <tr>
                  <td style="text-align:left!important;">
                    <div class="label_text_p6">
                      <div style="padding-left:70px;"></div>
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
                <tr>
                  <td
                    width=""
                    class="grey--text"
                    style="font-size:14px; padding-left: 70px;"
                  >
                    <span
                      >อุณหภูมิร่างกายปกติอยู่ในช่วงระหว่าง 36.5 - 37.5
                      องศาเซลเซียส</span
                    >
                  </td>
                  <td width="50%" class="text_sub"></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </v-card>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <!-- </div> -->
  </v-container>
</template>

<script>
import Chart from "chart.js";
// import dialog_p6_1 from "@/components/dialog_p6_card1.vue";
export default {
  components: {
    // dialog_p6_1,
  },
  mounted: function() {
    // card1 graph
    var ctx1_p6 = document.getElementById("graph1_p6").getContext("2d");
    var bar1_p6 = new Chart(ctx1_p6, {
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
                labelString: [
                  "      ปกติ      ",
                  "      เริ่มสูง      ",
                  "      สูง      ",
                  "      สูงมาก      ",
                ],
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
          },
        ],
      },
    });
    console.log(bar1_p6);

    var ctx2_c1_p6 = document.getElementById("graph2_c1_p6").getContext("2d");
    var bar2_c1_p6 = new Chart(ctx2_c1_p6, {
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
                suggestedMin: 2, // minimum will be 0, unless there is a lower value.
                stepValue: 2,
                max: 8,
              },
              scaleLabel: {
                display: true,
                labelString: "",
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
            data: [2.9, 4.0, 4.1, 3.8, 7.2, 2.8],
            borderDash: [5],
            fill: "Disabled",
          },
        ],
        labels: ["10", "20", "30", "40", "50", "60 ปีขึ้นไป"],
      },
    });
    console.log(bar2_c1_p6);

    var ctx1_c2_p6 = document.getElementById("graph1_c2_p6").getContext("2d");
    var bar1_c2_p6 = new Chart(ctx1_c2_p6, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [964, 570],
            backgroundColor: ["#359BD3", "#8FB7CE"],
          },
        ],
        labels: ["ชายปกติ", "ชาย ต่ำกว่าปกติ"],
      },
      options: {
        responsive: true,
        legend: {
          display: false,
        },
      },
    });
    console.log(bar1_c2_p6);

    var ctx2_c2_p6 = document.getElementById("graph2_c2_p6").getContext("2d");
    var bar2_c2_p6 = new Chart(ctx2_c2_p6, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [772, 557],
            backgroundColor: ["#F28C8C", "#F2C5C5"],
          },
        ],
        labels: ["หญิงปกติ", "หญิง ต่ำกว่าปกติ"],
      },
      options: {
        responsive: true,
        legend: {
          display: false,
        },
      },
    });
    console.log(bar2_c2_p6);

    var ctx_dia_c1_p6 = document
        .getElementById("graph1_c3_p6")
        .getContext("2d"),
      gradient = ctx_dia_c1_p6.createLinearGradient(0, 0, 0, 300),
      gradient1 = ctx_dia_c1_p6.createLinearGradient(0, 0, 0, 300);
    // gradient.addColorStop(0, "rgba(0, 0,255, 0.4)");
    // gradient.addColorStop(1, "rgba(0, 0, 200, 0)");
    gradient.addColorStop(0, "rgb(125, 174, 231)");
    gradient.addColorStop(1, "rgb(255, 255, 255)");
    gradient1.addColorStop(0, "rgb(237, 119, 119)");
    gradient1.addColorStop(1, "rgb(255, 255, 255)");
    // gradient1.addColorStop(0, "rgba(255, 218,131, 0.4)");
    // gradient1.addColorStop(1, "rgba(255, 0, 0, 0)");
    var bar_dia_c1_p6 = new Chart(ctx_dia_c1_p6, {
      type: "line",
      data: {
        datasets: [
          {
            label: "ชาย",
            backgroundColor: gradient,
            data: [37.4, 36.2, 37.1, 36.7, 37.4, 36.5],
            pointBackgroundColor: "white",
            // borderDash: [5],
          },
          {
            label: "หญิง",
            backgroundColor: gradient1,
            data: [37.2, 36.7, 37.1, 37.4, 37.1, 37.8],
            pointBackgroundColor: "white",
            // borderDash: [5],
            // fill: "Disabled",
          },
        ],
        labels: ["เมื่อวาน", "00:00", "06:00", "12:00", "18:00", "00:00"],
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
              stacked: false,
              ticks: {
                reverse: false,
                min: 36,
                max: 38,
                stepSize: 0.5,
              },
              scaleLabel: {
                display: true,
                labelString: "อุณหภูมิ",
              },
            },
          ],
        },
      },
    });
    console.log(bar_dia_c1_p6);
  },
  data() {
    return {
      dialog0: false,
      dialog1: false,
      dialog2: false,
      dialog3: false,
      data_card2_p6: [
        {
          name: "ชาย ปกติ",
          dtail: "ออกซิเจนมากกว่า95%",
          color: "#359BD3",
          dataMan: "638",
          avg: "63%",
        },
        {
          name: "ชาย ต่ำกว่าปกติ",
          dtail: "ออกซิเจนต่ำกว่า95%",
          color: "#8FB7CE",
          dataMan: "570",
          avg: "27%",
        },
      ],
      data_card2_2_p6: [
        {
          name: "หญิง ปกติ",
          dtail: "ออกซิเจนมากกว่า95%",
          color: "#F28C8C",
          dataWoman: "772",
          avg: "63%",
        },
        {
          name: "หญิง ต่ำกว่าปกติ",
          dtail: "ออกซิเจนต่ำกว่า95%",
          color: "#F2C5C5",
          dataWoman: "557",
          avg: "27%",
        },
      ],
    };
  },
};
</script>

<style scoped>
.head_dialog {
  display: flex;
}
.card1_p6,
.card2_p6,
.card3_p6 {
  padding: 10px 10px;
  margin-bottom: 5px;
  height: fit-content;
}
.card1_p6_root {
  height: fit-content;
}
.label_text_card_norm {
  display: flex;
  justify-content: start;
  /* padding-left: 30px; */
  font-size: 14px;
  font-weight: regular;
}
.label_text_card1_1 {
  display: flex;
  align-content: left;
}
.card1_p6_content {
  display: flex;
  padding: 0px 20px;
}
.head_card1_p6_l {
  width: 50%;
}
.label_grpah1_c1_p6 {
  padding-left: 20px;
  /* background-color: rgba(0, 0, 0, 0.1); */
}
/* .head_card1_p6_r{
  padding:20px;
} */
.head_card1_p6_l_title {
  display: flex;
  /* padding:20px; */
  justify-content: space-between;
  width: 100%;
  /* background-color:rgba(0, 0,100,.3); */
}
.text_inside {
  font-size: 12px;
  color: #5b5b5b;
}
.text_inside1 {
  font-size: 25px;
  font-weight: bold;
}
.head_card1_p6_r_title {
  display: flex;
  /* padding:20px; */
  /* background-color:rgba(0, 0,100,.3); */
}

.sex_age_title_card1_p6 {
  display: flex;
}
.card1_p6_content_left {
  width: 50%;
}
.card3_p6_content_na {
  width: 100%;
  /* padding: 0px 20px; */
  /* background-color: rgba(0, 0, 0, 0.1); */
}
.head_dialog_c2_p6 {
  display: flex;
}
/* .head_card1_p6_l {
  display: flex;
  justify-content: space-between;
  width: 50%;
} */
.card1_p6_content_right {
  width: 50%;
  padding-left: 20px;
  /* background-color: rgba(0, 0, 0, 0.1); */
}

/* .head_card1_p6_r{
  padding:20px;
} */

.title_card1_p6 {
  display: flex;
}

/* .head_card1_p6_l {
  display: flex;
  justify-content: space-between;
  width: 50%;
} */

.head_card3_p6_l_title {
  width: 100%;
  /* background-color: rgba(0, 0, 0, 0.1); */
}
/* .card_donut { */
/* background-color: rgba(0, 120, 40, 0.2); */
/* height:200px; */
/* } */
.head_dialog_c1_p6 {
  display: flex;
}
.headline {
  padding-left: 20px;
}
.card2_lNr {
  display: flex;
}
.card2_l_all {
  width: 50%;
  /* padding: 20px 20px; */
  padding: 20px 40px 20px 20px;
}
.card2_r_all {
  width: 50%;
  /* padding: 20px 20px; */
  padding: 20px 40px 20px 20px;
}
.card3_p6_content_left {
  width: 50%;
  display: flex;
  /* padding: 20px; */
  justify-content: center;
  /* padding-left: 10px; */
  align-items: center;
}
.card3_p6_content_left_old {
  width: 50%;
  /* padding-left: 10px; */
  align-items: center;
}
.card3_p6_content_right {
  width: 50%;
  padding: 20px 0;
  /* display:flex; */
  /* justify-content:space-between; */
  /* justify-content:center; */
  /* padding-right: 10px; */
  /* background-color: rgba(255, 255, 255, 0.5); */
}
.card2_l1 {
  /* background-color: rgba(255, 255, 255, 0.2); */
  /* margin-bottom: 20px; */
  /* margin-right: 30px; */
  margin: 0 20px;
  width: 100%;
}
.card2_table {
  text-align: center;
  vertical-align: middle;
  padding-bottom: 15px;
}
.sub_table {
  width: 100%;
  border-spacing: 10px;
}
table {
  border-collapse: collapse;
  width: 100%;
}
.v-card__subtitle {
  padding-bottom: 0;
  margin-bottom: 0;
}
.pd_0 {
  padding: 0;
}
.split_me {
  display: flex;
}
.split_l {
  width: 50%;
}
.split_r {
  width: 50%;
  padding-left: 60px;
}
.fix_center_card {
  display: flex;
  /* justify-content: center; */
  align-items: center;
  width: 100%;
}
.center_text {
  text-align: center;
}
.left_text {
  text-align: left;
}
</style>
