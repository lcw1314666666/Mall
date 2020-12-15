<template>
    <NavBar class="navBar">
        <div slot="center" class="center">商品分类</div>
    </NavBar>
</template>

<script>
import NavBar from '@/components/common/navbar/navbar'
export default {
    name: 'CategoryNav',
    components: {
        NavBar
    }
}
</script>

<style scoped>
    .navBar{
        background: var(--color-tint);
    }
    .navBar .center{
        font-size: 1.1rem;
        font-weight: 700;
        color: #fff;
    }
</style>