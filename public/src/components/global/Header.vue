<template>
  <header class="row m-0">
    <div class="col-md-2 logo">
      <img src="/src/assets/images/owl-logo.svg"></img>LSSouto
    </div>
    <div class="col-md-10 text-right">
      <span v-if="!isUserLoggedIn">
        <button class="userOption" @click="showModal('login')">Login</button>
        <modal :visible="isModalLoginVisible" @visible-change="modalVisible" >
          <div slot="data">
            <login @loggedIn="modalLogoutVisible"></login>
          </div>
        </modal>
      </span>
      <span v-else>
        <button class="userOption" @click="showModal('logout')">Logout</button>
        <modal :visible="isModalLogoutVisible" @visible-change="modalLogoutVisible" >
          <div slot="data">
            <logout @logout-status="modalLogoutVisible"></logout>
          </div>
        </modal>
      </span>
    </div>
  </header>
</template>

<script>
import {mapState} from 'vuex'
import Modal from "@/components/general/Modal"
import Login from "@/components/global/Login"
import Logout from "@/components/global/Logout"

export default {
    name : 'Header',
    data () {
      return {
        isModalLoginVisible: false,
        isModalLogoutVisible: false
      }
    },
    computed:{
      ...mapState([
        'isUserLoggedIn'
      ])
    },
    methods :{
      showModal (field){
        if(field == 'login')
          this.isModalLoginVisible = true;
        else
          this.isModalLogoutVisible = true;
      },
      modalVisible(visible){
        this.isModalLoginVisible = visible;
      },
      modalLogoutVisible(visible){
        this.isModalLogoutVisible = visible;
      }
    },
    components :{
      Login,
      Logout,
      Modal
    }
    
}
</script>

<style lang="scss" scoped>
</style>
