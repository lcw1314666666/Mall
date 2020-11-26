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
export default {
    name: 'Home',
    components: {
        NavBar
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

