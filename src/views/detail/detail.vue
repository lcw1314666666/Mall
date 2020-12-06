<template>
    <div class="detail">
        <DetailNavBar></DetailNavBar>
        <DetailSwiper :list="swiperList"></DetailSwiper>
        <DetailBaseInfo :goodsInfo="goods"></DetailBaseInfo>
        <DetailShopInfo :shops="shop"></DetailShopInfo>
    </div>
</template>

<script>
import DetailNavBar from './components/detailNavBar'
import DetailSwiper from './components/detailSwiper'
import DetailBaseInfo from './components/detailBaseInfo'
import DetailShopInfo from './components/detailShopInfo'


import { getDetailData, Goods, Shop } from '@/network/detail.js'
export default {
    name: 'Detail',
    data () {
        return {
            swiperList: null,
            iid: '',
            goods: {},
            shop: {}
        }
    },
    components: {
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo
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
        })
    }
}
</script>


<style lang="less" scoped>

</style>