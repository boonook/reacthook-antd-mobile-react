import React,{useState,useEffect} from 'react';
import Button from '../../../components/antdMobile/Button';
import Radio from '../../../components/antdMobile/Radio';
import {inject,observer} from "mobx-react";

let LoginPage = inject("appState")(observer((props=>{
    const [value,setValue] = useState(0)

    useEffect(()=>{
        console.log(process.env.NODE_ENV)
    })

    function onLogin(){
        let params = {
            userName:'admin',
            userPwd:'admin'
        }
        props.appState.userState.login(params,props);
    }

    const data = [
        { value: 0, label: 'doctor' },
        { value: 1, label: 'bachelor' },
    ];

    function onChange(e){
        debugger
    }

    return (
        <div>
            <h1>登录界面</h1>
            <Button type={'primary'} icon="check-circle-o" onClick={onLogin} title={'登录'}/>
            <div>
                {
                    data.map(item=>{
                        return <Radio key={item.value}  checked={value === item.value} onChange={onChange} label={item.label}/>
                    })
                }
            </div>
        </div>
    );
})))

export default LoginPage;
