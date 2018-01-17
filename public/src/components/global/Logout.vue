<template>
  <div id="logout"> 
    <h2>Deseja Deslogar?</h2>
    <button class="btn btn-success" v-on:click="logout(true)">Sim</button>
    <button class="btn btn-warning" v-on:click="logout(false)">Não</button>  
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Modal from '@/components/general/Modal'

export default {
  name: 'Logout',
  methods:{
    logout(){
      if(arguments[0] === true){
        this.$store.dispatch('setToken', null)
        this.$store.dispatch('setUser', null)
      }
      else
        this.$emit('logout-status',false);
    }
  },
  components:{
    Modal
  }
}
</script>

<style scoped>

</style>

