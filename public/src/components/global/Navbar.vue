<template>
  <div id="navbar">
    <ul>
      <li><router-link to="/" >Home</router-link></li>
      <li><router-link to="/Register" >Register</router-link></li>
      <li><router-link to="/Games">Games</router-link></li>
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
