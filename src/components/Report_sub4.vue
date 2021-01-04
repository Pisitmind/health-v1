<template>
  <div class="report_sub4 ">
    <v-card class="report_card_root bdr_12">
      <v-card-title>
        <div class="head_title_card_p7_4">
          <div class="head_card_p7_4">
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
              <span class=""
                >รายงานข้อมูลค่าส่วนประกอบในร่างกายของผู้ใช้งาน</span
              >
            </div>
          </div>
        </div>
      </v-card-title>
      <br />
      <br />
      <v-card-content>
        <v-row>
          <v-col cols="12" xs="6" sm="6" md="6" lg="6" xl="6">
            <v-select
              :items="items"
              label="กลุ่มผู้ใช้งาน"
              dense
              outlined
              clearable
            ></v-select>
          </v-col>
          <v-col cols="6" xs="3" sm="3" md="3" lg="3" xl="3">
            <v-menu
              v-model="menu1"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  label="ช่วงวัน"
                  prepend-inner-icon="mdi-calendar"
                  v-bind="attrs"
                  v-on="on"
                  show-current
                  dense
                  outlined
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                @input="menu1 = false"
              ></v-date-picker>
            </v-menu>
          </v-col>
          <div style="font-weight:bold; padding-top: 20px;">
            <span>ถึง</span>
          </div>
          <v-col cols="5" xs="" sm="" md="" lg="" xl="">
            <v-menu
              v-model="menu2"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date2"
                  prepend-inner-icon="mdi-calendar"
                  v-bind="attrs"
                  v-on="on"
                  dense
                  outlined
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date2"
                @input="menu2 = false"
              ></v-date-picker>
            </v-menu>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" xs="12" sm="6" md="6" lg="6" xl="6">
            <v-select
              :items="age_range"
              label="ช่วงอายุ"
              dense
              outlined
            ></v-select>
          </v-col>
          <v-col cols="12" xs="0" sm="1" md="2" lg="2" xl="4"></v-col>
          <v-col cols="6" xs="6" sm="2" md="2" lg="" xl="1" class="text-right">
            <v-btn outlined color="purple lighten-3" style="width:120px;"
              >ล้างข้อมูล</v-btn
            >
          </v-col>
          <v-col
            cols="6"
            xs="6"
            sm="3"
            md="2"
            lg=""
            xl="1"
            class="text-right"
            style="padding-right:20px;"
          >
            <v-btn color="purple lighten-3" style="color:white; width:100px;"
              >ค้นหา</v-btn
            >
          </v-col>
        </v-row>
      </v-card-content>
      <br />
      <v-divider color="#C5C5C5"></v-divider>
      <br />
      <v-row>
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
      <v-row height="400px" justify="space-around">
        <v-col cols="12" sm="">
          <v-card
            class="pa-2 bdr_12_only set_card_of"
            width="auto"
            height="100%"
          >
            <v-card-subtitle>
              <span class="topic-name-card_c3 pl-5">
                BMI
              </span>
            </v-card-subtitle>
            <v-card-text class="pa-1">
              <table class="table_head1 set_table_of" style="width:100%;">
                <tr style="text-align:center;" height="35px">
                  <th width="4%"></th>
                  <th style="text-align:left;padding-left:15px;">กิจกรรม</th>
                  <th>ชาย</th>
                  <th>หญิง</th>
                  <th>อายุ 18 - 20</th>
                  <th>อายุ 21 - 30</th>
                  <th>อายุ 31 - 40</th>
                  <th>อายุ 41 - 50</th>
                  <th>อายุ 51 - 60</th>
                  <th>อายุ 60 ปี ขึ้นไป</th>
                  <th>เฉลี่ยรวม</th>
                  <th width="4%"></th>
                </tr>
                <tr
                  class="card_table_content_font"
                  v-for="item in data_card1_status"
                  :key="item.id"
                  style="text-align:center;"
                  height="35px"
                >
                  <td></td>

                  <td class="two-data-card2" style="text-align:left; ">
                    <v-icon x-small :style="{ color: item.color }"
                      >mdi-circle
                    </v-icon>
                    <span style="padding-left:5px">
                      {{ item.name }}
                    </span>
                  </td>
                  <td>{{ item.dataMan }}</td>
                  <td>{{ item.dataWman }}</td>
                  <td>{{ item.r1 }}</td>
                  <td>{{ item.r2 }}</td>
                  <td>{{ item.r3 }}</td>
                  <td>{{ item.r4 }}</td>
                  <td>{{ item.r5 }}</td>
                  <td>{{ item.r6 }}</td>
                  <td>{{ item.avg }}</td>
                  <td></td>
                </tr>
              </table>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <br />
      <v-card-content>
        <div class="content_dialog_page_bot">
          <div class="table_news_p7_4">
            <v-simple-table>
              <template v-slot:default>
                <thead color="gray">
                  <tr class="table_head1">
                    <th width="" class="text-left">
                      ลำดับ
                    </th>
                    <th width="30%" class="text-left">
                      รายชื่อผู้ใช้
                    </th>
                    <th width="" class="text-left">
                      ช่วงอายุ
                    </th>
                    <th width="" class="text-center">
                      เพศ
                    </th>
                    <th width="" class="text-center">
                      น้ำหนัก
                    </th>
                    <th width="" class="text-left">
                      BMI
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="text-left card_table_content_font"
                    v-for="item in data_table_p7_4"
                    :key="item.id"
                  >
                    <td>{{ item.no }}</td>
                    <td>{{ item.name }}</td>
                    <td class=" text-truncate" style="max-width: 100px;">
                      {{ item.age_range }}
                    </td>
                    <td class="text-center">{{ item.gender }}</td>
                    <td class="text-center">{{ item.weight }}</td>
                    <td class="text-left">{{ item.bmi }}</td>
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
      modal: false,
      menu1: false,
      menu2: false,
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
      data_card1_status: [
        {
          name: "ต่ำ",
          color: "#AD8DBB",
          dataMan: "638",
          dataWman: "270",
          r1: "145",
          r2: "76",
          r3: "34",
          r4: "103",
          r5: "141",
          r6: "28",
          avg: "22.7%",
        },
        {
          name: "ปกติ",
          color: "#359BD3",
          dataMan: "557",
          dataWman: "250",
          r1: "264",
          r2: "178",
          r3: "100",
          r4: "96",
          r5: "34",
          r6: "35",
          avg: "19.9%",
        },
        {
          name: "ค่อนข้างสูง",
          color: "#58BFAE",
          dataMan: "784",
          dataWman: "275",
          r1: "163",
          r2: "254",
          r3: "103",
          r4: "108",
          r5: "206",
          r6: "46",
          avg: "28%",
        },
        {
          name: "สูง",
          color: "#FF850A",
          dataMan: "652",
          dataWman: "480",
          r1: "364",
          r2: "131",
          r3: "104",
          r4: "84",
          r5: "12",
          r6: "7",
          avg: "23.2%",
        },
        {
          name: "สูงมาก",
          color: "#DA2121 ",
          dataMan: "145",
          dataWman: "145",
          r1: "145",
          r2: "145",
          r3: "131",
          r4: "99",
          r5: "63",
          r6: "3",
          avg: "5.1%",
        },
      ],
      data_table_p7_4: [
        {
          no: "1.",
          name: "สญานัน สุภัสศิรา",
          age_range: "21-30",
          gender: "หญิง",
          weight: "78",
          bmi: "30.1",
        },
        {
          no: "2.",
          name: "สุนันญา กันต์จวรรณ์",
          age_range: "41-50",
          gender: "หญิง",
          weight: "96",
          bmi: "28.3",
        },
        {
          no: "3.",
          name: "สุวรรณจณีย์ ศิลธร",
          age_range: "21-30",
          gender: "หญิง",
          weight: "101",
          bmi: "25.2",
        },
        {
          no: "4.",
          name: "เขมิกา กัญญานา",
          age_range: "51-60",
          gender: "หญิง",
          weight: "94",
          bmi: "28.4",
        },
      ],
    };
  },
};
</script>
<style scoped>
.report_sub4 {
  padding: 20px;
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
.report_card_root {
  padding: 20px;
}
.ddog {
  font-size: 20px;
}
.v-card__title {
  padding: 0;
}
.head_title_card_p7_4 {
  width: 50%;
  /* background-color: rgba(0, 0, 0, 0.2); */
}
.head_card_p7_4 {
  display: flex;
  flex-direction: row;
}

@media only screen and (min-width: 320px) and (max-width: 767px) {
  .text_header {
    white-space: normal;
    width: 100%;
    letter-spacing: 1.3px;
  }
  .head_title_card_p7_4 {
    width: 100%;
  }
  .set_card_of {
    overflow-y: scroll;
    width: 100%;
  }
  .set_table_of {
    overflow-y: scroll;
    width: 100%;
  }
}
</style>
