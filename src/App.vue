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
/*
html::-webkit-scrollbar { 
    display: none; 
    
} */
</style>