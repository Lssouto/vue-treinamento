<template>
  <div>
    <h1>{{title}}</h1>
    
    <input type="text" name="email" placeholder="Email" v-model="credential.user"  /> <br>
    <input type="text" name="password" placeholder="Password" v-model="credential.pwd" /><br>
    
    <button v-on:click="adicionar">Adicionar</button> <br>
    
    <h2 v-if="msg != 'default' " class="msg" v-bind:class="{error : !msg, success : msg}">{{msg}}</h2>
    
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      title: 'Register',
      msg: 'default',
      credential:{
        user:'',
        pwd: ''
      },
      bgMessage: false
    }
  },
  methods:{
    async adicionar(){
      
      const response = await AuthenticationService.register({
        user: this.credential.user,
        password: this.credential.pwd
      })
      
      this.msg = response.data;
      console.log(response.data);
      
    }
  },
  mounted () {
    setTimeout(()=>{
      this.title = 'Adicione um usuário'
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
</style>

