export default {
    state:{
        collapse:false,   //是否展开菜单栏
        menuIcon:'icon-zhedie1', // 收缩菜单的图标
    },
    mutations:{
        //修改展开菜单栏状态
        SET_COLLAPSE:(state,data)=>{
            state.collapse = data;
        },
        //修改展开的icon
        SET_MENU_ICON:(state,data)=>{
            state.menuIcon = data;
        }
    },
    getters:{},
    actions:{}
}
