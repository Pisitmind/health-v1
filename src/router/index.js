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
