<template>
  <div class="status">
    <h1>Status page</h1>
    <div>
      <v-simple-table height="">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                Name
              </th>
              <th class="text-left">
                User
              </th>
              <th class="text-left">
                Percent
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in data_card1_info" :key="item.id">
              <td>
                <v-icon x-small :style="{ color: item.color }"
                  >mdi-circle
                </v-icon>
                {{ item.name }}
              </td>
              <td>{{ item.data }}</td>
              <td>{{ item.percent }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
    <div>
      <table>
        <tr>
          <th>name</th>
          <th>name</th>
          <th>name</th>
        </tr>
        <tr v-for="item in data_card1_info" :key="item.name">
          <td>
            <v-icon x-small :style="{ color: item.color }">mdi-circle </v-icon>
                {{ item.name }}
          </td>
          <td>{{ item.data }}</td>
          <td>{{ item.percent }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
    };
  },
};
</script>
