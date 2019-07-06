/**引入包*/
// 引入核心包 start
import Vue from 'vue'
import VueRouter from 'vue-router'
// 按需引入
import { Button } from 'mint-ui';
Vue.component(Button.name, Button);
import Axios from 'axios'
// 引入核心包 end
// 引入第三方包 start
import App from './components/App.vue'
import indexPage from './components/index.vue'
import classes from './components/classes.vue'
// 引入第三方包 end
/**引入包*/
// 引入样式包
import './static/css/global.css'
import 'mint-ui/lib/style.css'

/**配置挂载包*/
// 挂载包 start
Vue.use(VueRouter);
Vue.prototype.$axios = Axios;

// 配置默认配置
Axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5d171b2ba31bc21d4c437698/kfmobile/';
// Vue.use(Mint);
// 挂载包 end
// 配置包 start
var router = new VueRouter({
  routes: [
    { name: 'index', path: '/index', component: indexPage},
    { name: 'classes', path: '/classes', component: classes},
    { path: '/', redirect: {name: 'index'}}
  ]
})


/**渲染文件*/
new Vue({
  el: '#app',
  render: c=> c(App),
  router
})
