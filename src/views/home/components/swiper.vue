<template>

    <swiper class="swiper" ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="item in banner" :key="item.ace">
                <img :src="item.image" alt="">
            </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

   
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

export default {
    name: 'carrousel',
    data() {
      return {
        swiperOptions: {
            loop: true,
            pagination: {
                el: '.swiper-pagination'
            }
          // Some Swiper option/callback...
        }
      }
    },
    props: {
        banner: Array
    },
    components: {
        Swiper,
        SwiperSlide
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
        
        console.log('Current Swiper instance object', this.swiper)
        this.swiper.slideTo(0, 500, false)
    },
    directives: {
        swiper: directive
    }
}
</script>

<style scoped>
    .warper >>> .swiper-pagination-bullet-active{
        background :#fff !important
    } 
        
   .swiper{
       margin-top: 0;
       width: 100%;
       height: 180px;
   }
   .swiper .swiper-slide{
       width: 100%;
       height: 100%;
   }
   .swiper-container{
        --swiper-theme-color: #ff6600;
        --swiper-pagination-color: #00ff33;/* 两种都可以 */
    }
   .swiper img{
       margin: 0;
       width: 100%;
       height: 100%;
   }
</style>