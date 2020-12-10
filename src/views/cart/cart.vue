<template>
    <div class="cart">
        <CartNavbar class="navbar">
            <div slot="center">购物车(<span class="goodsNum">{{ cartLength }}</span>)</div>
        </CartNavbar>
        <CartList class="cartList" :product="cartList"></CartList>
        <CartBottomBar class="bottom-bar"></CartBottomBar>
    </div>
</template>

<script>
import CartNavbar from '@/components/common/navbar/navbar'
import CartList from './components/cartList'
import CartBottomBar from './components/cartBottomBar'

import { mapGetters } from 'vuex'
export default {
    name: 'Cart',
    components: {
        CartNavbar,
        CartList,
        CartBottomBar
    },
    computed: {
        ...mapGetters(['cartLength', 'cartList'])
    }
}
</script>

<style scoped>
    .cart{
        height: 100vh;
    }
    .navbar{
        background: var(--color-high-text);
        color: #fff;
        font-weight: 400;
    }
    .cartList{
        overflow: hidden;
        position: relative;
        top: 0;
        right: 0;
        left: 0;
        bottom: 89px;
        height: calc(100% - 69px - 44px - 40px);
    }
    .bottom-bar{
        position: relative;
    }
</style>