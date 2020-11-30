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
            scroll: null,
            scrollTo: this.backTopCkick
        }
    },
    methods: {
        backTopCkick () {
            this.scroll.scrollTo(0, 0, 300)
        }
    },
    mounted () {
        this.scroll = new BetterScroll(this.$refs.content, {
            // movable: true,
            // zoom: true
            click: true,
            probeType: 3
        })
        this.scroll.on('scroll', (position) => {
            this.$emit('scroll', position)
        })
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