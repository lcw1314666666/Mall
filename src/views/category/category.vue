<template>
    <div class="category">
        <CategoryNavBar></CategoryNavBar>
        <div class="content">
            <CategoryTitle class="titleList" 
                            :list="titleDataList"
                            @handleTitleClick="titleListClick"
            ></CategoryTitle>
            <Scroll class="CategoryContainerScroll container" ref="categoryContainerScroll">
                <GridView :cols='3'>
                    <GoodsListItem v-for="(item, index) in goodsList"
                                   :key="index"
                                   :goods="item"
                                   @click.native="handleItemClick(index)"
                    ></GoodsListItem>
                </GridView>
            </Scroll>
        </div>
    </div>
</template>

<script>
import CategoryNavBar from './components/categoryNav'
import CategoryTitle from './components/categoryTitle'
import GridView from '@/components/common/gridView/GridView'

import GoodsListItem from '@/components/content/goods/goodsListItem'
import Scroll from '@/components/common/scroll/scroll'

import { debounce } from '@/common/utils.js'
import { getCategoryData, getCategoryGoodsData, getCategoryDetailData } from '@/network/category'

export default {
    name: 'Category',
    data () {
        return {
            titleDataList: [],
            titleIndex: 0,
            goodsList: [],
            types: ['pop', 'new', 'sell']
        }
    },
    components: {
        CategoryNavBar,
        CategoryTitle,
        GridView,
        Scroll,
        GoodsListItem
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
            })
        },
        //
        handleItemClick (index) {
            const miniWallkey = this.titleDataList[this.titleIndex].miniWallkey
            const Index = index % this.types.length
            const type = this.types[Index]

            getCategoryDetailData(miniWallkey, type).then(res => {
                const data = res
                console.log(data)
                // this.$router.push({
                //     path: '/detail',
                //     query: {
                //         iid: data.iid
                //     }
                // })
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
    },
    mounted () {
        // console.log(this.$refs.categoryContainerScroll.scroll)
        //刷新滚动条
        this.$refs.categoryContainerScroll.scroll.refresh()

        // console.log(this.$router.history.current.path)
        //等待图片加载再刷新滚动条
        const imgLoad = debounce(() => {
            this.$refs.categoryContainerScroll.scroll.refresh()
        }, 100)

        if (this.$router.history.current.path == '/category') {
            this.$bus.$on('imageLoad', imgLoad)
        }
    },
    updated () {
        this.$refs.categoryContainerScroll.scroll.refresh()
        this.titleListClick(this.titleIndex)
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
    }

    .titleList{
        flex: 1;
    }
    .container{
        flex: 3;
    }
    .box{
        height: 1000px;
    }
</style>