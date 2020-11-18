<template>
  <div class="status">
    <h1>Status page</h1>
    <div>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <span class=""> NOTIFY : ADMIN LIST</span>
            <tr>
              <th class="text-left">
                No
              </th>
              <th class="text-left">
                Name
              </th>
              <th class="text-left">
                Location
              </th>
              <th class="text-left">
                ROOM NO
              </th>
              <th class="text-left">
                AVG (BPM)
              </th>
              <th class="text-left">
                NOW (BPM)
              </th>
              <th class="text-left">
                AUTO NOTIFY
              </th>
              <th class="text-left">
                MANUAL NOTFY
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in data_card1_info" :key="item.id">
              <td>{{ item.no }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.location }}</td>
              <td>{{ item.room_no }}</td>
              <td>{{ item.avg_bpm }}</td>
              <td>{{ item.now_bpm }}</td>
              <td>
                <div>
                  <v-switch
                    v-model="ex11"
                    color="#22CE8B"
                    hide-details
                  ></v-switch>
                </div>
              </td>
              <td>
                <v-btn :style="{ backgroundColor: item.color }" elevation="2" small>
                  {{ item.manual_noti }}
                </v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <v-divider></v-divider>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data_card1_info: [
        {
          name: "Inverness McKenzie",
          no: "101",
          location: "Production B1",
          room_no: "102",
          avg_bpm: "104",
          now_bpm: "159",
          color: "#B4B4B4",
          manual_noti: "SENDED",
        },
        {
          name: "Niles Peppertrout",
          no: "102",
          location: "Production B1",
          room_no: "140",
          avg_bpm: "140",
          now_bpm: "157",
          color: "#22CE8B",
          manual_noti: "SEND",
        },
        {
          name: "Abraham Pigeon",
          no: "103",
          location: "Production B1",
          room_no: "106",
          avg_bpm: "161",
          now_bpm: "174",
          color: "#22CE8B",
          manual_noti: "SEND",
        },
      ],
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
</style>
