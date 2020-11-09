<template>
  <!-- App.vue -->

<v-app>
  <v-navigation-drawer app>
    <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            <v-img class="center" max-width="100" max-height="50" src="./assets/pic/Login-Regis_8Jul20_Logo CMU Health.png"></v-img>
          </v-list-item-title>
            <div class="title-list">
            <!-- <v-list-item-avatar> -->
              <v-img 
                max-height="40"
                max-width="40"
                pb-5
                src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
                <div  class="profile-bar">
                  <div class="pro-name">
                    <span>Supratcha  Wiwattanakorn</span>
                  </div>
                  <div class="icon-profile">
                    <v-icon>mdi-bell</v-icon>
                    <v-icon>mdi-cog</v-icon>
                  </div>

                </div>
            </div>
          <!-- </v-list-item-avatar> -->
          <v-list-item-subtitle>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
        
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <p>การจัดการ</p>
        </v-list-item>
        <v-list-item
          v-for="item2 in items2"
          :key="item2.title"
          link
          >
            <v-list-item-icon>
            <v-icon>{{ item2.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item2.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    
  </v-navigation-drawer>

  <!-- <v-app-bar app>
  </v-app-bar> -->

  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>
      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    // HelloWorld
  },

   data () {
      return {
        items: [
          { title: 'กราฟข้อมูล', icon: 'mdi-chart-timeline',link: '/' },
          { title: 'แจ้งเตือน', icon: 'mdi-bell-outline' },
          { title: 'ข้อมูลการเคลื่อนไหว', icon: 'mdi-walk' },
          { title: 'ข้อมูลสถานะร่างกาย', icon: 'mdi-account-details' },
          { title: 'ค่าส่วนประกอบในร่างกาย', icon: 'mdi-human-handsup' },
          { title: 'ข้อมูลสุขภาพจำเพาะ', icon: 'mdi-water-plus' },
          { title: 'รายงาน', icon: 'mdi-chart-areaspline' },
        ],
        items2:[
          { title: 'ผู้ใช้งาน', icon: 'mdi-account-group-outline' },
          { title: 'ข่าว / ประกาศ', icon: 'mdi-new-box' },
          { title: 'บอร์ด / สาระสุขภาพ', icon: 'mdi-teach' },
          
        ],
      }
    },
};
</script>


<style scope>
.title{
  padding-bottom: 10px;

}
.title-list {
  display: flex;
  flex-direction: row;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
.profile-bar {
  padding-left: 10px;
}
</style>