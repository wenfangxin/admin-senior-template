import request from '../../utils/request';


export default {
    /**
     * 登录接口
     * @param params
     * @returns {Promise<AxiosResponse<any>>}
     */
    login(params){
        return request.post('/users/login',params)
    }
}
