

<template>
  <!-- <div class="bodyinfo">
    <h1>Bodyinfo page</h1>
  </div> -->
  <div class="dialog_p10">
    <!-- Dialog card in  -->
    <div class="pd_20" >
      <v-card >
        <v-card-title>
          <div class="head_of_dialog_p10">
            <div class="head_dialog_c1_p10">
              <div>
                <v-btn color="green darken-1" icon @click="dialog = false">
                  <v-icon>mdi-arrow-left-drop-circle-outline</v-icon>
                </v-btn>
              </div>
              <div class="head_text_content">
                <span class="headline">เพิ่มข่าว</span>
              </div>
            </div>
            <div class="btn_head_p10">
              <v-btn
                class="white--text  mx-2"
                small
                width="120px"
                height="30px"
                color="#AD8DBB"
              >
                <span> บันทึก</span>
              </v-btn>
            </div>
          </div>
        </v-card-title>
        <v-card-text>
        </v-card-text>
        <v-card-content>
          <div class="content_dialog_p10">
            <v-form>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12">
                    <v-text-field
                      v-model="topic"
                      :rules="rules_"
                      counter
                      maxlength="50"
                      hint=""
                      label="หัวข้อข่าว"
                      placeholder="เนื้อหาข่าว"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12">
                    <v-text-field
                      v-model="detail"
                      :rules="rules_1000"
                      counter
                      maxlength="1000"
                      hint=""
                      label="รายละเอียดข่าว"
                      placeholder="เนื้อหาข่าว"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <!-- card image add -->
                <div class="row_card">
                  <v-card class="mini_card1">
                    <v-action-card>
                      <div class="in_card1">
                        <!-- <v-file-input
                      accept="image/*"
                      prepend-icon="mdi-camera-outline"
                      hide-input
                    >
                    </v-file-input> -->
                        <v-btn class="center" icon small>
                          <v-icon color="#8A4532">mdi-camera-outline</v-icon>
                        </v-btn>
                        <span class="card_text">รูปข่าว</span>
                        <p class="sub_text">
                          ขนาดที่ดีที่สุด 960x540 หรือ 16:9
                        </p>
                      </div>
                    </v-action-card>
                  </v-card>
                  <v-card class="mini_card1">
                    <v-action-card>
                      <div class="in_card1">
                        <v-btn class="center" icon small>
                          <v-icon color="#8A4532">mdi-camera-outline</v-icon>
                        </v-btn>
                        <span class="card_text">รูปข่าว</span>
                        <p class="sub_text">
                          ขนาดที่ดีที่สุด 960x540 หรือ 16:9
                        </p>
                      </div>
                    </v-action-card>
                  </v-card>
                  <v-card class="mini_card1">
                    <v-action-card>
                      <div class="in_card1">
                        <v-btn class="center" icon small>
                          <v-icon color="#8A4532">mdi-camera-outline</v-icon>
                        </v-btn>
                        <span class="card_text">รูปข่าว</span>
                        <p class="sub_text">
                          ขนาดที่ดีที่สุด 960x540 หรือ 16:9
                        </p>
                      </div>
                    </v-action-card>
                  </v-card>
                </div>
                <br />
                <v-card-text>
                  <v-file-input
                    prepend-icon=""
                    messages=""
                    placeholder="เลือกไฟล์"
                    label="แนบไฟล์บทความ"
                    outlined
                    dense
                  ></v-file-input>
                  <div style="width=100%;">
                    <v-row>
                      <v-col cols="11" sm="3">
                        <v-dialog
                          ref="dialog"
                          v-model="modal"
                          :return-value.sync="date"
                          persistent
                          width="290px"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              color="#AD8DBB"
                              v-model="date"
                              outlined
                              label="เริ่มกระจายบทความ"
                              prepend-icon="mdi-calendar"
                              readonly
                              v-bind="attrs"
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            v-model="date"
                            no-title
                            scrollable
                            color="#AD8DBB"
                          >
                            <v-spacer></v-spacer>
                            <v-btn text color="primary" @click="modal = false">
                              Cancel
                            </v-btn>
                            <v-btn
                              text
                              color="primary"
                              @click="$refs.dialog.save(date)"
                            >
                              OK
                            </v-btn>
                          </v-date-picker>
                        </v-dialog>
                      </v-col>
                      <v-col cols="11" sm="3">
                        <v-menu
                          ref="menu"
                          v-model="menu2"
                          :close-on-content-click="false"
                          :nudge-right="40"
                          :return-value.sync="time"
                          transition="scale-transition"
                          offset-y
                          max-width="290px"
                          min-width="290px"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="time"
                              label=""
                              placeholder="08:00"
                              prepend-icon="mdi-clock-time-four-outline"
                              readonly
                              outlined
                              v-bind="attrs"
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-time-picker
                            v-if="menu2"
                            v-model="time"
                            full-width
                            @click:minute="$refs.menu.save(time)"
                          ></v-time-picker>
                        </v-menu>
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12" sm="6"> </v-col>
                    </v-row>
                  </div>
                </v-card-text>
              </v-container>
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
      title: "กรอกหัวข้อข่าว",
      description: "",
      rules: [(v) => v.length <= 50 || "Max 50 characters"],
      rules_1000: [(v) => v.length <= 1000 || "Max 1000 characters"],
    };
  },
};
</script>

<style scoped>
.head_of_dialog_p10 {
  display: flex;
  width: 100%;
  padding: 0 15px;
  /* background-color: rgba(0, 0, 0, 0.1); */
}
.head_text_content {
  padding-left: 15px;
}
.head_dialog_c1_p10 {
  width: 50%;
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  /* background-color: rgba(0, 0, 0, 0.3); */
}
.btn_head_p10 {
  display: flex;
  justify-content: flex-end;
  /* background-color: rgba(100, 0, 0, 0.3); */
  width: 50%;
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
  width: 220px;
  height: 130px;
  display: flex;
  justify-content: center;
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
/* .pd_20 {
  padding:20px;
} */
</style>
