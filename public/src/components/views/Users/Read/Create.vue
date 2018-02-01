<template>
  <div id="register" class="container-fluid" >
    <form action="" autocomplete="off">
      <div class="row">
        <div class="col-md-1">
          Código
        </div>
        <div class="col-md-4">
          <input type="text" name="user" placeholder="User" v-model="credential.user" class="form-control"/> <br>
        </div>
        <div class="col-md-4">
          <input type="text" name="password" placeholder="Password" v-model="credential.password" class="form-control" /><br>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-2">
          <button type="button" @click="adicionar" class="btn btn-success">{{button}}</button> <br>
        </div>
      </div>
    </form>
  </div>
</template>

<script>

import US from '@/services/Users'

export default {
  name: 'Create',
  data () {
    return {
      title: 'Create',
      credential:{
        user:'',
        password: ''
      },
      button: "Adicionar"
    }
  },
  methods:{
    adicionar(){
      this.$emit('create-user', this.credential)
      this.credential = {
        user:'',
        password: ''
      }
    }
  },
  watch : {
    'update' :{
      deep : true,
      handler : function(value){
        try {
          if(value.status){
            this.button = "Alterar"
            this.credential = value.user
          }
          else{
            this.button = "Adicionar"
          }  
        } catch (e) {
          return
        }
      }
    }
  },
  props: [
    'update'
  ]
}
</script>

<style scoped>

</style>

