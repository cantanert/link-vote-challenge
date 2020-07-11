import Vue from 'vue'
import Vuex from 'vuex'
import setLocalStorage from "../utils/setLocalStorage";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listedItems : []
  },
  getters: {
    listedItemsGetter(state){
      return state.listedItems
    },
    isEmpty(state){
      return !state.listedItems.length;
    }
  },
  mutations: {
    itemRemover: (state, payload)=>{
      const items = state.listedItems.filter((item)=>{
        return item.id !== payload
      });
      state.listedItems = items;
      setLocalStorage(state.listedItems)
    },
    itemAdder: (state, payload) => {
      const item = {
        id: Date.now(),
        title: payload.title,
        url: payload.url,
        point:0
      };
      state.listedItems.unshift(item);
      setLocalStorage(state.listedItems);
    },
    loadFromLocalStorage: (state, payload) => {
      if (payload){
        state.listedItems = JSON.parse(payload);
      }
    },
    upVoter: (state,itemId) => {
      state.listedItems.forEach((item) => {
        if (item.id === itemId) item.point++
      });
    },
    downVoter: (state,itemId) => {
      state.listedItems.forEach((item) => {
        if (item.id === itemId && item.point>0) item.point--
      });
    }
  },
  actions: {
  },
  modules: {
  }
})
