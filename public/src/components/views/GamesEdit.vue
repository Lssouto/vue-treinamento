<template>
   <div id="games">
       <div class="container-fluid">
            <painel title="Game add">
                <div slot="data">
                    <form action="" autocomplete="off" v-on:submit.prevent="atualizar">
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
                        <v-text-field 
                            type="text"
                            label="Image URL"
                            v-model="game.imgUrl" 
                            required 
                            :rules="[required]"
                        ></v-text-field>
                        
                        <div class="input-group-form">
                            <button type="submit" class="btn btn-success">Atualizar</button>
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
            title: "Games Edit",
            game:{
                title: '',
                ano: '',
                imgUrl: ''
            },
            msg: 'default',
            required : (value) => !!value || 'Required.'
        }
    },
    components : {
        Painel
    },
    props : [
        'gameId'
    ],
    async mounted (){
        try {
            let data = (await GS.show(this.gameId)).data      
            console.log(data)
            this.game = data;
        } catch (e) {}
    },
    methods: {
        async atualizar(e){
            e.preventDefault
        
            const isFormOk = Object.keys(this.game).every(key => !!this.game[key])
            if(!isFormOk){
                return 
            }
            try {
                let data = (await GS.update(this.game)).data
                console.log(data)
                data = null
                 this.$router.push({name : 'Games'})
            } catch (e) {
                console.log(e);
            }
        }
    }
}
</script>


<style lang="scss" scoped>

</style>
