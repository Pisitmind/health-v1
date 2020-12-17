<template>
  <div class="news">
    <div class="card_1_p9">
      <v-card class="bdr_12" height="1000">
        <v-card-title>
          <div class="head_title_card_p9">
            <div class="head_card_p9">
              <div>
                <v-btn
                  color="green darken-1"
                  icon
                  large
                  @click="dialog = false"
                >
                  <img
                    height="40px"
                    class="filter-white"
                    src="../assets/icon/icon_news.svg"
                    alt="news"
                  />
                </v-btn>
              </div>
              <div class="text_header">
                <span class="">ข่าวสาร</span>
              </div>
            </div>
          </div>
        </v-card-title>
        <v-card-text>
          <div class="">
            <v-row>
              <v-col cols="6">
                <v-dialog v-model="dialog1" width="">
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
                      <span>+ เพิ่มข่าว</span>
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <div class="head_of_dialog_p9">
                        <div class="head_dialog_c1_p9">
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
                            @click="dialog1 = false"
                          >
                            <span> บันทึก</span>
                          </v-btn>
                        </div>
                      </div>
                    </v-card-title>
                    <dialog_p9 />
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
          <!-- </div> -->
        </v-card-text>
        <!-- <v-card-text>
          <div class="">
            <v-row>
              <v-col cols="6">
                <v-btn
                  class="white--text  mx-2"
                  small
                  width="120px"
                  height="30px"
                  color="#AD8DBB"
                >
                  <span>+ เพิ่มข่าว</span>
                </v-btn></v-col
              >
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
        </v-card-text> -->
        <v-card-content>
          <div class="content_dialog_page_bot">
            <div class="table_news_p9">
              <v-simple-table class="customers">
                <template v-slot:default>
                  <thead class="none_color">
                    <tr class="">
                      <th width="10%" class="text-left">
                        วันที่
                      </th>
                      <th width="10%" class="text-left">
                        เวลา
                      </th>
                      <th width="20%" class="text-left">
                        หัวข้อข่าว
                      </th>
                      <th width="20%" class="text-center">
                        ยอดผู้อ่าน
                      </th>
                      <th width="20%" class="text-left">
                        โดย
                      </th>
                      <th width="10%" class="text-left"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      class="text-left"
                      v-for="item in data_p9"
                      :key="item.id"
                    >
                      <td>{{ item.date }}</td>
                      <td>{{ item.time }}</td>
                      <td class="text-truncate" style="max-width: 140px;">
                        {{ item.topic }}
                      </td>
                      <td class="text-center">{{ item.viewer }}</td>
                      <td class="text-left">{{ item.by }}</td>
                      <td class="text-right">
                        <v-btn
                          :style="{
                            color: item.color,
                            backgroundColor: item.back_col,
                          }"
                          elevation="0"
                          small
                        >
                          {{ item.edit_bot }}
                        </v-btn>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
              <v-divider></v-divider>
              <div></div>
            </div>
          </div>
          <!-- <canvas id="graphline" width="" height="40px"></canvas> -->
        </v-card-content>
      </v-card>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js";
