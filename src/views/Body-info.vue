<template>
  <div class="bodyinfo">
    <h1>Bodyinfo page</h1>
    <div class="card_el">
      <v-card elevation="2" outlined>
        <div class="card5">
          <div class="card4-content">
            <div class="card4-top-content">
              <div class="graph6-details px-2">
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
                    rounded
                    value="100"
                  ></v-progress-linear>
                  <br />
                  <v-progress-linear
                    color="blue darken-2"
                    rounded
                    value="100"
                  ></v-progress-linear>
                  <br />
                  <v-progress-linear
                    color="green darken-2"
                    rounded
                    value="100"
                  ></v-progress-linear>
                  <br />
                  <v-progress-linear
                    color="yellow darken-2"
                    rounded
                    value="100"
                  ></v-progress-linear>
                  <br />
                  <v-progress-linear
                    color="red darken-2"
                    rounded
                    value="100"
                  ></v-progress-linear>
                </div>
                <br />
              </div>
            </div>
            <div class="card4-un-content">
              <!-- หัวตาราง -->
              <div class="progress-el icon-set">
                <div class="i-human">
                  <div><v-icon>mdi-human-male</v-icon></div>
                  <div><p>ผอมมาก</p></div>
                </div>
                <div class="i-human">
                  <div><v-icon>mdi-human-male</v-icon></div>
                  <div><p>ปกติ</p></div>
                </div>
                <div class="i-human">
                  <div><v-icon>mdi-human-male</v-icon></div>
                  <div><p>อวบ</p></div>
                </div>
                <div class="i-human">
                  <div><v-icon>mdi-human-male</v-icon></div>
                  <div><p>อ้วน ระยะที่1</p></div>
                </div>
                <div class="i-human">
                  <div><v-icon>mdi-human-male</v-icon></div>
                  <div><p>อ้วน ระยะที่2</p></div>
                </div>
              </div>
              <v-container>
                <v-row v-for="item in items" :key="item.id">
                  <v-col v-for="n in 5" :key="n">
                    <table class="black--text" outlined tile>
                      {{
                        item.data[n - 1]
                      }}
                    </table>
                  </v-col>
                </v-row>
              </v-container>

              <div></div>
            </div>
            <div class="card-info-right pa-1">
              <table class="card2-table">
                <tr>
                  <td></td>
                  <th scope="col">A</th>
                  <th scope="col">B</th>
                  <th scope="col">C</th>
                  <th scope="col">D</th>
                  <th scope="col">E</th>
                </tr>
                <tr v-for="item in data_card2_info" :key="item.id">
                  <th scope="row">{{ item.name }}</th>
                  <td v-for="n in 6" :key="n">{{ item.dataMan[n - 1] }}</td>
                </tr>
                <tr></tr>
              </table>
            </div>
            <!-- <p>content</p> -->
          </div>
        </div>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: "Dessert (100g serving)",
          align: "start",
          value: "name",
        },
        { text: "Calories", value: "calories" },
        { text: "Fat (g)", value: "fat" },
        { text: "Carbs (g)", value: "carbs" },
        { text: "Protein (g)", value: "protein" },
        { text: "Iron (%)", value: "iron" },
      ],
      items: [
        { id: "1", gender: "ชาย", data: ["27", "98", "780", "34", "0"] },
        { id: "2", gender: "หญิง", data: [12, 132, 560, 22, 0] },
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
          dataMan: [638, 650, 532, 634,636],
          dataWman: "270",
          avg: "22.7%",
        },
        {
          name: "21-30",
          color: "#FF3E80",
          dataMan: [333, 666, 999, 111,525],
          dataWman: "250",
          avg: "19.9%",
        },
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%",
        },
        {
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%",
        },
        {
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%",
        },
        {
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%",
        },
        {
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%",
        },
        {
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%",
        },
        {
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%",
        },
        {
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%",
        },
        {
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%",
        },
        {
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%",
        },
      ],
    };
  },
};
</script>

<style scoped>
.card4-content {
  display: flex;
  flex-direction: column;
}
.card4_nameNicon {
  display: flex;
  padding-right: 60px;
}
.card5 {
  padding: 20px;
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

.graph6-details {
  padding-top: 20px;
}
.text-top {
  font-size: 12px;
}
</style>
