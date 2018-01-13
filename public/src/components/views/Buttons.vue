<template>
    <div id="buttons" class="container-fluid">
        <div class="row">
            <div class="col-md-6">
                <button class="btn btn-effect" :style="colorsObject"> Simple</button>
                <button class="btn btn-effect _pass-by _left" :style="colorsObject"> Pass By</button>
                <button class="btn btn-effect _stop-inside _right" :style="colorsObject">Stop inside</button>
                <button class="btn btn-effect _pulse" :style="colorsObject"> Pulse</button>
                <button class="btn btn-effect _pulse" :style="colorsObject"><span class="scaled">Font Up</span></button>
            </div>
            <div class="col-md-6">
                <div class="photoshop-container">
                    <h3>Background</h3>
                    <chrome-picker v-model="backgroundColors"/>
                </div>
                <div class="photoshop-container">
                    <h3>Text</h3>
                    <chrome-picker v-model="textColors"/>
                </div>
                <div class="photoshop-container">
                    <h3>Effect</h3>
                    <chrome-picker v-model="effectColors"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Chrome } from 'vue-color'
export default {
    name : 'Buttons',
    data(){
        return{
            backgroundColors: '',
            textColors: '',
            effectColors : '',
            colorsObject :{
                'background-color': '#9e54bd',
                'color': '#fff',
                'effect-color' : '#fff'
            }
        }
    },
    components: {
        'chrome-picker': Chrome
    },
    mounted : function(){
        this.$el.style.setProperty('--colorEffect', 'rgba(0,0,0,0.4)')
    },
    methods:{
        changeColor : function(){
            this.colorsObject['background-color'] = this.backgroundColors.hex
            this.colorsObject['color'] = this.textColors.hex
        }
    },
    watch: {
        backgroundColors : function(){
            this.colorsObject['background-color'] = this.backgroundColors.hex
        },
        textColors : function(){
            this.colorsObject['color'] = this.textColors.hex
        },
        effectColors : function(){
            this.$el.style.setProperty('--colorEffect', 
            'rgba('
            +   this.effectColors.rgba.r +','
            +   this.effectColors.rgba.g +',' 
            +   this.effectColors.rgba.b +','
            +   this.effectColors.rgba.a +')')
        },
        
    }
}
</script>


<style lang="scss" scoped>
:root{
    --colorEffect : rgba(0,0,0,0);
}

.photoshop-container{
    display: inline-block;
    position: relative;
    margin-bottom: 15px;
    width: 49%;
}

#buttons .btn.btn-effect{
    margin-top: 25px;
    
    h3{
        margin: 0;
    }
    &._stop-inside,&._pulse,&._pass-by{
        &:after{
            background-color: var(--colorEffect); 
        }
    }
}

</style>
