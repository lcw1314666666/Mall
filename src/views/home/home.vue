<template>
    <div class="home">
        <NavBar class="navbar">
            <div slot="center">购物车</div>
        </NavBar>
        <Swiper :banner='banner'></Swiper>
        home
    </div>
</template>

<script>
import NavBar from '@/components/common/navbar/navbar.vue'
import Swiper from './components/swiper.vue'



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
        Swiper
    },
    created () {
        getHomeMultidata().then((res) => {
            const data = res.data
            this.banner = data.banner.list
            console.log(this.banner)
            this.recommend = data.recommend.list
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

