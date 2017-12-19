<template>
  <div id="app" >
    <c-header class="col-md-12"></c-header>
    <navbar class="col-md-2 p-0"></navbar>
    <router-view class="col-md-10 p-0"></router-view>
    <c-footer class="col-md-12"></c-footer>
  </div>
</template>

<script>

import Navbar from '@/components/global/Navbar'
import cHeader from '@/components/global/Header'
import cFooter from '@/components/global/Footer'

export default {
  name: 'app',
  components:{
    navbar: Navbar,
    cHeader,
    cFooter
  }
}
</script>

<style>
</style>
