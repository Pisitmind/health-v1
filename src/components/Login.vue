<template>
  <div class="login" id="login">
    <v-app class="e20_none">
      <v-content class="bg_top">
        <v-container class="e22" fluid fill-height>
          <v-layout v-resize="onResize" align-bottom>
            <v-flex class="set_form">
              <v-card
                class="center elevation-5 pa-10"
                width="450px"
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
      <div class="foot" fluid>
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
.e22 {
  display: flex;
  /* align-items: center; */
  padding-top:50px;
}
.bg_top {
  background-image: url("../assets/pic/1710-GR-01-01.jpg");
  background-position: bottom;
  background-size: cover;
  /* background-repeat: no-repeat; */
  /* background-attachment:fixed; */
  overflow: hidden !important;
}

.v-text-field {
  margin-bottom: 10px;
}
.foot_content {
  background-color: #ad8dbb;
}
.v-flex {
  background-color: #ad8dbb;
}
.p_200 {
  width: 220px;
  color: white;
  /* color: aquamarine; */
}
.set_form {
  /* display: none; */
  /* display: flex; */
}
.fit_w {
  width: 100%;
}
.foot_item {
  width: 100%;
  padding: 0 70px;
  padding-bottom: 15px;
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
  padding-top: 20px;
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
