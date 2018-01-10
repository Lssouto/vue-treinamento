<template>
    <div class="index">
        <div class="container-fluid">
          <h1>Bem vindo à {{title}}</h1>
          <h2>Click effect</h2>
          <button class="btn btn-effect _pass-by _left"> Pass By</button>
          <button class="btn btn-effect _pulse"> Pulse</button>
          <h2>Hover effect</h2>
          <button class="btn btn-effect _stop-inside _right">Stop inside</button>
          
        </div>
    
    </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      title: 'index'
    }
  },
  mounted (){
  
  }
}
</script>


<style lang="scss" scoped>


</style>
