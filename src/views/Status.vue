<template>
  <div class="status">
    <br />
    <!-- el card2 div -->
    <div class="card_el_card2">
      <!-- card2 head+content -->
      <v-card class="card2_size" elevation="3" outlined>
        <div class="card2_root">
          <!-- card2 header -->
          <div class="head-card2">
            <div class="">
              <div class="header_card2">
                <div class="title_card2">
                  <div class="card2_nameNicon">
                    <div style="padding-right:10px;">
                      <v-icon color="#009688">mdi-amazon-alexa</v-icon>
                    </div>
                    <div class="card2_bot_text ">
                      <span><strong>Ideal weight</strong></span>
                    </div>
                  </div>
                </div>
                <div class="head_card2_btn">
                  <v-btn small icon fab>
                    <v-icon class="exit-icon">mdi-exit-to-app</v-icon>
                  </v-btn>
                </div>
              </div>
              <div class="card2_line2 grey--text">
                <span
                  >Weightrefers to the weight of a person's body. You can know
                  your health state besed on weight change.</span
                >
              </div>
            </div>
          </div>
          <!-- card2 content -->
          <div class="content1_card2">
            <!-- card l -->
            <div class="chart1_card2 c30">
              <div class="">
                <canvas id="graph1_c2" width="200px" height="220"></canvas>
              </div>
            </div>
            <!-- card r  -->
            <div class="data_table_card2 c30">
              <div class="card1-subcard-3 ct_set" width="" height="">
                <div class="table_content_card2">
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
                            <span class="text-top">56.7kg.</span>
                            <v-progress-linear
                              color="none"
                              rounded
                              value="100"
                            ></v-progress-linear>
                            <br />
                            <span class="text-top">76.6kg.</span>
                            <v-progress-linear
                              color="none"
                              rounded
                              value="100"
                            ></v-progress-linear>
                            <br />
                            <span class="text-top">85.8kg.</span>
                            <v-progress-linear
                              color="none"
                              rounded
                              value="100"
                            ></v-progress-linear>
                            <br />
                            <span class="text-top">98.0kg.</span>
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
                          <br />
                        </div>
                      </th>
                    </tr>
                  </table>

                  <table
                    style="width: 100%;
  border-collapse: collapse;"
                  >
                    <tr>
                      <th></th>
                      <th>
                        <div class="i-human">
                          <div><v-icon>mdi-human-male</v-icon></div>
                          <div><p>Underweight</p></div>
                        </div>
                      </th>
                      <th>
                        <div class="i-human">
                          <div><v-icon>mdi-human-male</v-icon></div>
                          <div><p>Normal</p></div>
                        </div>
                      </th>
                      <th>
                        <div class="i-human">
                          <div><v-icon>mdi-human-male</v-icon></div>
                          <div><p>Overweight</p></div>
                        </div>
                      </th>
                      <th>
                        <div class="i-human">
                          <div><v-icon>mdi-human-male</v-icon></div>
                          <div><p>Obese I</p></div>
                        </div>
                      </th>
                      <th>
                        <div class="i-human">
                          <div><v-icon>mdi-human-male</v-icon></div>
                          <div><p>Obese II</p></div>
                        </div>
                      </th>
                    </tr>
                    <tr v-for="item in items" :key="item.id" align="center">
                      <th scope="row">
                        <v-icon :style="{ color: item.color }">{{
                          item.icon
                        }}</v-icon>
                        <span class="black--text"
                          ><strong>{{ item.gender }}</strong></span
                        >
                      </th>
                      <td
                        v-for="n in 5"
                        :key="n"
                        width="16.67%"
                        height="40px"
                        style="border:1px solid black;"
                      >
                        {{ item.data[n - 1] }}
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </div>
    <br />
    <div class="card_el_card2">
      <!-- card2 head+content -->
      <v-card class="card2_size" elevation="3" outlined>
        <div class="card3_root">
          <!-- card2 header -->
          <div class="head-card2">
            <div class="">
              <div class="header_card2">
                <div class="title_card2">
                  <div class="card2_nameNicon">
                    <div style="padding-right:10px;">
                      <v-icon color="#009688">mdi-amazon-alexa</v-icon>
                    </div>
                    <div class="card2_bot_text ">
                      <span><strong>BMI</strong></span>
                    </div>
                  </div>
                </div>
                <div class="head_card2_btn">
                  <v-btn small icon fab>
                    <v-icon class="exit-icon">mdi-exit-to-app</v-icon>
                  </v-btn>
                </div>
              </div>
              <div class="card2_line2 grey--text">
                <span
                  >Weight (kg) / height(m2) You can't judge if you're "Odese"
                  just by BMI value. People can have more fat than muscle with
                  normal BMI and still classify as obese.</span
                >
              </div>
            </div>
          </div>
          <!-- card2 content -->
          <div class="content1_card2">
            <!-- card l -->
            <div class="chart1_card2 c30">
              <div class="">
                <canvas id="graph2_c2" width="200px" height="220"></canvas>
              </div>
            </div>
            <!-- card r  -->
            <div class="data_table_card2 c30">
              <div class="card1-subcard-3 ct_set" width="" height="">
                <div class="table_content_card2">
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
                            <span class="text-top">18.5</span>
                            <v-progress-linear
                              color="none"
                              rounded
                              value="100"
                            ></v-progress-linear>
                            <br />
                            <span class="text-top">25.0</span>
                            <v-progress-linear
                              color="none"
                              rounded
                              value="100"
                            ></v-progress-linear>
                            <br />
                            <span class="text-top">28.0</span>
                            <v-progress-linear
                              color="none"
                              rounded
                              value="100"
                            ></v-progress-linear>
                            <br />
                            <span class="text-top">32.0</span>
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
                          <br />
                        </div>
                      </th>
                    </tr>
                  </table>

                  <table
                    style="width: 100%;
  border-collapse: collapse;"
                  >
                    <tr>
                      <th></th>
                      <th>
                        <div class="i-human">
                          <div><p>Low</p></div>
                        </div>
                      </th>
                      <th>
                        <div class="i-human">
                          <div><p>Normal</p></div>
                        </div>
                      </th>
                      <th>
                        <div class="i-human">
                          <div><p>increased</p></div>
                        </div>
                      </th>
                      <th>
                        <div class="i-human">
                          <div><p>Hight</p></div>
                        </div>
                      </th>
                      <th>
                        <div class="i-human">
                          <div><p>Very hight</p></div>
                        </div>
                      </th>
                    </tr>
                    <tr v-for="item in items_2" :key="item.id" align="center">
                      <th scope="row">
                        <v-icon :style="{ color: item.color }">{{
                          item.icon
                        }}</v-icon>
                        <span class="black--text"
                          ><strong>{{ item.gender }}</strong></span
                        >
                      </th>
                      <td
                        v-for="n in 5"
                        :key="n"
                        width="16.67%"
                        height="40px"
                        style="border:1px solid black;"
                      >
                        {{ item.data[n - 1] }}
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </div>
    <br />
    <div class="card_el_card2">
      <v-card class="card2_size" elevation="3" outlined>
        <div class="card3_root">
          <div class="head-card2">
            <div class="">
              <div class="header_card2">
                <div class="title_card2">
                  <div class="card2_nameNicon">
                    <div style="padding-right:10px;">
                      <v-icon color="#009688">mdi-foot-print</v-icon>
                    </div>
                    <div class="card2_bot_text ">
                      <span><strong>Step</strong></span>
                    </div>
                  </div>
                </div>
                <div class="head_card2_btn">
                  <v-btn small icon fab>
                    <v-icon class="exit-icon">mdi-exit-to-app</v-icon>
                  </v-btn>
                </div>
              </div>
            </div>
          </div>
          <div class="card2_line2 grey--text">
            <span>Daily avg doing more exercise id good for health</span>
          </div>
          <div class="content1_card3">
            <!-- card l -->
            <div class="chart1_card3 c30">
              <div class="size_chart3">
                <canvas id="graph1_c3" width="800px" height="200px"></canvas>
              </div>
            </div>
            <br />
            <!-- card r  -->
            <div class="data_table_card3 c30">
              <div class="card1-subcard-3 ct_set" width="" height=""></div>
               <div class="table_content_card2">

                  <table
                    style="width: 100%;
  border-collapse: collapse;"
                  >
                    <tr v-for="item in data_card3" :key="item.id" align="center">
                      <th scope="row" width="12%" class="head_table_card3">
                        <v-icon :style="{ color: item.color }">{{
                          item.icon
                        }}</v-icon>
                        <span class="black--text pd_text_table_c3" 
                          ><strong>{{ item.type }}</strong></span
                        >
                      </th>
                      <td
                        v-for="n in 5"
                        :key="n"
                        width="17%"
                        height="40px"
                        style="border:1px solid black;"
                      >
                        {{ item.data[n - 1] }}
                      </td>
                    </tr>
                  </table>
                </div>
            </div>
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
    var ctx1_c2 = document.getElementById("graph1_c2").getContext("2d");
    var bar1_c2 = new Chart(ctx1_c2, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [300, 350, 130, 200, 50],
            backgroundColor: [
              "#AD8DBB",
              "#359BD3",
              "#58BFAE",
              "#FF850A",
              "#DA2121",
            ],
          },
        ],
        labels: ["Relaxed", "Light", "Intensive", "Aerbic", "Anaerobic"],
      },
      options: {
        responsive: true,
        legend: {
          display: false,
        },
      },
    });
    console.log(bar1_c2);

    var ctx2_c2 = document.getElementById("graph2_c2").getContext("2d");
    var bar2_c2 = new Chart(ctx2_c2, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [269, 492, 293, 34, 10],
            backgroundColor: [
              "#AD8DBB",
              "#359BD3",
              "#58BFAE",
              "#FF850A",
              "#DA2121",
            ],
          },
        ],
        labels: ["Relaxed", "Light", "Intensive", "Aerbic", "Anaerobic"],
      },
      options: {
        responsive: true,
        legend: {
          display: false,
        },
      },
    });
    console.log(bar2_c2);

    var ctx2_c3 = document.getElementById("graph1_c3").getContext("2d");
    var bar2_c3 = new Chart(ctx2_c3, {
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
    console.log(bar2_c3);
  },
  data: function() {
    return {
      items: [
        {
          gender: "Men",
          icon: "mdi-human-male",
          color: "#359BD3",
          data: [27, 98, 780, 34, 0],
        },
        {
          gender: "Women",
          icon: "mdi-human-female",
          color: "#F28C8C",
          data: [12, 132, 560, 22, 0],
        },
      ],
      items_2: [
        {
          gender: "Men",
          icon: "mdi-human-male",
          color: "#359BD3",
          data: [269, 492, 293, 34, 1],
        },
        {
          gender: "Women",
          icon: "mdi-human-female",
          color: "#F28C8C",
          data: [154, 569, 601, 22, 7],
        },
      ],
      card2: {
        labels: ["18-20", "21-30", "31-40", "41-50", "51-60", "60 Up"],
        Color: [
          "#58BFAE",
          "#FF3E80",
          "#FF850A",
          "#DA2121",
          "#B4B4B4",
          "#2289D8",
        ],
        avg: ["22.7%", "19.9%", "28%", "23.2%", "5.1%", "1.1%"],
        datasets: [
          {
            label: "Man",
            backgroundColor: "#9ACDE9",
            data: [638, 557, 784, 652, 145, 24],
          },
          {
            label: "Woman",
            backgroundColor: "#F8C5C5",
            data: [270, 250, 275, 480, 145, 40],
          },
        ],
      },
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
.c30 {
  background-color: pink;
}
.header_card2 {
  display: flex;
  justify-content: space-between;
}
.card_el_card2 {
  padding: 10px;
}
.head_card2_btn {
  align-content: center;
}
.card2_root {
  padding: 10px;
}
.card2_size {
  /* height:350px; */
  background-color: rgba(0, 0, 0, 0.1);
}
.card2_nameNicon {
  display: flex;
  justify-content: center;
  /* padding:20px; */
}
.t_switch {
  display: flex;
  /* justify-items: center; */
  justify-content: center;
}
.chart1_card2 {
  padding: 20px 0;
}
.chart1_card3{
  width:100%;
  display:flex;
  /* align-content: center; */
  /* align-items: center; */
  justify-content: center;
}
.content1_card2 {
  display: flex;
  justify-content: space-around;
}
.content1_card3 {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}
.title_card2 {
  justify-content: center;
  align-items: center;
  text-align: bottom;
  padding-top: 10px;
}
.card2_line2 {
  font-size: 12px;
}
.data_table_card2 {
  width: 70%;
  padding: 20px 0;
}
.card3_root{
  padding: 10px;
}
.data_table_card3{
  /* width: 90%; */
  padding:0 40px;
}
.size_chart3{
  width: 80%;
  padding-top: 20px;
  align-items: center;
  justify-content: center;
  justify-items: center;
  align-content: center;
}
.head_table_card3{
  text-align: left;
}
/* Card3 Css */
</style>
