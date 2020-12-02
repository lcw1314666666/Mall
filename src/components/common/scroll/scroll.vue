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
            backTop: this.backTopCkick
        }
    },
    props: {
        probeType: {
            type: Number,
            default: 0
        },
        pullUpLoad: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        backTopCkick () {
            this.scroll && this.scroll.scrollTo(0, 0, 300)
        },
        finishPullUp () {
            this.scroll && this.scroll.finishPullUp()
        },
        refresh () {
            // console.log(123)
            this.scroll && this.scroll.refresh()
        },
        getScrollY () {
            return this.scroll && this.scroll.y
        }
    },
    mounted () {
        this.scroll = new BetterScroll(this.$refs.content, {
            // movable: true,
            // zoom: true
            click: true,
            probeType: this.probeType,
            pullUpLoad: this.pullUpLoad
        })
        if (this.probeType && (this.probeType === 3 || 2))
        this.scroll.on('scroll', (position) => {
            this.$emit('scroll', position)
        })
        if (this.pullUpLoad) {
            this.scroll.on('pullingUp', () => {
                this.$emit('pullUpLoad')
            })
        }
        
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