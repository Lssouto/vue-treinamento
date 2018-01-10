<template>
  <div id="navbar">
    <ul>
      <li><router-link to="/" >Home</router-link></li>
      <li><router-link to="/Register" >Register</router-link></li>
      <li>
        <input type="checkbox" name="games" id="games" />
        <label for="games">Games</label>
        <ul>
          <li><router-link to="/Games">Listar</router-link></li>
          <li><router-link to="/Games/adicionar">Adicionar</router-link></li>
        </ul>
      </li>
      <li><router-link to="/Buttons" >Buttons</router-link></li>
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
