<template>
    <div id="typewriter" class='container-typewriter'>
        <span :class="{'blink-caret' : blinkCaret}">{{value}}</span></span>
    </div>
</template>

<script>
export default {
    name : 'Typewriter',
    data(){
        return {
            blinkCaret : true,
            value : ''
        }
    },
    mounted (){
        let self = this;
        let texto = this.text;
        
        setTimeout(function(){
            self.typewriter(texto, (self.duration || 2000));
        },(this.start || 0))
    },
    methods : {
        typewriter : function(texto,duration)  {
            let index = 0;
            let self = this;
            let size = texto.length;
            let timePerChar = duration / size;
            
            for(let index = 0 ; index <= size ; index++){
                setTimeout(function(){
                    self.newValue(index , texto)
                },timePerChar*index);
            } 
        
        },
        newValue : function(position, texto){
            this.value = texto.substring(0,position);
            if(position == texto.length)
                this.blinkCaret = false;
        }
    },
    props : [
        'text',
        'duration',
        'start'
    ]
}
</script>


<style lang="scss" scoped>
</style>
