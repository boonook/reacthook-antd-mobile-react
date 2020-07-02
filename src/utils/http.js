import axios from 'axios';
import { Toast} from 'antd-mobile';
import config from '@src/config/index';
import appState from '@src/store/index';
/**
 * 请求
 */
const baseUrl = process.env.NODE_ENV+''==='development'?config.baseUrl.dev:config.baseUrl.pro;
/**
 * 定义一个HttpRequest类
 * **/
class HttpRequest {
    constructor(_baseUrl =baseUrl) {
        this.baseUrl = _baseUrl
        this.queue = {}
    }

    // /内置请求参数
    getInsideConfig() {
        ////说明是获取在线人数的接口
        return {baseURL: this.baseUrl,headers: {}}
    }

    handleError(error){
        const message = ((error.message === 'Network Error')?'服务器内部错误!':error.message) || '服务器内部错误'
        if(!error.code) return message
    }

    /**
     * 拦截器
     * @param {object} instance 请求实例
     * @param {string} url 请求路径
     * @param {boolean} withToken 请求是否需要携带token
     */
    interceptors(instance, url, withToken = true) {
        // 请求拦截
        instance.interceptors.request.use(function(config){
            if (withToken) {
                config.headers = {
                    ...config.headers,
                    'Authorization': appState.userState.token||"",
                }
            }
            return config
        }, (error) => {
            return Promise.reject(error)
        })
        // 响应拦截
        instance.interceptors.response.use(function(res){
            if (!res){
                throw new Error('服务器内部错误');
            }
            let result = res.data || {}
            if (typeof result === 'string') {
                try {
                    // result = eval(`(${result})`)
                }catch (e) {
                    return {data:res.data, code :200, rel:true,message:res.message}
                }
            }

            if(res.data instanceof Blob){
                return {data:res.data, code :200, message:res.message, rel:true}
            }
            const {code, data, rel=true,message} = result;

            return {data, code, rel,message}
        }, (error) => {

            const errorMsg = error.message
            const response = (error.response || {}).data || {}
            const msg = response.msg || response.message ||errorMsg || '服务器内服错误'
            // this.destroy(url)
            return Promise.reject(new Error(msg))
        })
    }

    /**
     * 发起请求
     * @param {object} options 请求配置
     * @param {string} options.url 请求地址
     * @param {'GET'|'POST' |'DELETE'|'PUT'|'PATCH'} options.method 请求方法
     * @param {object} options.headers 请求头
     * @param {string} options.headers.Authorization
     * @param {Array<function>} options.transformRequest
     * @param {boolean} withToken
     * @param {boolean} showMsg
     * @return {Promise}
     */
    request(options, withToken = true, showMsg = false) {
        Toast.loading('正在加载...',0);
        const instance = axios.create();
        options = Object.assign(this.getInsideConfig(), options);
        this.interceptors(instance, options.url, withToken)
        return instance(options).then((res) => {
            setTimeout(()=>{
                Toast.hide();
            },2000)
            if(res && res.code+''==='200'){
                if(showMsg && showMsg){
                    Toast.success(res.message,2)
                }
            }else{
                Toast.fail(res.message,2)
                if(res && res.code+''==='202'){
                    ///推出到登陆界面
                    appState.userState.loginOut()
                }
            }
            return res
        }).catch(
            this.handleError
        )
    }
}
/**
 * 导出目的时为了加载静态资源文件时做url的拼接
 * **/
export {
    baseUrl
}
export default new HttpRequest(baseUrl)
