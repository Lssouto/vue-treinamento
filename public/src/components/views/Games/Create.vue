<template>
   <div id="games">
       <div class="container-fluid">
            <painel title="Game add">
                <div slot="data">
                    <form action="" autocomplete="off" v-on:submit.prevent="adicionar">
                        <div class="input-container">
                            <input type="text"
                                placeholder="Nome"
                                class="form-control"                                
                                name="titulo"
                                v-model="game.title" 
                                required>
                        </div>
                        <div class="input-container">
                            <input type="text"
                                class="form-control"                                
                                placeholder="Ano"
                                v-model="game.ano" 
                                required>
                        </div>
                        <div class="input-container">
                            <input type="text"
                                class="form-control"                            
                                placeholder="Image URL"
                                v-model="game.imgUrl" 
                                required>
                        </div>
                        
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
    name: 'Create',
    data (){
        return {
            title: "Add Games",
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
        methods: {
        async adicionar(e){
            e.preventDefault
        
            const isFormOk = Object.keys(this.game).every(key => !!this.game[key])
            if(!isFormOk){
                return 
            }
            try {
                let data = await GS.create(this.game)
                console.log(data.data)
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
