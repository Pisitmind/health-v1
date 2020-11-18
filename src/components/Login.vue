<template>
  <div class="login" id="login">
    <v-app class="e20_none" overflow="hidden">
      <v-content class="log_in">
        <v-container class="e22" fluid fill-height>
          <v-layout v-resize="onResize" align-center  >
            <v-flex >
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
                <v-form  ref="form" v-model="valid" lazy-validation >
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
    <v-footer
    dark
    padless
  >
    <!-- <v-card
      flat
      tile
      class=" purple lighten-2 white--text text-center"
    >
      <v-card-text class="fit_w white--text pt-0 ">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. 
      </v-card-text>

      <v-divider></v-divider>
    </v-card> -->
    <div class="foot_item">
    <v-card class="p_200">
      <span>สร้างโดย</span>
    </v-card>
    <v-card class="p_200">
      <span>โลโก้มอ+ที่อยู่ </span>
    </v-card>
    </div>
  </v-footer>
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
.v-text-field{
  margin-bottom: 10px;
}
.v-flex{
  background-color:#AD8DBB;
}
.p_200{
  width:200px;
  height: 260px;
  color:aquamarine;
}
.fit_w{
  width: 100%;
}
.foot_item{
  width: 100%;
  padding:0 70px;
  display:flex;
  justify-content: space-between;
  background-color:#AD8DBB;
}
/* .set_center{
  align-items: center;
  align-content: center;
  justify-content:center;
} */
</style>
