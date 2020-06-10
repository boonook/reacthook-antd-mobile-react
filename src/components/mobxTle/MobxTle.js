import React,{useEffect,useState} from 'react';
import {inject,observer} from 'mobx-react'

let MobxTle = inject("appState")(observer((props=>{
    const [isLogin,setIsLogin] = useState(true)
    useEffect(()=>{
        debugger
        setIsLogin(props.appState.isLogin)
    })
    return (
        <div>
            <p>是否登录：{isLogin?"已登陆":"未登录"}</p>
            <p>mobx状态管理器</p>
        </div>
    );
})))

export default MobxTle;
