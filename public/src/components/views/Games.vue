<template>
   <div id="games">
       <div class="container">
           <painel title="Game List" class="col col-6">
               <div slot="data">
                   <ul v-if="!(games === 'Error')">
                       <li v-for="game in games">
                           {{game.title}} -  {{game.ano}}
                       </li>
                   </ul>
                   <div v-else class="msg error" >
                       Ocorreu um error ao Renderizar os Dados!!
                   </div>
               </div>
           </painel>
           
           <painel title="Game add" class="col col-6">
                <div slot="data">
                    <form action="" autocomplete="off">
                        <input type="text" name="email" placeholder="Email" v-model="game.title" class="form-control"/> <br>
                        <input type="text" name="password" placeholder="Password" v-model="game.ano" class="form-control" /><br>
                        
                        <button type="button" v-on:click="adicionar" class="btn btn-success">Adicionar</button> <br>
                    </form>
                    <h2 v-if="msg != 'default' " class="msg" v-bind:class="{error : !msg, success : msg}">{{msg}}</h2>
                </div>
           </painel>
       </div>
   </div>
</template>

<script>
import Painel from "@/components/general/Painel"
import GS from "@/services/GamesService"

export default {
    name: 'Game',
    data (){
        return {
            title: "Games Area",
            games: [],
            game:{
                title: '',
                ano: ''
            },
            msg: 'default'
        }
    },
    components : {
        Painel
    },
    async mounted (){
        try {
            let data = await GS.read()
            this.games = data.data
            
            data = null
        } catch (e) {
            this.games = "Error"
            console.log(e);
        }
    },
    methods: {
        async adicionar(){
            try {
                let data = await GS.create(this.game)
                console.log(data.data)
                data = null
                this.reloadGames()
            } catch (e) {
                console.log(e);
            }
        },
        async reloadGames(){
            try {
                let data = await GS.read()
                this.games = data.data
                
                data = null
            } catch (e) {
                this.games = "Error"
                console.log(e);
            }
        }
    }
}
</script>


<style lang="scss" scoped>
</style>
