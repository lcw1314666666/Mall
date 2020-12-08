<template>
    <div class="detail">
        <DetailNavBar class="detail-nav" ref="navBar" @navItemClick="handleNavItemClick"></DetailNavBar>
        <BetterScroll class="scroll" ref="scroll" :probeType="3" @scroll="scroll">
            <DetailSwiper :list="swiperList"></DetailSwiper>
            <DetailBaseInfo :goodsInfo="goods"></DetailBaseInfo>
            <DetailShopInfo :shops="shop" @imgLoad="imageLoad"></DetailShopInfo>
            <DetailGoodsImage :detailInfo="detailImage" @imageLoad="imageLoad"></DetailGoodsImage>
            <DetailParams :params="itemParams" ref="params"></DetailParams>
            <DetailComment :list="commentData" ref="comment"></DetailComment>
            <DetailRecommend :goods="recommendData" ref="recommend"></DetailRecommend>
        </BetterScroll>
        <DetailBottomBar></DetailBottomBar>
        <DetailBackTop @click.native="backTopClick" v-show="showBackTop"></DetailBackTop>
    </div>
</template>

<script>
import DetailNavBar from './components/detailNavBar'
import DetailSwiper from './components/detailSwiper'
import DetailBaseInfo from './components/detailBaseInfo'
import DetailShopInfo from './components/detailShopInfo'
import DetailGoodsImage from './components/detailgoodsImage'
import DetailParams from './components/detailParams'
import DetailComment from './components/detailComment'
import DetailRecommend from '@/components/content/goods/goodsList'
import DetailBottomBar from './components/detailBottomBar'
import DetailBackTop from '@/components/content/backTop/backTop'

import BetterScroll from '@/components/common/scroll/scroll'
import { getDetailData, Goods, Shop, Params, getRecommendData } from '@/network/detail.js'
import { itemImgListener } from '@/common/mixin.js'
import { debounce } from '@/common/utils.js'
export default {
    name: 'Detail',
    mixins: [itemImgListener],
    data () {
        return {
            swiperList: null,
            iid: '',
            goods: {},
            shop: {},
            detailImage: {},
            itemParams: {},
            commentData: [],
            recommendData: [],
            // itemImgListener: null
            //存储各个模块距离顶部的高度
            themeTops: [0],
            currentTop: 0,
            getThemeTops: null,
            currentIndex: null,
            showBackTop: false,
        }
    },
    components: {
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        BetterScroll,
        DetailGoodsImage,
        DetailParams,
        DetailComment,
        DetailRecommend,
        DetailBottomBar,
        DetailBackTop
    },
    methods: {
        imageLoad () {
            this.$refs.scroll.refresh()
            
            this.getThemeTops()
            
        },
        handleNavItemClick (index) {
            //当点击主题按钮时根据所以值跳转高度
            this.currentTop = this.themeTops[index]
            this.currentIndex = index
            // console.log(this.$refs.scroll.scroll.scrollTo)
            console.log(this.themeTops)
            this.$refs.scroll.scroll.scrollTo(0, -this.currentTop, 400)
        },
        backTopClick () {
            this.$refs.scroll.backTop()
        },
        scroll (position) {
            //判断backTop组件是否显示
            const y = position.y
            // console.log(y)
            if (y < -1000) {
                this.showBackTop = true
            } else if (y > -1000) {
                this.showBackTop = false
            }
        },
    },
    created () {
        let iid = this.$route.query.iid
        this.iid = iid
        getDetailData(this.iid).then((res) => {
            let data = res.result
            //1.获取轮播图数据
            this.swiperList = data.itemInfo.topImages
            console.log(data)
            //2.获取商品信息
            this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
            //3.获取商家信息
            this.shop = new Shop(data.shopInfo)
            //4.获取商品图片信息
            this.detailImage = data.detailInfo
            //5.获取参数信息
            this.itemParams = new Params(data.itemParams)
            //6.获取评论信息
            this.commentData = data.rate.list
        })
        getRecommendData ().then((res) => {
            if (res || res.success === true) {
                this.recommendData = res.data.list
                // console.log(this.recommendData)
            }
        })
        this.getThemeTops = debounce(() => {
            this.themeTops = [0]
            //获取每个主题局顶部的高度，保存到主题高度列表中
            let paramsOffsetTop = this.$refs.params.$el.offsetTop
            let commentOffsetTop = this.$refs.comment.$el.offsetTop
            let recommendOffsetTop = this.$refs.recommend.$el.offsetTop
            this.themeTops.push(paramsOffsetTop, commentOffsetTop, recommendOffsetTop, Number.MAX_VALUE)
        }, 100)
    },
    mounted () {
        //监听$bus中的imgLoad事件
        

        //监听滚动
        let scroll = this.$refs.scroll.scroll
        scroll.on('scroll', (position) => {
            let scrollY = -position.y
            // console.log(scrollY)
            let length = this.themeTops.length
            for (var i = 0; i < length - 1; i ++) {
                if (this.currentIndex !== i && (scrollY >= this.themeTops[i] && scrollY < this.themeTops[i + 1])) {
                    this.currentIndex = i
                    this.$refs.navBar.currentIndex = this.currentIndex
                }
            }
        })
    },
    destroyed () {
        this.$bus.$off('imageLoad', this.itemImgListener)
    }
}
</script>


<style scoped>
    .detail{
        position: relative;
        z-index: 9;
        background: #fff;
        height: 100vh;
    }
    .scroll{
        overflow: hidden;
        position: absolute;
        top: 44px;
        left: 0;
        right: 0;
        bottom: 49px;
    }
</style>