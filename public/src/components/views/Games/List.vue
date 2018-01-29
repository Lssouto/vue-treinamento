<template>
    <div id="GamesList">
        <ul v-if="!(games === 'Error')" class="row">
           <li v-for="game in games" class="list-img-desc">
               <div class="col-md-3 list-img">
                   <img v-bind:src="game.imgUrl" />
               </div>
               <div class="col-md-8 list-desc">
                   <div class="title"> {{game.title}}  - {{game.ano}}  </div>
                   <div class="desc">
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quos incidunt dicta. Cum dicta, veniam voluptatibus reiciendis deserunt ipsam rem harum magnam voluptatum numquam perferendis, tempora non doloribus repudiandae sunt!
                   </div>
                   
               </div>
               <div class="col-md-1">
                   <router-link 
                   tag="button"
                   class="btn btn-success btn-more  btn-effect _pulse"
                   :to="{
                        name: 'Game',
                        params: {
                           gameId: game.id
                        } 
                   }">
                   +
                   </router-link>
                   <router-link 
                   tag="button"
                   class="btn btn-success btn-editar  btn-effect _pulse"
                   :to="{
                        name: 'GameEdit',
                        params: {
                           gameId: game.id
                        } 
                   }">
                   Edit
                   </router-link>
               </div>
           </li>
       </ul>
      
       <div v-else class="msg error" >
           Ocorreu um error ao Renderizar os Dados!!
       </div>
       
        <div class="adicionar-item">
            <spin-btn link="GamesAdd" start="deg180" end="left" speed="fast">
                <div slot="text">Adicionar</div>
                <div slot="symbol">+</div>
            </spin-btn>
        </div>
    </div>
</template>

<script>
import SpinBtn from "@/components/general/SpinBtn"
export default {
    name : 'GamesList',
    components : {
        SpinBtn
    },
    props : [
        'games'
    ]
}
</script>


<style lang="scss" scoped>
</style>
