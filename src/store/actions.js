import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutations-types'
// 也可以把addcart映射到需要的地方  用import mapActions
export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      let oldProduct = null;
    for(let item of context.state.cartList) {
      if(item.iid === payload.iid) {
        oldProduct = item;
      }
    }
    if(oldProduct) {//数量加一
      // oldProduct.count += 1
      // context.commit('addCounter', oldProduct)
      context.commit(ADD_COUNTER, oldProduct)
      resolve('当前的商品数量+1')
    }else {//添加商品
      payload.count = 1;
      // context.state.cartList.push(payload)
      context.commit(ADD_TO_CART, payload)
      resolve('添加商品成功')
    }
    })
  }
}