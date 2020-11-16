<template>
  <div class="unqHealth">
    <h1>unqHealth page</h1>
     <div class="card-info-right pa-1">
              <table class="card2-table" >
                <tr align="center">
                  <td></td>
                  <th scope="col">ผอมมาก</th>
                  <th scope="col">ปกติ</th>
                  <th scope="col">อวบ</th>
                  <th scope="col">อ้วน ระยะที่1</th>
                  <th scope="col">อ้วน ระยะที่2</th>
                </tr>
                <tr v-for="item in items" :key="item.id" align="center">
                  <th scope="row">{{ item.gender }}</th>
                  <td v-for="n in 6" :key="n"> {{ item.data[n-1] }}</td>
                </tr>
                <tr></tr>
              </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { gender: "ผช",color:"#359BD3", data: [27, 98, 780, 34, 0] },
        { gender: "ผญ",color:"F28C8C", data: [12, 132, 560, 22, 0] },
      ],
    };
  },
};
</script>
