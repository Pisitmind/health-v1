<template>
  <div class="dialog_p3_1_c1">
    <br />
    <div class="card1_p3">
      <v-card class="bdr_12">
        <div>
          <v-row>
            <v-col cols="12" sm="1"></v-col>
            <v-col cols="12" sm="2">
              <v-img
                max-height="100"
                max-width="100"
                class="round-img"
                src="https://pbs.twimg.com/profile_images/1002416157280727040/7SjA9KTJ_400x400.jpg"
              ></v-img>
            </v-col>
            <v-col cols="12" sm="4" height="30px">
              <span class="big_font">Supratcha Wiwattanakorn</span>
              <br />
              <span class="grey--text">ตำแหน่ง : ผู้ช่วยสอน</span>
            </v-col>
            <v-col cols="12" sm="5"> </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6">
              <v-row height="35px">
                <v-col cols="12" sm="6">
                  <span class="card3-bot-text">การเดิน</span>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    :items="itm_walk"
                    placeholder="7 วันล่าสุด"
                    outlined
                    dense
                  ></v-select>
                </v-col>
              </v-row>
              <v-row>
                <canvas id="walk_graph_1" width="200px" height="150px"></canvas>
              </v-row>
            </v-col>
            <v-divider vertical></v-divider>
            <v-row>
              <v-row height="35px">
                <v-col cols="12" sm="6">
                  <span class="card3-bot-text">การนั่งนาน</span>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-select
                    :items="itm_walk"
                    placeholder="7 วันล่าสุด"
                    outlined
                    dense
                    color="black"
                  ></v-select>
                </v-col>
              </v-row>
              <v-row>
                <canvas id="walk_graph_2" width="200px" height="150px"></canvas>
              </v-row>
            </v-row>
          </v-row>
          <br />
          <span> ประวัติการแจ้งเตือน </span>
          <span class="grey--text">(การถูกแจ้งเตือนโดยผู้ดูแล)</span>
          <table width="100%">
            <thead>
              <tr
                class="grey--text"
                width="100%"
                cellspacing="0"
                cellpadding=""
              >
                <td>ครั้งที่</td>
                <td>วันที่ , เวลา</td>
                <td>โดย</td>
                <td>หมายเหตุ</td>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in new_item" :key="item.id">
                <td>{{ item.no }}</td>
                <td>{{ item.date_time }}</td>
                <td>{{ item.by }}</td>
                <td>{{ item.dtail }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </v-card>
    </div>
    <br />
  </div>
</template>
