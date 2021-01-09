<template>
  <div class="report_sub1">
    <v-card class="report_card_root bdr_12">
      <v-card-title>
        <div class="head_title_card_p7">
          <div class="head_card_p7">
            <div>
              <v-btn color="black lighten-1" icon large @click="dialog = false">
                <img
                  height="40px"
                  class="filter-white"
                  src="../assets/icon/icon_report.svg"
                  alt="report"
                />
              </v-btn>
            </div>
            <div class="text_header">
              <span class="">รายงานข้อมูลผู้ใช้งาน</span>
            </div>
            <br />
          </div>
        </div>
      </v-card-title>
      <br />
      <v-card-content>
        <v-row>
          <v-col cols="12" xs="12" sm="6" md="6" lg="6" xl="6">
            <v-select
              :items="items"
              label="กลุ่มผู้ใช้งาน"
              dense
              outlined
            ></v-select>
          </v-col>
          <v-col cols="12" xs="12" sm="6" md="6" lg="6" xl="6">
            <v-select
              :items="age_range"
              label="ช่วงอายุ"
              dense
              outlined
            ></v-select>
          </v-col>
        </v-row>
        <v-row class="set_pd_row">
          <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
            <v-select
              :items="item_type"
              label="อุปกรณ์วัดค่า"
              dense
              outlined
            ></v-select>
          </v-col>
          <v-col cols="12" xs="0" sm="7" md="2" lg="2" xl="4"></v-col>
          <v-col cols="6" xs="6" sm="" md="2" lg="" xl="1" class="text-right">
            <v-btn outlined color="purple lighten-3" style="width:120px;"
              >ล้างข้อมูล</v-btn
            >
          </v-col>
          <v-col
            cols="6"
            xs="6"
            sm=""
            md="2"
            lg=""
            xl="1"
            class="text-right set_glow_flex set_nm_size"
            style=""
          >
            <v-btn color="purple lighten-3" style="color:white; width:120px;"
              >ค้นหา</v-btn
            >
          </v-col>
        </v-row>
      </v-card-content>

      <v-divider color="#C5C5C5"></v-divider>
      <br />
      <v-row class="set_nd_row">
        <v-col cols="12" xs="12" sm="7" md="6" lg="8" xl="9">
          <p style="text-indent: 20px;">พบผลลัพธ์ 2,800 ผลลัพธ์</p>
        </v-col>
        <v-col cols="12" xs="12" sm="2" md="3" lg="" xl="" class="text-right">
          <v-btn color="#3BD081" style="color:white; width:120px;">พิมพ์</v-btn>
        </v-col>
        <v-col cols="12" xs="12" sm="3" md="3" lg="" xl="" class="text-right">
          <v-btn color="purple lighten-3" style="color:white;"
            >นำออกเอกสาร
            <v-icon>mdi-menu-down</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <br />
      <v-row height="400px" justify="space-around">
        <v-col col="12" sm="3">
          <v-card outlined class="pa-2  bdr_12_only" width="" height="100%">
            <v-card-subtitle>
              <span class="topic-name-card_c3">
                ตัวบ่งชี้
              </span>
            </v-card-subtitle>
            <v-card-text class="pa-2">
              <v-row v-for="item in data_card1" :key="item.id">
                <v-table style="width:100%;">
                  <tr height="10px">
                    <td style="text-align: right;" width="80px">
                      <v-icon x-small :style="{ color: item.color }"
                        >mdi-circle</v-icon
                      >
                    </td>
                    <td
                      style="text-align: left;font-weight:bold; font-size: 14px;"
                      width="70%"
                    >
                      <v-icon :style="{ color: item.color }">{{
                        item.icon
                      }}</v-icon>
                      {{ item.gender }}
                    </td>
                    <td style="text-align: left;" width="20%">
                      {{ item.data }}
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td style="text-align: left;color:grey; font-size: 11px;">
                      {{ item.info }}
                    </td>
                    <td style="text-align: left;color:grey; font-size: 11px;">
                      {{ item.percent }}
                    </td>
                  </tr>
                </v-table>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card outlined class="pa-2 bdr_12_only" width="auto" height="100%">
            <v-card-subtitle>
              <span class="topic-name-card_c3 pl-5">
                ช่วงอายุ
              </span>
            </v-card-subtitle>
            <v-card-text class="pa-1">
              <table class="" style="width:100%;">
                <tr
                  class="table_head1"
                  style="text-align:center;"
                  height="35px"
                >
                  <th width="5%"></th>
                  <th style="text-align:left;padding-left:15px;">ช่วงอายุ</th>
                  <th>ชาย</th>
                  <th>หญิง</th>
                  <th>เฉลี่ยรวม</th>
                </tr>
                <tr
                  class="card_table_content_font"
                  v-for="item in data_card2_info"
                  :key="item.id"
                  style="text-align:center;"
                  height="35px"
                >
                  <td></td>
                  <td class="two-data-card2" style="text-align:left;">
                    <v-icon x-small :style="{ color: item.color }"
                      >mdi-circle
                    </v-icon>
                    {{ item.name }}
                  </td>
                  <td>{{ item.dataMan }}</td>
                  <td>{{ item.dataWman }}</td>
                  <td>{{ item.avg }}</td>
                </tr>
              </table>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card outlined class="pa-2 bdr_12_only" width="auto" height="100%">
            <v-card-subtitle>
              <span class="topic-name-card_c3 pl-5">
                อุปกรณ์วัดค่าสุขภาพ
              </span>
            </v-card-subtitle>
            <v-card-text class="pa-1">
              <div>
                <table width="100%" cellspacing="0" cellpadding="" class="">
                  <tr class="table_head1" height="35px">
                    <th width="5%"></th>
                    <th style="text-align:left; padding-left:15px;">
                      อุปกรณ์
                    </th>
                    <th>จำนวน</th>
                    <th>ค่าเฉลี่ย</th>
                  </tr>
                  <tr
                    class="card_table_content_font"
                    v-for="item in data_card1_info"
                    :key="item.name"
                    style="text-align: center;"
                    height="35px"
                  >
                    <td></td>
                    <td style="text-align:left;">
                      <v-icon x-small :style="{ color: item.color }"
                        >mdi-circle
                      </v-icon>
                      {{ item.name }}
                    </td>
                    <td>{{ item.data }}</td>
                    <td>{{ item.percent }}</td>
                  </tr>
                </table>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <br />
      <v-card-content>
        <div class="content_dialog_page_bot">
          <div class="table_news_p7">
            <v-simple-table>
              <template v-slot:default>
                <thead color="gray" class="table_head1">
                  <tr>
                    <th width="" class="text-left">
                      ลำดับ
                    </th>
                    <th width="40%" class="text-left">
                      รายชื่อผู้ใช้
                    </th>
                    <th width="" class="text-left">
                      ช่วงอายุ
                    </th>
                    <th width="" class="text-center">
                      เพศ
                    </th>
                    <th width="20%" class="text-left">
                      อุปกรณ์
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="text-left card_table_content_font"
                    v-for="item in data_p7"
                    :key="item.id"
                  >
                    <td>{{ item.no }}</td>
                    <td>{{ item.name }}</td>
                    <td class=" text-truncate" style="max-width: 100px;">
                      {{ item.age_range }}
                    </td>
                    <td class="text-center">{{ item.gender }}</td>
                    <td class="text-left">{{ item.item_type }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
            <br />
            <div></div>
          </div>
        </div>
      </v-card-content>
    </v-card>
    <div style="padding-bottom:40px;"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ["ผู้ใช้งานทั้งหมด", "ผู้ชาย", "ผู้หญิง"],
      age_range: [
        "ทุกช่วงอายุ",
        "18-20",
        "21-30",
        "31-40",
        "41-50",
        "51-60",
        "60 ขึ้นไป",
      ],
      item_type: [
        "อุปกรณ์ทั้งหมด",
        "Garmin",
        "Suunto",
        "Xiaomi",
        "Honor",
        "Apple watch",
        "อื่นๆ",
      ],
      data_card1: [
        {
          id: "1",
          color: "#359BD3",
          icon: "mdi-human-male",
          gender: "ชาย",
          data: "1,471",
          info: "ค่าเฉลี่ยผู้ใช้งานเพศชายรายวัน",
          percent: "63%",
        },
        {
          id: "2",
          color: "#F28C8C",
          icon: "mdi-human-female",
          gender: "หญิง",
          data: "1,329",
          info: "ค่าเฉลี่ยผู้ใช้งานเพศหญิงรายวัน",
          percent: "27%",
        },
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
      data_p7: [
        {
          no: "1.",
          name: "สญานัน สุภัสศิรา",
          age_range: "21-30",
          gender: "หญิง",
          icon: "mdi-menu-up",
          color: "#B4B4B4",
          item_type: "Garmin",
        },
        {
          no: "2.",
          name: "สุนันญา กันต์จวรรณ์",
          age_range: "41-50",
          gender: "หญิง",
          icon: "mdi-menu-up",
          color: "#B4B4B4",
          item_type: "Xiaomi",
        },
        {
          no: "3.",
          name: "สุวรรณจณีย์ ศิลธร",
          age_range: "21-30",
          gender: "หญิง",
          icon: "mdi-menu-up",
          color: "#B4B4B4",
          item_type: "Suunto",
        },
      ],
    };
  },
};
</script>
<style scoped>
.report_sub1 {
  padding: 20px;
}
.report_card_root {
  padding: 20px;
}
.set_glow_flex {
  flex-grow: 0.2 !important;
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
.text_header {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  text-align: center;
  align-items: center;
  white-space: nowrap;
}

@media only screen and (min-width: 1441px) and (max-width: 1920px) {
  .set_pd_row {
    padding-right: 20px;
  }
  .set_nd_row {
    padding-right: 5px;
  }
}
</style>
