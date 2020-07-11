import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listedItems : [
      {id:0, title: 'Hacker News', url: 'https://news.ycombinator.com',point:5},
      {id:1, title: 'Google', url: 'https://www.google.com',point:7},
      {id:2, title: 'Facebook', url: 'https://www.facebook.com',point:20},
      {id:3, title: 'Linkedin', url: 'https://www.facebook.com',point:100},
      {id:4, title: 'alibaba', url: 'https://www.facebook.com',point:50},
    ],
    denemeState : 'initial'
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
      const itemIndex = state.listedItems.findIndex((item)=>{
        return item.id === payload
      });
      state.listedItems.splice(itemIndex,1);
    },
    itemAdder: (state, payload) => {
      const item = {
        id: 2,
        title: payload.title,
        url: payload.url,
        point:0
      };
      state.listedItems.push(item);
    }
  },
  actions: {
  },
  modules: {
  }
})
