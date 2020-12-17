<template>
  <div class="authorities">
    <v-card class="bdr_12">
      <v-card-title>
        <div class="head_title_card_user">
          <div class="head_card_user set_center">
            <div>
              <v-btn color="green darken-1" icon large @click="dialog = false">
                <img
                  height="40px"
                  class="filter-white"
                  src="../assets/icon/icon_datapersonsa.svg"
                  alt="gruop"
                />
              </v-btn>
            </div>
            <div class="text_header">
              <span class="">เจ้าหน้าที่</span>
            </div>
          </div>
          <div class="">
            <v-row>
              <v-col cols="6">
                <v-dialog v-model="dialog1" width="80%">
                  <template v-slot:activator="{ on, attrs_au }">
                    <v-btn
                      class="white--text  mx-2"
                      small
                      width="120px"
                      height="30px"
                      color="#AD8DBB"
                      v-bind="attrs_au"
                      v-on="on"
                    >
                      <span>+ เพิ่มเจ้าหน้าที่</span>
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <div class="head_of_dialog_user">
                        <div class="head_dialog_c1_user">
                          <div>
                            <v-btn
                              color="green darken-1"
                              icon
                              @click="dialog1 = false"
                            >
                              <img
                                height="30px"
                                class="filter-white"
                                src="../assets/icon/icon_prev.svg"
                                alt="prev"
                              />
                            </v-btn>
                          </div>
                          <div class="head_text_content">
                            <span class="headline">เพิ่มเจ้าหน้าที่</span>
                          </div>
                        </div>
                        <div class="btn_head_user">
                          <v-btn
                            class="white--text  mx-2"
                            small
                            width="120px"
                            height="30px"
                            color="#AD8DBB"
                            @click="dialog1 = false"
                          >
                            <span> เพิ่ม</span>
                          </v-btn>
                        </div>
                      </div>
                    </v-card-title>
                    <dia_user />
                  </v-card>
                </v-dialog>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="message"
                  outlined
                  clearable
                  label="ค้นหา"
                  type="text"
                  height="40px"
                  dense
                >
                  <template v-slot:append>
                    <button>
                      <v-icon center>
                        mdi-magnify
                      </v-icon>
                    </button>
                  </template>
                </v-text-field>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-card-title>

      <v-card-content class="pd_h_card">
        <span>
          รายชื่อเจ้าหน้าที่
        </span>
      </v-card-content>
      <v-card-content style="background-color: transparent;">
        <div class="">
          <v-row class="pd_content">
            <v-col
              class=""
              v-for="idx in data_au"
              :key="idx.id"
              cols="12"
              sm="2"
            >
              <v-dialog v-model="dialog_au" width="85%" scrollable="false">
                <template v-slot:activator="{ on, attrs29 }">
                  <v-card class="au_card bdr_12" v-bind="attrs29" v-on="on">
                    <div class="img_n_name">
                      <!-- <v-responsive :aspect-ratio="16 / 9"> -->
                      <div class="img_avatar">
                        <v-avatar
                          size="84"
                          class="img_set_ratio"
                          style="text-align:center;"
                        >
                          <!-- <img src="../assets/user_pic/user7.jpg" alt /> -->
                          <img
                            class="set_size"
                            :src="require('../assets/user_pic/' + idx.picname)"
                          />
                        </v-avatar>
                      </div>
                      <!-- </v-responsive> -->
                      <div class="n_card">
                        <span style="color:#88432F;">{{ idx.name }}</span>
                      </div>
                    </div>

                    <div class="rol_card ">
                      <span style="color:#B79BC4;">{{ idx.role }}</span>
                    </div>
                  </v-card>
                </template>
                <v-card>
                  <v-card-text>
                    <div>
                      <dia_user_data />
                    </div>
                  </v-card-text>
                </v-card>
              </v-dialog>
            </v-col>
          </v-row>
          <v-card>
            <div class="set_size hid">
              <img
                aspect-ratio="1.5"
                position="absolute"
                width="80px"
                height="80px"
                sizes="85"
                class="rounded-circle set_size"
                :src="require('../assets/user_pic/user2.jpg')"
              />
            </div>
          </v-card>
        </div>
      </v-card-content>
      <div style="padding-bottom:40px;"></div>
      <div class="a">
        <v-card class="test" outlined width="400px" height="100px">
          <span>test</span>
        </v-card>
      </div>
      <div style="padding-bottom:40px;"></div>
    </v-card>
  </div>
  <!-- v-for="idx in data_au" :key="idx.id"  -->
