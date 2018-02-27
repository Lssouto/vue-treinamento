<template>
  <div id="navbar" :class="{expanded : status}">
    <div class="logo">
      <img src="../../assets/images/owl-logo.svg"></img>
      <span class="name">LSSouto</span>
    </div>
    <ul>
      <li>
        <router-link :to="{name: 'Index'}" >
          <span class="fa fa-home"></span>
          <span class="name">Home</span>
        </router-link>
      </li>
      <li v-if="isUserLoggedIn">
        <router-link :to="{name: 'Read Users'}" >
          <span class="fa fa-users"></span>
          <span class="name">Users</span>
        </router-link>
      </li>
      <li class="dropdown-nav">
        <input type="checkbox" name="games" id="games" />
        <label for="games">
          <span class="fa fa-gamepad"></span>
          <span class="name">Games</span>
        </label>
        <ul class="dropdown-list">
          <li><router-link :to="{name: 'Games'}">Listar</router-link></li>
          <li v-if="isUserLoggedIn"><router-link :to="{name: 'GamesAdd'}">Adicionar</router-link></li>
        </ul>
      </li>
      <li>
        <router-link :to="{name: 'Buttons'}">
          <span class="fa fa-square"></span>
          <span class="name">Buttons</span>
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'Forms'}">
          <span class="fa fa-align-justify"></span>
          <span class="name">Forms</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Navbar',
  data () {
    return {
      title: 'Navbar'
    }
  },
  computed : {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  props: [
    'status'
  ]
  
}


</script>


<style lang="scss" scoped>


</style>
