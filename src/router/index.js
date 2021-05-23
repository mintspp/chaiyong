import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import detail from '../views/detail.vue';
import promotion from '../views/promotion.vue';
import bestsale from '../views/bestsale.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/detail',
    name: 'detail',
    component: detail,
  },
  {
    path: '/promotion',
    name: 'promotion',
    component: promotion,
  },
  {
    path: '/bestsale',
    name: 'bestsale',
    component: bestsale,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
