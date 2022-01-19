/**
 * 通过mutation间接控制state中的数据
 */
 import { 
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO
} from './mutation-type'

import {
  reqAddress,
  reqFoodCategorys,
  reqLogout,
  reqShops,
  reqUserInfo
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
  }
}