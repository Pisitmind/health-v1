<template>
  <div class="report">
    <h1>Report page</h1>
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
                <canvas id="graph1_p5" width="200px" height="90px"></canvas>
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
                    >ค่าเฉลี่ยสูงสุดอยู่ที่่ 49 ปี มีน้ำหนักประมาณ 78
                    กิโลกรัม</span
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

</script>
<style scoped>
</style>
