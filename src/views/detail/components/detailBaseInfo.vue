<template>
    <div v-if="Object.keys(this.goodsInfo).length !== 0" class="detailBaseInfo">
        <div class="info-title">{{ this.goodsInfo.desc }}</div>

        <div class="info-price">
            <span class="n-price">{{ goodsInfo.price }}</span>
            <span class="l-price">{{ goodsInfo.oldPrice }}</span>
            <span class="discount" v-if="goodsInfo.discount">{{ goodsInfo.discount }}</span>
        </div>

        <div class="info-other">
            <span>{{ goodsInfo.columns[0] }}</span>
            <span>{{ goodsInfo.columns[1] }}</span>
            <span>{{ goodsInfo.services[goodsInfo.services.length - 1].name }}</span>
        </div>

        <div class="info-services">
            <!-- <span v-for="(item, index) in 5" :key="item">{{ index }}</span> -->
            <span class="info-services-item" v-for="index in goodsInfo.services.length - 1" :key="index">
                <img v-if="goodsInfo.services[index - 1].icon" :src="goodsInfo.services[index - 1].icon" alt="">
                <span >{{ goodsInfo.services[index - 1].name }}</span>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailBaseInfo',
    props: {
        goodsInfo: {
            type: Object,
            default () {
                return {

                }
            }
        }
    }
}
</script>

<style scoped>
    .detailBaseInfo{
        margin-top: 10px;
        font-size: 0.1rem;
        text-align: left;
    }
    .detailBaseInfo .info-title{
        font-size: 1.29rem;
        color: #333;
        /* height: 2.8rem; */
        /* overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        white-space: normal; */
        /* -webkit-line-clamp: 2;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden; */
    }
    .detailBaseInfo .info-price{
        padding: 10px 5px;
    }
    .detailBaseInfo .info-price .n-price{
        color: var(--color-high-text);
        font-size: 1.3rem;
    }
    .detailBaseInfo .info-price .l-price{
        font-size: 0.7rem;
        margin-left: 2px;
    }
    .detailBaseInfo .info-price .discount{
        color: #fff;
        background-color: var(--color-high-text);
        margin-left: 2px;
        font-size: 0.8rem;
        border-radius: 0.3rem;;
        padding: .2rem;
    }
    .detailBaseInfo .info-other{
        display: flex;
        justify-content: space-between;
        margin-top: 5px;
        padding-bottom: 15px;
        border-bottom: 1px solid #ccc;
    }
    .detailBaseInfo .info-other span{
        color: #666;
        font-size: 0.7rem;
        margin: 10px;  
    }
    .detailBaseInfo .info-services{
        font-size: 0.9rem;
        color: #666;
        margin: 10px 0;
        display: flex;
        justify-content: space-between;
        margin-bottom: 1.4rem;
    }
    .detailBaseInfo .info-services img{
        width: 13px;
        height: 13px;
        margin-top: 0.1rem;
    }
</style>