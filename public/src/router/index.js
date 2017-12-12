import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/views/Index'
import Register from '@/components/views/Register'
import Login from '@/components/views/Login'
import Grid from  '@/components/views/Grid'
import Games from  '@/components/views/Games'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/grid',
      name: 'Grid',
      component: Grid
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/games',
      name: 'Games',
      component: Games
    }
  ]
})
