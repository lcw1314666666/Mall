<template>
    <div class="cartList">
        <Scroll class="scroll" ref="CartScroll">
            <CartListItem v-for="item in product" :key="item.iid" :product="item">
            </CartListItem>
        </Scroll>
    </div>
</template>

<script>
import Scroll from '@/components/common/scroll/scroll'
import CartListItem from './cartListItem'

export default {
    name: 'CartList',
    props: {
        product: {
            type: Array,
            default () {
                return []
            }
        }
    },
    components: {
        Scroll,
        CartListItem
    },
    activated () {
        this.$refs.CartScroll.scroll.refresh()
    }
}
</script>

<style scoped>
    .scroll{
        height: 100%;
        overflow: hidden;
    }
    .box{
        height: 1000px;
        /* background: red; */
    }
</style>