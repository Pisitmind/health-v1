<template>
  <v-app >
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
 hide () {
   return this.$route.path !== '/login'; 
 },
},
  
};


</script>

<style scope>

html{
  overflow-x:hidden;
  font-family: Roboto;
  /* overflow-y:hidden; */
}
.bdr_12 {
  border-radius: 12px !important;
  box-shadow: 0 0px 12px 4px rgba(0, 0, 0, 0.1) !important;
}
.bdr_12_only {
  border-radius: 12px !important;
}
.set_center{
  display:flex;
  flex-wrap: wrap;
  align-items: center;
}
/*
html::-webkit-scrollbar { 
    display: none; 
    
} */
</style>