<template>
  <v-container grid-list-lg-xl class="home">
    <div class="card_el">
      <link
        rel="stylesheet"
        href="https://i.icomoon.io/public/temp/e933b25521/UntitledProject/style.css"
      />

      <v-card class="bdr_12">
        <div class="card1-root">
          <div class="head-card1">
            <div class="card1-left">
              <div class="head_name_tag pd_l25 sp_nametag">
                <p>สมาชิกผู้ใช้</p>
              </div>
              <div class="day_calen">
                <div class="btn_day_tag">
                  <v-btn color="#ad8dbb" class="set_today_btn white--text" small
                    >วันนี้</v-btn
                  >
                </div>
                <div class="calen_tag">
                  <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="date"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        color="#AD8DBB"
                        v-model="date1"
                        prepend-inner-icon="mdi-calendar"
                        v-bind="attrs"
                        v-on="on"
                        dense
                        outlined
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="date1"
                      no-title
                      scrollable
                      color="#AD8DBB"
                      dense
                    >
                      <v-spacer></v-spacer>
                      <v-btn
                        text
                        color="primary"
                        @click="$refs.menu.save(date1)"
                      >
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-menu>
                </div>
              </div>
            </div>
            <div class="card1-right">
              <div class="right-icon">
                <v-btn small icon fab class="hid">
                  <img
                    height="40px"
                    class="filter-white"
                    src="../assets/icon/icon_detail.svg"
                    alt="dtail"
                  />
                </v-btn>
              </div>
            </div>
          </div>
          <div class="card1-content">
            <div
              class="graph_donut_c1"
              style="float: left; position: relative;"
            >
              <div
                style="width: 100%; position: absolute; top: 50%; left: 0; margin-top: -30px; line-height:19px; text-align: center; z-index: 999999999999999"
              >
                <span class="text_inside">ผู้ใช้ทั้งหมด</span><br />
                <span class="text_inside1">2,800</span><br />
                <span class="text_inside">คน</span>
              </div>
              <canvas id="graph0" width="" height="200px"></canvas>
            </div>
            <div class="spac_content"></div>

            <v-card class="card_p1_c1 bdr_12_only" height="">
              <v-card-subtitle class="font_size_title_card">
                <span class="f_color_purple pl-5">
                  ตัวบ่งชี้
                </span>
              </v-card-subtitle>
              <v-card-text v-for="item in data_card1" :key="item.id">
                <div class="male-content px-3">
                  <div class="top-male-content">
                    <div class="text-male">
                      <v-icon x-small :style="{ color: item.color }"
                        >mdi-circle</v-icon
                      >
                      <v-icon :style="{ color: item.color }">{{
                        item.icon
                      }}</v-icon>
                      <span class="black--text"> {{ item.gender }} </span>
                    </div>
                    <div class="black--text ">
                      {{ item.data }}
                    </div>
                  </div>
                  <div class="bot-male-content">
                    <div class="male-subdt grey--text">
                      {{ item.info }}
                    </div>
                    <div class="percent-subdt grey--text">
                      {{ item.percent }}
                    </div>
                  </div>
                </div>
              </v-card-text>
            </v-card>
            <div class="spac_content"></div>
            <v-card class="card1-subcard-3 bdr_12_only" width="" height="">
              <v-card-subtitle class="font_style_title_card">
                <span class="f_color_purple pl-5">
                  อุปกรณ์
                </span>
              </v-card-subtitle>
              <v-card-text class="pa-1">
                <div>
                  <table
                    class="card1-table"
                    justify="space-around"
                    width="100%"
                  >
                    <tr>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                    <tr v-for="item in data_card1_info" :key="item.name">
                      <td class="speci_ele">
                        <v-icon x-small :style="{ color: item.color }"
                          >mdi-circle
                        </v-icon>
                        {{ item.name }}
                      </td>
                      <td class="set_cen_text_table">{{ item.data }}</td>
                      <td class="set_cen_text_table">{{ item.percent }}</td>
                    </tr>
                  </table>
                </div>
              </v-card-text>
            </v-card>
            <!-- <p>content</p> -->
          </div>
        </div>
      </v-card>
    </div>
    <div class="card_el">
      <v-card class="c2_set_resp rounded-card">
        <div class="card_content">
          <div class="head_name_tag pd_l25">
            <p>ช่วงอายุ</p>
          </div>
          <div class="card2-content">
            <div class="card_left_c2_p1">
              <div class="card2-graph">
                <canvas id="graph" width="" height=""></canvas>
              </div>
              <div class="label_graph">
                <table width="100%">
                  <tr>
                    <td style="text-align:center;">
                      <div class="label_text_card1">
                        <div>
                          <v-icon small color="blue"> mdi-circle</v-icon>
                          <span class="black--text"> ชาย </span>
                        </div>
                        <div class="pd_10">
                          <v-icon small color="pink"> mdi-circle</v-icon>
                          <span class="black--text"> หญิง </span>
                        </div>
                      </div>
                    </td>
                    <td width="50%"></td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="card_right_c2_p1">
              <v-card
                class="card2-subcard-3 ct_set bdr_12_only"
                width=""
                height="300px"
              >
                <v-card-subtitle class="font_style_title_card">
                  <span class="f_color_purple pl-5">
                    ตัวบ่งชี้
                  </span>
                </v-card-subtitle>
                <v-card-content class="pa-1">
                  <!-- <div class="pa-1"> -->
                  <table class="card2-table">
                    <tr class="table_head1">
                      <th class="table_head1_data">ช่วงอายุ</th>
                      <th>ชาย</th>
                      <th>หญิง</th>
                      <th>เฉลี่ยรวม</th>
                    </tr>
                    <tr
                      v-for="item in data_card2_info"
                      :key="item.id"
                      height="30px"
                      class="filter-white content_table"
                    >
                      <td class="content_table_data1 two-data-card2 text-left">
                        <v-icon x-small :style="{ color: item.color }"
                          >mdi-circle
                        </v-icon>
                        {{ item.name }}
                      </td>
                      <td>{{ item.dataMan }}</td>
                      <td>{{ item.dataWman }}</td>
                      <td>{{ item.avg }}</td>
                    </tr>
                  </table>

                  <!-- </div> -->
                </v-card-content>
              </v-card>
            </div>
            <!-- <p>content</p> -->
          </div>
        </div>
      </v-card>
    </div>
    <div class="c3_card_root card_el">
      <div class="card-split">
        <div class="card_l">
          <v-card class="card3_l1_root bdr_12" height="400">
            <div class="card3_l1 c_l">
              <div class="card3_headNsub">
                <div class="head_card_l">
                  <div class="title-card3">
                    <div class="pd_icon" style="padding-right:10px;">
                      <img
                        height="40px"
                        class="filter-white"
                        src="../assets/icon/icon_step_03.svg"
                        alt="step"
                      />
                    </div>
                    <div
                      class="card-bot-text"
                      style=" display: flex; flex-wrap: wrap; align-content: center; 
                      text-align: center; align-item:center;"
                    >
                      <span> การก้าว </span>
                      <!-- <span class="icon-icon_women"></span> -->
                      <!-- <span class="icon-icon_men"></span> -->
                    </div>
                  </div>
                  <div class="sex-age-title-card3">
                    <div
                      class="sex-title"
                      style=" display: flex; flex-wrap: wrap; align-content: center; 
                      text-align: center; align-item:center;"
                    >
                      <v-btn
                        class="set_btn_resize white--text "
                        small
                        color="#AD8DBB"
                        width="80px"
                        ><span>เพศ</span></v-btn
                      >
                    </div>
                    <div
                      class="age-title"
                      style=" display: flex; flex-wrap: wrap; align-content: center; 
                      text-align: center; align-item:center;"
                    >
                      <v-btn
                        class="set_btn_resize #AD8DBB--text "
                        small
                        outlined
                        color="#AD8DBB"
                        width="80px"
                        ><span>อายุ</span></v-btn
                      >
                    </div>
                  </div>
                  <div class="icon-card">
                    <div class="exit-icon-card3">
                      <v-btn small icon fab class="hid">
                        <img
                          height="40px"
                          class="filter-white"
                          src="../assets/icon/icon_detail.svg"
                          alt="dtail"
                        />
                      </v-btn>
                    </div>
                  </div>
                </div>
                <div class="sub_card_text grey--text">
                  <span
                    >ค่าเฉลี่ยก้าวเดินของผู้ใช้เพศชาย และเพศหญิง รายวัน</span
                  >
                </div>
              </div>
              <v-card-content>
                <div class="card_content">
                  <!-- <div> -->
                  <!-- กราฟ horizontal problems  graph3-1 -->
                  <div class="card2-graph">
                    <canvas id="graph3-1" class="set_size_chart"></canvas>
                  </div>
                  <div class="label_graph">
                    <table width="100%">
                      <tr>
                        <td style="text-align:center;">
                          <div class="label_text_card3">
                            <div>
                              <v-icon small color="blue"> mdi-circle</v-icon>
                              <span class="black--text"> ชาย </span>
                            </div>
                            <div class="pd_10">
                              <v-icon small color="pink"> mdi-circle</v-icon>
                              <span class="black--text"> หญิง </span>
                            </div>
                          </div>
                        </td>
                        <td width="31%"></td>
                      </tr>
                    </table>
                  </div>
                  <!-- </div> -->
                </div>
              </v-card-content>
            </div>
          </v-card>
        </div>
        <div class="card_r">
          <v-card class="card_r_root bdr_12" height="400">
            <div class="card3_cardr c_r">
              <div class="card3_headNsub">
                <div class="head_card_r">
                  <div class="title-card3">
                    <div class="pd_icon" style="padding-right:10px;">
                      <img
                        height="40px"
                        class="filter-white"
                        src="../assets/icon/icon_brun_01.svg"
                        alt="burn"
                      />
                    </div>
                    <div
                      class="card-bot-text "
                      style="display: flex; flex-wrap: wrap; align-content: center;"
                    >
                      <span> การเผาผลาญ </span>
                    </div>
                  </div>
                  <div class="sex-age-title-card3">
                    <div class="sex-title">
                      <v-btn
                        class="set_btn_resize #AD8DBB--text "
                        small
                        outlined
                        color="#AD8DBB"
                        width="80px"
                        ><span>เพศ</span></v-btn
                      >
                    </div>
                    <div class="age-title">
                      <v-btn
                        class="set_btn_resize white--text "
                        small
                        color="#AD8DBB"
                        width="80px"
                        ><span>อายุ</span></v-btn
                      >
                    </div>
                  </div>
                  <div class="icon-card">
                    <div class="exit-icon-card3">
                      <v-btn small icon fab class="hid">
                        <img
                          height="40px"
                          class="filter-white"
                          src="../assets/icon/icon_detail.svg"
                          alt="dtail"
                        />
                      </v-btn>
                    </div>
                  </div>
                </div>
                <div class="sub_card_text grey--text">
                  <span>ค่าเฉลี่ยการเผาผลาญของผู้ใช้แต่ละช่วงอายุคน</span>
                </div>
              </div>

              <div class="card_content">
                <div class="card2-graph">
                  <canvas id="graph1" class="set_g1_size"></canvas>
                </div>
                <!-- <p>content</p> -->
              </div>
            </div>
          </v-card>
        </div>
      </div>
    </div>
    <!-- สัดส่วน นน card -->
    <div class="card_el">
      <v-card class="bdr_12">
        <div class="card_content">
          <v-card-text class="head_and_sub_content">
            <div class="head_card4">
              <div class="title_card4">
                <div class="card4_nameNicon set_weight">
                  <div style="padding-right:10px;">
                    <img
                      height="40px"
                      class="filter-white"
                      src="../assets/icon/icon_weight_01.svg"
                      alt="weight"
                    />
                  </div>
                  <div class="card-bot-text set_weight">
                    <span> สัดส่วนน้ำหนัก </span>
                  </div>
                </div>
                <div class="card4_head_btn">
                  <div class="sexnage_card4">
                    <div class="sex_card4">
                      <v-btn
                        class="set_btn_resize white--text "
                        small
                        color="#AD8DBB"
                        width="80px"
                        ><span>เพศ</span></v-btn
                      >
                    </div>
                    <div class="age_card4">
                      <v-btn
                        class="set_btn_resize #AD8DBB--text "
                        small
                        outlined
                        color="#AD8DBB"
                        width="80px"
                        ><span>อายุ</span></v-btn
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div class="icon-card">
                <div class="exit-icon-card3">
                  <v-btn small icon fab class="hid">
                    <img
                      height="40px"
                      class="filter-white"
                      src="../assets/icon/icon_detail.svg"
                      alt="dtail"
                    />
                  </v-btn>
                </div>
              </div>
            </div>
            <div class="sub_card_text_sp grey--text">
              <span
                >สัดส่วนน้ำหนักร่างกายของแต่ละบุคคล สามารถบ่งบอกถึงสุขภาพได้
                ตามการเปลี่ยนแปลงของน้ำหนักตัว</span
              >
            </div>
          </v-card-text>
          <v-card-content>
            <div class="card4-content">
              <div class="card5-top-content">
                <div class="graph6-details ">
                  <!-- แถบprogress -->
                  <table
                    style="width: 100%;
  border-collapse: collapse;"
                  >
                    <tr>
                      <th width="16.67%"></th>
                      <th>
                        <div class="graph6-details ">
                          <!-- แถบprogress -->
                          <div class="progress-el">
                            <v-progress-linear
                              color="none"
                              rounded
                              value="100"
                            ></v-progress-linear>
                            <br />
                            <span class="text-top">56.7กก.</span>
                            <v-progress-linear
                              color="none"
                              rounded
                              value="100"
                            ></v-progress-linear>
                            <br />
                            <span class="text-top">76.6กก.</span>
                            <v-progress-linear
                              color="none"
                              rounded
                              value="100"
                            ></v-progress-linear>
                            <br />
                            <span class="text-top">85.8กก.</span>
                            <v-progress-linear
                              color="none"
                              rounded
                              value="100"
                            ></v-progress-linear>
                            <br />
                            <span class="text-top">98.0กก.</span>
                            <v-progress-linear
                              color="none"
                              rounded
                              value="100"
                            ></v-progress-linear>
                          </div>
                          <div class="progress-el">
                            <v-progress-linear
                              color="purple darken-2"
                              height="15"
                              class="rounded-l-xl"
                              value="100"
                            ></v-progress-linear>
                            <br />
                            <v-progress-linear
                              color="blue darken-2"
                              height="15"
                              value="100"
                            ></v-progress-linear>
                            <br />
                            <v-progress-linear
                              color="green darken-2"
                              height="15"
                              value="100"
                            ></v-progress-linear>
                            <br />
                            <v-progress-linear
                              color="yellow darken-2"
                              height="15"
                              value="100"
                            ></v-progress-linear>
                            <br />
                            <v-progress-linear
                              color="red darken-2"
                              height="15"
                              class="rounded-r-xl"
                              value="100"
                            ></v-progress-linear>
                          </div>
                        </div>
                      </th>
                    </tr>
                  </table>
                </div>
              </div>
              <div class="card5-bottom-content">
                <!-- ใส่ในนี้ -->
                <div class="table_c5">
                  <table
                    class="set_table_n"
                    style="width: 100%;
  border-collapse: collapse;"
                  >
                    <tr>
                      <th width="16.67%"></th>
                      <th>
                        <div class="i-human">
                          <div>
                            <img
                              height="60px"
                              class="set_human_fix filter-white"
                              src="../assets/icon/Login-Regis_8Jul20-21.png"
                              alt="human"
                            />
                          </div>
                          <div class="t-icon"><p>ผอมมาก</p></div>
                        </div>
                      </th>
                      <th>
                        <div class="i-human">
                          <div>
                            <img
                              height="60px"
                              class="set_human_fix filter-white"
                              src="../assets/icon/Login-Regis_8Jul20-23.png"
                              alt="human"
                            />
                          </div>
                          <div class="t-icon"><p>ปกติ</p></div>
                        </div>
                      </th>
                      <th>
                        <div class="i-human">
                          <div>
                            <img
                              height="60px"
                              class="set_human_fix filter-white"
                              src="../assets/icon/Login-Regis_8Jul20-20.png"
                              alt="human"
                            />
                          </div>
                          <div class="t-icon"><p>อวบ</p></div>
                        </div>
                      </th>
                      <th>
                        <div class="i-human">
                          <div>
                            <img
                              height="60px"
                              class="set_human_fix filter-white"
                              src="../assets/icon/Login-Regis_8Jul20-18.png"
                              alt="human"
                            />
                          </div>
                          <div class="t-icon"><p>อ้วน ระยะที่ 1</p></div>
                        </div>
                      </th>
                      <th>
                        <div class="i-human">
                          <div>
                            <img
                              height="60px"
                              class="set_human_fix filter-white"
                              src="../assets/icon/Login-Regis_8Jul20-15.png"
                              alt="human"
                            />
                          </div>
                          <div class="t-icon"><p>อ้วน ระยะที่ 2</p></div>
                        </div>
                      </th>
                    </tr>
                    <tr v-for="item in items" :key="item.id" align="center">
                      <th scope="row" class="fix_center">
                        <img
                          height="40px"
                          class="filter-white"
                          :src="require('../assets/icon/' + item.icons)"
                        />
                        <span class="black--text" style="padding-left:10px;">
                          {{ item.gender }}
                        </span>
                      </th>
                      <td
                        v-for="n in 5"
                        :key="n"
                        width="16.67%"
                        height="40px"
                        style="font-size:24px; font-weight: bold; border:1.5px solid; #757575;"
                      >
                        {{ item.data[n - 1] }}
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <!-- <p>content</p> -->
            </div>
          </v-card-content>
        </div>
      </v-card>
    </div>
  </v-container>
