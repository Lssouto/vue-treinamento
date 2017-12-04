<template>
    <div class="index">
        <div class="container">
            <h1>Bem vindo à {{title}}</h1>
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
  }
}
</script>


<style lang="scss" scoped>

.container{
    position:relative;
    margin-top: 45px;
}
h1{
    position:absolute;
    padding: 25px;
    color: #cecece;
    background: #fff;
    width: 500px;
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%);
    
}
</style>
