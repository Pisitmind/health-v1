<template>
    <div class="users">
        <h1>User page</h1>
               <br />
    <v-card>
      <v-card-title>
        <div class="head_dialog_c1_p3">
          <div>
            <v-btn color="green darken-1" icon @click="dialog = false">
              <v-icon>mdi-arrow-left-drop-circle-outline</v-icon>
            </v-btn>
          </div>
          <div>
            <span class="headline">รายละเอียดการเคลื่อนไหว</span>
          </div>
          
        </div>
      </v-card-title>
      <v-card-text>
       กราฟสรุปรายละเอียดการเคลื่อนไหวต่อเดือน เพื่อสังเกตุพฤติกรรมที่อาจส่งผลถึง ปัญหาสุขภาพในระยะสั้น กลาง และยาวได้
      </v-card-text>
      <v-card-content>
        <div class="content_dialog_page_top">
          <div class="content_top_left_page">
            <div class="set_center">
              <canvas id="graph1_c1_p3" width="500px" height="200px"></canvas>
            </div>
               <div class="table_content_card2">

                  <table
                    style="width: 100%;"
                  >
                    <tr v-for="item in data_card3" :key="item.id" align="center">
                      <th scope="row" width="15%" class="head_table_card3">
                        <v-icon small :style="{ color: item.color }">{{
                          item.icon
                        }}</v-icon>
                        <span class="black--text pd_text_table_c3 pd_text_5 font_sm" 
                          ><strong>{{ item.type }}</strong></span
                        >
                      </th>
                      <td
                        v-for="n in 7"
                        :key="n"

                        height="35px"
                        style="border:1px solid black;"
                        class="font_omg"
                      >
                        {{ item.data[n - 1] }}
                      </td>
                    </tr>
                  </table>
                </div>


          </div>
          <div class="content_top_right_page">
            <!-- data top right -->
            <div>
              <v-card width="" class="c1_c2_dialog">
                <table class="data_c1c2">
                  <tr>
                    <td class="left" width="80%" height="20%">
                      <span>ค่าเฉลี่ยการเดิน (ในช่วง 6 เดือน)</span>
                    </td>
                    <td>
                      <v-btn
                        color="#22CE8B"
                        depressed
                        class="white--text"
                        elevation="2"
                        >+4%</v-btn
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="card_c1_c2_pd">
                        <canvas
                          id="graph_dialog_c2"
                          width=""
                          height="100px"
                        ></canvas>
                      </div>
                    </td>
                    <td>
                      <div class="wd_100">
                        <table class="align-center">
                          <tr>
                            <span>119</span>
                          </tr>
                          <tr class="grey--text">
                            <span>
                              ก้าว / วัน
                            </span>
                          </tr>
                        </table>
                      </div>
                    </td>
                  </tr>
                </table>
              </v-card>
            </div> 
            <br/>
            <div>
              <v-card width="" class="c1_c2_dialog">
                <table class="data_c1c2">
                  <tr>
                    <td class="left" width="80%" height="20%">
                      <span>ค่าเฉลี่ยการนั่ง (ในช่วง 6 เดือน)</span>
                    </td>
                    <td>
                      <v-btn
                        color="#22CE8B"
                        depressed
                        class="white--text"
                        elevation="2"
                        >+12%</v-btn
                      >
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="card_c1_c2_pd">
                        <canvas
                          id="graph_dialog_c3"
                          width=""
                          height="100px"
                        ></canvas>
                      </div>
                    </td>
                    <td>
                      <div class="wd_100">
                        <table class="align-center">
                          <tr>
                            <span>64</span>
                          </tr>
                          <tr class="grey--text">
                            <span>
                              ครั้ง / วัน
                            </span>
                          </tr>
                        </table>
                      </div>
                    </td>
                  </tr>
                </table>
              </v-card>
            </div>
          </div>
        </div>
        <div class="content_dialog_page_bot">
           <div>
        <br/>
        <br/>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <span class=""> ข้อมูลผู้ใช้งาน</span>
            <tr>
              <th class="text-left">
                รหัส
              </th>
              <th class="text-left">
                ชื่อ-สกุล
              </th>
              <th class="text-left">
                ตำแหน่ง
              </th>
              <th class="text-left">
                การเดิน (วันนี้)
              </th>
              <th class="text-left">
                เปลี่ยนแปลงการเดิน
              </th>
              <th class="text-left">
                การนั่งนาน (วันนี้)
              </th>
              <th class="text-left">
                เปลี่ยนแปลงการนั่ง
              </th>
              <th class="text-left">
                ดูประวัติ
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in data_card1_info" :key="item.id">
              <td>{{ item.no }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.location }}</td>
              <td>{{ item.room_no }}</td>
              <td>{{ item.avg_bpm }}</td>
              <td>{{ item.now_bpm }}</td>
              <td>
                <div>
                  <v-switch
                    v-model="ex11"
                    color="#22CE8B"
                    hide-details
                  ></v-switch>
                </div>
              </td>
              <td>
                <v-btn :style="{ backgroundColor: item.color }" elevation="2" small>
                  {{ item.manual_noti }}
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <v-divider></v-divider>
    </div>
        </div>
        <!-- <canvas id="graphline" width="" height="40px"></canvas> -->
      </v-card-content>
    </v-card>
    </div>

