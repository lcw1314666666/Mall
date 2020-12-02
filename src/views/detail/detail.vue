<template>
    <div class="detail">
        detail
    </div>
</template>

<script>
export default {
    name: 'Detail',
    data () {
        return {
            list: null
        }
    },
    created () {
        let id = this.$route.params.id
        console.log(id)
    }
}
</script>


<style lang="less" scoped>

</style>