import Cookie from 'js-cookie';

export const getIsLogin =()=>{
    return Cookie.get('isLogin')
}

export const setIsLogin = (data)=>{
    return Cookie.set('isLogin',data)
}