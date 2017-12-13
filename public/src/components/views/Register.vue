<template>
  <div id="register" >
    <div class="container">
      <painel title="Register" class="col col-6">
        <div slot="data">
          <form action="" autocomplete="off">
            <input type="text" name="email" placeholder="Email" v-model="credential.user" class="form-control"/> <br>
            <input type="password" name="password" placeholder="Password" v-model="credential.pwd" class="form-control" /><br>
            
            <button type="button" v-on:click="adicionar" class="btn btn-success">Adicionar</button> <br>
          </form>
          <h2 v-if="msg != 'default' " class="msg" v-bind:class="{error : !msg, success : msg}">{{msg}}</h2>
        </div>
      </painel>
    </div>
  </div>
</template>

<script>

import AuthenticationService from '@/services/AuthenticationService'
import Painel from '@/components/general/Painel'

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
      
      // this.msg = response.data;
      console.log(response.data);
      
      this.credential = {user: '', pwd: ''}
    }
  },
  mounted () {
    setTimeout(()=>{
      this.title = 'Insira Usuário e Senha'
    }, 2000)
  },
  components : {
    Painel
  }
}
</script>

<style scoped>

</style>

