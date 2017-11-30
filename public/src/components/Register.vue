<template>
  <div>
    <h1>{{title}}</h1>
    
    <input type="text" name="email" placeholder="Email" v-model="credential.email"  />
    <input type="text" name="password" placeholder="Password" v-model="credential.pwd" />
    
    <button v-on:click="adicionar">Adicionar</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      title: 'Register',
      msg: 'Empty',
      credential:{
        email:'',
        pwd: ''
      }
    }
  },
  methods:{
    async adicionar(){
      
      const response = await AuthenticationService.register({
        email: this.credential.email,
        password: this.credential.pwd
      })
      
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
</style>
