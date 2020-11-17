<template>
  <v-app>
    <!-- <v-app-bar app>
    </v-app-bar> -->
    <!-- <Navbar /> -->
      <Navbar />
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
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
 }
},
  
};
</script>
