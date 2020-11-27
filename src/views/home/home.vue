<template>
    <div class="home">
        <NavBar class="navbar">
            <div slot="center">购物车</div>
        </NavBar>
        home
    </div>
</template>

<script>
import NavBar from '@/components/common/navbar/navbar.vue'
import { getHomeMultidata } from '@/network/home.js' 

export default {
    name: 'Home',
    data () {
        return {

        }
    },
    components: {
        NavBar
    },
    created () {
        getHomeMultidata().then((res) => {
            const data = res.data
            console.log(data)
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

