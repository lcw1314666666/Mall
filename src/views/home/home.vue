<template>
    <div class="home">
        <NavBar class="navbar">
            <div slot="center">购物街</div>
        </NavBar>
        <Swiper :banner='banner'></Swiper>
        <RecommendView :recommend='recommend'></RecommendView>
        <FeatureView></FeatureView>
        <TabControl :title="['流行', '新款', '精选']"></TabControl>
        <div class="box"></div>
        home
    </div>
</template>

<script>
import NavBar from '@/components/common/navbar/navbar.vue'
import TabControl from '@/components/content/tabControl/tabControl.vue'



import Swiper from './components/swiper.vue'
import RecommendView from './components/recommendView.vue'
import FeatureView from './components/feature.vue'



import { getHomeMultidata } from '@/network/home.js' 

export default {
    name: 'Home',
    data () {
        return {
            banner: [],
            recommend: []
        }
    },
    components: {
        NavBar,
        Swiper,
        RecommendView,
        FeatureView,
        TabControl
    },
    created () {
        getHomeMultidata().then((res) => {
            const data = res.data
            this.banner = data.banner.list
            
            this.recommend = data.recommend.list
            console.log(this.recommend)
        })
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
</style>

