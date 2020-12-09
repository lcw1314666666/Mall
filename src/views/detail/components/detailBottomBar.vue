<template>
    <div class="detail-bottomBar">
        <div class="bar-item bar-left">
            <div>
                <i class="icon service"></i>
                <div class="text">客服</div>
            </div>
            <div>
                <i class="icon shop"></i>
                <div class="text">商铺</div>
            </div>
            <div>
                <i class="icon select"></i>
                <div class="text">收藏</div>
            </div>
        </div>
        <div class="bar-item bar-right">
            <div class="cart" @click="handleCartClick">加入购物车</div>
            <div class="buy">购买</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailBottomBar',
    methods: {
        handleCartClick () {
            this.$emit('cartClick')
        }
    }
}
</script>

<style scoped>
    .detail-bottomBar{
        height: 49px;
        /* background: pink; */
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        color: #333;
    }
    .detail-bottomBar .bar-item{
        flex: 1;
        display: flex;
        height: 49px;
        line-height: 49px;
    }
    .detail-bottomBar .bar-item div{
        flex: 1;
    }
    .detail-bottomBar .bar-right .cart{
        background: rgba(60, 120, 130)
    }
    .detail-bottomBar .bar-right .buy{
        background: var(--color-high-text)
    }
    .detail-bottomBar .bar-left .icon{
        position: relative;
        top: 0.3rem; 
        margin: 0 auto;
        display: block;
        width: 22px;
        height: 22px;
        background: url('../../../assets/img/detail/detail_bottom.png') 0 0/100%;
        background-position:0 -54px;
    }
    .detail-bottomBar .bar-left .shop{
        background-position:0 -99px;
    }
    .detail-bottomBar .bar-left .select{
        background-position:0 0px;
    }
    .detail-bottomBar .bar-left .text{
        margin-top:0.2rem;
        height: 1.2rem;
        line-height: 1.2rem;
    }
</style>