import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 加载 element组件库
import ElementUI from 'element-ui'
// 加载element 组件库的样式
import 'element-ui/lib/theme-chalk/index.css'

// 加载全局样式文件
import '../src/styles/index.less'

// 全局注册 element 组件库
Vue.use(ElementUI)

Vue.config.productionTip = false

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App)
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
