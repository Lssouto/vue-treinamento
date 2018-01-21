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
                    Comentários
                    <ul class="row">
                        <li class="list-simple">
                            <div class="col-md-1">
                                <img src="/src/assets/images/owl-logo.svg" alt="">
                            </div>
                            <div class="col-md-11">
                                <div class="username">LSSOUTO</div>
                                <div class="user-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime fugiat magni, soluta libero quam voluptatibus officiis quo dolorum nostrum sit, saepe assumenda! Laborum obcaecati, hic aperiam laudantium, quae iusto similique.</div>
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
.username,.user-text{
    display:block;
}
</style>
