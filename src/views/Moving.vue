<template>
  <div class="Moving">
    <div class="card1_p3">
      <v-card elevation="2" outlined height="">
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
                      <v-icon large color="#AD8DBB">mdi-shoe-print</v-icon>
                    </div>
                    <div class="card3-bot-text ">
                      <span><strong>การก้าว</strong></span>
                    </div>
                  </div>
                  <!-- btn sex & age -->
                  <div class="sex_age_title_card1_p3">
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
              <div class="head_card1_p3_r">
                <!-- head right -->
                <div class="head_card1_p3_r_title">
                  <div class="exit-icon-card3">
                    <v-dialog v-model="dialog1" width="">
                      <template v-slot:activator="{ on, attrs1 }">
                        <v-btn small icon fab v-bind="attrs1" v-on="on">
                          <v-icon class="exit-icon">mdi-exit-to-app</v-icon>
                        </v-btn>
                      </template>
                      <v-card>
                        <v-card-title>
                          <div class="head_dialog_c1_p3">
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
          <!-- dontent  -->
          <div class="card1_p3_content">
            <div class="card1_p3_content_left">
              <v-card-text>
                <div class="card3_line2 grey--text">
                  <span
                    >ค่าเฉลี่ยก้าวเดินของผู้ใช้เพศชาย และเพศหญิง รายวัน</span
                  >
                </div>
                <canvas id="graph1_p3" width="200px" height=""></canvas>
              </v-card-text>

              <div class="label_grpah1_c1_p3">
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
            <div class="card1_p3_content_right">
              <v-card-text>
                <div class="card3_line2 grey--text">
                  <span>ค่าเฉลี่ยก้าวจากผู้ใช้ทั้งหมดตามช่วงอายุ</span>
                </div>
                <canvas id="graph2_c1_p3" width="200px" height=""></canvas>
              </v-card-text>

              <div class="label_grpah1_c1_p3">
                <table width="100%">
                  <span class
                    >ค่าเฉลี่ยสูงสุดอยู่ที่่ 49 ปี มีจำนวนก้าวปะมาณ 7,580
                    ก้าวต่อวัน</span
                  >
                </table>
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </div>
    <div class="card1_p3">
      <v-card elevation="2" outlined height="">
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
                      <v-icon large color="#F57C00">mdi-fire</v-icon>
                    </div>
                    <div class="card3-bot-text ">
                      <span><strong>การเผาผลาญ</strong></span>
                    </div>
                  </div>
                  <!-- btn sex & age -->
                  <div class="sex_age_title_card1_p3">
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
              <div class="head_card1_p3_r">
                <!-- head right -->
                <div class="head_card1_p3_r_title">
                  <div class="exit-icon-card3">
                    <v-dialog v-model="dialog2" width="">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn small icon fab v-bind="attrs" v-on="on">
                          <v-icon class="exit-icon">mdi-exit-to-app</v-icon>
                        </v-btn>
                      </template>
                      <v-card>
                        <v-card-title>
                          <div class="head_dialog_c2_p3">
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
          <div class="card1_p3_content">
            <div class="card1_p3_content_left">
              <v-card-text>
                <div class="card3_line2 grey--text">
                  <span>ค่าเฉลี่ยการเผาผลาญของผู้ใช้แต่ละช่วงอายุ</span>
                </div>
                <canvas id="graph1_c2_p3" width="200px" height=""></canvas>
              </v-card-text>
            </div>
            <v-divider vertical></v-divider>
            <div class="card1_p3_content_right">
              <v-card-text>
                <div class="card3_line2 grey--text">
                  <span>ค่าเฉลี่ยการเผาผลาญ จากผู้ใช้ทั้งหมดตามช่วงอายุ</span>
                </div>
                <canvas id="graph2_c2_p3" width="200px" height=""></canvas>
              </v-card-text>

              <div class="label_grpah1_c1_p3">
                <table width="100%">
                  <span class
                    >ค่าเฉลี่ยสูงสุดอยู่ที่่ 24 ปี มีค่าการเผาผลาญประมาณ 658
                    แคลต่อวัน</span
                  >
                  <br />
                  <span class="grey--text"
                    >(*เพิ่มจากค่าการเผาผลาญปกติที่ประมาณ 2,000 แคล
                    ต่อวัน)</span
                  >
                </table>
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </div>
    <div class="card1_p3">
      <v-card elevation="2" outlined height="">
        <div class="card1_p3_root">
          <div class="card1_p3_headNsub">
            <!-- head lr -->
            <div class="card1_head_lr">
              <!-- head left div -->
              <div class="head_card1_p3_l">
                <!-- head left -->
                <div class="head_card3_p3_l_title">
                  <!-- การก้าว+icon -->
                  <div class="title_card3_p3">
                    <div class="card3-bot-text ">
                      <span><strong>การออกกำลังกาย</strong></span>
                    </div>
                  </div>
                  <!-- btn sex & age -->
                  <div class="btn_date_head_card3">
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
                  </div>
                </div>
              </div>
              <!-- head right div -->
              <div class="head_card1_p3_r">
                <!-- head right -->
                <div class="head_card1_p3_r_title">
                  <div class="exit-icon-card3">
                    <v-btn small icon fab>
                      <v-icon class="exit-icon">mdi-exit-to-app</v-icon>
                    </v-btn>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card1_p3_content">
            <div class="card3_p3_content_left">
              <v-card-text>
                <!-- <div class="card3_line2 grey--text">
                  <span>graph here</span>
                </div> -->
                <canvas id="graph1_c3_p3" width="200px" height=""></canvas>
                <div class="label_grpah1_c1_p3">
                  <table width="100%">
                    <tr>
                      <td style="text-align:center;">
                        <div class="label_text_card3">
                          <div>
                            <v-icon small color="blue"> mdi-circle</v-icon>
                            <span class="black--text"
                              ><strong>ชาย</strong></span
                            >
                          </div>
                          <div class="pd_10">
                            <v-icon small color="pink"> mdi-circle</v-icon>
                            <span class="black--text"
                              ><strong>หญิง</strong></span
                            >
                          </div>
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>
              </v-card-text>
            </div>
            <!-- <v-divider vertical></v-divider> -->
            <div class="card3_p3_content_right pd_r_30">
              <v-card class="card2-subcard-3  ct_set" width="" height="">
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
  </div>
