import React,{useState,useEffect} from 'react';
import {inject,observer} from "mobx-react";
import Button from '@src/components/antdMobile/Button';
import Radio from '@src/components/antdMobile/Radio';
import Image from '@src/components/antdMobile/Image'
let LoginPage = inject("appState")(observer((props=>{
    const [value,setValue] = useState(0)

    useEffect(()=>{
        console.log(process.env.NODE_ENV)
    },[])

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

    }

    function onRegisteredPage() {
        props.history.push('/registered')
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
            <Image title={'广告1'} alt={'广告1'} height={720} src={'http://apod.nasa.gov/apod/image/1502/HDR_MVMQ20Feb2015ouellet1024.jpg'}/>
            <Image height={720} title={'广告2'} alt={'广告2'} src={'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg'}/>
            <Image height={720} src={'http://a0.att.hudong.com/56/12/01300000164151121576126282411.jpg'}/>
            <Image height={720} src={'http://a0.att.hudong.com/64/76/20300001349415131407760417677.jpg'}/>
            <Image height={720} src={'http://img2.imgtn.bdimg.com/it/u=3984473917,238095211&fm=214&gp=0.jpg'}/>
            <Image height={720} src={'http://a2.att.hudong.com/86/10/01300000184180121920108394217.jpg'}/>
            <Image height={720} src={'http://a3.att.hudong.com/13/41/01300000201800122190411861466.jpg'}/>
            <Image height={720} src={'http://a4.att.hudong.com/47/66/01300000337727123266663353910.jpg'}/>
            <Button type={'primary'} icon="check-circle-o" onClick={onRegisteredPage} title={'注册'}/>
        </div>
    );
})))

export default LoginPage;
