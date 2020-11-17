import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import moving from '../views/Moving.vue';
import status from '../views/Status.vue';
import bodyinfo from '../views/Body-info.vue';
import unqHealth from '../views/unq-health.vue';
import report from '../views/Report.vue';
import users from '../views/Users.vue';
import news from '../views/News.vue';
import boards from '../views/Boards.vue';
import Login from '../components/Login.vue';
import notif from '../views/Noti.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },{
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/About",
    name: "About",
    component: About
  },
  {
    path: "/moving",
    name: "Moving",
    component: moving
  },
  {
    path: "/status",
    name: "Status",
    component: status
  },{
    path: "/body-info",
    name: "BodyInfo",
    component: bodyinfo
  },{
    path: "/unq-health",
    name: "unq-health",
    component: unqHealth
  },{
    path: "/report",
    name: "Report",
    component: report
  },{
    path: "/users",
    name: "Users",
    component: users
  },{
    path: "/news",
    name: "News",
    component: news
  },{
    path: "/boards",
    name: "Boards",
    component: boards
  },{
    path: "/Notifications",
    name: "notif",
    component: notif
  }
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue")
];

const router = new VueRouter({
  routes
});

export default router;
