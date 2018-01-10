<template>
  <div id="buttons" class="container-fluid">
      <div class="row">
          <div class="col-md-6">
                <h2>Click effect</h2>
                <button class="btn btn-effect _pass-by _left" :style="colorsObject"> Pass By</button>
                <button class="btn btn-effect _pulse" :style="colorsObject"> Pulse</button>
                <h2>Hover effect</h2>
                <button class="btn btn-effect _stop-inside _right" :style="colorsObject">Stop inside</button>
                <h1>teste</h1>
          </div>
          <div class="col-md-6">
                <div class="photoshop-container">
                    <h3>Background</h3>
                    <photoshop-picker v-model="backgroundColors"> </photoshop-picker>
                </div>
                <div class="photoshop-container">
                    <h3>Text</h3>
                    <photoshop-picker v-model="textColors"> </photoshop-picker>
                </div>
                <button class="btn" @click="changeColor()" :style="colorsObject">Alterar</button>
          </div>
      </div>
  </div>
</template>

<script>
import { Photoshop } from 'vue-color'
export default {
    name : 'Buttons',
    data(){
        return{
            backgroundColors: '',
            textColors: '',
            colorsObject :{
                'background-color': '#9e54bd',
                'color': '#fff'
            }
        }
    },
    components : {
        'photoshop-picker': Photoshop
    },
    methods:{
        changeColor : function(){
            this.colorsObject['background-color'] = this.backgroundColors.hex
            this.colorsObject['color'] = this.textColors.hex
        }
    }
}
</script>


<style lang="scss" scoped>
.photoshop-container{
    display: block;
    
}

</style>
