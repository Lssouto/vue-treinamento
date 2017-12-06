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

.container{
    position:relative;
    width: 80%;
    margin: 0 auto;
    
}
.col{
    display:inline-block;
    margin-left: -4px;
    margin-bottom:10px;
    box-sizing: border-box;
    border: 5px solid #245087;
    border-radius: 6px;
}

@media screen and (max-width: 767px){
    .col-6{
        width: 98%;
    }
    .col-4{
        width: 98%;
    }    
}
@media screen and (min-width: 768px){
    .col-6{
        width: 48%;
        
    }
    .col-4{
        width: 48%;
        
    }    
}
@media screen and (min-width: 992px){
    .col-6{
        width: 48.77777%;
    }
    .col-4{
        width: 31%;
        margin: 5px 1.5%;
    }   
    .row .col-6:first-child{
        margin: 0 1% 10px 0;
    }
    .row .col-6:last-child{
        margin: 0 0 10px 1%;
    }
    .row .col-4:nth-child(3n){
        margin: 0 0 10px 1.5%;
    }
    .row .col-4:nth-child(3n+1){
        margin: 0 1.5% 10px 0 ;
    }
    
}
h1{
    text-align: center;
    padding: 25px;
    color: #cecece;
    background: #fff;
    position:relative;
}
h1:after{
    content: "";
    width: 100%;
    height: 2px;
    background: #123123;
    display:inline-block;
    position:absolute;
    bottom: 0;
    left:50%;
    transform:translateX(-50%);
}

</style>
