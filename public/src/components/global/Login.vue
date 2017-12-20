<template>
  <div id="login" v-on:click="logout(false)"> 
    <modal>
      <div slot="data">
        <h2>Login</h2>
        <form action="">
          <input type="text" name="email" placeholder="Email" v-model="credential.user" class="form-control"/> <br>
          <input type="password" name="password" placeholder="Password" v-model="credential.pwd" class="form-control" /><br>
          <button type="button" v-on:click="login" class="btn btn-success">Logar</button> <br>
        </form>
        <h2 v-if="msg != 'default' " class="msg" v-bind:class="{error : !msg, success : msg}">{{msg}}</h2>
      </div>
    </modal>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Modal from '@/components/general/Modal'

export default {
  name: 'Login',
  data () {
    return {
      title: 'Login',
      msg: 'default',
      credential:{
        user:'',
        pwd: ''
      },
      bgMessage: false
    }
  },
  methods:{
    async login(){
      try {
        const response = await AuthenticationService.login({
          user: this.credential.user,
          password: this.credential.pwd
        })
        
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        
        // this.msg = response.data;
        console.log(response.data)
        
        this.credential = {user: '', pwd: ''}
        this.$router.go(-1)
      } catch (e) {
        console.log("Um Erro Ocorreu" + e)
      }
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
  },
  mounted () {
    setTimeout(()=>{
      this.title = 'Insira Usuário e Senha'
    }, 2000)
  },
  components:{
    Modal
  }
}
</script>

<style scoped>

</style>

