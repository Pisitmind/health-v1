<template>
  <div class="report_sub5">
    <v-card class="report_card_root">
      <v-card-title>
        <div class="head_title_card_p7_5">
          <div class="head_card_p7_5">
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
              <span class="">รายงานข้อมูลสุขภาพจำเพาะ</span>
            </div>
          </div>
            <br />
        </div>
      </v-card-title>
            <br />
      <v-card-content>
        <v-row>
          <v-col cols="6" sm="6">
            <v-select
              :items="items"
              label="กลุ่มผู้ใช้งาน"
              dense
              outlined
              clearable
            ></v-select>
          </v-col>
          <v-col cols="6" sm="">
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
            <span>to</span>
          </div>
          <v-col cols="6" sm="">
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
          <v-col cols="6" sm="6">
            <v-select
              :items="age_range"
              label="ช่วงอายุ"
              dense
              outlined
            ></v-select>
          </v-col>
          <v-col col="12" sm=""></v-col>
          <v-col col="6" sm="1" class="text-right">
            <v-btn outlined color="purple lighten-3" style="width:100px;"
              >ล้างข้อมูล</v-btn
            >
          </v-col>
          <v-col col="6" sm="2" class="text-right" style="padding-right:20px;">
            <v-btn color="purple lighten-3" style="color:white; width:100px;"
              >ค้นหา</v-btn
            >
          </v-col>
        </v-row>
      </v-card-content>
      <br />
      <v-divider color="#C5C5C5"></v-divider>
      <br />
      <v-row style="padding:0 50px 0 0;">
        <v-col col="12" sm="">
          <p style="text-indent: 20px;">พบผลลัพธ์ 2,800 ผลลัพธ์</p>
        </v-col>
        <v-col col="6" sm="2" class="text-right">
          <v-btn color="#3BD081" style="color:white; width:120px;">พิมพ์</v-btn>
        </v-col>
        <v-col col="6" sm="2" class="text-right">
          <v-btn color="purple lighten-3" style="color:white;"
            >นำออกเอกสาร
            <v-icon>mdi-menu-down</v-icon>
          </v-btn>
        </v-col>
      </v-row>
      <br />
      <v-card-content>
        <div class="content_dialog_page_bot">
          <div class="table_news_p7_5">
            <v-simple-table>
              <template v-slot:default>
                <thead color="gray">
                  <tr class="">
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
                    <th width="" class="text-left">
                     ความดันโลหิต
                    </th>
                    <th width="" class="text-left">
                     ออกซิเจนในเลือด
                    </th>
                    <th width="" class="text-left">
                     อุณหภูมิร่างกาย
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    class="text-left"
                    v-for="item in data_table_p7_5"
                    :key="item.id"
                  >
                    <td>{{ item.no }}</td>
                    <td>{{ item.name }}</td>
                    <td class=" text-truncate" style="max-width: 100px;">
                      {{ item.age_range }}
                    </td>
                    <td class="text-center">{{ item.gender }}</td>
                    <td class="text-center">{{ item.blood_presure }}</td>
                    <td class="text-center">{{ item.o2_blood }}</td>
                    <td class="text-left">{{ item.body_temp }}</td>
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
      data_table_p7_5: [
        {
          no: "1.",
          name: "สญานัน สุภัสศิรา",
          age_range: "21-30",
          gender: "หญิง",
          blood_presure: "ปกติ",
          o2_blood: "ปกติ",
          body_temp: "36.5",
        },
        {
          no: "2.",
          name: "สุนันญา กันต์จวรรณ์",
          age_range: "41-50",
          gender: "หญิง",
          blood_presure: "เริ่มสูง",
          o2_blood: "ปกติ",
          body_temp: "36.0",
        },
        {
          no: "3.",
          name: "สุวรรณจณีย์ ศิลธร",
          age_range: "21-30",
          gender: "หญิง",
          blood_presure: "สูง",
          o2_blood: "มากกว่าปกติ",
          body_temp: "35.2",
        },
        {
          no: "4.",
          name: "เขมิกา กัญญานา",
          age_range: "51-60",
          gender: "หญิง",
          blood_presure: "สูง",
          o2_blood: "ปกติ",
          body_temp: "36.7",
        },
        {
          no: "5.",
          name: "เขมิกา กัญญานา",
          age_range: "51-60",
          gender: "หญิง",
          blood_presure: "สูงมาก",
          o2_blood: "มากกว่าปกติ",
          body_temp: "36.5",
        },
        {
          no: "6.",
          name: "สุวรรณจณีย์ ศิลธร",
          age_range: "21-30",
          gender: "หญิง",
          blood_presure: "ปกติ",
          o2_blood: "ปกติ",
          body_temp: "36.5",
        },
        {
          no: "7.",
          name: "เขมิกา กัญญานา",
          age_range: "21-30",
          gender: "หญิง",
          blood_presure: "ปกติ",
          o2_blood: "ปกติ",
          body_temp: "36.4",
        },
        {
          no: "8.",
          name: "สญานัน สุภัสศิรา",
          age_range: "41-50",
          gender: "หญิง",
          blood_presure: "ปกติ",
          o2_blood: "น้อยกว่าปกติ",
          body_temp: "35.8",
        },
        {
          no: "9.",
          name: "สุนันญา กันต์จวรรณ์",
          age_range: "31-40",
          gender: "หญิง",
          blood_presure: "ปกติ",
          o2_blood: "มากกว่าปกติ",
          body_temp: "36.5",
        },
      ],
    };
  },
};
</script>
<style scoped>
.report {
  padding: 20px;
}
.text_header{
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  text-align: center;
  align-items: center;
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
.head_title_card_p7_5 {
  width: 50%;
  /* background-color: rgba(0, 0, 0, 0.2); */
}
.head_card_p7_5 {
  display: flex;
  flex-direction: row;
}
</style>
