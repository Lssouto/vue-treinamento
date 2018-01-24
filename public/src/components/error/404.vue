<template>
  <div>
      <h1>Página não encontrada</h1>
      <h3>Redirecionando para HomePage . . .</h3>
  </div>
</template>

<script>
export default {
    name : 'c404',
    mounted (){
      setTimeout(()=>{
        this.$router.push({name: 'Index'})
      },2000)
    }
}
</script>


<style lang="scss" scoped>
</style>
