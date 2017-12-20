<template>
    <div id="modal" class="modal" >
        <div class="mask" v-on:click="close(true)"></div>
        <div class="modal-content" v-on:click="close(false)">
            <slot name="data">No Data Found</slot>
        </div>
    </div>
</template>

<script>
export default {
    name : 'Modal',
    methods : {
        close(state){
            if(state)
                this.$router.go(-1)
        }
    }
}
</script>


<style lang="scss" scoped>
</style>
