<template>
  <header class="row m-0 flex-align ">
    <button class="nav-toggle btn" @click="changeNav">
      <span class="fa fa-bars"></span>
    </button>
    <div class="text-right options">
      <span v-if="!isUserLoggedIn">
        <button class="userOption" @click="modalVisible(true)">Login</button>
        <modal :visible="isModalLoginVisible" @visible-change="modalVisible" >
          <div slot="data">
            <login @logged-in="modalLogoutVisible"></login>
          </div>
        </modal>
      </span>
      <span v-else>
        <button class="userOption" @click="modalLogoutVisible(true)">Logout</button>
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
      modalVisible(visible){
        this.isModalLoginVisible = visible;
      },
      modalLogoutVisible(visible){
        this.isModalLogoutVisible = visible;
      },
      changeNav (){
        this.$emit('changeNav',true);
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
