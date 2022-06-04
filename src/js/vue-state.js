import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

$(function () {
  const store = new Vuex.Store({
    state: {
      token: localStorage.getItem("game_token") !== null,
      userData: {
        name: "",
        nric: "",
        email: "",
        mobile_no: "",
        facebook_id: "",
        profile_image:"",
        is_agree: "",
        is_msia_citizen: "",
        id: null,
      },
      week: {},
      score: [],
    },
    mutations: {
      updateUserData(state, payload) {
        state.userData = payload;
      },
      updateWeek(state, payload) {
        state.week = payload;
      },
      updateScore(state, payload) {
        state.score = payload;
      },
    },
  });
});
