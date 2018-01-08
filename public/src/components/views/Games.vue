<template>
   <div id="games">
       <div class="container-fluid">
           <ul v-if="!(games === 'Error')" class="row">
               <li v-for="game in games" class="list-img-desc">
                   <div class="col-md-3 list-img">
                       <img v-bind:src="game.imgUrl" />
                   </div>
                   <div class="col-md-9 list-desc">
                       <div class="title"> {{game.title}}  - {{game.ano}}  </div>
                       <div class="desc">
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores quos incidunt dicta. Cum dicta, veniam voluptatibus reiciendis deserunt ipsam rem harum magnam voluptatum numquam perferendis, tempora non doloribus repudiandae sunt!
                       </div>
                       <button type="button" class="btn btn-success" v-on:click="navigateTo({name: 'Game', params: {gameId: game.id }})">Ver mais</button>
                   </div>
               </li>
           </ul>
          
           <div v-else class="msg error" >
               Ocorreu um error ao Renderizar os Dados!!
           </div>
           
           <router-link to="games/adicionar" >
               <div class="adicionar-item">
                   +
               </div>
           </router-link>
       </div>
    </div>
</template>

<script>
import GS from "@/services/GamesService"

export default {
    name: 'Game',
    data (){
        return {
            title: "Games Area",
            games: [],
            msg: 'default'
        }
    },
    async mounted (){
        try {
            this.games = (await GS.read()).data
        } catch (e) {
            this.games = "Error"
            console.log(e);
        }
    },
    methods: {
        navigateTo : function(router){
            this.$router.push(router);
        }
    }
}
</script>


<style lang="scss" scoped>
#games > .container-fluid{
    position: relative;
}
</style>
