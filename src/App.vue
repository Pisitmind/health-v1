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
<style>
@import "./assets/styles/style.css";
</style>
