<template>
    <div id="spin-btn" class="spin-btn">
        <div class="content-container">
            <router-link :to="{name: link}" >
                <div class="text-container" :class="[start, [ (end == 'left')? 'left-side' : 'right-side' ],  [speed == 'fast' ?  'fast-e' : 'slow-e']]">
                    <div class="text">
                        <slot name="text">
                            Empty Text
                        </slot>
                    </div>
                </div>
                <div class="main">
                    <slot name="symbol">
                        ?
                    </slot>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name : 'spin-btn',
    props :[
        'link',
        'start',
        'end',
        'speed'
        ]
}
</script>


<style lang="scss" scoped>

</style>
