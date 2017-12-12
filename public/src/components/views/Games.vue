<template>
   <div id="games">
       <div class="container">
           <painel title="Game List">
               <div slot="data">
                   Algo aqui dentro
               </div>
           </painel>
       </div>
   </div>
</template>

<script>
import Painel from "@/components/general/Painel"

export default {
    name: 'Game',
    data (){
        return {
            title: "Games Area"
        }
    },
    components : {
        Painel
    }
}
</script>


<style lang="scss" scoped>
</style>
