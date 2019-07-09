/**引入包*/
// 引入核心包 start
import Vue from 'vue'
import VueRouter from 'vue-router'
// 按需引入
import { Button, Field, Checklist } from 'mint-ui';
import Axios from 'axios'
// 引入核心包 end
// 引入第三方包 start
import App from './components/App.vue'
import indexPage from './components/index.vue'
import classes from './components/classes.vue'
import formSub from './components/forms/formSub.vue'
// import Note from './components/component/notes.vue'
import Navbar from './components/component/navbar.vue'
import steps from './components/component/steps.vue'
import mdCheckbox from './components/component/mdCheckbox.vue'
import formXx from './components/forms/formXx.vue'
import formYw from './components/forms/formYw.vue'
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
// 注册mint组件
Vue.component(Button.name, Button);
Vue.component(Field.name, Field);
Vue.component(Checklist.name, Checklist);
///** 注册自定义组件
Vue.component('navbar', Navbar);
// 提交表单组件
Vue.component('formXx', formXx);
Vue.component('formYw', formYw);
// 进度条组件
Vue.component('steps', steps);
// 复选框组件
Vue.component('mdCheckbox', mdCheckbox);
// 配置包 start
var router = new VueRouter({
  routes: [
    { name: 'index', path: '/index', component: indexPage},
    { name: 'classes', path: '/classes', component: classes},
    { name: 'formSub', path: '/formSub', component: formSub},
    { path: '/', redirect: {name: 'index'}}
  ]
})


/**渲染文件*/
new Vue({
  el: '#app',
  render: c=> c(App),
  router
})
