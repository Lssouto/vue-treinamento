<template>
  <header class="row">
    <div class="col-md-2 logo">
      <img src="/src/assets/images/owl-logo.svg"></img>LSSouto
    </div>
    <div class="col-md-10 text-right">
      <span v-if="!$store.state.isUserLoggedIn"><router-link to="/Login" class="userOption">Login</router-link></span>
      <span v-else="$store.state.isUserLoggedIn"><router-link to="/Logout" class="userOption">Logout</router-link></span>
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
