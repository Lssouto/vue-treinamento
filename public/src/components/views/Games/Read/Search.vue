<template>
    <div id="search">
        <div class="input-container">
            <input type="text"
                name="search"
                label="Search"
                v-model="search"
                class="form-control"
            >
        </div>
    </div>
</template>

<script>
import _ from "lodash"
export default {
    name: 'Search',
    data (){
        return {
            search: ''
        }
    },
    watch : {
        search : _.debounce(async function(value){
            const route = {
                name : 'Games'
            }
            if(this.search !== ''){
                route.query = {
                    search: this.search
                }
            }
            this.$router.push(route)
        },700),
        '$store.state.route.query.search' : {
            immediate: true,
            handler (value){
                this.search = value
            }
        }
    }
}
</script>


<style lang="scss" scoped>

</style>
