// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入 js
import $ from "jquery"
// 引入element-ui---------使用element框架
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// 引入响应式布局
import 'element-ui/lib/theme-chalk/display.css';
// 引入 axios----------vue的ajax
import axios from 'axios'
import qs from 'qs'
// 引入rem自动适应文件
import rem from './assets/js/rem.js'
// 引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

// 引入vue router
// import VueRouter from 'vue-router'
// 引入重置样式
import './assets/css/resest.css'
Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios
Vue.prototype.qs = qs           //全局注册，使用方法为:this.qs 作用在于把json格式的直接转成data所需的格式

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
// Vue.use(VueRouter)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// axios使用方法
// 　　import axios from 'axios';

// 　　axios.post("/api/login?", params).then(function(res) {
// 　　　　var data = res.data;
// 　　　　// console.log(data);
// 　　　　let role = data.result.user.role;
// 　　　　let token = data.result.token;
// 　　　　localStorage.setItem("currentUser_token", token); //将token存到本地的localStorage中
// 　　　　// console.log(localStorage);
// 　　　　if (data.code == 1) {
// 　　　　alert(data.msg);
// 　　　　let _username;
// 　　　　// console.log(localStorage.getItem("currentUser_token"))
// 　　　　// console.log(userName)
// 　　　　that.$router.push({path: "/index",query: { name: userName, role: role }}); //跳转到 index页面中并传递name和role的值

// 　　　　(在index页面中接受参数：PS：let userName = this.$route.query.name;let userRole = this.$route.query.role;)

// 　　} else {

// 　　　　alert(data.msg);
// 　　}
// 　　}).catch(function(err) {
// 　　　　console.log("LOGIN_" + err);
// 　　});
// （注意：若要使用全局路径访问请求则需要在config中的index.js中配置proxyTable）
// 举例：proxyTable: {
// 　　　　'/api': {
// 　　　　　　target: 'IP+端口', //后端接口地址
// 　　　　　　changeOrigin: true, //是否允许跨越
// 　　　　　　pathRewrite: {
// 　　　　　　'^/api': '/api', //重写,
// 　　　　　　}
// 　　　　　}
// 　　　},
