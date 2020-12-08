<template>
  <nav>
    <v-navigation-drawer
      app
      v-if="['Login'].indexOf($route.name) === -1"
      floating
    >
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
                <v-btn class="ma-1" color="blue lighten-2" icon rounded raised>
                  <img
                    height="25px"
                    class="filter-white"
                    src="../assets/icon/noti.svg"
                    alt="notive"
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

      <v-list dense nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          router
          :to="item.route"
          active-class="g_grey white--text purple rounded-l-lg"
        >
          <v-list-item-icon>
            <img
              v-if="(active = true)"
              height="30px"
              class="filter-white "
              :src="require('../assets/icon/' + item.logo)"
            />
            <img
              v-else
              height="30px"
              class="filter-white"
              :src="require('../assets/icon/' + item.logo_active)"
            />
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- :src="require('../assets/icon/' + item.logo)" -->
        <v-list-group :value="true" sub-gruop>
          <template v-slot:activator>
            <v-list-item-icon>
              <img
                height="30px"
                class="filter-white "
                src="../assets/icon/icon_report.svg"
              />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>รายงาน</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="itmx in items"
            :key="itmx.id"
            link
            router
            :to="itmx.route"
            active-class="white--text purple rounded-l-lg "
          >
            <v-list-item-title>a</v-list-item-title>
          </v-list-item>
        </v-list-group>
        <v-list-item> </v-list-item>
        <span class="grey--text" style="font-size:14px">การจัดการ</span>
        <v-list-item
          v-for="item2 in items2"
          :key="item2.title"
          link
          router
          :to="item2.route"
          active-class="white--text purple rounded-l-lg "
        >
          <v-list-item-icon>
            <img
              height="30px"
              class="filter-white grey--text"
              contain
              fill-color="white"
              :src="require('../assets/icon/' + item2.logo)"
            />
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item2.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
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
          logo: "noti.svg",
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
          sublink: [
            {
              title: "ข้อมูลผู้ใช้งานระบบ",
              icon: "mdi-square-circle",
              route: "/user_data",
            },
            {
              title: "ข้อมูลการเคลื่อนไหวของผู้ใช้งาน",
              icon: "mdi-square-circle",
              route: "/moving_data_user",
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
          sublink: [
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
  font-size: 12px;
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
}
</style>
