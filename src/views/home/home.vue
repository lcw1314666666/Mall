<template>
    <div class="home">
        <NavBar class="navbar">
            <div slot="center">购物街</div>
        </NavBar>
        <TabControl 
            class="tab-control tab-control1" 
            :title="['流行', '新款', '精选']"
            @handleTabControlClick="tabControlClick"
            ref="tabControl1"
            v-show="tabControlIsTop"
        ></TabControl>

        <BetterScroll 
            class="content" 
            ref="scroll" 
            @scroll="scroll"
            :probeType="3"
            :pullUpLoad="true"
            @pullUpLoad="handlePullingUp"
        >
            <Swiper :banner='banner' @swiperImgLoad="swiperImageLoad"></Swiper>
            <RecommendView :recommend='recommend'></RecommendView>
            <FeatureView></FeatureView>
            <TabControl 
                class="tab-control" 
                :title="['流行', '新款', '精选']"
                @handleTabControlClick="tabControlClick"
                ref="tabControl"
            ></TabControl>
            <GoodsList :goods="goods[type].list"></GoodsList>
        </BetterScroll>
        <BackTop @click.native="backTopClick" v-show="showBackTop"></BackTop>
    </div>
</template>

<script>
import NavBar from '@/components/common/navbar/navbar.vue'
import TabControl from '@/components/content/tabControl/tabControl.vue'
import GoodsList from '@/components/content/goods/goodsList.vue'
import BetterScroll from '@/components/common/scroll/scroll.vue'
import BackTop from '@/components/content/backTop/backTop.vue'



import Swiper from './components/swiper.vue'
import RecommendView from './components/recommendView.vue'
import FeatureView from './components/feature.vue'




import { getHomeMultidata, getHomeData } from '@/network/home.js' 
import { itemImgListener, backTop } from '@/common/mixin.js'

export default {
    name: 'Home',
    mixins: [itemImgListener, backTop],
    data () {
        return {
            banner: [],
            recommend: [],
            goods: {
                pop: {page: 0, list: []},
                new: {page: 0, list: []},
                sell: {page: 0, list: []}
            },
            type: 'pop',
            // showBackTop: false,
            tabControlTop: 0,
            tabControlIsTop: false,
            saveY: 0,
            // itemImgListener: null
        }
    },
    components: {
        NavBar,
        Swiper,
        RecommendView,
        FeatureView,
        TabControl,
        GoodsList,
        BetterScroll,
        BackTop
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

                this.$refs.scroll.finishPullUp()
            })
        },

        //事件
        tabControlClick (index) {
            //1.根据点击的按钮索引请求数据
            const goodsType = []
            for (var key in this.goods) {
                // if (this.goods.hasOwnProperty(key)) {
                    goodsType.push(key)
                // }
            }
            this.type = goodsType[index]
            //2.同步两个tabControl的索引
            this.$refs.tabControl1.currentIndex = index 
            this.$refs.tabControl.currentIndex = index
            //判断scroll的位置，如果滚动距离超过tabControl到顶部的据里就将scroll滚动到tabControl到顶部的距离
            let scroll = this.$refs.scroll.scroll
            // console.log(scroll.y, -this.tabControlTop)
            if (scroll.y < -this.tabControlTop) {
                scroll.scrollTo(0, -this.tabControlTop, 500)
            }
        },
        scroll (position) {
            this.listenerScroll(position)
            //判断tabControl是否吸顶
            let y = position.y
            if (-y > this.tabControlTop) {
                this.tabControlIsTop = true
            }else if(-y < this.tabControlTop){
                this.tabControlIsTop = false
            }
        },
        handlePullingUp () {
            // const getHomeData = this.debounce(this.getHomeData(this.type), 100)
            // getHomeData()
            let timer = null
            if (timer) clearTimeout(timer)
            timer = setTimeout(() => {
                this.getHomeData(this.type)
            }, 200)
            // this.getHomeData(this.type)
        },
        swiperImageLoad () {
            //轮播图图片加载完成,可以获取tabControl到顶部的高度
            let tabControlTop = this.$refs.tabControl.$el.offsetTop
            this.tabControlTop = tabControlTop
        }

        //函数防抖
        // debounce (func, delay) {
        //     let timer = null
        //     return function (...args) {
        //         if (timer) clearTimeout(timer)
        //         timer = setTimeout(() => {
        //             func.apply(this, args)
        //         }, delay)
        //     }
        // }

    },
    created () {
        this.getHomeMultidata()
        
        //请求商品列表
        this.getHomeData('new')
        this.getHomeData('pop')
        this.getHomeData('sell')
    },
    mounted () {
        
    },
    activated () {
        // 进入home页面触发该函数
        const scroll = this.$refs.scroll.scroll
        scroll.scrollTo(0, this.saveY, 0)
        scroll.refresh()
    },
    deactivated () {
        //1. 离开home页面拿到当前scrollY的值
        let scrollY = this.$refs.scroll.getScrollY()
        this.saveY = scrollY
        //2.离开该页面的时候取消掉当前页面图片加载完成事件
        this.$bus.$off('imageLoad', this.itemImgListener)
    }
}
</script>

<style scoped>
.home{
    position: relative;
    /* padding-top: 44px; */
    height: 100vh;
    /* overflow: hidden; */
}
    .navbar{
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
    .tab-control1{
        position: relative;
        top: -1px;
        left: 0;
        right: 0;
        z-index: 2;
    }


    .content{
        overflow: hidden;
        position: absolute;
        top: 44px;
        bottom: 49px;
        right: 0;
        left: 0;
        /* height: calc(100% - 70px); */
    }
    
</style>

