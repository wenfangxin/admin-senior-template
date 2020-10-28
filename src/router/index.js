import Vue from 'vue'
import VueRouter from 'vue-router';
import NProgress from 'nprogress' // 引入nprogress插件 页面跳转出现在浏览器顶部的进度条
import 'nprogress/nprogress.css'  // 这个nprogress样式必须引入
import cookie from 'js-cookie';
import {setStorageRoutes, setAsyncRoutes} from "@/utils/filterRoute";
import store from '@/store/index'
NProgress.configure({easing: 'ease', speed: 100, showSpinner: false})
Vue.use(VueRouter)

export const defaultRoutes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue'),
    }
]


/**
 * 配置路由模式
 * @type {function(): *}
 */
const createRouter = () => new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        ...defaultRoutes
    ]
});
const router = createRouter();


// 定义一个resetRouter 方法，在退出登录时，调用即可
export function resetRouter() {
    const newRouter = createRouter();
    router.matcher = newRouter.matcher;
}

/**
 * 执行动态路由
 */
if (cookie.get('token') && cookie.get('token') !== 'undefined') {
    setAsyncRoutes();
}


/**
 * 路由权限校验
 */
router.beforeEach(async (to, from, next) => {
    NProgress.start()
    if (cookie.get('token') && cookie.get('token') !== 'undefined') { //判断本地是否存在access_token
        //如果本地 存在 token 则 不允许直接跳转到登录页面
        if (to.fullPath === "/login") {
            next();
            router.push(from.fullPath)
        } else {
            next()
        }

    } else {
        if (to.path === '/login') {
            next()
        } else {
            next(`/login`)
        }
    }
});

/**
 * 设置路由进度条
 */
router.afterEach(() => {
    NProgress.done()
})


export default router
