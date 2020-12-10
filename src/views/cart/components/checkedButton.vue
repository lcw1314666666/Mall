<template>
    <div class="checkedButton" :class="{checked: isChecked}">
        <img src="@/assets/img/cart/tick.svg" alt="">
    </div>
</template>

<script>
export default {
    name: "CheckedButton",
    props: {
        isChecked: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style scoped>
    .checkedButton{
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 0.1rem solid #eee;
    }
    .checkedButton img{
        width: 100%;
        height: 100%;
        
    }
    .checked{
        border: 0.1rem solid var(--color-high-text);
    }
    .checked img{
        background: var(--color-high-text);
    }
</style>