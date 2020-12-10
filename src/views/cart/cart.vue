<template>
    <div class="cart">
        <CartNavbar class="navbar">
            <div slot="center">购物车(<span class="goodsNum">{{ cartLength }}</span>)</div>
        </CartNavbar>
        <CartList class="cartList" :product="cartList"></CartList>
    </div>
</template>

<script>
import CartNavbar from '@/components/common/navbar/navbar'
import CartList from './components/cartList'

import { mapGetters } from 'vuex'
export default {
    name: 'Cart',
    components: {
        CartNavbar,
        CartList
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
        bottom: 49px;
        height: calc(100% - 49px - 44px);
    }
    
</style>