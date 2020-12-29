<template>
  <nav>
    <v-navigation-drawer
      app
      v-if="['Login'].indexOf($route.name) === -1"
      floating
      v-model="drawer"
      class="set_nav_index"
    >
      <!-- :permanent="!$vuetify.breakpoint.xsOnly" -->
      <!-- v-model="drawer" -->
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            <v-img
              class="center"
              max-width="100"
              max-height="50"
              src="../assets/pic/Login-Regis_8Jul20_Logo CMU Health.png"
            ></v-img>
          </v-list-item-title>
          <div class="title-list">
            <v-img
              max-height="50"
              max-width="50"
              class="round-img"
              src="https://pbs.twimg.com/profile_images/1002416157280727040/7SjA9KTJ_400x400.jpg"
            ></v-img>
            <div class="profile-bar">
              <div class="pro-name">
                <span><strong> Supratcha Wiwattanakorn</strong></span>
              </div>
              <div class="icon-profile">
                <v-btn class="ma-0" color="blue lighten-2" icon rounded raised>
                  <img
                    height="25px"
                    class="filter-white"
                    src="../assets/icon/noti.svg"
                    axlt="notive"
                /></v-btn>
                <v-btn
                  class="ma-1"
                  icon
                  rounded
                  raised
                  color="blue lighten-2"
                  to="/login"
                  ><img
                    height="25px"
                    class="filter-white"
                    src="../assets/icon/setting.svg"
                    alt="notive"
                /></v-btn>
              </div>
            </div>
          </div>
          <v-list-item-subtitle> </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <!-- top menu -->
      <v-list dense nav>
        <div v-for="(item, i) in items" :key="item.id" class="">
          <!-- case not sub -->
          <v-list-item
            v-if="!item.subLinks"
            :key="i"
            link
            router
            :to="item.route"
            active-class="white_new white--text purple rounded-l-lg"
            class="fz_14"
          >
            <v-list-item-icon class="pd_up">
              <img
                v-if="(active = true)"
                height="30px"
                class="filter-white grey_new mb-1"
                :src="require('../assets/icon/' + item.logo)"
              />
              <img
                v-else
                height="30px"
                class="filter-white mb-1"
                :src="require('../assets/icon/' + item.logo_active)"
              />
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="fz_14">{{
                item.title
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- case has submenus -->
          <v-list-group v-else :key="item.title" pl-2>
            <template v-slot:activator>
              <!-- <v-list-tile class="" > -->
              <v-list-item-icon class="set_icon_left pd_up">
                <img
                  height="30px"
                  class="filter-white grey_new mb-1"
                  :src="require('../assets/icon/' + item.logo)"
                />
              </v-list-item-icon>
              <v-list-tile-content class="">
                <v-list-tile-title class="fz_14">{{
                  item.title
                }}</v-list-tile-title>
              </v-list-tile-content>
              <!-- </v-list-tile> -->
            </template>
            <v-list-item
              v-for="sublink in item.subLinks"
              :to="sublink.route"
              :key="sublink.title"
              link
              router
              dense
              active-class="white_new white--text purple rounded-l-lg"
            >
              <!-- <v-list-item-icon
                ><v-icon x-small>{{ sublink.icon }} </v-icon></v-list-item-icon
              > -->
              <v-list-item-content>
                <v-list-item-title class="pl-7 set_font_small">{{
                  sublink.title
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </div>
        <!-- :src="require('../assets/icon/' + item.logo)" -->
        <span class="grey--text" style="font-size:14px">การจัดการ</span>
        <div v-for="(item2, i) in items2" :key="item2.id">
          <v-list-item
            v-if="!item2.subLinks"
            :key="i"
            link
            router
            :to="item2.route"
            active-class="white_new white--text purple rounded-l-lg "
          >
            <v-list-item-icon class="pd_up">
              <img
                height="30px"
                class="filter-white grey--text grey_new mb-1"
                contain
                fill-color="white"
                color="#656666"
                :src="require('../assets/icon/' + item2.logo)"
              />
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="fz_14">{{
                item2.title
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-group v-else :key="item2.title">
            <template v-slot:activator>
              <!-- <v-list-tile> -->
              <v-list-item-icon class="pd_up">
                <img
                  v-if="(active = true)"
                  height="30px"
                  class="filter-white grey_new"
                  :src="require('../assets/icon/' + item2.logo)"
                />
                <img
                  v-else
                  height="30px"
                  class="filter-white"
                  :src="require('../assets/icon/' + item2.logo_active)"
                />
              </v-list-item-icon>
              <v-list-tile-content>
                <v-list-tile-title class="fz_14">{{
                  item2.title
                }}</v-list-tile-title>
              </v-list-tile-content>
              <!-- </v-list-tile> -->
            </template>
            <v-list-item
              v-for="sublink2 in item2.subLinks"
              :to="sublink2.route"
              :key="sublink2.title"
              link
              router
              active-class="white_new white--text purple rounded-l-lg"
            >
              <!-- <v-list-item-icon
                ><v-icon x-small>{{ sublink2.icon }} </v-icon></v-list-item-icon
              > -->
              <v-list-item-content>
                <v-list-item-title class="pl-7 set_font_small">{{
                  sublink2.title
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </div>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      v-if="['Login'].indexOf($route.name) === -1"
      class="d-lg-none"
      dense
      flat
      color="transparent"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-toolbar>
    <!-- <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Topics</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar> -->
  </nav>
</template>

<script>
// import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    // HelloWorld
  },

  data() {
    return {
      drawer: true,
      items: [
        {
          title: "กราฟข้อมูล",
          icon: "mdi-chart-timeline",
          logo: "icon_dashboard.svg",
          logo_active: "icon_dashboard_02.svg",
          route: "/",
        },
        {
          title: "แจ้งเตือน",
          icon: "mdi-bell-outline",
          logo: "noti_b.svg",
          logo_active: "icon_noti_other.svg",
          route: "/Notifications",
        },
        {
          title: "ข้อมูลการเคลื่อนไหว",
          icon: "mdi-walk",
          logo: "icon_exercise.svg",
          logo_active: "icon_exercise_02.svg",
          route: "/Moving",
        },
        {
          title: "ข้อมูลสถานะร่างกาย",
          icon: "mdi-account-details",
          logo: "icon_statusdata.svg",
          logo_active: "icon_statusdata_02.svg",
          route: "/Status",
        },
        {
          title: "ค่าส่วนประกอบในร่างกาย",
          icon: "mdi-human-handsup",
          logo: "icon_bodycomposition.svg",
          logo_active: "icon_bodycomposition_02.svg",
          route: "/Body-info",
        },
        {
          title: "ข้อมูลสุขภาพจำเพาะ",
          icon: "mdi-water-plus",
          logo: "icon_healthsign.svg",
          logo_active: "icon_healthsign_02.svg",
          route: "/unq-health",
        },
        {
          title: "รายงาน",
          icon: "mdi-chart-areaspline",
          logo: "icon_report.svg",
          logo_active: "icon_report_w.svg",
          route: "/Report",
          subLinks: [
            {
              title: "ข้อมูลผู้ใช้งานระบบ",
              icon: "mdi-square-circle",
              route: "/user_data",
            },
            {
              title: "ข้อมูลการเคลื่อนไหวของผู้ใช้งาน",
              icon: "mdi-square-circle",
              route: "/movment_data_user",
            },
            {
              title: "ข้อมูลสถานะร่างกาย",
              icon: "mdi-square-circle",
              route: "/status_data_user",
            },
            {
              title: "ข้อมูลส่วนประกอบในร่างกาย",
              icon: "mdi-square-circle",
              route: "/ingredient_data_user",
            },
            {
              title: "ข้อมูลสุขภาพจำเพาะ",
              icon: "mdi-square-circle",
              route: "/unq_data_user",
            },
          ],
        },
      ],
      items2: [
        {
          title: "ผู้ใช้งาน",
          icon: "mdi-account-group-outline",
          logo: "icon_datapersonsa.svg",
          logo2: "icon_datapersonsa_w.svg",
          route: "/Users",
          subLinks: [
            {
              title: "เจ้าหน้าที่",
              icon: "mdi-square-circle",
              route: "/admin_user",
            },
            {
              title: "ผู้ใช้งานระบบ",
              icon: "mdi-square-circle",
              route: "/normal_user",
            },
          ],
        },
        {
          title: "ข่าว / ประกาศ",
          icon: "mdi-new-box",
          logo: "icon_news.svg",
          logo2: "icon_news_w.svg",
          route: "/News",
        },
        {
          title: "บอร์ด / สาระสุขภาพ",
          icon: "mdi-teach",
          logo: "icon_board.svg",
          logo2: "icon_board_w.svg",
          route: "/Boards",
        },
      ],
    };
  },
};
</script>

<style scope>
/* color svg setting */
.set_bg_1 {
  display: inline-block;
  background-repeat: no-repeat;
  background-position: center center;
}
.icon-profile {
  padding: 0px;
  margin: 0px;
}
.grey_new {
  opacity: 0.5;
  filter: #656666;
}
.white_new {
  /* opacity: .1; */
  /* filter: White; */
  /* fill: white; */
  background-color: green;
}
.set_pl0 {
  padding-left: 0 !important;
  align-content: center;
}
.set_icon_left {
  padding-left: 0px;
  text-align: center;
}
.set_font_small {
  font-size: 12px;
}
.pd_0 {
  padding-left: 0px !important;
}
#nav a:link,
a:visited {
  font-weight: bold;
  color: rgb(122, 1, 133);
  text-align: center;
  padding: 8px;
  text-decoration: none;
  text-transform: uppercase;
}
.title {
  padding-bottom: 15px;
}
.title-list {
  display: flex;
  flex-direction: row;
}
.pro-name {
  font-size: 14px;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
.round-img {
  border-radius: 5px;
}
.profile-bar {
  padding-left: 10px;
}
.g_grey {
  fill: #7c7d7d;
  /* padding: 0; */
}
.v-list-group__header__append-icon {
  position: absolute;
  right: 10px;
}
.pd_up {
  /* background-color:rgba(0,200,50,0.4); */
  text-align: center;
  align-items: center;
}
.set_nav_index{
  z-index: 10 !important;
}
</style>
