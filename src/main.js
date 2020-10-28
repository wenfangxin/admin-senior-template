import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import cookie from 'js-cookie';
import api from './api/index'
import '../src/assets/css/common.css'
import {Menu,Submenu,MenuItemGroup,MenuItem,Dropdown,DropdownMenu,DropdownItem,Breadcrumb,BreadcrumbItem,FormItem,Form,Input,Button} from 'element-ui';
import '@/assets/css/element-variables.scss'

//禁止产生消息
Vue.config.productionTip = false;
//挂在cookie到vue原型可全局访问
Vue.prototype.$cookie = cookie;
//挂在api到vue原型可全局访问
Vue.prototype.$api = api;

Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItemGroup);
Vue.use(MenuItem)
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(FormItem);
Vue.use(Form);
Vue.use(Input);
Vue.use(Button);






new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
