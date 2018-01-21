<template>
   <div id="games">
       <div class="container-fluid">
           <div class="row">
               <search  class="col-md-6 col-md-push-3" />
           </div>
           <games-list :games="games"/>
        </div>
    </div>
</template>

<script>
import GS from "@/services/GamesService"
import GamesList from "./List"
import Search from "./Search"

export default {
    name: 'Game',
    data (){
        return {
            title: "Games Area",
            games: []
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
    watch :{
        '$store.state.route.query.search' :{
            immediate: true,
            async handler (value){
                this.games = (await GS.read(value)).data
            }
        }  
    },
    components : {
        GamesList,
        Search
    }
}
</script>


<style lang="scss" scoped>

</style>
