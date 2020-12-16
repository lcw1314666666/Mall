<template>
    <CategoryTitleScroll class="categoryTitle scroll" ref='categoryListScroll'>
        <li class="titleListItem" 
            v-for="(item, index) in list" 
            :key="index"
            :class="{active: currentIndex===index}"
            @click="titleItemClick(index)"
        >{{ item.title }}</li>
    </CategoryTitleScroll>
</template>

<script>
import CategoryTitleScroll from '@/components/common/scroll/scroll'
export default {
    name: 'CategoryTitle',
    data () {
        return {
            currentIndex: 0
        }
    },
    props: {
        list:{
            type: Array,
            default () {
                return []
            }
        }
    },
    components: {
        CategoryTitleScroll
    },
    methods: {
        titleItemClick (index) {
            this.currentIndex = index
            this.$emit('handleTitleClick', index)
        }
    },
    updated () {
        this.$refs.categoryListScroll.scroll.refresh()
    }
}
</script>

<style scoped>
    .titleListItem{
        font-size: 1rem;
        height: 2.5rem;
        line-height: 2.5rem;
        padding: 0.2rem;
        list-style: none;
        text-align: center;
        color: #333;
        background: #eee;
    }
    .scroll{
        height: 100%;
    }
    .active{
        background: #fff;
        color: var(--color-tint);
        border-left: 3px solid var(--color-tint);
    }

</style>