<template>
    <div class="detail">
        <DetailNavBar></DetailNavBar>
    </div>
</template>

<script>
import DetailNavBar from './components/detailNavBar'
export default {
    name: 'Detail',
    data () {
        return {
            list: null
        }
    },
    components: {
        DetailNavBar
    },
    created () {
        let id = this.$route.params.id
        console.log(id)
    }
}
</script>


<style lang="less" scoped>

</style>