// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { sync } from 'vuex-router-sync'
import store from '@/store/store'

Vue.config.productionTip = false

//Global Style
require('./assets/scss/main.scss')
require('../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss')

sync( store, router )

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
