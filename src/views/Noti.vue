<template>
  <v-container grid-list-lg-xl class="noti">
    <!-- <div class="noti"> -->
    <div class="card_el_card2">
      <v-card class="bdr_12">
        <v-card-content>
          <div class="card_content">
            <div class="head-card1">
              <div class="card1-left">
                <div class="head_name_tag">
                  <p>Hearth rate</p>
                </div>
              </div>
              <div class="card1-right">
                <div class="right-icon">
                  <v-row justify="center">
                    <v-dialog v-model="dialog" width="">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn small icon fab v-bind="attrs" v-on="on">
                          <img
                            height="30px"
                            class="filter-white"
                            src="../assets/icon/icon_detail.svg"
                            alt="detail"
                          />
                        </v-btn>
                      </template>
                      <v-card>
                        <v-card-title class="set_head_dia">
                          <div class="head_dialog" id="head_dia_Hrate">
                            <div class="text_head_hr head-card2">
                              <span class="headline">Heart rate risk</span>
                            </div>
                            <div>
                              <v-btn
                                color="black darken-1"
                                icon
                                x-large
                                @click="dialog = false"
                              >
                                <v-icon>mdi-close</v-icon>
                              </v-btn>
                            </div>
                          </div>
                          <div class="card2_line2 grey--text">
                            <span>
                              exercise and Weight loss can help limit some of
                              the health risks associated with tachycardia by
                              reducing the negative effects of high blood
                              pressure and sleep apnea.
                            </span>
                          </div>
                        </v-card-title>
                        <v-card-text> </v-card-text>
                        <dia_noti />
                      </v-card>
                    </v-dialog>
                  </v-row>
                </div>
              </div>
            </div>
            <div class="content1-card1">
              <div class="ct_1_c_noti">
                <div class="cont1-card1 c_size c1">
                  <div class="head_ct1_c1">
                    <span style="text-align: center;" class="center set_wd100"
                      >Resting state</span
                    >
                    <p
                      class="grey--text "
                      style="text-align: center; font-size:16px; line-height: 1.2;"
                    >
                      Heart rate is resting state usually <br />
                      varies between 60 and 100 BPM.
                    </p>
                  </div>
                  <div style="float: left; position: relative;">
                    <div
                      class="set_text_in_donut_1"
                      style="width: 100%; position: absolute; top: 50%; left: 0; margin-top: -10px; 
                line-height:19px; text-align: center; z-index: 2"
                    >
                      <span class="text_inside1">72</span><br />
                      <span class="text_inside">avg. ฺBPM</span>
                    </div>
                    <div style="padding-top:20px;">
                      <canvas id="graph0" width="" height="200px"></canvas>
                    </div>
                  </div>

                  <div class="table_ct1_c1 pd_y_data ">
                    <v-simple-table
                      class="table_c1 c1"
                      style="width: 100%;
  border-collapse: collapse;"
                    >
                      <v-title class="title_table_c1 "
                        >Resting state of people</v-title
                      >
                      <v-row
                        no-gutters
                        style="height:auto;"
                        v-for="item in table1_ct1"
                        :key="item.id"
                      >
                        <v-col
                          v-for="n in 6"
                          :key="n"
                          cols="6"
                          md="4"
                          sm="6"
                          xs="4"
                        >
                          <div class="">
                            <v-card class="box_ct1 pa-2" outlined tile>
                              <div class="">
                                <div>
                                  <p class="font_omg">{{ item.data[n - 1] }}</p>
                                </div>
                                <div class="name_lb_c1">
                                  <v-icon
                                    x-small
                                    :style="{ color: item.color[n - 1] }"
                                    >mdi-circle</v-icon
                                  >
                                  <span class="font_sm pd_text_5">{{
                                    item.name[n - 1]
                                  }}</span>
                                </div>
                              </div>
                            </v-card>
                          </div>
                        </v-col>
                      </v-row>
                    </v-simple-table>
                  </div>
                </div>
                <div class="cont2-card1 c_size c2">
                  <div class="head_ct1_c1 ">
                    <span style="text-align: center;" class="center set_wd100"
                      >Active state</span
                    >
                    <p
                      class="grey--text"
                      style="font-size:16px; line-height: 1.2;"
                    >
                      Your exercise heart rate zone is calculated as below.
                      Select the appropriate heart rate zone to get the most out
                      of your exercise.
                    </p>
                  </div>
                  <div
                    class="set_pd_top"
                    style="float: left; position: relative;"
                  >
                    <div
                      class="set_text_in_donut_2"
                      style="width: 100%; position: absolute; top: 50%; left: 0; margin-top: -5px; line-height:19px; text-align: center; z-index: 2"
                    >
                      <span class="text_inside1">116</span><br />
                      <span class="text_inside">avg. ฺBPM</span>
                    </div>
                    <div class="" style="padding-top:20px;">
                      <canvas id="graph1" width="" height="200px"></canvas>
                    </div>
                  </div>

                  <div class="table_ct2_c1 pd_y_data ">
                    <v-simple-table
                      class="table_c1 c1"
                      style="width: 100%;
  border-collapse: collapse;"
                    >
                      <v-title class="title_table_c1"
                        >Active state of people</v-title
                      >
                      <v-row no-gutters style="height:auto;">
                        <v-dialog
                          v-for="(item, index) in table1_ct2"
                          :key="index"
                          v-model="dialog1[n]"
                          width="270px"
                          :retain-focus="false"
                          hide-overlay
                          absolute
                          offset-y
                        >
                          <template v-slot:activator="{ on, attrs5 }">
                            <v-col
                              v-for="n in 6"
                              :key="n"
                              cols="6"
                              md="4"
                              sm="6"
                              xs="6"
                            >
                              <v-card
                                class="box_ct1 pa-2"
                                outlined
                                tile
                                v-bind="attrs5"
                                v-on="on"
                              >
                                <div class="">
                                  <div>
                                    <p class="font_omg">
                                      {{ item.data[n - 1] }}
                                    </p>
                                  </div>
                                  <div class="name_lb_c1">
                                    <v-icon
                                      x-small
                                      :style="{ color: item.color[n - 1] }"
                                      >mdi-circle</v-icon
                                    >
                                    <span class="font_sm pd_text_5">{{
                                      item.name[n - 1]
                                    }}</span>
                                  </div>
                                </div>
                              </v-card>
                            </v-col>
                          </template>
                          <v-card>
                            <v-card-title>
                              <span>Heart rate {{ item.name[index] }}</span>
                            </v-card-title>
                            <v-card-text>
                              <thead>
                                <tr width="100%" justify="space-around">
                                  <th width="" class="text-left">
                                    NO
                                  </th>
                                  <th width="" class="text-center">
                                    NAME
                                  </th>
                                  <th width="" class="text-left">
                                    Notification
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr
                                  v-for="item in mini_data"
                                  :key="item.id"
                                  class="text-left mini_fz"
                                  width="100%"
                                  height="30px"
                                  justify="space-around"
                                >
                                  <td width="20%">{{ item.no }}</td>
                                  <td width="60%">{{ item.name }}</td>
                                  <td width="20%" class="text-center">
                                    <v-btn
                                      :style="{
                                        backgroundColor: item.color,
                                        color: item.color1,
                                      }"
                                      elevation="2"
                                      x-small
                                    >
                                      {{ item.noti }}
                                    </v-btn>
                                  </td>
                                </tr>
                              </tbody>
                            </v-card-text>
                          </v-card>
                        </v-dialog>
                      </v-row>
                    </v-simple-table>
                  </div>
                </div>
              </div>
              <div class="ct_2_c_noti">
                <div class="ct_r_c_noti c1">
                  <v-card
                    class="card1-subcard-3_sp bdr_12_only"
                    width=""
                    height=""
                  >
                    <v-card-title class="font_style_title_card">
                      <span class="topic_name_card pl-5 ">
                        Heart rate zone
                      </span>
                    </v-card-title>
                    <v-card-text class="content_card_noti pa-1">
                      <div class="card-info-right pa-1">
                        <v-simple-table
                          class="card2-table"
                          v-for="item in table1_ct1"
                          :key="item.id"
                          style="width: 100%;
  border-collapse: collapse;"
                        >
                          <tr>
                            <th></th>
                            <th></th>
                          </tr>
                          <tr v-for="x in 6" :key="x" class="two-data-card2">
                            <td height="38px" class="pd_text set_cen_el">
                              <div class="t_name_ct3c1 set_cen_el">
                                <v-icon
                                  x-small
                                  :style="{ color: item.color[x - 1] }"
                                  >mdi-circle
                                </v-icon>
                                <span class="txt_pd font_sm ">
                                  {{ item.name[x - 1] }}
                                </span>
                              </div>
                            </td>
                            <td class="alr font_sm ">
                              {{ item.avg[x - 1] }}
                            </td>
                          </tr>
                        </v-simple-table>
                      </div>
                    </v-card-text>
                  </v-card>
                </div>
              </div>
              <!-- <p>content</p> -->
            </div>
          </div>
        </v-card-content>
      </v-card>
    </div>
    <div class="card_el_card2">
      <!-- card2 head+content -->
      <v-card class="card_rootcontent bdr_12">
        <v-card-content class="">
          <div class="">
            <!-- card2 header -->
            <div class="head-card2">
              <div class="">
                <div class="head-card1">
                  <div class="title_card1_p3">
                    <div style="padding-right:10px;">
                      <img
                        height="40px"
                        src="../assets/icon/icon_weight_01.svg"
                        alt="human"
                      />
                    </div>
                    <div class="card3-bot-text">
                      <span>Ideal weight</span>
                    </div>
                  </div>
                  <div class="head_card2_btn">
                    <v-btn small icon fab class="hid">
                      <v-icon class="exit-icon">mdi-exit-to-app</v-icon>
                    </v-btn>
                  </div>
                </div>
                <div class="card2_line2 grey--text">
                  <span
                    >Weightrefers to the weight of a person's body. You can know
                    your health state besed on weight change.</span
                  >
                </div>
              </div>
            </div>
            <!-- card2 content -->
            <div class="content1_card2">
              <!-- card l -->
              <div
                class="chart1_card2"
                style="float: left; position: relative;"
              >
                <div
                  style="width: 100%; position: absolute; top: 50%; left: 0; margin-top: -15px; line-height:19px; text-align: center; z-index: 2"
                >
                  <span class="text_inside1">76</span><br />
                  <span class="text_inside">avg. kg.</span>
                </div>
                <div style="display:flex;justify-content:center;">
                  <canvas id="graph1_c2" width="240px" height="240"></canvas>
                </div>
              </div>
              <!-- card r  -->
              <div class="data_table_card2">
                <div class="card1-subcard-3 ct_set" width="" height="">
                  <div class="table_content_card2">
                    <v-simple-table
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
                    </v-simple-table>

                    <v-simple-table
                      class="font_reg"
                      style="width: 100%;
  border-collapse: collapse; "
                    >
                      <tr class="set_reg">
                        <td class="text-center"></td>
                        <td class="text-center">
                          <div class="i-human">
                            <div>
                              <img
                                height="60px"
                                class="set_human_fix filter-white"
                                src="../assets/icon/Login-Regis_8Jul20-21.png"
                                alt="human"
                              />
                            </div>
                            <div><p class="set_reg">Underweight</p></div>
                          </div>
                        </td>
                        <td class="text-center">
                          <div class="i-human">
                            <div>
                              <img
                                height="60px"
                                class="set_human_fix filter-white"
                                src="../assets/icon/Login-Regis_8Jul20-23.png"
                                alt="human"
                              />
                            </div>
                            <div><p>Normal</p></div>
                          </div>
                        </td>
                        <td class="text-center">
                          <div class="i-human">
                            <div>
                              <img
                                height="60px"
                                class="set_human_fix filter-white"
                                src="../assets/icon/Login-Regis_8Jul20-20.png"
                                alt="human"
                              />
                            </div>
                            <div><p>Overweight</p></div>
                          </div>
                        </td>
                        <td class="text-center">
                          <div class="i-human">
                            <div>
                              <img
                                height="60px"
                                class="set_human_fix filter-white"
                                src="../assets/icon/Login-Regis_8Jul20-18.png"
                                alt="human"
                              />
                            </div>
                            <div><p>Obese I</p></div>
                          </div>
                        </td>
                        <td class="text-center">
                          <div class="i-human">
                            <div>
                              <img
                                height="60px"
                                class="set_human_fix filter-white"
                                src="../assets/icon/Login-Regis_8Jul20-15.png"
                                alt="human"
                              />
                            </div>
                            <div><p>Obese II</p></div>
                          </div>
                        </td>
                      </tr>
                      <tr v-for="item in items" :key="item.id" align="center">
                        <th scope="row" class="fix_center_table" align="left">
                          <img
                            height="40px"
                            class="filter-white"
                            :src="require('../assets/icon/' + item.icons)"
                          />
                          <span class="black--text"
                            ><strong>{{ item.gender }}</strong></span
                          >
                        </th>
                        <td
                          v-for="n in 5"
                          :key="n"
                          width="16.67%"
                          height="40px"
                          class="set_data_table_size"
                          style="font-size:29px; font-weight: bold; border:1.5px solid; #757575;"
                        >
                          {{ item.data[n - 1] }}
                        </td>
                      </tr>
                    </v-simple-table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-card-content>
      </v-card>
    </div>
    <div class="card_el_card2">
      <!-- card2 head+content -->
      <v-card class="bdr_12">
        <v-card-content>
          <div class="card_rootcontent">
            <!-- card2 header -->
            <div class="head-card2">
              <div class="">
                <div class="header_card2">
                  <div class="title_card2">
                    <div class="card2_nameNicon set_center">
                      <div style="padding-right:10px;">
                        <img
                          height="40px"
                          class="filter-white"
                          src="../assets/icon/bmi.svg"
                          alt="bmi"
                        />
                      </div>
                      <div class="card3-bot-text  ">
                        <span>BMI</span>
                      </div>
                    </div>
                  </div>
                  <div class="head_card2_btn">
                    <v-btn small icon fab class="hid">
                      <v-icon class="exit-icon">mdi-exit-to-app</v-icon>
                    </v-btn>
                  </div>
                </div>
                <div class="card2_line2 grey--text">
                  <span
                    >Weight (kg) / height(m2) You can't judge if you're "Odese"
                    just by BMI value. People can have more fat than muscle with
                    normal BMI and still classify as obese.</span
                  >
                </div>
              </div>
            </div>
            <!-- card2 content -->
            <div class="content1_card2">
              <!-- card l -->
              <div
                class="chart1_card2"
                style="float: left; position: relative;"
              >
                <div
                  style="width: 100%; position: absolute; top: 50%; left: 0; margin-top: -15px; line-height:19px; text-align: center; z-index: 2"
                >
                  <span class="text_inside1">27</span><br />
                  <span class="text_inside">avg.</span>
                </div>
                <div style="display:flex;justify-content:center;">
                  <canvas id="graph2_c2" width="240px" height="240"></canvas>
                </div>
              </div>
              <!-- card r  -->
              <div class="data_table_card2_1 c30">
                <div class="card1-subcard-3 ct_set" width="" height="">
                  <div class="table_content_card2">
                    <v-simple-table
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
                              <span class="text-top">18.5</span>
                              <v-progress-linear
                                color="none"
                                rounded
                                value="100"
                              ></v-progress-linear>
                              <br />
                              <span class="text-top">25.0</span>
                              <v-progress-linear
                                color="none"
                                rounded
                                value="100"
                              ></v-progress-linear>
                              <br />
                              <span class="text-top">28.0</span>
                              <v-progress-linear
                                color="none"
                                rounded
                                value="100"
                              ></v-progress-linear>
                              <br />
                              <span class="text-top">32.0</span>
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
                    </v-simple-table>

                    <v-simple-table
                      style="width: 100%;
  border-collapse: collapse;"
                      class="table_human"
                    >
                      <tr>
                        <th></th>
                        <th>
                          <div class="i-human">
                            <div><p>Low</p></div>
                          </div>
                        </th>
                        <th>
                          <div class="i-human">
                            <div><p>Normal</p></div>
                          </div>
                        </th>
                        <th>
                          <div class="i-human">
                            <div><p>increased</p></div>
                          </div>
                        </th>
                        <th>
                          <div class="i-human">
                            <div><p>Hight</p></div>
                          </div>
                        </th>
                        <th>
                          <div class="i-human">
                            <div><p>Very hight</p></div>
                          </div>
                        </th>
                      </tr>
                      <tr v-for="item in items_2" :key="item.id" align="center">
                        <th scope="row" class="text-center fix_center_table">
                          <img
                            height="40px"
                            class="filter-white"
                            :src="require('../assets/icon/' + item.icons)"
                          />
                          <span class="black--text"
                            ><strong>{{ item.gender }}</strong></span
                          >
                        </th>
                        <td
                          v-for="n in 5"
                          :key="n"
                          width="16.67%"
                          height="40px"
                          style="font-size:29px; font-weight: bold; border:1.5px solid; #757575;"
                          class="font_omg"
                        >
                          {{ item.data[n - 1] }}
                        </td>
                      </tr>
                    </v-simple-table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-card-content>
      </v-card>
    </div>
    <div class="card_el_card2">
      <v-card class="bdr_12" style="padding-bottom:30px;">
        <v-card-content>
          <div class="card_rootcontent">
            <div class="head-card2">
              <div class="">
                <div class="header_card2">
                  <div class="title_card2">
                    <div class="card2_nameNicon">
                      <div style="padding-right:10px;">
                        <img
                          height="40px"
                          class="filter-white"
                          src="../assets/icon/icon_step_03.svg"
                          alt="step"
                        />
                      </div>
                      <div class="card3-bot-text ">
                        <span>Step</span>
                      </div>
                    </div>
                  </div>
                  <div class="head_card2_btn">
                    <v-btn small icon fab class="hid">
                      <v-icon class="exit-icon">mdi-exit-to-app</v-icon>
                    </v-btn>
                  </div>
                </div>
              </div>
            </div>
            <div class="card2_line2 grey--text">
              <span>Daily avg doing more exercise id good for health</span>
            </div>
            <div class="content1_card3">
              <!-- card l -->
              <div class="chart1_card3  c30">
                <div class="size_chart3">
                  <canvas
                    id="graph1_c3"
                    class="set_size_graph_noti_last"
                  ></canvas>
                </div>
              </div>
              <br />
              <!-- card r  -->
              <div class="data_table_card3 c30">
                <div class="card1-subcard-3 ct_set" width="" height=""></div>
                <div class="table_content_card2">
                  <v-simple-table
                    style="width: 100%;
  border-collapse: collapse;"
                  >
                    <tr
                      v-for="item in data_card3"
                      :key="item.id"
                      align="center"
                    >
                      <th scope="row" width="10%" class="head_table_card3">
                        <v-icon small :style="{ color: item.color }">{{
                          item.icon
                        }}</v-icon>
                        <span
                          class="black--text pd_text_table_c3 pd_text_5 font_sm"
                          ><strong>{{ item.type }}</strong></span
                        >
                      </th>
                      <td
                        v-for="n in 7"
                        :key="n"
                        width=""
                        height="40px"
                        style="font-size:29px; font-weight: bold; border:1.5px solid; #757575;"
                        class="font_omg"
                      >
                        {{ item.data[n - 1] }}
                      </td>
                    </tr>
                  </v-simple-table>
                </div>
              </div>
            </div>
          </div>
        </v-card-content>
      </v-card>
    </div>
    <!-- </div> -->
  </v-container>
