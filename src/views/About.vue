<template>
    <div class="about">
        <h1>This is an about page</h1>
        <canvas id="graph" width="200" height="100"></canvas>
    </div>
</template>


<script>

import Chart from 'chart.js'
export default{
  mounted: function () {
    var ctx = document.getElementById('graph').getContext('2d')
    var bar = new Chart(ctx, {
      type: 'bar',
      data:{
        labels: ['18-20' , '21-30' , '31-40', '41-50','51-60', '60 Up'],
        datasets: [
          {
            label: 'Man',
            backgroundColor:'#9ACDE9',
            data: [638,557,784,652,145,24]
          },
          {
            label: 'Woman',
            backgroundColor:'#F8C5C5',
            data: [270,250,275,480,145,40]
          }
          ]

      }
    })
    console.log(bar)
  },
  data(){
    return [
    ]
  }
}
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

// export default {
  
//   name: "About",
//   components: {
//     // HelloWorld
//   }
// };

</script>



<style scope>
</style>