import dialog_p9 from "@/components/dialog_p9.vue";
export default {
  components: {
    dialog_p9,
  },
  mounted: function() {
    var ctx_dia_c1_p3 = document
      .getElementById("graph1_c1_p3")
      .getContext("2d");
    var bar_dia_c1_p3 = new Chart(ctx_dia_c1_p3, {
      type: "bar",
      data: {
        datasets: [
          {
            label: "Steps",
            backgroundColor: "#A3A1FB",
            data: [139, 384, 223, 189, 158, 318, 93],
          },
          {
            label: "Setting",
            backgroundColor: "#FFDA83",
            data: [385, 259, 196, 230, 106, 237, 107],
          },
        ],
        labels: ["7/8", "7/9", "7/10", "7/11", "7/12", "7/13", "7/14"],
      },
      options: {
        responsive: true,
        legend: {
          display: false,
        },
        scales: {
          xAxes: [{ stacked: true }],
          yAxes: [
            {
              stacked: true,
              ticks: {
                reverse: false,
                min: 0,
                max: 1000,
                stepSize: 200,
              },
            },
          ],
        },
      },
    });
    console.log(bar_dia_c1_p3);

    var ctx_dia_c2 = document
      .getElementById("graph_dialog_c2")
      .getContext("2d");
    var bar_dia_c2 = new Chart(ctx_dia_c2, {
      type: "line",
      options: {
        legend: {
          display: false,
        },
        tooltips: {
          enabled: false,
        },
        scales: {
          yAxes: [
            {
              display: false,
              ticks: {
                suggestedMin: 0, // minimum will be 0, unless there is a lower value.
                stepValue: 5,
                max: 100,
              },
            },
          ],
          xAxes: [
            {
              display: false,
            },
          ],
        },
      },
      data: {
        datasets: [
          {
            label: "TODAY",
            backgroundColor: "#3db161",
            data: [20, 35, 20, 40, 35, 50, 42, 50, 80],
          },
        ],
        labels: [
          "00:00",
          "03:00",
          "06:00",
          "09:00",
          "12:00",
          "15:00",
          "18:00",
          "21:00",
          "00:00",
        ],
      },
    });
    console.log(bar_dia_c2);
    var ctx_dia_c3 = document
      .getElementById("graph_dialog_c3")
      .getContext("2d");
    var bar_dia_c3 = new Chart(ctx_dia_c3, {
      type: "line",
      options: {
        legend: {
          display: false,
        },
        tooltips: {
          enabled: false,
        },
        scales: {
          yAxes: [
            {
              display: false,
              ticks: {
                suggestedMin: 0, // minimum will be 0, unless there is a lower value.
                stepValue: 5,
                max: 100,
              },
            },
          ],
          xAxes: [
            {
              display: false,
            },
          ],
        },
      },
      data: {
        datasets: [
          {
            label: "TODAY",
            backgroundColor: "purple",
            data: [14, 73, 33, 43, 74, 66, 76, 24, 72],
          },
        ],
        labels: [
          "00:00",
          "03:00",
          "06:00",
          "09:00",
          "12:00",
          "15:00",
          "18:00",
          "21:00",
          "00:00",
        ],
      },
    });
    console.log(bar_dia_c3);

    var ctx_line = document.getElementById("graphline").getContext("2d");
    var bar_line = new Chart(ctx_line, {
      type: "line",
      options: {
        scales: {
          yAxes: [
            {
              display: false,
            },
          ],
        },
      },
      data: {
        datasets: [
          {
            data: [10, 10, 10, 10, 10],
            // backgroundColor:['purple'],
            backgroundColor: ["purple", "blue", "green", "orange", "red"],
            above: ["purple", "blue", "green", "orange", "red"], // Area will be red above the origin
            below: ["purple", "blue", "green", "orange", "red"],
            borderColor: ["purple", "blue", "green", "orange", "red"],
          },
        ],
        labels: ["0", "56.7", "76.6", "85.8", "98.0"],
      },
    });
    console.log(bar_line);

    // 'ผอมมาก','ปกติ','อวบ','อ้วน ระยะที่1','อ้วน ระยะที่2'
  },
  data() {
    return {
      dialog: false,
      dialog1: false,
      data_p9: [
        {
          date: "21 ก.ย.",
          time: "16:30",
          topic: "การรักษาสุขภาพในช่วงฤดูร้อนนั้นทำได้โดยการเอาตัวไปจุ่มน้ำ...",
          viewer: "27",
          by: "จันทรา ทิพย์วานร",
          edit_bot: "ดู และแก้ไข",
          color: "#B498C0",
          back_col: "#E5E5E5",
        },
        {
          date: "20 ก.ย.",
          time: "15:17",
          topic: "รายงานล่าสุดจากสำนักข่าวท้องที่นั้นมาจาาการรายงาน....",
          viewer: "32",
          by: "จันทรา ทิพย์วานร",
          edit_bot: "ดู และแก้ไข",
          color: "#B498C0",
          back_col: "#E5E5E5",
        },
        {
          date: "19 ก.ย.",
          time: "12:04",
          topic: "โรคระบาด ตัวใหม่ล่าสุดและวิธีควบคุมนั้น อ่านต่อได้ข้างใน....",
          viewer: "46",
          by: "จันทรา ทิพย์วานร",
          edit_bot: "ดู และแก้ไข",
          color: "#B498C0",
          back_col: "#E5E5E5",
        },
        {
          date: "18 ก.ย.",
          time: "09:04",
          topic:
            "ติดตาม วิธีการออกกำลังกายให้ได้ผลใน 7 วัน อ่านต่อได้ข้างใน....",
          viewer: "43",
          by: "ยูริกา  นามาศิริ",
          edit_bot: "ดู และแก้ไข",
          color: "#B498C0",
          back_col: "#E5E5E5",
        },
      ],
    };
  },
};
</script>

<style scoped>
.card_1_p9 {
  padding: 20px;
}

.head_of_dialog_p9 {
  display: flex;
  width: 100%;
  padding: 0 15px;
  /* background-color: rgba(0, 0, 0, 0.1); */
}
.head_text_content {
  padding-left: 15px;
}
.head_dialog_c1_p9 {
  display: flex;
  width: 100%;
  padding: 20px;
}
.btn_head_p10 {
  padding: 20px;
}

.head_card_p9 {
  display: flex;
  justify-content: left;
}
.text_header {
  display: flex;
  text-align: center;
  align-items: center;
  /* background
  -color: rgba(0, 0, 0, 0.1); */
}

.v-text-field .v-input__control .v-input__slot {
  min-height: auto !important;
  display: flex !important;
  align-items: center !important;
}
.head_title_card_p9 {
  display: flex !important;
  flex-direction: column;
  width: 100% !important;
}
/* background-color: rgba(0, 0, 0, 0.2); */
.table_news_p9 {
  padding: 16px;
}
.headline {
  color: #8a4532;
}
.customers tr:nth-child(odd) {
  background-color: #f2f2f2;
}
.none_color tr:nth-child(odd) {
  background-color: white;
}
.customers td {
 border:none !important;
}
</style>
