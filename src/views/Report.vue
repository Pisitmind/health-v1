<template>
  <div class="report">
    <v-card>
      <v-tabs v-model="tab" background-color="blue lighten-2" dark>
        <v-tab v-for="item in items" :key="item.tab">
          {{ item.content }}
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="tab">
        <v-tab-item v-for="data in items" :key="data.id">
          <v-card flat v-if="data.check === '1'">
            <v-card-content>
              <report1 />
            </v-card-content>
          </v-card>
          <v-card flat v-if="data.check === '2'">
            <v-card-content>
              <report2 />
            </v-card-content>
          </v-card>
          <v-card flat v-if="data.check === '3'">
            <v-card-content>
              <report3 />
            </v-card-content>
          </v-card>
          <v-card flat v-if="data.check === '4'">
            <v-card-content>
              <report4 />
            </v-card-content>
          </v-card>
          <v-card flat v-if="data.check === '5'">
            <v-card-content>
              <report5 />
            </v-card-content>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
import report1 from "../components/Report_sub1";
import report2 from "../components/Report_sub2";
import report3 from "../components/Report_sub3";
import report4 from "../components/Report_sub4";
import report5 from "../components/Report_sub5";

export default {
  name: "report",
  components: {
    report1,
    report2,
    report3,
    report4,
    report5,
  },
  data() {
    return {
      toggle: false,
      tab: null,
      items: [
        { tab: "One", check: "1", content: "ข้อมูลผู้ใช้งาน" },
        { tab: "Two", check: "2", content: "ข้อมูลการเคลื่อนไหวของผู้ใช้งาน" },
        { tab: "Three", check: "3", content: "ข้อมูลสถานะร่างกาย" },
        { tab: "Four", check: "4", content: "ข้อมูลค่าส่วนประกอบในร่างกาย" },
        { tab: "Five", check: "5", content: "ข้อมูลสุขภาพจำเพาะ" },
      ],
    };
  },
};
</script>

<style scoped>
.report {
  padding: 20px;
}
.report_card_root {
  padding: 20px;
}
.ddog {
  font-size: 20px;
}
.v-card__title {
  padding: 0;
}
.head_title_card_p7 {
  width: 50%;
  /* background-color: rgba(0, 0, 0, 0.2); */
}
.head_card_p7 {
  display: flex;
  flex-direction: row;
}
</style>
