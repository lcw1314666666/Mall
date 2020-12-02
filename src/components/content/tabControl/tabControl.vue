<template>
    <div class="tabControl">
        <div class="tabControl-item"
             v-for="(item, index) in title" :key="item"
             :class='{active: currentIndex === index}'
             @click="hanldeItemClick(index)">
            <span class="item">{{ item }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TabControl',
    data () {
        return {
            currentIndex: 0
        }
    },
    props: {
       title: {
           type: Array,
           default () {
               return {

               }
           }
       } 
    },
    methods: {
        hanldeItemClick (index) {
            this.currentIndex = index
            this.$emit('handleTabControlClick', index)
        }
    }
}
</script>

<style scoped>
    .tabControl{
        display: flex;
        text-align: center;
        height: 35px;
        background-color: #fff;
    }
    .tabControl .tabControl-item{
        flex: 1;
        padding-top: 5px;
    }
    .tabControl .active{
        color: var(--color-high-text)
    }
    .tabControl span{
        padding: 5px 0;
    }
    .tabControl .active span{
        border-bottom: 2px solid var(--color-high-text);
    }
</style>