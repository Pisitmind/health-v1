<template>
  <div class="authorities">
    <v-card class="bdr_12">
      <v-card-title>
        <div class="head_title_card_user">
          <div class="head_card_user">
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
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      class="white--text  mx-2"
                      small
                      width="120px"
                      height="30px"
                      color="#AD8DBB"
                      v-bind="attrs"
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
      <v-card-content>
        <v-container class="">
          <v-row class="pd_content">
            <v-col
              class=""
              v-for="idx in data_au"
              :key="idx.id"
              cols="12"
              sm="2"
            >
              <v-card class="au_card bdr_12">
                <div class="img_n_name">
                  <div class="img_avatar">
                    <v-avatar size="84" aspect-ratio="1">
                      <!-- <img src="../assets/user_pic/user7.jpg" alt /> -->
                      <img :src="idx.pic" />
                    </v-avatar>
                  </div>
                  <div class="n_card">
                    <span style="color:#88432F;">{{ idx.name }}</span>
                  </div>
                </div>

                <div class="rol_card ">
                  <span style="color:#B79BC4;">{{ idx.role }}</span>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card-content>
    </v-card>
  </div>
  <!-- v-for="idx in data_au" :key="idx.id"  -->
</template>
<script>
import dia_user from "@/components/dia_user.vue";
export default {
  components: {
    dia_user,
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
          role: "ผู้ดูแลหลัก",
          color: "#B498C0",
          back_col: "#E5E5E5",
        },
        {
          name: "ปัญสิกรณ์ ติยะกร",
          pic: "https://i.ibb.co/kJbWBrQ/user2.jpg",
          // pic: "./src/assets/user_pic/user2.jpg",
          role: "ผู้ดูแลหลัก",
          color: "#B498C0",
          back_col: "#E5E5E5",
        },
        {
          name: "ปัญสิกรณ์ ติยะกร",
          pic: "https://i.ibb.co/hsNP4R5/user3.jpg",
          role: "ผู้ดูแล",
          color: "#B498C0",
          back_col: "#E5E5E5",
        },
        {
          name: "ปัญสิกรณ์ ติยะกร",
          pic: "https://i.ibb.co/mJz1Tm9/user4.jpg",
          role: "ผู้ดูแล",
          color: "#B498C0",
          back_col: "#E5E5E5",
        },
        {
          name: "ปัญสิกรณ์ ติยะกร",
          pic: "https://i.ibb.co/1mFyKnY/user5.jpg",
          role: "ผู้ดูแล",
          color: "#B498C0",
          back_col: "#E5E5E5",
        },
        {
          name: "ปัญสิกรณ์ ติยะกร",
          pic: "https://i.ibb.co/zxDCB0S/user6.jpg",
          role: "ผู้ดูแล",
          color: "#B498C0",
          back_col: "#E5E5E5",
        },
        {
          name: "ปัญสิกรณ์ ติยะกร",
          pic: "https://i.ibb.co/zxDCB0S/user6.jpg",
          // pic:
          //   "C:/Users/OhoMindZa/Documents/Banana/Demo/demo-health-1/health-v1/src/assets/user_pic/user7.jpg",
          role: "เจ้าหน้าที่ทั่วไป",
          color: "#B498C0",
          back_col: "#E5E5E5",
        },
        {
          name: "ปัญสิกรณ์ ติยะกร",
          pic: "https://i.ibb.co/zxDCB0S/user6.jpg",
          // pic:
          //   "C:/Users/OhoMindZa/Documents/Banana/Demo/demo-health-1/health-v1/src/assets/user_pic/user8.jpg",
          role: "เจ้าหน้าที่ทั่วไป",
          color: "#B498C0",
          back_col: "#E5E5E5",
        },
        {
          name: "ปัญสิกรณ์ ติยะกร",
          pic: "https://i.ibb.co/zxDCB0S/user6.jpg",
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
.authorities {
  padding: 20px;
}
.bg_white {
  background-color: white;
}
.pd_content {
  padding: 0 15px;
}
.n_card {
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
</style>
