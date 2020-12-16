<template>
    <div class="detailShopInfo">
        
        <div class="shop-top">
            <img :src="shops.shopLogo" alt="" @load="shopTopImgload">
            <span class="shop-name">{{ shops.name }}</span>
        </div>

        <div class="shop-middle">
            <div class="shop-middle-item shop-middle-left">
                <div class="info-sell">
                    <div class="cSells">{{ shops.cSells | calcSell }}</div>
                    <div class="sell-title">总销量</div>
                </div>
                <div class="info-goods">
                    <div class="goods">{{ shops.cGoods }}</div>
                    <div class="goods-title">全部宝贝</div>
                </div>
            </div>

            <div class="shop-middle-item shop-middle-right">
                <div class="score-title" v-for="(item, index) in shops.score" :key="index">
                    <span class="name">{{ item.name }}</span>
                    <span class="score" :class="{scoreIsBetter: item.isBetter==true}">{{ item.score }}</span>
                    <span class="isBetter" :class="{betterIsBetter: item.isBetter==true}">{{ item.isBetter | calcIsBetter }}</span>
                </div>
            </div>
        </div>

        <div class="go-shop">进店逛逛</div>
        
    </div>
</template>

<script>
export default {
    name: 'DetailShopInfo',
    props: {
        shops: {
            type: Object,
            default () {
                return {}
            }
        }
    },
    methods: {
        shopTopImgload () {
            this.$emit('imgLoad')
        }
    },
    mounted () {
        
    },
    filters: {
        calcSell (sell) {
            if (!sell) return
            var num = (sell/10000).toFixed(2)
            var str = num.toString() + "万"
            return str
        },
        calcIsBetter (isBetter) {
            if (isBetter) {
                return '高'
            } else {
                return '低'
            }
        }
    }
}
</script>

<style scoped>
    .detailShopInfo{
        padding-top: 20px;
        border-top: 0.3rem solid #eee;
        border-bottom: 0.4rem solid #eee;
        
    }
    .detailShopInfo .shop-top{
        display: flex;
        margin-left: 1.3rem;
    }
    .detailShopInfo .shop-top img{
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
        border: 1px solid pink;
    }
    .detailShopInfo .shop-top .shop-name{
        font-size: 1.3rem;
        color: #333;
        margin-top: 1.3rem;
        margin-left: 2rem;
    }

    .shop-middle{
        display: flex;
    }
    .shop-middle .shop-middle-item{
        flex: 1;
        text-align: center;
    }
    .shop-middle .shop-middle-left{
        display: flex;
    }
    .shop-middle .shop-middle-left::after{
        display: block;
        content: '';
        height: 100%;
        width: 0.1px;
        overflow: hidden;
        margin-top: 0.2rem;
        background-color: #ccc;
    }
    .shop-middle .shop-middle-left div{
        flex: 1;
        margin-top: 0.6rem;
        text-align: center;
    }
    .shop-middle .shop-middle-left .cSells,
    .shop-middle .shop-middle-left .goods{
        color: #333;
        font-size: 1.2rem;
    }
    .shop-middle .shop-middle-left .sell-title,
    .shop-middle .shop-middle-left .goods-title{
        font-size: .9rem;
        color: #333;
    }
    .shop-middle-right .score-title{
        margin-top: 0.4rem;
        color: #333;
        font-size: 0.8rem;
    }
    .shop-middle-right .score-title span{
        margin-left: 0.4rem;
    }
    .score-title .score{
        color: #1ba160;
        
    }
    .score-title .isBetter{
        background: #1ba160;
        border-radius: 0.2rem;
    }
    .score-title .score{
        color: #1ba160;
        
    }
    .score-title .isBetter{
        background: #1ba160;
        border-radius: 0.2rem;
    }
    .score-title .scoreIsBetter{
        color: #dd001b;
        
    }
    .score-title .betterIsBetter{
        background: #dd001b;
    }

    .go-shop{
        width: 6rem;
        height: 2.5rem;
        line-height: 2.5rem;
        text-align: center;
        padding: 0.5rem;
        border-radius: 0.2rem;
        background: #eee;
        margin: 2rem auto;
    }


</style>