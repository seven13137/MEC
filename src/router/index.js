import Vue from 'vue'
import Router from 'vue-router'

import HomeView from '../views/HomeView'
import DetailView from '../views/DetailView'
import HelloWorld from '../components/HelloWorld'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', redirect: '/HomeView' },  
      {
        path: '/home',
        name: 'HomeView',
        component: HomeView
        },
      {
          path: 'detail/:id',
          name: 'DetailView',
          component: DetailView
      }
  ]
})
