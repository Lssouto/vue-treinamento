<template>
  <div id="logout" v-on:click="logout(false)"> 
    <modal>
      <div slot="data">
        <h2>Deseja Deslogar?</h2>
        <button class="btn btn-success" v-on:click="logout(true)">Sim</button>
        <button class="btn btn-warning" v-on:click="logout(false)">Não</button>  
      </div>
    </modal>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Modal from '@/components/general/Modal'

export default {
  name: 'Logout',
  data (){
      return {
        logoutStatus: false
      }
    },
    methods:{
      logout(){
        switch(arguments[0]){
          
          case 'statusChange':
            this.logoutStatus = !this.logoutStatus
            return
            
          case true:
            this.$store.dispatch('setToken', null)
            this.$store.dispatch('setUser', null)
            break
            
          case false:
            logoutStatus: false
            break
            
          default:
            console.log("Opção Inválida")
            break
        }
        this.logoutStatus = false
        this.$router.go(-1)
      }
    },
    components:{
      Modal
    }
}
</script>

<style scoped>

</style>

