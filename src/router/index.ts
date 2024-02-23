import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import UpdatePwd from "@/views/UpdatePwd.vue";
import UpdateInfo from "@/views/UpdateInfo.vue"
import QueryInfo from "@/views/QueryInfo.vue"
import  {getCookie} from "@/cookiesAuth/cookies_auth.js";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/api/user',
      component: LoginView
    },
    {
      path: '/my/userinfo',
      component: QueryInfo,
      meta: { requiresAuth: true } // 需要用户登录才能访问的路由
    },
    {
      path: '/my/updateinfo',
      component: UpdateInfo,
      meta: { requiresAuth: true } // 需要用户登录才能访问的路由
    },
    {
      path: '/my/updatepwd',
      component: UpdatePwd,
      meta: { requiresAuth: true } // 需要用户登录才能访问的路由
    },
  ]
})
// 创建路由守卫
router.beforeEach((to, from, next) => {
  const isAuthenticated = getCookie('auth')
  // 判断用户是否已经登录，可以根据你的逻辑进行判断
  //通过to.matched.some()方法判断当前路由是否定义了requiresAuth元字段，表示该路由需要用户登录才能访问
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 该路由需要用户登录
    if (!isAuthenticated) {
      // 没有登录，跳转到登录页面
      next('/api/user')
    } else {
      // 已经登录，继续导航
      next();
    }
  }else next()
});
export default router
