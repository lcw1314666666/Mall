<template>
    <div class="backTop">
        <img src="@/assets/img/common/top.png" alt="">
    </div>
</template>

<script>
export default {
    name: "BackTop",
    data () {
        return {
            
        }
    }
}
</script>

<style scoped>
    .backTop{
        position: fixed;
        right: 11px;
        bottom: 80px;
        width: 43px;
        height: 43px;
    }
    .backTop img{
        width: 100%;
        height: 100%;
    }
</style>

