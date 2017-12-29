<template>
  <div id="app">
    <c-header class="col-md-12 m-0"></c-header>
    <div class="flex-wrap">
      <navbar class="col-md-2 p-0" style="position:initial"></navbar>
      <router-view class="col-md-10 p-0"></router-view>
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
      title: "hue"
    }
  },
  methods:{ 
    
  }
}

</script>

<style>
</style>
