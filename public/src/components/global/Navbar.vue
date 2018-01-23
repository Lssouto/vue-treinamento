<template>
  <div id="navbar">
    <ul>
      <li><router-link :to="{name: 'Index'}" >Home</router-link></li>
      <li><router-link :to="{name: 'Register'}" >Register</router-link></li>
      <li>
        <input type="checkbox" name="games" id="games" />
        <label for="games">Games</label>
        <ul>
          <li><router-link :to="{name: 'Games'}">Listar</router-link></li>
          <li><router-link :to="{name: 'GamesAdd'}">Adicionar</router-link></li>
        </ul>
      </li>
      <li><router-link :to="{name: 'Buttons'}" >Buttons</router-link></li>
      <li><router-link :to="{name: 'Slick Carousel'}" >Carousel</router-link></li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Navbar',
  data () {
    return {
      title: 'Navbar'
    }
  }
  
}


</script>


<style lang="scss" scoped>


</style>
