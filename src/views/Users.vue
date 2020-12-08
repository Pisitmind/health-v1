<template>
  <div class="users">
    <v-card>
      <v-tabs v-model="tab" background-color="black lighten-2" dark>
        <v-tab >
       เจ้าหน้าที่
        </v-tab>
      <v-tab >
      <!-- <v-tab disabled > -->
       ผู้ใช้งานระบบ
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item v-for="data in groups" :key="data.id">
          <v-card flat v-if="data.no === '1'">
            <v-card-content>
              <auth />
            </v-card-content>
          </v-card>
          <v-card flat v-if="data.no === '2'">
            <v-card-content>
              <normal_user />
            </v-card-content>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
import auth from "@/components/authorities.vue";
import normal_user from "@/components/normal_user.vue";
export default {
  components: {
    auth,normal_user
  },
  data() {
    return {
      
      tab: null,
      groups: [
        { no: "1", tab: "เจ้าหน้าที่" },
        { no: "2", tab: "ผู้ใช้งานระบบ" },
      ],
    };
  },
};
</script>

<style scoped></style>
