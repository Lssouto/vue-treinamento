<template>
  <header class="row flex-wrap">
    <div class="col-md-10">
      <h2>Bora Treinar o/</h2>
    </div>
    <div class="col-md-2 text-right">
      <span v-if="!$store.state.isUserLoggedIn"><router-link to="/Login">Login</router-link></span>
      <span v-else="$store.state.isUserLoggedIn"><router-link to="/Logout">Logout</router-link></span>
    </div>
  </header>
</template>

<script>
import Modal from "@/components/general/Modal"
export default {
    name : 'Header'
    
}
</script>

<style lang="scss" scoped>
</style>
