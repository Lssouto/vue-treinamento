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
        let content = this.text;
        
        switch (this.type){
            
            case 'reverse':
                setTimeout(function(){
                    self.typeDelete(content, (self.duration || 2000));
                },(this.start || 0));
                break;
            
            case 'both':
                setTimeout(function(){
                    self.typeBoth(content, (self.duration || 2000),self.delay)
                },(this.start || 0))
                break;
            
            default: 
                setTimeout(function(){
                    self.typeWriter(content, (self.duration || 2000));
                },(this.start || 0));
                break;
        }
        
    },
    methods : {
        typeWriter : function(content,duration)  {
            let self = this;
            let size = content.length;
            let timePerChar = duration / size;
            
            for(let index = 0 ; index <= size ; index++){
                setTimeout(function(){
                    self.newValue(index , content)
                },timePerChar*index);
            } 
        
        },
        typeDelete : function(content,duration){
            let self = this;
            let size = content.length;
            let timePerChar = duration / size;
            
            for(let index = size ; index >= 0 ; index--){
                setTimeout(function(){
                    self.newValue(index , content)
                },(timePerChar*(size - index)));
            } 
        },
        typeBoth : function(content,duration,delay){
            let self = this;
            
            duration = duration / 2;

            this.typeWriter(content, duration);
            
            setTimeout(function(){
                self.typeDelete(content, duration);
            },(duration + parseInt(delay)));
            
        },
        newValue : function(position, content){
            this.value = content.substring(0,position);
            if(position == content.length)
                this.removeBlinkCaret()
        },
        removeBlinkCaret : function(){
            this.blinkCaret = false;
        },
        isContentArray : function(value){
            //the RegExp allow blank spaces between the ' and , 
            return value.split(/\'(?:\s*)\,(?:\s*)\'/).map(function(position){
                return position.replace(/'/g,'');
            })
        }
    },
    props : [
        'text',
        'duration',
        'start',
        'type',
        'delay'
    ]
}
</script>


<style lang="scss" scoped>
</style>
