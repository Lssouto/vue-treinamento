<template>
   <div id="games">
       <div class="container-fluid">
            <div class="row">
                <div class="col-md-4">
                    <img :src="game.imgUrl"></img>
                </div>
                <div class="col-md-6">
                    <h2 class="text-center">{{game.title}} - {{game.ano}}</h2>
                    
                </div>
            </div>
            
            <div class="row">   
                <div class="col-md-12">
                    Opniões
                    <ul class="row">
                        <li class="list-simple">
                            <div class="col-md-2">
                                
                            </div>
                            <div class="col-md-10">
                                user : 123
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
       </div>
    </div>
</template>

<script>
import GS from "@/services/GamesService"

export default {
    name: 'GameView',
    data (){
        return {
            title: "Games View",
            game: { id: '',
                title: '',
                ano: '',
                imgUrl: ''
            },
            msg: 'default'
        }
    },
    async mounted (){
        try {
            const gameId  = this.$store.state.route.params.gameId
            this.game = (await GS.show(gameId)).data
        
        } catch (e) {
            this.games = "Error"
            console.log(e);
        }
    },
    methods: {
    }
}
</script>


<style lang="scss" scoped>

img{
    width: 100%;
}
</style>
