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
                    <span class="time">{{ item.created }}</span>
                    <span class="style">{{ item.style }}</span>
                </div>
                <div class="images" v-if="item.images">
                    <img v-for="(value, index) in item.images" :src="value" alt="" :key="index">
                </div>
            </div>
        </div>
        

        <div class="box"></div>
    </div>
</template>

<script>
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
    }
}
</script>


<style scoped>
.box{
    height:1000px;
}
    .detailComment{
        margin-top: 0.2rem;
        text-align: center;
        font-size: 0.9rem;
        color: #333;
        margin-bottom: 0.2rem;
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
    .images img{
        width: 2.5rem;
        height: 2.5rem;
    }
</style>