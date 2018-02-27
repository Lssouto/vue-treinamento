<template>
  <div class="Forms">
    <h2>In Time Validate</h2>
    <form>
      <div class="input-container" :class="{'error' : errors.has('name')}">
        <label>
          Nome: 
          <input type="text" name="name" class="form-control" v-model="inTime.nome" v-validate="'required|alpha'" />
        </label>
        <div class="msg">
          <span class="fa fa-close"></span>
        </div>
      </div>
      
      <div class="input-container" :class="{'error' : errors.has('email')}">
        <label>
          Email: 
          <input type="text" name="email" class="form-control" v-model="inTime.email" v-validate="'required|email'" />
        </label>  
        <div class="msg">
          <span class="fa fa-close"></span>
        </div>
      </div>
      
    </form>
  </div>
</template>

<script>

export default {
  name: 'Forms',
  data  (){
    return {
      inTime: {nome: '', email:''},
      email: ''
    }
  }
}
</script>


<style lang="scss">
.forms{
  padding: 25px;
}
.input-container{
  position: relative;
  .msg{
    position: absolute;
    height: 40px;
    width: 40px;
    top: 0;
    right: 5px;
    border-radius: 6px;
    color: #fff;
  }
}
</style>
