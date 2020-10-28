import axios from 'axios';

axios.defaults.timeout = 5000;                        //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = 'http://api.joooyoo.com';

//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
    //在发送请求之前做某件事
    // const token = '111'
    // config.headers.token = token
    return config
},error => {
    return Promise.error(error);
});

//请求返回拦截，把数据返回到页面之前做些什么...
axios.interceptors.response.use((response) => {
    // console.log(response.data)
    if (response.data.code == '403') {
        redirect('/login');
        //其余错误状态处理
    }else{
        return Promise.resolve(response);
    }

}, function (error) {
    return Promise.reject(error);
});

export default axios
