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