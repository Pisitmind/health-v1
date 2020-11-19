<template>
  <div class="status">
    <br />
    <!-- el card2 div -->
    <div class="card_el_card2">
        <!-- card2 head+content -->
      <v-card class="card2_size" elevation="3" outlined>
        <div class="card1-root">
          <!-- card2 header -->
          <div class="head-card1">
            <div class="">
              <div class="">
                <v-icon ></v-icon>
                <p><strong>Ideal weight</strong></p>
              </div>
            </div>
          </div>
          <!-- card2 content -->
          <div class="content1-card1">
            <!-- card l -->
            <div class="cont1-card1 c_size c1">
              <div class="c3">
                <canvas id="graph1_c2" width="200px" height="200px"></canvas>
              </div>
            </div>
                
            <!-- card r  -->
            <div class="card2_data_table c1">
              <v-card class="card1-subcard-3 ct_set" width="" height="">
                <div class="card4-content">

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
                          <div><p>ผอมมาก</p></div>
                        </div>
                      </th>
                      <th>
                        <div class="i-human">
                          <div><v-icon>mdi-human-male</v-icon></div>
                          <div><p>ปกติ</p></div>
                        </div>
                      </th>
                      <th>
                        <div class="i-human">
                          <div><v-icon>mdi-human-male</v-icon></div>
                          <div><p>อวบ</p></div>
                        </div>
                      </th>
                      <th>
                        <div class="i-human">
                          <div><v-icon>mdi-human-male</v-icon></div>
                          <div><p>อ้วน ระยะที่1</p></div>
                        </div>
                      </th>
                      <th>
                        <div class="i-human">
                          <div><v-icon>mdi-human-male</v-icon></div>
                          <div><p>อ้วน ระยะที่2</p></div>
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
                        style="border:1px solid black;"
                      >
                        {{ item.data[n - 1] }}
                      </td>
                    </tr>
                  </table>
                </div>
              </v-card>
            </div>
          </div>
        </div>
      </v-card>
    </div>
    <br />
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
              "#359BD3",
              "#E7F524",
              "#FC9A38",
              "#F92969",
              "#FF1A1A",
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
  },
  data: function() {
    return {
      items: [
        {
          gender: "ชาย",
          icon: "mdi-human-male",
          color: "#359BD3",
          data: [27, 98, 780, 34, 0],
        },
        {
          gender: "หญิง",
          icon: "mdi-human-female",
          color: "#F28C8C",
          data: [12, 132, 560, 22, 0],
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
.card2_data_table{
  width: 65%;
}
.card_el_card2{
  padding:20px;
}
.card2_size{
  padding: 20px;
}
</style>