</template>


<script>
import Chart from "chart.js";
export default {
  mounted: function() {

    var ctx_dia_c1_p3 = document.getElementById("graph1_c1_p3").getContext("2d");
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
          yAxes: [{ stacked: true ,ticks: {
          reverse: false,
          min: 0,
          max: 1000,
          stepSize: 200, }}],
          
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
            data: [14 ,73 ,33 ,43 ,74 ,66 ,76 ,24 ,72],
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
      items: [
        { gender: "ผช", color: "#359BD3", data: [27, 98, 780, 34, 0] },
        { gender: "ผญ", color: "F28C8C", data: [12, 132, 560, 22, 0] },
      ],
      data_card1_info: [
        {
          name: "Inverness McKenzie",
          no: "101",
          location: "Production B1",
          room_no: "102",
          avg_bpm: "104",
          now_bpm: "159",
          color: "#B4B4B4",
          manual_noti: "SENDED",
        },
        {
          name: "Niles Peppertrout",
          no: "102",
          location: "Production B1",
          room_no: "140",
          avg_bpm: "140",
          now_bpm: "157",
          color: "#22CE8B",
          manual_noti: "SEND",
        },
        {
          name: "Abraham Pigeon",
          no: "103",
          location: "Production B1",
          room_no: "106",
          avg_bpm: "161",
          now_bpm: "174",
          color: "#22CE8B",
          manual_noti: "SEND",
        },
      ],
      data_card3: [
        {
          type: "All",
          icon: "mdi-circle",
          color: "#359BD3",
          data: [524, 643, 419, 419, 264, 555, 200],
        },
        {
          type: "Steps",
          icon: "mdi-circle",
          color: "#A3A1FB",
          data: [139, 384, 223, 189, 158, 318, 93],
        }, 
        {
          type: "Setting",
          icon: "mdi-circle",
          color: "#FFDA83",
          data: [385, 259, 196, 230, 106, 237, 107],
        },
      ],
    };
  },
};
</script>

<style scoped>
.t_switch {
  display: flex;
  /* justify-items: center; */
  justify-content: center;
}
.head_dialog_c1_p3 {
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.content_dialog_page_top {
  display: flex;
  justify-content: space-around;
}
.c1_c2_dialog {
  padding: 20px;
}
.card_c1_c2_pd {
  padding: 15px;
}
.set_center{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.data_c1c2 {
  text-align: center;
  vertical-align: middle;
}
.left{
  text-align: left;
}

.content_top_left_page{
  display: flex;
  flex-direction: column;
  padding-bottom:20px;
}

</style>
