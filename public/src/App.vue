<template>
  <div id="app">
    <div class="flex-wrap">
      <navbar class="p-0" :status="navbarStatus" />
      <div class="max">
        <c-header @changeNav="navbarStatus = !navbarStatus" />
        <router-view />
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
