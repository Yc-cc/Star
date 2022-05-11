/**
 * 通过mutation间接控制state中的数据
 */
 import { 
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  DECREMENT_FOOD_COUNT,
  INCREMENT_FOOD_COUNT,
  CLEAR_CARTFOOD,
  RECEIVE_SEARCH_SHOPS,
  ADD_ORDER
} from './mutation-type'

import {
  reqAddress,
  reqFoodCategorys,
  reqLogout,
  reqShops,
  reqUserInfo,
  reqShopGoods,
  reqShopRatings,
  reqShopInfo,
  reqSearchShop,
  addOrder
} from '../api/index'

export default {
  //异步获取地址
  async getAddress({commit,state}){
    //发送ajax请求
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    //提交一个mutation
    if(result.code === 0){
      const address = result.data
      commit(RECEIVE_ADDRESS,{address})
    }
  },
  //异步获取食品分类
  async getCategorys({commit}){
    //发送ajax请求
    const result = await reqFoodCategorys()
    //提交一个mutation
    if(result.code === 0){
      const categorys = result.data
      commit(RECEIVE_CATEGORYS,{categorys})
    }
  },
  //异步获取商家列表
  async getShops({commit,state}){
    //发送ajax请求
    const {latitude,longitude} = state
    const result = await reqShops(latitude,longitude)
    //提交一个mutation
    if(result.code === 0){
      const shops = result.data
      commit(RECEIVE_SHOPS,{shops})
    }
  },
  //同步获取用户信息
  getUserInfo({commit},userInfo){
    commit(RECEIVE_USER_INFO,{userInfo})
  },

  //异步读取已登录的用户信息
  async gotUserInfo({commit},userInfo){
    const result = await reqUserInfo()
    if(result.code == 0){
      const userInfo = result.data
      commit(RECEIVE_USER_INFO,{userInfo})
    }
  },

  //重置用户信息
  async resetUserInfo({commit}){
    const result = await reqLogout()
    if(result.code == 0){
      commit(RESET_USER_INFO)
    }
  },

  //异步获取商家商品信息
  async getShopGoods({commit},callback){
    const result = await reqShopGoods()
    if(result.code == 0){
      const goods = result.data
      commit(RECEIVE_GOODS,{goods})
      //数据更新，通知组件
      callback && callback()
    }
  },
  //异步获取商家评价信息
  async getShopRatings({commit},callback){
    const result = await reqShopRatings()
    if(result.code == 0){
      const ratings = result.data
      commit(RECEIVE_RATINGS,{ratings})
      //数据更新，通知组件
      callback && callback()
    }
  },
  //异步获取商家详情
  async getShopInfo({commit}){
    const result = await reqShopInfo()
    if(result.code == 0){
      const info = result.data
      commit(RECEIVE_INFO,{info})
    }
  },

  //同步更新商品中的数量
  updateFoodCount({commit},{isAdd,food}){
    if(isAdd){
      commit(INCREMENT_FOOD_COUNT,{food})
    }else{
      commit(DECREMENT_FOOD_COUNT,{food})
    }
  },

  //同步删除购物车中的数据
  clearCartFood({commit}){
    commit(CLEAR_CARTFOOD)
  },

  //异步获取搜索商家列表
  async getSearchShops({commit,state},searchWord){
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqSearchShop(geohash,searchWord)
    if(result.code == 0){
      const searchShops = result.data
      commit(RECEIVE_SEARCH_SHOPS,{searchShops})
    }
  },

  //增加订单信息
  async addOrder({commit},data){
    const result = await addOrder(data)
    if(result.code == 0){
      const orderMessage = result.data
      commit(ADD_ORDER,{orderMessage})
    }
  }
}