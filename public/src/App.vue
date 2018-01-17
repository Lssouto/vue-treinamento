<template>
  <div id="app">
    <c-header></c-header>
    <div class="flex-wrap">
      <navbar class="col-md-2 p-0" ></navbar>
      <router-view class="col-md-10" ></router-view>
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
