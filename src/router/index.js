import Vue from 'vue';
import VueRouter from 'vue-router';
import userHome from '../views/user/Home.vue';
import userdetail from '../views/user/detail.vue';
import userpromotion from '../views/user/promotion.vue';
import userbestsale from '../views/user/bestsale.vue';
import usercontact from '../views/user/contact.vue';
import userservice from '../views/user/service.vue';
import usershopping from '../views/user/shopping.vue';
import usercart from '../views/user/cart.vue';
import userlike from '../views/user/like.vue';
import userprofile from '../views/user/profile.vue';
import userhistoryshopping from '../views/user/historyshopping.vue';

import adminlogin from '../views/admin/login.vue';
import adminsignup from '../views/admin/signup.vue';
import admincustomer from '../views/admin/customer.vue';
import adminproduct from '../views/admin/product.vue';
import adminorder from '../views/admin/order.vue';

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
  {
    path: '/usercart',
    name: 'user',
    component: usercart
  },
  {
    path: '/userlike',
    name: 'user',
    component: userlike
  },
  {
    path: '/userprofile',
    name: 'userlike',
    component: userprofile
  },
  {
    path: '/userhistoryshopping',
    name: 'user',
    component: userhistoryshopping
  },
  {
    path: '/adminlogin',
    name: 'admin',
    component: adminlogin
  },
  {
    path: '/adminsignup',
    name: 'admin',
    component: adminsignup
  },
  {
    path: '/admincustomer',
    name: 'admin',
    component: admincustomer
  },
  {
    path: '/adminproduct',
    name: 'admin',
    component: adminproduct
  },
  {
    path: '/adminorder',
    name: 'admin',
    component: adminorder
  },
   {
    path: '/adminorder',
    name: 'admin',
    component: adminorder
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
