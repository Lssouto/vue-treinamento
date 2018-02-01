<template>
  <div id="navbar">
    <ul>
      <li><router-link :to="{name: 'Index'}" >Home</router-link></li>
      <li v-if="isUserLoggedIn">
        <router-link :to="{name: 'Read Users'}" >Users</router-link>
        <!--<input type="checkbox" name="users" id="users" />-->
        <!--<label for="users">Users</label>-->
        <!--<ul>-->
        <!--  <li><router-link :to="{name: 'Read Users'}" >Listar</router-link></li>-->
        <!--  <li><router-link :to="{name: 'Create User'}" >Adicionar</router-link></li>-->
        <!--</ul>-->
        
      </li>
      <li>
        <input type="checkbox" name="games" id="games" />
        <label for="games">Games</label>
        <ul>
          <li><router-link :to="{name: 'Games'}">Listar</router-link></li>
          <li v-if="isUserLoggedIn"><router-link :to="{name: 'GamesAdd'}">Adicionar</router-link></li>
        </ul>
      </li>
      <li><router-link :to="{name: 'Buttons'}" >Buttons</router-link></li>
      <li><router-link :to="{name: 'Slick Carousel'}" >Carousel</router-link></li>
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
  }
  
}


</script>


<style lang="scss" scoped>


</style>
