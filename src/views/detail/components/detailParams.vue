<template>
    <div class="detail-params">
        <table class="rule" v-for="(item, index) in params.rule" :key="index">
            <tr class="rule-row" v-for="(tr, indexX) in item" :key="indexX">
                <td class="rule-cloumn" v-for="(td, indexY) in tr" :key="indexY">{{ td }}</td>
            </tr>
        </table>

        <table class="info">
            <tr class="info-row" v-for="(item, index) in params.info" :key="index">
                <td class="info-cloumn" 
                    v-for="(td, index) in item" 
                    :key="index"
                    :class="{infoValue:index=='value'}"
                >
                    {{ td }} 
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'DetailParams',
    props: {
        params: {
            type: Object,
            default () {
                return {}
            }
        }
    }
}
</script>

<style scoped>
    .detail-params{
        padding-bottom: 2rem;
        border-bottom: 0.3rem solid #eee;
    }
    .detail-params table{
        width: 100%;
        text-align: center;
        color: #333;
        font-size: .9rem;
    }
    .detail-params table tr{
        height: 3rem;
        line-height: 3rem;
        border-bottom:1px dashed #000;
    }
    .info{
        padding-left: 2rem;
        text-align: center;
    }
    .info .infoValue{
        color: var(--color-high-text)
    }
</style>