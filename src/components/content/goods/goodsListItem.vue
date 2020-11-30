<template>
    <div class="goodsList">
        <img :src="goods.show.img" alt="">
        <div class="info">
            <p class="title">{{ goods.title }}</p>
            <span class="price">{{ goods.orgPrice }}</span>
            <span class="collect">{{ goods.cfav }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'GoodsList',
    props: {
        goods: {
            type: Object,
            default () {
                return {}
            }
        }
    }
}
</script>

<style scoped>
    .goodsList{
        position: relative;
        padding-bottom: 15px;
        width: 100%;
        height: 20rem;
    }
    .goodsList img{
        width: 100%;
        height: 90%;
        margin-top: 15px;
        border-radius: 5px;
    }
    .info{
        font-size: 12px;
        position: absolute;
        bottom: -10px;
        right: 0;
        left: 0;
        text-align: center;
        padding: 3px;
        /* overflow: hidden; */
    }
    .info p{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-top: 3px;
    }
    .info .price{
        color: var(--color-high-text);
        margin-right: 25px;
    }
    .info .collect{
        position: relative;
        left: -2px;
    }
    .info .collect::before{
        content: '';
        position: absolute;
        left: -13px;
        top: px;
        width: 14px;
        height: 14px;
        background: url('../../../assets/img/common/collect.svg') 0 0/14px 14px;
    }
</style>