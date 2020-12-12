<template>
    <div class="bottomBar">
        <div class="selectAll">
            <CheckedButtom class="checkedButtom" :isChecked="isSelectAll" @click.native="selectAllClick"></CheckedButtom>
            <span class="select-title">全选</span>
        </div>
        <div class="calculate">
            总计:<span class="totalPrice">{{ calcTotalPrice }}</span>
        </div>
        <div class="calc-button">
            去计算(<span class="goCalc" @click="handleGoCalc">{{ goodsNum }}</span>)
        </div>
    </div>
</template>

<script>
import CheckedButtom from './checkedButton'

import { mapGetters } from 'vuex'
export default {
    name: "CartBottomBar",
    components: {
        CheckedButtom
    },
    computed: {
        ...mapGetters(['calcTotalPrice', 'goodsNum', 'isSelectAll']),
    },
    methods: {
        selectAllClick () {
            this.$store.dispatch('selectAllGoods')
        },
        handleGoCalc () {
            if (this.goodsNum === 0) {
                this.$toast.show('请选择商品', 500)
            }
        }
    }
}
</script>

<style scoped>
    .bottomBar{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 40px;
        background: pink;
        font-size: 0.9rem;
        color: #333;
    }
    .bottomBar .selectAll{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        font-size: 1rem;
    }
    .bottomBar .selectAll .select-title{
        margin-left: 0.5rem;
    }
    .bottomBar .calculate{
        flex: 1;
        font-size: 1rem;
        color: #333;
        margin-left: 2rem;
    }
    .bottomBar .calc-button{
        width: 80px;
        height: 100%;
        line-height: 40px;
        text-align: center;
        background: var(--color-high-text)
    }
</style>