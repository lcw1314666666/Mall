<template>
    <div class="toast" v-show="isShow">
        {{ message }}
    </div>
</template>

<script>
export default {
    name: 'Toast',
    props: {
        isShow: {
            type: Boolean,
            default: false
        },
        message: {
            type: String,
            default: ''
        }
    },
    data () {
        return {

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
        width: 120px;
        height: 30px;
        color: #eee;
        transition: translateX(-50%) translateY(-50%);
        font-size: 1rem;
        background: rgba(0, 0, 0, 0.5);
        padding: 8px 10px;
        z-index: 20;
    }

</style>