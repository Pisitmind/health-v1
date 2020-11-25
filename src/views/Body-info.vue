<template>
  <div class="bodyinfo">
    <h1>Bodyinfo page</h1>
    <br />
    <div class="card1_p5">
      <v-card elevation="2" outlined height="">
        <div class="card1_p5_root">
          <div class="card1_p5_headNsub">
            <!-- head lr -->
            <div class="card1_head_lr">
              <!-- head left div -->
              <div class="head_card1_p5_l">
                <!-- head left -->
                <div class="head_card1_p5_l_title">
                  <!-- การก้าว+icon -->
                  <div class="title_card1_p5">
                    <div style="padding-right:10px;">
                      <v-icon large color="#AD8DBB">mdi-weight-gram</v-icon>
                    </div>
                    <div class="card3-bot-text " style="text-align: center;">
                      <span><strong>ค่าน้ำหนัก</strong></span>
                    </div>
                  </div>
                  <!-- btn sex & age -->
                  <div class="sex_age_title_card1_p5">
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
              <div class="head_card1_p5_r">
                <!-- head right -->
                <div class="head_card1_p5_r_title">
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
                          <div class="head_dialog_c1_p5">
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
                                >รายละเอียดค่าน้ำหนัก</span
                              >
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
                            <dialog_p5 />
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
          <div class="card1_p5_content">
            <div class="card1_p5_content_left">
              <v-card-subtitle class="pd_0">
                <div class="card3_line2 grey--text">
                  <span>ค่าเฉลี่ยน้ำหนักของผู้ใช้เพศชาย และเพศหญิง</span>
                </div>
              </v-card-subtitle>
              <v-card-text>
                <!-- ใส่กราฟ -->
                <canvas id="graph1_p5" width="200px" height=""></canvas>
              </v-card-text>

              <div class="label_grpah1_c1_p5">
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
            <div class="card1_p5_content_right">
              <v-card-subtitle class="pd_0">
                <div class="card3_line2 grey--text">
                  <span>ค่าเฉลี่ยน้ำหนักจากผู้ใช้ทั้งหมดตามช่วงอายุ</span>
                </div>
              </v-card-subtitle>
              <v-card-text>
                <!-- ใส่กราฟ -->
                <canvas id="graph2_c1_p5" width="200px" height=""></canvas>
              </v-card-text>

              <div class="label_grpah1_c1_p5">
                <table width="100%">
                  <span class
                    >ค่าเฉลี่ยสูงสุดอยู่ที่่ 49 ปี มีจำนวนก้าวปะมาณ 78 กิโลกรัม</span
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
                     <v-icon large color="#00E676">mdi-archive-alert</v-icon>
                      <span><strong>BMI</strong></span>
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

<style scoped>
.card1_p5 {
  padding: 20px;
}
.card1_p5_root {
  padding: 20px;
}
.card1_p5_content{
  display: flex;
}
.head_card1_p5_l{
  width: 40%;
}
/* .head_card1_p5_r{
  padding:20px;
} */
.head_card1_p5_l_title{
  display: flex;
  padding:20px;
  justify-content:space-between;
  width: 100%;
  background-color:rgba(0, 0,100,.3);
}
.title_card1_p5{
  display: flex;
}

.sex_age_title_card1_p5{
  display: flex;
}
.card1_p5_content_left{
width: 50%;
}
/* .head_card1_p5_l {
  display: flex;
  justify-content: space-between;
  width: 50%;
} */
</style>
