import Vue from 'vue'
import Vuex from 'vuex'
import LinkVotesModule from "./LinkVotesModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    LinkVotesModule
  }
})
