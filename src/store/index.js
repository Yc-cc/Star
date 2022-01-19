import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})


// const store = new Vuex.Store({
//     // 通过一个插件属性把持久化的插件进行注册
//     plugins: [
//         persistedState({})
//     ],
//     modules: {
//         state,
//         mutations,
//         actions,
//         getters
//     }
// })

// export default store