<template>
  <div class="about">
    <h1>This is an about page</h1>
    <canvas id="graph" width="200" height="100"></canvas>
    <br />
    <br />
    <br />
    <h2>how can i insert table data in graph hmm?</h2>
    <!-- <p>{{card2.labels[0]}}</p> -->
    <table>
      <tr>
        <th>ช่วงอายุ</th>
        <th>ชาย</th>
        <th>หญิง</th>
        <th>เฉลี่ยรวม</th>
      </tr>
      <tr v-for="item in data_card2" :key="item.id">
        <td class="two-data-card2">
          <v-icon x-small :style="{ color: item.color }">mdi-circle </v-icon>
          {{ item.name }}
        </td>
        <td>{{ item.dataMan }}</td>
        <td>{{ item.dataWman }}</td>
        <td>{{ item.avg }}</td>
      </tr>
    </table>
    <br />
    <br />
    <br />

    <p>{{card2.labels[0]}}</p>
    <p>{{card2.Color[0]}}</p>
    <p>{{card2.datasets[0].label}}</p>
    <p>{{card2.datasets[0].backgroundColor}}</p>
    <p>{{card2.datasets[0].data[0]}}</p>
    <v-btn color="card2.Color[1]">A</v-btn>
    <v-btn color="blue">A</v-btn>
  
    <table>
      <tr>
        <th>ช่วงอายุ</th>
        <th>ชาย</th>
        <th>หญิง</th>
        <th>เฉลี่ยรวม</th>
      </tr>
      <tr v-for="c2 in card2" :key="c2.id">
        <td>A</td>
        <!-- <td>{{c2.labels[0]}}</td> -->
        <!-- <td class="two-data-card2">
          <v-icon x-small :style="{ color:pink }">mdi-circle </v-icon>
          {{ c2.labels[0] }}
        </td> -->
        <!-- <td>{{ c2.datasets[0].data[c2.id] }}</td> -->
        <!-- <td>{{ c2.datasets[1].data[c2.id] }}</td> -->
        <!-- <td>{{ c2.avg }}</td> -->
      </tr>
    </table>
  </div>
</template>

<script>
import Chart from "chart.js";
export default {
  mounted: function() {
    var ctx = document.getElementById("graph").getContext("2d");
    var bar = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["18-20", "21-30", "31-40", "41-50", "51-60", "60 Up"],
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
    });
    console.log(bar);
  },
  data: function() {
    return {
      card2: {
        labels: ["18-20", "21-30", "31-40", "41-50", "51-60", "60 Up"],
        Color:["#58BFAE","#FF3E80","#FF850A","#DA2121","#B4B4B4","#2289D8"],
        avg:["22.7%","19.9%","28%","23.2%","5.1%","1.1%"],
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
      data_card2: [
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
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

// export default {

//   name: "About",
//   components: {
//     // HelloWorld
//   }
// };
</script>

<style scope></style>
