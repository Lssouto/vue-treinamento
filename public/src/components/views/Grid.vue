<template>
    <div class="grid">
        <div class="container">
            <h1>Bem vindo à {{title}}</h1>
            <div class="row">
                <div class="col col-6">Aqui tem uma coluna de 6</div>
                <div class="col col-6">Aqui tem uma coluna de 6</div>
            </div>
            <div class="row">   
                <div class="col col-4">Aqui tem uma coluna de 4</div>
                <div class="col col-4">Aqui tem uma coluna de 4</div>
                <div class="col col-4">Aqui tem uma coluna de 4</div>
                <div class="col col-4">Aqui tem uma coluna de 4</div>
                <div class="col col-4">Aqui tem uma coluna de 4</div>
                <div class="col col-4">Aqui tem uma coluna de 4</div>
            </div>
            <div class="row">
                <div class="col col-6">Aqui tem uma coluna de 6</div>
                <div class="col col-6">Aqui tem uma coluna de 6</div>
            </div>
            <div class="row">   
                <div class="col col-4">Aqui tem uma coluna de 4</div>
                <div class="col col-4">Aqui tem uma coluna de 4</div>
                <div class="col col-4">Aqui tem uma coluna de 4</div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Grid',
  data () {
    return {
      title: 'Grid'
    }
  }
}
</script>


<style lang="scss" scoped>



</style>
