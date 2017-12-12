<template>
  <div id="navbar">
    <ul>
      <li><router-link to="/" v-on:click="navigateTo({name: 'index'})">home</router-link></li>
      <li><router-link to="Register" v-on:click="navigateTo({name: 'register'})">Register</router-link></li>
      <li v-if="!$store.state.isUserLoggedIn"><router-link to="Login" v-on:click="navigateTo({name: 'login'})">Login</router-link></li>
      <li v-else="$store.state.isUserLoggedIn" v-on:click="logout('statusChange')"><a href="#">Logout</a></li>
      <li><router-link to="Grid" v-on:click="navigateTo({name: 'grid'})">Grid</router-link></li>
      <li><router-link to="Games" v-on:click="navigateTo({name: 'games'})">Games</router-link></li>
    </ul>
    <div v-if="logoutStatus" class="modal" v-on:click="logout(false)">
      <div class="modal-content">
        <h2>Deseja Deslogar?</h2>
        <button class="btn btn-success" v-on:click="logout(true)">Sim</button>
        <button class="btn btn-warning" v-on:click="logout(false)">Não</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      title: 'Navbar',
      logoutStatus: false
    }
  },
  methods: {
    navigateTo (router){
      this.$router.push(route)
    },
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
    }
  }
}
</script>


<style lang="scss" scoped>
ul{
    padding:0;
    li{
        list-style: none;
        display: inline-block;
        margin-right: 15px;
        
        a:link,a:visited{
          text-decoration:none;  
          text-transform: uppercase;
          padding: 6px;
          color: #245087;
          border-radius: 6px;
          font-weight:bolder;
        }
        a:hover{
          color: #fff;
          background: #245087;
        }
    }
}

</style>
