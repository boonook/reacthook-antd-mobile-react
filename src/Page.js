import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import DocumentTitle from "react-document-title";
import LoginPage from '@pages/auth/login/index';
import Registered from '@pages/auth/registered/index';
import NoFound from '@pages/auth/noFound/index';
import {inject, observer} from "mobx-react";
let Page = inject("appState")(observer((props=>{
    // const [isLogin,setIsLogin] = useState(props.appState.userState.isLogin)
    const [isLogin,setIsLogin] = useState(false)
    console.log(props.appState.userState.isLogin);
    return (
        <Router>
            {isLogin? <Switch>
                <Route path="/" exact render={() => <Redirect to="/app/dashboard/index"/>} />
                <Route path="/app" component={(props)=><App {...props}/>} />
                <Route path="/404" component={(props)=><DocumentTitle title={'404'}><NoFound {...props}/></DocumentTitle>} />
                <Route render={() => <Redirect to="/404" />} />
            </Switch>: <Switch>
                <Route exact path="/" render={() => <Redirect to="/login"  component={(props)=><DocumentTitle title={'登录'}><LoginPage {...props}/></DocumentTitle>} push />} />
                <Route path="/login" component={(props)=><DocumentTitle title={'登录'}><LoginPage {...props}/></DocumentTitle>} />
                <Route path="/registered" component={(props)=><DocumentTitle title={'注册'}><Registered {...props}/></DocumentTitle>} />
                <Route path="/404" component={(props)=><DocumentTitle title={'404'}><NoFound {...props}/></DocumentTitle>} />
                <Route render={() => <Redirect to="/404" />} />
            </Switch>}
        </Router>
    );
})))

export default Page