</template>
<script>
window.onscroll = function() {
  myFunction();
};

var navbar = document.getElementById("head_dia_Hrate");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
</script>
<script>
import Chart from "chart.js";
import dia_noti from "@/components/dia_noti.vue";

export default {
  components: {
    dia_noti,
  },

  mounted: function() {
    var ctx1_c2 = document.getElementById("graph1_c2").getContext("2d");
    var bar1_c2 = new Chart(ctx1_c2, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [300, 350, 130, 200, 50],
            backgroundColor: [
              "#AD8DBB",
              "#359BD3",
              "#58BFAE",
              "#FF850A",
              "#DA2121",
            ],
          },
        ],
        labels: ["Relaxed", "Light", "Intensive", "Aerbic", "Anaerobic"],
      },
      options: {
        responsive: true,
        legend: {
          display: false,
        },
      },
    });
    console.log(bar1_c2);
    var ctx2_c2 = document.getElementById("graph2_c2").getContext("2d");
    var bar2_c2 = new Chart(ctx2_c2, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [269, 492, 293, 34, 10],
            backgroundColor: [
              "#AD8DBB",
              "#359BD3",
              "#58BFAE",
              "#FF850A",
              "#DA2121",
            ],
          },
        ],
        labels: ["Relaxed", "Light", "Intensive", "Aerbic", "Anaerobic"],
      },
      options: {
        responsive: true,
        legend: {
          display: false,
        },
      },
    });
    console.log(bar2_c2);
    var ctx0 = document.getElementById("graph0").getContext("2d");
    var bar0 = new Chart(ctx0, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [1980, 452, 368, 0, 0, 0],
            backgroundColor: [
              "#359BD3",
              "#E7F524",
              "#FC9A38",
              "#F92969",
              "#FF1A1A",
              "#9406FF",
            ],
          },
        ],
        labels: [
          "Relaxed",
          "Light",
          "Intensive",
          "Aerbic",
          "Anaerobic",
          "VO" + 2 + "max",
        ],
      },
      options: {
        responsive: true,
        legend: {
          display: false,
        },
      },
    });
    console.log(bar0);
    var ctx1 = document.getElementById("graph1").getContext("2d");
    var bar1 = new Chart(ctx1, {
      type: "doughnut",
      data: {
        datasets: [
          {
            data: [946, 1003, 324, 527, 0, 0],
            backgroundColor: [
              "#359BD3",
              "#E7F524",
              "#FC9A38",
              "#F92969",
              "#FF1A1A",
              "#9406FF",
            ],
          },
        ],
        labels: [
          "Relaxed",
          "Light",
          "Intensive",
          "Aerbic",
          "Anaerobic",
          "VO" + 2 + "max",
        ],
      },
      options: {
        responsive: true,
        legend: {
          display: false,
        },
      },
    });
    console.log(bar1);
    var ctx2_c3 = document.getElementById("graph1_c3").getContext("2d");
    var bar2_c3 = new Chart(ctx2_c3, {
      type: "bar",
      data: {
        datasets: [
          {
            label: "Steps",
            backgroundColor: "#A3A1FB",
            data: [139, 384, 223, 189, 158, 318, 93],
            barPercentage: 0.5,
          },
          {
            label: "Setting",
            backgroundColor: "#FFDA83",
            data: [385, 259, 196, 230, 106, 237, 107],
            barPercentage: 0.5,
          },
        ],
        labels: ["7/8", "7/9", "7/10", "7/11", "7/12", "7/13", "7/14"],
      },
      options: {
        responsive: true,
        legend: {
          display: false,
        },
        scales: {
          xAxes: [{ stacked: true }],
          yAxes: [
            {
              stacked: true,
              ticks: {
                reverse: false,
                min: 0,
                max: 1000,
                stepSize: 200,
              },
            },
          ],
        },
      },
    });
    console.log(bar2_c3);
  },

  data: function() {
    return {
      dialog: false,
      dialog1: {},
      card2: {
        labels: ["18-20", "21-30", "31-40", "41-50", "51-60", "60 Up"],
        Color: [
          "#58BFAE",
          "#FF3E80",
          "#FF850A",
          "#DA2121",
          "#B4B4B4",
          "#2289D8",
        ],
        avg: ["22.7%", "19.9%", "28%", "23.2%", "5.1%", "1.1%"],
        datasets: [
          {
            label: "Man",
            backgroundColor: "#9ACDE9",
            data: [638, 557, 784, 652, 145, 24],
          },
          {
            label: "Woman",
            backgroundColor: "#F8C5C5",
            data: [270, 250, 275, 480, 145, 40],
          },
        ],
      },
      table1_ct1: [
        {
          name: [
            "Relaxed",
            "Light",
            "Intensive",
            "Aerbic",
            "Anaerobic",
            "VO" + 2 + "max",
          ],
          //   icon: "mdi-circle",
          color: [
            "#359BD3",
            "#E7F524",
            "#FC9A38",
            "#F92969",
            "#FF1A1A",
            "#9406FF",
          ],
          data: [1980, 452, 368, 0, 0, 0],
          avg: [
            "60-100 BPM",
            "101-116 BPM",
            "117-135 BPM",
            "136-154 BPM",
            "155-174 BPM",
            "Over 175 BPM",
          ],
        },
      ],
      table1_ct2: [
        {
          no: [1, 2, 3, 4, 5, 6],
          name: [
            "Relaxed",
            "Light",
            "Intensive",
            "Aerbic",
            "Anaerobic",
            "VO" + 2 + "max",
          ],
          //   icon: "mdi-circle",
          color: [
            "#359BD3",
            "#E7F524",
            "#FC9A38",
            "#F92969",
            "#FF1A1A",
            "#9406FF",
          ],
          data: [946, 1003, 324, 527, 0, 0],
          avg: [
            "60-100 BPM",
            "101-116 BPM",
            "117-135 BPM",
            "136-154 BPM",
            "155-174 BPM",
            "Over 175 BPM",
          ],
        },
      ],
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
      items: [
        {
          gender: "Men",
          icon: "mdi-human-male",
          icons: "icon_men.svg",
          color: "#359BD3",
          data: [27, 98, 780, 34, 0],
        },
        {
          gender: "Women",
          icon: "mdi-human-female",
          icons: "icon_women.svg",
          color: "#F28C8C",
          data: [12, 132, 560, 22, 0],
        },
      ],
      items_2: [
        {
          gender: "Men",
          icon: "mdi-human-male",
          icons: "icon_men.svg",
          color: "#359BD3",
          data: [27, 98, 780, 34, 0],
        },
        {
          gender: "Women",
          icon: "mdi-human-female",
          icons: "icon_women.svg",
          color: "#F28C8C",
          data: [12, 132, 560, 22, 0],
        },
      ],
      data_card3: [
        {
          type: "All",
          icon: "mdi-circle",
          color: "#359BD3",
          data: [524, 643, 419, 419, 264, 555, 200],
        },
        {
          type: "Steps",
          icon: "mdi-circle",
          color: "#A3A1FB",
          data: [139, 384, 223, 189, 158, 318, 93],
        },
        {
          type: "Setting",
          icon: "mdi-circle",
          color: "#FFDA83",
          data: [385, 259, 196, 230, 106, 237, 107],
        },
      ],
      mini_data: [
        {
          no: "101",
          name: "inverness McKenzie",
          noti: "SEND",
          color: "#22CE8B",
          color1: "white",
        },
        {
          no: "102",
          name: "inverness McKenzie",
          noti: "SEND",
          color: "#22CE8B",
          color1: "white",
        },
        {
          no: "103",
          name: "inverness McKenzie",
          noti: "SEND",
          color: "#22CE8B",
          color1: "white",
        },
        {
          no: "104",
          name: "inverness McKenzie",
          noti: "SEND",
          color: "#22CE8B",
          color1: "white",
        },
        {
          no: "105",
          name: "inverness McKenzie",
          noti: "SEND",
          color: "#22CE8B",
          color1: "white",
        },
      ],
    };
  },
};
</script>

