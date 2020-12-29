<template>
  <div class="dia_user_data_normal">
    <!-- Dialog card in  userloop-->
    <div class="pd_20">
      <v-card elevation="0">
        <v-card-title>
          <div class="head_of_dialog_user">
            <div class="left_head">
              <div>
                <v-btn color="green darken-1" icon>
                  <img
                    height="30px"
                    class="filter-white"
                    src="../assets/icon/icon_prev.svg"
                    alt="prev"
                  />
                </v-btn>
              </div>
              <div class="head_text_content" style="paddint-left:15px">
                <span class="headline">ข้อมูลผู้ใช้งานระบบ</span>
              </div>
            </div>
            <div class="btn_head_user hid">
              <v-btn
                class="white--text  mx-2"
                small
                width="120px"
                height="30px"
                color="#EE3743"
              >
                <span> ลบ</span>
              </v-btn>
              <v-btn
                class="white--text  mx-2"
                small
                width="120px"
                height="30px"
                color="#AD8DBB"
                @click="dialog99 = false"
              >
                <span> บันทึก</span>
              </v-btn>
            </div>
          </div>
        </v-card-title>
        <v-card-content>
          <div class="content_dialog_user">
            <v-form>
              <v-card-content>
                <div class="c1_line1">
                  <div class="in_card1_left"></div>
                  <v-row>
                    <v-col cols="12" sm="3">
                      <v-card class="mini_card1">
                        <v-action-card>
                          <div class="in_card1">
                            <img
                              height="190"
                              rounded
                              style="border-radius:16px!important;"
                              src="../assets/user_pic/user7.jpg"
                            />
                          </div>
                        </v-action-card>
                      </v-card>
                    </v-col>
                    <v-col cols="12" sm="7">
                      <v-text-field
                        v-model="name_au"
                        label="ชื่อ"
                        placeholder="ชื่อพนักงาน"
                        flat
                      >
                      </v-text-field>
                      <v-row>
                        <v-col cols="12" sm="5">
                          <v-text-field
                            v-model="tel_au"
                            label="เบอร์โทรศัพท์"
                            placeholder="(+66)"
                          >
                          </v-text-field>
                        </v-col>
                        <v-spacer></v-spacer>
                        <v-col cols="12" sm="7">
                          <v-text-field
                            v-model="email"
                            label="อีเมลล์"
                            placeholder="กรอกอีเมลล์"
                          >
                          </v-text-field>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-row>

                  <div class="in_card1_right">
                    <v-row>
                      <v-col cols="6" sm="6"> </v-col>
                    </v-row>
                  </div>
                </div>
                <div class="c1_line2">
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="statement"
                        label="ที่อยู่"
                        placeholder="กรอกข้อมูลที่อยู่"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="Sex"
                        label="เพศ"
                        placeholder="เพศ"
                      ></v-text-field>
                    </v-col> </v-row
                  ><v-row>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="height_users"
                        label="ส่วนสูง"
                        placeholder="กรอกข้อมูลส่วนสูง"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="weight_users"
                        label="น้ำหนัก"
                        placeholder="กรอกข้อมูลน้ำหนัก"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="jobs"
                        label="อาชีพ"
                        placeholder="กรอกข้อมูลอาชีพ"
                      ></v-text-field>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="position"
                        label="ตำแหน่ง"
                        placeholder="กรอกข้อมูลตำแหน่ง"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-spacer></v-spacer>
                </div>
              </v-card-content>
            </v-form>
          </div>
        </v-card-content>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: null,
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      title: "",
      name_au: "ปัญสิกรณ์ ติยกรณ์",
      tel_au: "0874445121",
      email: "Punpsk@o2o.com",
      Sex: "หญิง",
      weight_users: "55 kg",
      height_users: "165 cm",
      jobs: "Idols",
      position: "Ceo",

      statement: "12345 Chiangmai 50200",
      items: ["เจ้าหน้าที่ทั่วไป", "ผู้ดูแล", "ผู้ดูแลทั่วไป", "สมาชิก"],
      description: "",
      rules: [(v) => v.length <= 50 || "Max 50 characters"],
      rules_1000: [(v) => v.length <= 1000 || "Max 1000 characters"],
    };
  },
};
</script>

<style scoped>
.y-scroll-disabled {
  overflow-y: hidden;
}
.dia_user_data_normal {
  overflow-y: hidden !important;
}
.content_dialog_user {
  padding: 20px;
}
.headline {
  color: #8a4532;
  line-height: normal;
}
.head_of_dialog_user {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.btn_head_user {
  width: 50%;
}
.left_head {
  display: flex;
  width: 100%;
}
.pd_20 {
  padding: 0 20px 20px 20px;
}
.row_card {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  /* background-color: rgba(0, 0, 100, 0.3); */
  width: 70%;
}
.wd_100 {
  width: 100%;
}
.mini_card {
  width: 100px;
  height: 100px;
}
.mini_card1 {
  width: 180px;
  height: 180px;
  display: flex;
  justify-items: center;
  align-content: center;
  justify-content: center;
  align-items: center;
}
.in_card1 {
  width: 100%;
  display: flex;
  flex-direction: column;
  /* background-color: rgba(0, 100, 100, 0.2); */
  text-align: center;
  padding: 20px;
  color: #8a4532;
}
.sub_text {
  font-size: 10px;
  color: gray;
}
.card_text {
  padding-top: 10px;
}
</style>
