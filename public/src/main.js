// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { sync } from 'vuex-router-sync'
import store from '@/store/store'


  import './assets/scss/main.scss'





Vue.config.productionTip = false

//Global Style

sync( store, router )

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { 
    App
  }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  
  if (to.matched.some(record=> record.meta.login)) {
    if(!store.state.isUserLoggedIn){
      next({
        name : 'Login'
      })
    }
    else {
      next()
    }
  }
  else{
    next()
  }
})
