<template>
    <div class="goods-Info">
        <div class="goods-desc">
            <div class="start"></div>
            <div class="desc">{{ detailInfo.title }}</div>
            <div class="end"></div>
        </div>
        <div class="good-list">
            <div class="detail-image" v-for="(item, index) in detailInfo.detailImage" :key="index">
                <div class="key">{{ item.key }}</div>
                <div class="image-list" v-for="(value, index) in item.list" :key="index">
                    <img :src="value" alt="" @load="imageLoad">
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'GoodsInfo',
    data () {
        return {
            imageNum: 0,
            count: 0
        }
    },
    props: {
        detailInfo: {
            type: Object,
            default () {
                return {}
            }
        }
    },
    methods: {
        imageLoad () {
            this.imageNum = this.detailInfo.detailImage[0].list.length
            this.count ++
            // console.log(this.count)
            if (this.count === this.imageNum) {
                this.$emit('imageLoad')
            }
            
        }
    }
}
</script>

<style scoped>
    .goods-Info{
        margin-bottom: 3rem;   
    }
    .goods-desc{
        padding: 2rem 0.5rem;
    }
    .goods-desc .start{
        position: relative;
        width: 30%;
        height: 1px;
        background: #333;
    }
    .goods-desc .end{
        position: relative;
        float: right;
        /* overflow: hidden; */
        width: 30%;
        height: 1px;
        background: #333;
    }

    .goods-desc .start::before{
        position: absolute;
        left: 0;
        top: -200%;
        content: '';
        display: block;
        width: 4px;
        height: 4px;
        background: #333;
    }
    .goods-desc .end::after{
        position: absolute;
        right: 0;
        top: -200%;
        content: '';
        display: block;
        width: 4px;
        height: 4px;
        background: #333;
    }
    .goods-desc .desc{
        padding: 1rem 0;
    }
    .good-list .key{
        font-size: 1.3rem;
        color: #333;
        margin: 0.5rem 0.3rem;
    }
    .image-list img{
        width: 100%;
    }
</style>