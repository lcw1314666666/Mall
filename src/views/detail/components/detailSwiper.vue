<template>
    <Swiper class="detail-swiper">
        <SwiperItem  class="swiperItem" v-for="(item, index) in list" :key="index">
            <img :src="item" />
        </SwiperItem>
    </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from '@/components/common/swiper/index.js'
export default {
    name: 'DetailSwiper',
    props: {
        list: {
            type: Array,
            default () {
                return []
            }
        }
    },
    components: {
        Swiper,
        SwiperItem
    }
}
</script>

<style scoped>
    .detail-swiper{
        height: 300px;
        overflow: hidden;
    }
</style>