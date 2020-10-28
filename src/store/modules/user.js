import cookie from 'js-cookie';
import { Loading } from 'element-ui';
export default {
    namespaced: true,
    state: {
        userId: cookie.get('userId'),
        token: cookie.get('token'),
        // menuRoute: JSON.parse(sessionStorage.getItem('menuRoute'))
        menuRoute:[]

    },
    mutations: {
        //修改token
        SET_TOKEN(state, data) {
            state.token = data;
        },
        //修改userId
        SET_USER_ID(state, data) {
            state.userId = data;
        },
        //修改menuData
        SET_MENU_ROUTE(state, data) {
            state.menuRoute = data;
        }
    },
    actions: {
        /**
         * 用户登录
         * @param commit
         * @param data
         * @returns {Promise<unknown>}
         */
        userLogin({commit}, data) {
            return new Promise((resolve, reject) => {
                // api.user.login(data).then(res => {
                    commit('SET_TOKEN', 111);
                    cookie.set('token',111);
                    commit('SET_USER_ID',111);
                    cookie.set('userId', 111);
                    resolve()
                // }).catch(error => {
                //     reject(error)
                // })
            })
        },
        /**
         * 退出登录
         * @param commit
         * @returns {Promise<unknown>}
         */
        loginOut({commit}) {
            return new Promise((resolve, reject) => {
                commit('SET_TOKEN', null);
                cookie.remove('token')
                resolve();
            })
        },
        /**
         * 获取用户信息
         * @param commit
         * @param data
         * @returns {Promise<unknown>}
         */
        getUserInfo({commit}) {
            return new Promise((resolve, reject) => {
                let menuRoute = [
                    {
                        path: "/home",
                        name: "home",
                        component: 'home',
                        meta:{
                            icon: "icon-shouye",
                            title: "首页"
                        }
                    },
                    {
                        path: "/auth",
                        name: "auth",
                        meta:{
                            title: "权限管理",
                            icon: "icon-quanxian"
                        },
                        children: [
                            {
                                path: "a",
                                name: 'a',
                                component: 'a',
                                meta:{
                                    title: "权限管理A"
                                }
                            },
                            {
                                path: "b",
                                name: 'b',
                                component: 'b',
                                meta:{
                                    title: "权限管理B"
                                }
                            },

                        ]
                    }
                ];
                //全屏loading
                let loadingInstance = Loading.service({
                    lock: true,
                    text: '拼命加载中',
                    background: 'rgb(249 249 249 / 56%)'
                });
                setTimeout(()=>{
                    commit('SET_MENU_ROUTE',menuRoute)
                    loadingInstance.close();
                    resolve(menuRoute)
                },400)
            })
        }
    },
    getters: {}
}
