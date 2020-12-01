import Vue from 'vue';
import VueRouter from 'vue-router';
import Landing from '../views/LandingPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    console.log(savedPosition);
    if (to.hash) {
      return {
        selector: to.hash
        //behavior: 'smooth' don't work here
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
});

export default router;
