<template>
  <v-container grid-list-lg-xl class="boards">
    <!-- <div class="boards"> -->
    <div class="card_1_p10">
      <v-card class="bdr_12" height="1000">
        <v-card-title>
          <div class="head_card_p10">
            <div>
              <v-btn color="black darken-1" icon large @click="dialog = false">
                <img
                  height="40px"
                  class="filter-white"
                  src="../assets/icon/icon_board.svg"
                  alt="boards"
                />
              </v-btn>
            </div>
            <div class="text_header">
              <span class="set_fz_topic">บทความ / สาระสุขภาพ</span>
            </div>
          </div>
        </v-card-title>
        <v-card-text>
          <div class="">
            <v-row>
              <v-col cols="12" sm="5" md="6" lg="6" xl="6">
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
                      <span>+ เพิ่มบอร์ด</span>
                    </v-btn>
                  </template>
                  <v-card>
                    <v-card-title>
                      <div class="head_of_dialog_p10">
                        <div class="head_dialog_c1_p10">
                          <div>
                            <v-btn
                              color="#8a4532"
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
                            <span class="headline">เพิ่มบทความ</span>
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
                    <dialog_p10 />
                  </v-card>
                </v-dialog>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="12" sm="5" md="5" lg="5" xl="5">
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
        </v-card-text>
        <v-card-content>
          <div class="content_dialog_page_bot">
            <div class="table_news_p10">
              <v-simple-table
                class="customers"
                border="0"
                cellpadding="0"
                cellspacing="0"
              >
                <template v-slot:default>
                  <thead class="none_color">
                    <tr class="" justify="space-around">
                      <th width="" class="text-left">
                        วันที่
                      </th>
                      <th width="" class="text-left">
                        เวลา
                      </th>
                      <th width="40%" class="text-left">
                        หัวข้อบทความ
                      </th>
                      <th width="" class="text-left">
                        กลุ่มบทความ
                      </th>
                      <th width="" class="text-center">
                        ยอดผู้อ่าน
                      </th>
                      <th width="" class="text-left">
                        โดย
                      </th>
                      <th width="" class="text-left"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      class="text-left set_border_none"
                      v-for="item in data_p10"
                      :key="item.id"
                    >
                      <td>{{ item.date }}</td>
                      <td>{{ item.time }}</td>
                      <td class=" text-truncate" style="max-width: 100px;">
                        {{ item.topic }}
                      </td>
                      <td>
                        {{ item.group }}
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
      <div class="hid">
        <!-- <div class="show"> -->
        <canvas id="myChart111" width="" height="90px"></canvas>
      </div>
    </div>
    <!-- </div> -->
  </v-container>
</template>
<script
  src="https://kit.fontawesome.com/4c16a2e0ed.js"
  crossorigin="anonymous"
></script>
<script>
import Chart from "chart.js";
import dialog_p10 from "@/components/dialog_p10.vue";
export default {
  components: {
    dialog_p10,
  },
  mounted: function() {
    const labels = [" ", " "];
    // const labels = ["male", "female"];
    // const images = [ require("../assets/icon/icon_men.svg"),
    //   "https://i.stack.imgur.com/2RAv2.png",
    // ];
    const images = [
      require("../assets/icon/icon_men_sm.svg"),
      require("../assets/icon/icon_women_sm.svg"),
    ];
    const values = [48, 56];

    new Chart(document.getElementById("myChart111"), {
      type: "horizontalBar",
      plugins: [
        {
          afterDraw: (chart) => {
            var ctx = chart.chart.ctx;
            var yAxis = chart.scales["y-axis-0"];
            var xAxis = chart.scales["x-axis-0"];
            yAxis.ticks.forEach((value, index) => {
              var y = yAxis.getPixelForTick(index);
              var image = new Image();
              (image.src = images[index]),
                ctx.drawImage(image, xAxis.bottom - 270, y - 10);
            });
          },
        },
      ],
      data: {
        labels: labels,
        datasets: [
          {
            label: "My Dataset",
            data: values,
            backgroundColor: ["blue", "pink"],
          },
        ],
      },
      options: {
        responsive: true,
        legend: {
          display: false,
        },
        layout: {
          padding: {
            left: 50,
            right: 0,
            top: 0,
            bottom: 0,
          },
        },
        scales: {
          xAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                padding: 40,
              },
            },
          ],
        },
      },
    });

    // 'ผอมมาก','ปกติ','อวบ','อ้วน ระยะที่1','อ้วน ระยะที่2'
  },
  data() {
    return {
      dialog: false,
      dialog1: false,
      data_p10: [
        {
          date: "21 ก.ย.",
          time: "16:30",
          topic: "การรักษาสุขภาพในช่วงฤดูร้อนนั้นทำได้โดยการ....",
          group: "จัดระเบียบความคิด",
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
          group: "สร้างกล้ามเนื้อ",
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
          group: "ผ่อนคลาย",
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
          group: "จัดระเบียบความคิด",
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
.card_1_p10 {
  padding: 10px;
}

.head_of_dialog_p10 {
  display: flex;
  width: 100%;
  padding: 0 15px;
  padding-top: 20px;
  justify-content: space-between;
}
.head_text_content {
  padding-left: 15px;
}
.head_dialog_c1_p10 {
  width: 50%;
  display: flex;
  flex-direction: row;
  vertical-align: middle;
  /* justify-content: space-between; */
  /* background-color: rgba(0, 0, 0, 0.3); */
}

.head_card_p10 {
  display: flex;
  justify-content: center;
}
.text_header {
  display: flex;
  text-align: center;
  align-items: center;
  /* background
  -color: rgba(0, 0, 0, 0.1); */
}
.table_news_p10 {
  padding: 16px;
}
.tbody tr:not(:last-child) {
  border-bottom: none;
}
tbody[data-v-f1e5daf2] {
  border-collapse: collapse !important;
  animation: none;
  border: none;
}
.customers .v-table tbody tr:not(:last-child) {
  border-bottom: none;
}
/* .theme--light.v-table tbody tr:not(:last-child) {
  border-bottom: none;
} */
.v-text-field .v-input__control .v-input__slot {
  min-height: auto !important;
  display: flex !important;
  align-items: center !important;
}
.headline {
  color: #8a4532;
  line-height: normal;
}
.customers tr:nth-child(odd) {
  background-color: #f2f2f2;
  /* border-bottom: 0 solid #999999; */
  border-bottom: none;
}
.none_color tr:nth-child(odd) {
  background-color: white;
  /* border-bottom: 0 solid #999999; */
  border-bottom: none;
}
.customers td {
  border: none !important;
}
.customers {
  width: 100%;
  /* overflow-x: scroll; */
}
.v-card__title {
  padding: 20px;
}

/* table {
  border-collapse: collapse !important;
}
tbody {
  border-collapse: collapse !important;
} */
/* v-simple-table {
  border: hidden !important;
  border: 0px solid #ccc;
  border-collapse: collapse;
}
.table.v-table.tbody.td,
table.v-table.tbody.th {
  border: hidden !important;
} */

@media (max-width: 320px) {
  .head_of_dialog_p10 {
    display: flex;
    flex-direction: column;
  }
  .headline {
    font-size: 1.8rem !important;
    white-space: nowrap;
  }

  .set_fz_topic {
    font-size: 1.9vh;
  }
  .btn_head_p10 {
    display: flex;
    justify-content: center;
  }
}
</style>
