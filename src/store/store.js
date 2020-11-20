import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    items: [
      {
        gender: "ชาย",
        icon: "mdi-human-male",
        color: "#359BD3",
        data: [27, 98, 780, 34, 0],
      },
      {
        gender: "หญิง",
        icon: "mdi-human-female",
        color: "#F28C8C",
        data: [12, 132, 560, 22, 0],
      },
    ],
  },
});