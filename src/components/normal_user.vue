<template>
  <div class="normal_user">
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
              <span class="">ผู้ใช้งานระบบ</span>
            </div>
          </div>
          <div class="">
            <v-row>
              <v-col cols="6">
                <div class="text_header">
                  <span class="">จำนวนผู้ใช้งานทั้งหมด 2,800 คน</span>
                </div>
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
          รายชื่อผู้ใช้งาน
        </span>
      </v-card-content>
      <v-card-content>
        <v-container class="">
          <v-row class="pd_content">
            <v-col
              class=""
              v-for="idx in data_au2"
              :key="idx.id"
              cols="12"
              sm="2"
            >
             <v-dialog v-model="dialog_au2" width="85%" scrollable="false">
                <template v-slot:activator="{ on, attrs30 }">
                <v-card class="au_card bdr_12" v-bind="attrs30" v-on="on">
                <div class="img_n_name">
                  <div class="img_avatar">
                    <v-avatar size="84" aspect-ratio="1">
                      <!-- <img src="../assets/user_pic/user7.jpg" alt /> -->
                      <img
                        :src="require('../assets/user_pic/' + idx.picname)"
                      />
                    </v-avatar>
                  </div>
                  <div class="n_card">
                    <span style="color:#88432F;">{{ idx.name }}</span>
                  </div>
                </div>
              </v-card>
                </template>
                <v-card>
                  <v-card-text>
                  <v-card-content>
                      <dia2 />
                  </v-card-content>
                  </v-card-text>
                </v-card>
             </v-dialog>
            </v-col>
          </v-row>
        </v-container>
      </v-card-content>
      
    </v-card>
  </div>
  <!-- v-for="idx in data_au" :key="idx.id"  -->
</template>
<script>
import dia2 from '@/components/dia_user_data_normal.vue';
export default {
  components: {
    dia2,
  },
  data() {
    return {
      dialog: false,
      dialog1: false,

      data_au2: [
        {
          name: "ปัญสิกรณ์ ติยะกร",
          picname: "user1.jpg",
          color: "#B498C0",
          back_col: "#E5E5E5",
        },
        {
          name: "ปัญสิกรณ์ ติยะกร",
          picname: "user2.jpg",
          color: "#B498C0",
          back_col: "#E5E5E5",
        },
        {
          name: "ปัญสิกรณ์ ติยะกร",
          picname: "user3.jpg",
          color: "#B498C0",
          back_col: "#E5E5E5",
        },
        {
          name: "ปัญสิกรณ์ ติยะกร",
          picname: "user4.jpg",
          color: "#B498C0",
          back_col: "#E5E5E5",
        },
        {
          name: "ปัญสิกรณ์ ติยะกร",
          picname: "user6.jpg",
          color: "#B498C0",
          back_col: "#E5E5E5",
        },
        {
          name: "ปัญสิกรณ์ ติยะกร",
          picname: "user7.jpg",
          color: "#B498C0",
          back_col: "#E5E5E5",
        },
        {
          name: "ปัญสิกรณ์ ติยะกร",
          picname: "user8.jpg",
          color: "#B498C0",
          back_col: "#E5E5E5",
        },
        {
          name: "ปัญสิกรณ์ ติยะกร",
          picname: "user9.jpg",
          role: "เจ้าหน้าที่ทั่วไป",
          color: "#B498C0",
          back_col: "#E5E5E5",
        },
        {
          name: "ปัญสิกรณ์ ติยะกร",
          picname: "user10.jpg",
          color: "#B498C0",
          back_col: "#E5E5E5",
        }, 
        {
          name: "ปัญสิกรณ์ ติยะกร",
          picname: "user11.jpg",
          color: "#B498C0",
          back_col: "#E5E5E5",
        }, 
        {
          name: "ปัญสิกรณ์ ติยะกร",
          picname: "user12.jpg",
          color: "#B498C0",
          back_col: "#E5E5E5",
        },
        {
          name: "ปัญสิกรณ์ ติยะกร",
          picname: "user1.jpg",
          color: "#B498C0",
          back_col: "#E5E5E5",
        },
        {
          name: "ปัญสิกรณ์ ติยะกร",
          picname: "user2.jpg",
          color: "#B498C0",
          back_col: "#E5E5E5",
        },
        {
          name: "ปัญสิกรณ์ ติยะกร",
          picname: "user3.jpg",
          color: "#B498C0",
          back_col: "#E5E5E5",
        },
        {
          name: "ปัญสิกรณ์ ติยะกร",
          picname: "user4.jpg",
          color: "#B498C0",
          back_col: "#E5E5E5",
        },
        {
          name: "ปัญสิกรณ์ ติยะกร",
          picname: "user6.jpg",
          color: "#B498C0",
          back_col: "#E5E5E5",
        },
        {
          name: "ปัญสิกรณ์ ติยะกร",
          picname: "user7.jpg",
          color: "#B498C0",
          back_col: "#E5E5E5",
        },
        {
          name: "ปัญสิกรณ์ ติยะกร",
          picname: "user8.jpg",
          color: "#B498C0",
          back_col: "#E5E5E5",
        },
        {
          name: "ปัญสิกรณ์ ติยะกร",
          picname: "user9.jpg",
          role: "เจ้าหน้าที่ทั่วไป",
          color: "#B498C0",
          back_col: "#E5E5E5",
        },
        {
          name: "ปัญสิกรณ์ ติยะกร",
          picname: "user10.jpg",
          color: "#B498C0",
          back_col: "#E5E5E5",
        }, 
        {
          name: "ปัญสิกรณ์ ติยะกร",
          picname: "user11.jpg",
          color: "#B498C0",
          back_col: "#E5E5E5",
        }, 
        {
          name: "ปัญสิกรณ์ ติยะกร",
          picname: "user12.jpg",
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
  padding: 0 20px 20px 20px;
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
  justify-content:space-around;
  height: 100%;
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
