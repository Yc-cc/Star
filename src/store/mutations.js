/**
 * 直接控制state中的数据
 */
import { 
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
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


  updateAddress(state,detailedAddress){
    state.latitude = detailedAddress.latitude
    state.longitude = detailedAddress.longitude
  },
}