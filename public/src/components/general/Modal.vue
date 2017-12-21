<template>
    <div id="modal" class="modal" >
        <div class="mask" v-on:click="close()"></div>
        <div class="modal-content">
            <slot name="data">No Data Found</slot>
        </div>
    </div>
</template>

<script>
export default {
    name : 'Modal',
    methods : {
        close(){
            this.$router.go(-1)
        }
    }
}
</script>


<style lang="scss" scoped>
</style>
