<template>
  <div id="painel" >
    <h1>{{title}}</h1>
    <div class="form-container">
        <slot name="data">No Data found</slot>
    </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Painel',
  props : [
    'title'
    ]
}
</script>

<style scoped>
.col-6{
    margin: 0 auto;
}
</style>

