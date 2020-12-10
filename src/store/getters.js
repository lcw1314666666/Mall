export default {
    cartLength (state) {
        console.log(state)
        return state.cartList.length
    },
    cartList (state) {
        return state.cartList
    },
    calcTotalPrice (state) {
        if (state.cartList) {
            return '￥' +  state.cartList.filter(item => {
                return item.isChecked === true
            }).reduce((preValue, item) => {
                return preValue + item.count * item.price
            }, 0)
        } else {
            return "￥" + 0
        } 
    },
    goodsNum (state) {
        return state.cartList.filter(item => {
            return item.isChecked === true
        }).length
    },
    isSelectAll (state) {
        return state.isSelectAll
    }
}