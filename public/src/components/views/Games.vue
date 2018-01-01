<template>
   <div id="games">
       <div class="container-fluid">
           <painel title="Game List" class="col-md-6">
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
           
           <painel title="Game add" class="col-md-6">
                <div slot="data">
                    <form action="" autocomplete="off" v-on:submit.prevent="adicionar">
                        <v-text-field 
                            name="titulo"
                            label="Título"
                            v-model="game.title" 
                            required 
                            :rules="[required]" 
                        ></v-text-field>
                        <v-text-field 
                            type="text"
                            label="Ano"
                            v-model="game.ano" 
                            required 
                            :rules="[required]"
                        ></v-text-field>
                        
                        <div class="input-group-form">
                            <button type="submit" class="btn btn-success">Adicionar</button>
                        </div>
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
            msg: 'default',
            required : (value) => !!value || 'Required.'
        }
    },
    components : {
        Painel
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
        async adicionar(e){
            e.preventDefault
            const isFormOk = Object.keys(this.games).every(key => !!this.games[key])
            if(!isFormOk){
                return 
            }
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
