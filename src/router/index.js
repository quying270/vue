import Axios from 'axios'
import $ from 'jquery'
import Mint from 'mint-ui'
import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index.vue'
import headNav from '../components/common/headNav.vue'

// mint-ui组件库
import 'mint-ui/lib/style.css'
Vue.use(Mint)

// 安装全局组件
Vue.component('headNav', headNav)

// 数据请求
Axios.defaults.baseURL = 'http://47.96.29.109/vueProject/'
Vue.prototype.$ajax = Axios
Vue.prototype.dataURL = function (file, title, id) {
  id = (id === undefined) ? '' : id
  return file + '?title=' + title + id
}

Vue.prototype.$jq = $

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }
  ]
})
