/**
 * 直接控制state中的数据
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  DECREMENT_FOOD_COUNT,
  INCREMENT_FOOD_COUNT
} from './mutation-type'

import Vue from 'vue'

export default {
  [RECEIVE_ADDRESS] (state, { address }) {
    state.address = address
  },
  [RECEIVE_CATEGORYS] (state, { categorys }) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS] (state, { shops }) {
    state.shops = shops
  },
  [RECEIVE_USER_INFO] (state, { userInfo }) {
    state.userInfo = userInfo
  },
  [RESET_USER_INFO] (state) {
    state.userInfo = {}
  },

  [RECEIVE_INFO] (state, { info }) { 
    state.info = info 
  },
  [RECEIVE_RATINGS] (state, { ratings }) { 
    state.ratings = ratings 
  },
  [RECEIVE_GOODS] (state, { goods }) { 
    state.goods = goods 
  },

  [DECREMENT_FOOD_COUNT] (state, { food }) { 
    if(food.count){
      food.count--
      //数量为0时，将商品从购物车中移除
      if(food.count === 0){
        state.cartFoods.splice(state.cartFoods.indexOf(food),1)
      }
    }
  },
  [INCREMENT_FOOD_COUNT] (state, { food }) { 
    if(!food.count){ //第一次点击
      // food.count = 1
      Vue.set(food,'count',1) //让新增的属性也有数据绑定
      //将food添加到cartFoods中去
      state.cartFoods.push(food)
    }else{  //依次加加
      food.count++
    }
  },


  updateAddress (state, detailedAddress) {
    state.latitude = detailedAddress.latitude
    state.longitude = detailedAddress.longitude
  },
}