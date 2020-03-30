import Vue from 'vue';
import Router from 'vue-router';
import opportunityRoutes from './opportunity';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: '/',

  routes: [
    ...opportunityRoutes,
    {
      path: '/',
      redirect: { name: 'opHome' },
      name: 'index',
    },
  ],
});
