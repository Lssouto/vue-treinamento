<template>
  <div>
    
    <h1>{{title}}</h1>
    <div class="form-container">
      <form action="">
        <input type="text" name="email" placeholder="Email" v-model="credential.user" class="form-control"/> <br>
        <input type="password" name="password" placeholder="Password" v-model="credential.pwd" class="form-control" /><br>
        
        <button type="button" v-on:click="login" class="btn">Logar</button> <br>
      </form>
      <h2 v-if="msg != 'default' " class="msg" v-bind:class="{error : !msg, success : msg}">{{msg}}</h2>
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
input{
  margin-top:20px;
}
.msg{
  color: #fff;
  font-weight:bolder;
  padding: 20px 40px;
  width: 120px;
  margin: 0 auto;
  text-transform: uppercase;
}
.success {
  background: rgba(36, 149, 183,0.3);
}
.error{
  background: rgba(198, 37, 37,0.3);
}
.form-control{
  height: 35px;
  border: rgba(0,0,0,0.4) 1px solid;
  border-radius: 3px;
  width:200px;
  padding: 2px 2px 2px 25px;
}
.form-control:hover, .form-control:active , .form-control:focus{
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.4);
}
.form-container{
  margin:  0 auto;
  background: #fff;
  width: 250px;
  border-radius:6px;
  padding: 25px;
}
.btn{
  margin-top: 25px;
  margin-bottom: 15px;
  height:35px;
  width: 120px;
  border-radius:6px;
  background: #123123;
  color: #fff;
  font-weight:bolder;
  border: 0px;
  cursor: pointer;
}
.btn:hover,.btn:focus{
  background: #fff;
  color: #123123;
  border: 1px solid #123123;
}
</style>

