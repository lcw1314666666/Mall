import { debounce } from '@/common/utils.js'

export const itemImgListener = {
    data () {
        return {
            itemImgListener: null
        }
    },
    mounted () {
        const refresh = debounce(this.$refs.scroll.refresh, 100)
        this.itemImgListener = () => {
            refresh()
        }
        this.$bus.$on('imageLoad', this.itemImgListener)
    }
}
export const backTop = {
    data () {
        return {
            showBackTop: false,
        }
    },
    methods: {
        backTopClick () {
            this.$refs.scroll.backTop()
        },
        listenerScroll (position) {
            //判断backTop组件是否显示
            const y = position.y
            // console.log(y)
            if (y < -1000) {
                this.showBackTop = true
            } else if (y > -1000) {
                this.showBackTop = false
            }
        } 
    }
}