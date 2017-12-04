<template>
  <div class="index">
    <h1>Bem vindo à {{title}}</h1>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      title: 'index'
    }
  }
}
</script>


<style lang="scss" scoped>
h1{
    padding: 25px;
    color: #cecece;
    background: #fff;
    
}
</style>
