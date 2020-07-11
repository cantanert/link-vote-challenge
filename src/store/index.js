import Vue from 'vue'
import Vuex from 'vuex'
import setLocalStorage from "../utils/setLocalStorage";
import voteLinksStatics from '../statics/vote-link-statics';
import swapper from "../utils/swapper";

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
      let selectedIndex = null;
      state.listedItems.forEach((item,index) => {
        if (item.id === itemId){
          item.point++;
          selectedIndex = index;
        }
      });
      state.listedItems.forEach((item,index)=>{
        if (item.point === state.listedItems[selectedIndex].point){
          swapper(state.listedItems,index,selectedIndex);
        }
      });
      setLocalStorage(state.listedItems);
    },
    downVoter: (state,itemId) => {
      state.listedItems.forEach((item) => {
        if (item.id === itemId && item.point>0) item.point--
      });
      setLocalStorage(state.listedItems);
    },
    orderByLess: (state) => {
      state.listedItems.sort((a, b) => {
        return a.point - b.point;
      });
      setLocalStorage(state.listedItems);
    },
    orderByMost: (state) => {
      state.listedItems.sort((a,b)=>{
        return b.point - a.point;
      });
      setLocalStorage(state.listedItems);
    }
  },
  actions: {
    upVoter: (context,itemId) => {
      context.commit('upVoter',itemId);
      context.commit('orderByMost');
    },
    downVoter: (context,itemId) => {
      context.commit('downVoter',itemId);
      context.commit('orderByMost');
    },
    orderByParam: (context, payload) => {
      (payload === voteLinksStatics.orderEnums.LESS)
          ? context.commit('orderByLess')
          : context.commit('orderByMost')
    }
  },
  modules: {
  }
})
