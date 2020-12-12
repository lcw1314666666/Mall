<template>
    <div class="toast" v-show="isShow">
        {{ message }}
    </div>
</template>

<script>
export default {
    name: 'Toast',
    props: {
        // isShow: {
        //     type: Boolean,
        //     default: false
        // },
        // message: {
        //     type: String,
        //     default: ''
        // }
    },
    data () {
        return {
            isShow: false,
            message: ''
        }
    },
    methods: {
        show (message='默认文字', duration=500) {
            this.message = message
            this.isShow = true
            setTimeout(() => {
                this.isShow = false
                this.message = ''
            }, duration)
        }
    }
}
</script>

<style scoped>
    .toast{
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        text-align: center;
        width: 180px;
        height: 30px;
        color: #eee;
        transition: translateX(-50%) translateY(-50%);
        font-size: 1rem;
        background: rgba(0, 0, 0, 0.6);
        padding: 8px 10px;
        z-index: 999;
    }

</style>