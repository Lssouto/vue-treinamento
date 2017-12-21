<template>
  <div id="painel" >
    <div class="form-container">
    <h1>{{title}}</h1>
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

</style>

