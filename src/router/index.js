import Vue from 'vue'
import VueRouter from 'vue-router'
import Listing from "../views/Listing";
import AddLink from "../views/AddLink";

Vue.use(VueRouter);

  const routes = [
  {
    path: '/',
    name: 'Listing',
    component: Listing
  },
  {
    path: '/add',
    name: 'Add',
    component: AddLink
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
