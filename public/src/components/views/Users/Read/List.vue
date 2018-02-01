<template>
    <div id="list">
        <ul v-if="!(data === 'Error')" class="list-table">
           <li v-for="user in data">
               <div class="col-md-1">
                   {{user.id}}
               </div>
               <div class="col-md-4">
                   {{user.user}}
               </div>
               <div class="col-md-4">
                   {{user.password}}
               </div>
               <div class="col-md-1"></div>
               <div class="col-md-1">
                   <button
                   @click="remover(user.id)"
                   class="btn btn-success btn-more  btn-effect _pulse">
                   X
                   </button>
               </div>
               <div class="col-md-1">
                   <button
                   @click="update(user)"
                   class="btn btn-success btn-editar  btn-effect _pulse">
                   E
                   </button>
               </div>
            </li>
       </ul>
      
       <div v-else class="msg error" >
           Ocorreu um error ao Renderizar os Dados!!
       </div>
  
    </div>
</template>

<script>
import SpinBtn from "@/components/general/SpinBtn"
export default {
    name : 'List',
    components : {
        SpinBtn
    },
    methods :{
      remover(id){
        this.$emit('delete-user', id)
      },
      update(user){
        this.$emit('update-user', user)
      }
    },
    props : [
        'data'
    ]
}
</script>


<style lang="scss" scoped>
</style>