</template>
<script>
import dia_user from "@/components/dia_user.vue";
import dia_user_data from "@/components/dia_user_data.vue";
export default {
  components: {
    dia_user,
    dia_user_data,
  },
  data() {
    return {
      dialog: false,
      dialog1: false,

      data_au: [
        {
          name: "ปัญสิกรณ์ ติยะกร",
          // pic: "C:/Users/OhoMindZa/Documents/Banana/Demo/demo-health-1/health-v1/src/assets/user_pic/user1.jpg",
          pic: "https://i.ibb.co/D7pBNZr/image.png",
          picname: "user1.jpg",
          role: "ผู้ดูแลหลัก",
          color: "#B498C0",
          back_col: "#E5E5E5",
        },
        {
          name: "ปัญสิกรณ์ ติยะกร",
          pic: "https://i.ibb.co/kJbWBrQ/user2.jpg",
          picname: "user2.jpg",
          // pic: "./src/assets/user_pic/user2.jpg",
          role: "ผู้ดูแลหลัก",
          color: "#B498C0",
          back_col: "#E5E5E5",
        },
        {
          name: "ปัญสิกรณ์ ติยะกร",
          pic: "https://i.ibb.co/hsNP4R5/user3.jpg",
          picname: "user3.jpg",
          role: "ผู้ดูแล",
          color: "#B498C0",
          back_col: "#E5E5E5",
        },
        {
          name: "ปัญสิกรณ์ ติยะกร",
          pic: "https://i.ibb.co/mJz1Tm9/user4.jpg",
          picname: "user4.jpg",
          role: "ผู้ดูแล",
          color: "#B498C0",
          back_col: "#E5E5E5",
        },
        {
          name: "ปัญสิกรณ์ ติยะกร",
          pic: "https://i.ibb.co/1mFyKnY/user5.jpg",
          picname: "user6.jpg",
          role: "ผู้ดูแล",
          color: "#B498C0",
          back_col: "#E5E5E5",
        },
        {
          name: "ปัญสิกรณ์ ติยะกร",
          pic: "https://i.ibb.co/zxDCB0S/user6.jpg",
          picname: "user7.jpg",
          role: "ผู้ดูแล",
          color: "#B498C0",
          back_col: "#E5E5E5",
        },
        {
          name: "ปัญสิกรณ์ ติยะกร",
          pic: "https://i.ibb.co/zxDCB0S/user6.jpg",
          picname: "user8.jpg",
          // pic:
          //   "C:/Users/OhoMindZa/Documents/Banana/Demo/demo-health-1/health-v1/src/assets/user_pic/user7.jpg",
          role: "เจ้าหน้าที่ทั่วไป",
          color: "#B498C0",
          back_col: "#E5E5E5",
        },
        {
          name: "ปัญสิกรณ์ ติยะกร",
          pic: "https://i.ibb.co/zxDCB0S/user6.jpg",
          picname: "user9.jpg",
          // pic:
          //   "C:/Users/OhoMindZa/Documents/Banana/Demo/demo-health-1/health-v1/src/assets/user_pic/user8.jpg",
          role: "เจ้าหน้าที่ทั่วไป",
          color: "#B498C0",
          back_col: "#E5E5E5",
        },
        {
          name: "ปัญสิกรณ์ ติยะกร",
          pic: "https://i.ibb.co/zxDCB0S/user6.jpg",
          picname: "user10.jpg",
          // pic:
          //   "C:/Users/OhoMindZa/Documents/Banana/Demo/demo-health-1/health-v1/src/assets/user_pic/user9.jpg",
          role: "เจ้าหน้าที่ทั่วไป",
          color: "#B498C0",
          back_col: "#E5E5E5",
        },
      ],
    };
  },
};
</script>

<style scoped>
.y-scroll-disabled {
  overflow-y: hidden;
}
.authorities {
  padding: 20px;
}
.content_dia_admin_0 {
  overflow-y: hidden !important;
}
.bg_white {
  background-color: white;
}
.pd_content {
  padding: 0 15px;
}
.n_card {
  padding-top: 10px;
  text-align: center;
}
.rol_card {
  text-align: center;
  /* align-self: start; */
}
.head_card_user {
  display: flex;
  justify-content: left;
}
.head_title_card_user {
  width: 100%;
}
.head_of_dialog_user {
  display: flex;
  width: 100%;
  padding: 0 15px;
}
.pd_h_card {
  /* color: grey; */
  font-size: bold;
  font-size: 16px;
  padding: 20px;
}
.head_dialog_c1_user {
  width: 50%;
  display: flex;
  flex-direction: row;
  /* background-color: rgba(0, 0, 0, 0.3); */
}
.head_text_content {
  padding-left: 15px;
  color: #88432f;
}
.btn_head_user {
  display: flex;
  justify-content: flex-end;
  width: 50%;
}
.exam_card {
  width: 50px;
  height: 50px;
}
.img_n_name {
  display: flex;
  flex-direction: column;
}
.au_card {
  width: 100%;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.img_avatar {
  display: flex;
  justify-content: center;
}
.set_img {
  display: block;
  margin: 0 auto;
}
/* .img_set_ratio {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
} */
.set_pdleft_0 {
  padding-left: 0;
}
.set_size {
  object-fit: cover;
  object-position: top center;
  /* width: 300px; */
  /* height: 300px; */
}

.test {
  border: 4px solid #935442;
  border-style: dashed;
}
</style>
