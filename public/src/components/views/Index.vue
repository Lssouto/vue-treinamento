<template>
    <div class="index">
      <div class="container-fluid">
        <div class="row"> 
          
          <div class="col-lg-5">
            <div class="img-animation text-center">
              <img src="../../assets/images/owl-logo-blink.png" alt="" class="blink">
            </div>
          </div>
          
          <div class="col-lg-7">
            <div class="welcome-container">
              <h2><typewriter text="Welcome to a Vue Painel ^.^" delay="500" /></h2>
              <h2><typewriter text="This is the OWL" start="2000" /></h2>
              <h2><typewriter text="^.~" start="4000" duration="500" /></h2>
              <h2><typewriter text="our mascot" start="4500" duration="800"/></h2>
              <h2><typewriter text="This is the ultimate mega plus advanced ..." start="5300" duration="4000" delay="600" type="both" /></h2>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    
</template>

<script>
import Typewriter from '@/components/general/Typewriter'
export default {
  name: 'index',
  data () {
    return {
      title: 'index'
    }
  },
  components : {
    Typewriter
  }
}
</script>


<style lang="scss">

</style>
