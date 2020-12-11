<template>
  <div class="dialog_p3_1_c1">
    <div class="card1_p3">
      <v-card class="bdr_12" elevation="0">
        <div class="card1_p3_root">
          <div class="card1_p3_headNsub">
            <!-- head lr -->
            <div class="card1_head_lr">
              <!-- head left div -->
              <div class="head_card1_p3_l">
                <!-- head left -->
                <div class="head_card1_p3_l_title">
                  <!-- การก้าว+icon -->
                  <div class="title_card1_p3">
                    <v-img
                      max-height="100"
                      max-width="100"
                      class="round-img"
                      src="https://pbs.twimg.com/profile_images/1002416157280727040/7SjA9KTJ_400x400.jpg"
                    ></v-img>
                  </div>
                  <!-- name card user -->
                  <div class="pdl_10">
                    <span class="big_font">Supratcha Wiwattanakorn</span>
                    <br />
                    <span class="grey--text">ตำแหน่ง : ผู้ช่วยสอน</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- dontent  -->
          <div class="card1_p3_content">
            <div class="card1_p3_content_left">
              <div class="label_grpah1_c1_p3">
                <table
                  width="100%"
                  justify="center"
                  cellspacing="0"
                  cellpadding="0"
                  align="center"
                >
                  <tr class="set_row_select">
                    <td width="50%">
                      <div class="set_center">
                        <v-select outlined dense class="hid"></v-select>
                        <span class="">การเดิน</span>
                      </div>
                    </td>
                    <td width="50%" justify="center">
                      <div class="set_center bg_green">
                        <v-select
                          :items="itm_walk"
                          placeholder="7 วันล่าสุด"
                          outlined
                          dense
                          class="text-md-center"
                        >
                        </v-select>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
              <div class="chart_31c1" style="width:95%">
                <canvas id="walk_graph1_2" width="250px" height=""></canvas>
              </div>
            </div>
            <v-divider vertical></v-divider>
            <div class="card1_p3_content_right">
              <div class="label_grpah1_c1_p3">
                <table
                  width="100%"
                  justify="center"
                  align="center"
                  cellspacing=""
                >
                  <tr class="set_row_select">
                    <td width="50%">
                      <div class="set_center">
                        <span class="">การนั่งนาน</span>
                      </div>
                    </td>
                    <td width="50%" class="text_sub">
                      <div class="bg_green">
                        <v-select
                          :items="itm_walk"
                          placeholder="7 วันล่าสุด"
                          outlined
                          dense
                          justify-center
                        ></v-select>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
              <div class="chart_31c1" style="width:95%">
                <canvas id="walk_graph2_2" width="250px" height=""></canvas>
              </div>
            </div>
          </div>
          <div class="table_content31c1" style="width:100%">
            <br />
            <span style="font-weight: bold;"> ประวัติการแจ้งเตือน </span>
            <span class="grey--text">(การถูกแจ้งเตือนโดยผู้ดูแล)</span>
            <br />
            <!-- <br /> -->
            <v-simple-table width="100%" id="customers">
              <thead>
                <tr class="grey--text" width="100%" cellspacing="0">
                  <td>ครั้งที่</td>
                  <td width="">วันที่ , เวลา</td>
                  <td width="">โดย</td>
                  <td width="65%">หมายเหตุ</td>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in new_item"
                  :key="item.id"
                  height="30px"
                  style="font-size:14px;"
                >
                  <td>{{ item.no }}</td>
                  <td>{{ item.date_time }}</td>
                  <td>{{ item.by }}</td>
                  <td>{{ item.dtail }}</td>
                </tr>
              </tbody>
            </v-simple-table>
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js";
export default {
  mounted: function() {
    var ctx_3_1c1 = document.getElementById("walk_graph1_2").getContext("2d"),
      gradient2_c1_p3 = ctx_3_1c1.createLinearGradient(0, 0, 0, 300);
    gradient2_c1_p3.addColorStop(0, "rgb(255, 161, 161)");
    gradient2_c1_p3.addColorStop(0.61, "rgb(255, 255, 255)");
    gradient2_c1_p3.addColorStop(1, "rgb(255, 255, 255)");
    var bar_31c1 = new Chart(ctx_3_1c1, {
      type: "line",
      data: {
        datasets: [
          {
            label: "",
            // backgroundColor: gradient2_c1_p3,
            backgroundColor: gradient2_c1_p3,
            borderColor: "#ffa1a1",
            data: [3000, 2000, 3000, 3500, 3000, 4800],
            pointBackgroundColor: "white",
          },
        ],
        labels: ["07/08", "08/08", "09/08", "10/08", "11/08", "12/08"],
      },
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
              stacked: true,
              ticks: {
                reverse: false,
                min: 1000,
                max: 5000,
                stepSize: 1000,
              },
              scaleLabel: {
                display: true,
                labelString: "ก้าว",
              },
            },
          ],
        },
      },
    });
    console.log(bar_31c1);

    var ctx_3_1c1_2 = document.getElementById("walk_graph2_2").getContext("2d"),
      gradient31c1_2 = ctx_3_1c1_2.createLinearGradient(0, 0, 0, 300);
    gradient31c1_2.addColorStop(0, "rgb(0, 0, 0)");
    gradient31c1_2.addColorStop(0.1, "rgb(0, 0, 0)");
    gradient31c1_2.addColorStop(0.61, "rgb(255, 255, 255)");
    gradient31c1_2.addColorStop(1, "rgb(255, 255, 255)");
    var bar_3_1c1_2 = new Chart(ctx_3_1c1_2, {
      type: "line",
      data: {
        datasets: [
          {
            label: "",
            backgroundColor: gradient31c1_2,
            borderColor: "#000000",
            data: [14, 3, 12, 7, 12, 5],
            pointBackgroundColor: "white",
          },
        ],
        labels: ["07/08", "08/08", "09/08", "10/08", "11/08", "12/08"],
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
                max: 20,
                stepSize: 5,
              },
              scaleLabel: {
                display: true,
                labelString: "ครั้ง",
              },
            },
          ],
        },
      },
    });
    console.log(bar_3_1c1_2);
  },
  data() {
    return {
      itm_walk: ["7วันล่าสุด", "1เดือนล่าสุด", "1ปีล่าสุด"],
      new_item: [
        {
          no: "02",
          date_time: "15 มิ.ย.20 , 14:30 น.",
          by: "ศิริญญา ศุนาญ",
          dtail:
            "แจ้งเตือนการนั่งเพิ่มสูงขึ้นผิดปกติ มากกว่า 5 ครั้ง โปรดตรวจสอบว่าสวมใส่อุปกรณ์หรือไม่",
        },
        {
          no: "01",
          date_time: "6 มิ.ย.20 , 14:30 น.",
          by: "ศิริญญา ศุนาญ",
          dtail:
            "แจ้งเตือนการนั่งต่อเนื่องเกินกว่า 3 ชั่วโมง ควรขยับ หรือลุกจากที่นั่งเผื่อผ่อนคลายกล้ามเนื้อ",
        },
      ],
    };
  },
};
</script>
<style scoped>
.head_card1_p3_l_title {
  display: flex;
  justify-content: space-between;
  width: 85%;
  /* background-color: rgba(0, 0, 0, 0.2); */
}
.big_font {
  font-weight: bold;
}
.pdl_10 {
  padding-left: 10px;
}
.v-select__selection {
  width: 100%;
  justify-content: center;
}
.set_row_select {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  /* background-color: rgba(0, 0, 0, 0.2); */
  /* background-color:blueviolet; */
}
.clear_fix {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  text-align: center;
  /* background-color: pink; */
}
/* #customers tr:nth-child(even){background-color: #f2f2f2;} */
.bg_green {
  /* background-color: rgba(9, 231, 21, 0.397); */
  padding-top: 25px;
}
</style>
