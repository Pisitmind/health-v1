<template>
  <div class="" id="login">
    <v-app class="set_hidden">
      <v-main class="bg_top">
        <v-content>
          <v-container class="container" fluid>
            <v-layout v-resize="onResize" align-bottom wrap>
              <v-flex class="set_form set_ab">
                <v-card
                  class="center set_card elevation-5 pa-10 "
                  width="450px"
                >
                  <v-img
                    class="center"
                    max-width="200px"
                    src="../assets/pic/Login-Regis_8Jul20_Logo CMU Health.png"
                  ></v-img>
                  <div style="padding-top:40px"></div>
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
                      type="password"
                      :rules="passwordRules"
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
      </v-main>
      <v-footer class="foot" padless fill-height>
        <div class="foot_item">
          <!-- left card content foot -->
          <div dense class="p_200 foot_content_color">
            <div class="pd_top_foot pd_30">
              <span style="font-size:20px;">POWERED BY</span>
              <v-img
                class="mg_y_10 "
                max-width="160px"
                src="../assets/logo/Logo BAAK_w.png"
              ></v-img>
              <span class="main_text">BAAK Co., Ltd.</span>
              <div style="height:10px;"></div>
              <div class="icon_foot_l wd_70">
                <img
                  height="30px"
                  class="filter-white"
                  src="../assets/icon/icon_contact_call.svg"
                  alt="pho  ne"
                />
                <img
                  height="30px"
                  class="filter-white"
                  src="../assets/icon/icon_contact_mail.svg"
                  alt="email"
                />
                <img
                  height="30px"
                  class="filter-white"
                  src="../assets/icon/icon_contact_location.svg"
                  alt="location"
                />
              </div>
            </div>
          </div>
          <!-- right card content foot -->
          <div dense class="p_white foot_content_color">
            <div class="pd_top_foot pd_30">
              <v-img
                max-width="200px"
                src="../assets/pic/LogoCMU02-12.png"
              ></v-img>
              <div style="height:10px;"></div>
              <div class="foot_card">
                <img
                  height="30px"
                  fill="white"
                  class="filter-white"
                  src="../assets/icon/icon_contact_location.svg"
                  alt="location"
                />
                <span class="pd_icon"> Chiang Mai University</span>
              </div>
              <div class="foot_card">
                <img
                  height="30px"
                  class="filter-white"
                  src="../assets/icon/icon_contact_call.svg"
                  alt="phone"
                />
                <span class="pd_icon"> (+66) 456 982 156</span>
              </div>
              <div class="foot_card">
                <img
                  class="filter-white"
                  height="30px"
                  src="../assets/icon/icon_contact_mail.svg"
                  alt="email"
                />
                <span class="pd_icon"> cmuhealth@cmu.ac.th</span>
              </div>
            </div>
          </div>
        </div>
      </v-footer>
    </v-app>
  </div>
</template>
<script>
// export default {
// name: 'login',
//     methods: {
//         doLogin() {
//             axios.post('/login', {}).then(response => {
//                 let username = response.data.username;
//                 this.$session.set('username', username); // Set the username in session Storage
//             });
//         }
//     }
// }
</script>

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
  /* padding-top: 50px; */
}
.bg_top {
  background-image: url("../assets/pic/1710-GR-01-01.jpg");
  background-size: cover;
  background-position: bottom 210px right 0px;
  /* background-repeat: no-repeat; */
  background-attachment: fixed;
}
#login,
.set_hidden {
  overflow: hidden !important;
  overflow-y: hidden !important;
}

.v-text-field {
  margin-bottom: 10px;
}
.foot_content_color {
  background-color: #ad8dbb;
  display: flex;
  justify-content: start;
}
.v-footer {
  position: absolute;
  z-index: 1;
  width: 100%;
  bottom: 0;
}
.v-flex {
  background-color: #ad8dbb;
}
.p_200 {
  width: 220px;
  color: white;
  /* color: aquamarine; */
}
.p_white {
  /* width: 220px; */
  color: white;
  /* color: aquamarine; */
}
.set_form {
  /* display: none; */
  display: flex;
  justify-content: center;
  justify-items: center;
  /* padding-top:200px; */
}
.set_ab {
  position: absolute;
  /* position: relative; */
  z-index: 9999;
  padding-top: 140px;
  left: 0;
  right: 0;
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
  font-size: 17px;
}
.icon_foot_l {
  display: flex;
  left: 0;
  justify-content: space-between;
  /* justify-content: space-around; */
  z-index: 1;
  /* padding: 0 10px ; */
}
.wd_70 {
  width: 100%;
}
.pd_top_foot {
  padding: 35px 0;

  align-content: center;
  justify-content: center;
}
.mg_y_10 {
  margin: 10px 0;
}
.pd_30 {
  /* padding-top: 40px; */
}
.container {
  background-color: transparent;
  overflow: hidden;
}
/* .filter-white {
  filter: invert(99%) sepia(99%) saturate(0%) hue-rotate(133deg)
    brightness(108%) contrast(101%);
}
.filter-black {
  filter: invert(0%) sepia(100%) saturate(7459%) hue-rotate(74deg)
    brightness(95%) contrast(109%);
} */
.main_text {
  font-size: 17px;
  color: rgb(249, 236, 250);
  font-weight: 400;
}
.pd_bot {
  padding-bottom: 20px;
}
.set_card {
  width: 100%;
  height: 400px;
  /* height="fit-content" */
}
.v-input {
  align-items: flex-start;
  display: flex;
  flex: 1 1 auto;
  font-size: 20px;
  letter-spacing: normal;
  max-width: 100%;
  text-align: left;
}
.v-input .v-label {
  font-size: 16px;
}
/* .set_center{
  align-items: center;
  align-content: center;
  justify-content:center;
} */
</style>
