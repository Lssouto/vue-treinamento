<template>
    <div id="modal" class="modal" v-if="visible" >
        <div class="mask" v-on:click="close()"></div>
        <div class="modal-content">
            <div class="content-container">
                <slot name="close-option"><button class="close-btn btn" @click="close()">X</button></slot>
                <slot name="data">No Data Found</slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'Modal',
    methods: {
        close(){
            this.$emit('visible-change', !this.visible)
        }
    },
    props : [
        'visible'
    ]
}
</script>


<style lang="scss" scoped>
</style>
