<template>
    <div class="home">
        <NavBar class="navbar">
            <div slot="center">购物街</div>
        </NavBar>
        <Swiper :banner='banner'></Swiper>
        <RecommendView :recommend='recommend'></RecommendView>
        <FeatureView></FeatureView>
        <TabControl 
            class="tab-control" 
            :title="['流行', '新款', '精选']"
            @handleTabControlClick="tabControlClick"
        ></TabControl>
        <GoodsList :goods="goods[type].list"></GoodsList>
        <div class="box"></div>
        home
    </div>
</template>

<script>
import NavBar from '@/components/common/navbar/navbar.vue'
import TabControl from '@/components/content/tabControl/tabControl.vue'
import GoodsList from '@/components/content/goods/goodsList.vue'



import Swiper from './components/swiper.vue'
import RecommendView from './components/recommendView.vue'
import FeatureView from './components/feature.vue'



import { getHomeMultidata, getHomeData } from '@/network/home.js' 

export default {
    name: 'Home',
    data () {
        return {
            banner: [],
            recommend: [],
            goods: {
                pop: {page: 0, list: []},
                new: {page: 0, list: []},
                sell: {page: 0, list: []}
            },
            type: 'pop'
        }
    },
    components: {
        NavBar,
        Swiper,
        RecommendView,
        FeatureView,
        TabControl,
        GoodsList
    },
    methods: {
        getHomeMultidata () {
            getHomeMultidata().then((res) => {
                const data = res.data
                this.banner = data.banner.list
                this.recommend = data.recommend.list
            })
        },
        getHomeData (type) {
            //根据type拿到要请求的页码
            const page = this.goods[type].page + 1
            getHomeData(type, page).then((res) => {
                const list = res.data.list
                this.goods[type].list.push(...list)
                this.goods[type].page ++
            })
        },
        tabControlClick (index) {
            const goodsType = []
            console.log(index)
            for (var key in this.goods) {
                // if (this.goods.hasOwnProperty(key)) {
                    goodsType.push(key)
                // }
            }
            this.type = goodsType[index]
        }

    },
    created () {
        this.getHomeMultidata()
        
        //请求商品列表
        this.getHomeData('new')
        this.getHomeData('pop')
        this.getHomeData('sell')
    }
}
</script>

<style scoped>
.home{
    padding-top: 44px;
}
    .navbar{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999;
        background: var(--color-tint);
    }
    .navbar div{
        height: 44px;
        line-height: 44px;
        color: #fff;
    }
    .box{
        height: 1000px;
    }

    .tab-contro{
        position: sticky;
        top: 100px;
    }
</style>

