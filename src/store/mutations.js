import { ADD_COUNT, ADD_TO_CART } from './mutation-type'
export default {
    [ADD_COUNT] (state, payload) {
        payload.count ++
    },
    [ADD_TO_CART] (state, payload) {
        state.cartList.push(payload)
    },
    selectAll (state) {
        state.isSelectAll = true
    },
    noSelectAll (state) {
        state.isSelectAll = false
    },
    allGoodsNoSelect (state, payload) {
        payload.isChecked = false
    },
    allGoodsSelect (state, payload) {
        payload.isChecked = true
    },
    isSelectClick (state, payload) {
        payload.isChecked = !payload.isChecked
    }
}