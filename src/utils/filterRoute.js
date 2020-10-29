import store from "@/store";
import router from "@/router";
/**
 * 重写路由表过滤方法
 * @param routes
 * @returns {[]}
 */
export const getAsyncRoutes = (routes) => {
    const res = []
    // 定义路由中需要的自定名
    const keys = ['path', 'name', 'children', 'redirect', 'meta','nesting']
    // 遍历路由数组去重组可用的路由
    routes.forEach(item => {
        const newItem = {};
        if(item.component){
            if(item.component == 'layout'){
                newItem.component = (() => import(`@/${item.component}/index.vue`));
            }else{
                newItem.component = (() => import(`@/views/${item.component}/index.vue`));
            }
        }
        for (const key in item) {
            if (keys.includes(key)) {
                newItem[key] = item[key]
            }
        }
        // 若遍历的当前路由存在子路由，需要对子路由进行递归遍历
        if (newItem.children && newItem.children.length) {
            newItem.children = getAsyncRoutes(item.children)
        }
        res.push(newItem)

    })
    // 返回处理好且可用的路由数组
    return res
}


/**
 * method 1
 * 添加动态路由 -- 将路由存在sessionStorage中持久化 需在在登录后触发获取路由菜单方法
 * 然后存在本地储存 sessionStorage.setItem('menuRoute',JSON.stringify(menuRoute))
 * 缺点：可能或造成菜单权限更新不及时 需重新登录
 * @returns {Promise<void>}
 */
export const  setStorageRoutes = async ()=>{
    let menuRoute = JSON.parse(sessionStorage.getItem('menuRoute'));
    if(menuRoute == null ){
        await store.dispatch('user/getUserInfo');
        menuRoute = JSON.parse(sessionStorage.getItem('menuRoute'));
    }
    const menu =  getAsyncRoutes(menuRoute);
        router.addRoutes([
            menu,
            {
                path: '*',
                name: 'NotFind',
                component: () => import('@/views/not-find/index.vue'),

            }
        ]);
}


/**
 * method 2
 * 添加动态路由 -- 每次页面刷新 都会去从新请求接口获取路由
 * 缺点：根据网络情况可能会造成页面空白时间过长
 * @returns {Promise<void>}
 */
export const  setAsyncRoutes = async ()=>{
    let menuRoute =  await store.dispatch('user/getUserInfo');
    const menu =  getAsyncRoutes(menuRoute);
    router.addRoutes([
            ...menu,
            {
                path: '*',
                name: 'NotFind',
                component: () => import('@/views/not-find/index.vue'),

            }
        ]);
}

