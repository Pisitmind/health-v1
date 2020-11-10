<template>
    <div class="Moving">
      <div>
        <h1>Moving page</h1>
         <canvas id="graph0" width="" height="40px"></canvas>
         <!-- <canvas id="graphline" width="" height="40px"></canvas> -->
      </div>
      <br>
      <br>
      <div class="progress-el">
        <v-progress-linear
          color="purple darken-2"
          rounded
          value="100"
        ></v-progress-linear>
        <br>
        <span class="text-top">56.7</span>
        <v-progress-linear
          color="blue darken-2"
          rounded
          value="100"
        ></v-progress-linear>
        <br>
        <span>76.6</span>
        <v-progress-linear
          color="green darken-2"
          rounded
          value="100"
        ></v-progress-linear>  
        <br>
        <span>85.8</span>
        <v-progress-linear
          color="yellow darken-2"
          rounded
          value="100"
        ></v-progress-linear> 
        <br>
        <span>98.0</span>
        <v-progress-linear
          color="red darken-2"
          rounded
          value="100"
        ></v-progress-linear>
      </div>
      <br>
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

    </div>


</template>

<script>

import Chart from 'chart.js'
export default{
  mounted: function () {
    var ctx0 = document.getElementById('graph0').getContext('2d')
    var bar0 = new Chart(ctx0, {
      type: 'doughnut',
      data:{
        datasets: [{
        data: [1471, 1329],
            backgroundColor: ['#9ACDE9','#F8C5C5']
        }],
        labels: [
            'ชาย',
            'หญิง'
        ]
      }
    })
    console.log(bar0)

    var ctx_line = document.getElementById('graphline').getContext('2d')
    var bar_line = new Chart(ctx_line, {
      type: 'line',
      options: {
        scales: {
          yAxes: [{
            display: false
          }],
        }
      },
      data:{
        datasets: [{
            data: [10,10,10,10,10],
            // backgroundColor:['purple'],
            backgroundColor:['purple','blue','green','orange','red'],
            above: ['purple','blue','green','orange','red'],   // Area will be red above the origin
            below: ['purple','blue','green','orange','red'], 
            borderColor: ['purple','blue','green','orange','red'],
        }],
        labels: [
            '0','56.7','76.6','85.8','98.0'
        ],
      }
      
    })
    console.log(bar_line)
            // 'ผอมมาก','ปกติ','อวบ','อ้วน ระยะที่1','อ้วน ระยะที่2'
  },
  data(){
    return [
    ]
  }
}

</script>



<style scope>
.progress-el{
  display: flex;
  flex-direction: row;
}
.text-top{
  text-align: top;
  
}
.s-20{
  width: 20%;
}
.icon-set{
  display: flex;
  justify-content: space-around;
}
.i-human{
  display: flex;
  flex-direction: column;
  
}
</style>