<template>
  <div class="login" id="login">
    <v-app class="e20_none" overflow="hidden">
      <v-content class="log_in">
        <v-container class="e22" fluid fill-height>
          <v-layout v-resize="onResize" align-center>
            <v-flex>
              <v-card
                class="center elevation-10 pa-10"
                width="570px"
                height="auto"
              >
                <v-img
                  class="center"
                  max-width="200px"
                  src="../assets/pic/Login-Regis_8Jul20_Logo CMU Health.png"
                ></v-img>
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    label="USERNAME"
                    color="#AD8DBB"
                    placeholder="Enter your user name"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    :counter="10"
                    type="password"
                    :rules="passwordRules"
                    labelcounter="10"
                    label="PASSWORD"
                    color="#AD8DBB"
                    placeholder="Enter your password"
                    required
                  ></v-text-field>
                  <v-btn
                    to="/"
                    outline
                    block
                    class="white--text"
                    color="purple lighten-2"
                    >login</v-btn
                  >
                </v-form>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
      <div class="foot">
        <div class="foot_item">
          <div dense class="p_200 foot_content">
            <div class="pd_top_foot">
              <span>POWERED BY</span>
              <br />
              <v-img
                class="mg_y_10"
                max-width="180px"
                src="../assets/logo/Logo BAAK_w.png"
              ></v-img>
              <span class="">BAAK Co., Ltd.</span>
              <div class="icon_foot_l wd_80">
                <img
                  height="40px"
                  class="filter-white"
                  src="../assets/icon/icon_contact_call.svg"
                  alt="phone"
                />
                <img
                  height="40px"
                  class="filter-white"
                  src="../assets/icon/icon_contact_mail.svg"
                  alt="email"
                />
                <img
                  height="40px"
                  class="filter-white"
                  src="../assets/icon/icon_contact_location.svg"
                  alt="location"
                />
              </div>
            </div>
          </div>

          <div class="p_200">
            <div class="pd_top_foot">
              <v-img
                max-width="200px"
                src="../assets/pic/Login-Regis_8Jul20_Logo CMU Health.png"
              ></v-img>
              <div class="foot_card">
                <img
                  height="40px"
                  fill="white"
                  class="filter-white"
                  src="../assets/icon/icon_contact_location.svg"
                  alt="location"
                />
                <span class="pd_icon"> Chiang Mai University</span>
              </div>
              <div class="foot_card">
                <img
                  height="40px"
                  class="filter-white"
                  src="../assets/icon/icon_contact_call.svg"
                  alt="phone"
                />
                <span class="pd_icon"> (+66) 456 982 156</span>
              </div>
              <div class="foot_card">
                <img
                  class="filter-white"
                  height="40px"
                  src="../assets/icon/icon_contact_mail.svg"
                  alt="email"
                />
                <span class="pd_icon"> cmuhealth@cmu.ac.th</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-app>
  </div>
</template>

<style scoped>
.e20 {
  background-color: gray;
}
.e21 {
  background-color: rgb(92, 84, 84);
}
.log_in {
  background-image: url("../assets/pic/1710-GR-01-01.jpg");
  background-size: 100%;
  /* background-repeat: no-repeat; */
  background-attachment: fixed;
  overflow: hidden !important;

  /* background-position: center; */
}
.v-text-field {
  margin-bottom: 10px;
}
.foot_content{
  background-color: #ad8dbb;
}
.v-flex {
  background-color: #ad8dbb;
}
.p_200 {
  width: 220px;
  height: 260px;
  color: white;;
  /* color: aquamarine; */
}
.fit_w {
  width: 100%;
}
.foot_item {
  width: 100%;
  padding: 0 70px;
  display: flex;
  justify-content: space-between;
  background-color: #ad8dbb;
}
.foot_card {
  display: flex;
  align-items: center;
}
.pd_icon {
  padding-left: 5px;
}
.icon_foot_l {
  display: flex;
  justify-content: space-around;
}
.pd_top_foot {
  padding-top: 40px;
}
.mg_y_10 {
  margin: 10px 0;
}
.wd_80 {
  width: 80%;
}
.filter-white {
  filter: invert(99%) sepia(99%) saturate(0%) hue-rotate(133deg)
    brightness(108%) contrast(101%);
}
.filter-black {
  filter: invert(0%) sepia(100%) saturate(7459%) hue-rotate(74deg)
    brightness(95%) contrast(109%);
}
/* .set_center{
  align-items: center;
  align-content: center;
  justify-content:center;
} */
</style>
