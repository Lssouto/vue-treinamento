import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/views/Index'
import Register from '@/components/views/Register'
import Login from '@/components/global/Login'
import Logout from '@/components/global/Logout'
import Games from  '@/components/views/Games'
import GamesAdd from  '@/components/views/GamesAdd'
import GamesView from  '@/components/views/GamesView'
import Modal from '@/components/general/Modal'
import c404 from '@/components/error/404'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {title: 'Home'}
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {title: 'Register'}
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {title: 'Login'}
      
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout,
      meta: {title: 'Logout'}
    },
    {
      path: '/games',
      name: 'Games',
      component: Games,
      meta: {title: 'Games'}
    },
    {
      path: '/games/adicionar',
      name: 'GamesAdd',
      component: GamesAdd,
      meta: {title: 'Adicionar Games'}
    },
    {
      path: '/games/:gameId',
      name: 'Game',
      component: GamesView,
      meta: {title: 'Games'}
    },
    {
      path: "*",
      name: '404',
      component: c404,
      meta: {title : 'erro 404'}
    }
  ],
  mode: 'history'
})

