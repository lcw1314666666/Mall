<template>
    <div ref="content">
        <div >
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BetterScroll from 'better-scroll'
export default {
    name: "Scroll",
    data () {
        return {
            scroll: null
        }
    },
    mounted () {
        console.log(this.$refs.content)
        this.scroll = new BetterScroll(this.$refs.content, {
            // movable: true,
            // zoom: true
            scrollY: true,
            click: true
        })
        console.log()
    }
}
</script>

<style scoped>
.content{
    /* width: 100%; */
    width: 100%;
    overflow: hidden;
}
</style>