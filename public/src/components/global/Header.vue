<template>
  <header>
      <li v-if="!$store.state.isUserLoggedIn"><router-link to="Login">Login</router-link></li>
      <li v-else="$store.state.isUserLoggedIn" v-on:click="logout('statusChange')"><router-link to="logout">Logout</router-link></li>
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
