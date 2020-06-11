import Cookie from 'js-cookie';

export const getIsLogin =()=>{
    return Cookie.get('isLogin')
}

export const setIsLogin = (data)=>{
    return Cookie.set('isLogin',data)
}

export const setToken = (data)=>{
    return Cookie.set('token',data)
}

export const getToken = ()=>{
    return Cookie.get('token')
}

export const setUserInfo = (data)=>{
    return Cookie.set('userInfo',data)
}

export const getUserInfo = ()=>{
    return Cookie.get('userInfo')
}