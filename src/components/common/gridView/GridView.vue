<template>
    <div class="gridView" ref="gridView">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'GridView',
    props: {
        cols: {
            type: Number,
            default: 2
        },
        //外边距
        hMargin: {
            type: Number,
            default: 8
        },
        //内边距
        vMargin: {
            type: Number,
            default: 8
        },
        itemSpace: {
            type: Number,
            default: 8
        },
        lineSpace: {
            type: Number,
            default: 8
        },
    },
    mounted () {
        setTimeout(this._autoLayout, 20)
    },
    updated () {
        this._autoLayout()
    },
    methods: {
        _autoLayout () {
            const gridEl = this.$refs.gridView
            const childrens = gridEl.children
            
            const ViewWidth = gridEl.clientWidth

            gridEl.style.padding = `${this.hMargin}px ${this.VMargin}px`

            const itemWidth = (ViewWidth - 2 * this.hMargin - (this.cols - 1) * this.itemSpace) / this.cols

            for (var i = 0; i < childrens.length; i ++) {
                childrens[i].style.width = itemWidth + 'px'
                childrens[i].style.height = '33%'
                // console.log(childrens[i].style.width)
                if ((i+1) % this.cols !== 0) {
                    childrens[i].style.marginRight = this.itemSpace + 'px'
                }
                if (i > this.cols) {
                    childrens[i].style.marginTop = this.lineSpace + 'px'
                }
            }
            

        }
    }
}
</script>

<style scoped>
    .gridView{
        display: flex;
        flex-wrap: wrap;
    }
</style>