</template>
<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels"></script>
<script>
import Chart from "chart.js";
export default {
  mounted: function() {
    const labels = ["male", "female"];
    const images = [
      require("../assets/icon/icon_men_sm.svg"),
      require("../assets/icon/icon_women_sm.svg"),
    ];
    const values = [3628, 4874];
    const material_font = new FontFace(
      "material-icons",
      // pass the url to the file in CSS url() notation
      "url(https://fonts.gstatic.com/s/materialicons/v48/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2)"
    );
    document.fonts.add(material_font); // add it to the document's FontFaceSet

    var config = {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [1471, 1329],
            backgroundColor: ["#9ACDE9", "#F8C5C5"],
          },
        ],
        labels: ["ชาย", "หญิง"],
      },
      options: {
        responsive: true,
        legend: {
          display: false,
        },
        elements: {
          center: {
            text: "ผู้ใช้ทั้งหมด 2,800 คน",
            color: "#0000ff", // Default is #000000
            fontStyle: "Arial", // Default is Arial
          },
        },
      },
    };
    var config1 = {
      type: "bar",
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
              display: true,
              ticks: {
                suggestedMin: 200, // minimum will be 0, unless there is a lower value.
                stepValue: 250,
                max: 1000,
              },
              scaleLabel: {
                display: false,
                labelString: "",
              },
            },
          ],
          xAxes: [
            {
              display: true,
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
      data: {
        labels: ["18-20", "21-30", "31-40", "41-50", "51-60", "60 Up"],
        backgroundColor: ["#ff6384", "#36a2eb"],
        Color: [
          "#58BFAE",
          "#FF3E80",
          "#FF850A",
          "#DA2121",
          "#B4B4B4",
          "#2289D8",
        ],
        datasets: [
          {
            label: "ชาย",
            backgroundColor: "#9ACDE9",
            data: [638, 557, 784, 652, 145, 24],
          },
          {
            label: "หญิง",
            backgroundColor: "#F8C5C5",
            data: [270, 250, 275, 480, 145, 40],
          },
        ],
      },
    };
    var config2 = {
      type: "horizontalBar",
      options: {
        responsive: true,
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              // display: true,
            },
          ],
          xAxes: [
            {
              display: true,
              ticks: {
                suggestedMin: 0, // minimum will be 0, unless there is a lower value.
                stepValue: 250,
                max: 1200,
              },
              scaleLabel: {
                display: true,
                labelString: "แคล",
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
      data: {
        labels: ["18-20", "21-30", "31-40", "41-50", "51-60", "60 Up"],
        datasets: [
          {
            label: "",
            barPercentage: 0.8,
            categoryPercentage: 0.8,
            backgroundColor: [
              "#58BFAE",
              "#FF3E80",
              "#FF850A",
              "#DA2121",
              "#B4B4B4",
              "#2289D8",
            ],
            data: [984, 627, 743, 505, 286, 211],
          },
        ],
      },
    };
    var config3 = {
      type: "horizontalBar",
      // plugins: [
      //   {
      //     afterDraw: (bar3) => {
      //       var ctx_3 = bar3.getContextchart.ctx_3;
      //       var yAxis_3 = bar3.scales["y-axis-0"];
      //       var xAxis_3 = bar3.scales["x-axis-0"];
      //       yAxis_3.ticks.forEach((value, index) => {
      //         var y = yAxis_3.getPixelForTick(index);
      //         var image_3 = new Image();
      //         (image_3.src = images[index]),
      //           ctx_3.drawImage(image_3, xAxis_3.bottom - 270, y - 10);
      //       });
      //     },
      //   },
      // ],
      options: {
        responsive: true,
        legend: {
          display: false,
        },
        layout: {
          padding: {
            // left: 50,
            left: 0,
            // right: 20,
            right: 0,
            top: 10,
            bottom: 10,
          },
        },
        scales: {
          yAxes: [
            {
              display: true,
            },
          ],
          xAxes: [
            {
              display: true,
              ticks: {
                suggestedMin: 1000, // minimum will be 0, unless there is a lower value.
                stepValue: 1000,
                max: 6000,
              },
              scaleLabel: {
                display: false,
                labelString: "ก้าว",
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
      data: {
        labels: labels,
        // labels: ["mdi-human-male", "mdi-human-female"],
        datasets: [
          {
            barPercentage: 0.5,
            label: "ก้าว",
            backgroundColor: ["#9ACDE9", "#F8C5C5"],
            data: values,
          },
        ],
      },
    };

    var ctx0 = document.getElementById("graph0").getContext("2d");
    var bar0 = new Chart(ctx0, config);

    // Chart.pluginService.register({
    //   beforeDraw: function(chart) {
    //     var width = chart.chart.width,
    //       height = chart.chart.height,
    //       ctx = chart.chart.ctx;

    //     ctx.restore();
    //     var fontSize = (height / 114).toFixed(2);
    //     ctx.font = fontSize + "em sans-serif";
    //     ctx.textBaseline = "middle";

    //     var text = "ผู้ใช้ทั้งหมด 2,800 คน",
    //       textX = Math.round((width - ctx.measureText(text).width) / 2),
    //       textY = height / 2;

    //     ctx0.fillText(text, textX, textY);
    //     ctx0.save();
    //   },
    // });

    // console.log(bar0);

    var ctx = document.getElementById("graph").getContext("2d");
    var bar = new Chart(ctx, config1);

    // console.log(bar);

    var ctx1 = document.getElementById("graph1").getContext("2d");
    var bar1 = new Chart(ctx1, config2);
    // console.log(bar1);

    var ctx3 = document.getElementById("graph3-1").getContext("2d");
    var bar3 = new Chart(ctx3, config3);
    // console.log(bar3);
    // return bar3;
  },

  menu: false,
  modal: false,
  menu2: false,
  data() {
    return {
      date0: new Date(),
      date: new Date().toISOString().substr(0, 10),
      date1: new Date().toISOString().substr(0, 10),
      items: [
        {
          gender: "ชาย",
          icon: "mdi-human-male",
          icons: "icon_men.svg",
          color: "#359BD3",
          data: [27, 98, 780, 34, 0],
        },
        {
          gender: "หญิง",
          icon: "mdi-human-female",
          icons: "icon_women.svg",
          color: "#F28C8C",
          data: [12, 132, 560, 22, 0],
        },
      ],
      data_card1: [
        {
          id: "1",
          color: "#359BD3",
          icon: "mdi-human-male",
          gender: "ชาย",
          data: "1,471",
          info: "ค่าเฉลี่ยผู้ใช้งานเพศชายรายวัน",
          percent: "63%",
        },
        {
          id: "2",
          color: "#F28C8C",
          icon: "mdi-human-female",
          gender: "หญิง",
          data: "1,329",
          info: "ค่าเฉลี่ยผู้ใช้งานเพศหญิงรายวัน",
          percent: "27%",
        },
      ],
      data_card1_info: [
        { name: "Garmin", color: "#2289D8", data: "395", percent: "14.1%" },
        { name: "Suunto", color: "#DA2121", data: "422", percent: "15%" },
        { name: "Xiaomi", color: "#FF850A", data: "796", percent: "28.4%" },
        { name: "Honor", color: "#FF3E80", data: "321", percent: "11.4%" },
        {
          name: "Apple Watch",
          color: "#9C9C9C",
          data: "844",
          percent: "31.1%",
        },
        { name: "อื่นๆ", color: "#58BFAE", data: "22", percent: "0.7%" },
      ],
      data_card2_info: [
        {
          name: "18-20",
          color: "#58BFAE",
          dataMan: "638",
          dataWman: "270",
          avg: "22.7%",
        },
        {
          name: "21-30",
          color: "#FF3E80",
          dataMan: "557",
          dataWman: "250",
          avg: "19.9%",
        },
        {
          name: "31-40",
          color: "#FF850A",
          dataMan: "784",
          dataWman: "275",
          avg: "28%",
        },
        {
          name: "41-50",
          color: "#DA2121",
          dataMan: "652",
          dataWman: "480",
          avg: "23.2%",
        },
        {
          name: "51-60",
          color: "#B4B4B4",
          dataMan: "145",
          dataWman: "145",
          avg: "5.1%",
        },
        {
          name: "60ขึ้นไป",
          color: "#2289D8",
          dataMan: "24",
          dataWman: "40",
          avg: "1.1%",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
/* .card {
  display: flex;
  flex-direction: column;
} */

.bdr_12 {
  border-radius: 12px !important;
  box-shadow: 0 0px 12px 4px rgba(0, 0, 0, 0.1) !important;
}
.rounded-card {
  border-radius: 12px !important;
  box-shadow: 0 0px 12px 4px rgba(0, 0, 0, 0.1) !important;
}
.set_g1_size {
  width: 450px;
  height: 220px;
}
.text_inside {
  font-size: 14px;
  color: grey;
}
.set_today_btn {
  // color: #ad8dbb!important;
  width: 80px !important;
}
.text_inside1 {
  font-size: 22px;
  font-weight: bold;
}

.calen_tag {
  padding-top: 5px;
}

.v-text-field {
  padding-top: 0px;
  margin-top: 0px;
}
.ct_set {
  align-items: center;
  justify-content: center;
  justify-items: center;
  // text-align: center;
  padding: auto;
  margin: auto;
}
th {
  text-align: center;
}
.card1-root td {
  padding: 0 25px;
  text-align: left;
}
.card1-table {
  font-size: 14px;
  color: #5b5b5b;
}
.card2-table {
  font-size: 14px;
  color: #5b5b5b;
  td {
    padding: 0 20px;
    text-align: left;
  }
}

.two-data-card2 {
  padding: 2px 0px;
  text-align: left;
}
.head-card1 {
  display: flex;
  justify-content: space-between;
  // padding-bottom:20px;
}
.card1-root {
  padding: 20px;
  // box-shadow: 0 0px 12px 4px rgba(0, 0, 0, 0.1) !important;
}
.card1-percent {
  padding-right: 10px;
}
.card1-left {
  display: flex;
  width: 100%;
  justify-content: space-between;
  justify-items: space-around;
  // background-color:rgba(0,0,50,0.2);
  // align-content: center;
}
.pd_top10 {
  padding-top: 10px;
}
.card1-right {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: right;
}
.card1-content {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  // height:"100%";//
}
.card-info-right {
  font-size: 12px;
}
.pdr-5 {
  padding: 10px;
}
.card1-subcard-3 {
  width: 350px;
  padding-bottom: 15px;
}
.set-center {
  margin: auto;
  width: 90%;
}
.text-brand {
  padding-left: 10px;
}
.head-card2 {
  display: flex;
  justify-content: start;
  // padding-left: 10px;
  font-size: 25px;
}
.card2 {
  padding: 20px;
}
.card2-subcard-3 {
  padding-left: 10px;
}
.card2-content {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 20px;
}
.text-ageRange {
  padding-left: 15px;
}

.subtext-card3 {
  display: flex;
  justify-content: start;
  padding: 0px 10px;
}
// .card3-content {
//   display: flex;
//   position: relative;
//   padding: 20px;
// }

.card5_line2 {
  font-size: 11px;
  padding-top: -5px;
}

.icon-card {
  padding: 0 0 0 50px;

  /* width: 100%; */
  /* padding: 10px; */
}
.title-card3 {
  display: flex;
  /* width: 100%; */
  justify-content: space-around;
}

.right-icon {
  display: flex;
  padding-left: 90%;
}
.male-content {
  display: flex;
  flex-direction: column;
}
.top-male-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.text-male {
  display: flex;
}
.bot-male-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.male-subdt {
  font-size: 11px;
  padding-right: 40px;
  padding-left: 15px;
}
.percent-subdt {
  font-size: 11px;
}

.item-set {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.all {
  display: flex;
  flex-direction: column;
}

.brand-content {
  display: flex;
  flex-direction: row;
  // justify-content: space-around;
  justify-content: space-between;
  margin: 0 auto;
  // text-align: left;
}

.card3_headNsub {
  display: flex;
  flex-direction: column;

  // background-color:gray;
}
.head_card4 {
  display: flex;
  justify-content: space-between;
  font-size: 25px;
  font-weight: bold;
  padding: 10px 20px 0px 20px; // padding: 20px;
  // padding: 20px 10px 0px 10px;
}
.title_card4 {
  width: 60%;
  display: flex;
  flex-direction: row;
}

.sex_card4 {
  padding: 0 10px;
}
.age_card4 {
  padding: 0 10px;
}

.card4-content {
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  padding-bottom: 20px;
}
.card4_nameNicon {
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
  padding-right: 60px;
}
.card_left_c2_p1 {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.card_right_c2_p1 {
  width: 40%;
  padding-left: 20px;
}
.flex {
  display: flex;
}
.row {
  flex-direction: row;
}
.col {
  flex-direction: column;
}
.space-between {
  justify-content: space-between;
}
.space-around {
  justify-content: space-around;
}

.card5 {
  padding: 20px;
}
.i-human .v-icon {
  color: #7b1fa2;
  width: 50px;
  height: 50px;
}
.i-human .t-icon {
  font-size: 14px;
  font-weight: lighter;
}

.label_graph {
  padding-bottom: 20px;
}
.card4_head_btn {
  display: flex;
  // width: 50%;
  justify-content: center;
}
.set_weight {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  text-align: center;
  align-items: center;
}
.icon-icon_men:before {
  content: "\e900";
  color: #359bd3;
}
.icon-icon_women:before {
  content: "\e901";
  color: #f28c8c;
}
.content_a {
  padding: 0 20px;
}
.sp_nametag {
  align-text: center;
  margin: 0px !important;
  padding-top: 10px;
}
.card3_l1_root,
.card3_cardr {
  padding: 20px;
}

// ------ after resize web page -----------//
@media only screen and (max-width: 850px) {
  /* For tablets: */
  .head-card1 {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .card3_cardr,
  .c_r {
    padding: 0px !important;
  }
  .card_r_root,
  .card3_l1_root {
    // height: 100%;
    padding-bottom: 30px !important;
  }
  .card1-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 100%;
    // padding:20px 0;
    // height:"100%";
  }
  .graph_donut_c1 {
    width: 400px;
    display: flex;
    align-self: center;
    padding-bottom: 15px;
  }
  .card2-content {
    display: flex;
    flex-direction: column;
  }
  .card_left_c2_p1 {
    display: flex;
    align-self: center;
    width: 100%;
  }
  .card_right_c2_p1 {
    width: 100%;
  }
  .card2-table {
    width: 100%;
  }
  .table_head1 {
    text-align: left;
  }
  .card2-table td[data-v-469af010] {
    padding: 0 26px;
    text-align: center;
  }
  .card-split {
    display: flex;
    flex-direction: column;
  }
  .card_l {
    width: 100%;
    height: 100%;
    padding: 0;
    padding-bottom: 10px;
    margin-bottom: 5px;
    // background-color: #ad8dbb;
  }
  .card_r {
    width: 100%;
    height: 100%;
    padding: 0;
    padding-top: 10px;
  }
  .card_r_root {
    padding: 20px;
    height: 450px !important;
  }
  .card3 {
    width: 100%;
    height: 100%;
  }
  .card3_l1 {
    position: relative;
    height: 100%;
    padding: 20px;
    // background-color:#ad8dbb;
    // background-color:#22CE8B;
  }
  .card1-content_3 {
    height: 90%;
    padding: 20px;
  }
  .card3_cardr {
    position: relative;
    height: 100%;
    padding: 20px;
    // background-color: #359bd3;
  }
  .head_card4 {
    width: 100%;
  }
  .title_card4 {
    width: 90%;
    display: flex;
    justify-content: space-between;
    // flex-direction: column;
    // background-color:#ad8dbb;
  }
  .card-bot-text {
    justify-content: start;
  }
  .card4_head_btn {
    justify-content: start;
  }
  .card4_nameNicon {
    justify-content: start;
  }
  .card5_line2 {
    padding-top: 10px;
  }
  .set_size_chart {
    height: 200px !important;
  }
  .card1-subcard-3 {
    width: 100%;
  }
  .set_cen_text_table {
    text-align: center !important;
  }
  .card1-table {
    font-size: 15px;
    justify-content: space-between;
  }
}
@media screen and (min-width: 1400px) {
  .card3_l1_root,
  .card_r_root {
    height: fit-content !important;
  }
  .card3_cardr {
    padding-bottom: 50px;
  }
  .card2-table {
    width: 100%;
    justify-content: space-around;
  }
  .table_head1_data {
    text-align: left !important;
    padding-left: 20px;
  }
  .content_table td {
    text-align: center;
  }
  .content_table_data1 td {
    text-align: left !important;
  }
}

@media screen and (max-width: 425px) {
  .card_el {
    width: 100%;
  }
  .card3_l1 {
    padding: 0px;
  }
  .head-card1,
  .card1-left {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // background-color: red;
  }
  .card2-content {
    display: flex;
    flex-direction: column;
  }
  .head_name_tag,
  .title-card3 {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    font-size: 40px;
    width: 100%;
  }
  .sp_nametag p {
    margin-bottom: 0px;
  }
  .set_today_btn {
    width: 100px !important;
  }
  .card2-subcard-3,
  .card2-table {
    width: 100%;
  }
  .card2-subcard-3 {
    height: fit-content !important;
  }
  .content_table_data1 {
    padding: 0 !important;
  }
  .card_right_c2_p1 {
    height: fit-content !important;
    width: 100%;
    padding: 0px;
  }
  .content_table {
    padding: 0px;
  }
  .card2-graph {
    padding: 0px;
    width: 100%;
    height: fit-content;
  }
  .card3_l1_root {
    height: fit-content !important;
  }
  .label_text_card3 {
    // padding: 0px !important;
    padding-left: 30px !important;
  }
  .head_card_l,
  .head_card_r {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .sub_card_text {
    padding-top: 10px;
  }
  .sex-age-title-card3 {
    justify-content: space-between;
    // justify-content: center;
    width: 100%;
  }
  .set_btn_resize {
    width: 100px !important;
  }
  .card-bot-text {
    font-size: 40px;
  }
  .pd_icon {
    display: flex;
    justify-content: center;
  }
  .set_g1_size {
    width: 100% !important;
    height: 200px !important;
  }
  .head_card4 {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .title_card4 {
    width: 100% !important;
  }
  .icon-card {
    width: 100% !important;
  }
  .sexnage_card4 {
    justify-content: space-between;
    // background-color: rgba(219, 34, 34, 0.575);
    width: 100%;
  }
  .title_card4 {
    display: flex;
    flex-direction: column;
  }
  .card4_nameNicon {
    // background-color: aquamarine;
    display: flex;
    padding: 0px;
    width: 100%;
  }
  .head_and_sub_content {
    padding: 0px;
  }
  .set_weight {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    text-align: center;
    align-items: center;
  }
  .sub_card_text_sp {
    padding-top: 10px;
  }
  .card4-content {
    // background-color: rgba(0, 50, 150, 0.6);
  }
  .card5-top-content {
    width: 100%;
  }
  .card5-bottom-content,
  .table_c5,
  .set_table_n {
    width: 100%;
  }
  .set_human_fix {
    // height: 5vh !important;
    height: 40px !important;
  }
  .fix_center {
    padding-left: 0px;
  }
}
</style>
