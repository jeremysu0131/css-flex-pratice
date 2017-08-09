import Vue from 'vue';
import Router from 'vue-router';
import Flex01 from '@/components/Flex01';
import FlexDirection from '@/components/FlexDirection';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    component: Flex01,
  }, {
    path: '/flex-direction',
    component: FlexDirection,
  }],
});
