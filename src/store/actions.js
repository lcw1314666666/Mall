import { ADD_COUNT, ADD_TO_CART } from './mutation-type'
export default {
    addCart (context, payload) {
        return new Promise(function (resolve) {
            let lodProduct = context.state.cartList.find(item => item.iid == payload.iid)
            if (lodProduct) {
                //如果要要填加的商品在购物车中找到了
                context.commit(ADD_COUNT, lodProduct)
                resolve('当前商数量加一')
            } else {
                payload.count = 1
                payload.isChecked = true
                context.commit(ADD_TO_CART, payload)
                resolve('当前商数加入到购物车')
            }
        })
        
    },
    changeIsChecked (context , iid) {
        for (let item of context.state.cartList) {
            if (item.iid === iid) {
                context.commit('isSelectClick', item)
            }
        }
        let isSelectAll = context.state.cartList.every((item) => {
            return item.isChecked === true
        })
        if (isSelectAll) {
            context.commit('selectAll')
        } else {
            context.commit('noSelectAll')
        }
    },
    selectAllGoods (context) {
        if (context.state.isSelectAll) {
            context.commit('noSelectAll')
            // context.state.isSelectAll = false
            context.state.cartList.forEach(item => {
                context.commit('allGoodsNoSelect', item)
            })
        } 
        else {
            context.commit('selectAll')
            // context.state.isSelectAll = true
            context.state.cartList.forEach(item => {
                context.commit('allGoodsSelect', item)
            })
        }
    }
}