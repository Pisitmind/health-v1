<template >
  <div class="login" id="Login" >
    <v-app  id="inspire" scroll="false">
      <v-content class="log_in">
        <v-container fill-height fluid>
          <v-layout v-resize="onResize" column align-center justify-center >
            <v-form   ref="form" v-model="valid" lazy-validation >
              <v-card class="elevation-10 pa-10" height="370px" width="450px" >
                <v-img
                  class="center"
                  max-width="200px"
                  src="../assets/pic/Login-Regis_8Jul20_Logo CMU Health.png"
                ></v-img>
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
              </v-card>
              <h1>Say ho as</h1>
            </v-form>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
    <v-footer>
      a
    </v-footer>
  </div>
</template>

<style scoped>
/* html { overflow-y: hidden; overflow-x:hidden; } */
/* #Login{
  overflow: hidden;
} */
html{
  overflow: auto;
}
html::-webkit-scrollbar { 
    display: none; 
    
}
.log_in {
  background-image: url("../assets/pic/1710-GR-01-01.jpg");
  background-size: 100%;
  /* background-repeat: no-repeat; */
  background-attachment: fixed;
  overflow: hidden !important;
  
  /* background-position: center; */
}
.log_in::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}

/* #inspire {
  height: 100vh;
  overflow: hidden;
} */
.v-text-field {
  font-size: 16px;
}
.v-text-field label {
  font-weight: 550;
}
</style>
