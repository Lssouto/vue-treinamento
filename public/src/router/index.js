//Vue imports
import Vue from 'vue'
import Router from 'vue-router'

//Views

  //index
  import Index from '@/components/views/Index'
  
  //User
  import Login from '@/components/global/Login'
  //import UserCreate from '@/components/views/Users/Create'
  import UserRead from '@/components/views/Users/Read/Index'
  
  //Games
  import Games from  '@/components/views/Games/Read/Index'
  import GamesAdd from  '@/components/views/Games/Create'
  import GamesView from  '@/components/views/Games/View'
  import GamesEdit from  '@/components/views/Games/Update'

  //Individual components
  const Buttons = ()=> import('@/components/views/Buttons')
  
  //Error
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
      path: '/users',
      name: 'Read Users',
      component: UserRead,
      meta: {
        title: 'Listagem',
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
      path: "*",
      name: '404',
      component: c404,
      meta: {title : 'erro 404'}
    }
  ],
  mode: 'history'
})


