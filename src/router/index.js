import Vue from 'vue'
import Router from 'vue-router'
// @ 等价于 /src 这个目录
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: "/home",
    	component: () => import('@/pages/home.vue'),
    },
    {
      path: "/about",
    	component: () => import('@/pages/about.vue'),
      meta: { title: '关于我们' }
    }
  ]
})
