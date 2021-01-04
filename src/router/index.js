import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import moving from "../views/Moving.vue";
import status from "../views/Status.vue";
import bodyinfo from "../views/Body-info.vue";
import unqHealth from "../views/unq-health.vue";
import report from "../views/Report.vue";
import users from "../views/Users.vue";
import news from "../views/News.vue";
import boards from "../views/Boards.vue";
import Login from "../components/Login.vue";
import notif from "../views/Noti.vue";
import sub_report1 from "../components/Report_sub1.vue";
import sub_report2 from "../components/Report_sub2.vue";
import sub_report3 from "../components/Report_sub3.vue";
import sub_report4 from "../components/Report_sub4.vue";
import sub_report5 from "../components/Report_sub5.vue";
import admin_user from "../components/authorities.vue";
import normal_user from "../components/normal_user.vue";
import move_dtail from "../components/dialog_p3_card1.vue";
import burn_dtail from "../components/dialog_p3_card2.vue";
import sleep_dtail from "../components/dialog_p4_card1.vue";
import heart_dtail from "../components/dialog_p4_card2.vue";
import bmi_dtail from "../components/dialog_p5_card1.vue";
import bloodp_dtail from "../components/dialog_p6_card1.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    auth: true,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/About",
    name: "About",
    component: About,
    auth: true,
  },
  {
    path: "/moving",
    name: "Moving",
    component: moving,
    auth: true,
  },
  {
    path: "/status",
    name: "Status",
    component: status,
    auth: true,
  },
  {
    path: "/body-info",
    name: "BodyInfo",
    component: bodyinfo,
    auth: true,
  },
  {
    path: "/unq-health",
    name: "unq-health",
    component: unqHealth,
    auth: true,
  },
  {
    path: "/report",
    name: "Report",
    component: report,
    auth: true,
  },
  {
    path: "/users",
    name: "Users",
    component: users,
    auth: true,
  },
  {
    path: "/news",
    name: "News",
    component: news,
    auth: true,
  },
  {
    path: "/boards",
    name: "Boards",
    component: boards,
    auth: true,
  },
  {
    path: "/Notifications",
    name: "notif",
    component: notif,
    auth: true,
  },
  {
    path: "/user_data",
    name: "user_data_system",
    component: sub_report1,
    auth: true,
  },
  {
    path: "/movment_data_user",
    name: "user_movment_data",
    component: sub_report2,
    auth: true,
  },
  {
    path: "/status_data_user",
    name: "user_status_data",
    component: sub_report3,
    auth: true,
  },
  {
    path: "/ingredient_data_user",
    name: "user_ingredient_data",
    component: sub_report4,
    auth: true,
  },
  {
    path: "/unq_data_user",
    name: "user_unq_data",
    component: sub_report5,
    auth: true,
  },
  {
    path: "/admin_user",
    name: "admin_user",
    component: admin_user,
    auth: true,
  },
  {
    path: "/normal_user",
    name: "normal_user",
    component: normal_user,
    auth: true,
  },
  {
    path: "/move_dtail",
    name: "move_dtail",
    component: move_dtail,
    auth: true,
  },
  {
    path: "/burn_dtail",
    name: "burn_dtail",
    component: burn_dtail,
    auth: true,
  },
  {
    path: "/sleep_dtail",
    name: "sleep_dtail",
    component: sleep_dtail,
    auth: true,
  },
  {
    path: "/heart_dtail",
    name: "heart_dtail",
    component: heart_dtail,
    auth: true,
  },
  {
    path: "/bmi_dtail",
    name: "bmi_dtail",
    component: bmi_dtail,
    auth: true,
  },
  {
    path: "/bloodp_dtail",
    name: "bloop_dtail",
    component: bloodp_dtail,
    auth: true,
  },

  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () =>
  //   import(/* webpackChunkName: "about" */ "../views/About.vue")
];

// const router = new VueRouter({
//   routes
// });

const router = new VueRouter({
  mode: "history", // Remove the hash from the URL, optional.
  routes,
});
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);

  // More code ...
  next();
});

router.replace("/login");

// export default router;

// const router = new VueRouter({
//   mode: 'history',
//   routes: [
//     {
//       path: '/requests',
//       name: 'rescue-handling',
//       component: RescueHandling,
//       meta: {
//         requiresAuth: true
//       }
//     },
//   ]
// });
// router.beforeEach((to, from, next) => {
//   if (to.meta.requiresAuth) {
//     const session = Vue.prototype.$session;
//     if (session.exists('user')) {
//         console.log('test session storage');
//     }
//     if (to.path === '/'){
//         next(); console.log('root');
//     }
//   }
// });
// export default router;

export default router;
