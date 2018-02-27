<template>
  <div id="app">
    <div class="flex-align">
      <navbar class="p-0" :status="navbarStatus" />
      <div class="max">
        <c-header @changeNav="navbarStatus = !navbarStatus" />
        <transition name="fade">
          <div class="container-view">
            <router-view />
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>

import Navbar from '@/components/global/Navbar'
import cHeader from '@/components/global/Header'


export default {
  name: 'app',
  components:{
    navbar: Navbar,
    cHeader
  },
  data(){
    return{
      title: "hue",
      navbarStatus: false
    }
  }
}

</script>

