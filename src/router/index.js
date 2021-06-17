import Vue from 'vue';
import VueRouter from 'vue-router';
import userHome from '../views/user/Home.vue';
import userdetail from '../views/user/detail.vue';
import userpromotion from '../views/user/promotion.vue';
import userbestsale from '../views/user/bestsale.vue';
import usercontact from '../views/user/contact.vue';
import userservice from '../views/user/service.vue';
import usershopping from '../views/user/shopping.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'user',
    component: userHome

  },
  {
    path: '/userdetail',
    name: 'user',
    component: userdetail
  },
  {
    path: '/userpromotion',
    name: 'user',
    component: userpromotion
  },
  {
    path: '/userbestsale',
    name: 'user',
    component: userbestsale
  },
  {
    path: '/usercontact',
    name: 'user',
    component: usercontact
  },
  {
    path: '/userservice',
    name: 'user',
    component: userservice
  },
  {
    path: '/usershopping',
    name: 'user',
    component: usershopping
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
