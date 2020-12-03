<template>
    <div class="detail">
        <DetailNavBar></DetailNavBar>
        <DetailSwiper :list="swiperList"></DetailSwiper>
    </div>
</template>

<script>
import DetailNavBar from './components/detailNavBar'
import DetailSwiper from './components/detailSwiper'


import { getDetailData } from '@/network/detail.js'
export default {
    name: 'Detail',
    data () {
        return {
            swiperList: null,
            iid: ''
        }
    },
    components: {
        DetailNavBar,
        DetailSwiper
    },
    created () {
        let iid = this.$route.query.iid
        this.iid = iid
        getDetailData(this.iid).then((res) => {
            let data = res.result
            this.swiperList = data.itemInfo.topImages
        })
    }
}
</script>


<style lang="less" scoped>

</style>