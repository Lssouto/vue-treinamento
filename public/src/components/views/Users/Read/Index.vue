<template>
   <div id="games">
       <div class="container-fluid">
           <div class="row">
               <search  class="col-md-6 col-md-push-3" />
           </div>
           <create @create-user="createUser" :update="update" />
           <list :data="data" @delete-user="deleteUser" @update-user="updateStatus" />
        </div>
    </div>
</template>

<script>
import Users from "@/services/Users"
import List from "./List"
import Search from "./Search"
import Create from "./Create"
export default {
    name: 'User',
    data (){
        return {
            title: "User Area",
            data: [],
            update: {
                status: false,
                user: ''
            }
        }
    },
    mounted (){
        this.readUser()  
    },
    watch :{
        '$store.state.route.query.search' :{
            immediate: true,
            async handler (value){
                this.data = (await Users.read(value)).data.values
            }
        }  
    },
    components : {
        List,
        Search,
        Create
    },
    methods :{
        async readUser(){
            try {
                this.data = (await Users.read()).data.values
            } catch (e) {
                this.data = "Error"
                console.log(e);
            }
        },
        async deleteUser(userId){
            try {
                await Users.del(userId)
                this.readUser()
            } catch (e) {
                console.log(e)
            }
        },
        async createUser(credential){
            if(this.update.status){
                this.updateUser(credential)
                return
            }
            try {
                await Users.create(credential)
                this.readUser()
            } catch (e) {
                console.log(e)
            }
        },
        async updateUser(credential){
          try {
              await Users.update(credential)
              this.update.status = false
              this.readUser()
          } catch (e) {
              console.log(e)
          }  
        },
        updateStatus (user){
            this.update.status = true
            this.update.user = user
        }
        
    }
}
</script>


<style lang="scss" scoped>

</style>
