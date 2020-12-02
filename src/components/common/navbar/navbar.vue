<template>
    <div class="navbar">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="center">
            <slot name="center"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>
    .navbar{
        display: flex;
        width: 100%;
        height: 44px;
        line-height: 44px;
        text-align: center;
        box-sizing: border-box;
        box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
    }
    .navbar .left, .navbar .right{
        width: 60px;
    }
    .navbar .center{
        flex: 1;
    } 
</style>