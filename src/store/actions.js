import { ADD_COUNT, ADD_TO_CART } from './mutation-type'
export default {
    addCart (context, payload) {
        let lodProduct = context.state.cartList.find(item => item.iid == payload.iid)
        if (lodProduct) {
            //如果要要填加的商品在购物车中找到了
            context.commit(ADD_COUNT, lodProduct)
        } else {
            payload.count = 1
            context.commit(ADD_TO_CART, payload)
        }
    }
}