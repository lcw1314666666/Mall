<template>
    <div class="detailComment" v-if="Object.keys(this.list).length !== 0">
        <div class="top">
            <div class="uComment">用户评价</div>
            <div class="more">更多</div>
        </div>
        <div class="content">
            <div class="userComment" v-for="item in list" :key="item.rateId">
                <div class="userInfo">
                    <img :src="item.user.avatar" alt="">
                    <div class="userName">{{ item.user.uname }}</div>
                </div>
                <p class="commentInfo">{{ item.content }}</p>
                <div class="commentStyle">
                    <span class="time">{{ item.created | showTime }}</span>
                    <span class="style">{{ item.style }}</span>
                </div>
                <div class="images" v-if="item.images">
                    <img class="commentImg" v-for="(value, index) in item.images" :src="value" alt="" :key="index">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { formatDate } from '@/common/utils.js'
export default {
    name: 'DetailComment',
    props: {
        list: {
            type: Array,
            default () {
                return []
            }
        }
    },
    filters: {
        showTime (value) {
            const date = new Date(value*1000)
            return formatDate(date, 'yyyy-MM-dd')
        }
    }
}
</script>


<style scoped>
    .detailComment{
        margin: 0.2rem 0;
        font-size: 0.9rem;
        color: #333;
        padding-bottom: 1rem;
        margin-bottom: 1rem;
        border-bottom: 0.2rem solid #eee;
    }
    .detailComment .top{
        /* overflow: hidden; */
        display: flex;
        height: 2.5rem;
        line-height: 2.5rem;
        padding: 0.2rem;
        font-size: 1rem;
    }
    .detailComment .top .uComment{
        flex: 1;
        text-align: left;
    }
    .detailComment .top .more{
        flex: 1;
        text-align: right;
    }
    .content{
        margin-top: 1rem;
    }
    .userComment .userInfo{
        display: flex;
        margin-left: 1rem;
    }
    .userComment .userInfo img{
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
    }
    .userComment .userInfo .userName{
        font-size: 1.1rem;
        height: 2.5rem;
        line-height: 2.5rem;
        margin-left: 1rem;
    }
    .userComment .commentInfo{
        font-size: 0.9rem;
        text-align: left;
        color: #666;
        margin: 1rem 0.2rem;
    }
    .commentStyle{
        text-align: left;
        padding: 0.2rem;
        color: #666;
        font-size: 0.8rem;
    }
    .commentStyle .style{
        margin-left: 0.4rem;
    }
    .images{
        margin-top: 0.2rem;
        margin-left: 0.2rem;
    }
    .images .commentImg{
        width: 4rem;
        height: 4rem;
    }
</style>