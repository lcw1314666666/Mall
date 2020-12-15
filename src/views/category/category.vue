<template>
    <div class="category">
        <CategoryNavBar></CategoryNavBar>
        <div class="content">
            <CategoryTitle class="titleList" 
                            :list="titleDataList"
                            @handleTitleClick="titleListClick"
            ></CategoryTitle>
            <div class="container"></div>
        </div>
    </div>
</template>

<script>
import CategoryNavBar from './components/categoryNav'
import CategoryTitle from './components/categoryTitle'

import { getCategoryData, getCategoryGoodsData } from '@/network/category'

export default {
    name: 'Category',
    data () {
        return {
            titleDataList: [],
            titleIndex: 0,
            goodsList: []
        }
    },
    components: {
        CategoryNavBar,
        CategoryTitle
    },
    methods: {
        //如果标题被点击拿到该分类数据
        titleListClick (index) {
            this.titleIndex = index
            const mainKey = this.titleDataList[index].maitKey
            getCategoryGoodsData(mainKey).then(res => {
                const data = res.data
                if (res.success) {
                    this.goodsList = data.list
                }
                console.log(this.goodsList)
            })
        }
    },
    created () {
        //请求分类标题数据
        getCategoryData().then(res => {
            let data = res.data
            if (data.category.isEnd) {
            this.titleDataList = data.category.list
            // console.log(this.titleDataList)
            }
        })
    }
}
</script>

<style scoped>
    .category{
        height: 100vh;
    }
    .content{
        display: flex;
        overflow: hidden;
        /* position: relative;
        top: 44px;
        bottom: 69px;
        top: 0;
        left: 0; */
        height: calc(100% - 44px - 69px);
        background: rgba(12, 56, 65, 0.4);
    }

    .titleList{
        flex: 1;
        background:rgba(54, 150, 66, 0.4);
    }
    .container{
        flex: 3;
        background:rgba(100, 100, 66, 0.4)
    }
</style>