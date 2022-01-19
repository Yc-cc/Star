/**
 * 直接控制state中的数据
 */
import { 
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO
} from './mutation-type'

export default {
  [RECEIVE_ADDRESS] (state,{address}) {
    state.address = address
  },
  [RECEIVE_CATEGORYS] (state,{categorys}) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS] (state,{shops}) {
    state.shops = shops
  },
  [RECEIVE_USER_INFO] (state,{userInfo}) {
    state.userInfo = userInfo
  },
  [RESET_USER_INFO] (state) {
    state.userInfo = {}
  },


  updateAddress(state,detailedAddress){
    state.latitude = detailedAddress.latitude
    state.longitude = detailedAddress.longitude
  },
}