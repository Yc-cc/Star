/**
 * 改变state的getter计算属性的方法
 */
export default {
  totalCount(state){
    return state.cartFoods.reduce((preTotal,food) => preTotal + food.count,0)
  },
  totalPrice(state){
    return state.cartFoods.reduce((preTotal,food) => preTotal + food.count*food.price,0)
  }
}