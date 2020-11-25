<template>
  <div class="report">
    <h1>Report page</h1>
    <br />
     <div class="dialog_p3_card1">
    <v-card>
     <v-card-title>
        
     </v-card-title>
      <v-card-content>
        <div class="content_dialog_page_top">
          <div class="content_top_left_page">
             <div class="card_el_card2">
        <!-- card2 head+content -->
      <v-card class="card2_size" elevation="3" outlined>
        <div class="card2_root">
          <!-- card2 header -->
          <div class="head-card2">
            <div class="">
              <div class="header_card2">
               <div class="title_card2">
                <div class="card2_nameNicon">
                  <div style="padding-right:10px;">
                    <v-icon color="#009688">mdi-amazon-alexa</v-icon>
                  </div>
                  <div class="card2_bot_text ">
                    <span><strong>Ideal weight</strong></span>
                  </div>
                </div>
              </div>
               <div class="head_card2_btn">
                <v-btn small icon fab>
                  <v-icon class="exit-icon">mdi-exit-to-app</v-icon>
                </v-btn>
              </div>
              </div>
              <div class="card2_line2 grey--text">
              <span
                >Weightrefers to the weight of a person's body. You can know your health state besed on weight change.</span
              >
            </div>
            </div>
          </div>
          <!-- card2 content -->
          <div class="content1_card2">
            <!-- card l -->
            <div class="chart1_card2 c30">
              <div>
                <canvas id="graph1_c2" width="200px" height="220"></canvas>
              </div>
            </div>
            <!-- card r  -->
            <div class="data_table_card2 c30">
              <div class="card1-subcard-3 ct_set" width="" height="">
                <div class="table_content_card2">
                  <table
                    style="width: 100%;
  border-collapse: collapse;"
                  >
                    <tr>
                      <th width="16.67%"></th>
                      <th>
                        <div class="graph6-details ">
                          <!-- แถบprogress -->
                          <div class="progress-el">
                            <v-progress-linear
                              color="none"
                              rounded
                              value="100"
                            ></v-progress-linear>
                            <br />
                            <span class="text-top ">56.7kg.</span>
                            <v-progress-linear
                              color="none"
                              rounded
                              value="100"
                            ></v-progress-linear>
                            <br />
                            <span class="text-top">76.6kg.</span>
                            <v-progress-linear
                              color="none"
                              rounded
                              value="100"
                            ></v-progress-linear>
                            <br />
                            <span class="text-top">85.8kg.</span>
                            <v-progress-linear
                              color="none"
                              rounded
                              value="100"
                            ></v-progress-linear>
                            <br />
                            <span class="text-top">98.0kg.</span>
                            <v-progress-linear
                              color="none"
                              rounded
                              value="100"
                            ></v-progress-linear>
                          </div>
                          <div class="progress-el">
                            <v-progress-linear
                              color="purple darken-2"
                              height="15"
                              class="rounded-l-xl"
                              value="100"
                            ></v-progress-linear>
                            <br />
                            <v-progress-linear
                              color="blue darken-2"
                              height="15"
                              value="100"
                            ></v-progress-linear>
                            <br />
                            <v-progress-linear
                              color="green darken-2"
                              height="15"
                              value="100"
                            ></v-progress-linear>
                            <br />
                            <v-progress-linear
                              color="yellow darken-2"
                              height="15"
                              value="100"
                            ></v-progress-linear>
                            <br />
                            <v-progress-linear
                              color="red darken-2"
                              height="15"
                              class="rounded-r-xl"
                              value="100"
                            ></v-progress-linear>
                          </div>
                          <br />
                        </div>
                      </th>
                    </tr>
                  </table>
                  <table
                    style="width: 100%;
  border-collapse: collapse;"
                  >
                    <tr>
                      <th></th>
                      <th>
                        <div class="i-human">
                          <div><v-icon>mdi-human-male</v-icon></div>
                          <div><p>Underweight</p></div>
                        </div>
                      </th>
                      <th>
                        <div class="i-human">
                          <div><v-icon>mdi-human-male</v-icon></div>
                          <div><p>Normal</p></div>
                        </div>
                      </th>
                      <th>
                        <div class="i-human">
                          <div><v-icon>mdi-human-male</v-icon></div>
                          <div><p>Overweight</p></div>
                        </div>
                      </th>
                      <th>
                        <div class="i-human">
                          <div><v-icon>mdi-human-male</v-icon></div>
                          <div><p>Obese I</p></div>
                        </div>
                      </th>
                      <th>
                        <div class="i-human">
                          <div><v-icon>mdi-human-male</v-icon></div>
                          <div><p>Obese II</p></div>
                        </div>
                      </th>
                    </tr>
                    <tr v-for="item in items" :key="item.id" align="center">
                      <th scope="row" class="text-left">
                        <v-icon  :style="{ color: item.color }">{{
                          item.icon
                        }}</v-icon>
                        <span class="black--text"
                          ><strong>{{ item.gender }}</strong></span
                        >
                      </th>
                      <td
                        v-for="n in 5"
                        :key="n"
                        width="16.67%"
                        height="40px"
                        style="border:1px solid black;"
                        class="font_omg"
                      >
                        {{ item.data[n - 1] }}
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-card>
    </div>
    <br />
          </div>
          <div class="content_top_right_page">
            <!-- data top right -->
            <br />
          </div>
        </div>
        <div class="content_dialog_page_bot">
          <div>
            <br />
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <span class=""> ข้อมูลผู้ใช้งาน</span>
                  <tr>
                    <th class="text-left">
                      รหัส
                    </th>
                    <th class="text-left">
                      ชื่อ-สกุล
                    </th>
                    <th class="text-left">
                      ตำแหน่ง
                    </th>
                    <th class="text-left">
                      การเดิน (วันนี้)
                    </th>
                    <th class="text-left">
                      เปลี่ยนแปลงการเดิน
                    </th>
                    <th class="text-left">
                      การนั่งนาน (วันนี้)
                    </th>
                    <th class="text-left">
                      เปลี่ยนแปลงการนั่ง
                    </th>
                    <th class="text-left">
                      ดูประวัติ
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in moving_data_1" :key="item.id">
                    <td>{{ item.no }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.pos }}</td>
                    <td>{{ item.walk_sum }}</td>
                      <td :style="{ color: item.color0 }" >{{ item.walk_change }}</td>
                    <td>{{ item.long_sit }}</td>
                    <td :style="{ color: item.color1 }" >{{ item.sit_change}}
                    </td>
                    <td>
                      <v-btn
                        :style="{ backgroundColor: item.color }"
                        elevation="2"
                        small
                      >
                        {{ item.show_history }}
                      </v-btn>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
            <v-divider></v-divider>
          </div>
        </div>
        <!-- <canvas id="graphline" width="" height="40px"></canvas> -->
      </v-card-content>
    </v-card>
  </div>
  </div>
</template>

<script>
export default {
  
}
</script>
<style scoped>

</style>