import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/views/Index'
import Register from '@/components/views/Register'
import Login from '@/components/global/Login'
import Games from  '@/components/views/Games/Read/Index'
import GamesAdd from  '@/components/views/Games/GamesAdd'
import GamesView from  '@/components/views/Games/GamesView'
import GamesEdit from  '@/components/views/Games/GamesEdit'
const Buttons = ()=> import('@/components/views/Buttons')
const SC = ()=> import('@/components/views/SlickCarousel')
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
      meta: {
        title: 'Register',
        login: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {title: 'Login'}
      
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
      meta: {
        title: 'Adicionar Games',
        login : true
      }
    },
    {
      path: '/games/:gameId',
      name: 'Game',
      component: GamesView,
      meta: {title: 'Games'},
      props: true
    },
    {
      path: '/games/edit/:gameId',
      name: 'GameEdit',
      component: GamesEdit,
      meta: {
        title: 'Games',
        login: true
      },
      props: true
    },
    {
      path: '/buttons',
      name: 'Buttons',
      component: Buttons,
      meta: {title: 'Buttons Examples'}
    },
    {
      path: '/slc',
      name: 'Slick Carousel',
      component: SC,
      meta: {title: 'Slick Carousel'}
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


