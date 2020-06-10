import http from '../utils/http';
import {makeQueryString,makeFormData} from '../utils/libs'

/**
 * 发起请求
 * @param {object} params 请求参数
 */
export const getHomeList = (params) => {
    /**
     * size:params.size;
     * page:params.page;
     * **/
    return http.request({
        url:"api/admin/home/list"+makeQueryString(params),
        method:"get",
    },true,false)
}