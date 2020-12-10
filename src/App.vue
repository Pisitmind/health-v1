<template>
  <v-app>
    <!-- <v-app-bar app>
    </v-app-bar> -->
    <!-- <Navbar /> -->
    <Navbar />
    <v-main>
      <v-container fluid class="ma-0 pa-0">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    Navbar,
  },

  data() {
    return {};
  },
  computed: {
    hide() {
      return this.$route.path !== "/login";
    },
  },
};
</script>

<style scope>
html .set_hidden {
  overflow-y: hidden !important;
}
.fz_14 {
  font-size: 13px !important;
}
html {
  overflow-x: hidden !important;
  font-family: Roboto;
  /* overflow-y: hidden !important; */
  /* background-color: red; */
}
.container {
  background-color: #f6f6f6;
}
.bdr_12 {
  border-radius: 12px !important;
  box-shadow: 0 0px 12px 4px rgba(0, 0, 0, 0.1) !important;
}
.bdr_12_only {
  border-radius: 12px !important;
}
.set_center {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.bdr_0 {
  border-radius: 0 !important;
}
.set_h30 {
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
  height: 30px;
  /* background-color: green; */
}
/*
html::-webkit-scrollbar { 
    display: none; 
    
} */
</style>