</template>

<script>
import Chart from "chart.js";
import dialog_p3 from "@/components/dialog_p3_card1.vue";
import dialog_p3_2 from "@/components/dialog_p3_card2.vue";
export default {
  components: {
    dialog_p3,
    dialog_p3_2,
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
          },
        ],
      },
    });
    console.log(bar1_p3);

    var ctx2_c1_p3 = document.getElementById("graph2_c1_p3").getContext("2d");
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
            },
          ],
        },
      },
      data: {
        labels: ["18-20", "21-30", "31-40", "41-50", "51-60", "60 Up"],
        datasets: [
          {
            label: "",
            backgroundColor: [
              "#58BFAE",
              "#FF3E80",
              "#FF850A",
              "#DA2121",
              "#B4B4B4",
              "#2289D8",
            ],
            data: [984, 627, 743, 505, 286, 211],
          },
        ],
      },
    });
    console.log(bar1_c2_p3);

    var ctx2_c2_p3 = document.getElementById("graph2_c2_p3").getContext("2d");
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
                suggestedMin: 200, // minimum will be 0, unless there is a lower value.
                stepValue: 200,
                max: 1000,
              },
              scaleLabel: {
                display: false,
                labelString: "",
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
    console.log(bar1_c3_p3);
  },
  data() {
    return {
      dialog1: false,
      dialog2: false,
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
    };
  },
};
</script>

<style lang="scss" scope>
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
  padding:10px 20px 10px 20px;
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
  justify-content: center;
}
.head_card1_p3_l {
  display: flex;
  justify-content: space-between;
  /* background-color:green; */
  width: 50%;
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
  /* justify-content: space-between; */
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
  padding-left: 40px;
}
.label_text_card1 {
  display: flex;
  justify-content: center;
}
.label_text_card3 {
  display: flex;
}
.title_card3_p3 {
  width: 40%;
}
.btn_date_head_card3 {
  display: flex;
  /* padding-left:30px; */
  justify-content: space-around;
  width: 60%;
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

/* 

.ct_set {
  align-items: center;
  justify-content: center;
  justify-items: center;
  padding: auto;
  margin: auto;
} */
</style>
