<template>
  <div class="authorities">
    i'm authorities
    <v-card>
      <v-card-title>
        <div class="head_title_card_user">
          <div class="head_card_user">
            <div>
              <v-btn color="green darken-1" icon large @click="dialog = false">
                <v-icon>mdi-account-group-outline</v-icon>
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
                              <v-icon
                                >mdi-arrow-left-drop-circle-outline</v-icon
                              >
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
                >
                  <template v-slot:append>
                    <v-icon center>
                      mdi-magnify
                    </v-icon>
                  </template>
                </v-text-field>
              </v-col>
            </v-row>
          </div>
        </div>
      </v-card-title>

      <v-card-content>
        <span>
          รายชื่อเจ้าหน้าที่
        </span>
      </v-card-content>
      <v-card-content>
        <v-container class="grey lighten-5">
          <v-row>
            <v-col v-for="idx in data_au" :key="idx.id" cols="12" sm="2">
              <v-card class="au_card" elevation="2" outlined>
                  <v-card>
                    <v-img src="https://picsum.photos/510/300?random"></v-img>
                  </v-card>
                <div class="n_card">
                  <span style="color:#88432F;">{{ idx.name }}</span>
                </div>
                <div class="rol_card ">
                  <span  style="color:#B79BC4;">{{ idx.role }}</span>
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
          name: "ยูริกา นามาศรี",
          pic: "./src/assets/user_pic/au1.jpg",
          role: "ผู้ดูแลหลัก",
          color: "#B498C0",
          back_col: "#E5E5E5",
        },
        {
          name: "ยูริกา นามาศรี",
          pic: "./src/images/au2.jpg",
          role: "ผู้ดูแลหลัก",
          color: "#B498C0",
          back_col: "#E5E5E5",
        },
        {
          name: "ยูริกา นามาศรี",
          pic: "./src/images/au2.jpg",
          role: "ผู้ดูแล",
          color: "#B498C0",
          back_col: "#E5E5E5",
        },
        {
          name: "ยูริกา นามาศรี",
          pic: "./src/images/au2.jpg",
          role: "ผู้ดูแล",
          color: "#B498C0",
          back_col: "#E5E5E5",
        },
        {
          name: "ยูริกา นามาศรี",
          pic: "./src/images/au2.jpg",
          role: "ผู้ดูแล",
          color: "#B498C0",
          back_col: "#E5E5E5",
        },
        {
          name: "ยูริกา นามาศรี",
          pic: "./src/images/au2.jpg",
          role: "ผู้ดูแล",
          color: "#B498C0",
          back_col: "#E5E5E5",
        },
        {
          name: "ยูริกา นามาศรี",
          pic: "./src/images/au2.jpg",
          role: "เจ้าหน้าที่ทั่วไป",
          color: "#B498C0",
          back_col: "#E5E5E5",
        },
        {
          name: "ยูริกา นามาศรี",
          pic: "./src/images/au2.jpg",
          role: "เจ้าหน้าที่ทั่วไป",
          color: "#B498C0",
          back_col: "#E5E5E5",
        },
        {
          name: "ยูริกา นามาศรี",
          pic: "./src/images/au2.jpg",
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

.n_card{
    text-align: center;
}
.rol_card{
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
.au_card {
  width: 100%;
}
</style>
