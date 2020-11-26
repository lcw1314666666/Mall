<template>
    <div class="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'TabBar'
}
</script>

<style scoped>
@import url('../../assets/css/style.css');

.tab-bar{
    display: flex;
    height: 69px;
    background-color: pink;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -1px 1px rgba(100, 100, 1000, .2);
}
</style>