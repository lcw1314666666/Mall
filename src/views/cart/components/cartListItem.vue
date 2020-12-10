<template>
    <div class="cartListItem">
        <div class="item-selector">
            <CheckedButton class="checkButton"></CheckedButton>
        </div>
        <div class="item-img">
            <img :src="product.image" alt="">
        </div>
        <div class="item-info">
            <div class="item-title">{{ product.title }}</div>
            <div class="item-desc">{{ product.desc }}</div>
            <div class="info-bottom">
                <span class="info-price left">￥{{ product.price }}</span>
                <span class="info-count right">x{{ product.count }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import CheckedButton from './checkedButton'
export default {
    name: 'CartListItem',
    props: {
        product: {
            type: Object,
            default () {
                return {}
            }
        }
    },
    components: {
        CheckedButton
    }
}
</script>

<style scoped>
    .cartListItem{
        position: relative;
        display: flex;
        width: 100%;
        padding: 1rem 0.5rem;
        border-bottom: 0.1rem solid #ccc;
    }
    .cartListItem .item-selector{
        margin-top: 3rem;
        margin-right: 0.5rem;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1rem;
    }
    .cartListItem .item-selector .checkButton{
        /* flex: 1; */
    }
    .cartListItem .item-img{
        width: 4.5rem;
    }
    .cartListItem .item-info{
        /* flex: 1; */
        width: 70%;
    }
    .cartListItem .item-img img{
        width: 4.5rem;
        border-radius: 0.3rem;
    }
    .cartListItem .item-info{
        position: relative;
        margin-left: 0.5rem;
        font-size: 0.9rem;
    }
    .cartListItem .item-info .item-title{
        color: #333;
        font-size: 1rem;
        height: 1.2rem;
        line-height: 1.2rem;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
    }
    .cartListItem .item-info .item-desc{
        margin-top: 0.5rem;
        color: #ccc;
        font-size: 0.8rem;
        height: 1.1rem;
        line-height: 1.1rem;
        overflow: hidden;
        white-space: normal;
        text-overflow: ellipsis;
    }
    .cartListItem .item-info .info-bottom{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0
    }
    .cartListItem .item-info .info-bottom .info-price{
        color: var(--color-high-text)
    }
    /* .cartListItem .item-info .info-bottom .left{
        position: absolute;
        left: 0
    } */
    .cartListItem .item-info .info-bottom .right{
        position: absolute;
        right: 0;
    }

</style>