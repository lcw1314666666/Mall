<template>
    <div class="detail">
        <DetailNavBar></DetailNavBar>
        <DetailSwiper :list="swiperList"></DetailSwiper>
        <DetailBaseIfon :goodsInfo="this.goods"></DetailBaseIfon>
    </div>
</template>

<script>
import DetailNavBar from './components/detailNavBar'
import DetailSwiper from './components/detailSwiper'
import DetailBaseIfon from './components/detailBaseInfo'


import { getDetailData, Goods } from '@/network/detail.js'
export default {
    name: 'Detail',
    data () {
        return {
            swiperList: null,
            iid: '',
            goods: {}
        }
    },
    components: {
        DetailNavBar,
        DetailSwiper,
        DetailBaseIfon
    },
    created () {
        let iid = this.$route.query.iid
        this.iid = iid
        getDetailData(this.iid).then((res) => {
            let data = res.result
            this.swiperList = data.itemInfo.topImages
            console.log(data)
            this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
            console.log(this.goods)
        })
    }
}
</script>


<style lang="less" scoped>

</style>