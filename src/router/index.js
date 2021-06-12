import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import detail from '../views/detail.vue';
import promotion from '../views/promotion.vue';
import bestsale from '../views/bestsale.vue';
import contact from '../views/contact.vue';
import service from '../views/service.vue';
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
  {
    path: '/contact',
    name: 'contact',
    component: contact,
  },
  {
    path: '/service',
    name: 'service',
    component: service,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
