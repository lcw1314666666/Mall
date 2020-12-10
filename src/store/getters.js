export default {
    cartLength (state) {
        console.log(state)
        return state.cartList.length
    },
    cartList (state) {
        return state.cartList
    }
}