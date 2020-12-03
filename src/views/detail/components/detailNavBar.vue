<template>
    <NavBar class="navbar">
        <div class="back" slot="left" @click="handleBackClick">
            <img src="@/assets/img/common/back.svg" />
        </div>
        <div class="titleList" slot="center">
            <div class="title" 
                v-for="(item, index) in titleList" 
                :key="item"
                :class="{active: currentIndex === index}"
                @click="handleItemClick(index)"
            >{{ item }}</div>
        </div>
    </NavBar>
</template>

<script>
import NavBar from '@/components/common/navbar/navbar.vue'
export default {
    name: 'Nav',
    data () {
        return {
            titleList: ['商品', '参数', '评论', '推荐'],
            currentIndex: 0
        }
    },
    components: {
        NavBar
    },
    methods: {
        handleItemClick (index) {
            this.currentIndex = index
        },
        handleBackClick () {
            this.$router.push('/home')
        }
    }
}
</script>

<style scoped>
    .back img{
        margin-top: 10px;
    }
    .titleList{
        display: flex;
    }
    .titleList .title{
        flex: 1;
    }
    .titleList .active{
        color: var(--color-high-text)
    }
</style>