<style scoped>
.v-dialog {
  position: absolute;
  bottom: 0;
  right: 0;
}
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}
.noti {
  /* padding: 16px; */
}
.set_reg {
  font-weight: regular !important;
}
.hid {
  display: none;
}
.card2_bot_text {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  text-align: center;
  font-size: 25px !important;
}
.mini_fz {
  font-size: 12px;
}
/* .head_name_tag {
  font-size: 20px;
} */
.c_size {
  height: auto;
  width: 300px;
}

/* .c1 {
  background-color: greenyellow;
}
.c2 {
  background-color: purple;
} */
.c3 {
  /* background-color: gray; */
  padding: 10px 0 10px 0;
}
.head-card1 {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px 0px 20px;
  margin: auto;
}
.content1-card1 {
  display: flex;
  /* justify-content:space-between; */
  padding: 0 20px;
  justify-content: space-around;
}
.font_norm {
  font-weight: normal;
}
.font_sm {
  font-size: 14px;
}
.font_omg {
  font-size: 30px;
  font-weight: bold;
  padding-bottom: 0px;
  margin-bottom: 5px;
}
.cont1-card1 {
  display: flex;
  flex-direction: column;
}
.cont2-card1 {
  display: flex;
  flex-direction: column;
}
.name_lb_c1 {
  display: flex;
  justify-content: center;
  /* padding: 5 0 px; */
}
.t1 {
  color: white;
  background-color: skyblue;
}
.topic_name_card {
  color: #ad8dbb;
}
.title_table_c1 {
  font-size: 17px;
  font-weight: bold;
}
.t_name_ct3c1 {
  display: flex;
}
.box_ct1 {
  align-items: center;
  text-align: center;
}
.txt_pd {
  padding-left: 10px;
}
.pd_text {
  padding-left: 20px;
}
.pd_text_5 {
  padding-left: 2px;
}
.text_inside1 {
  font-size: 35px;
  font-weight: bold;
}
.text_inside {
  font-size: 14px;
  color: gray;
}
.alr {
  text-align: right;
  padding-right: 20px;
}
.card1-subcard-3 {
  border-spacing: 15px;
}
.column_wrapper {
  column-count: 3;
}
.col3 {
  display: flex;
  flex-grow: 1;
  width: 33%;
  height: 100px;
}
.text_green {
  color: #22ce8b;
}
#head_dia_Hrate {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  /* background-color:#f2f2f2; */
}
/* .head_dialog {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  background-color:#f2f2f2;
} */

