<template>
  <div class="card1_p3">
    <v-container>
      <v-layout row wrap justify="space-between">
        <v-flex xs12 md6>
          <v-card
            elevation="0"
            class="bdr_0"
            style="padding-righ:5px; border-right: 1px solid grey !important;"
          >
            <!-- หัวตาราง -->
            
            <v-card-text>
              <div style="height:180px">
                <!-- graph -->
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
            <v-card-text>
              <div style="height:180px">
              <!-- กราฟ -->
              </div>
            </v-card-text>
          </v-card>
          <div class="set_h30">
            <!-- ก้นตาราง -->
          </div>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- testst  -->
    <div class="card1_p3">
      <v-container>
        <v-layout row wrap justify="space-between">
          <v-flex xs12 md6>
            <v-card elevation="0">
              <v-card-title>
                <div class="card3_line2 grey--text">
                  <span
                    >ค่าเฉลี่ยก้าวเดินของผู้ใช้เพศชาย และเพศหญิง รายวัน</span
                  >
                </div>
              </v-card-title>
              <v-card-text>
                <canvas id="graph1_p3" width="200px" height=""></canvas>
              </v-card-text>
            </v-card>
            <div class="label_grpah1_c1_p3 set_h30">
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
                  <td width="50%" class="text_sub">
                    <span>จำนวนผู้ใช้ทั้งหมด 2,800 คน</span>
                  </td>
                </tr>
              </table>
            </div>
          </v-flex>
          <v-flex xs12 md6>
            <v-card elevation="0">
              <v-card-title>
                <div class="card3_line2 grey--text">
                  <span>ค่าเฉลี่ยก้าวจากผู้ใช้ทั้งหมดตามช่วงอายุ</span>
                </div>
              </v-card-title>
              <v-card-text>
                <canvas id="graph2_c1_p3" width="200px" height=""></canvas>
              </v-card-text>
            </v-card>
            <div class="label_grpah1_c1_p3 set_h30">
              <table width="100%">
                <tr>
                  <td
                    style="padding-left:20px display:flex; align-item:center;"
                    class="text_sub"
                  >
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
      </v-container>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.head_dialog_c2_p3 {
  width: 27%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.text_sub {
  font-size: 14px;
   /* font-weight:lighter; */
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
  background-color: green;
}
</style>
