<template>
  <div class="dia_user_data">
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
                <span class="headline">เพิ่มเจ้าหน้าที่</span>
              </div>
            </div>
            <div class="btn_head_user set_sm_btn">
              <div>
                <v-btn
                  class="white--text  mx-2 btn_1"
                  small
                  width="120px"
                  height="30px"
                  color="#EE3743"
                  @click="$emit('close')"
                >
                  <span> ลบ</span>
                </v-btn>
              </div>
              <div class="set_space_btn">
                <v-btn
                  class="white--text  mx-2 btn_2"
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
          </div>
        </v-card-title>
        <v-card-content>
          <div class="content_dialog_user">
            <v-form>
              <div>
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
                    <div class="space_in_sm"></div>
                    <v-col cols="12" sm="7">
                      <v-text-field
                        v-model="name_au"
                        label="ชื่อ"
                        placeholder="ชื่อพนักงาน"
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
                        v-model="name_reg"
                        label="ชื่อสำหรับลงทะเบียน"
                        placeholder="กรอกข้อมูล"
                      ></v-text-field>
                    </v-col> </v-row
                  ><v-row>
                    <v-col cols="12" sm="6">
                      <v-text-field
                        v-model="pass"
                        label="รหัสผ่าน"
                        :type="'password'"
                        placeholder="กรอกรหัสผ่าน"
                      ></v-text-field>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="12" sm="5">
                      <v-text-field
                        v-model="confirm_pass"
                        label="ยืนยัน รหัสผ่าน"
                        :type="'password'"
                        placeholder="กรอกรหัสผ่านอีกครั้ง"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-col
                    cols="12"
                    xs="12"
                    sm="12"
                    md="6"
                    lg="6"
                    xl="6"
                    class="set_pdleft_0"
                  >
                    <label for="lname">กลุ่มเจ้าหน้าที่</label><br />
                    <v-select :items="items" dense outlined></v-select>
                  </v-col>
                  <v-spacer></v-spacer>
                </div>
              </div>
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
      name_reg: "punsikorn1234",
      pass: "12345678",
      confirm_pass: "12345678",
      items: ["เจ้าหน้าที่ทั่วไป", "ผู้ดูแล", "ผู้ดูแลทั่วไป", "สมาชิก"],
      description: "",
      rules: [(v) => v.length <= 50 || "Max 50 characters"],
      rules_1000: [(v) => v.length <= 1000 || "Max 1000 characters"],
    };
  },
};
</script>

<style scoped>
.dia_user_data {
  overflow-y: hidden;
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
  display: flex;
  justify-content: flex-end;
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
  color: #8a4532;
}
.sub_text {
  font-size: 10px;
  color: gray;
}
.card_text {
  padding-top: 10px;
}
.set_pdleft_0 {
  padding-left: 0;
}
@media only screen and (min-width: 320px) and (max-width: 767px) {
  .head_of_dialog_user {
    display: flex;
    width: auto;
    flex-direction: column;
  }
  .left_head {
    width: 100%;
  }
  .btn_head_user {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px 0px;
    justify-content: space-between;
  }
  .set_space_btn {
    padding-top: 10px;
  }
  .btn_1,
  .btn_2 {
    padding: 10px 0px;
  }
  .headline {
    width: 100%;
    white-space: nowrap;
  }
  .set_sm_btn {
    display: flex;
    paddingl: 20px;
  }
}

@media (max-width: 768px) {
  .mini_card1 {
    width: 160px;
    min-width: 160px;
    min-height: 160px;
    height: 160px;
  }
  .space_in_sm {
    width: 60px;
    height: auto;
  }
}
</style>
