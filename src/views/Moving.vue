<template>
    <div class="Moving">
        <h1>Moving page</h1>
         <canvas id="graph0" width="" height="40px"></canvas>
         <canvas id="graphline" width="" height="40px"></canvas>

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
</style>