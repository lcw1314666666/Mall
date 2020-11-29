<template>
    <div class="goods">
        <GoodsListItem 
            class="goods-item"
            v-for="(item, index) in goods" 
            :key="index"
            :goods='item' 
            ></GoodsListItem>
    </div>
</template>

<script>
import GoodsListItem from './goodsListItem.vue'
export default {
    name: "Goods",
    props: {
        goods: {
            type: Array,
            default () {
                return []
            }
        }
    },
    components: {
        GoodsListItem
    }
}
</script>

<style scoped>
    .goods{
        display: flex;
        /* flex-wrap: wrap; */
        flex-flow: wrap row;
        justify-content: content;
        justify-content: space-around;
        width: 100%;
        /* flex-direction: row; */
    }
    .goods .goods-item{
        width: 11rem;
    }
</style>