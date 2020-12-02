import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { store } from './store/store';
// import "chart.js";
// import Axios from 'axios';
// Vue.use(window.VueCharts);
Vue.config.productionTip = false;
// Vue.prototype.$http = Axios;
// const token = localStorage.getItem('token')
// if (token) {
//   Vue.prototype.$http.defaults.headers.common['Authorization'] = token
// }




new Vue({
  store: store,
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
