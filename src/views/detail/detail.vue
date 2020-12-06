<template>
    <div class="detail">
        <DetailNavBar class="detail-nav"></DetailNavBar>
        <BetterScroll class="scroll" ref="scroll">
            <DetailSwiper :list="swiperList"></DetailSwiper>
            <DetailBaseInfo :goodsInfo="goods"></DetailBaseInfo>
            <DetailShopInfo :shops="shop" @imgLoad="imageLoad"></DetailShopInfo>
            <DetailGoodsImage :detailInfo="detailImage" @imageLoad="imageLoad"></DetailGoodsImage>
            <DetailParams :params="itemParams"></DetailParams>
        </BetterScroll>
        
    </div>
</template>

<script>
import DetailNavBar from './components/detailNavBar'
import DetailSwiper from './components/detailSwiper'
import DetailBaseInfo from './components/detailBaseInfo'
import DetailShopInfo from './components/detailShopInfo'
import DetailGoodsImage from './components/detailgoodsImage'
import DetailParams from './components/detailParams'

import BetterScroll from '@/components/common/scroll/scroll'
import { getDetailData, Goods, Shop, Params } from '@/network/detail.js'
export default {
    name: 'Detail',
    data () {
        return {
            swiperList: null,
            iid: '',
            goods: {},
            shop: {},
            detailImage: {},
            itemParams: {}
        }
    },
    components: {
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        BetterScroll,
        DetailGoodsImage,
        DetailParams
    },
    methods: {
        imageLoad () {
            this.$refs.scroll.refresh()
        }
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
            console.log(this.itemParams)
        })
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
        bottom: 0;
    }
</style>