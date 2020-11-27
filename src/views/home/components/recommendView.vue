<template>
    <div class="recommend">
        <div class="recommend-item" v-for="item in recommend" :key="item.ace">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div class="recommend-title">{{ item.title }}</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RecommendView',
    data () {
        return {

        }
    },
    props:  {
        recommend: {
            type: Array,
            default () {
                return []
            }
        }
    }
}
</script>

<style scoped>
    .recommend{
        display: flex;
        width: 100%;
        height: 130px;
        font-size: 0.7rem;
        text-align: center;
        padding: 10px 0 20px 0;

        border-bottom: 8px solid #eee;
    }
    .recommend .recommend-item{
        flex: 1
    }
    .recommend .recommend-item img{
        width: 65px;
        height: 65px;
    }
</style>