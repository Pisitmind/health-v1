<template>
  <div class="dia_user">
    <!-- Dialog card in  -->
    <div class="pd_20">
      <v-card elevation="0">
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
                            <v-btn class="center" icon small>
                              <v-icon color="#8A4532"
                                >mdi-camera-outline</v-icon
                              >
                            </v-btn>
                            <!-- <v-file-input
                              hide-input
                              class="center"
                            ></v-file-input> -->
                            <span class="card_text">รูปเจ้าหน้าที่</span>
                            <p class="sub_text">
                              ขนาด 480x480 หรือ 1:1
                            </p>
                          </div>
                        </v-action-card>
                      </v-card>
                    </v-col>
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
                        :type="'password'"
                        label="รหัสผ่าน"
                        placeholder="กรอกรหัสผ่าน"
                      ></v-text-field>
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="12" sm="5">
                      <v-text-field
                        v-model="confirm_pass"
                        :type="'password'"
                        label="ยืนยัน รหัสผ่าน"
                        placeholder="กรอกรหัสผ่านอีกครั้ง"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-col cols="6" sm="6" class="set_pdleft_0">
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
      items: ["เจ้าหน้าที่ทั่วไป", "ผู้ดูแล", "ผู้ดูแลทั่วไป", "สมาชิก"],
      description: "",
      rules: [(v) => v.length <= 50 || "Max 50 characters"],
      rules_1000: [(v) => v.length <= 1000 || "Max 1000 characters"],
    };
  },
};
</script>

<style scoped>
.dia_user {
  overflow-y: hidden;
}
.content_dialog_user {
  padding: 20px;
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
