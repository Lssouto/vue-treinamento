<template>
   <div id="games">
       <div class="container-fluid">
           <div class="row">
               <search  class="col-md-6 col-md-push-3" />
           </div>
           <list :data="data"/>
        </div>
    </div>
</template>

<script>
import GS from "@/services/GamesService"
import List from "./List"
import Search from "./Search"

export default {
    name: 'Games',
    data (){
        return {
            title: "Gamming Area",
            data: []
        }
    },
    async mounted (){
        try {
            this.data = (await GS.read()).data
        } catch (e) {
            this.data = "Error"
            console.log(e);
        }
    },
    watch :{
        '$store.state.route.query.search' :{
            immediate: true,
            async handler (value){
                this.data = (await GS.read(value)).data
            }
        }  
    },
    components : {
        List,
        Search
    }
}
</script>


<style lang="scss" scoped>

</style>
