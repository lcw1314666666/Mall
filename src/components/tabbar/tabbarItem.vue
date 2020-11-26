<template>
    <div class="tab-bar-item"  :style="ActiveStyle" @click="itemClick">
        <div class="item-box">
            <slot name="item-icon" v-if="!isActive">
                <img src="../../assets/tabbarImg/img/wode.svg" alt="">
            </slot>
            <slot name="item-icon-active" v-else>
                <img src="../../assets/tabbarImg/img/wodeActive.svg" alt="">
            </slot>
            <slot name="item-text">
                <div>我的</div>
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TabBarItem',
    props: {
        path: String,
        activeColor: {
            type: String,
            default: 'red'
        }
    },
    data () {
        return {
            // isActive: false
        }
    },
    methods: {
        itemClick () {
            this.$router.replace(this.path)
        }
    },
    computed: {
        isActive () {
            return this.$route.path.indexOf(this.path) !== -1
        },
        ActiveStyle () {
            return this.isActive ? {color: this.activeColor} : {}
        }
    }
}
</script>

<style scoped>
.tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;

    vertical-align: middle;
}
.tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 6px;
}
.tab-bar-item>div{
    height: 24px;
    line-height: 24px;
}
/* .isActive{
    color: red;
} */
</style>