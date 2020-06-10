import http from '../utils/http';
/**
 * 用户登录
 * **/
export const login = (params) => {
    return http.request({
        url:"api/admin/auth/login",
        method:"post",
        data:JSON.stringify(params),
        headers:{
            'Content-Type':'application/json'
        }
    },false,false)
}

/**
 * 获取用户信息
 * **/
export const getUserInfo = (params) => {
    return http.request({
        url:"api/admin/auth/userInfo",
        method:"get",
    },true,false)
}