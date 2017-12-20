<template>
  <div id="navbar">
    <ul>
      <li><router-link to="/" v-on:click="navigateTo({name: 'index'})">Home</router-link></li>
      <li><router-link to="Register" v-on:click="navigateTo({name: 'register'})">Register</router-link></li>
      <li><router-link to="Games" v-on:click="navigateTo({name: 'games'})">Games</router-link></li>
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
  },
  methods: {
    navigateTo (router){
      this.$router.push(router)
    }
  }
}
</script>


<style lang="scss" scoped>


</style>
