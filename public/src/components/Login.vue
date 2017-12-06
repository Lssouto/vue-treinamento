<template>
  <div id="login">
    <div class="container">
      <h1>{{title}}</h1>
      <div class="form-container">
        <form action="">
          <input type="text" name="email" placeholder="Email" v-model="credential.user" class="form-control"/> <br>
          <input type="password" name="password" placeholder="Password" v-model="credential.pwd" class="form-control" /><br>
          
          <button type="button" v-on:click="login" class="btn btn-success">Logar</button> <br>
        </form>
        <h2 v-if="msg != 'default' " class="msg" v-bind:class="{error : !msg, success : msg}">{{msg}}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
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
        
      } catch (e) {
        console.log("Um Erro Ocorreu" + e)
      }
    }
  },
  mounted () {
    setTimeout(()=>{
      this.title = 'Insira Usuário e Senha'
    }, 2000)
  }
}
</script>

<style scoped>

</style>