/* set sticky */

.content_dialog_page_top {
  display: flex;
  justify-content: space-around;
}
.c1_c2_dialog {
  padding: 20px;
}
.card_c1_c2_pd {
  padding: 15px;
}
.set_center {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.data_c1c2 {
  text-align: center;
  vertical-align: middle;
}
.left {
  text-align: left;
}
.content_dialog_page_bot {
  padding: 20px;
}

/* .c30{
  background-color:pink;
} */
.header_card2 {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px 0px 20px;
}

.head_card2_btn {
  align-content: center;
}

/* .card2_size{
  background-color:rgba(0,0,0,0.1);
} */
.card2_nameNicon {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  justify-items: center;
  /* padding:20px; */
}
.t_switch {
  display: flex;
  /* justify-items: center; */
  justify-content: center;
}
.chart1_card2 {
  padding: 70px 0;
  /* display: flex; */
  /* background-color:rgba(0,100,20,0.5); */
}
.chart1_card2_2 {
  padding: 0px;
}
.chart1_card3 {
  width: 100%;
  display: flex;
  /* align-content: center; */
  /* align-items: center; */
  justify-content: center;
  padding: 0 20px;
}
.content1_card2 {
  display: flex;
  justify-content: space-around;
  padding: 0 20px;
}
.content1_card3 {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 0 20px;
}
.title_card2 {
  justify-content: center;
  align-items: center;
  text-align: bottom;
  /* padding-top: 10px; */
}

.data_table_card2 {
  width: 70%;
  /* padding: 20px 0; */
  padding: 20px 0;
}
.data_table_card2_1 {
  width: 70%;
  padding: 30px 0 0 0;
}
.data_table_card3 {
  padding: 0 20px;
}
.size_chart3 {
  width: 80%;
  padding-top: 20px;
  align-items: center;
  justify-content: center;
  justify-items: center;
  align-content: center;
}
.head_table_card3 {
  text-align: left;
}
.fix_center_table {
  display: flex;
  justify-content: left;
  align-items: center;
  text-align: left;
}
.pd_y_data {
  padding: 20px 0;
}
.co5 {
  background-color: grey;
}
.card1-subcard-3_sp {
  height: 300px;
}
.font_reg {
  font-weight: regular !important;
}
.set_size_graph_noti_last {
  max-width: 800px;
  max-height: 250px;
}
@media only screen and (max-width: 320px) {
  .chart1_card2 {
    padding: 15px 0;
  }
  .head_dialog{
    width: 100%;
    padding: 0px;

  }
  .set_size_graph_noti_last {
    width: 100%;
    overflow-x: scroll;
  }
  .table_content_card2 {
    /* overflow-x: scroll; */
  }
  .v-data-table__wrapper {
    overflow-x: normal;
    overflow-y: normal;
  }
  .size_chart3 {
    width: 100%;
    max-width: 800px;
    overflow-x: scroll;
  }

  .head_table_card3 {
    white-space: nowrap;
  }
  /* .v-data-table__wrapper {
    overflow-x: scroll;
    width: 100%;
    overflow-y: hidden;
  } */
  .chart1_card3 {
    width: 100%;
    min-width: 200px;
    /* min-height: 200px; */
    /* width: 100%; */
    /* overflow-x: scroll; */
  }
}
@media only screen and (max-width: 768px) {
  .ct_r_c_noti {
    display: flex;
    justify-content: center;
  }
  .card1-subcard-3_sp {
    width: 600px !important;
  }
}
@media only screen and (max-width: 1024px) {
  .content1-card1 {
    width: 100% !important;
  }
  .card1-subcard-3_sp {
    width: fit-content;
    /* width: fit-content !important; */
  }
  .ct_1_c_noti {
    /* padding-left: 5px; */
  }
}
/* 800px */
/* @media only screen and (max-width: 800px) {
  .noti .card_el {
    background-color: rgba(224, 164, 51, 0.2);
  }
} */
@media (min-width: 1441px) and (max-width: 1920px) {
  .ct_1_c_noti {
    /* width: 65%; */
    /* background-color: #0072ff21; */
    width: 800px;
    display: flex;
    justify-content: space-around;
  }
  .set_size_graph_noti_last {
    width: -webkit-fill-available;
    max-width: fill-available;
  }
}
@media (min-width: 1921px) {
  .content1-card1 {
    width: 100%;
  }
  .ct_1_c_noti {
    width: 60%;
    display: flex;
    justify-content: space-around;
    /* background-color: rgba(0, 0, 0, 0.2); */
  }
  .ct_2_c_noti {
    width: 30%;
    display: flex;
    justify-content: center;
  }
  .set_size_graph_noti_last {
    width: 100%;
    max-width: 1900px;
  }
}
</style>
