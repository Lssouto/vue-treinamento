import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/views/Index'
import Register from '@/components/views/Register'
import Login from '@/components/global/Login'
import Logout from '@/components/global/Logout'
import Games from  '@/components/views/Games'
import Modal from '@/components/general/Modal'

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
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/games',
      name: 'Games',
      component: Games
    },
    {
      path: '/modal',
      name: 'Modal',
      component: Modal
    }
  ],
  mode: 'history'
})
