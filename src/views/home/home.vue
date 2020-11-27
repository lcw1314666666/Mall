<template>
    <div class="home">
        <NavBar class="navbar">
            <div slot="center">购物车</div>
        </NavBar>
        <Swiper :banner='banner'></Swiper>
        <RecommendView :recommend='recommend'></RecommendView>
        home
    </div>
</template>

<script>
import NavBar from '@/components/common/navbar/navbar.vue'
import Swiper from './components/swiper.vue'
import RecommendView from './components/recommendView.vue'



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
        RecommendView
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
    .navbar{
        background: var(--color-tint);
    }
    .navbar div{
        height: 44px;
        line-height: 44px;
        color: #fff;
    }
</style>

