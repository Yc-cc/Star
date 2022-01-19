import Vue from 'vue'
import App from './pages/index.vue'
import "./common/iconfont/font_3000703_j6vcz41427b/iconfont.css"

import router from './router'
import store from './store'

// 全局安装Vant组件
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from 'axios'
Vue.use(Vant)

Vue.prototype.$axios = axios

// 因为样式加载有一个覆盖的效果，后加载会覆盖先加载
import './style/index.less'

/* // 需要对自定义插件进行注册
import plugin from './components'
Vue.use(plugin) */

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
