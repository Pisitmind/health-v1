<template>
  <div class="Moving">
    <br />
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
                    <v-btn small icon fab>
                      <v-icon class="exit-icon">mdi-exit-to-app</v-icon>
                    </v-btn>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                    <v-btn small icon fab>
                      <v-icon class="exit-icon">mdi-exit-to-app</v-icon>
                    </v-btn>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card1_p3_content">
            <div class="card1_p3_content_left">
              <v-card-text>
                <div class="card3_line2 grey--text">
                  <span
                    >ค่าเฉลี่ยการเผาผลาญของผู้ใช้แต่ละช่วงอายุ</span
                  >
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
                    <div class="card3-bot-text ">
                      <span><strong>การออกกำลังกาย</strong></span>
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
                    <v-btn small icon fab>
                      <v-icon class="exit-icon">mdi-exit-to-app</v-icon>
                    </v-btn>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card1_p3_content">
            <div class="card1_p3_content_left">
              <v-card-text>
                <div class="card3_line2 grey--text">
                  <span
                    >ค่าเฉลี่ยการเผาผลาญของผู้ใช้แต่ละช่วงอายุ</span
                  >
                </div>
                <canvas id="graph1_p3" width="200px" height=""></canvas>
              </v-card-text>
            </div>
            <v-divider vertical></v-divider>
            <div class="card1_p3_content_right">
              <v-card-text>
                <div class="card3_line2 grey--text">
                  <span>ค่าเฉลี่ยการเผาผลาญ จากผู้ใช้ทั้งหมดตามช่วงอายุ</span>
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
    <br />

    <br />
    <br />
  </div>
</template>

<script>
import Chart from "chart.js";
export default {
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
          },
        ],
        labels: ["10", "20", "30", "40", "50", "60 ปีขึ้นไป"],
      },
    });
    console.log(bar2_c1_p3);

    var ctx1_c2_p3 = document.getElementById("graph1_c2_p3").getContext("2d");
    var bar1_c2_p3 = new Chart(ctx1_c2_p3, {
      type: "horizontalBar",
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
            data: [270, 250, 275, 480, 145, 40],
          },
        ],
      },
    });
    console.log(bar1_c2_p3);
  },
  data() {
    return {
      items: [
        { gender: "ผช", color: "#359BD3", data: [27, 98, 780, 34, 0] },
        { gender: "ผญ", color: "F28C8C", data: [12, 132, 560, 22, 0] },
      ],
    };
  },
};
</script>

<style scope>
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
  padding: 20px;
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
.head_card1_p3_l_title {
  display: flex;
  justify-content: space-between;
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
</style>
